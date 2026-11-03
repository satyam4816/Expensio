import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from '../ui';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function TopBar({ searchQuery, onSearchChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const initial = user?.name ? user.name.trim().charAt(0).toUpperCase() : 'S';

  return (
    <header className="h-16 px-3 sm:px-6 md:px-8 flex items-center justify-between gap-2 sm:gap-4 bg-transparent max-w-full">
      {/* Mobile Logo */}
      <div className="md:hidden shrink-0">
        <Logo size="sm" showTagline={false} />
      </div>

      {/* Spacer for desktop since search is on the right */}
      <div className="hidden md:block flex-1" />

      {/* Right Controls: Search bar + Notification + Avatar + ThemeToggle */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Search Input Pill - hidden on small mobile to avoid overflow */}
        <div className="relative hidden sm:flex items-center w-52 sm:w-72 md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 text-text-muted pointer-events-none" />
          <input
            type="text"
            placeholder="Search transactions, categories..."
            value={searchQuery || ''}
            onChange={(e) => onSearchChange?.(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                navigate('/app/transactions');
              }
            }}
            className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-text placeholder:text-text-muted/70 focus:outline-none focus:border-[#2D5A3C] shadow-subtle transition-all"
          />
        </div>

        {/* Notification Bell with indicator */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 rounded-full text-text/70 hover:text-text hover:bg-[#EFECE3] dark:hover:bg-[#1E2B20] transition-colors shrink-0"
        >
          <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E05252] ring-2 ring-[#F8F6F0] dark:ring-[#0F1511]" />
        </button>

        {/* User Avatar Circle */}
        <div
          onClick={() => navigate('/app/settings')}
          title={user?.name ? `${user.name}'s Profile` : "Profile Settings"}
          className="w-8 h-8 rounded-full bg-[#2D5A3C] text-white flex items-center justify-center font-medium text-sm shadow-sm select-none cursor-pointer hover:opacity-90 transition-opacity shrink-0"
        >
          {initial}
        </div>

        {/* Theme Toggle */}
        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default TopBar;
