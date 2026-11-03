import React from 'react';
import { LandscapeBanner } from '../illustrations/LandscapeBanner';

export function LaptopMockup({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Laptop Frame */}
      <div className="relative w-[340px] sm:w-[480px] md:w-[540px] aspect-[16/10] bg-[#141A16] rounded-t-2xl p-2.5 pb-0 shadow-2xl border border-[#27382C]">
        {/* Web Camera Dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#374151]" />

        {/* Inner Laptop Screen */}
        <div className="w-full h-full bg-[#F8F6F0] rounded-t-lg overflow-hidden flex text-text text-[9px] sm:text-[11px]">
          {/* Mini Sidebar inside Mockup */}
          <div className="w-24 sm:w-32 bg-[#FAF8F2] border-r border-[#EBE6DB] p-2 flex flex-col justify-between shrink-0">
            <div>
              {/* Brand */}
              <div className="flex items-center gap-1 font-serif font-extrabold text-xs text-[#164326] mb-3 uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-[#236533] inline-block" />
                <span>EXPENSIO</span>
              </div>
              {/* Tabs */}
              <div className="space-y-1">
                <div className="bg-[#2D5A3C] text-white px-2 py-1 rounded-md font-semibold text-[8px] sm:text-[10px]">
                  Dashboard
                </div>
                <div className="text-text-muted px-2 py-0.5 text-[8px] sm:text-[10px]">
                  Transactions
                </div>
                <div className="text-text-muted px-2 py-0.5 text-[8px] sm:text-[10px]">
                  Add Expense
                </div>
                <div className="text-text-muted px-2 py-0.5 text-[8px] sm:text-[10px]">
                  Insights
                </div>
                <div className="text-text-muted px-2 py-0.5 text-[8px] sm:text-[10px]">
                  Goals & Budgets
                </div>
              </div>
            </div>
            <div className="text-[7px] sm:text-[9px] text-text-muted">
              Settings
            </div>
          </div>

          {/* Mini Dashboard Content */}
          <div className="flex-1 p-2 sm:p-3 overflow-hidden space-y-2">
            {/* Header */}
            <div>
              <p className="font-serif font-bold text-xs sm:text-sm text-text">Dashboard</p>
              <p className="text-[7px] sm:text-[9px] text-text-muted">Good Morning, Sattu ☀️</p>
            </div>

            {/* Total Balance Mini Banner */}
            <div className="relative rounded-lg p-2 bg-[#F2EFE8] border border-[#E5E0D2] overflow-hidden">
              <LandscapeBanner className="opacity-70 scale-125" />
              <div className="relative z-10">
                <p className="text-[7px] sm:text-[9px] text-text-muted">Total Balance</p>
                <p className="font-bold text-xs sm:text-sm text-text">₹48,650.75</p>
                <p className="text-[6px] sm:text-[8px] text-[#2D5A3C] font-semibold">↑ +12.5% from last month</p>
              </div>
            </div>

            {/* Metric Row */}
            <div className="grid grid-cols-3 gap-1.5">
              <div className="bg-white p-1.5 rounded-md border border-[#EBE6DA]">
                <p className="text-[6px] sm:text-[8px] text-text-muted">Income</p>
                <p className="font-bold text-[8px] sm:text-[10px] text-text">₹78,500</p>
              </div>
              <div className="bg-white p-1.5 rounded-md border border-[#EBE6DA]">
                <p className="text-[6px] sm:text-[8px] text-text-muted">Expenses</p>
                <p className="font-bold text-[8px] sm:text-[10px] text-text">₹29,849</p>
              </div>
              <div className="bg-white p-1.5 rounded-md border border-[#EBE6DA]">
                <p className="text-[6px] sm:text-[8px] text-text-muted">Savings</p>
                <p className="font-bold text-[8px] sm:text-[10px] text-text">₹48,650</p>
              </div>
            </div>

            {/* Chart Rows */}
            <div className="grid grid-cols-2 gap-1.5 pt-0.5">
              <div className="bg-white p-1.5 rounded-md border border-[#EBE6DA]">
                <p className="text-[7px] sm:text-[9px] font-semibold">Monthly Spending</p>
                {/* Mini bars */}
                <div className="flex items-end justify-between h-8 sm:h-12 pt-2 px-1 gap-1">
                  <div className="w-2 sm:w-3 bg-[#A3CFA6] h-[35%] rounded-t-sm" />
                  <div className="w-2 sm:w-3 bg-[#A3CFA6] h-[55%] rounded-t-sm" />
                  <div className="w-2 sm:w-3 bg-[#A3CFA6] h-[70%] rounded-t-sm" />
                  <div className="w-2 sm:w-3 bg-[#A3CFA6] h-[65%] rounded-t-sm" />
                  <div className="w-2 sm:w-3 bg-[#2D5A3C] h-[95%] rounded-t-sm" />
                </div>
              </div>

              <div className="bg-white p-1.5 rounded-md border border-[#EBE6DA] flex flex-col justify-between">
                <p className="text-[7px] sm:text-[9px] font-semibold">Spending by Category</p>
                <div className="w-8 h-8 sm:w-11 sm:h-11 mx-auto my-0.5 rounded-full border-4 border-[#2D5A3C] border-t-[#F87171] border-r-[#60A5FA] border-b-[#FBBF24]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base Plate */}
      <div className="w-[380px] sm:w-[530px] md:w-[600px] h-3 bg-[#C8CBD0] rounded-b-xl shadow-lg border-t border-[#E5E7EB] absolute -bottom-3 left-1/2 -translate-x-1/2 flex justify-center">
        <div className="w-16 h-1 bg-[#9CA3AF] rounded-b-md" />
      </div>

      {/* Floating Smartphone Mockup (Front Right) */}
      <div className="absolute -right-4 sm:-right-8 -bottom-4 w-28 sm:w-36 md:w-40 aspect-[9/18] bg-[#111613] rounded-3xl p-1.5 shadow-2xl border-2 border-[#374151] z-20 transform rotate-3">
        {/* Dynamic Island / Notch */}
        <div className="w-8 sm:w-10 h-2.5 bg-black rounded-full mx-auto mb-1" />

        {/* Phone Screen */}
        <div className="w-full h-full bg-[#FAF8F2] rounded-2xl p-2.5 flex flex-col justify-between overflow-hidden relative">
          <LandscapeBanner className="opacity-60 scale-150" />
          <div className="relative z-10 text-center pt-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#236533] inline-block mb-1" />
            <p className="font-serif font-extrabold text-[10px] sm:text-xs text-[#164326] uppercase tracking-wider">EXPENSIO</p>
          </div>

          <div className="relative z-10 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-center space-y-0.5 shadow-sm">
            <p className="font-serif font-bold text-[9px] sm:text-[11px] text-text">Track Expenses</p>
            <p className="text-[7px] sm:text-[8px] text-text-muted">Save Smart</p>
            <p className="text-[7px] sm:text-[8px] text-[#2D5A3C] font-semibold">Achieve Goals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopMockup;

