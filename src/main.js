/*
 * @FilePath: \virtual-table\src\main.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-14 17:43:58
 * @Description:
 */
import Vue from "vue";
import { extendRouter } from "@/extend/router";
import { extendPinia } from "@/extend/pinia";
import { extendTable } from "@/extend/table";
import { extendScroll } from "@/extend/scroll";
import App from "@/layout/App.vue";
import "@/assets/style/index.scss";

const router = extendRouter(Vue);
const pinia = extendPinia(Vue);
extendTable(Vue);
extendScroll(Vue);
const app = new Vue({
    render: (h) => h(App),
    router,
    pinia,
});

app.$mount("#app");

export default app;
