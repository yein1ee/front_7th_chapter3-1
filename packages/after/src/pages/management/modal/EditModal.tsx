import React from 'react';
import { Modal, Alert } from '@/shared/components/organisms';
import { Button } from '@/components';
import type { Post } from '@/services';
import type { EntityType } from '@/types';
import { UserFormFields } from '../form/UserFormFields';
import { PostFormFields } from '../form/PostFormFields';

type ManagementModalProps = {
  entityType: EntityType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  formData: any;
  setFormData: (value: any) => void;
};

type ManagementEditModalProps = ManagementModalProps & {
  selectedItem: any | null;
};

export const ManagementEditModal: React.FC<ManagementEditModalProps> = ({
  entityType,
  isOpen,
  onClose,
  onSubmit,
  formData,
  setFormData,
  selectedItem,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title={`${entityType === 'user' ? '사용자' : '게시글'} 수정`}
    size="large"
    showFooter
    footerContent={
      <>
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          수정 완료
        </Button>
      </>
    }>
    <div>
      {selectedItem && (
        <Alert variant="info">
          ID: {selectedItem.id} | 생성일: {selectedItem.createdAt}
          {entityType === 'post' && ` | 조회수: ${(selectedItem as Post).views}`}
        </Alert>
      )}

      {entityType === 'user' ? (
        <UserFormFields formData={formData} setFormData={setFormData} />
      ) : (
        <PostFormFields formData={formData} setFormData={setFormData} />
      )}
    </div>
  </Modal>
);
