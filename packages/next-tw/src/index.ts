import plugin from "tailwindcss/plugin";

export default plugin(function ({ addVariant }) {
  addVariant("scrollbar", "&::-webkit-scrollbar");
  addVariant("scrollbar-button", "&::-webkit-scrollbar-button");
  addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
  addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
  addVariant("scrollbar-track-piece", "&::-webkit-scrollbar-track-piece");
  addVariant("scrollbar-corner", "&::-webkit-scrollbar-corner");

  addVariant("inner-spin-button", "&::-webkit-inner-spin-button");
  addVariant("outer-spin-button", "&::-webkit-outer-spin-button");
});
