import React from 'react';
import type { EntityType, TableColumn } from '@/types';
import type { User, Post } from '@/services';
import { UserTable } from './table/UserTable';
import { PostTable } from './table/PostTable';

type TableSectionProps = {
  entityType: EntityType;
  data: (User | Post)[];
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
}) => {
  return (
    <div className="overflow-auto border border-gray-300 bg-white">
      {entityType === 'user' ? (
        <UserTable data={data as User[]} columns={columns} onEdit={onEdit} onDelete={onDelete} />
      ) : (
        <PostTable
          data={data as Post[]}
          columns={columns}
          onEdit={onEdit}
          onStatusAction={onStatusAction}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};
