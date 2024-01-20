/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: true,
  arrowParens: "avoid",
  trailingComma: "all",
  jsxSingleQuote: true,
  printWidth: 80,
  bracketSpacing: true,

  tailwindFunctions: ["cx", "clsx"],
  tailwindConfig: "./tailwind.config.ts",
};

export default config;
