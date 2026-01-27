export default function Navigation() {
  return (
    <div className="swiper_navigation">
      <div className="btn-navigate button-prev" data-swiper-navigation-prev>
        <svg width="20" height="20">
          <use xlinkHref="#arrow-prev-icon" />
        </svg>
      </div>
      <div className="btn-navigate button-next" data-swiper-navigation-next>
        <svg width="20" height="20">
          <use xlinkHref="#arrow-next-icon" />
        </svg>
      </div>
    </div>
  );
}
