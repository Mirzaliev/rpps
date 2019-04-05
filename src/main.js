import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import EvaIcons from "vue-eva-icons";
import VueModal from "vue-js-modal";
import Notifications from "vue-notification";

//Vue.use(EvaIcons);
Vue.use(VueModal, {
  // componentName: "vue-modal",
  dynamic: true,
  injectModalsContainer: true
});
Vue.use(Notifications);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
