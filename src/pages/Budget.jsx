import React, { useState, useEffect } from 'react';
import {
  Target,
  Layers,
  Plus,
  Plane,
  Laptop,
  PiggyBank,
  MoreHorizontal,
  Calendar,
  ChevronDown,
  Utensils,
  ShoppingBag,
  Car,
  Zap,
  Clapperboard,
  Edit2,
  Trash2
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Modal, Input, Select, Button } from '../components/ui';
import { LandscapeBanner } from '../components/illustrations/LandscapeBanner';
import { LeafBranch } from '../components/illustrations/LeafBranch';

// 1. Initial Savings Goals Data
const initialGoals = [
  {
    id: 1,
    title: 'Trip to Manali',
    category: 'Travel',
    target: 50000,
    saved: 31000,
    percent: 62,
    icon: Plane,
    iconBg: 'bg-[#E6F4EA] text-[#2D5A3C] dark:bg-[#1C2F22] dark:text-[#4ADE80]',
  },
  {
    id: 2,
    title: 'New Laptop',
    category: 'Shopping',
    target: 80000,
    saved: 22400,
    percent: 28,
    icon: Laptop,
    iconBg: 'bg-[#F3E8FD] text-[#9333EA] dark:bg-[#2A1D38] dark:text-[#C084FC]',
  },
  {
    id: 3,
    title: 'Emergency Fund',
    category: 'Savings',
    target: 100000,
    saved: 45000,
    percent: 45,
    icon: PiggyBank,
    iconBg: 'bg-[#FCE8E6] text-[#D93025] dark:bg-[#341D1D] dark:text-[#F87171]',
  },
];

// 2. Category Budgets Data
const initialBudgets = [
  {
    id: 'food',
    name: 'Food',
    monthlyLimit: 10000,
    spent: 8955,
    percent: 90,
    statusVariant: 'danger', // 90% is near limit
    icon: Utensils,
    iconBg: 'bg-[#FFF7ED] text-[#F97316] dark:bg-[#2C1F16]',
  },
  {
    id: 'shopping',
    name: 'Shopping',
    monthlyLimit: 8000,
    spent: 5672,
    percent: 71,
    statusVariant: 'success', // 71% is healthy
    icon: ShoppingBag,
    iconBg: 'bg-[#FDF2F8] text-[#EC4899] dark:bg-[#2E1823]',
  },
  {
    id: 'transport',
    name: 'Transport',
    monthlyLimit: 5000,
    spent: 4477,
    percent: 90,
    statusVariant: 'danger',
    icon: Car,
    iconBg: 'bg-[#EFF6FF] text-[#3B82F6] dark:bg-[#1A2638]',
  },
  {
    id: 'bills',
    name: 'Bills',
    monthlyLimit: 4000,
    spent: 3582,
    percent: 90,
    statusVariant: 'danger',
    icon: Zap,
    iconColor: '#F59E0B',
    iconBg: 'bg-[#FFFBEB] text-[#F59E0B] dark:bg-[#2E2616]',
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    monthlyLimit: 3000,
    spent: 2686,
    percent: 89,
    statusVariant: 'warning',
    icon: Clapperboard,
    iconBg: 'bg-[#F5F3FF] text-[#8B5CF6] dark:bg-[#241A38]',
  },
];

// 3. Category Donut Data
const categoryDonutData = [
  { name: 'Food', value: 8955, percent: '30%', color: '#2D5A3C' },
  { name: 'Shopping', value: 5672, percent: '19%', color: '#F87171' },
  { name: 'Transport', value: 4477, percent: '15%', color: '#60A5FA' },
  { name: 'Bills', value: 3582, percent: '12%', color: '#FBBF24' },
  { name: 'Entertainment', value: 2686, percent: '9%', color: '#A78BFA' },
  { name: 'Others', value: 4477, percent: '15%', color: '#38BDF8' },
];

