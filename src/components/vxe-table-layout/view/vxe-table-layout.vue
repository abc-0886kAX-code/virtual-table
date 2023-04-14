<!--
 * @FilePath: \virtual-table\src\components\vxe-table-layout\view\vxe-table-layout.vue
 * @Author: zhangxin
 * @Date: 2022-08-11 13:58:51
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-04-14 17:52:52
 * @Description:
-->
<template>
    <div class="vxe-table-layout">
        <!-- 表格主体 -->
        <vxe-table ref="vxeTableRefs" border height="auto" align="center" show-overflow="ellipsis" :data="tableData" :size="size" :stripe="stripe" @cell-click="cellClick">
            <!-- 表格头部 -->
            <!-- 表格列 -->
            <vxe-column :width="indexWidth" :visible="isIndex" title="" type="seq"></vxe-column>
            <template v-for="item in columnSchema">
                <vxe-column :class-name="setupClassName(item)" :key="item.prop" :align="item.align" :field="item.prop" :title="item.label" :type="item.type" :width="item.width" :params="item" :show-overflow="item.showOverflow"></vxe-column>
            </template>
        </vxe-table>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { useTableProps } from "../usecase/useTableProps";
export default {
    name: "vxe-table-layout",
    //混入
    mixins: [],
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props: { ...useTableProps() },
    emit: ["handleLink"],
    setup(props, { emit }) {
        const { uiSchema, columnSchema } = props.tableSchema;
        const setupClassName = (row) => {
            const { className, mold } = row;
            if (className) return className;
            return mold === "link" ? "site-style" : "";
        };
        // 点击单元格处理
        const cellClick = (event) => {
            const { row, column } = event;
            const { mold } = column.params;
            mold === "link" && emit("handleLink", event);
        };
        return {
            ...uiSchema,
            columnSchema,
            setupClassName,
            cellClick,
        };
    },
};
</script>
<style scoped lang="scss">
.vxe-table-layout {
    width: 100%;
    height: 100%;
}
</style>
