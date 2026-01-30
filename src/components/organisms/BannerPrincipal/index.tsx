import { Banner } from "../../ui/banner";
import { Slider } from "../../ui/slider";
import style from "./BannerPrincipal.module.scss";

type SliderControls = "pagination" | "navigation" | "none";

type BannerPrincipalProps = {
  items?: {
    src:
      | {
          desktop?: string;
          tablet?: string;
          mobile?: string;
        }
      | string;
    alt?: string;
    link?: string;
    target?: boolean;
  }[];
  controls?: SliderControls;
};

export function BannerPrincipal({ items = [], controls }: BannerPrincipalProps) {
  return (
    <section id={style.banner_principal} className="section">
      <Slider
        autoplay={{ delay: 7500, disableOnInteraction: false }}
        loop={items.length > 1}
        pagination={controls === "pagination"}
        navigation={controls === "navigation"}
      >
        {items.map((banner, index) => (
          <Banner
            key={index}
            src={banner.src}
            alt={banner.alt}
            link={banner.link}
            eager={index === 0}
            width="1920"
            height="590"
            target={banner.target}
            className="swiper-slide"
            frameClass="-bannerPrincipal"
            imgClass="-full"
          />
        ))}
      </Slider>
    </section>
  );
}
