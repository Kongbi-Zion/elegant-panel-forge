interface SummaryCardProps {
  title: string;
  value: string;
  subtitle: string;
  variant: "blue" | "teal" | "orange";
}

const gradientMap = {
  blue: "from-[hsl(var(--card-blue))] to-[hsl(var(--card-blue-end))]",
  teal: "from-[hsl(var(--card-teal))] to-[hsl(var(--card-teal-end))]",
  orange: "from-[hsl(var(--card-orange))] to-[hsl(var(--card-orange-end))]",
};

const SummaryCard = ({ title, value, subtitle, variant }: SummaryCardProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradientMap[variant]} p-6 text-primary-foreground`}
    >
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-wider opacity-90">
          {title}
        </p>
        <p className="mt-2 text-3xl font-bold">{value}</p>
        <span className="mt-3 inline-block rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-medium">
          {subtitle}
        </span>
      </div>
      <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-primary-foreground/10" />
      <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-primary-foreground/10" />
    </div>
  );
};

export default SummaryCard;
