import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  BarChart2,
  Target,
  Flag,
  Check,
  Loader2
} from 'lucide-react';
import { Logo } from '../components/layout/Logo';
import { DeskIllustration } from '../components/auth/DeskIllustration';
import { LeafBranch } from '../components/illustrations/LeafBranch';
import { useAuth } from '../context/AuthContext';

export function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Password checklist evaluation
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!firstName || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!hasMinLength || !hasUpperCase || !hasNumber) {
      setError('Please meet all password requirements.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Fake auth signup
      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
      login({
        name: fullName,
        email: email,
      });
      setLoading(false);
      navigate('/app');
    }, 800);
  };

  const handleSocialSignup = (provider) => {
    setLoading(true);
    setTimeout(() => {
      login({
        name: provider === 'Google' ? 'Sattu Kumar' : 'Sattu (GitHub)',
        email: `sattu@${provider.toLowerCase()}.com`,
      });
      setLoading(false);
      navigate('/app');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#0F1511] text-text flex flex-col justify-between selection:bg-[#2D5A3C]/20 selection:text-[#2D5A3C]">
      {/* Hanging leaves top corner accent */}
      <div className="absolute top-0 left-0 w-36 h-36 pointer-events-none opacity-80 overflow-hidden">
        <LeafBranch variant="sidebar" className="w-full h-full transform -rotate-45" />
      </div>

      <div className="flex-1 max-w-[1200px] w-full mx-auto px-6 py-8 sm:py-12 flex flex-col justify-center">
        {/* Top Logo */}
        <div className="mb-6 sm:mb-8">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ================= LEFT COLUMN: Branded Welcome & Desk ================= */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-text tracking-tight leading-tight">
                Create Your<br />Expenso Account
              </h1>
              <p className="text-sm sm:text-base text-text-muted mt-2 max-w-md">
                Start your journey towards better money management today.
              </p>
            </div>

            {/* Feature Highlights List */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0 mt-0.5">
                  <BarChart2 className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text">Track Expenses</h4>
                  <p className="text-xs text-text-muted mt-0.5">Know where your money goes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text">Set Budgets</h4>
                  <p className="text-xs text-text-muted mt-0.5">Stay in control of your spending</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0 mt-0.5">
                  <Flag className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text">Achieve Goals</h4>
                  <p className="text-xs text-text-muted mt-0.5">Save for what matters to you</p>
                </div>
              </div>
            </div>

            {/* Desk Scene Illustration */}
            <div className="pt-2">
              <DeskIllustration />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Form Card ================= */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[500px] bg-[#FFFFFF] dark:bg-[#162018] border border-[#EBE6DA] dark:border-[#27382C] rounded-[28px] p-7 sm:p-10 shadow-card">
              {/* Card Title */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <h2 className="font-serif text-3xl font-bold text-text">
                    Sign Up
                  </h2>
                  {/* Green Brush Underline Accent */}
                  <svg
                    className="w-16 h-2 mx-auto text-[#2D5A3C] dark:text-[#4ADE80] mt-1"
                    viewBox="0 0 64 8"
                    fill="currentColor"
                  >
                    <path d="M2 5C18 3 46 2 62 6C44 7 18 6 2 5Z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-text-muted mt-2">
                  Create your free Expensio account
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-[#FEE2E2] dark:bg-[#3B1E1E] border border-[#FCA5A5] text-[#D93025] dark:text-[#F87171] text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* First Name & Last Name (2-Cols) */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-text/60 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                    />
                  </div>
                  <div className="relative flex items-center">
                    <User className="w-4 h-4 text-text/60 absolute left-3.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-3 py-2.5 text-xs sm:text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-text/60 absolute left-3.5 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                  />
                </div>

                {/* Password Field */}
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-text/60 absolute left-3.5 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 p-1 text-text/50 hover:text-text"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Confirm Password Field */}
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-text/60 absolute left-3.5 pointer-events-none" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 p-1 text-text/50 hover:text-text"
                    aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password Requirements Checklist Box */}
                <div className="bg-[#FAF8F3] dark:bg-[#1C281F] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl p-3 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <Check className={`w-3.5 h-3.5 stroke-[2.5] ${hasMinLength ? 'text-[#2D5A3C] dark:text-[#4ADE80]' : 'text-text/30'}`} />
                    <span className={hasMinLength ? 'text-text font-medium' : 'text-text-muted'}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`w-3.5 h-3.5 stroke-[2.5] ${hasUpperCase ? 'text-[#2D5A3C] dark:text-[#4ADE80]' : 'text-text/30'}`} />
                    <span className={hasUpperCase ? 'text-text font-medium' : 'text-text-muted'}>
                      One uppercase letter (A–Z)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className={`w-3.5 h-3.5 stroke-[2.5] ${hasNumber ? 'text-[#2D5A3C] dark:text-[#4ADE80]' : 'text-text/30'}`} />
                    <span className={hasNumber ? 'text-text font-medium' : 'text-text-muted'}>
                      One number (0–9)
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-[#2D5A3C] hover:bg-[#22472F] text-white py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all disabled:opacity-70"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{loading ? 'Creating Account...' : 'Sign Up'}</span>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-5 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#EBE6DA] dark:border-[#27382C]" />
                </div>
                <span className="relative px-3 bg-[#FFFFFF] dark:bg-[#162018] text-xs text-text-muted font-medium">
                  Or sign up with
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {/* Google */}
                <button
                  type="button"
                  onClick={() => handleSocialSignup('Google')}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22] transition-colors text-xs font-semibold text-text shadow-subtle"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  onClick={() => handleSocialSignup('GitHub')}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22] transition-colors text-xs font-semibold text-text shadow-subtle"
                >
                  <svg className="w-4 h-4 fill-current text-text" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Continue with GitHub</span>
                </button>
              </div>

              {/* Bottom Footer Link */}
              <p className="text-center text-xs text-text-muted mt-5">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-bold text-[#2D5A3C] dark:text-[#4ADE80] underline hover:opacity-80"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
