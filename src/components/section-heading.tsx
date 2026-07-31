export function SectionHeading({
  children,
  id,
}: {
  children: string;
  id: string;
}) {
  return (
    <h2
      className="mb-6 text-xs font-bold tracking-[0.2em] text-subtle uppercase sm:mb-[30px]"
      id={id}
    >
      {children}
    </h2>
  );
}
