import { useCallback, useRef, useState } from "react";
import { Swiper } from "swiper";
import { Autoplay, Navigation, Pagination, Thumbs, EffectFade } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

type UseSwiperProps = {
  onSwiperReady?: (swiper: Swiper) => void;
  onSlideChange?: (index: number) => void;
};

export function useSwiper({ onSwiperReady, onSlideChange }: UseSwiperProps = {}) {
  const swiperElementRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const swiperInstance = useRef<Swiper | null>(null);
  const [initialized, setInitialized] = useState(false);

  const startSwiper = useCallback(
    (configs: SwiperOptions = {}) => {
      if (!swiperElementRef.current || initialized) return;

      const paginationElement = swiperElementRef.current.querySelector("[data-pagination]") as HTMLElement | null;
      const prevEl = swiperElementRef.current.querySelector("[data-swiper-navigation-prev]") as HTMLElement | null;
      const nextEl = swiperElementRef.current.querySelector("[data-swiper-navigation-next]") as HTMLElement | null;

      if (!sliderRef.current) return;

      const modules = [Pagination, Autoplay, Navigation, Thumbs];
      const options: SwiperOptions & { modules?: any[] } = { ...configs };

      if (prevEl && nextEl) {
        options.navigation = { prevEl, nextEl };
      }

      if (paginationElement) {
        options.pagination = { el: paginationElement, clickable: true };
      }

      if (configs.effect === "fade") {
        modules.push(EffectFade);
      }

      options.modules = modules;

      swiperInstance.current = new Swiper(sliderRef.current, options);
      setInitialized(true);

      onSwiperReady?.(swiperInstance.current);

      swiperInstance.current.on("activeIndexChange", () => {
        const index = swiperInstance.current?.activeIndex;
        if (index !== undefined) {
          onSlideChange?.(index);
        }
      });
    },
    [initialized, onSlideChange, onSwiperReady]
  );

  const destroySwiper = useCallback(() => {
    swiperInstance.current?.destroy(true, true);
    swiperInstance.current = null;
    setInitialized(false);
  }, []);

  return {
    swiperElementRef,
    sliderRef,
    swiperInstance,
    initialized,
    startSwiper,
    destroySwiper,
  };
}
