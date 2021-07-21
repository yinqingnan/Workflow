<template>
  <div id="drawProcessDesign">
    <a-button @click="getData">提交</a-button>
    <a-button @click="nodeChange">修改当前node</a-button>
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
}
</style>

<script>
const arr = [
  {
    id: "a78x4anxe",
    groupId: null,
    pids: [null],
    groupPid: null,
    childFlowIdx: "a8szgnpan,asci83q72,arfs6e27i,ay6xgxbbt",
    type: "1",
    title: "发起人",
    members: [],
    memberType: "None",
    content: "所有人",
    approve: "None",
    isRow: true,
    isRoot: true,
    data: {},
    cond: [],
    isParent: true
  },
  {
    id: "army6ys9q",
    groupId: "a78x4anxe",
    pids: ["a78x4anxe"],
    groupPid: "a8szgnpan,asci83q72,arfs6e27i,ay6xgxbbt",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人10",
    members: [
      {
        sort: 1,
        userId: 860,
        username: "李廷鸿",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "李廷鸿111",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: [],
    isParent: true
  },
  {
    type: "4",
    title: "抄送人",
    content: "谢波",
    groupId: "army6ys9q",
    id: "apclw3nyvatbedgg",
    isRow: true,
    data: {},
    pids: ["army6ys9q"]
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
          id: "root",
          groupId: null,
          type: "1",
          title: "所有人",
          content: "请选择",
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
      this.node.content = "谢老师";
      this.node.title = "抄送";
      this.$refs.flow.nodeChange(this.node);
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
      }, 1000);
    },
    clickNode(node) {
      this.node = node;
      console.log("当前点击节点", node);
      this.$refs.flow.showDrawer(this.node);
    }
  }
};
</script>
