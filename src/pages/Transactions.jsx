import React, { useState, useMemo, useEffect } from 'react';
import {
  Calendar,
  LayoutGrid,
  CreditCard,
  ChevronDown,
  Plus,
  Utensils,
  Car,
  Landmark,
  ShoppingBag,
  Zap,
  Heart,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Trash2,
  Edit2
} from 'lucide-react';
import { Modal, Input, Select, Button } from '../components/ui';
import { LandscapeBanner } from '../components/illustrations/LandscapeBanner';
import { LeafBranch } from '../components/illustrations/LeafBranch';

// Helper to resolve icon & styling safely from category name
const getCategoryIcon = (category) => {
  const cat = String(category || '').toLowerCase();
  if (cat.includes('food')) {
    return { Icon: Utensils, bg: 'bg-[#FFF7ED] text-[#F97316] dark:bg-[#2C1F16]' };
  }
  if (cat.includes('transport') || cat.includes('uber') || cat.includes('ride')) {
    return { Icon: Car, bg: 'bg-[#EFF6FF] text-[#3B82F6] dark:bg-[#1A2638]' };
  }
  if (cat.includes('income') || cat.includes('salary') || cat.includes('freelance')) {
    return { Icon: Landmark, bg: 'bg-[#F0FDF4] text-[#16A34A] dark:bg-[#162B1D]' };
  }
  if (cat.includes('shopping') || cat.includes('amazon')) {
    return { Icon: ShoppingBag, bg: 'bg-[#FDF2F8] text-[#EC4899] dark:bg-[#2E1823]' };
  }
  if (cat.includes('bill') || cat.includes('electric') || cat.includes('recharge')) {
    return { Icon: Zap, bg: 'bg-[#FEFCE8] text-[#EAB308] dark:bg-[#2C2715]' };
  }
  if (cat.includes('health') || cat.includes('medical') || cat.includes('doctor')) {
    return { Icon: Heart, bg: 'bg-[#FEF2F2] text-[#EF4444] dark:bg-[#2D1919]' };
  }
  return { Icon: ShoppingBag, bg: 'bg-[#F4F1E8] text-[#2D5A3C] dark:bg-[#213024]' };
};

