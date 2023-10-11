import plugin from "tailwindcss/plugin";

export const scrollbarPlugin = plugin(function ({ addVariant }) {
  addVariant("inner-spin-button", "&::-webkit-inner-spin-button");
  addVariant("outer-spin-button", "&::-webkit-outer-spin-button");
});
