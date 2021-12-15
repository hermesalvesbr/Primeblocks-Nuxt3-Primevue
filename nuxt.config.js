import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    ssr: true,
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ]
})