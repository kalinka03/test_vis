import './assets/main.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setupValidationRules } from './validation/rules';
import { configure } from 'vee-validate';

const app = createApp(App);
app.use(router);

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

setupValidationRules();
app.mount('#app');