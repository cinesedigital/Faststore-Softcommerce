// @ts-ignore
import { cartStore_unstable as cartStore, useLazyQuery_unstable } from "@faststore/core/experimental";

import { Button as UIButton } from "@faststore/ui";
import { GET_CHECKOUT, GET_GUTENDEX } from "./graphql/queries";

export default function BuyButton(props: any) {
  console.log("%c BuyButton", "font-size:1rem; margin: 20px 0 0 -8px; color: #EC8F33;");
  console.log("%c props: ", "margin-top: 6px; color: #7fffd4;", props);

  const [getCheckout] = useLazyQuery_unstable<any, Record<string, never>>(GET_CHECKOUT, {});

  const [getGutendexBooks] = useLazyQuery_unstable<any, Record<string, never>>(GET_GUTENDEX, {});

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("cartStore:", cartStore.read());

    const res = await getCheckout({});
    const resG = await getGutendexBooks({});

    console.log("Checkout:", res);
    console.log("Gutendex:", resG);
  };

  return (
    <UIButton variant="primary" {...props} onClick={handleClick}>
      Comprar
    </UIButton>
  );
}
