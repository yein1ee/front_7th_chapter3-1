import React from 'react';

type StatItem = {
  label: string;
  value: number;
  color: string;
};

export type ManagementStats = {
  total: number;
  stat1: StatItem;
  stat2: StatItem;
  stat3: StatItem;
  stat4: StatItem;
};

export type StatsSectionProps = {
  stats: ManagementStats;
};

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => (
  <div className="mb-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded border border-blue-300 bg-blue-50 px-4 py-3">
      <div className="mb-1 text-xs text-gray-600">전체</div>
      <div className="text-2xl font-bold text-blue-700">{stats.total}</div>
    </div>

    <div className="rounded border border-green-300 bg-green-50 px-4 py-3">
      <div className="mb-1 text-xs text-gray-600">{stats.stat1.label}</div>
      <div className="text-2xl font-bold text-green-700">{stats.stat1.value}</div>
    </div>

    <div className="rounded border border-orange-300 bg-orange-50 px-4 py-3">
      <div className="mb-1 text-xs text-gray-600">{stats.stat2.label}</div>
      <div className="text-2xl font-bold text-orange-700">{stats.stat2.value}</div>
    </div>

    <div className="rounded border border-red-300 bg-red-50 px-4 py-3">
      <div className="mb-1 text-xs text-gray-600">{stats.stat3.label}</div>
      <div className="text-2xl font-bold text-red-700">{stats.stat3.value}</div>
    </div>

    <div className="rounded border border-gray-400 bg-gray-100 px-4 py-3">
      <div className="mb-1 text-xs text-gray-600">{stats.stat4.label}</div>
      <div className="text-2xl font-bold text-gray-800">{stats.stat4.value}</div>
    </div>
  </div>
);
