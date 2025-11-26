import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge } from '@/components';
import { Button } from '@/components';
import type { User } from '@/services';
import type { TableColumn } from '@/types';
import { getUserRoleBadge, getUserStatusBadge } from '@/pages/management/viewModel';

type UserTableProps = {
  data: User[];
  columns: TableColumn[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
};

export const UserTable: React.FC<UserTableProps> = ({ data, columns, onEdit, onDelete }) => {
  const renderCell = (user: User, key: string) => {
    if (key === 'role') {
      const { label, variant } = getUserRoleBadge(user.role);
      return <Badge variant={variant}>{label}</Badge>;
    }

    if (key === 'status') {
      const { label, variant } = getUserStatusBadge(user.status);
      return <Badge variant={variant}>{label}</Badge>;
    }

    if (key === 'lastLogin') {
      return user.lastLogin || '-';
    }

    if (key === 'actions') {
      return (
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="primary"
            onClick={e => {
              e.stopPropagation();
              onEdit(user);
            }}>
            수정
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={e => {
              e.stopPropagation();
              onDelete(user.id);
            }}>
            삭제
          </Button>
        </div>
      );
    }

    return (user as any)[key];
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map(column => (
            <TableHead key={column.key} style={column.width ? { width: column.width } : undefined}>
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(user => (
          <TableRow key={user.id}>
            {columns.map(column => (
              <TableCell key={column.key}>{renderCell(user, column.key)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
