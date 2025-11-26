import React from 'react';
import { FormInput, FormSelect } from '@/shared/components/molecules';

type ManagementFormProps = {
  formData: any;
  setFormData: (value: any) => void;
};

export const UserFormFields: React.FC<ManagementFormProps> = ({ formData, setFormData }) => (
  <>
    <FormInput
      name="username"
      value={formData.username || ''}
      onChange={value => setFormData({ ...formData, username: value })}
      label="사용자명"
      placeholder="사용자명을 입력하세요"
      required
      width="full"
      fieldType="username"
    />
    <FormInput
      name="email"
      value={formData.email || ''}
      onChange={value => setFormData({ ...formData, email: value })}
      label="이메일"
      placeholder="이메일을 입력하세요"
      type="email"
      required
      width="full"
      fieldType="email"
    />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FormSelect
        name="role"
        value={formData.role || 'user'}
        onChange={value => setFormData({ ...formData, role: value })}
        options={[
          { value: 'user', label: '사용자' },
          { value: 'moderator', label: '운영자' },
          { value: 'admin', label: '관리자' },
        ]}
        label="역할"
        size="md"
      />
      <FormSelect
        name="status"
        value={formData.status || 'active'}
        onChange={value => setFormData({ ...formData, status: value })}
        options={[
          { value: 'active', label: '활성' },
          { value: 'inactive', label: '비활성' },
          { value: 'suspended', label: '정지' },
        ]}
        label="상태"
        size="md"
      />
    </div>
  </>
);
