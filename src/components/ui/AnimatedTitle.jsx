import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const AnimatedTitle = ({ className, children }) => {
  const titleRef = useRef();
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <p
      ref={titleRef}
      className={`${className} text-3xl sm:text-5xl font-bold bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent text-center cursor-default`}
    >
      {children}
    </p>
  );
};

export default AnimatedTitle;
