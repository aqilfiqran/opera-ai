import Section from '@/components/molecules/Section';
import Text from '@/components/atoms/Text';

interface SectionRegionProps {
  data?: string;
}
export default function SectionRegion({ data }: SectionRegionProps) {
  if (!data) {
    return null;
  }

  return (
    <Section label="Region">
      <Text variant="sm" className="font-medium">
        {data}
      </Text>
    </Section>
  );
}
