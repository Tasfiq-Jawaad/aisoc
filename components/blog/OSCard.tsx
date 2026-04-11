export const OSCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
    <div className="text-sm font-semibold text-gray-300">{title}</div>
    <div className="mt-2 text-gray-300">{children}</div>
  </div>
);
