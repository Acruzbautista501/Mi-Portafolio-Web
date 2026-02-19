import { createApp } from 'vue'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import CoreuiVue from '@coreui/vue'
import App from './App.vue'

// FontAwesome
import './plugins/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(CoreuiVue)

// Registrar componente global
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

