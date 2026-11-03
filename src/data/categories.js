import {
  Utensils,
  Car,
  ShoppingBag,
  Receipt,
  HeartPulse,
  Clapperboard,
  MoreHorizontal
} from 'lucide-react';

export const CATEGORIES = [
  {
    id: 'Food',
    name: 'Food',
    color: '#F97316',
    icon: Utensils,
    description: 'Groceries, restaurants, snacks & drinks'
  },
  {
    id: 'Transport',
    name: 'Transport',
    color: '#3B82F6',
    icon: Car,
    description: 'Fuel, cabs, public transit, maintenance'
  },
  {
    id: 'Shopping',
    name: 'Shopping',
    color: '#EC4899',
    icon: ShoppingBag,
    description: 'Clothing, electronics, personal care'
  },
  {
    id: 'Bills',
    name: 'Bills',
    color: '#8B5CF6',
    icon: Receipt,
    description: 'Electricity, water, internet, rent'
  },
  {
    id: 'Health',
    name: 'Health',
    color: '#10B981',
    icon: HeartPulse,
    description: 'Medicine, doctor visits, wellness'
  },
  {
    id: 'Entertainment',
    name: 'Entertainment',
    color: '#F59E0B',
    icon: Clapperboard,
    description: 'Movies, streaming, games, outings'
  },
  {
    id: 'Other',
    name: 'Other',
    color: '#94A3B8',
    icon: MoreHorizontal,
    description: 'Miscellaneous and unexpected expenses'
  }
];

export const CATEGORY_MAP = CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = cat;
  return acc;
}, {});

export function getCategory(id) {
  return CATEGORY_MAP[id] || CATEGORY_MAP['Other'];
}

