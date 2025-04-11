'use client';

import { useCallback, useEffect, useState } from 'react';

interface ISale {
  id: number;
  name: string;
  role: string;
  region: string;
  skills: string[];
  deals: {
    client: string;
    value: number;
    status: string;
  }[];
  clients: {
    name: string;
    industry: string;
    contact: string;
  }[];
}

interface SalesResponse {
  status: number;
  message: string;
  data: ISale[];
  total_data: number;
}

export function useGetSales() {
  const [data, setData] = useState<ISale[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/sales-reps');

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result: SalesResponse = await response.json();
      setData(result.data || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error, mutate };
}
