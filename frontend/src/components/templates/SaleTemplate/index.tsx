'use client';

import Container from '@/components/atoms/Container';
import Spinner from '@/components/atoms/Spinner';
import Text from '@/components/atoms/Text';
import CardSale from '@/components/organism/CardSale';
import { Button } from '@/components/ui/button';
import { useGetSales } from '@/hooks/useGetSales';
import { MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

export default function SaleTemplate() {
  const { data: users, loading } = useGetSales();

  return (
    <Container className="flex flex-col gap-3 py-5">
      <Text variant="h1">Sales List</Text>
      <section className="pb-16">
        {loading ?
          <div className="flex h-96 items-center justify-center">
            <Spinner className="text-primary size-10" />
          </div>
        : <div className="grid grid-cols-1 gap-3">
            {users.map((user, index) => (
              <CardSale key={`sales-${index}`} data={user} />
            ))}
          </div>
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