// 24 realistic Indian transactions matching the screenshot exactly on page 1
const initialTransactions = [
  {
    id: 1,
    date: '03 Sep 2025',
    description: 'Dinner with friends',
    category: 'Food',
    type: 'expense',
    paymentMethod: 'HDFC •••• 4821',
    paymentType: 'card',
    amount: -1250,
    icon: Utensils,
    iconColor: '#F97316',
    iconBg: 'bg-[#FFF7ED] text-[#F97316] dark:bg-[#2C1F16]',
  },
  {
    id: 2,
    date: '02 Sep 2025',
    description: 'Uber Ride',
    category: 'Transport',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -420,
    icon: Car,
    iconColor: '#3B82F6',
    iconBg: 'bg-[#EFF6FF] text-[#3B82F6] dark:bg-[#1A2638]',
  },
  {
    id: 3,
    date: '01 Sep 2025',
    description: 'Salary Credited',
    category: 'Income',
    type: 'income',
    paymentMethod: 'Bank Transfer',
    paymentType: 'bank',
    amount: 78500,
    icon: Landmark,
    iconColor: '#16A34A',
    iconBg: 'bg-[#F0FDF4] text-[#16A34A] dark:bg-[#162B1D]',
  },
  {
    id: 4,
    date: '31 Aug 2025',
    description: 'Amazon Shopping',
    category: 'Shopping',
    type: 'expense',
    paymentMethod: 'SBI •••• 6678',
    paymentType: 'card',
    amount: -2399,
    icon: ShoppingBag,
    iconColor: '#EC4899',
    iconBg: 'bg-[#FDF2F8] text-[#EC4899] dark:bg-[#2E1823]',
  },
  {
    id: 5,
    date: '30 Aug 2025',
    description: 'Electricity Bill',
    category: 'Bills',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -1820,
    icon: Zap,
    iconColor: '#F59E0B',
    iconBg: 'bg-[#FFFBEB] text-[#F59E0B] dark:bg-[#2E2616]',
  },
  {
    id: 6,
    date: '29 Aug 2025',
    description: 'Gym Membership',
    category: 'Health',
    type: 'expense',
    paymentMethod: 'HDFC •••• 4821',
    paymentType: 'card',
    amount: -999,
    icon: Heart,
    iconColor: '#EF4444',
    iconBg: 'bg-[#FEF2F2] text-[#EF4444] dark:bg-[#2D1919]',
  },
  // Page 2 & subsequent items (up to 24 total)
  {
    id: 7,
    date: '28 Aug 2025',
    description: 'Swiggy Gourmet Delivery',
    category: 'Food',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -850,
    icon: Utensils,
    iconColor: '#F97316',
    iconBg: 'bg-[#FFF7ED] text-[#F97316] dark:bg-[#2C1F16]',
  },
  {
    id: 8,
    date: '27 Aug 2025',
    description: 'Metro Smart Card Recharge',
    category: 'Transport',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -500,
    icon: Car,
    iconColor: '#3B82F6',
    iconBg: 'bg-[#EFF6FF] text-[#3B82F6] dark:bg-[#1A2638]',
  },
  {
    id: 9,
    date: '26 Aug 2025',
    description: 'Freelance Design Consulting',
    category: 'Income',
    type: 'income',
    paymentMethod: 'Bank Transfer',
    paymentType: 'bank',
    amount: 15000,
    icon: Landmark,
    iconColor: '#16A34A',
    iconBg: 'bg-[#F0FDF4] text-[#16A34A] dark:bg-[#162B1D]',
  },
  {
    id: 10,
    date: '25 Aug 2025',
    description: 'Airtel Broadband Fiber',
    category: 'Bills',
    type: 'expense',
    paymentMethod: 'HDFC •••• 4821',
    paymentType: 'card',
    amount: -1179,
    icon: Zap,
    iconColor: '#F59E0B',
    iconBg: 'bg-[#FFFBEB] text-[#F59E0B] dark:bg-[#2E2616]',
  },
  {
    id: 11,
    date: '24 Aug 2025',
    description: 'Pharmacy & Vitamins',
    category: 'Health',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -640,
    icon: Heart,
    iconColor: '#EF4444',
    iconBg: 'bg-[#FEF2F2] text-[#EF4444] dark:bg-[#2D1919]',
  },
  {
    id: 12,
    date: '23 Aug 2025',
    description: 'Uniqlo Casual Shirt',
    category: 'Shopping',
    type: 'expense',
    paymentMethod: 'SBI •••• 6678',
    paymentType: 'card',
    amount: -2490,
    icon: ShoppingBag,
    iconColor: '#EC4899',
    iconBg: 'bg-[#FDF2F8] text-[#EC4899] dark:bg-[#2E1823]',
  },
  {
    id: 13,
    date: '22 Aug 2025',
    description: 'Blue Tokai Coffee & Bakery',
    category: 'Food',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -380,
    icon: Utensils,
    iconColor: '#F97316',
    iconBg: 'bg-[#FFF7ED] text-[#F97316] dark:bg-[#2C1F16]',
  },
  {
    id: 14,
    date: '20 Aug 2025',
    description: 'Auto Rickshaw & Metro',
    category: 'Transport',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -120,
    icon: Car,
    iconColor: '#3B82F6',
    iconBg: 'bg-[#EFF6FF] text-[#3B82F6] dark:bg-[#1A2638]',
  },
  {
    id: 15,
    date: '19 Aug 2025',
    description: 'Stock Dividends Credit',
    category: 'Income',
    type: 'income',
    paymentMethod: 'Bank Transfer',
    paymentType: 'bank',
    amount: 3200,
    icon: Landmark,
    iconColor: '#16A34A',
    iconBg: 'bg-[#F0FDF4] text-[#16A34A] dark:bg-[#162B1D]',
  },
  {
    id: 16,
    date: '18 Aug 2025',
    description: 'Gas Cylinder Booking',
    category: 'Bills',
    type: 'expense',
    paymentMethod: 'HDFC •••• 4821',
    paymentType: 'card',
    amount: -950,
    icon: Zap,
    iconColor: '#F59E0B',
    iconBg: 'bg-[#FFFBEB] text-[#F59E0B] dark:bg-[#2E2616]',
  },
  {
    id: 17,
    date: '17 Aug 2025',
    description: 'Decathlon Sport Socks',
    category: 'Shopping',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -499,
    icon: ShoppingBag,
    iconColor: '#EC4899',
    iconBg: 'bg-[#FDF2F8] text-[#EC4899] dark:bg-[#2E1823]',
  },
  {
    id: 18,
    date: '16 Aug 2025',
    description: 'Dental Checkup Visit',
    category: 'Health',
    type: 'expense',
    paymentMethod: 'SBI •••• 6678',
    paymentType: 'card',
    amount: -1500,
    icon: Heart,
    iconColor: '#EF4444',
    iconBg: 'bg-[#FEF2F2] text-[#EF4444] dark:bg-[#2D1919]',
  },
  {
    id: 19,
    date: '15 Aug 2025',
    description: 'Independence Day Brunch',
    category: 'Food',
    type: 'expense',
    paymentMethod: 'HDFC •••• 4821',
    paymentType: 'card',
    amount: -2100,
    icon: Utensils,
    iconColor: '#F97316',
    iconBg: 'bg-[#FFF7ED] text-[#F97316] dark:bg-[#2C1F16]',
  },
  {
    id: 20,
    date: '14 Aug 2025',
    description: 'Petrol Fuel Shell Station',
    category: 'Transport',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -2000,
    icon: Car,
    iconColor: '#3B82F6',
    iconBg: 'bg-[#EFF6FF] text-[#3B82F6] dark:bg-[#1A2638]',
  },
  {
    id: 21,
    date: '12 Aug 2025',
    description: 'Cashback Reward Credit',
    category: 'Income',
    type: 'income',
    paymentMethod: 'Bank Transfer',
    paymentType: 'bank',
    amount: 450,
    icon: Landmark,
    iconColor: '#16A34A',
    iconBg: 'bg-[#F0FDF4] text-[#16A34A] dark:bg-[#162B1D]',
  },
  {
    id: 22,
    date: '10 Aug 2025',
    description: 'Water Utility Bill',
    category: 'Bills',
    type: 'expense',
    paymentMethod: 'UPI',
    paymentType: 'upi',
    amount: -320,
    icon: Zap,
    iconColor: '#F59E0B',
    iconBg: 'bg-[#FFFBEB] text-[#F59E0B] dark:bg-[#2E2616]',
  },
  {
    id: 23,
    date: '08 Aug 2025',
    description: 'Bookstore Hardcover Novels',
    category: 'Shopping',
    type: 'expense',
    paymentMethod: 'HDFC •••• 4821',
    paymentType: 'card',
    amount: -1250,
    icon: ShoppingBag,
    iconColor: '#EC4899',
    iconBg: 'bg-[#FDF2F8] text-[#EC4899] dark:bg-[#2E1823]',
  },
  {
    id: 24,
    date: '05 Aug 2025',
    description: 'Routine Health Check Lab Test',
    category: 'Health',
    type: 'expense',
    paymentMethod: 'SBI •••• 6678',
    paymentType: 'card',
    amount: -1800,
    icon: Heart,
    iconColor: '#EF4444',
    iconBg: 'bg-[#FEF2F2] text-[#EF4444] dark:bg-[#2D1919]',
  },
];

