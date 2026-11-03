import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Repeat,
  PlusCircle,
  BarChart2,
  Target,
  Settings as SettingsIcon,
  LogOut,
  ArrowRight
} from 'lucide-react';
import { Logo } from './Logo';
import { LeafBranch } from '../illustrations/LeafBranch';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils/cn';

const navItems = [
  { name: 'Dashboard', path: '/app', icon: Home, end: true },
  { name: 'Transactions', path: '/app/transactions', icon: Repeat },
  { name: 'Add Expense', path: '/app/add-expense', icon: PlusCircle },
  { name: 'Insights', path: '/app/insights', icon: BarChart2 },
  { name: 'Goals & Budgets', path: '/app/budget', icon: Target },
  { name: 'Settings', path: '/app/settings', icon: SettingsIcon },
];

export function Sidebar() {
  const { logout } = useAuth();

  return (
    <aside className="hidden md:flex flex-col w-[235px] bg-[#FAF8F2] dark:bg-[#141C16] border-r border-[#EBE6DB] dark:border-[#223025] shrink-0 h-screen sticky top-0 z-30 select-none justify-between">
      <div>
        {/* Logo Section */}
        <div className="pt-7 pb-6 px-6">
          <Logo />
        </div>

        {/* Navigation Items */}
        <nav className="px-3.5 space-y-1.5">
          {navItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={index}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
                    isActive
                      ? 'bg-[#2D5A3C] text-white font-medium shadow-sm'
                      : 'text-text/80 hover:text-text hover:bg-[#F0ECE1] dark:hover:bg-[#1D2A1F]'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className={cn('w-[18px] h-[18px]', isActive ? 'text-white' : 'text-text/70')} />
                    <span>{item.name}</span>
                  </>
                )}
              </NavLink>
            );
          })}

          {/* Quick Logout Button */}
          <button
            type="button"
            onClick={logout}
            className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-sm font-medium text-text/60 hover:text-[#D93025] hover:bg-[#FCE8E6]/60 dark:hover:bg-[#341D1D]/40 transition-all duration-150 text-left mt-2"
          >
            <LogOut className="w-[18px] h-[18px]" />
            <span>Log out</span>
          </button>
        </nav>
      </div>

      {/* Bottom Section: Botanical Leaves + Go Premium Card */}
      <div className="relative px-3.5 pb-6 pt-10 overflow-hidden">
        {/* Background Botanical Leaves */}
        <LeafBranch
          variant="sidebar"
          className="absolute -left-4 bottom-14 w-28 h-40 pointer-events-none opacity-75"
        />

        {/* Go Premium Card */}
        <div className="relative z-10 bg-[#FFFFFF] dark:bg-[#19241C] border border-[#EBE6DA] dark:border-[#27382C] rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-1.5 text-text font-bold text-xs tracking-tight">
            <span className="text-sm">👑</span>
            <span>Go Premium</span>
          </div>
          <p className="text-[11px] text-text-muted mt-1 leading-snug">
            Unlock advanced insights, custom budgets and more.
          </p>
          <button
            type="button"
            onClick={() => alert('Premium features preview: Exporting full reports, bank sync & advanced analytics.')}
            className="w-full mt-3 bg-[#2D5A3C] hover:bg-[#22472F] text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
          >
            <span>Upgrade Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
