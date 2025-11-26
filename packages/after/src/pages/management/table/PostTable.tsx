import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Badge } from '@/components';
import { Button } from '@/components';
import type { Post } from '@/services';
import type { TableColumn } from '@/types';
import {
  getPostCategoryBadge,
  getPostStatusBadge,
} from '@/pages/management/viewModel';

type PostTableProps = {
  data: Post[];
  columns: TableColumn[];
  onEdit: (post: Post) => void;
  onStatusAction: (id: number, action: 'publish' | 'archive' | 'restore') => void;
  onDelete: (id: number) => void;
};

export const PostTable: React.FC<PostTableProps> = ({
  data,
  columns,
  onEdit,
  onStatusAction,
  onDelete,
}) => {
  const renderCell = (post: Post, key: string) => {
    if (key === 'category') {
      const { label, variant } = getPostCategoryBadge(post.category);
      return (
        <Badge variant={variant}>{label}</Badge>
      );
    }

    if (key === 'status') {
      const { label, variant } = getPostStatusBadge(post.status);
      return <Badge variant={variant}>{label}</Badge>;
    }

    if (key === 'views') {
      return post.views?.toLocaleString?.() ?? post.views ?? '0';
    }

    if (key === 'actions') {
      return (
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="primary"
            onClick={e => {
              e.stopPropagation();
              onEdit(post);
            }}>
            수정
          </Button>
          {post.status === 'draft' && (
            <Button
              size="sm"
              variant="success"
              onClick={e => {
                e.stopPropagation();
                onStatusAction(post.id, 'publish');
              }}>
              게시
            </Button>
          )}
          {post.status === 'published' && (
            <Button
              size="sm"
              variant="secondary"
              onClick={e => {
                e.stopPropagation();
                onStatusAction(post.id, 'archive');
              }}>
              보관
            </Button>
          )}
          {post.status === 'archived' && (
            <Button
              size="sm"
              variant="primary"
              onClick={e => {
                e.stopPropagation();
                onStatusAction(post.id, 'restore');
              }}>
              복원
            </Button>
          )}
          <Button
            size="sm"
            variant="danger"
            onClick={e => {
              e.stopPropagation();
              onDelete(post.id);
            }}>
            삭제
          </Button>
        </div>
      );
    }

    return (post as any)[key];
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
        {data.map(post => (
          <TableRow key={post.id}>
            {columns.map(column => (
              <TableCell key={column.key}>{renderCell(post, column.key)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
