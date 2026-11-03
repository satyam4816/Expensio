import React from 'react';

export function DeskIllustration({ className = '' }) {
  return (
    <div className={`relative w-full max-w-[420px] aspect-[4/3] mx-auto select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 460 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          {/* Warm Sunbeam glow */}
          <radialGradient id="deskSunlight" cx="0.8" cy="0.2" r="0.8">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FEF3C7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
          </radialGradient>

          {/* Wooden Desk surface */}
          <linearGradient id="woodenDesk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E9DDC9" />
            <stop offset="25%" stopColor="#DFCDB5" />
            <stop offset="100%" stopColor="#CEB79B" />
          </linearGradient>

          {/* Laptop Screen glow */}
          <linearGradient id="laptopScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FAF8F3" />
            <stop offset="100%" stopColor="#EDF4EE" />
          </linearGradient>
        </defs>

        {/* Sunlight ambient overlay */}
        <rect width="460" height="320" fill="url(#deskSunlight)" />

        {/* Wooden Desk Surface */}
        <path d="M0 240L460 240L460 320L0 320Z" fill="url(#woodenDesk)" />
        <line x1="0" y1="240" x2="460" y2="240" stroke="#BFA889" strokeWidth="1.5" />

        {/* Stack of Books (Bottom-Left) */}
        <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))">
          {/* Bottom Book */}
          <rect x="35" y="246" width="105" height="18" rx="3" fill="#FAF6EE" stroke="#DDD1BE" strokeWidth="1" />
          <path d="M35 246H42V264H35V246Z" fill="#366B46" />
          {/* Middle Book */}
          <rect x="30" y="230" width="115" height="18" rx="3" fill="#2D5A3C" />
          <path d="M30 230H38V248H30V230Z" fill="#20442D" />
          <line x1="38" y1="239" x2="140" y2="239" stroke="#528864" strokeWidth="0.8" />
        </g>

        {/* Green Coffee Mug with Leaf Emblem & Rising Steam */}
        <g filter="drop-shadow(0 6px 8px rgba(0,0,0,0.12))">
          {/* Mug handle */}
          <path
            d="M52 195C38 195 38 215 52 215"
            stroke="#20442D"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Mug Body */}
          <rect x="52" y="180" width="46" height="48" rx="8" fill="#264F34" />
          {/* Coffee Surface inside */}
          <ellipse cx="75" cy="182" rx="20" ry="5" fill="#422513" />
          {/* Leaf Emblem on Mug */}
          <path
            d="M72 208C73 203 77 198 83 197C83 203 79 207 74 208H72Z"
            fill="#7FB18D"
          />
          {/* Steam wisps */}
          <path
            d="M68 172C66 164 70 160 68 152"
            stroke="#B5CBB9"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M78 170C80 162 76 158 78 150"
            stroke="#B5CBB9"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>

        {/* Spiral Notebook & Pen (Foreground) */}
        <g filter="drop-shadow(0 4px 6px rgba(0,0,0,0.07))">
          <rect x="95" y="260" width="115" height="42" rx="4" fill="#FCFAF6" stroke="#E5DEC6" strokeWidth="1" />
          {/* Spiral binding rings */}
          {[102, 114, 126, 138, 150, 162, 174, 186, 198].map((x) => (
            <ellipse key={x} cx={x} cy="260" rx="2" ry="4" fill="#9CA3AF" />
          ))}
          {/* Green Ballpoint Pen */}
          <rect x="140" y="270" width="60" height="5" rx="2.5" fill="#2D5A3C" transform="rotate(-5 140 270)" />
          <polygon points="135,273 140,271 140,275" fill="#D1D5DB" />
        </g>

        {/* Modern Laptop with Expenso UI Dashboard Preview */}
        <g filter="drop-shadow(0 14px 22px rgba(35,65,45,0.18))">
          {/* Laptop Display Lid (Angle) */}
          <rect x="140" y="85" width="200" height="135" rx="8" fill="#1C241E" />
          {/* Bezel inner screen */}
          <rect x="145" y="90" width="190" height="125" rx="5" fill="url(#laptopScreen)" />

          {/* Screen UI - Expenso Mini Dashboard */}
          {/* Top Bar inside laptop */}
          <rect x="145" y="90" width="190" height="14" fill="#FAF8F2" />
          <circle cx="152" cy="97" r="2.5" fill="#528360" />
          <rect x="157" y="95" width="26" height="4" rx="2" fill="#2D5A3C" />

          {/* Left Mini Sidebar */}
          <rect x="145" y="104" width="30" height="111" fill="#F4F0E6" />
          <rect x="148" y="109" width="24" height="6" rx="3" fill="#2D5A3C" />
          <circle cx="152" cy="122" r="2" fill="#88998C" />
          <circle cx="152" cy="132" r="2" fill="#88998C" />
          <circle cx="152" cy="142" r="2" fill="#88998C" />

          {/* Metric cards inside laptop */}
          <rect x="180" y="108" width="46" height="22" rx="3" fill="#FFFFFF" stroke="#EBE6DA" strokeWidth="0.5" />
          <rect x="184" y="112" width="16" height="3" rx="1.5" fill="#88998C" />
          <rect x="184" y="118" width="26" height="6" rx="2" fill="#2D5A3C" />

          <rect x="230" y="108" width="46" height="22" rx="3" fill="#FFFFFF" stroke="#EBE6DA" strokeWidth="0.5" />
          <rect x="234" y="112" width="16" height="3" rx="1.5" fill="#88998C" />
          <rect x="234" y="118" width="24" height="6" rx="2" fill="#E05252" />

          <rect x="280" y="108" width="50" height="22" rx="3" fill="#FFFFFF" stroke="#EBE6DA" strokeWidth="0.5" />
          <rect x="284" y="112" width="16" height="3" rx="1.5" fill="#88998C" />
          <rect x="284" y="118" width="24" height="6" rx="2" fill="#3B82F6" />

          {/* Mini Bar Chart inside laptop */}
          <rect x="180" y="136" width="94" height="68" rx="4" fill="#FFFFFF" stroke="#EBE6DA" strokeWidth="0.5" />
          <rect x="186" y="174" width="7" height="22" rx="2" fill="#A8CCB1" />
          <rect x="198" y="162" width="7" height="34" rx="2" fill="#A8CCB1" />
          <rect x="210" y="152" width="7" height="44" rx="2" fill="#A8CCB1" />
          <rect x="222" y="145" width="7" height="51" rx="2" fill="#A8CCB1" />
          <rect x="234" y="150" width="7" height="46" rx="2" fill="#A8CCB1" />
          <rect x="246" y="140" width="7" height="56" rx="2" fill="#2D5A3C" />

          {/* Mini Donut Chart inside laptop */}
          <rect x="280" y="136" width="50" height="68" rx="4" fill="#FFFFFF" stroke="#EBE6DA" strokeWidth="0.5" />
          <circle cx="305" cy="168" r="17" fill="none" stroke="#2D5A3C" strokeWidth="6" strokeDasharray="35 70" />
          <circle cx="305" cy="168" r="17" fill="none" stroke="#F87171" strokeWidth="6" strokeDasharray="22 83" strokeDashoffset="-35" />
          <circle cx="305" cy="168" r="17" fill="none" stroke="#60A5FA" strokeWidth="6" strokeDasharray="20 85" strokeDashoffset="-57" />
          <circle cx="305" cy="168" r="17" fill="none" stroke="#FBBF24" strokeWidth="6" strokeDasharray="18 87" strokeDashoffset="-77" />

          {/* Laptop Base & Keyboard Plate */}
          <path d="M120 220L140 220L340 220L360 220L370 226L110 226Z" fill="#C5C8CD" />
          <rect x="110" y="226" width="260" height="4" rx="2" fill="#9BA1AA" />
          {/* Trackpad notch */}
          <rect x="225" y="222" width="30" height="3" rx="1.5" fill="#8E949D" />
        </g>

        {/* Potted Green Plant with Fresh Leaves (Right) */}
        <g filter="drop-shadow(0 6px 10px rgba(0,0,0,0.12))">
          {/* Ceramic Plant Pot */}
          <path d="M355 200L395 200L388 248L362 248Z" fill="#E8DFD3" stroke="#D2C7B7" strokeWidth="1" />
          {/* Pot Rim */}
          <ellipse cx="375" cy="200" rx="22" ry="4" fill="#F4ECE1" />

          {/* Lush Green Stem and Leaves */}
          <path d="M375 198C372 165 365 140 350 115" stroke="#4C825C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M375 185C385 160 398 145 410 135" stroke="#4C825C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M375 170C365 155 352 145 340 142" stroke="#4C825C" strokeWidth="2" strokeLinecap="round" />

          {/* Leaf 1 */}
          <path d="M350 115C335 110 330 92 342 80C356 88 360 106 350 115Z" fill="#75A683" />
          {/* Leaf 2 */}
          <path d="M410 135C425 125 432 108 422 96C410 105 404 122 410 135Z" fill="#8AB796" />
          {/* Leaf 3 */}
          <path d="M340 142C325 140 318 126 328 116C340 122 345 135 340 142Z" fill="#5F936D" />
          {/* Leaf 4 (Center Top) */}
          <path d="M370 140C365 120 375 105 388 102C392 118 384 135 370 140Z" fill="#6DA27B" />
          {/* Leaf 5 */}
          <path d="M390 170C405 165 415 155 418 142C405 148 395 160 390 170Z" fill="#7FB18E" />
          {/* Leaf 6 */}
          <path d="M358 175C345 170 338 160 335 150C348 155 355 165 358 175Z" fill="#669973" />
        </g>
      </svg>
    </div>
  );
}

export default DeskIllustration;

