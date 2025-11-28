import { userService, type User } from '@/services';
import { useCallback, useEffect, useState } from 'react';

type CreateUserPayload = Parameters<typeof userService.create>[0];
type UpdateUserPayload = Parameters<typeof userService.update>[1];

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      const users = await userService.getAll();
      setUsers(users);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const create = useCallback(async (payload: CreateUserPayload) => {
    const newUser = await userService.create(payload);
    setUsers(prev => [...prev, newUser]);
    return newUser;
  }, []);

  const update = useCallback(async (id: number, payload: UpdateUserPayload) => {
    const updated = await userService.update(id, payload);
    setUsers(prev => prev.map(user => (user.id === id ? updated : user)));
    return updated;
  }, []);

  const remove = useCallback(async (id: number) => {
    await userService.delete(id);
    setUsers(prev => prev.filter(u => u.id !== id));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    users,
    isLoading,
    error,
    load,
    create,
    update,
    remove,
  };
};
