import Section from '@/components/molecules/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CircleDot, CirclePercent } from 'lucide-react';
import Text from '@/components/atoms/Text';
import { cn, formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SectionDealProps {
  data?: {
    client: string;
    value: number;
    status: string;
  }[];
}

enum Status {
  ClosedLost = 'Closed Lost',
  ClosedWon = 'Closed Won',
  InProgress = 'In Progress',
}

export default function SectionDeal({ data = [] }: SectionDealProps) {
  if (data.length === 0) {
    return null;
  }

  return (
    <Section label="Deals" className="gap-0">
      <Accordion type="single" collapsible>
        {data.map((deal, index) => (
          <AccordionItem key={`deal-${index}`} value={`item-${index}`}>
            <AccordionTrigger>{deal.client}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CirclePercent className="size-4" />
                <Text variant="sm">{formatCurrency({ value: deal.value || 0 })}</Text>
              </div>

              <div className="flex items-center gap-2">
                <CircleDot className="size-4" />
                <Badge
                  variant={'destructive'}
                  className={cn('rounded-full', {
                    'bg-destructive': deal.status === Status.ClosedLost,
                    'bg-green-500': deal.status === Status.ClosedWon,
                    'bg-yellow-500': deal.status === Status.InProgress,
                  })}
                >
                  {deal.status}
                </Badge>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
