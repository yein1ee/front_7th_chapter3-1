import React from 'react';
import { Modal } from '@/shared/components/organisms';
import { Button } from '@/components';
import type { EntityType } from '@/types';
import { UserFormFields, PostFormFields } from '@/pages/management/form';

type ManagementModalProps = {
  entityType: EntityType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formData: any;
  setFormData: (value: any) => void;
};

export const ManagementCreateModal: React.FC<ManagementModalProps> = ({
  entityType,
  isOpen,
  onClose,
  onSubmit,
  formData,
  setFormData,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={`새 ${entityType === 'user' ? '사용자' : '게시글'} 만들기`}
    size="large"
    showFooter
    footerContent={
      <>
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          생성
        </Button>
      </>
    }>
    <div>
      {entityType === 'user' ? (
        <UserFormFields formData={formData} setFormData={setFormData} />
      ) : (
        <PostFormFields formData={formData} setFormData={setFormData} />
      )}
    </div>
  </Modal>
);
