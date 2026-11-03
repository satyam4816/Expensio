/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: {
          DEFAULT: 'var(--surface)',
          alt: 'var(--surface-alt)',
        },
        border: {
          DEFAULT: 'var(--border)',
          light: 'var(--border-light)',
        },
        text: 'var(--text)',
        muted: 'var(--text-muted)',
        'text-muted': 'var(--text-muted)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          light: 'var(--primary-light)',
        },
        accent: 'var(--accent)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        // Exact category and badge tokens matching mockup
        forest: {
          50: '#F0F6F1',
          100: '#D9E8DC',
          200: '#B8D4BF',
          500: '#3D774F',
          700: '#2D5A3C',
          800: '#22472F',
          900: '#183321',
        },
        cat: {
          food: '#F97316',
          transport: '#3B82F6',
          shopping: '#EC4899',
          bills: '#8B5CF6',
          health: '#10B981',
          entertainment: '#F59E0B',
          other: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Lora', 'Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '20px',
        input: '14px',
        button: '12px',
        pill: '9999px',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(35, 60, 40, 0.04)',
        soft: '0 4px 20px -2px rgba(35, 60, 40, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        card: '0 4px 20px -2px rgba(35, 60, 40, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        banner: '0 8px 30px -4px rgba(45, 90, 60, 0.08)',
      }
    },
  },
  plugins: [],
}
