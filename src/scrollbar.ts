import plugin from "tailwindcss/plugin";

export const scrollbarPlugin = plugin(function ({ addVariant }) {
  addVariant("scrollbar", "&::-webkit-scrollbar");
  addVariant("scrollbar-button", "&::-webkit-scrollbar-button");
  addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
  addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
  addVariant("scrollbar-track-piece", "&::-webkit-scrollbar-track-piece");
  addVariant("scrollbar-corner", "&::-webkit-scrollbar-corner");
});
