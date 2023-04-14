/*
 * @FilePath: \virtual-table\src\router\useRouter.js
 * @Author: zhangxin
 * @Date: 2022-11-30 10:18:11
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-14 17:47:58
 * @Description:
 */

import { defineRouter } from "./defineRouter";
import { defineMeta } from "@/router/meta";

const routes = [
    {
        name: "debug",
        path: "/debug",
        meta: defineMeta(),
        component: () => import("@/pages/Debug/debug.vue"),
    },
    {
        name: "vxe-table",
        path: "/",
        meta: defineMeta({ level: 0 }),
        component: () => import("@/layout/Home.vue"),
        children: [],
    },
];
const router = defineRouter(routes);

export function useRouter() {
    return router.core;
}

export function useRoute() {
    return router.core.currentRoute;
}

export const resetRoute = router.reset;

export default router;
