"use client";

import { useInView } from "react-intersection-observer";
import Static from "./static";
import dynamic from "next/dynamic";

interface CustomerFeedbackProps {
  bgColor?: string;
}

export default function CustomerFeedbackWrapper(props: CustomerFeedbackProps) {
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

