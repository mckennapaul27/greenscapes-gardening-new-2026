"use client";

import { useInView } from "react-intersection-observer";
import Static from "./static";
import dynamic from "next/dynamic";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQWrapper(props: FAQsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Dynamic = dynamic(() => import("./dynamic"), {
    loading: () => <Static {...props} />,
  });

  return (
    <div ref={ref}>
      {inView ? <Dynamic {...props} /> : <Static {...props} />}
    </div>
  );
}
