import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import systemFunctions from '@/assets/SystemFunctions';

const app = createApp(App);
app.config.globalProperties.$systemFunctions = systemFunctions;
app.use(router);
app.mount('#system-app');



