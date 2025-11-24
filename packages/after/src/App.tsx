import React from 'react';
import { Header } from '@/shared/components/organisms';
import { ManagementPage } from '@/pages/ManagementPage';
import '@/styles/components.css';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7fafc]">
      <Header />
      <main>
        <ManagementPage />
      </main>
    </div>
  );
};
