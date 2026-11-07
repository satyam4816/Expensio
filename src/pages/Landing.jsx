import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart2,
  Target,
  Flag,
  ShieldCheck,
  Check,
  ArrowRight,
  Play,
  Users,
  Star,
  Zap,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Sparkles,
  Utensils,
  ShoppingBag,
  Car
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Logo } from '../components/layout/Logo';
import { LaptopMockup } from '../components/landing/LaptopMockup';
import { LeafBranch } from '../components/illustrations/LeafBranch';
import { LandscapeBanner } from '../components/illustrations/LandscapeBanner';

// Sample Donut Chart data for Preview section
const previewDonutData = [
  { name: 'Food', value: 8955, color: '#2D5A3C' },
  { name: 'Shopping', value: 5672, color: '#F87171' },
  { name: 'Transport', value: 4477, color: '#60A5FA' },
  { name: 'Bills', value: 3582, color: '#FBBF24' },
];

const faqs = [
  {
    q: 'Is Expenso free to use?',
    a: 'Yes, Expenso is completely free to use. All core budgeting, expense tracking, and goal planning features are available right in your browser.',
  },
  {
    q: 'Where is my financial data stored?',
    a: 'Your financial data is stored 100% locally in your own browser using localStorage. We do not transmit or store your personal transaction records on external servers.',
  },
  {
    q: 'Do I need to link my bank account or credit card?',
    a: 'No. Expenso is built for privacy and manual, mindful logging. You never have to connect your bank account, share sensitive credentials, or authorize third-party screen scraping.',
  },
  {
    q: 'Can I export my transactions?',
    a: 'Absolutely. You can export all your transactions anytime as a CSV spreadsheet or download a complete JSON backup from Settings with a single click.',
  },
  {
    q: 'Does it work smoothly on mobile phones?',
    a: 'Yes, Expenso is designed mobile-first with a dedicated bottom navigation bar, floating add action, and responsive touch-friendly cards.',
  },
];

