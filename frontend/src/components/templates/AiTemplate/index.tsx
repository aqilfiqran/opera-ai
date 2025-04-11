'use client';

import Container from '@/components/atoms/Container';
import Text from '@/components/atoms/Text';
import InputQuestion from '@/components/molecules/InputQuestion';
import TextMarkdown from '@/components/molecules/TextMarkdown';
import { useAskAi } from '@/hooks/useAskAi';
import { useState } from 'react';

export default function AiTemplate() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { trigger } = useAskAi();

  const handleAskQuestion = async () => {
    trigger(question, {
      onSuccess: response => {
        setAnswer(response.data);
      },
      onError: error => {
        console.error('Error fetching AI response:', error);
        setAnswer('');
      },
    });
  };

  return (
    <Container className="flex flex-col gap-3 py-5">
      <div className="flex flex-col">
        <Text variant="h1">Opera AI</Text>
        <Text variant="md" className="font-normal text-neutral-500">
          AI-powered sales assistant for Opera. Ask me anything about Opera, sales, or AI!
        </Text>
      </div>

      {!!answer && (
        <section className="flex flex-col gap-1 pb-16">
          <Text variant="sm" className="text-primary font-bold">
            Response
          </Text>
          <div className="rounded-lg border border-neutral-300 bg-white p-4 shadow-md">
            {/* markdown format support */}
            <TextMarkdown text={answer} />
          </div>
        </section>
      )}

      <div className="fixed right-4 bottom-5 left-4 flex justify-center">
        <InputQuestion value={question} onChange={e => setQuestion(e.target.value)} onValueSubmit={handleAskQuestion} />
      </div>
    </Container>
  );
}
