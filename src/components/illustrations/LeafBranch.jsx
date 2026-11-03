import React from 'react';

export function LeafBranch({ className = '', variant = 'sidebar' }) {
  if (variant === 'sidebar') {
    return (
      <svg
        viewBox="0 0 160 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M20 210C35 170 55 120 70 40"
          stroke="#7BA686"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />
        {/* Leaves along the branch */}
        <path
          d="M26 185C38 175 60 178 68 190C60 198 40 196 26 185Z"
          fill="#8BB596"
          fillOpacity="0.55"
        />
        <path
          d="M38 150C22 142 15 125 24 112C35 120 42 138 38 150Z"
          fill="#78A683"
          fillOpacity="0.5"
        />
        <path
          d="M48 128C65 116 88 120 98 135C86 145 62 142 48 128Z"
          fill="#8BB596"
          fillOpacity="0.5"
        />
        <path
          d="M58 92C44 80 40 60 52 48C62 58 66 78 58 92Z"
          fill="#6F9D7B"
          fillOpacity="0.55"
        />
        <path
          d="M66 65C85 52 110 56 120 72C108 82 82 78 66 65Z"
          fill="#8BB596"
          fillOpacity="0.55"
        />
        <path
          d="M70 40C68 20 78 8 92 6C96 20 86 35 70 40Z"
          fill="#5E8C6A"
          fillOpacity="0.6"
        />
      </svg>
    );
  }

  // Hero banner branch variant
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 170C50 140 90 90 120 30"
        stroke="#76A382"
        strokeWidth="3"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
      <path
        d="M45 138C65 124 95 128 106 145C92 156 64 153 45 138Z"
        fill="#82AD8E"
        fillOpacity="0.6"
      />
      <path
        d="M65 102C48 90 42 70 55 56C68 66 75 88 65 102Z"
        fill="#729E7E"
        fillOpacity="0.55"
      />
      <path
        d="M86 78C110 62 142 66 156 86C140 100 106 94 86 78Z"
        fill="#8EB79A"
        fillOpacity="0.6"
      />
      <path
        d="M106 48C96 32 98 14 114 6C124 18 122 36 106 48Z"
        fill="#5F8D6B"
        fillOpacity="0.65"
      />
    </svg>
  );
}

export default LeafBranch;

