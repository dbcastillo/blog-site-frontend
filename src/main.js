import {createApp} from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './router' // <-- Make sure you have this

const vuetify = createVuetify({
    components, directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.mount('#app')