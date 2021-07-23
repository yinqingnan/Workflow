<!--
 * @Descripttion: 
 * @Autor: yqn
 * @Date: 2021-07-22 17:14:33
 * @LastEditTime: 2021-07-23 15:59:21
 * @FilePath: \src\components\DrawFlow\src\components\Tree\Tree.vue
 * @LastEditors: yqn
-->
<template>
  <div>
    <a-tree
      v-if="treeData"
      checkable
      :showLine="false"
      :tree-data="treeData"
      :replaceFields="replaceFields"
      :checkStrictly="true"
      :selectedKeys="selected"
      :checkedKeys="checked"
      @select="onSelect"
      @check="onCheck"
    />
  </div>
</template>
<script>
export default {
  name: "Tree",
  props: ["treeData"],
  data() {
    return {
      replaceFields: {
        children: "children",
        title: "name",
        key: "name"
      },
      selected: [],
      checked: []
    };
  },
  methods: {
    onSelect(selectedKeys) {
      this.selected = [];
      this.selected.push(selectedKeys[0]);
      console.log("treeselected", selectedKeys[0]);
    },
    onCheck(checkedKeys) {
      this.checked = [];
      this.checked.push(checkedKeys.checked.pop());
      console.log("treeoncheck", checkedKeys.checked);
    },
    //检测选中的是部门还是部门下层
    testingstate() {
      return {
        selected: this.selected,
        checked: this.checked
      };
    },
    reset() {
      this.selected = [];
      this.checked = [];
    }
  }
};
</script>
