console.log('hjello')

import { createApp } from 'vue'
import App from '../App.vue'
import { TroisJSVuePlugin } from "troisjs";

let app = createApp(App)
app.use(TroisJSVuePlugin);

app.mount('#app')