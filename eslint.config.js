// @ts-check

import { defineConfig } from "@ilyasemenov/eslint-config"

export default defineConfig({
  vue: true,
  vuePug: true,
}).append({
  files: ["app/openapi/*/openapi.json"],
  rules: {
    // схема приходит из сваггера в виде без pretty print (в виде одной строки), раскидаем объекты по отдельным строчкам.
    // массивы форматировать не стал, т.к. их там почти нет, а те что есть и так хорошо читаются.
    "jsonc/object-curly-newline": ["error", { consistent: true, multiline: true, minProperties: 1 }],
  },
})
