import React from 'react';

export function LogoIcon({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dynamic Rising Arrow */}
      <path
        d="M16 57C26 55 45 46 64 30L69 25L61 21L85 10L82 35L75 29L68 34C48 50 28 58 16 57Z"
        fill="#236533"
      />

      {/* 4 Ascending Vertical Bars */}
      {/* Bar 1 (Shortest - Sage) */}
      <rect x="18" y="55" width="13" height="26" rx="2" fill="#88A977" />
      {/* Bar 2 (Medium Olive) */}
      <rect x="35" y="47" width="13" height="34" rx="2" fill="#6B955A" />
      {/* Bar 3 (Deep Forest) */}
      <rect x="52" y="37" width="13" height="44" rx="2" fill="#47773A" />
      {/* Bar 4 (Tallest - Dark Pine) */}
      <rect x="69" y="24" width="13" height="57" rx="2" fill="#1C4E26" />

      {/* Golden Base Arc */}
      <path
        d="M10 88C35 84 65 84 90 88"
        stroke="#C8A858"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className = '', showTagline = false, size = 'md' }) {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        <LogoIcon className={iconSizes[size] || iconSizes.md} />
        <span
          className={`font-serif font-extrabold tracking-wider text-[#164326] dark:text-[#E2EBE4] uppercase leading-none ${
            textSizes[size] || textSizes.md
          }`}
        >
          EXPENSIO
        </span>
      </div>

      {showTagline && (
        <div className="flex items-center gap-2 mt-1.5 justify-center">
          <div className="h-px w-5 bg-[#C8A858]" />
          <span className="text-[9px] font-bold tracking-widest text-[#164326] dark:text-[#A7BAAE] uppercase whitespace-nowrap">
            “TRACK SMART. SPEND WISE.”
          </span>
          <div className="h-px w-5 bg-[#C8A858]" />
        </div>
      )}
    </div>
  );
}

export default Logo;
