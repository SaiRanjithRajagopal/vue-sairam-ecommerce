import { createApp } from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
//
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";
//
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
//
app.use(PrimeVue);
app.use(router);
app.use(PiniaVuePlugin);
app.use(pinia);
//
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.component("Button", Button);
app.component("ProgressSpinner", ProgressSpinner);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.mount("#app");
