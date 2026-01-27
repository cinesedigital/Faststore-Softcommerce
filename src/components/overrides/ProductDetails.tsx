import { SectionOverride } from "@faststore/core";
import BuyButton from "../atoms/buyButton";

const override: SectionOverride = {
  section: "ProductDetails",
  className: "nova_classe",
  components: {
    BuyButton:{
      Component: (prop) => <BuyButton {...prop} />,
    }
  },
};

export { override };
