export default {
  semi: false,
  plugins: ["prettier-plugin-embed", "prettier-plugin-sql"],
  proseWrap: "always",
  // prettier-plugin-sql options
  formatter: "sql-formatter",
  keywordCase: "upper",
  language: "postgresql",
}
