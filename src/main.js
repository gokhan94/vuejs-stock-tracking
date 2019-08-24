import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
import { router }  from "./router";
import { store }   from "./store/store";

Vue.use(VueResource);
Vue.config.productionTip = false

Vue.filter('currency', function (value) {
    return parseFloat(value).toFixed(2) + 'TL';
});

Vue.filter('textLimit', function (value) {
    return value.substring(0, 45)
});


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
