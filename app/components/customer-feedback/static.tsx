interface CustomerFeedbackProps {
  bgColor?: string;
}

const testimonials = [
  {
    quote:
      "Reliable, considerate and knowledgeable, Simon and his team always know what to do in the garden and when. Thanks for all your help and advice.",
    name: "Sylvia",
    location: "Pott Shrigley",
  },
  {
    quote:
      "Greenscapes regularly cuts almost an acre of undulating lawn and trims a mature laylandii hedge for us. They are very trustworthy, efficient and tidy.",
    name: "Erica",
    location: "Marple",
  },
  {
    quote:
      "We have used Simon for the last 12 months and he has transformed the look of our garden. He is totally reliable, always tidy, knowledgeable and has a well structure system for payments.",
    name: "John",
    location: "Poynton",
  },
  {
    quote:
      "GreenScapes have just re-turfed all my garden and generally tidied. I was so pleased with my finished garden! It looks totally transformed! Simon and his colleague have done a fantastic job!",
    name: "Andrew",
    location: "Bramhall",
  },
];

export default function CustomerFeedback({
  bgColor = "bg-white",
}: CustomerFeedbackProps) {
  return (
    <section className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#339935] text-sm font-semibold uppercase tracking-wide mb-2">
            HAPPY CUSTOMERS
          </p>
          <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-900 mb-6">
            Our customer feedback
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our work and the relationships we build with our
            customers. Here&apos;s what some of our satisfied clients have to
            say about our services.
          </p>
        </div>
        <div className="overflow-hidden pb-8">
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)] min-w-0"
              >
                <div className="bg-[#fffcf4] p-6 rounded-lg shadow-md h-full">
                  <p className="text-gray-700 mb-4 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="border-t border-gray-300 pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300"
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

