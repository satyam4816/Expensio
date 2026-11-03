import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Utensils,
  ShoppingBag,
  Car,
  Receipt,
  Clapperboard,
  Heart,
  GraduationCap,
  Plane,
  MoreHorizontal,
  Calendar,
  CreditCard,
  ChevronDown,
  PenLine,
  Plus,
  Lightbulb,
  Check
} from 'lucide-react';
import { WalletIllustration } from '../components/illustrations/WalletIllustration';
import { LeafBranch } from '../components/illustrations/LeafBranch';

const categoryOptions = [
  { id: 'Food', name: 'Food', icon: Utensils },
  { id: 'Shopping', name: 'Shopping', icon: ShoppingBag },
  { id: 'Transport', name: 'Transport', icon: Car },
  { id: 'Bills', name: 'Bills', icon: Receipt },
  { id: 'Entertainment', name: 'Entertainment', icon: Clapperboard },
  { id: 'Health', name: 'Health', icon: Heart },
  { id: 'Education', name: 'Education', icon: GraduationCap },
  { id: 'Travel', name: 'Travel', icon: Plane },
  { id: 'Other', name: 'Other', icon: MoreHorizontal },
];

export function AddExpense() {
  const navigate = useNavigate();
  const [txType, setTxType] = useState('expense'); // 'expense' | 'income'
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [date, setDate] = useState('03 Sep 2025');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    try {
      const saved = localStorage.getItem('expensio:expenses');
      const list = saved ? JSON.parse(saved) : [];
      const numAmount = parseFloat(amount);
      const newTx = {
        id: Date.now(),
        date: date || '03 Sep 2025',
        description: description.trim(),
        category: selectedCategory,
        type: txType,
        paymentMethod: paymentMethod || 'UPI',
        paymentType: paymentMethod.toLowerCase().includes('card') ? 'card' : paymentMethod.toLowerCase().includes('bank') ? 'bank' : 'upi',
        amount: txType === 'expense' ? -Math.abs(numAmount) : Math.abs(numAmount),
      };
      localStorage.setItem('expensio:expenses', JSON.stringify([newTx, ...list]));
    } catch (err) {
      console.error(err);
    }

    // Show feedback toast
    setToastMessage(`Saved ${txType === 'expense' ? 'expense' : 'income'} of ₹${parseFloat(amount).toLocaleString('en-IN')}`);
    setTimeout(() => {
      navigate('/app/transactions');
    }, 700);
  };

  return (
    <div className="space-y-6 max-w-[1140px] mx-auto pb-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#2D5A3C] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2.5 animate-slide-down text-sm font-medium">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header Row */}
      <div>
        <h1 className="font-serif text-3xl sm:text-[34px] font-bold text-text tracking-tight leading-tight">
          Add Expense
        </h1>
        <p className="text-xs sm:text-sm text-text-muted mt-1">
          Record your spending and keep your finances up to date.
        </p>
      </div>

      {/* 2. Main Two-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Form Card (8 cols) */}
        <div className="lg:col-span-8 bg-[#FFFFFF] dark:bg-[#17221A] border border-[#EBE6DA] dark:border-[#26372A] rounded-2xl p-6 sm:p-7 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Type Selector Pill (Expense vs Income) */}
            <div className="inline-flex w-full sm:w-auto p-1 bg-[#FAF8F3] dark:bg-[#1C281F] border border-[#EBE6DA] dark:border-[#27382C] rounded-full">
              <button
                type="button"
                onClick={() => setTxType('expense')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  txType === 'expense'
                    ? 'bg-[#E3EEE4] dark:bg-[#253D2C] text-[#2D5A3C] dark:text-[#4ADE80] font-semibold shadow-sm'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                <span className="text-[#E05252] font-bold text-sm">↓</span>
                <span>Expense</span>
              </button>

              <button
                type="button"
                onClick={() => setTxType('income')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  txType === 'income'
                    ? 'bg-[#E3EEE4] dark:bg-[#253D2C] text-[#2D5A3C] dark:text-[#4ADE80] font-semibold shadow-sm'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                <span className="text-[#16A34A] font-bold text-sm">↑</span>
                <span>Income</span>
              </button>
            </div>

            {/* Amount Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text tracking-wide">
                Amount <span className="text-[#E05252]">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-text/80 font-semibold text-base pointer-events-none select-none">
                  ₹
                </span>
                <input
                  type="number"
                  step="any"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-9 pr-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                />
              </div>
            </div>

            {/* Description Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-text tracking-wide">
                Description <span className="text-[#E05252]">*</span>
              </label>
              <div className="relative flex items-center">
                <PenLine className="w-4 h-4 text-text/60 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="e.g., Dinner with friends, Groceries, etc."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                />
              </div>
            </div>

            {/* Category Grid (Icon Chips) */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-text tracking-wide">
                Category <span className="text-[#E05252]">*</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                {categoryOptions.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex flex-col items-center justify-center p-3 sm:py-3.5 rounded-xl border transition-all text-xs font-medium gap-1.5 ${
                        isSelected
                          ? 'bg-[#E3EEE4] dark:bg-[#1E3323] border-[#2D5A3C] dark:border-[#4ADE80] text-text font-semibold shadow-sm'
                          : 'bg-[#FAF8F3] dark:bg-[#18231B] border-[#EBE6DA] dark:border-[#27382C] text-text/80 hover:bg-[#F2ECE0] dark:hover:bg-[#1F2E22]'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected
                            ? 'text-[#2D5A3C] dark:text-[#4ADE80]'
                            : 'text-text/70'
                        }`}
                      />
                      <span>{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date and Payment Method (2-Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-text tracking-wide">
                  Date <span className="text-[#E05252]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-text outline-none focus:border-[#2D5A3C] transition-all cursor-pointer"
                  />
                  <Calendar className="w-4 h-4 text-text/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <ChevronDown className="w-4 h-4 text-text/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-text tracking-wide">
                  Payment Method
                </label>
                <div className="relative">
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full appearance-none bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-text outline-none focus:border-[#2D5A3C] transition-all cursor-pointer"
                  >
                    <option value="">Select method</option>
                    <option value="UPI">UPI</option>
                    <option value="HDFC •••• 4821">HDFC Card (•••• 4821)</option>
                    <option value="SBI •••• 6678">SBI Card (•••• 6678)</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                  </select>
                  <CreditCard className="w-4 h-4 text-text/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <ChevronDown className="w-4 h-4 text-text/50 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Form Actions (Cancel & Add Expense Button) */}
            <div className="flex items-center justify-between pt-4 border-t border-[#F2ECE0] dark:border-[#243428]">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-text/75 hover:text-text hover:bg-[#FAF8F3] dark:hover:bg-[#1E2B20] transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#2D5A3C] hover:bg-[#22472F] text-white px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-sm active:scale-98 transition-all"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>Add Expense</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: 3D Wallet Illustration & Quick Tips Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Top 3D Artwork Illustration */}
          <div className="bg-[#FAF8F3] dark:bg-[#152018] rounded-2xl border border-[#ECE7DA] dark:border-[#243428] p-4 flex items-center justify-center overflow-hidden">
            <WalletIllustration />
          </div>

          {/* Bottom Quick Tips Card */}
          <div className="relative bg-[#F0F7F2] dark:bg-[#17261B] border border-[#DCEDE0] dark:border-[#273D2C] rounded-2xl p-5 sm:p-6 overflow-hidden shadow-subtle">
            {/* Botanical Leaf Watermark Accent */}
            <LeafBranch
              variant="hero"
              className="absolute -right-4 -bottom-6 w-28 h-28 pointer-events-none opacity-40 transform rotate-45"
            />

            {/* Header with Bulb Icon */}
            <div className="relative z-10 flex items-center gap-2.5 mb-3.5">
              <div className="w-8 h-8 rounded-full bg-[#E1F1E5] dark:bg-[#1D3623] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 stroke-[2]" />
              </div>
              <h3 className="font-serif font-bold text-base text-text">
                Quick Tips
              </h3>
            </div>

            {/* Checkmark Tips List */}
            <ul className="relative z-10 space-y-2.5 text-xs text-text/85">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#2D5A3C] dark:text-[#4ADE80] shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Add a clear description.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#2D5A3C] dark:text-[#4ADE80] shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Choose the right category.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#2D5A3C] dark:text-[#4ADE80] shrink-0 mt-0.5 stroke-[2.5]" />
                <span>Keep your expenses updated regularly.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;

