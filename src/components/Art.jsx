// Inline SVG artworks drawn for the pine & gold theme (no stock photos).
// Kept as components so the homepage stays self-contained and fast.

/**
 * Line-art trading dashboard: framed terminal window with an area chart,
 * bar series and KPI tiles. Used in the About section and About Us page.
 */
export function DashboardArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 560 420" role="img" aria-label="Line-art illustration of the Fortune Gainhol trading dashboard">
      <defs>
        <linearGradient id="dash-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ddb96a" stopOpacity="0.5" />
          <stop offset="1" stopColor="#c8a24b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* window frame */}
      <rect x="1" y="1" width="558" height="418" rx="12" fill="#fffdf6" stroke="#e6dcc2" />
      <rect x="14" y="14" width="532" height="392" rx="7" fill="none" stroke="rgba(161,127,54,0.25)" />

      {/* title bar */}
      <line x1="24" y1="46" x2="536" y2="46" stroke="#e6dcc2" />
      <circle cx="42" cy="32" r="4.5" fill="#c8a24b" />
      <circle cx="60" cy="32" r="4.5" fill="#e6dcc2" stroke="#c8a24b" />
      <circle cx="78" cy="32" r="4.5" fill="#2f6b51" />
      <text x="98" y="38" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#24332d">Portfolio · All Assets</text>

      {/* KPI tiles */}
      <g fontFamily="Inter, Arial, sans-serif">
        <rect x="36" y="70" width="150" height="74" rx="8" fill="#faf5e9" stroke="#e6dcc2" />
        <text x="52" y="96" fontSize="12" fontWeight="600" fill="#67766e" fontFamily="Inter, Arial, sans-serif">PORTFOLIO VALUE</text>
        <text x="52" y="128" fontSize="26" fontWeight="700" fill="#0d2c22">$124,560</text>
        <rect x="204" y="70" width="150" height="74" rx="8" fill="#0d2c22" />
        <text x="220" y="96" fontSize="12" fontWeight="600" fill="#ddb96a" fontFamily="Inter, Arial, sans-serif">RETURN · 12 MO</text>
        <text x="220" y="128" fontSize="26" fontWeight="700" fill="#faf5e9">+8.2%</text>
        <rect x="372" y="70" width="150" height="74" rx="8" fill="#faf5e9" stroke="#e6dcc2" />
        <text x="388" y="96" fontSize="12" fontWeight="600" fill="#67766e" fontFamily="Inter, Arial, sans-serif">AI SIGNALS</text>
        <text x="388" y="128" fontSize="26" fontWeight="700" fill="#2f6b51">92%</text>
      </g>

      {/* grid */}
      <g stroke="#e6dcc2">
        <line x1="36" y1="180" x2="524" y2="180" />
        <line x1="36" y1="232" x2="524" y2="232" />
        <line x1="36" y1="284" x2="524" y2="284" />
        <line x1="36" y1="336" x2="524" y2="336" />
      </g>

      {/* area chart */}
      <path
        d="M36 318 C 90 310, 130 288, 180 296 S 260 244, 300 252 S 380 190, 420 202 S 490 140, 524 148 L 524 336 L 36 336 Z"
        fill="url(#dash-gold)"
      />
      <path
        d="M36 318 C 90 310, 130 288, 180 296 S 260 244, 300 252 S 380 190, 420 202 S 490 140, 524 148"
        fill="none"
        stroke="#2f6b51"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* diamond markers */}
      <g fill="#c8a24b" stroke="#0d2c22" strokeWidth="2">
        <rect x="292" y="244" width="14" height="14" transform="rotate(45 299 251)" />
        <rect x="412" y="194" width="14" height="14" transform="rotate(45 419 201)" />
        <rect x="516" y="140" width="14" height="14" transform="rotate(45 523 147)" />
      </g>

      {/* bar series */}
      <g fill="#c8a24b">
        <rect x="60" y="362" width="16" height="26" rx="2" opacity="0.45" />
        <rect x="90" y="352" width="16" height="36" rx="2" opacity="0.55" />
        <rect x="120" y="344" width="16" height="44" rx="2" opacity="0.65" />
        <rect x="150" y="354" width="16" height="34" rx="2" opacity="0.5" />
        <rect x="180" y="336" width="16" height="52" rx="2" opacity="0.75" />
        <rect x="210" y="344" width="16" height="44" rx="2" opacity="0.65" />
      </g>
      <g fill="#2f6b51">
        <rect x="240" y="346" width="16" height="42" rx="2" opacity="0.8" />
        <rect x="270" y="330" width="16" height="58" rx="2" />
      </g>

      {/* caption */}
      <text x="36" y="398" fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#67766e">Live portfolio tracking · desktop, tablet and mobile</text>
    </svg>
  )
}

