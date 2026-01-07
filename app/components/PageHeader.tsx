import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage = "/hero-bg.jpeg",
}: PageHeaderProps) {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 px-4 max-w-4xl mx-auto text-white pb-16 pt-24 lg:pt-40 lg:pb-24">
        <h1 className="text-4xl lg:text-5xl  font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
