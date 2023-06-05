import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// fontawesome
import '@fortawesome/fontawesome-free/css/all.css'

// bootstrap css / js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// main css
import './styles.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')