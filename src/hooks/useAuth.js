import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuthStore from '../store/authStore';
import { getProfile } from '../api/auth';

export const useAuth = () => {
  const { user, isAuthenticated, login, logout, setUser } = useAuthStore();

  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    enabled: isAuthenticated,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data && !user) {
      setUser(data);
    }
  }, [data, user, setUser]);

  return { user: user || data, isAuthenticated, isLoading, login, logout };
};
