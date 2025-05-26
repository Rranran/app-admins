import { createApp } from 'vue';
import App from './App.vue';
import appAdmins from './index';


const app = createApp(App);
app.use(appAdmins).mount('#app');
