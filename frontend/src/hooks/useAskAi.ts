'use client';

import { CallbackProps } from '@/lib/types';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

interface AskAiResponse {
  status: number;
  message: string;
  data: string;
}

export function useAskAi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const trigger = useCallback(async (question: string, callback: CallbackProps<AskAiResponse> = {}) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result: AskAiResponse = await response.json();
      callback.onSuccess?.(result);
      setError(null);
    } catch (err) {
      callback.onError?.(err as Error);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      toast.error(`Error`, {
        description: err instanceof Error ? err.message : 'An unknown error occurred',
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return { trigger, loading, error };
}
