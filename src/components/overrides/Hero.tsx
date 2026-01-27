import { SectionOverride } from "@faststore/core";

const override: SectionOverride = {
  section: "Hero",
  className: "nova_classe",
  components: {
    Hero: {
      // Component: () => <h1>Override do Hero</h1>,
      props: {
        colorVariant: "accent",
        variant: "secondary",
        testId: "heroAttribute"
      },
    },
  },
};

export { override };
