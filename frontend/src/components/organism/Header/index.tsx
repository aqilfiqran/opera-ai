import Text from '@/components/atoms/Text';

export default function Header() {
  return (
    <footer className="bg-sidebar-accent flex flex-col gap-3 border-b border-neutral-200 px-4 py-4">
      {/* header opera ai */}
      <div className="flex flex-col">
        <Text variant="h1" className="text-sidebar-accent-foreground text-left">
          OPERA AI
        </Text>
      </div>
    </footer>
  );
}
