import { ReactNode, useEffect, useMemo, useRef } from "react";
import { useSwiper } from "./useSwiper";
import Navigation from "./navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { requestIdle } from "../../utils";

type SliderProps = {
  children: ReactNode;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  enabled?: boolean;
  loop?: boolean;
  freeMode?: boolean;
  speed?: number;
  autoplay?: Record<string, any>;
  breakpoints?: Record<string, any>;
  pagination?: boolean;
  navigation?: boolean;
  direction?: "horizontal" | "vertical";
  allowTouchMove?: boolean;
  effect?: string | null;
  thumbsSwiper?: any;
  enableThumbs?: boolean;
  zoom?: Record<string, any> | boolean;
  onSlideChange?: (index: number) => void;
};

export function Slider({
  children,
  slidesPerView = 1,
  spaceBetween = 0,
  enabled = true,
  loop = false,
  freeMode = false,
  speed = 500,
  autoplay,
  breakpoints = {},
  pagination = false,
  navigation = false,
  direction = "horizontal",
  allowTouchMove = true,
  effect = null,
  thumbsSwiper,
  enableThumbs = false,
  zoom = false,
  onSlideChange,
}: SliderProps) {
  const idRef = useRef(`comp-${Math.random().toString(36).substring(2, 9)}`);

  const { swiperElementRef, sliderRef, initialized, swiperInstance, startSwiper } = useSwiper({
    onSlideChange,
  });

  const cssVariables = useMemo(() => {
    let css = `
      #${idRef.current} .swiper-wrapper {
        --default_slides: ${typeof slidesPerView === "number" ? slidesPerView : 1};
        --default_space: ${spaceBetween}px;
      }
    `;

    Object.keys(breakpoints)
      .sort((a, b) => Number(a) - Number(b))
      .forEach((bp) => {
        const cfg = breakpoints[bp];
        if (!cfg) return;

        css += `
          @media (min-width: ${bp}px) {
            #${idRef.current} .swiper-wrapper {
              ${cfg.slidesPerView ? `--use_quantity: ${cfg.slidesPerView};` : ""}
              ${cfg.spaceBetween !== undefined ? `--slider_gap: ${cfg.spaceBetween}px;` : ""}
            }
          }
        `;
      });

    return css;
  }, [breakpoints, slidesPerView, spaceBetween]);

  useEffect(() => {
    if (!enableThumbs) {
      requestIdle(() => {
        startSwiper({
          slidesPerView,
          spaceBetween,
          enabled,
          loop,
          freeMode,
          speed,
          autoplay,
          breakpoints,
          direction,
          zoom: zoom || {},
          allowTouchMove,
          effect: effect || undefined,
          thumbs: thumbsSwiper ? { autoScrollOffset: 1, swiper: thumbsSwiper } : undefined,
        });
      });
    }
  }, [enableThumbs]);

  useEffect(() => {
    if (swiperInstance.current && initialized) {
      swiperInstance.current.params.breakpoints = breakpoints;
      swiperInstance.current.update();
    }
  }, [breakpoints, initialized]);

  return (
    <div id={idRef.current} ref={swiperElementRef} className={`containerSwiper ${initialized ? "-show" : ""}`}>
      <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      <div
        ref={sliderRef}
        className={`swiper slider ${direction === "vertical" ? "swiper-vertical" : ""} ${effect ? `swiper-${effect}` : ""}`}
      >
        <div className="swiper-wrapper">{children}</div>
      </div>

      {pagination && <div className="swiper-pagination" data-pagination />}
      {navigation && <Navigation />}
    </div>
  );
}
