/** @type {import("prettier").Config} */
const config = {
  semi: false,
  plugins: ["prettier-plugin-embed", "prettier-plugin-sql"],
  proseWrap: "always",
  // prettier-plugin-sql options
  formatter: "sql-formatter",
  keywordCase: "upper",
  language: "postgresql",
}

export default config
