import AiTemplate from '@/components/templates/AiTemplate';
import populateMetaData from '@/lib/metadata';

export const generateMetadata = () => {
  const data = {
    title: 'Opera AI | Ai Sales Assistant | AI Page',
    description:
      'Opera AI page used for fetching AI response using Gemini 2.0 API. It is using free API key. It is used for testing purpose only. Never use this in production.',
    canonical: '/ai',
  };

  return populateMetaData(data);
};

export default function Home() {
  return <AiTemplate />;
}
