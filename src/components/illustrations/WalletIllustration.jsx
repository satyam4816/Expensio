import React from 'react';

export function WalletIllustration({ className = '' }) {
  return (
    <div className={`relative w-full aspect-[4/3] flex items-center justify-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 380 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[260px] drop-shadow-sm"
      >
        <defs>
          {/* Warm background glow */}
          <radialGradient id="haloGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#FEF3C7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
          </radialGradient>

          {/* Green Wallet Gradient */}
          <linearGradient id="walletGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3F7A52" />
            <stop offset="100%" stopColor="#2D5A3C" />
          </linearGradient>

          {/* Wallet flap highlight */}
          <linearGradient id="flapGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4A8C5E" />
            <stop offset="100%" stopColor="#2D5A3C" />
          </linearGradient>

          {/* Gold clasp */}
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          {/* Gold coin gradient */}
          <linearGradient id="coinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Soft Background Warm Halo */}
        <ellipse cx="190" cy="140" rx="140" ry="110" fill="url(#haloGlow)" />

        {/* Botanical Leaves - Left Branch */}
        <g opacity="0.85">
          <path
            d="M95 160C80 130 90 90 115 70"
            stroke="#659B73"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M90 120C72 110 68 88 80 75C95 85 98 105 90 120Z"
            fill="#7CAE88"
          />
          <path
            d="M102 95C118 80 140 85 148 100C132 110 112 108 102 95Z"
            fill="#8EB79A"
          />
          <path
            d="M115 70C118 52 135 45 146 54C144 70 130 80 115 70Z"
            fill="#5D8E6B"
          />
        </g>

        {/* Botanical Leaves - Right Branch */}
        <g opacity="0.9">
          <path
            d="M285 180C315 150 325 105 320 75"
            stroke="#5D8E6B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M295 140C315 130 330 140 335 155C320 165 302 158 295 140Z"
            fill="#7EAE8B"
          />
          <path
            d="M312 112C332 98 355 105 360 120C342 130 325 125 312 112Z"
            fill="#699B77"
          />
          <path
            d="M320 75C335 60 355 68 358 85C340 92 328 88 320 75Z"
            fill="#52835E"
          />
        </g>

        {/* Background Credit Card (Dark Green) */}
        <rect
          x="165"
          y="68"
          width="115"
          height="75"
          rx="10"
          transform="rotate(6 165 68)"
          fill="#1E442B"
          stroke="#39734C"
          strokeWidth="1.5"
        />

        {/* Foreground Credit Card (Warm Gold / Peach) */}
        <g transform="rotate(-6 145 76)">
          <rect
            x="145"
            y="76"
            width="115"
            height="75"
            rx="10"
            fill="#FCD34D"
            stroke="#F59E0B"
            strokeWidth="1.2"
          />
          <rect x="157" y="90" width="22" height="15" rx="3" fill="#D97706" opacity="0.6" />
          <line x1="157" y1="125" x2="205" y2="125" stroke="#B45309" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>

        {/* Main Leather Wallet Body */}
        <rect
          x="125"
          y="95"
          width="170"
          height="115"
          rx="20"
          fill="url(#walletGrad)"
          stroke="#234930"
          strokeWidth="1.5"
          filter="drop-shadow(0 10px 18px rgba(35, 75, 45, 0.22))"
        />

        {/* Wallet Flap Top Curved Line */}
        <path
          d="M125 120C125 105 138 95 155 95H265C282 95 295 105 295 120V140C295 155 282 165 265 165H155C138 165 125 155 125 140V120Z"
          fill="url(#flapGrad)"
          opacity="0.95"
        />

        {/* Wallet Stitching Accent */}
        <rect
          x="132"
          y="102"
          width="156"
          height="101"
          rx="15"
          fill="none"
          stroke="#55996A"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.65"
        />

        {/* Golden Clasp Button on Wallet */}
        <circle cx="270" cy="142" r="13" fill="url(#goldGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
        <circle cx="270" cy="142" r="8" fill="#FDE68A" />
        <circle cx="270" cy="142" r="4" fill="#D97706" />

        {/* Sliding Paper Bill Receipt (Zigzag torn bottom edge) */}
        <g filter="drop-shadow(0 6px 12px rgba(0,0,0,0.08))">
          <path
            d="M142 165L168 178L130 252L140 256L150 252L160 256L170 252L180 256L190 252L200 256L210 252L202 188L212 172L172 152L142 165Z"
            fill="#FFFFFF"
          />
          {/* Dashed lines on receipt */}
          <line x1="152" y1="190" x2="182" y2="204" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="146" y1="206" x2="176" y2="220" stroke="#E5E7EB" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="140" y1="222" x2="170" y2="236" stroke="#E5E7EB" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Stack of Gold Coins (Bottom Right) */}
        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))">
          {/* Coin 1 (Bottom) */}
          <ellipse cx="295" cy="216" rx="22" ry="10" fill="#B45309" />
          <path d="M273 216V224C273 229.5 282.8 234 295 234C307.2 234 317 229.5 317 224V216H273Z" fill="url(#coinGrad)" />
          <ellipse cx="295" cy="216" rx="22" ry="10" fill="#FDE68A" />
          <ellipse cx="295" cy="216" rx="18" ry="7.5" fill="none" stroke="#D97706" strokeWidth="1" />

          {/* Coin 2 (Middle) */}
          <ellipse cx="295" cy="202" rx="22" ry="10" fill="#B45309" />
          <path d="M273 202V210C273 215.5 282.8 220 295 220C307.2 220 317 215.5 317 210V202H273Z" fill="url(#coinGrad)" />
          <ellipse cx="295" cy="202" rx="22" ry="10" fill="#FDE68A" />
          <ellipse cx="295" cy="202" rx="18" ry="7.5" fill="none" stroke="#D97706" strokeWidth="1" />

          {/* Coin 3 (Top of first stack) */}
          <ellipse cx="295" cy="188" rx="22" ry="10" fill="#B45309" />
          <path d="M273 188V196C273 201.5 282.8 206 295 206C307.2 206 317 201.5 317 196V188H273Z" fill="url(#coinGrad)" />
          <ellipse cx="295" cy="188" rx="22" ry="10" fill="#FCD34D" />
          <ellipse cx="295" cy="188" rx="18" ry="7.5" fill="none" stroke="#D97706" strokeWidth="1" />

          {/* Coin 4 (Slightly staggered in front) */}
          <ellipse cx="270" cy="225" rx="18" ry="8" fill="#B45309" />
          <path d="M252 225V231C252 235.4 260 239 270 239C280 239 288 235.4 288 231V225H252Z" fill="url(#coinGrad)" />
          <ellipse cx="270" cy="225" rx="18" ry="8" fill="#FDE68A" />
          <ellipse cx="270" cy="225" rx="14" ry="6" fill="none" stroke="#D97706" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

export default WalletIllustration;

