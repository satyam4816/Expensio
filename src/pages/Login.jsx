import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Check, Loader2 } from 'lucide-react';
import { Logo } from '../components/layout/Logo';
import { DeskIllustration } from '../components/auth/DeskIllustration';
import { LeafBranch } from '../components/illustrations/LeafBranch';
import { useAuth } from '../context/AuthContext';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Fake auth login
      login({
        name: email.split('@')[0].replace('.', ' '),
        email: email,
      });
      setLoading(false);
      navigate('/app');
    }, 800);
  };

  const handleSocialLogin = (provider) => {
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
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-text tracking-tight leading-tight flex items-center gap-2">
                <span>Welcome Back!</span>
                <span className="text-3xl sm:text-4xl">👋</span>
              </h1>
              <p className="text-sm sm:text-base text-text-muted mt-2 max-w-md">
                Sign in to continue managing your expenses, budgets and goals.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3 pt-1 text-sm font-medium text-text/85">
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Track your daily expenses</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Set monthly budgets</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>Achieve your savings goals</span>
              </li>
            </ul>

            {/* Desk Scene Illustration */}
            <div className="pt-2">
              <DeskIllustration />
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Form Card ================= */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[480px] bg-[#FFFFFF] dark:bg-[#162018] border border-[#EBE6DA] dark:border-[#27382C] rounded-[28px] p-7 sm:p-10 shadow-card">
              {/* Card Title */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <h2 className="font-serif text-3xl font-bold text-text">
                    Sign In
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
                  Access your Expensio account
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-[#FEE2E2] dark:bg-[#3B1E1E] border border-[#FCA5A5] text-[#D93025] dark:text-[#F87171] text-xs font-medium">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-text/60 absolute left-4 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-11 pr-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                  />
                </div>

                {/* Password Field */}
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-text/60 absolute left-4 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-11 pr-11 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
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

                {/* Forgot Password Link */}
                <div className="flex justify-end pt-0.5">
                  <Link
                    to="/forgot-password"
                    className="text-xs font-semibold text-[#2D5A3C] dark:text-[#4ADE80] hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-[#2D5A3C] hover:bg-[#22472F] text-white py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all disabled:opacity-70"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{loading ? 'Signing In...' : 'Sign In'}</span>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#EBE6DA] dark:border-[#27382C]" />
                </div>
                <span className="relative px-3 bg-[#FFFFFF] dark:bg-[#162018] text-xs text-text-muted font-medium">
                  Or continue with
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                {/* Google */}
                <button
                  type="button"
                  onClick={() => handleSocialLogin('Google')}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22] transition-colors text-xs font-semibold text-text shadow-subtle"
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
                  onClick={() => handleSocialLogin('GitHub')}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#EBE6DA] dark:border-[#27382C] hover:bg-[#FAF8F3] dark:hover:bg-[#1F2E22] transition-colors text-xs font-semibold text-text shadow-subtle"
                >
                  <svg className="w-4 h-4 fill-current text-text" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>Continue with GitHub</span>
                </button>
              </div>

              {/* Bottom Footer Link */}
              <p className="text-center text-xs text-text-muted mt-6">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="font-bold text-[#2D5A3C] dark:text-[#4ADE80] underline hover:opacity-80"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
