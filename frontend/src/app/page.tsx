import SaleTemplate from '@/components/templates/SaleTemplate';
import populateMetaData from '@/lib/metadata';

export const generateMetadata = () => {
  const data = {
    title: 'Opera AI | Ai Sales Assistant | Sales List',
    description:
      'Opera Ai sales page used for fetching sales data. It is a dummy data page. It is used for testing purpose only. Never use this in production.',
    canonical: '/',
  };

  return populateMetaData(data);
};

export default function Home() {
  return <SaleTemplate />;
}