/**
 * Wealth-growth motif: rising gold path with diamond nodes over a
 * pine backdrop. Used on the Product page's trading-experience block.
 */
export function GrowthArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 560 420" role="img" aria-label="Line-art illustration of wealth growth with the Fortune Gainhol platform">
      <defs>
        <linearGradient id="growth-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ddb96a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#c8a24b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* frame */}
      <rect x="1" y="1" width="558" height="418" rx="12" fill="#0d2c22" stroke="rgba(221,185,106,0.25)" />
      <rect x="14" y="14" width="532" height="392" rx="7" fill="none" stroke="rgba(221,185,106,0.18)" />

      {/* lattice */}
      <g stroke="#ddb96a" strokeOpacity="0.06">
        <path d="M0 80 H560 M0 120 H560 M0 160 H560 M0 200 H560 M0 240 H560 M0 280 H560 M0 320 H560 M0 360 H560" />
        <path d="M80 0 V420 M160 0 V420 M240 0 V420 M320 0 V420 M400 0 V420 M480 0 V420" />
      </g>

      {/* candlesticks */}
      <g stroke="#c9d8cf" strokeOpacity="0.5" strokeWidth="2">
        <line x1="70" y1="300" x2="70" y2="270" /><line x1="78" y1="290" x2="78" y2="272" stroke="#ddb96a" />
        <line x1="110" y1="310" x2="110" y2="252" /><line x1="118" y1="296" x2="118" y2="262" stroke="#ddb96a" />
        <line x1="150" y1="290" x2="150" y2="238" /><line x1="158" y1="278" x2="158" y2="246" stroke="#ddb96a" />
        <line x1="190" y1="300" x2="190" y2="226" /><line x1="198" y1="286" x2="198" y2="236" stroke="#ddb96a" />
      </g>

      {/* growth path */}
      <path
        d="M40 330 C 110 318, 160 268, 220 258 S 320 190, 370 172 S 470 96, 530 78 L 530 360 L 40 360 Z"
        fill="url(#growth-gold)"
      />
      <path
        d="M40 330 C 110 318, 160 268, 220 258 S 320 190, 370 172 S 470 96, 530 78"
        fill="none"
        stroke="#c8a24b"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* diamond nodes */}
      <g fill="#ddb96a" stroke="#071d16" strokeWidth="2.5">
        <rect x="212" y="250" width="15" height="15" transform="rotate(45 219.5 257.5)" />
        <rect x="362" y="164" width="15" height="15" transform="rotate(45 369.5 171.5)" />
        <rect x="518" y="68" width="17" height="17" transform="rotate(45 526.5 76.5)" />
      </g>

      {/* labels */}
      <g fontFamily="Inter, Arial, sans-serif">
        <text x="40" y="96" fontSize="24" fontWeight="700" fill="#faf5e9">Grow Your Fortune</text>
        <text x="40" y="124" fontSize="15" fill="#c9d8cf" fontFamily="Inter, Arial, sans-serif">AI signals · copy trading · 300+ markets</text>
        <rect x="40" y="146" width="130" height="44" rx="22" fill="#c8a24b" />
        <text x="105" y="174" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0d2c22" fontFamily="Inter, Arial, sans-serif">Get started</text>
      </g>

      <text x="40" y="398" fontFamily="Inter, Arial, sans-serif" fontSize="12" fill="#c9d8cf">Illustrative artwork - trading involves significant risk</text>
    </svg>
  )
}
