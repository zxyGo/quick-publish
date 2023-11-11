import { createApp } from "vue";
import ElementPlus from "element-plus";
import "./style.css";
import App from "./App.vue";
import router from "./routers";

const app = createApp(App);
app
  .use(ElementPlus)
  .use(router)
  .mount("#app")
  .$nextTick(() => {
    // Remove Preload scripts loading
    postMessage({ payload: "removeLoading" }, "*");

    // Use contextBridge
    window.ipcRenderer.on("main-process-message", (_event, message) => {
      console.log(message);
    });
  });
