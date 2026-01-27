// @ts-ignore
import { cartStore_unstable as cartStore, useLazyQuery_unstable as useQuery } from "@faststore/core/experimental";
import { Button as UIButton } from "@faststore/ui";
import { GET_CHECKOUT, GET_GUTENDEX } from "./graphql/queries";

export default function BuyButton(props: any) {
  console.log("%c BuyButton", "font-size:1rem; margin: 20px 0 0 -8px; color: #EC8F33;");
  console.log("%c props: ", "margin-top: 6px; color: #7fffd4;", props);

  const [getCheckout, { data }] = useQuery(GET_CHECKOUT);
  const [getGutendexBooks, { data: dataGutendex }] = useQuery(GET_GUTENDEX);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("%c Código antes da compra", "font-weight: bolder; color: #a87c64;");
    e.preventDefault();
    console.log("%c cartStore.read: ", "margin-top: 6px; color: #7fffd4;", cartStore.read());

    const res = await getCheckout();
    const resG = await getGutendexBooks();
    console.log("%c res: ", "margin-top: 6px; color: #7fffd4;", res);
    console.log("%c resG: ", "margin-top: 6px; color: #7fffd4;", resG);

    // if (props.onClick) {
    //   props.onClick(e);
    // }
    console.log("%c Código apos a compra", "font-weight: bolder; color: #a87c64;");
  };

  return (
    <>
      <UIButton variant="primary" {...props} onClick={(e) => handleClick(e)}>
        Comprar
      </UIButton>
    </>
  );
}
