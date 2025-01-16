<template>
  <main class="flex-1">
    <section class="w-full py-2 md:py-4 lg:py-6 xl:py-8 bg-amber-50">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-orange-600">
              {{ t('discover') }}
            </h1>
            <p class="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-400">
              {{ t('journey') }}
            </p>
          </div>
          <div class="space-x-4">
            <button class="bg-orange-500 text-white shadow hover:bg-orange-400 px-4 py-2 rounded-md">{{ t('startAdventure') }}</button>
            <button class="bg-white text-purple-700 border border-purple-200 shadow-sm hover:bg-purple-50 px-4 py-2 rounded-md">{{ t('learnMore') }}</button>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-2 md:py-4 lg:py-6">
      <div class="container px-4 md:px-6 mx-auto">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-800">{{ t('ourServices') }}</h2>
        <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="service in services" :key="service.title" class="flex flex-col items-center space-y-2 border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <component :is="service.icon" class="h-12 w-12 text-orange-500" />
            <h3 class="text-xl font-bold text-purple-800">{{ t(service.title) }}</h3>
            <p class="text-gray-700 dark:text-gray-400 text-center">{{ t(service.description) }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full py-2 md:py-4 lg:py-6 bg-purple-50">
      <div class="container px-4 md:px-6 mx-auto">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-800">{{ t('testimonials') }}</h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <blockquote v-for="testimonial in testimonials" :key="testimonial.author" class="flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <p class="mb-4 text-gray-700">"{{ t(testimonial.quote) }}"</p>
            <cite class="font-medium text-orange-600">- {{ testimonial.author }}, {{ testimonial.trip }}</cite>
          </blockquote>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Plane, Bed, Utensils } from 'lucide-vue-next'

const { t } = useI18n()

const services = [
  {
    icon: Plane,
    title: 'unforgettableTrips',
    description: 'unforgettableTripsDescription'
  },
  {
    icon: Bed,
    title: 'cozyAccommodations',
    description: 'cozyAccommodationsDescription'
  },
  {
    icon: Utensils,
    title: 'culinaryAdventures',
    description: 'culinaryAdventuresDescription'
  }
]

const testimonials = [
  {
    quote: 'testimonial1',
    author: 'Sarah Johnson',
    trip: 'Tokyo Adventure'
  },
  {
    quote: 'testimonial2',
    author: 'Michael Chen',
    trip: 'Iceland Explorer'
  },
  {
    quote: 'testimonial3',
    author: 'Emma Rodriguez',
    trip: 'Tastes of Tuscany'
  }
]
</script>