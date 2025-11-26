import React from 'react';
import { Alert } from '@/shared/components/organisms';
import { Button } from '@/components';
import { useManagementPage } from '@/hooks';
import { Header, Tabs, StatsSection, TableSection } from '@/pages/management';
import { ManagementCreateModal, ManagementEditModal } from '@/pages/management/modal';

export const ManagementPage: React.FC = () => {
  const vm = useManagementPage();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl p-5">
        <Header />

        <div className="border border-gray-300 bg-white p-2.5">
          <Tabs entityType={vm.entityType} setEntityType={vm.setEntityType} />

          <div>
            <div className="mb-4 text-right">
              <Button variant="primary" onClick={vm.openCreateModal}>
                새로 만들기
              </Button>
            </div>

            {vm.showSuccessAlert && (
              <div className="mb-2.5">
                <Alert variant="success" title="성공" onClose={vm.closeSuccessAlert}>
                  {vm.alertMessage}
                </Alert>
              </div>
            )}

            {vm.showErrorAlert && (
              <div className="mb-2.5">
                <Alert variant="error" title="오류" onClose={vm.closeErrorAlert}>
                  {vm.errorMessage}
                </Alert>
              </div>
            )}

            <StatsSection stats={vm.stats} />

            <TableSection
              entityType={vm.entityType}
              data={vm.data}
              columns={vm.columns}
              onEdit={vm.handleEdit}
              onDelete={vm.handleDelete}
              onStatusAction={vm.handleStatusAction}
            />
          </div>
        </div>
      </div>

      <ManagementCreateModal
        entityType={vm.entityType}
        isOpen={vm.isCreateModalOpen}
        onClose={vm.closeCreateModal}
        onSubmit={vm.handleCreate}
        formData={vm.formData}
        setFormData={vm.setFormData}
      />

      <ManagementEditModal
        entityType={vm.entityType}
        isOpen={vm.isEditModalOpen}
        onClose={vm.closeEditModal}
        onSubmit={vm.handleUpdate}
        formData={vm.formData}
        setFormData={vm.setFormData}
        selectedItem={vm.selectedItem}
      />
    </div>
  );
};
