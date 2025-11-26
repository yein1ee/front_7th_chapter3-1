import React from 'react';
import { Table } from '@/shared/components/organisms';
import type { EntityType, TableColumn } from '@/types';

type TableSectionProps = {
  entityType: EntityType;
  data: any[];
  columns: TableColumn[];
  onEdit: (item: any) => void;
  onDelete: (id: number) => void;
  onStatusAction: (id: number, action: 'publish' | 'archive' | 'restore') => void;
};

export const TableSection: React.FC<TableSectionProps> = ({
  entityType,
  data,
  columns,
  onEdit,
  onDelete,
  onStatusAction,
}) => (
  <div className="overflow-auto border border-gray-300 bg-white">
    <Table
      columns={columns}
      data={data}
      striped
      hover
      entityType={entityType}
      onEdit={onEdit}
      onDelete={onDelete}
      onPublish={id => onStatusAction(id, 'publish')}
      onArchive={id => onStatusAction(id, 'archive')}
      onRestore={id => onStatusAction(id, 'restore')}
    />
  </div>
);
