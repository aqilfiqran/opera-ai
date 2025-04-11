export default function Footer() {
  return (
    <footer className="bg-sidebar-accent flex flex-col gap-3 border-t border-neutral-200 py-5">
      <div className="flex flex-col px-4">
        <p className="text-sidebar-accent-foreground text-left text-sm">
          &copy; {new Date().getFullYear()} Aqil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
