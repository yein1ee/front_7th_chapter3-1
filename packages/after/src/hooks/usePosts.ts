import { postService, type Post } from '@/services';
import { useCallback, useEffect, useState } from 'react';

type CreatePostPayload = Parameters<typeof postService.create>[0];
type UpdatePostPayload = Parameters<typeof postService.update>[1];

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const load = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await postService.getAll();
      setPosts(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const create = useCallback(async (payload: CreatePostPayload) => {
    const newPost = await postService.create(payload);
    setPosts(prev => [...prev, newPost]);
    return newPost;
  }, []);

  const update = useCallback(async (id: number, payload: UpdatePostPayload) => {
    const updated = await postService.update(id, payload);
    setPosts(prev => prev.map(post => (post.id === id ? updated : post)));
    return updated;
  }, []);

  const remove = useCallback(async (id: number) => {
    await postService.delete(id);
    setPosts(prev => prev.filter(post => post.id !== id));
  }, []);

  const publish = useCallback(async (id: number) => {
    const updated = await postService.publish(id);
    setPosts(prev => prev.map(post => (post.id === id ? updated : post)));
    return updated;
  }, []);

  const archive = useCallback(async (id: number) => {
    const updated = await postService.archive(id);
    setPosts(prev => prev.map(post => (post.id === id ? updated : post)));
    return updated;
  }, []);

  const restore = useCallback(async (id: number) => {
    const updated = await postService.restore(id);
    setPosts(prev => prev.map(post => (post.id === id ? updated : post)));
    return updated;
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    posts,
    isLoading,
    error,
    load,
    create,
    update,
    remove,
    publish,
    archive,
    restore,
  };
};
