type Props = {
  title: string;
  image: string;
};

export function FirstSection(props: Props) {
  return (
    <div className="first-section">
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} />
    </div>
  );
}
