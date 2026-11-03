import React from 'react';

export function LandscapeBanner({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none rounded-[20px] ${className}`}>
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1000 320"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky Gradient */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBF7EE" />
            <stop offset="50%" stopColor="#F5EFE1" />
            <stop offset="100%" stopColor="#E9F0E8" />
          </linearGradient>

          {/* Morning Sun Radial Glow */}
          <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#FDE68A" stopOpacity="0.6" />
            <stop offset="85%" stopColor="#FEF3C7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
          </radialGradient>

          {/* Mountain Gradient Far */}
          <linearGradient id="mountFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0EBE2" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#D2E2D5" stopOpacity="0.95" />
          </linearGradient>

          {/* Mountain Gradient Mid */}
          <linearGradient id="mountMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BAD5C1" />
            <stop offset="100%" stopColor="#A2C3AA" />
          </linearGradient>

          {/* Mountain Gradient Near */}
          <linearGradient id="mountNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#87B092" />
            <stop offset="100%" stopColor="#6E9A7A" />
          </linearGradient>
        </defs>

        {/* Base Background */}
        <rect width="1000" height="320" fill="url(#skyGrad)" />

        {/* Soft Morning Sun */}
        <circle cx="740" cy="115" r="48" fill="url(#sunGlow)" />
        <circle cx="740" cy="115" r="30" fill="#FDBA74" fillOpacity="0.8" />

        {/* Distant Misty Mountains */}
        <path
          d="M320 320L440 200C500 150 560 170 620 220C680 180 740 170 820 215L940 160L1000 190V320H320Z"
          fill="url(#mountFar)"
        />

        {/* Mid-range Rolling Hills */}
        <path
          d="M260 320C320 270 410 240 500 270C570 230 650 225 730 260C820 220 900 240 1000 280V320H260Z"
          fill="url(#mountMid)"
          fillOpacity="0.85"
        />

        {/* Closer Soft Green Hills */}
        <path
          d="M350 320C420 285 520 260 620 285C700 265 790 275 870 300C930 285 970 295 1000 310V320H350Z"
          fill="url(#mountNear)"
          fillOpacity="0.5"
        />

        {/* Pine Trees Silhouette Cluster Right */}
        <g fill="#437351" opacity="0.9">
          {/* Tree 1 */}
          <polygon points="930,120 918,160 924,160 912,195 920,195 906,240 954,240 940,195 948,195 936,160 942,160" />
          {/* Tree 2 */}
          <polygon points="885,165 875,198 880,198 870,225 876,225 864,260 906,260 894,225 900,225 890,198 895,198" />
          {/* Tree 3 */}
          <polygon points="975,185 966,215 970,215 962,238 966,238 956,270 994,270 984,238 988,238 980,215 984,215" />
          {/* Small background tree */}
          <polygon points="840,215 833,238 837,238 830,255 850,255 843,238 847,238" opacity="0.6" />
        </g>

        {/* Foreground Pine Silhouette Foreground Right */}
        <g fill="#2B5739">
          <polygon points="935,140 924,175 929,175 918,208 925,208 912,250 958,250 945,208 952,208 941,175 946,175" />
        </g>

        {/* Botanical Leaves Overlapping in Center / Left */}
        <g opacity="0.8">
          <path
            d="M480 320C475 270 485 240 500 200"
            stroke="#5D8B68"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M480 270C462 260 455 240 464 228C475 235 482 255 480 270Z"
            fill="#6E9C79"
          />
          <path
            d="M492 245C510 232 528 238 535 252C522 260 502 258 492 245Z"
            fill="#7CAE88"
          />
          <path
            d="M498 215C485 202 482 185 492 175C502 182 506 200 498 215Z"
            fill="#5D8B68"
          />
          <path
            d="M500 200C502 180 515 168 528 168C530 182 518 198 500 200Z"
            fill="#4F7E5A"
          />
        </g>
      </svg>
    </div>
  );
}

export default LandscapeBanner;

