"use client";

import { useInView } from "react-intersection-observer";
import Static from "./static";
import dynamic from "next/dynamic";

export default function NavbarTouchWrapper() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Dynamic = dynamic(() => import("./dynamic"), {
    loading: () => <Static />,
  });

  return (
    <div ref={ref}>
      {inView ? <Dynamic /> : <Static />}
    </div>
  );
}

