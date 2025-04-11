'use client';

import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import { Button } from '@/components/ui/button';
import { useGetSales } from '@/hooks/useGetSales';
import { MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

export default function SaleTemplate() {
  const { data: users, loading } = useGetSales();

  return (
    <Container className="flex flex-col gap-3 py-5">
      <Text variant="h1">Sales List</Text>
      <section style={{ marginBottom: '2rem' }}>
        <h2>Dummy Data</h2>
        {loading ?
          <p>Loading...</p>
        : <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} - {user.role}
              </li>
            ))}
          </ul>
        }
      </section>
      <div className="fixed right-4 bottom-5 left-4">
        <Container className="flex justify-end">
          <Button variant="outline" className="w-fit" asChild>
            <Link href="/ai">
              <MessageSquareCode className="h-4 w-4" />
              Use AI
            </Link>
          </Button>
        </Container>
      </div>
    </Container>
  );
}
