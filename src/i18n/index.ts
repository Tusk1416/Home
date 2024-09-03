import { createI18n } from 'vue-i18n'

const locale = navigator.language ? navigator.language : 'en-US'

console.log(locale)

const messages: Record<string, any> = import.meta.glob('./*.ts', {
  eager: true,
  import: 'default',
})

Object.keys(messages).forEach((key) => {
  const name = key.split('/').pop()!.replace('.ts', '')
  messages[name] = messages[key]
  delete messages[key]
})

export const langlist = Object.values(messages).map((item) => item.langname)

export const i18n = createI18n({
  legacy: false,
  locale: locale,
  globalInjection: true,
  fallbackLocale: 'en-US',
  messages: messages,
})
