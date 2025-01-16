import { createI18n } from 'vue-i18n'

const loadLocaleMessages = () => {
  const locales = ['en', 'de', 'es', 'yo', 'hi']
  const messages = {}
  locales.forEach(locale => {
    try {
      messages[locale.split('-')[0]] = require(`./assets/locales/${locale}.json`)
    } catch (e) {
      console.warn(`Locale file for ${locale} not found.`)
    }
  })
  return messages
}

const messages = loadLocaleMessages()

function getLocaleFromRoute() {
  const path = window.location.pathname.split('/')
  const locale = path[1]
  return ['en', 'de', 'es', 'yo', 'hi'].includes(locale) ? locale : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getLocaleFromRoute(),
  fallbackLocale: 'en',
  messages,
})

export default i18n