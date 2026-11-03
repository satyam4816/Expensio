import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  Repeat,
  Target,
  Settings as SettingsIcon,
  Plus
} from 'lucide-react';
import { cn } from '../../utils/cn';

const navItems = [
  { name: 'Dashboard', path: '/app', icon: Home, end: true },
  { name: 'Transactions', path: '/app/transactions', icon: Repeat },
  { name: 'Budgets', path: '/app/budget', icon: Target },
  { name: 'Settings', path: '/app/settings', icon: SettingsIcon },
];

export function BottomNav() {
  const navigate = useNavigate();

  return (
    <>
      {/* Floating round Add Button on mobile */}
      <button
        type="button"
        onClick={() => navigate('/app/add-expense')}
        aria-label="Add Expense"
        className={cn(
          'md:hidden fixed bottom-20 right-5 z-40',
          'w-14 h-14 rounded-full bg-[#2D5A3C] text-white shadow-lg',
          'flex items-center justify-center outline-none',
          'hover:bg-[#22472F] active:scale-95 transition-all duration-150',
          'focus-visible:ring-4 focus-visible:ring-[#2D5A3C]/30'
        )}
      >
        <Plus className="w-7 h-7 stroke-[2.2]" />
      </button>

      {/* Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF8F2]/95 dark:bg-[#141C16]/95 backdrop-blur-md border-t border-[#EBE6DB] dark:border-[#223025] px-3 py-1.5 flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 text-xs font-medium',
                  isActive
                    ? 'text-[#2D5A3C] dark:text-[#4ADE80] font-semibold'
                    : 'text-text-muted hover:text-text'
                )
              }
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}

export default BottomNav;
