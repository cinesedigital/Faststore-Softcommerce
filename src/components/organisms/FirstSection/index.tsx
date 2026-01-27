import style from "../../../sass/home.module.scss";

type Props = {
  title: string;
  image: string;
};

export function FirstSection(props: Props) {
  return (
    <div className={style.firstSection}>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} />
    </div>
  );
}
