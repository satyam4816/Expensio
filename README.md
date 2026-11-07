# Expensio — Track Smart. Spend Wise.

A calm, botanical personal finance and expense tracking web application built with React 18, Vite, and Tailwind CSS.

> **Privacy Notice:** All data is stored 100% locally in your browser using `localStorage`. No external database, backend, or cloud server is used. Your financial logs and passwords remain strictly on your own device.

---

## Features

- **Local Multi-Account System:** Secure client-side accounts with Web Crypto SHA-256 password hashing and isolated per-user storage.
- **Expense & Income Logging:** Real-time logging with custom categories, payment method tracking, and quick amount increments.
- **Interactive Budgeting & Goals:** Monthly category limit progress bars, status indicators, and savings goal targets.
- **Analytics & Insights:** Clean charts powered by Recharts (area spending trends, category breakdown donut, monthly comparisons).
- **Offline & SPA Ready:** Zero-backend client architecture with `vercel.json` SPA rewrite rules and error boundaries.
- **Theme Support:** Persistent Light, Dark, and System themes with smooth transitions.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository and navigate to project folder
cd Expensio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment (Vercel / Netlify / Static Host)

A `vercel.json` configuration is included at the project root to support single-page application (SPA) client routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

