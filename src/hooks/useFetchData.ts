import { useQuery } from 'react-query';

export const useFetchData = <T>(endpoint: string) => {
  const fetchData = async (url: string): Promise<T> => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const { data, isLoading, error } = useQuery<T>(endpoint, () =>
    fetchData(`/api/${endpoint}`),
  );

  return {
    data: data || null,
    loading: isLoading,
    error: error || null,
  };
};
