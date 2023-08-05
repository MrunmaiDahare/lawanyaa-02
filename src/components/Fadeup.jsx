import React, { useEffect, useState, useRef } from "react";

function useElementOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    const currentRef = ref.current; // Create a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

function AnimateIn({ from, to, children }) {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles = { transition: "600ms ease-in-out" };

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
}

function FadeUp({ children }) {
  return (
    <AnimateIn
      from={{ opacity: 0, transform: "translateY(2rem)" }}
      to={{ opacity: 1, transform: "none" }}
    >
      {children}
    </AnimateIn>
  );
}

export default FadeUp;
