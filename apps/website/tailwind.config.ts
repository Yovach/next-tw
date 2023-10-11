import type { Config } from 'tailwindcss'
import plugin from "next-tw"

export default {
  content: [
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin,
  ],
} satisfies Config

