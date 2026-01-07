import Button from "./ui/Button";

interface CTAProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTA({
  title,
  description,
  buttonText = "Contact Us Today",
  buttonLink = "#contact",
}: CTAProps) {
  return (
    <section className="cta-bg py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90">
            {description}
          </p>
          <Button asLink href={buttonLink} size="lg" className="inline-block">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