export function Transactions() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem('expensio:expenses');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const customIds = new Set(parsed.map(p => p.id));
          const rest = initialTransactions.filter(t => !customIds.has(t.id));
          return [...parsed, ...rest];
        }
      }
    } catch (e) {
      // fallback
    }
    return initialTransactions;
  });

  useEffect(() => {
    try {
      const toStore = transactions.map(({ icon, ...rest }) => rest);
      localStorage.setItem('expensio:expenses', JSON.stringify(toStore));
    } catch (e) {
      // ignore
    }
  }, [transactions]);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'income' | 'expense'
  const [selectedMonth, setSelectedMonth] = useState('This Month');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPayment, setSelectedPayment] = useState('All Payment Methods');
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeActionId, setActiveActionId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // New transaction form state
  const [newDesc, setNewDesc] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newCategory, setNewCategory] = useState('Food');
  const [newType, setNewType] = useState('expense');
  const [newPayment, setNewPayment] = useState('UPI');

  // Filter transactions
  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      // Tab filter
      if (activeTab === 'income' && tx.type !== 'income') return false;
      if (activeTab === 'expense' && tx.type !== 'expense') return false;

      // Category filter
      if (selectedCategory !== 'All Categories' && tx.category !== selectedCategory) {
        return false;
      }

      // Payment method filter
      if (selectedPayment !== 'All Payment Methods') {
        if (selectedPayment === 'UPI' && !tx.paymentMethod.includes('UPI')) return false;
        if (selectedPayment === 'Cards' && !tx.paymentMethod.includes('••••')) return false;
        if (selectedPayment === 'Bank Transfer' && !tx.paymentMethod.includes('Bank Transfer')) return false;
      }

      return true;
    });
  }, [transactions, activeTab, selectedCategory, selectedPayment]);

  // Pagination (6 items per page matching the screenshot)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage) || 1;
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTransactions.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTransactions, currentPage]);

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    setDeleteConfirmId(null);
    setActiveActionId(null);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newAmount || !newDesc) return;

    const amt = parseFloat(newAmount);
    const isIncome = newType === 'income';

    const newItem = {
      id: Date.now(),
      date: 'Today',
      description: newDesc,
      category: newCategory,
      type: newType,
      paymentMethod: newPayment,
      paymentType: newPayment.toLowerCase().includes('card') ? 'card' : newPayment.toLowerCase(),
      amount: isIncome ? Math.abs(amt) : -Math.abs(amt),
      icon: newCategory === 'Food' ? Utensils : newCategory === 'Transport' ? Car : newCategory === 'Income' ? Landmark : ShoppingBag,
      iconColor: isIncome ? '#16A34A' : '#F97316',
      iconBg: isIncome ? 'bg-[#F0FDF4] text-[#16A34A]' : 'bg-[#FFF7ED] text-[#F97316]',
    };

    setTransactions([newItem, ...transactions]);
    setIsAddModalOpen(false);
    setNewDesc('');
    setNewAmount('');
  };

  return (
    <div className="space-y-6 max-w-[1140px] mx-auto pb-12">
      {/* 1. Header with Scenic Top-Right Illustration & Add Transaction Button */}
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 pt-1">
        {/* Title & Subtitle */}
        <div className="z-10">
          <h1 className="font-serif text-3xl sm:text-[34px] font-bold text-text tracking-tight leading-tight">
            Transactions
          </h1>
          <p className="text-xs sm:text-sm text-text-muted mt-1">
            All your income and expenses in one place.
          </p>
        </div>

        {/* Scenic Background and + Add Transaction Button */}
        <div className="relative flex items-center justify-end">
          {/* Subtle Mountain Sunset Silhouette in background behind button */}
          <div className="absolute right-0 -top-8 w-80 h-28 pointer-events-none hidden lg:block overflow-hidden opacity-85">
            <LandscapeBanner className="opacity-90" />
            <LeafBranch variant="hero" className="absolute right-4 top-0 w-24 h-24 transform -rotate-12 opacity-80" />
          </div>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="relative z-10 bg-[#2D5A3C] hover:bg-[#22472F] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add Transaction</span>
          </button>
        </div>
      </div>

      {/* 2. Top Pill Filter Tabs (All Transactions | Income | Expenses) */}
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={() => { setActiveTab('all'); setCurrentPage(1); }}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'all'
              ? 'bg-[#2D5A3C] text-white shadow-sm font-semibold'
              : 'bg-[#FFFFFF] dark:bg-[#18231B] text-text border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E23]'
          }`}
        >
          All Transactions
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('income'); setCurrentPage(1); }}
          className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'income'
              ? 'bg-[#2D5A3C] text-white shadow-sm font-semibold'
              : 'bg-[#FFFFFF] dark:bg-[#18231B] text-text border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E23]'
          }`}
        >
          <span className="text-[#16A34A] font-bold">↑</span>
          <span>Income</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('expense'); setCurrentPage(1); }}
          className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            activeTab === 'expense'
              ? 'bg-[#2D5A3C] text-white shadow-sm font-semibold'
              : 'bg-[#FFFFFF] dark:bg-[#18231B] text-text border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E23]'
          }`}
        >
          <span className="text-[#E05252] font-bold">↓</span>
          <span>Expenses</span>
        </button>
      </div>

      {/* 3. Secondary Dropdown Filter Pills */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {/* Dropdown 1: Time / Month */}
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="appearance-none bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] text-text text-xs sm:text-sm font-medium rounded-xl pl-9 pr-8 py-2 shadow-subtle cursor-pointer outline-none hover:bg-[#FAF8F3] transition-colors"
          >
            <option value="This Month">This Month</option>
            <option value="Last Month">Last Month</option>
            <option value="All Time">All Time</option>
          </select>
          <Calendar className="w-4 h-4 text-text/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <ChevronDown className="w-3.5 h-3.5 text-text/60 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Dropdown 2: Categories */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
            className="appearance-none bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] text-text text-xs sm:text-sm font-medium rounded-xl pl-9 pr-8 py-2 shadow-subtle cursor-pointer outline-none hover:bg-[#FAF8F3] transition-colors"
          >
            <option value="All Categories">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Income">Income</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Health">Health</option>
          </select>
          <LayoutGrid className="w-4 h-4 text-text/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <ChevronDown className="w-3.5 h-3.5 text-text/60 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Dropdown 3: Payment Methods */}
        <div className="relative">
          <select
            value={selectedPayment}
            onChange={(e) => { setSelectedPayment(e.target.value); setCurrentPage(1); }}
            className="appearance-none bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] text-text text-xs sm:text-sm font-medium rounded-xl pl-9 pr-8 py-2 shadow-subtle cursor-pointer outline-none hover:bg-[#FAF8F3] transition-colors"
          >
            <option value="All Payment Methods">All Payment Methods</option>
            <option value="UPI">UPI</option>
            <option value="Cards">Cards (HDFC / SBI)</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
          <CreditCard className="w-4 h-4 text-text/70 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <ChevronDown className="w-3.5 h-3.5 text-text/60 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* 4. Main Transactions Data Card & Table */}
      <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[680px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-[#F0ECE1] dark:border-[#243428] text-xs font-semibold text-text/80 tracking-normal">
                <th className="py-4 px-5">Date</th>
                <th className="py-4 px-5">Description</th>
                <th className="py-4 px-5">Category</th>
                <th className="py-4 px-5">Payment Method</th>
                <th className="py-4 px-5 text-right">Amount</th>
                <th className="py-4 px-5 text-center w-12"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#F4F1E8] dark:divide-[#213024] text-xs sm:text-sm">
              {paginatedTransactions.map((tx) => {
                const catMeta = getCategoryIcon(tx.category);
                const Icon = (typeof tx.icon === 'function' || tx.icon?.$$typeof) ? tx.icon : catMeta.Icon;
                const iconBg = (typeof tx.iconBg === 'string' && tx.iconBg) ? tx.iconBg : catMeta.bg;
                const isPositive = tx.amount > 0;

                return (
                  <tr
                    key={tx.id}
                    className="hover:bg-[#FAF8F3]/80 dark:hover:bg-[#1D2B20]/60 transition-colors group"
                  >
                    {/* Date */}
                    <td className="py-4 px-5 text-text font-medium whitespace-nowrap">
                      {tx.date}
                    </td>

                    {/* Description */}
                    <td className="py-4 px-5 text-text font-semibold">
                      {tx.description}
                    </td>

                    {/* Category with Icon */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}
                        >
                          <Icon className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                        <span className="font-medium text-text">{tx.category}</span>
                      </div>
                    </td>

                    {/* Payment Method */}
                    <td className="py-4 px-5 text-text/85">
                      <div className="flex items-center gap-2">
                        {tx.paymentType === 'card' && (
                          <CreditCard className="w-4 h-4 text-text/60" />
                        )}
                        {tx.paymentType === 'bank' && (
                          <Landmark className="w-4 h-4 text-text/60" />
                        )}
                        {tx.paymentType === 'upi' && (
                          <span className="italic font-bold text-[10px] text-text/70 bg-[#F2EFE8] dark:bg-[#253629] px-1.5 py-0.5 rounded">
                            UPI
                          </span>
                        )}
                        <span className="font-medium text-text">{tx.paymentMethod}</span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <span
                        className={`font-bold tabular-nums text-sm ${
                          isPositive
                            ? 'text-[#16A34A] dark:text-[#4ADE80]'
                            : 'text-[#D93025] dark:text-[#F87171]'
                        }`}
                      >
                        {isPositive ? '+' : '-'}₹
                        {Math.abs(tx.amount).toLocaleString('en-IN')}
                      </span>
                    </td>

                    {/* Action Options (•••) */}
                    <td className="py-4 px-5 text-center relative">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveActionId(activeActionId === tx.id ? null : tx.id)
                        }
                        className="p-1 rounded-md text-text/50 hover:text-text hover:bg-[#EFECE3] dark:hover:bg-[#26372A] transition-colors"
                        aria-label="Actions"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>

                      {/* Dropdown Menu */}
                      {activeActionId === tx.id && (
                        <div className="absolute right-4 top-10 z-20 bg-[#FFFFFF] dark:bg-[#1A261E] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl shadow-lg py-1 w-28 text-left animate-scale-up">
                          <button
                            type="button"
                            onClick={() => {
                              alert(`Edit ${tx.description}`);
                              setActiveActionId(null);
                            }}
                            className="w-full px-3 py-1.5 text-xs text-text hover:bg-[#FAF8F3] dark:hover:bg-[#223226] flex items-center gap-2"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-text-muted" />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setDeleteConfirmId(tx.id);
                              setActiveActionId(null);
                            }}
                            className="w-full px-3 py-1.5 text-xs text-[#E05252] hover:bg-[#FEE2E2]/50 dark:hover:bg-[#3B1E1E] flex items-center gap-2"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 5. Table Footer / Pagination */}
        <div className="p-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F0ECE1] dark:border-[#243428] bg-[#FCFBF8] dark:bg-[#151F17]">
          {/* Item Range Counter */}
          <p className="text-xs text-text-muted font-medium">
            Showing{' '}
            <span className="text-text font-semibold">
              {(currentPage - 1) * itemsPerPage + 1}–
              {Math.min(currentPage * itemsPerPage, filteredTransactions.length)}
            </span>{' '}
            of{' '}
            <span className="text-text font-semibold">
              {filteredTransactions.length}
            </span>{' '}
            transactions
          </p>

          {/* Pagination Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-text/60 hover:text-text hover:bg-[#EDE9DE] dark:hover:bg-[#253629] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#2D5A3C] text-white shadow-sm'
                      : 'text-text hover:bg-[#EDE9DE] dark:hover:bg-[#253629]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-text/60 hover:text-text hover:bg-[#EDE9DE] dark:hover:bg-[#253629] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Transaction Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Transaction"
        description="Enter the transaction details to record it immediately."
      >
        <form onSubmit={handleAddSubmit} className="space-y-4 mt-3">
          <div className="flex gap-2 p-1 bg-[#F3EFE6] dark:bg-[#1D2B20] rounded-xl">
            <button
              type="button"
              onClick={() => setNewType('expense')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                newType === 'expense'
                  ? 'bg-white dark:bg-[#17221A] text-text shadow-sm'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => setNewType('income')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                newType === 'income'
                  ? 'bg-white dark:bg-[#17221A] text-text shadow-sm'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Income
            </button>
          </div>

          <Input
            label="Amount (₹)"
            type="number"
            placeholder="0.00"
            prefix="₹"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            autoFocus
            required
          />

          <Input
            label="Description"
            placeholder="e.g. Dinner with friends, Uber, Salary"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            required
          />

          <div className="grid grid-cols-2 gap-3">
            <Select
              label="Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              options={[
                { value: 'Food', label: 'Food' },
                { value: 'Transport', label: 'Transport' },
                { value: 'Income', label: 'Income' },
                { value: 'Shopping', label: 'Shopping' },
                { value: 'Bills', label: 'Bills' },
                { value: 'Health', label: 'Health' },
              ]}
            />
            <Select
              label="Payment Method"
              value={newPayment}
              onChange={(e) => setNewPayment(e.target.value)}
              options={[
                { value: 'UPI', label: 'UPI' },
                { value: 'HDFC •••• 4821', label: 'HDFC Card' },
                { value: 'SBI •••• 6678', label: 'SBI Card' },
                { value: 'Bank Transfer', label: 'Bank Transfer' },
                { value: 'Cash', label: 'Cash' },
              ]}
            />
          </div>

          <div className="flex justify-end gap-2.5 pt-3">
            <Button variant="secondary" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Transaction
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteConfirmId !== null}
        onClose={() => setDeleteConfirmId(null)}
        title="Delete Transaction?"
        description="Are you sure you want to remove this record? This action cannot be undone."
      >
        <div className="flex justify-end gap-2.5 pt-4">
          <Button variant="secondary" onClick={() => setDeleteConfirmId(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(deleteConfirmId)}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Transactions;
