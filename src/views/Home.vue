<template>
  <div id="drawProcessDesign">
    <header>
      <div>
        <a-button @click="getData" type="primary">提交</a-button>
      </div>
      <!-- <a-button @click="nodeChange">修改当前node</a-button> -->
    </header>
    <FactoryDrawFlow
      @clickNode="clickNode"
      ref="flow"
      :FlowConfig="FlowConfig"
    ></FactoryDrawFlow>
  </div>
</template>
<style lang="less" scoped>
#drawProcessDesign {
  background: #f0f2f5;
  header {
    height: 60px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #e6e6e6;
    button {
      line-height: 1;
      margin-right: 20px;
      margin-top: 15px;
    }
  }
}
</style>

<script>
import { getUUID } from "../components/DrawFlow/src/utils";
const arr = [
  {
    id: getUUID(),
    groupId: null,
    pids: [null],
    groupPid: null,
    // childFlowIdx: "a8szgnpan,asci83q72,arfs6e27i,ay6xgxbbt",
    nodeType: "startEvent",
    nodeName: "开始",
    // members: [],
    // memberType: "None",
    content: "开始节点",
    approve: "None",
    isRow: true,
    isRoot: true,
    isParent: true
  }
];
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data() {
    return {
      node: null,
      FlowConfig: [
        {
          id: getUUID(),
          groupId: null,
          nodeType: "startEvent",
          nodeName: "开始",
          content: "开始节点",
          isRow: true,
          isRoot: true,
          data: {}
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    getData() {
      let res = this.$refs.flow.getResData();
      console.log("这是返回的一维数组", JSON.stringify(res));
    },
    nodeChange() {
      // this.node.content = "谢老师";
      // this.node.title = "抄送";
      // this.$refs.flow.nodeChange(this.node);
    },
    /**
     * 1、创建一个row length 1
     * 2、创建一个col节点
     * 3、创建一组col length 1
     * return [{pid id type}]
     */
    getNodeArr() {
      this.FlowConfig = this.$refs.flow.getNodeArr();
      return this.FlowConfig;
    },
    init() {
      setTimeout(() => {
        this.FlowConfig = arr;
        this.$forceUpdate(); //强制实例重新渲染操作
      });
    },
    clickNode(node) {
      this.node = node;
      console.log("当前点击节点", node);
      this.$refs.flow.showDrawer(this.node);
    }
  }
};
</script>
