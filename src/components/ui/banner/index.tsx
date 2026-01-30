import Link from "next/link";
import { LazyImage } from "../lazyImage";
import { useBanner } from "./useBanner";

interface ImageProps {
  src:
    | {
        desktop?: string;
        tablet?: string;
        mobile?: string;
      }
    | string;
  eager?: boolean;
  alt?: string;
  link?: string;
  width?: string;
  height?: string;
  imgClass?: string;
  target?: boolean;
  className?: string;
  frameClass?: string;
}

export function Banner({ src, alt, link, eager = false, width, height, imgClass, target, className, frameClass }: ImageProps) {
  const img = useBanner(src);

  if (link) {
    return (
      <Link href={link} target={target ? "_blank" : undefined} className={`banner_image ${className}`}>
        <LazyImage src={img} alt={alt} eager={eager} width={width} height={height} imgClass={imgClass} className={frameClass} />
      </Link>
    );
  }

  return (
    <div className={`banner_image ${className}`}>
      <LazyImage src={img} alt={alt} eager={eager} width={width} height={height} imgClass={imgClass} className={frameClass} />
    </div>
  );
}
