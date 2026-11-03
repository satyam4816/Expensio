import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Select,
  Modal,
  Badge,
  ProgressBar,
  Toast,
  Skeleton,
  SkeletonBars,
  EmptyState,
  IconButton,
  ThemeToggle
} from '../components/ui';
import { CATEGORIES } from '../data/categories';
import { Plus, Trash2, Heart, Sparkles, AlertCircle } from 'lucide-react';

export function UIKit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="space-y-10 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-text">UI Component Showcase</h2>
        <p className="text-sm text-muted mt-1">
          Design tokens and reusable components verification page.
        </p>
      </div>

      {/* 1. Buttons */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">1. Buttons</h3>
        <Card className="flex flex-wrap items-center gap-3">
          <Button variant="primary" icon={Plus}>Primary Action</Button>
          <Button variant="secondary">Secondary (Visible Border)</Button>
          <Button variant="ghost">Ghost (No Border)</Button>
          <Button variant="danger" icon={Trash2}>Danger Action</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </Card>
      </section>

      {/* 2. Cards & Elevation */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">2. Cards & Elevation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card hoverEffect>
            <h4 className="font-semibold text-text text-base">Standard Surface Card</h4>
            <p className="text-sm text-muted mt-1">
              Soft 16px radius, thin border, and delicate elevation shadow.
            </p>
          </Card>
          <Card variant="accent">
            <h4 className="font-semibold text-primary text-base">Accent Highlight Card</h4>
            <p className="text-sm text-muted mt-1">
              Subtle primary-tinted border and light ~8% primary tint background.
            </p>
          </Card>
        </div>
      </section>

      {/* 3. Inputs & Selects */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">3. Form Inputs</h3>
        <Card className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Expense Amount"
            prefix="₹"
            placeholder="0.00"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Select
            label="Category"
            options={CATEGORIES.map((c) => ({ value: c.id, label: c.name }))}
          />
          <Input
            label="Error Validation Example"
            placeholder="0"
            error="Amount must be greater than 0"
            defaultValue=""
          />
        </Card>
      </section>

      {/* 4. Categories & Badges */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
          4. Categories (Exact 7 Names & Colors)
        </h3>
        <Card className="space-y-4">
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat.id}
                color={cat.color}
                icon={cat.icon}
                dot
                className="py-1 px-3 text-xs"
              >
                {cat.name}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-border/80">
            <span className="text-xs font-medium text-muted mr-2">Status Badges:</span>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </Card>
      </section>

      {/* 5. Progress Bars */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
          5. Progress Bar (With Visible Rounded Muted Track)
        </h3>
        <Card className="space-y-4">
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-text">Under 80% (Primary)</span>
              <span className="text-primary font-bold">60%</span>
            </div>
            <ProgressBar value={60} max={100} />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-text">80% to 100% (Amber Warning)</span>
              <span className="text-warning font-bold">88%</span>
            </div>
            <ProgressBar value={88} max={100} />
          </div>

          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-text">Above 100% (Red Danger)</span>
              <span className="text-danger font-bold">115%</span>
            </div>
            <ProgressBar value={115} max={100} />
          </div>
        </Card>
      </section>

      {/* 6. Skeletons (Visible shimmer & placeholder bars) */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
          6. Skeletons (Visible Muted Shimmer with 3 to 4 Bars)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="space-y-4">
            <div className="flex items-center gap-3">
              <Skeleton circle className="w-11 h-11 shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <SkeletonBars count={4} />
          </Card>

          <EmptyState
            title="No records found"
            description="Your expenses will appear here once logged."
            actionLabel="Add Expense"
            onAction={() => setIsModalOpen(true)}
          />
        </div>
      </section>

      {/* 7. Modal & Toast */}
      <section className="space-y-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">7. Modal & Toast</h3>
        <Card className="flex flex-wrap items-center gap-3">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Sample Modal (Esc & Focus Trap)
          </Button>
          <Button variant="secondary" onClick={() => setShowToast(!showToast)}>
            Toggle Toast
          </Button>
        </Card>

        {showToast && (
          <div className="pt-2">
            <Toast
              id="test-toast"
              type="success"
              title="Changes Saved"
              message="Preferences successfully updated."
              onClose={() => setShowToast(false)}
            />
          </div>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Modal Component Test"
          description="Focus is trapped inside this modal. Press Escape to close."
        >
          <div className="space-y-4 mt-3">
            <Input label="Example Field" placeholder="Auto-focused input" autoFocus />
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </section>
    </div>
  );
}

export default UIKit;

