import { useDynamicContent } from "@faststore/core";
import style from "../../../sass/top-bar.module.scss";
import { Slider } from "../../ui/slider";

type Props = {
  items: {
    text: string;
    url?: string;
    blank?: boolean;
  }[];
};

export function TopBar({ items }: Props) {
  console.log('%c TopBar', 'font-size:1rem; margin: 20px 0 0 -8px; color: #EC8F33;');
  const context = useDynamicContent<any>();
  console.log('%c context: ', 'color: #7fffd4;', JSON.parse(JSON.stringify(context || '')));

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
              <a href={item.url} target={item.blank ? "_blank" : "_self"} rel={item.blank ? "noopener noreferrer" : undefined}>
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
