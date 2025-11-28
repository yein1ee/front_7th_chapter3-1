import { useCallback, useState } from 'react';

export const useManagementModals = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openCreateModal = useCallback(() => setIsCreateModalOpen(true), []);
  const closeCreateModal = useCallback(() => setIsCreateModalOpen(false), []);

  const openEditModal = useCallback(() => setIsEditModalOpen(true), []);
  const closeEditModal = useCallback(() => setIsEditModalOpen(false), []);

  return {
    isCreateModalOpen,
    isEditModalOpen,
    openCreateModal,
    closeCreateModal,
    openEditModal,
    closeEditModal,
  };
};


