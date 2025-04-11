import Avatar from '@/components/atoms/Avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ISale } from '@/hooks/useGetSales';
import { initialName } from '@/lib/utils';
import SectionRegion from './SectionRegion';
import SectionSkill from './SectionSkill';
import SectionClient from './SectionClient';
import SectionDeal from './SectionDeal';

interface CardSaleProps {
  // Define the props for the CardSale component here
  data: ISale;
}

export default function CardSale({ data }: CardSaleProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <Avatar
          src={`https://ui-avatars.com/api/?name=${data.name}&size=36`}
          fallback={initialName(data.name)}
          className="size-9"
        />
        <div className="flex flex-col gap-0.5">
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.role || '-'}</CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-3">
        <SectionRegion data={data.region} />
        <SectionSkill data={data.skills} />
        <SectionClient data={data.clients} />
        <SectionDeal data={data.deals} />
      </CardContent>
    </Card>
  );
}
