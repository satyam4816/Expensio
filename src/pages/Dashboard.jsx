import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Calendar,
  ChevronDown,
  Briefcase,
  ShoppingCart,
  Coins,
  Target,
  ArrowRight,
  Utensils,
  Car,
  Landmark,
  ShoppingBag
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { LandscapeBanner } from '../components/illustrations/LandscapeBanner';
import { LeafBranch } from '../components/illustrations/LeafBranch';

const monthlySpendingData = [
  { month: 'Apr', amount: 2600 },
  { month: 'May', amount: 4400 },
  { month: 'Jun', amount: 5100 },
  { month: 'Jul', amount: 6200 },
  { month: 'Aug', amount: 5800 },
  { month: 'Sep', amount: 7900, isCurrent: true },
];

const recentTransactionsData = [
  {
    id: 1,
    title: 'Dinner with friends',
    category: 'Food',
    date: 'Today',
    amount: -1250,
    icon: Utensils,
    iconBg: 'bg-[#EAF3EC] text-[#2D5A3C] dark:bg-[#1E2E22] dark:text-[#6CB782]',
  },
  {
    id: 2,
    title: 'Uber Ride',
    category: 'Transport',
    date: 'Yesterday',
    amount: -420,
    icon: Car,
    iconBg: 'bg-[#EBF3FC] text-[#2563EB] dark:bg-[#1C2838] dark:text-[#60A5FA]',
  },
  {
    id: 3,
    title: 'Salary Credited',
    category: 'Income',
    date: '01 Sep',
    amount: 78500,
    icon: Landmark,
    iconBg: 'bg-[#E6F4EA] text-[#1E7E34] dark:bg-[#1B2F21] dark:text-[#4ADE80]',
  },
  {
    id: 4,
    title: 'Amazon Shopping',
    category: 'Shopping',
    date: '31 Aug',
    amount: -2399,
    icon: ShoppingBag,
    iconBg: 'bg-[#FCE8E6] text-[#D93025] dark:bg-[#341D1D] dark:text-[#F87171]',
  },
];

