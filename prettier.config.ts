import { type Config } from "prettier"

const config: Config = {
  semi: false,
  plugins: ["prettier-plugin-embed", "prettier-plugin-sql"],
  // prettier-plugin-sql options
  formatter: "sql-formatter",
  keywordCase: "upper",
  language: "postgresql",
}

export default config
