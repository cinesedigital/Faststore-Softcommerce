import { useMedia } from "../../../hooks/useMedia";

type BannerProp =
  | {
      desktop?: string;
      tablet?: string;
      mobile?: string;
    }
  | string;

export function useBanner(src: BannerProp) {
  const isMobile = useMedia("(width <= 768px)");
  const isTablet = useMedia("(width > 768px && width <= 1024px)");

  if (typeof src != "string") {
    let imgSrc = src.desktop;
    if (src.mobile && isMobile) {
      imgSrc = src.mobile;
    } else if (src.tablet && isTablet) {
      imgSrc = src.tablet;
    }
    return imgSrc;
  } else {
    return src;
  }
}