export function Dashboard() {
  const { user } = useAuth();
  const [selectedMonth, setSelectedMonth] = useState('Sep 2025');

  const greetingName = user?.name ? user.name.split(' ')[0] : 'Sattu';

  return (
    <div className="space-y-6 max-w-[1140px] mx-auto pb-8">
      {/* 1. Header & Greeting Row */}
      <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-text/80 flex items-center gap-1.5">
            Good Morning, {greetingName} <span className="text-base">👋</span>
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-[34px] font-bold text-text tracking-tight mt-1 leading-snug">
            Your Financial Overview
          </h1>
          <p className="text-xs sm:text-sm text-text-muted mt-1">
            Track, plan and grow your money with calm and clarity.
          </p>
        </div>

        {/* Month Selector Pill */}
        <div className="relative self-start sm:self-auto z-10">
          <button
            type="button"
            className="flex items-center gap-2 bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-text shadow-subtle hover:bg-[#FAF8F3] dark:hover:bg-[#1E2B21] transition-all"
          >
            <Calendar className="w-4 h-4 text-text/70" />
            <span>{selectedMonth}</span>
            <ChevronDown className="w-3.5 h-3.5 text-text/60 ml-0.5" />
          </button>
        </div>

        {/* Decorative Hanging Leaves Illustration on Top Right */}
        <div className="absolute right-28 -top-6 w-32 h-24 pointer-events-none hidden lg:block overflow-hidden opacity-90">
          <LeafBranch variant="hero" className="w-full h-full transform -rotate-12 scale-110" />
        </div>
      </div>

      {/* 2. Total Balance Hero Banner Card */}
      <div className="relative w-full rounded-[20px] border border-[#E6E1D4] dark:border-[#253528] bg-[#F7F4EB] dark:bg-[#151F17] shadow-banner overflow-hidden min-h-[175px] sm:min-h-[195px] flex items-center p-6 sm:p-8">
        {/* Scenic Mountain Landscape & Pine Silhouette SVG Background */}
        <LandscapeBanner />

        {/* Card Content (Left Aligned) */}
        <div className="relative z-10 max-w-sm">
          <p className="text-xs sm:text-sm font-medium text-text/75 tracking-wide">
            Total Balance
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-text tracking-tight mt-1 font-sans">
            ₹48,650.75
          </h2>
          <div className="flex items-center gap-1.5 mt-2.5 text-xs font-semibold text-[#2D5A3C] dark:text-[#4ADE80]">
            <span>↑</span>
            <span>+12.5% from last month</span>
          </div>
        </div>
      </div>

      {/* 3. Four Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Card 1: Income */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Income</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                ₹78,500
              </h3>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#2D5A3C] dark:text-[#4ADE80]">
            <span>↑</span>
            <span>+8.2%</span>
          </div>
        </div>

        {/* Card 2: Expenses */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FCE8E6] dark:bg-[#341D1D] text-[#D93025] dark:text-[#F87171] flex items-center justify-center shrink-0">
              <ShoppingCart className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Expenses</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                ₹29,849
              </h3>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#E05252] dark:text-[#F87171]">
            <span>↓</span>
            <span>-4.3%</span>
          </div>
        </div>

        {/* Card 3: Savings */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] dark:bg-[#1B293C] text-[#1A73E8] dark:text-[#60A5FA] flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Savings</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                ₹48,650
              </h3>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#2D5A3C] dark:text-[#4ADE80]">
            <span>↑</span>
            <span>+16.8%</span>
          </div>
        </div>

        {/* Card 4: Active Goals */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3E8FD] dark:bg-[#2A1D38] text-[#9333EA] dark:text-[#C084FC] flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Active Goals</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                3
              </h3>
            </div>
          </div>
          <Link
            to="/app/budget"
            aria-label="View Active Goals"
            className="w-8 h-8 rounded-full flex items-center justify-center text-text/60 hover:text-text hover:bg-[#F2EEE4] dark:hover:bg-[#233225] transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 4. Bottom Grid: Monthly Spending Bar Chart & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* Left Column (7 cols): Monthly Spending Bar Chart */}
        <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg font-bold text-text">
              Monthly Spending
            </h3>
            <div className="text-right">
              <span className="font-bold text-sm sm:text-base text-text">
                ₹29,849
              </span>
              <span className="text-xs text-text-muted ml-1.5 font-normal">
                This Month
              </span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="h-[210px] w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlySpendingData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                barSize={38}
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#748177', fontSize: 12, fontWeight: 500 }}
                  dy={6}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#748177', fontSize: 11 }}
                  ticks={[0, 2000, 4000, 6000, 8000]}
                  tickFormatter={(val) => (val === 0 ? '0' : `${val / 1000}K`)}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(45, 90, 60, 0.05)' }}
                  formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Spending']}
                  contentStyle={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    fontSize: '12px',
                    color: 'var(--text)'
                  }}
                />
                <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                  {monthlySpendingData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.isCurrent ? '#2D5A3C' : '#B9D5BE'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column (5 cols): Recent Transactions */}
        <div className="lg:col-span-5 bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3 pb-1">
            <h3 className="font-serif text-lg font-bold text-text">
              Recent Transactions
            </h3>
            <Link
              to="/app/transactions"
              className="text-xs font-semibold text-text/80 hover:text-[#2D5A3C] dark:hover:text-[#4ADE80] flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Transaction Items */}
          <div className="divide-y divide-[#F2EFE8] dark:divide-[#223025]">
            {recentTransactionsData.map((tx) => {
              const Icon = tx.icon || ShoppingBag;
              const iconBg = tx.iconBg || 'bg-[#EAF3EC] text-[#2D5A3C] dark:bg-[#1E2E22] dark:text-[#6CB782]';
              const isPositive = tx.amount > 0;
              return (
                <div
                  key={tx.id}
                  className="py-3 flex items-center justify-between gap-3 first:pt-1 last:pb-1 group cursor-pointer hover:bg-[#FAF8F3]/60 dark:hover:bg-[#1D2B20]/40 -mx-2 px-2 rounded-xl transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}
                    >
                      <Icon className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div className="min-w-0 truncate">
                      <p className="text-sm font-semibold text-text truncate">
                        {tx.title}
                      </p>
                      <p className="text-xs text-text-muted mt-0.5">
                        {tx.category} · {tx.date}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-sm font-bold shrink-0 tabular-nums ${
                      isPositive
                        ? 'text-[#2D5A3C] dark:text-[#4ADE80]'
                        : 'text-text'
                    }`}
                  >
                    {isPositive ? '+ ' : '- '}₹
                    {Math.abs(tx.amount).toLocaleString('en-IN')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
