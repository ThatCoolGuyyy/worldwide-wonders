<template>
  <div class="flex flex-col min-h-screen">
    <header class="px-4 lg:px-6 h-16 flex items-center border-b bg-gradient-to-r from-orange-500 to-purple-600 text-white">
      <a href="#" class="flex items-center justify-center">
        <Globe class="h-6 w-6 mr-2 text-white" />
        <span class="text-lg font-bold">{{ t('title') }}</span>
      </a>
      <nav class="ml-auto flex gap-4 sm:gap-6">
        <a v-for="item in navItems" :key="item" :href="'#' + item.toLowerCase().replace(' ', '-')" class="text-sm font-medium hover:underline underline-offset-4 text-white">
          {{ t(item) }}
        </a>
        <div class="relative">
          <button @click="toggleDropdown" class="text-sm font-medium hover:underline underline-offset-4 text-white">
            {{ currentLocale.toUpperCase() }}
          </button>
          <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-32 bg-white border border-purple-100 rounded-md shadow-lg">
            <a v-for="loc in locales" :key="loc" @click="switchLocale(loc)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
              {{ loc.toUpperCase() }}
            </a>
          </div>
        </div>
      </nav>
    </header>

    <MainContent />

    <footer class="w-full py-4 bg-purple-900 text-white">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 class="text-lg font-semibold mb-2">{{ t('aboutUs') }}</h3>
            <p class="text-sm">{{ t('aboutUsDescription') }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">{{ t('contact') }}</h3>
            <p class="text-sm">{{ t('address') }}</p>
            <p class="text-sm">{{ t('phone') }}</p>
            <p class="text-sm">{{ t('email') }}</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">{{ t('followUs') }}</h3>
            <div class="flex space-x-4">
              <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="text-white hover:text-gray-300">
                <span class="sr-only">{{ social.name }}</span>
                <component :is="social.icon" class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div class="mt-4 border-t border-purple-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p class="text-sm text-gray-400">© 2023 WorldWide Wonders. {{ t('allRightsReserved') }}</p>
          <nav class="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <a v-for="link in footerLinks" :key="link" :href="'#' + link.toLowerCase().replace(' ', '-')" class="text-sm hover:text-orange-200 hover:underline underline-offset-4 text-white">
              {{ t(link) }}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Globe, Facebook, Instagram, Twitter } from 'lucide-vue-next'
import MainContent from './components/MainContent.vue'

const { t, locale } = useI18n()
const currentLocale = locale.value
const dropdownOpen = ref(false)
const locales = ['en', 'de', 'hi', 'yo', 'es']

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const switchLocale = (loc) => {
  locale.value = loc
  dropdownOpen.value = false
  window.history.pushState({}, '', `/${loc}${window.location.pathname.substring(3)}`)
}

const navItems = ['ourStory', 'services', 'testimonials', 'contactUs']

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' }
]

const footerLinks = ['privacyPolicy', 'termsOfService', 'cookiePolicy']
</script>