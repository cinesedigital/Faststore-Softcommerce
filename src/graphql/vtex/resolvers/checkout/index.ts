import { Context } from "@faststore/api/dist/esm/src/platforms/vtex";
import { BASE_URL } from "../../../../constants";
import { serializeCookies } from "../../../../components/utils";

const checkoutResolvers = {
  getCheckout: async (_: unknown, __: unknown, ctx: Context) => {
    console.log('%c getCheckout', 'font-size:1rem; margin: 20px 0 0 -8px; color: #EC8F33;');
    const url = `${BASE_URL}/api/checkout/pub/orderForm`;

    console.log('%c ctx.storage: ', 'margin-top: 6px; color: #7fffd4;', ctx.storage);

    ctx.storage.cookies.forEach((value, key) => {
      console.log("domain:", key, "cookies:", value);
    });

    const cookieHeader = serializeCookies(ctx.storage.cookies);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        cookie: cookieHeader,
      },
      credentials: "include",
    });

    return response.json();
  },
};

export default checkoutResolvers;