export function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#0F1511] text-text font-sans selection:bg-[#2D5A3C]/20 selection:text-[#2D5A3C] relative overflow-x-hidden">
      {/* Decorative Hanging Botanical Leaves in top corners */}
      <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none opacity-80 overflow-hidden hidden md:block">
        <LeafBranch variant="hero" className="w-full h-full transform rotate-12 scale-125" />
      </div>

      {/* ================= 1. STICKY NAVBAR ================= */}
      <header className="sticky top-0 z-40 bg-[#F8F6F0]/90 dark:bg-[#0F1511]/90 backdrop-blur-md border-b border-[#EBE6DA]/80 dark:border-[#243428]">
        <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#FAF8F3]/80 dark:bg-[#162018]/80 border border-[#EBE6DA] dark:border-[#27382C] px-3 py-1.5 rounded-full shadow-subtle text-xs sm:text-sm font-medium">
            <a
              href="#home"
              className="px-4 py-1.5 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] font-semibold"
            >
              Home
            </a>
            <a
              href="#features"
              className="px-3.5 py-1.5 rounded-full text-text/80 hover:text-text hover:bg-bg transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="px-3.5 py-1.5 rounded-full text-text/80 hover:text-text hover:bg-bg transition-colors"
            >
              How It Works
            </a>
            <a
              href="#preview"
              className="px-3.5 py-1.5 rounded-full text-text/80 hover:text-text hover:bg-bg transition-colors"
            >
              Preview
            </a>
            <a
              href="#faq"
              className="px-3.5 py-1.5 rounded-full text-text/80 hover:text-text hover:bg-bg transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 rounded-full border border-[#EBE6DA] dark:border-[#27382C] bg-white dark:bg-[#162018] text-xs sm:text-sm font-medium hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22] transition-colors shadow-subtle"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 rounded-full bg-[#2D5A3C] hover:bg-[#22472F] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-text hover:bg-[#EFECE3] dark:hover:bg-[#1F2E22]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFFFFF] dark:bg-[#162018] border-b border-[#EBE6DA] dark:border-[#27382C] px-6 py-4 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-[#2D5A3C]"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-text/80 font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-text/80 font-medium"
            >
              How It Works
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-text/80 font-medium"
            >
              FAQ
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/login"
                className="w-full text-center py-2.5 rounded-xl border border-[#EBE6DA] font-medium"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="w-full text-center py-2.5 rounded-xl bg-[#2D5A3C] text-white font-semibold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ================= 2. HERO SECTION ================= */}
      <section id="home" className="pt-10 sm:pt-14 pb-16 sm:pb-24 max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EB] dark:bg-[#1C281F] border border-[#E8DEC7] dark:border-[#27382C] text-xs font-semibold text-text shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Your Personal Expense Tracker</span>
            </div>

            {/* Headline with flourish */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[54px] font-bold text-text tracking-tight leading-[1.15]">
              Track, Manage &amp;<br />
              <span className="relative inline-block text-[#2D5A3C] dark:text-[#4ADE80]">
                Grow Your Money
                {/* Handcrafted underline curve SVG */}
                <svg
                  className="w-full h-3 text-[#2D5A3C] dark:text-[#4ADE80] absolute -bottom-1 left-0"
                  viewBox="0 0 280 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8C80 2 200 3 277 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-lg">
              A simple and powerful way to track expenses, set budgets, reach your savings goals, and build better financial habits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/signup"
                className="bg-[#2D5A3C] hover:bg-[#22472F] text-white px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-sm active:scale-95 transition-all"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#preview"
                className="bg-white dark:bg-[#162018] border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22] text-text px-6 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 shadow-subtle transition-all"
              >
                <span>See How It Works</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs sm:text-sm font-medium text-text/80">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2D5A3C] dark:text-[#4ADE80] stroke-[2.5]" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2D5A3C] dark:text-[#4ADE80] stroke-[2.5]" />
                <span>Secure &amp; Private</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#2D5A3C] dark:text-[#4ADE80] stroke-[2.5]" />
                <span>Works on All Devices</span>
              </div>
            </div>
          </div>

          {/* Right Mockup Column */}
          <div className="lg:col-span-6 pt-4 lg:pt-0">
            <LaptopMockup />
          </div>
        </div>
      </section>

      {/* ================= 3. FOUR FEATURES BAND ================= */}
      <section id="features" className="max-w-[1240px] mx-auto px-6 py-8">
        <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-3xl p-6 sm:p-8 shadow-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
              <BarChart2 className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-text">Track Expenses</h3>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">Know where your money goes</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-text">Set Budgets</h3>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">Stay in control of your spending</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
              <Flag className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-text">Achieve Goals</h3>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">Save for what matters</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-4 p-2">
            <div className="w-12 h-12 rounded-2xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-text">Safe &amp; Secure</h3>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5">Your data is always protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. STATS / SOCIAL PROOF BAND ================= */}
      <section className="relative max-w-[1240px] mx-auto px-6 py-12 overflow-hidden">
        {/* Scenic Pine Tree & Mountain Horizon Silhouettes */}
        <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none opacity-45">
          <LandscapeBanner className="w-full h-full object-bottom" />
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center mb-2">
              <Users className="w-5 h-5" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-text">10K+</p>
            <p className="text-xs text-text-muted font-medium mt-0.5">Happy Users</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center mb-2">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-text">4.8/5</p>
            <p className="text-xs text-text-muted font-medium mt-0.5">User Rating</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center mb-2">
              <Zap className="w-5 h-5" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-text">50K+</p>
            <p className="text-xs text-text-muted font-medium mt-0.5">Transactions Tracked</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-text">₹10Cr+</p>
            <p className="text-xs text-text-muted font-medium mt-0.5">Total Savings Goal Set</p>
          </div>
        </div>
      </section>

      {/* ================= 5. HOW IT WORKS (3 STEPS) ================= */}
      <section id="how-it-works" className="max-w-[1240px] mx-auto px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5A3C] dark:text-[#4ADE80]">
            Simple Workflow
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-1">
            How Expensio Works
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-2">
            No complex setup. Start tracking your expenses in under 60 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-6 sm:p-7 shadow-card relative">
            <div className="w-10 h-10 rounded-full bg-[#2D5A3C] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
              1
            </div>
            <h3 className="font-serif font-bold text-lg text-text">Get Started Instantly</h3>
            <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
              Open the app or create a free profile. No credit card, bank passwords, or KYC verification required.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-6 sm:p-7 shadow-card relative">
            <div className="w-10 h-10 rounded-full bg-[#2D5A3C] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
              2
            </div>
            <h3 className="font-serif font-bold text-lg text-text">Log Daily Expenses</h3>
            <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
              Record coffee, grocery runs, and bills in seconds with keyboard shortcuts and intuitive category chips.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-6 sm:p-7 shadow-card relative">
            <div className="w-10 h-10 rounded-full bg-[#2D5A3C] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm">
              3
            </div>
            <h3 className="font-serif font-bold text-lg text-text">Gain Peace of Mind</h3>
            <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
              Watch your savings grow, receive helpful budget alerts, and see exactly where your hard-earned money goes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 6. INTERACTIVE PREVIEW SECTION ================= */}
      <section id="preview" className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="bg-white dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-3xl p-6 sm:p-10 shadow-card">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text">
              Live Category &amp; Budget Insights
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-1.5">
              Experience the clarity that comes from clean, distraction-free visual metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Donut Chart */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={previewDonutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {previewDonutData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                  <span className="font-bold text-lg text-text">₹29,849</span>
                  <span className="text-[10px] text-text-muted">Total Spent</span>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-3">Monthly Category Breakdown</p>
            </div>

            {/* Budget Progress Bars */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5"><Utensils className="w-3.5 h-3.5 text-[#2D5A3C]" /> Food &amp; Dining</span>
                  <span className="text-[#D93025]">₹8,955 / ₹10,000 (90%)</span>
                </div>
                <div className="w-full bg-[#EBE7DD] dark:bg-[#253528] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#2D5A3C] h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5"><ShoppingBag className="w-3.5 h-3.5 text-[#EC4899]" /> Shopping</span>
                  <span className="text-[#2D5A3C]">₹5,672 / ₹8,000 (71%)</span>
                </div>
                <div className="w-full bg-[#EBE7DD] dark:bg-[#253528] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#2D5A3C] h-full rounded-full" style={{ width: '71%' }} />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5"><Car className="w-3.5 h-3.5 text-[#3B82F6]" /> Transport</span>
                  <span className="text-[#D93025]">₹4,477 / ₹5,000 (90%)</span>
                </div>
                <div className="w-full bg-[#EBE7DD] dark:bg-[#253528] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#2D5A3C] h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. FAQ ACCORDION ================= */}
      <section id="faq" className="max-w-[800px] mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#2D5A3C] dark:text-[#4ADE80]">
            Common Inquiries
          </p>
          <h2 className="font-serif text-3xl font-bold text-text mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl overflow-hidden shadow-subtle transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-text"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-text/60 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-text/60 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-[#F2EFE8] dark:border-[#243428]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 8. FINAL CALL TO ACTION BAND ================= */}
      <section className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="relative rounded-3xl overflow-hidden bg-[#2D5A3C] text-white p-8 sm:p-14 text-center shadow-banner">
          <LandscapeBanner className="opacity-20 scale-125" />
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Start Managing Your Money with Calm &amp; Clarity
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-md mx-auto">
              Join thousands of people who track their expenses daily without privacy compromises.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link
                to="/signup"
                className="bg-white text-[#2D5A3C] hover:bg-[#FAF8F3] px-7 py-3 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-all"
              >
                Get Started Free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. FOOTER ================= */}
      <footer className="border-t border-[#EBE6DA] dark:border-[#27382C] py-8 text-center text-xs text-text-muted">
        <div className="max-w-[1240px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo showTagline={false} />
          <p>© {new Date().getFullYear()} Expensio. “Track Smart. Spend Wise.”</p>
          <div className="flex gap-4 font-medium text-text/75">
            <Link to="/app" className="hover:text-text">Open App</Link>
            <Link to="/login" className="hover:text-text">Log In</Link>
            <Link to="/signup" className="hover:text-text">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
