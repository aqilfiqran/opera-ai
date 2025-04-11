'use client';

import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import { useGetSales } from '@/hooks/useGetSales';

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
    </Container>
  );
}
