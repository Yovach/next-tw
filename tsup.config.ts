import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  splitting: true,
  // sourcemap: true,
  format: ["cjs", "esm"],
  clean: true,
})