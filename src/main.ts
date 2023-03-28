import { createApp } from 'vue'
import i18n from './i18n'
import { createExample } from 'Example-ui'
import { createGtm } from '@gtm-support/vue-gtm'

import stores from './stores'
import router from './router'
import ExampleGlobalConfig from './services/Example-ui/global-config'
import App from './App.vue'

const app = createApp(App)

app.use(stores)
app.use(router)
app.use(i18n)
app.use(createExample({ config: ExampleGlobalConfig }))

if (import.meta.env.VITE_APP_GTM_ENABLED) {
  app.use(
    createGtm({
      id: import.meta.env.VITE_APP_GTM_KEY,
      debug: false,
      vueRouter: router,
    }),
  )
}

app.mount('#app')
