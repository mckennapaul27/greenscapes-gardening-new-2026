"use client";

import { useInView } from "react-intersection-observer";
import Static from "./static";
import dynamic from "next/dynamic";

export default function ContactWrapper({
  bgColor = "bg-[#f9f9f9]",
}: {
  bgColor?: string;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Dynamic = dynamic(() => import("./dynamic"), {
    loading: () => <Static bgColor={bgColor} />,
  });

  return (
    <div ref={ref}>
      {inView ? <Dynamic bgColor={bgColor} /> : <Static bgColor={bgColor} />}
    </div>
  );
}
