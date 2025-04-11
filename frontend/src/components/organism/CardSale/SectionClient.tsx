import Section from '@/components/molecules/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Contact, Factory } from 'lucide-react';
import Link from 'next/link';
import Text from '@/components/atoms/Text';

interface SectionClientProps {
  data?: {
    name: string;
    industry: string;
    contact: string;
  }[];
}
export default function SectionClient({ data = [] }: SectionClientProps) {
  if (data.length === 0) {
    return null;
  }

  return (
    <Section label="Clients" className="gap-0">
      <Accordion type="single" collapsible>
        {data.map((client, index) => (
          <AccordionItem key={`client-${index}`} value={`item-${index}`}>
            <AccordionTrigger>{client.name}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Factory className="size-4" />
                <Text variant="sm">{client.industry}</Text>
              </div>

              <div className="flex items-center gap-2">
                <Contact className="size-4" />
                <Link
                  href={`mailto:${client.contact}`}
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text variant="sm">{client.contact}</Text>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
