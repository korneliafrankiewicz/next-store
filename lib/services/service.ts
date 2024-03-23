import useSWR from 'swr';
import useSWRMutation  from 'swr/mutation';
import { login } from './authService';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useProducts = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products`,
    fetcher
  );

  return { data,
    isLoading: !error && !data,
    isError: error,};
};

export const useMutate = () => {
  const { trigger, isMutating, data, error } = useSWRMutation(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local`,
  fetcher);
  
  return { 
    data,
    isLoading: !error && !data,
    isError: error,
    trigger
  };
}
