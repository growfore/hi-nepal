export default function PageHeroSection({
  icon: Icon,
  title,
  subtitle,
}: {
  icon?: any;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="min-h-[40vh] bg-[#008236] text-primary-foreground py-16 px-4 mb-8 flex flex-col justify-center items-center">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">{Icon && <Icon />}</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mx-auto text-balance">
          {subtitle ?? ""}
        </p>
      </div>
    </section>
  );
}
