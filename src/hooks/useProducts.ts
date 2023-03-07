import { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

import { products } from '../api';
import { ProductT } from '../types/Product';

export function useProducts() {
  const [data, setData] = useState<ProductT[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    products
      .all()
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
