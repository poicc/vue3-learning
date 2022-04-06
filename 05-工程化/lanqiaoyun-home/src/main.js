import { createApp } from "vue";
import App from "./App";

//引入样式清单文件
import "./assets/style/index.scss";

// import App from "./test"; //引入Jsx文件
const app = createApp(App); //创建App根组件
app.mount("#app"); //挂载、渲染app
