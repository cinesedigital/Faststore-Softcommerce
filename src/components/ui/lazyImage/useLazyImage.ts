import { useEffect, useRef, useState } from "react";

const callbacks = new WeakMap<Element, () => void>();
let observer: IntersectionObserver | null = null;

function getObserver(configs: IntersectionObserverInit) {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const cb = callbacks.get(entry.target);
        if (cb) {
          cb();
          callbacks.delete(entry.target);
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, ...configs },
  );

  return observer;
}

export function useLazyImage(eager = false, configs: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    if (eager || !ref.current) return;

    const observer = getObserver(configs);

    callbacks.set(ref.current, () => setShouldLoad(true));
    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        callbacks.delete(ref.current);
        observer.unobserve(ref.current);
      }
    };
  }, [eager, configs]);

  return { ref, shouldLoad };
}
