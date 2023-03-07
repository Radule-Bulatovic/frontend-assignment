import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

import { products } from '../api';

export function useCategories() {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    products
      .categories()
      .then((e) => {
        setIsLoading(false);
        setData(() => e.data);
      })
      .catch((e: AxiosError) => {
        setIsLoading(false);
        setError((e as AxiosError).message);
      });
  }, []);

  return { data, isLoading, error, setError };
}
