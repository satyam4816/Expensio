import React, { useState } from 'react';
import {
  Wallet,
  Coins,
  PiggyBank,
  BarChart3,
  Utensils,
  ShoppingBag,
  Car,
  Zap,
  Clapperboard,
  MoreHorizontal
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { LandscapeBanner } from '../components/illustrations/LandscapeBanner';
import { LeafBranch } from '../components/illustrations/LeafBranch';

// 1. Spending Trend Data (Daily Series across September)
const spendingTrendData = [
  { day: '1 Sep', amount: 1800 },
  { day: '5 Sep', amount: 3200 },
  { day: '10 Sep', amount: 2900 },
  { day: '15 Sep', amount: 4320 },
  { day: '20 Sep', amount: 3500 },
  { day: '25 Sep', amount: 5600 },
  { day: '30 Sep', amount: 5100 },
];

// 2. Spending by Category Data (Donut Chart)
const categoryDonutData = [
  { name: 'Food', value: 8955, percent: '30%', color: '#2D5A3C' },
  { name: 'Shopping', value: 5672, percent: '19%', color: '#F87171' },
  { name: 'Transport', value: 4477, percent: '15%', color: '#60A5FA' },
  { name: 'Bills', value: 3582, percent: '12%', color: '#FBBF24' },
  { name: 'Entertainment', value: 2686, percent: '9%', color: '#A78BFA' },
  { name: 'Others', value: 4477, percent: '15%', color: '#38BDF8' },
];

// 3. Monthly Comparison Data (Clustered Bar Chart: Income vs Expense)
const monthlyComparisonData = [
  { month: 'Apr', income: 52000, expense: 38000 },
  { month: 'May', income: 59000, expense: 42000 },
  { month: 'Jun', income: 66000, expense: 44000 },
  { month: 'Jul', income: 68000, expense: 43000 },
  { month: 'Aug', income: 72000, expense: 46000 },
  { month: 'Sep', income: 78500, expense: 58000 },
];

// 4. Top Spending Categories Ranked
const topCategories = [
  {
    name: 'Food',
    percent: 30,
    amount: '₹8,955',
    icon: Utensils,
    iconBg: 'bg-[#FFF7ED] text-[#F97316] dark:bg-[#2C1F16]',
  },
  {
    name: 'Shopping',
    percent: 19,
    amount: '₹5,672',
    icon: ShoppingBag,
    iconBg: 'bg-[#FDF2F8] text-[#EC4899] dark:bg-[#2E1823]',
  },
  {
    name: 'Transport',
    percent: 15,
    amount: '₹4,477',
    icon: Car,
    iconBg: 'bg-[#EFF6FF] text-[#3B82F6] dark:bg-[#1A2638]',
  },
  {
    name: 'Bills',
    percent: 12,
    amount: '₹3,582',
    icon: Zap,
    iconBg: 'bg-[#FFFBEB] text-[#F59E0B] dark:bg-[#2E2616]',
  },
  {
    name: 'Entertainment',
    percent: 9,
    amount: '₹2,686',
    icon: Clapperboard,
    iconBg: 'bg-[#F5F3FF] text-[#8B5CF6] dark:bg-[#241A38]',
  },
];

const timeRanges = [
  'This Month',
  'Last Month',
  'Last 3 Months',
  'This Year',
  'All Time',
];

export function Insights() {
  const [selectedRange, setSelectedRange] = useState('This Month');

  return (
    <div className="space-y-6 max-w-[1140px] mx-auto pb-12">
      {/* 1. Header with Top-Right Scenic Illustration */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="z-10">
          <h1 className="font-serif text-3xl sm:text-[34px] font-bold text-text tracking-tight leading-tight">
            Insights
          </h1>
          <p className="text-xs sm:text-sm text-text-muted mt-1">
            Understand your spending pattern and make better financial decisions.
          </p>
        </div>

        {/* Scenic Background Artwork on Top Right */}
        <div className="absolute right-0 -top-8 w-80 h-28 pointer-events-none hidden lg:block overflow-hidden opacity-85">
          <LandscapeBanner className="opacity-90" />
          <LeafBranch variant="hero" className="absolute right-6 top-0 w-24 h-24 transform -rotate-12 opacity-80" />
        </div>
      </div>

      {/* 2. Time Range Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {timeRanges.map((range) => {
          const isActive = range === selectedRange;
          return (
            <button
              key={range}
              type="button"
              onClick={() => setSelectedRange(range)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[#2D5A3C] text-white shadow-sm font-semibold'
                  : 'bg-[#FFFFFF] dark:bg-[#18231B] text-text border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E23]'
              }`}
            >
              {range}
            </button>
          );
        })}
      </div>

      {/* 3. Four Metric Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {/* Card 1: Total Spending */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Total Spending</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                ₹29,849
              </h3>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#E05252] dark:text-[#F87171]">
            <span>↓</span>
            <span>4.3%</span>
          </div>
        </div>

        {/* Card 2: Total Income */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
              <Coins className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Total Income</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                ₹78,500
              </h3>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#2D5A3C] dark:text-[#4ADE80]">
            <span>↑</span>
            <span>8.2%</span>
          </div>
        </div>

        {/* Card 3: Total Savings */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FCE8E6] dark:bg-[#341D1D] text-[#D93025] dark:text-[#F87171] flex items-center justify-center shrink-0">
              <PiggyBank className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Total Savings</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                ₹48,650
              </h3>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#2D5A3C] dark:text-[#4ADE80]">
            <span>↑</span>
            <span>16.8%</span>
          </div>
        </div>

        {/* Card 4: Transactions */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-4 sm:p-5 shadow-card transition-all hover:shadow-md flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F3E8FD] dark:bg-[#2A1D38] text-[#9333EA] dark:text-[#C084FC] flex items-center justify-center shrink-0">
              <BarChart3 className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-medium">Transactions</p>
              <h3 className="text-lg sm:text-xl font-bold text-text leading-tight mt-0.5">
                24
              </h3>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-[#2D5A3C] dark:text-[#4ADE80] bg-[#E3EEE4] dark:bg-[#1E3323] px-2 py-0.5 rounded-full">
            +3
          </span>
        </div>
      </div>

      {/* 4. Main 2x2 Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: Spending Trend (Area Chart) */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif text-lg font-bold text-text">
              Spending Trend
            </h3>
            <button
              type="button"
              className="text-text/50 hover:text-text p-1 rounded-md"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          <div className="h-[230px] w-full pt-3 relative">
            {/* Custom Tooltip Highlight Pill at 15 Sep */}
            <div className="absolute left-[54%] top-[14%] -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center">
              <div className="bg-[#FFFFFF] dark:bg-[#19241C] border border-[#EBE6DA] dark:border-[#27382C] px-2.5 py-1 rounded-lg shadow-md text-center">
                <p className="text-xs font-bold text-[#2D5A3C] dark:text-[#4ADE80]">₹4,320</p>
                <p className="text-[10px] text-text-muted">15 Sep</p>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#2D5A3C] border-2 border-white dark:border-[#17221A] mt-1 shadow-sm" />
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={spendingTrendData}
                margin={{ top: 15, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2D5A3C" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#2D5A3C" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#748177', fontSize: 11 }}
                  dy={6}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#748177', fontSize: 11 }}
                  ticks={[0, 2000, 4000, 6000, 8000, 10000]}
                  tickFormatter={(val) => (val === 0 ? '0' : `${val / 1000}K`)}
                />
                <Area
                  type="monotone"
                  dataKey="amount"
                  stroke="#2D5A3C"
                  strokeWidth={2.5}
                  fill="url(#trendGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Spending by Category (Donut Chart & Legend) */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif text-lg font-bold text-text">
              Spending by Category
            </h3>
            <button
              type="button"
              className="text-text/50 hover:text-text p-1 rounded-md"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
            {/* Donut Chart with Total in Center */}
            <div className="relative w-48 h-48 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDonutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={54}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categoryDonutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Center Donut Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                <span className="font-bold text-base text-text">₹29,849</span>
                <span className="text-[11px] text-text-muted">Total</span>
              </div>
            </div>

            {/* Category Breakdown Legend */}
            <div className="flex-1 w-full space-y-2 text-xs">
              {categoryDonutData.map((cat) => (
                <div
                  key={cat.name}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-text font-medium truncate">
                      {cat.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-text-muted font-medium w-8 text-right">
                      {cat.percent}
                    </span>
                    <span className="text-text font-semibold w-16 text-right tabular-nums">
                      ₹{cat.value.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart 3: Monthly Comparison (Clustered Bar Chart) */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif text-lg font-bold text-text">
              Monthly Comparison
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D5A3C]" />
                <span>Income</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A3CFA6]" />
                <span>Expense</span>
              </div>
              <button
                type="button"
                className="text-text/50 hover:text-text p-1 rounded-md ml-1"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="h-[230px] w-full pt-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyComparisonData}
                margin={{ top: 15, right: 10, left: -15, bottom: 0 }}
                barGap={4}
              >
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#748177', fontSize: 11 }}
                  dy={6}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#748177', fontSize: 11 }}
                  ticks={[0, 20000, 40000, 60000, 80000, 100000]}
                  tickFormatter={(val) => (val === 0 ? '0' : val === 100000 ? '1L' : `${val / 1000}K`)}
                />
                <Bar dataKey="income" fill="#2D5A3C" radius={[4, 4, 0, 0]} barSize={14} />
                <Bar dataKey="expense" fill="#A3CFA6" radius={[4, 4, 0, 0]} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Top Spending Categories (Ranked Progress Bars) */}
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-serif text-lg font-bold text-text">
              Top Spending Categories
            </h3>
            <button
              type="button"
              className="text-text/50 hover:text-text p-1 rounded-md"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4 pt-1">
            {topCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.name} className="flex items-center gap-3">
                  {/* Category Icon */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${cat.iconBg}`}
                  >
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>

                  {/* Name */}
                  <span className="w-24 text-xs font-semibold text-text truncate">
                    {cat.name}
                  </span>

                  {/* Horizontal Progress Bar */}
                  <div className="flex-1 bg-[#EBE7DD] dark:bg-[#253528] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#2D5A3C] dark:bg-[#4ADE80] h-full rounded-full transition-all duration-500"
                      style={{ width: `${cat.percent * 2.8}%` }}
                    />
                  </div>

                  {/* Percent & Amount */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-text-muted font-medium w-7 text-right">
                      {cat.percent}%
                    </span>
                    <span className="text-xs font-bold text-text w-16 text-right tabular-nums">
                      {cat.amount}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;

