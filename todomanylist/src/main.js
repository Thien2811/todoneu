import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App);

app.component("VueDatePicker", VueDatePicker);

app.mount("#app");
