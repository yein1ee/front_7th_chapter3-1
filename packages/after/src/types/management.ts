import type { Post, User } from '@/services';

export type EntityType = 'user' | 'post';
export type Entity = User | Post;

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

export type TableColumn = {
  key: string;
  header: string;
  width?: string;
};
