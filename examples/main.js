import { createApp } from "vue";
import Pagination from "vue-pagination-3";
import { ServerTable, ClientTable } from "../compiled/index.js";
// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";

const app = createApp({
  el: "#app",
  render(createElement) {
    return createElement(App);
  }
});

app.use(ClientTable, {}, false, "bootstrap4", "default");
app.use(ServerTable, {}, false, "bootstrap4", "default");
app.component("pagination", Pagination);
