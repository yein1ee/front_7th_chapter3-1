import type { EntityType } from '@/types';
import type { User, Post } from '@/services';
import type { ManagementStats, TableColumn } from '@/types';

export const computeManagementStats = (
  entityType: EntityType,
  users: User[],
  posts: Post[],
): ManagementStats => {
  if (entityType === 'user') {
    const list = users;
    return {
      total: list.length,
      stat1: {
        label: '활성',
        value: list.filter(u => u.status === 'active').length,
        color: '#2e7d32',
      },
      stat2: {
        label: '비활성',
        value: list.filter(u => u.status === 'inactive').length,
        color: '#ed6c02',
      },
      stat3: {
        label: '정지',
        value: list.filter(u => u.status === 'suspended').length,
        color: '#d32f2f',
      },
      stat4: {
        label: '관리자',
        value: list.filter(u => u.role === 'admin').length,
        color: '#1976d2',
      },
    };
  }

  const list = posts;
  return {
    total: list.length,
    stat1: {
      label: '게시됨',
      value: list.filter(p => p.status === 'published').length,
      color: '#2e7d32',
    },
    stat2: {
      label: '임시저장',
      value: list.filter(p => p.status === 'draft').length,
      color: '#ed6c02',
    },
    stat3: {
      label: '보관됨',
      value: list.filter(p => p.status === 'archived').length,
      color: 'rgba(0, 0, 0, 0.6)',
    },
    stat4: {
      label: '총 조회수',
      value: list.reduce((sum, p) => sum + p.views, 0),
      color: '#1976d2',
    },
  };
};

export const getManagementColumns = (entityType: EntityType): TableColumn[] => {
  if (entityType === 'user') {
    return [
      { key: 'id', header: 'ID', width: '60px' },
      { key: 'username', header: '사용자명', width: '150px' },
      { key: 'email', header: '이메일' },
      { key: 'role', header: '역할', width: '120px' },
      { key: 'status', header: '상태', width: '120px' },
      { key: 'createdAt', header: '생성일', width: '120px' },
      { key: 'lastLogin', header: '마지막 로그인', width: '140px' },
      { key: 'actions', header: '관리', width: '200px' },
    ];
  }

  return [
    { key: 'id', header: 'ID', width: '60px' },
    { key: 'title', header: '제목' },
    { key: 'author', header: '작성자', width: '120px' },
    { key: 'category', header: '카테고리', width: '140px' },
    { key: 'status', header: '상태', width: '120px' },
    { key: 'views', header: '조회수', width: '100px' },
    { key: 'createdAt', header: '작성일', width: '120px' },
    { key: 'actions', header: '관리', width: '250px' },
  ];
};