export function Budget() {
  const [activeTab, setActiveTab] = useState('goals'); // 'goals' | 'budgets'
  const [goals, setGoals] = useState(() => {
    try {
      const saved = localStorage.getItem('expensio:goals');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map((g) => ({
            ...g,
            icon: g.category === 'Travel' ? Plane : g.category === 'Shopping' ? Laptop : PiggyBank
          }));
        }
      }
    } catch (e) {}
    return initialGoals;
  });
  const [budgets, setBudgets] = useState(initialBudgets);

  useEffect(() => {
    try {
      const toStore = goals.map(({ icon, ...rest }) => rest);
      localStorage.setItem('expensio:goals', JSON.stringify(toStore));
    } catch (e) {}
  }, [goals]);
  const [selectedMonth, setSelectedMonth] = useState('Sep 2025');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeActionId, setActiveActionId] = useState(null);

  // New goal form state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Travel');
  const [newTarget, setNewTarget] = useState('');
  const [newSaved, setNewSaved] = useState('');

  const handleCreateGoal = (e) => {
    e.preventDefault();
    if (!newTitle || !newTarget) return;

    const targetVal = parseFloat(newTarget);
    const savedVal = parseFloat(newSaved || 0);
    const pct = Math.round((savedVal / targetVal) * 100);

    const newGoalItem = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      target: targetVal,
      saved: savedVal,
      percent: Math.min(pct, 100),
      icon: newCategory === 'Travel' ? Plane : newCategory === 'Shopping' ? Laptop : PiggyBank,
      iconBg: 'bg-[#E6F4EA] text-[#2D5A3C]',
    };

    setGoals([...goals, newGoalItem]);
    setIsCreateModalOpen(false);
    setNewTitle('');
    setNewTarget('');
    setNewSaved('');
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((g) => g.id !== id));
    setActiveActionId(null);
  };

  return (
    <div className="space-y-7 max-w-[1140px] mx-auto pb-12">
      {/* 1. Header with Scenic Top-Right Illustration */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="z-10">
          <h1 className="font-serif text-3xl sm:text-[34px] font-bold text-text tracking-tight leading-tight">
            Goals & Budgets
          </h1>
          <p className="text-xs sm:text-sm text-text-muted mt-1">
            Set savings goals and manage your spending with budgets.
          </p>
        </div>

        {/* Scenic Background Artwork on Top Right */}
        <div className="absolute right-0 -top-8 w-80 h-28 pointer-events-none hidden lg:block overflow-hidden opacity-85">
          <LandscapeBanner className="opacity-90" />
          <LeafBranch variant="hero" className="absolute right-6 top-0 w-24 h-24 transform -rotate-12 opacity-80" />
        </div>
      </div>

      {/* 2. Top Segmented Pill Tabs (Goals | Budgets) */}
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => setActiveTab('goals')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'goals'
              ? 'bg-[#2D5A3C] text-white shadow-sm font-semibold'
              : 'bg-[#FFFFFF] dark:bg-[#18231B] text-text border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E23]'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>Goals</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('budgets')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'budgets'
              ? 'bg-[#2D5A3C] text-white shadow-sm font-semibold'
              : 'bg-[#FFFFFF] dark:bg-[#18231B] text-text border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E23]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Budgets</span>
        </button>
      </div>

      {/* 3. Section: Your Savings Goals */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl font-bold text-text">
            Your Savings Goals
          </h2>
          <button
            type="button"
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-[#2D5A3C] hover:bg-[#22472F] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Create Goal</span>
          </button>
        </div>

        {/* Savings Goals Grid (3 Cards with continuous landscape background) */}
        <div className="relative rounded-2xl overflow-hidden p-0.5">
          {/* Subtle Panoramic Scenic Hills at the base of goals */}
          <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none opacity-40 z-0 overflow-hidden">
            <LandscapeBanner className="w-full h-full object-bottom" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <div
                  key={goal.id}
                  className="bg-[#FFFFFF]/90 dark:bg-[#17221A]/90 backdrop-blur-sm border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 shadow-card hover:shadow-md transition-all flex flex-col justify-between"
                >
                  {/* Top: Icon, Titles & Actions */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${goal.iconBg}`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text text-sm sm:text-base leading-snug">
                          {goal.title}
                        </h3>
                        <p className="text-xs text-text-muted mt-0.5">
                          {goal.category} · Target: ₹{goal.target.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>

                    {/* Action dropdown button */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveActionId(activeActionId === goal.id ? null : goal.id)
                        }
                        className="text-text/50 hover:text-text p-1 rounded-md"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>

                      {activeActionId === goal.id && (
                        <div className="absolute right-0 top-7 z-20 bg-white dark:bg-[#1A261E] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl shadow-lg py-1 w-24 text-left animate-scale-up">
                          <button
                            type="button"
                            onClick={() => handleDeleteGoal(goal.id)}
                            className="w-full px-3 py-1.5 text-xs text-[#E05252] hover:bg-[#FEE2E2]/50 flex items-center gap-2"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Middle: Progress Bar & Percentage */}
                  <div className="pt-4 space-y-1.5">
                    <div className="flex justify-end text-xs font-bold text-text">
                      <span>{goal.percent}%</span>
                    </div>
                    <div className="w-full bg-[#EBE7DD] dark:bg-[#253528] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#2D5A3C] dark:bg-[#4ADE80] h-full rounded-full transition-all duration-500"
                        style={{ width: `${goal.percent}%` }}
                      />
                    </div>
                  </div>

                  {/* Bottom: Saved vs Total Target */}
                  <div className="pt-3 flex items-center justify-between text-xs font-semibold text-text">
                    <span className="text-[#2D5A3C] dark:text-[#4ADE80]">
                      ₹{goal.saved.toLocaleString('en-IN')} saved
                    </span>
                    <span className="text-text-muted font-medium">
                      ₹{goal.target.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Section: Budgets by Category */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="font-serif text-xl font-bold text-text">
              Budgets by Category
            </h2>
            <p className="text-xs text-text-muted mt-0.5">
              Set monthly spending limits and stay in control.
            </p>
          </div>

          {/* Month Selector Pill */}
          <div className="relative self-start sm:self-auto">
            <button
              type="button"
              className="flex items-center gap-2 bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-text shadow-subtle hover:bg-[#FAF8F3] transition-all"
            >
              <Calendar className="w-4 h-4 text-text/70" />
              <span>{selectedMonth}</span>
              <ChevronDown className="w-3.5 h-3.5 text-text/60 ml-0.5" />
            </button>
          </div>
        </div>

        {/* Budgets Card Container (Donut Chart Left + Category Rows Right) */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-7 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (5 cols): Donut Chart & Compact Legend */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-6">
              {/* Donut Chart with Total Spent in Center */}
              <div className="relative w-44 h-44 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryDonutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={48}
                      outerRadius={72}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryDonutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Center Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                  <span className="font-bold text-base sm:text-lg text-text">
                    ₹29,849
                  </span>
                  <span className="text-[11px] text-text-muted">Total Spent</span>
                </div>
              </div>

              {/* Compact Legend */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-xs">
                {categoryDonutData.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-text font-medium">{cat.name}</span>
                    <span className="text-text-muted text-[11px] font-normal ml-auto">
                      {cat.percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (7 cols): Category Budget Limits & Progress Bars */}
            <div className="lg:col-span-7 space-y-4">
              {budgets.map((b) => {
                const Icon = b.icon;
                const isOver = b.percent >= 90;
                const isHealthy = b.percent < 80;

                return (
                  <div
                    key={b.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 p-1 rounded-xl hover:bg-[#FAF8F3]/70 dark:hover:bg-[#1D2B20]/40 transition-colors"
                  >
                    {/* Left: Icon, Name & Monthly Limit */}
                    <div className="flex items-center gap-3 sm:w-44 shrink-0">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${b.iconBg}`}
                      >
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text">{b.name}</p>
                        <p className="text-[11px] text-text-muted">
                          ₹{b.monthlyLimit.toLocaleString('en-IN')} / month
                        </p>
                      </div>
                    </div>

                    {/* Center: Horizontal Progress Bar */}
                    <div className="flex-1 bg-[#EBE7DD] dark:bg-[#253528] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#2D5A3C] dark:bg-[#4ADE80] h-full rounded-full transition-all duration-500"
                        style={{ width: `${b.percent}%` }}
                      />
                    </div>

                    {/* Right: Spent Amount & Status Badge */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <span className="text-xs font-bold text-text tabular-nums">
                        ₹{b.spent.toLocaleString('en-IN')} spent
                      </span>

                      {/* Status Percent Tag */}
                      <span
                        className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${
                          isOver
                            ? 'bg-[#FDE8E8] text-[#D93025] dark:bg-[#341D1D] dark:text-[#F87171]'
                            : isHealthy
                            ? 'bg-[#E6F4EA] text-[#2D5A3C] dark:bg-[#1C2F22] dark:text-[#4ADE80]'
                            : 'bg-[#FEF3C7] text-[#D97706] dark:bg-[#332414] dark:text-[#FBBF24]'
                        }`}
                      >
                        {b.percent}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Create Savings Goal Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Savings Goal"
        description="Set a target to keep yourself motivated and on track."
      >
        <form onSubmit={handleCreateGoal} className="space-y-4 mt-3">
          <Input
            label="Goal Name"
            placeholder="e.g. Trip to Goa, New iPhone, Car Downpayment"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
            autoFocus
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Target Amount (₹)"
              type="number"
              placeholder="50000"
              prefix="₹"
              value={newTarget}
              onChange={(e) => setNewTarget(e.target.value)}
              required
            />
            <Input
              label="Already Saved (₹)"
              type="number"
              placeholder="0"
              prefix="₹"
              value={newSaved}
              onChange={(e) => setNewSaved(e.target.value)}
            />
          </div>

          <Select
            label="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            options={[
              { value: 'Travel', label: 'Travel' },
              { value: 'Shopping', label: 'Shopping' },
              { value: 'Savings', label: 'Savings & Emergency' },
              { value: 'Education', label: 'Education' },
              { value: 'Other', label: 'Other' },
            ]}
          />

          <div className="flex justify-end gap-2.5 pt-3">
            <Button variant="secondary" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Goal
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Budget;
