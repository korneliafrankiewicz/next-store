import { useUserStore } from '@/app/store/user';

export const logout = () => {
    useUserStore.getState().logout();
  }