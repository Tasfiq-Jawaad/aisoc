export const SubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mt-8">
    <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
    <div className="mt-3 space-y-3 text-gray-300">{children}</div>
  </div>
);
