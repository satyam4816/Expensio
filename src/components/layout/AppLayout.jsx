import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import BottomNav from './BottomNav';
import { Modal, Input, Select, Button } from '../ui';
import { CATEGORIES } from '../../data/categories';

export function AppLayout() {
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openAddModal = () => setIsAddExpenseOpen(true);
  const closeAddModal = () => setIsAddExpenseOpen(false);

  return (
    <div className="min-h-screen bg-bg text-text flex font-sans selection:bg-[#2D5A3C]/20 selection:text-[#2D5A3C]">
      {/* Fixed Botanical Sidebar (Desktop) */}
      <Sidebar onAddExpense={openAddModal} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <TopBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddExpense={openAddModal}
        />

        <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 pb-28 md:pb-10 overflow-x-hidden">
          <Outlet context={{ searchQuery, openAddModal }} />
        </main>

        {/* Mobile Bottom Nav */}
        <BottomNav onAddExpense={openAddModal} />
      </div>

      {/* Quick Add Expense Modal */}
      <Modal
        isOpen={isAddExpenseOpen}
        onClose={closeAddModal}
        title="Add New Expense"
        description="Quickly record your spending to keep your balance accurate."
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeAddModal();
          }}
          className="space-y-4 mt-2"
        >
          <Input
            label="Amount (₹)"
            type="number"
            placeholder="0.00"
            prefix="₹"
            autoFocus
            required
          />
          <Input
            label="Description"
            placeholder="e.g. Dinner, Uber, Groceries"
            required
          />
          <Select
            label="Category"
            options={CATEGORIES.map((c) => ({ value: c.id, label: c.name }))}
          />
          <div className="flex justify-end gap-2.5 pt-3">
            <Button variant="secondary" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Expense
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AppLayout;
