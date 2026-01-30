import { useEffect, useState } from "react";

export function useMedia(query: string) {
  if (typeof window === "undefined") {
    return false;
  }

  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia(query);

    const update = () => setMatches(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}
