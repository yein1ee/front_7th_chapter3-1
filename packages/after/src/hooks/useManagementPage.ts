import { useCallback, useEffect, useMemo, useState } from 'react';
import { useUsers, usePosts, useManagementAlerts, useManagementModals } from '@/hooks';
import type { User, Post } from '@/services';
import type { EntityType, Entity } from '@/types';
import type { ManagementStats, TableColumn } from '@/types';

export const useManagementPage = () => {
  const [entityType, setEntityType] = useState<EntityType>('post');
  const [formData, setFormData] = useState<any>({});
  const [selectedItem, setSelectedItem] = useState<Entity | null>(null);

  const {
    users,
    isLoading: isUsersLoading,
    error: usersError,
    load: loadUsers,
    create: createUser,
    update: updateUser,
    remove: deleteUser,
  } = useUsers();

  const {
    posts,
    isLoading: isPostsLoading,
    error: postsError,
    load: loadPosts,
    create: createPost,
    update: updatePost,
    remove: deletePost,
    publish,
    archive,
    restore,
  } = usePosts();

  const {
    showSuccessAlert,
    alertMessage,
    showErrorAlert,
    errorMessage,
    showSuccess,
    showError,
    closeSuccess,
    closeError,
  } = useManagementAlerts();

  const {
    isCreateModalOpen,
    isEditModalOpen,
    openCreateModal,
    closeCreateModal,
    openEditModal,
    closeEditModal,
  } = useManagementModals();

  const data: Entity[] = entityType === 'user' ? (users as Entity[]) : (posts as Entity[]);
  const isLoading = entityType === 'user' ? isUsersLoading : isPostsLoading;
  const error = entityType === 'user' ? usersError : postsError;

  const reloadCurrent = useCallback(async () => {
    if (entityType === 'user') {
      await loadUsers();
    } else {
      await loadPosts();
    }
  }, [entityType, loadUsers, loadPosts]);

  useEffect(() => {
    reloadCurrent();
    setFormData({});
    setSelectedItem(null);
    closeCreateModal();
    closeEditModal();
  }, [entityType, reloadCurrent, closeCreateModal, closeEditModal]);

  const handleCreate = useCallback(async () => {
    try {
      if (entityType === 'user') {
        await createUser({
          username: formData.username,
          email: formData.email,
          role: formData.role || 'user',
          status: formData.status || 'active',
        });
      } else {
        await createPost({
          title: formData.title,
          content: formData.content || '',
          author: formData.author,
          category: formData.category,
          status: formData.status || 'draft',
        });
      }

      await reloadCurrent();
      setFormData({});
      closeCreateModal();
      showSuccess(`${entityType === 'user' ? '사용자' : '게시글'}가 생성되었습니다`);
    } catch (err) {
      showError(err, '생성에 실패했습니다');
    }
  }, [
    entityType,
    formData,
    createUser,
    createPost,
    reloadCurrent,
    closeCreateModal,
    showSuccess,
    showError,
  ]);

  const handleEdit = useCallback(
    (item: Entity) => {
      setSelectedItem(item);

      if (entityType === 'user') {
        const user = item as User;
        setFormData({
          username: user.username,
          email: user.email,
          role: user.role,
          status: user.status,
        });
      } else {
        const post = item as Post;
        setFormData({
          title: post.title,
          content: post.content,
          author: post.author,
          category: post.category,
          status: post.status,
        });
      }

      openEditModal();
    },
    [entityType, openEditModal],
  );

  const handleUpdate = useCallback(async () => {
    if (!selectedItem) return;

    try {
      if (entityType === 'user') {
        await updateUser(selectedItem.id, formData);
      } else {
        await updatePost(selectedItem.id, formData);
      }

      await reloadCurrent();
      setFormData({});
      setSelectedItem(null);
      closeEditModal();
      showSuccess(`${entityType === 'user' ? '사용자' : '게시글'}가 수정되었습니다`);
    } catch (err) {
      showError(err, '수정에 실패했습니다');
    }
  }, [
    entityType,
    selectedItem,
    formData,
    updateUser,
    updatePost,
    reloadCurrent,
    closeEditModal,
    showSuccess,
    showError,
  ]);

  const handleDelete = useCallback(
    async (id: number) => {
      if (!confirm('정말 삭제하시겠습니까?')) return;

      try {
        if (entityType === 'user') {
          await deleteUser(id);
        } else {
          await deletePost(id);
        }

        await reloadCurrent();
        showSuccess('삭제되었습니다');
      } catch (err) {
        showError(err, '삭제에 실패했습니다');
      }
    },
    [entityType, deleteUser, deletePost, reloadCurrent, showSuccess, showError],
  );

  const handleStatusAction = useCallback(
    async (id: number, action: 'publish' | 'archive' | 'restore') => {
      if (entityType !== 'post') return;

      try {
        if (action === 'publish') {
          await publish(id);
        } else if (action === 'archive') {
          await archive(id);
        } else if (action === 'restore') {
          await restore(id);
        }

        await reloadCurrent();
        const message = action === 'publish' ? '게시' : action === 'archive' ? '보관' : '복원';
        showSuccess(`${message}되었습니다`);
      } catch (err) {
        showError(err, '작업에 실패했습니다');
      }
    },
    [entityType, publish, archive, restore, reloadCurrent, showSuccess, showError],
  );

  const stats: ManagementStats = useMemo(
    () => computeStats(entityType, users, posts),
    [entityType, users, posts],
  );

  const columns: TableColumn[] = useMemo(() => getColumns(entityType), [entityType]);

  const handleCloseCreateModal = useCallback(() => {
    setFormData({});
    closeCreateModal();
  }, [closeCreateModal]);

  const handleCloseEditModal = useCallback(() => {
    setFormData({});
    setSelectedItem(null);
    closeEditModal();
  }, [closeEditModal]);

  return {
    // entity / 데이터
    entityType,
    setEntityType,
    data,
    isLoading,
    error,
    stats,
    columns,

    // 폼 / 선택 상태
    formData,
    setFormData,
    selectedItem,

    // 알림 UI
    showSuccessAlert,
    showErrorAlert,
    alertMessage,
    errorMessage,
    closeSuccessAlert: closeSuccess,
    closeErrorAlert: closeError,

    // 모달 UI
    isCreateModalOpen,
    isEditModalOpen,
    openCreateModal,
    openEditModal,
    closeCreateModal: handleCloseCreateModal,
    closeEditModal: handleCloseEditModal,

    // 액션 핸들러
    handleCreate,
    handleEdit,
    handleUpdate,
    handleDelete,
    handleStatusAction,
  };
};

const computeStats = (entityType: EntityType, users: User[], posts: Post[]): ManagementStats => {
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

const getColumns = (entityType: EntityType): TableColumn[] => {
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
