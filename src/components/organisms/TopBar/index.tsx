import { Slider } from "../../ui/slider";
import style from "./TopBar.module.scss";

type Props = {
  items: {
    text: string;
    url?: string;
    target?: boolean;
  }[];
};

export function TopBar({ items }: Props) {
  if (!items?.length) return null;

  const slides = items.slice(0, 8);

  const breakpoints = {
    1: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  };

  return (
    <div className={style.top_bar}>
      <Slider breakpoints={breakpoints} spaceBetween={16} autoplay={{ delay: 7500, disableOnInteraction: false }}>
        {slides.map((item, index) => (
          <div key={index} className={`swiper-slide ${style.top_itens}`}>
            {item.url && (
              <a href={item.url} target={item.target ? "_blank" : "_self"} rel={item.target ? "noopener noreferrer" : undefined}>
                {item.text}
              </a>
            )}
            {!item.url && <p>{item.text}</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
}
