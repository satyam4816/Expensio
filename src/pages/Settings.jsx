import React, { useState } from 'react';
import {
  User,
  Camera,
  PenLine,
  Lock,
  Key,
  ShieldCheck,
  Monitor,
  Database,
  Download,
  UploadCloud,
  Trash2,
  SlidersHorizontal,
  Calendar,
  Globe,
  Sun,
  Moon,
  Laptop,
  Bell,
  Target,
  Flag,
  Mail,
  ChevronRight,
  ChevronDown,
  Check,
  LogOut
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Modal, Input, Button } from '../components/ui';
import { LandscapeBanner } from '../components/illustrations/LandscapeBanner';
import { LeafBranch } from '../components/illustrations/LeafBranch';

export function Settings() {
  const { theme, setTheme } = useTheme();
  const { user, login: updateAuthUser, logout } = useAuth();

  // Profile State
  const [profile, setProfile] = useState({
    name: user?.name || 'Sattu Kumar',
    email: user?.email || 'sattu.kumar@example.com',
  });
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [tempName, setTempName] = useState(user?.name || 'Sattu Kumar');
  const [tempEmail, setTempEmail] = useState(user?.email || 'sattu.kumar@example.com');

  // Preferences State
  const [currency, setCurrency] = useState('INR (₹)');
  const [dateFormat, setDateFormat] = useState('DD MMM YYYY (03 Sep 2025)');
  const [language, setLanguage] = useState('English');

  // Toggle Switches State
  const [twoFactor, setTwoFactor] = useState(true);
  const [notifExpense, setNotifExpense] = useState(true);
  const [notifBudget, setNotifBudget] = useState(true);
  const [notifGoal, setNotifGoal] = useState(true);
  const [notifSummary, setNotifSummary] = useState(false);

  // Modals
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    setProfile({ name: tempName, email: tempEmail });
    updateAuthUser({ name: tempName, email: tempEmail });
    setIsEditProfileOpen(false);
    showToast('Profile updated successfully');
  };

  const handleExportData = () => {
    const backupData = {
      user: profile,
      currency,
      dateFormat,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `expensio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Data exported as JSON');
  };

  const handleDeleteData = () => {
    localStorage.clear();
    setIsDeleteModalOpen(false);
    showToast('All local data cleared');
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <div className="space-y-6 max-w-[1140px] mx-auto pb-14">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#2D5A3C] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2.5 animate-slide-down text-sm font-medium">
          <Check className="w-4 h-4 stroke-[3]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header with Scenic Top-Right Illustration */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="z-10">
          <h1 className="font-serif text-3xl sm:text-[34px] font-bold text-text tracking-tight leading-tight">
            Settings
          </h1>
          <p className="text-xs sm:text-sm text-text-muted mt-1">
            Manage your account, preferences, and app settings.
          </p>
        </div>

        {/* Scenic Background Artwork on Top Right */}
        <div className="absolute right-0 -top-8 w-80 h-28 pointer-events-none hidden lg:block overflow-hidden opacity-85">
          <LandscapeBanner className="opacity-90" />
          <LeafBranch variant="hero" className="absolute right-6 top-0 w-24 h-24 transform -rotate-12 opacity-80" />
        </div>
      </div>

      {/* 2. Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">
          {/* Card 1: Profile Settings */}
          <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                <User className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-semibold text-text text-base leading-snug">
                  Profile Settings
                </h2>
                <p className="text-xs text-text-muted">
                  Update your personal information.
                </p>
              </div>
            </div>

            {/* Profile Content */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div className="flex items-center gap-4">
                {/* Large Green Avatar with Camera badge */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#2D5A3C] text-white flex items-center justify-center font-bold text-2xl shadow-sm">
                    {profile.name.charAt(0)}
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEditProfileOpen(true)}
                    className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-white dark:bg-[#1A261E] border border-[#ECE7DA] dark:border-[#26372A] text-text/70 flex items-center justify-center shadow-sm"
                  >
                    <Camera className="w-3 h-3" />
                  </button>
                </div>

                <div>
                  <h3 className="font-bold text-base text-text">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">
                    {profile.email}
                  </p>
                </div>
              </div>

              {/* Edit Profile Button */}
              <button
                type="button"
                onClick={() => {
                  setTempName(profile.name);
                  setTempEmail(profile.email);
                  setIsEditProfileOpen(true);
                }}
                className="self-start sm:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#EBE6DA] dark:border-[#27382C] bg-white dark:bg-[#18231B] text-text text-xs sm:text-sm font-medium hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E23] transition-all shadow-subtle"
              >
                <PenLine className="w-3.5 h-3.5 text-text/70" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Card 2: Account & Security */}
          <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-semibold text-text text-base leading-snug">
                  Account & Security
                </h2>
                <p className="text-xs text-text-muted">
                  Keep your account secure.
                </p>
              </div>
            </div>

            {/* List Items */}
            <div className="divide-y divide-[#F2EFE8] dark:divide-[#223025] text-xs sm:text-sm">
              {/* Item 1: Change Password */}
              <button
                type="button"
                onClick={() => showToast('Password reset link sent to your email')}
                className="w-full py-3.5 flex items-center justify-between text-left group hover:text-[#2D5A3C] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Key className="w-4 h-4 text-text/60 group-hover:text-[#2D5A3C]" />
                  <span className="font-medium text-text group-hover:text-[#2D5A3C]">
                    Change Password
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-text/40" />
              </button>

              {/* Item 2: Two-Factor Authentication */}
              <div className="py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-text/60" />
                  <span className="font-medium text-text">
                    Two-Factor Authentication
                  </span>
                </div>
                {/* Green Toggle Switch */}
                <button
                  type="button"
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 outline-none ${
                    twoFactor ? 'bg-[#2D5A3C]' : 'bg-[#D1D5DB] dark:bg-[#374151]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      twoFactor ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Item 3: Login Activity */}
              <button
                type="button"
                onClick={() => showToast('Active session: Chrome on Windows 11 (Current)')}
                className="w-full py-3.5 flex items-center justify-between text-left group hover:text-[#2D5A3C] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4 text-text/60 group-hover:text-[#2D5A3C]" />
                  <span className="font-medium text-text group-hover:text-[#2D5A3C]">
                    Login Activity
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-text/40" />
              </button>
            </div>
          </div>

          {/* Card 3: Data & Privacy */}
          <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                <Database className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-semibold text-text text-base leading-snug">
                  Data & Privacy
                </h2>
                <p className="text-xs text-text-muted">
                  Manage your data and privacy.
                </p>
              </div>
            </div>

            {/* List Items */}
            <div className="divide-y divide-[#F2EFE8] dark:divide-[#223025] text-xs sm:text-sm">
              {/* Export Data */}
              <button
                type="button"
                onClick={handleExportData}
                className="w-full py-3.5 flex items-center justify-between text-left group hover:text-[#2D5A3C] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-text/60 group-hover:text-[#2D5A3C]" />
                  <span className="font-medium text-text group-hover:text-[#2D5A3C]">
                    Export Data
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-text/40" />
              </button>

              {/* Import Data */}
              <label className="w-full py-3.5 flex items-center justify-between text-left group hover:text-[#2D5A3C] cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <UploadCloud className="w-4 h-4 text-text/60 group-hover:text-[#2D5A3C]" />
                  <span className="font-medium text-text group-hover:text-[#2D5A3C]">
                    Import Data
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-text/40" />
                <input
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={() => showToast('Import format verified')}
                />
              </label>

              {/* Log Out */}
              <button
                type="button"
                onClick={logout}
                className="w-full py-3.5 flex items-center justify-between text-left group hover:text-[#D93025] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="w-4 h-4 text-text/60 group-hover:text-[#D93025]" />
                  <span className="font-medium text-text group-hover:text-[#D93025]">
                    Log Out of Expensio
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-text/40" />
              </button>

              {/* Delete Account */}
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(true)}
                className="w-full py-3.5 flex items-center justify-between text-left group text-[#D93025] hover:text-[#B91C1C] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Trash2 className="w-4 h-4 text-[#D93025]" />
                  <span className="font-medium">Delete Account</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#D93025]/50" />
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="space-y-6">
          {/* Card 4: Preferences */}
          <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                <SlidersHorizontal className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-semibold text-text text-base leading-snug">
                  Preferences
                </h2>
                <p className="text-xs text-text-muted">
                  Customize your expense tracking experience.
                </p>
              </div>
            </div>

            {/* 3 Preference Settings Rows */}
            <div className="space-y-4">
              {/* Row 1: Currency */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-5 text-center font-bold text-text/80 text-sm">
                    ₹
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-text">
                    Currency
                  </span>
                </div>
                <div className="relative">
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="appearance-none bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] text-text text-xs sm:text-sm font-medium rounded-xl pl-3.5 pr-8 py-2 shadow-subtle cursor-pointer outline-none hover:bg-[#FAF8F3] transition-colors"
                  >
                    <option value="INR (₹)">INR (₹)</option>
                    <option value="USD ($)">USD ($)</option>
                    <option value="EUR (€)">EUR (€)</option>
                    <option value="GBP (£)">GBP (£)</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-text/60 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 2: Date Format */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-text/60 ml-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-text">
                    Date Format
                  </span>
                </div>
                <div className="relative">
                  <select
                    value={dateFormat}
                    onChange={(e) => setDateFormat(e.target.value)}
                    className="appearance-none bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] text-text text-xs sm:text-sm font-medium rounded-xl pl-3.5 pr-8 py-2 shadow-subtle cursor-pointer outline-none hover:bg-[#FAF8F3] transition-colors"
                  >
                    <option value="DD MMM YYYY (03 Sep 2025)">
                      DD MMM YYYY (03 Sep 2025)
                    </option>
                    <option value="YYYY-MM-DD (2025-09-03)">
                      YYYY-MM-DD (2025-09-03)
                    </option>
                    <option value="MM/DD/YYYY (09/03/2025)">
                      MM/DD/YYYY (09/03/2025)
                    </option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-text/60 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 3: Language */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-text/60 ml-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-text">
                    Language
                  </span>
                </div>
                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="appearance-none bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] text-text text-xs sm:text-sm font-medium rounded-xl pl-3.5 pr-8 py-2 shadow-subtle cursor-pointer outline-none hover:bg-[#FAF8F3] transition-colors"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी (Hindi)</option>
                    <option value="Spanish">Español</option>
                    <option value="French">Français</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-text/60 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Appearance */}
          <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                <Monitor className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-semibold text-text text-base leading-snug">
                  Appearance
                </h2>
                <p className="text-xs text-text-muted">
                  Choose how Expensio looks for you.
                </p>
              </div>
            </div>

            {/* 3 Theme Option Cards (Light | Dark | System) */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              {/* Option 1: Light */}
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`relative flex flex-col items-center justify-center py-4 px-3 rounded-2xl border transition-all ${
                  theme === 'light'
                    ? 'bg-[#EAF3EC] border-[#2D5A3C] text-text font-semibold shadow-sm'
                    : 'bg-white dark:bg-[#18231B] border-[#EBE6DA] dark:border-[#27382C] text-text/80 hover:bg-[#FAF8F3]'
                }`}
              >
                {theme === 'light' && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#2D5A3C] text-white flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                )}
                <Sun className="w-5 h-5 text-[#2D5A3C] mb-2 stroke-[1.8]" />
                <span className="text-xs">Light</span>
              </button>

              {/* Option 2: Dark */}
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`relative flex flex-col items-center justify-center py-4 px-3 rounded-2xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-[#1E3323] border-[#4ADE80] text-white font-semibold shadow-sm'
                    : 'bg-white dark:bg-[#18231B] border-[#EBE6DA] dark:border-[#27382C] text-text/80 hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22]'
                }`}
              >
                {theme === 'dark' && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#4ADE80] text-[#111612] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                )}
                <Moon className="w-5 h-5 text-text/70 mb-2 stroke-[1.8]" />
                <span className="text-xs">Dark</span>
              </button>

              {/* Option 3: System */}
              <button
                type="button"
                onClick={() => setTheme('system')}
                className={`relative flex flex-col items-center justify-center py-4 px-3 rounded-2xl border transition-all ${
                  theme === 'system'
                    ? 'bg-[#EAF3EC] dark:bg-[#1E3323] border-[#2D5A3C] dark:border-[#4ADE80] text-text font-semibold shadow-sm'
                    : 'bg-white dark:bg-[#18231B] border-[#EBE6DA] dark:border-[#27382C] text-text/80 hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22]'
                }`}
              >
                {theme === 'system' && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#2D5A3C] text-white flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                )}
                <Laptop className="w-5 h-5 text-text/70 mb-2 stroke-[1.8]" />
                <span className="text-xs">System</span>
              </button>
            </div>
          </div>

          {/* Card 6: Notifications */}
          <div className="bg-[#FFFFFF] dark:bg-[#17221A] border border-[#ECE7DA] dark:border-[#26372A] rounded-2xl p-5 sm:p-6 shadow-card">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#E6F4EA] dark:bg-[#1B2F21] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <h2 className="font-semibold text-text text-base leading-snug">
                  Notifications
                </h2>
                <p className="text-xs text-text-muted">
                  Choose what updates you want to receive.
                </p>
              </div>
            </div>

            {/* List of 4 Notification Toggles */}
            <div className="divide-y divide-[#F2EFE8] dark:divide-[#223025] text-xs sm:text-sm">
              {/* Toggle 1: Expense & Income Alerts */}
              <div className="py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-text/60" />
                  <span className="font-medium text-text">
                    Expense & Income Alerts
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifExpense(!notifExpense)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 outline-none ${
                    notifExpense ? 'bg-[#2D5A3C]' : 'bg-[#D1D5DB] dark:bg-[#374151]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      notifExpense ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle 2: Budget Reminders */}
              <div className="py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className="w-4 h-4 text-text/60" />
                  <span className="font-medium text-text">
                    Budget Reminders
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifBudget(!notifBudget)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 outline-none ${
                    notifBudget ? 'bg-[#2D5A3C]' : 'bg-[#D1D5DB] dark:bg-[#374151]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      notifBudget ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle 3: Goal Progress Updates */}
              <div className="py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Flag className="w-4 h-4 text-text/60" />
                  <span className="font-medium text-text">
                    Goal Progress Updates
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifGoal(!notifGoal)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 outline-none ${
                    notifGoal ? 'bg-[#2D5A3C]' : 'bg-[#D1D5DB] dark:bg-[#374151]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      notifGoal ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Toggle 4: Monthly Summary Report */}
              <div className="py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-text/60" />
                  <span className="font-medium text-text">
                    Monthly Summary Report
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotifSummary(!notifSummary)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 outline-none ${
                    notifSummary ? 'bg-[#2D5A3C]' : 'bg-[#D1D5DB] dark:bg-[#374151]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                      notifSummary ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
        title="Edit Profile"
        description="Update your name and primary email address."
      >
        <form onSubmit={handleProfileSave} className="space-y-4 mt-3">
          <Input
            label="Full Name"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            required
            autoFocus
          />
          <Input
            label="Email Address"
            type="email"
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2.5 pt-3">
            <Button variant="secondary" onClick={() => setIsEditProfileOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete / Clear Data Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Delete All Data?"
        description="This will clear your local storage, reset all saved expenses and goals. This action cannot be reversed."
      >
        <div className="flex justify-end gap-2.5 pt-4">
          <Button variant="secondary" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteData}>
            Confirm Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Settings;
