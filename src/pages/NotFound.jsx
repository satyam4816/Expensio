import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Logo } from '../components/layout/Logo';
import { LeafBranch } from '../components/illustrations/LeafBranch';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#0F1511] text-text flex flex-col justify-between selection:bg-[#2D5A3C]/20 selection:text-[#2D5A3C] relative overflow-hidden">
      {/* Decorative botanical accent */}
      <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none opacity-60">
        <LeafBranch variant="hero" className="w-full h-full transform rotate-45" />
      </div>

      <header className="max-w-[1200px] w-full mx-auto px-6 py-8">
        <Link to="/">
          <Logo />
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-3xl p-8 sm:p-10 shadow-card text-center space-y-5">
          <div className="relative inline-block">
            <span className="font-serif text-7xl sm:text-8xl font-extrabold text-[#2D5A3C] dark:text-[#4ADE80] tracking-tight">
              404
            </span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-text">
            Page Not Found
          </h1>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            The page you are looking for doesn't exist, has been removed, or has had its name changed.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2D5A3C] hover:bg-[#22472F] text-white py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/app"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FAF8F3] hover:bg-[#EFEBE0] dark:bg-[#1C281F] dark:hover:bg-[#243428] text-text border border-[#EBE6DA] dark:border-[#27382C] py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-text-muted">
        Expensio · Track Smart. Spend Wise.
      </footer>
    </div>
  );
}

export default NotFound;

