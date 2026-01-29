type Props = {
  title: string;
};

export function SectionTest(props: Props) {
  return <h1 style={{margin: "40px 0"}}>Teste componente local: {props.title}</h1>;
}
