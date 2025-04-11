import Section from '@/components/molecules/Section';
import { Badge } from '@/components/ui/badge';

interface SectionSkillProps {
  data?: string[];
}
export default function SectionSkill({ data = [] }: SectionSkillProps) {
  if (data.length === 0) {
    return null;
  }

  return (
    <Section label="Skills">
      <div className="flex flex-wrap gap-2">
        {data.map((skill, index) => (
          <Badge key={`skill-${index}`} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
