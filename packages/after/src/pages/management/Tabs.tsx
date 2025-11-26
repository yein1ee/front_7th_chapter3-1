import React from 'react';
import { Button } from '@/components';
import type { EntityType } from '@/types';

type TabsProps = {
  entityType: EntityType;
  setEntityType: (type: EntityType) => void;
};

export const Tabs: React.FC<TabsProps> = ({ entityType, setEntityType }) => (
  <div className="mb-4 border-b-2 border-gray-300 pb-1.5">
    <Button
      variant={entityType === 'post' ? 'primary' : 'secondary'}
      onClick={() => setEntityType('post')}>
      게시글
    </Button>
    <Button
      variant={entityType === 'user' ? 'primary' : 'secondary'}
      onClick={() => setEntityType('user')}>
      사용자
    </Button>
  </div>
);
