/*
 * @FilePath: \virtual-table\src\components\vxe-table-layout\index.js
 * @Author: zhangxin
 * @Date: 2022-08-11 13:59:13
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-14 17:55:30
 * @Description:
 */
export * from "./usecase/useTableProps";
export const VXETableLayout = defineComponent(() => import("./view/vxe-table-layout.vue"));
