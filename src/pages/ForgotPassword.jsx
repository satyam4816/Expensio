import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Check, ArrowLeft, Loader2 } from 'lucide-react';
import { Logo } from '../components/layout/Logo';
import { LeafBranch } from '../components/illustrations/LeafBranch';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] dark:bg-[#0F1511] text-text flex flex-col justify-between selection:bg-[#2D5A3C]/20 selection:text-[#2D5A3C] relative overflow-hidden">
      {/* Hanging leaves top corner accent */}
      <div className="absolute top-0 left-0 w-36 h-36 pointer-events-none opacity-80 overflow-hidden">
        <LeafBranch variant="sidebar" className="w-full h-full transform -rotate-45" />
      </div>

      <div className="flex-1 max-w-[500px] w-full mx-auto px-6 py-12 flex flex-col justify-center">
        {/* Top Logo */}
        <div className="mb-8 text-center flex justify-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-[#FFFFFF] dark:bg-[#162018] border border-[#EBE6DA] dark:border-[#27382C] rounded-[28px] p-8 sm:p-10 shadow-card">
          <div className="text-center mb-6">
            <h2 className="font-serif text-3xl font-bold text-text">
              Reset Password
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-2">
              Enter your email address and we'll send you recovery instructions.
            </p>
          </div>

          {submitted ? (
            <div className="space-y-5 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#E3EEE4] dark:bg-[#1E3323] text-[#2D5A3C] dark:text-[#4ADE80] flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 stroke-[2.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-text">Check your inbox</h3>
                <p className="text-xs text-text-muted max-w-xs mx-auto">
                  If an account exists for <span className="font-semibold text-text">{email}</span>, you will receive password reset instructions.
                </p>
              </div>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#2D5A3C] hover:bg-[#22472F] text-white py-3 rounded-xl text-sm font-semibold transition-colors mt-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Sign In</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-text/60 absolute left-4 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  className="w-full bg-[#FFFFFF] dark:bg-[#18231B] border border-[#EBE6DA] dark:border-[#27382C] rounded-xl pl-11 pr-4 py-3 text-sm text-text placeholder:text-text-muted/60 outline-none focus:border-[#2D5A3C] focus:ring-1 focus:ring-[#2D5A3C] transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2D5A3C] hover:bg-[#22472F] text-white py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all disabled:opacity-70 mt-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                <span>{loading ? 'Sending link...' : 'Send Reset Link'}</span>
              </button>

              <div className="text-center pt-2">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-text"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
