import { useLazyImage } from "./useLazyImage";

type LazyProps = {
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
  title?: string;
  eager: boolean;
  configs?: Object;
  imgClass?: string;
  className?: string;
};

export function LazyImage({ src, width, height, alt, title, eager = false, configs = {}, className, imgClass }: LazyProps) {
  const { ref, shouldLoad } = useLazyImage(eager, configs);

  return (
    <div ref={ref} className={`frame_image ${className ? className : ""}`}>
      {shouldLoad ? (
        <img
          src={src}
          alt={alt}
          title={title}
          width={width}
          height={height}
          className={imgClass}
          loading={eager ? "eager" : "lazy"}
        />
      ) : (
        <span className={`skt_wave image ${imgClass}`}></span>
      )}
    </div>
  );
}
