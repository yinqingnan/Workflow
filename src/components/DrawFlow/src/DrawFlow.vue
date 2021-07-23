<script>
import AddNodeBtn from "@/components/DrawFlow/src/components/AddNodeBtn";
import RowFactory from "@/components/DrawFlow/src/components/DrawRow/FactoryRow";
import {
  RowNode,
  ConditionNode,
  CopyNode
} from "./components/NodeConfigFactory/NodeFactory";
import FlowFactory from "./components/factory";
import { HashCode, transToTreeDat } from "./utils";
import Tree from "./components/Tree/Tree.vue";
import FlowNode from "@/components/DrawFlow/src/components/DrawRow/FlowNode";
export default {
  name: "FactoryDrawFlow",
  components: {
    AddNodeBtn,
    FlowNode,
    Tree
  },
  created() {
    this.init();
    // this.creatBusNodeChange();  // 可用事件派发
  },
  props: {
    FlowConfig: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    FlowConfig: {
      handler() {
        this.init();
      },
      deep: true
    }
  },

  data() {
    return {
      visible: false,
      rectTypeDic: {
        1: "审批节点",
        2: "规则节点",
        3: "抄送人",
        4: "开始节点"
      },
      isColList: ["3", "5"],
      selfConfig: null,
      currentNode: null,
      //缓存数据
      cacheData: null,
      Currentnode: {},
      isEdit: true,
      ccpeople: true,
      CC_model: false,
      treeData: [
        {
          code: "D:123456789",
          name: "245",
          parentCode: "D:0000-0000-0000-0000",
          children: null,
          selected: false,
          value: "123456789"
        },
        {
          code: "D:a",
          name: "平台2_一级部门A",
          parentCode: "D:0000-0000-0000-0000",
          children: [
            {
              code: "D:aa",
              name: "平台2_二级部门A",
              parentCode: "D:a",
              children: [
                {
                  code: "D:aaa",
                  name: "平台2_三级部门A",
                  parentCode: "D:aa",
                  children: [
                    {
                      code: "D:aaaa",
                      name: "平台2_四级部门A",
                      parentCode: "D:aaa",
                      children: [
                        {
                          code: "D:aaaaa",
                          name: "平台2_五级部门A",
                          parentCode: "D:aaaa",
                          children: null,
                          selected: false,
                          value: "aaaaa"
                        },
                        {
                          code: "D:bbbbb",
                          name: "平台2_五级部门B",
                          parentCode: "D:aaaa",
                          children: null,
                          selected: false,
                          value: "bbbbb"
                        }
                      ],
                      selected: false,
                      value: "aaaa"
                    },
                    {
                      code: "D:bbbb",
                      name: "平台2_四级部门B",
                      parentCode: "D:aaa",
                      children: null,
                      selected: false,
                      value: "bbbb"
                    }
                  ],
                  selected: false,
                  value: "aaa"
                },
                {
                  code: "D:bbb",
                  name: "平台2_三级部门B",
                  parentCode: "D:aa",
                  children: null,
                  selected: false,
                  value: "bbb"
                }
              ],
              selected: false,
              value: "aa"
            },
            {
              code: "D:bb",
              name: "平台2_二级部门B",
              parentCode: "D:a",
              children: null,
              selected: false,
              value: "bb"
            }
          ],
          selected: false,
          value: "a"
        },
        {
          code: "D:b",
          name: "平台2_一级部门B",
          parentCode: "D:0000-0000-0000-0000",
          children: null,
          selected: false,
          value: "b"
        },
        {
          code: "D:LiBu",
          name: "雷部",
          parentCode: "D:0000-0000-0000-0000",
          children: null,
          selected: false,
          value: "LiBu"
        },
        {
          code: "D:SupplyTopA",
          name: "支持采集站_一级部门A",
          parentCode: "D:0000-0000-0000-0000",
          children: null,
          selected: false,
          value: "SupplyTopA"
        }
      ],
      roleData: [
        {
          id: "R:1",
          name: "普通员工"
        },
        {
          code: "R:2",
          name: "部门经理"
        }
      ],
      rolevalue: ""
    };
  },
  methods: {
    // 节点数据变化事件
    nodeChange(node) {
      this.currentNode.title = node.title;
      this.currentNode.content = node.content;
      this.selfConfig.forEach(i => {
        if (i.id === this.currentNode.id) {
          i.data = node.data;
          i.content = node.content;
          i.title = node.title;
        }
      });
      //强制实例重新渲染操作
      this.$forceUpdate();
    },
    /**
     * 添加条件框
     */
    addBranch(node) {
      let newNode = new CopyNode(node[0]);
      this.selfConfig = this.selfConfig.concat([newNode]);
    },
    creatBusNodeChange() {
      // EventBus.$on("nodeChange", this.nodeChange);
    },
    /**
     * 获取传参数据结构
     */
    getResData() {
      let list = JSON.parse(JSON.stringify(this.selfConfig));
      this.transformTree(list);
      list.forEach(i => {
        if (i.isRow) {
          delete i.childNode;
        }
      });
      return list;
      // return this.transformTree(list);
    },
    /**
     * 初始化 数据私有化
     */
    init() {
      this.selfConfig = JSON.parse(JSON.stringify(this.FlowConfig));
    },
    /**
     *  @param data  源数组一维数组
     *  @requires  tree 二维数组
     */
    transformTree(data) {
      return transToTreeDat(data);
    },
    clickSelectBox(nextNode) {
      let { node, selfConfig } = this.getNodeFactory(nextNode);
      console.log(node, nextNode);
      this.selfConfig = selfConfig.concat(node);
      console.log(this.selfConfig);
    },
    /**
     * 根据isRow去判断row或者rol
     */
    getNodeFactory(nextNode) {
      if (!nextNode.isRow) {
        //添加项为条件节点
        let { node, selfConfig } = this.getColNode(nextNode);
        return { node, selfConfig };
      } else {
        //添加项为审批人、抄送人
        let { node, selfConfig } = this.getRowNode(nextNode);
        return { node, selfConfig };
      }
    },
    /**
     * 获取row节点
     */
    getRowNode(nextNode) {
      let node = [new RowNode(nextNode)];
      let selfConfig = this.repickArr(node[0]);
      return { node, selfConfig };
    },
    /**
     * 获取col节点
     */
    getColNode(nextNode) {
      let groupId = HashCode();
      let node = [
        new ConditionNode({ groupId, ...nextNode }),
        new ConditionNode({ groupId, ...nextNode })
      ];
      let repickConfig = {
        groupId: node[0].groupPid,
        id: node[0].id
      };
      let selfConfig = this.repickArr(repickConfig);
      this.locationScroll();
      return { node, selfConfig };
    },
    /**
     * 定位滚动条
     */
    locationScroll() {
      // window.location.hash = ".bottom-right-cover-line";
      let el = document.getElementsByClassName("dingflow-design")[0];
      setTimeout(() => {
        el.scrollLeft = el.scrollWidth - el.clientWidth + 340;
      }, 0);
    },
    /**
     * 重定位数组
     */
    repickArr(repickConfig) {
      let selfConfig = JSON.parse(JSON.stringify(this.selfConfig));
      selfConfig.forEach(i => {
        if (i.isRow) {
          if (i.groupId === repickConfig.groupId) {
            i.groupId = repickConfig.id;
          }
        } else {
          if (i.groupPid === repickConfig.groupId) {
            i.groupPid = repickConfig.id;
          }
        }
      });
      return selfConfig;
    },
    // 点击节点
    clickNode(nodeConfig) {
      this.currentNode = nodeConfig;
      this.$emit("clickNode", nodeConfig);
    },
    //点击关闭节点
    closeNode(node) {
      console.log(node);
      if (node.type !== "1") {
        let repickConfig = {};
        if (node.isRow) {
          repickConfig.groupId = node.groupId;
          repickConfig.id = node.id;
          let selfConfig = JSON.parse(JSON.stringify(this.selfConfig));
          console.log("selfConfigselfConfigselfConfig", selfConfig);
          this.selfConfig = this.deleteNode(selfConfig, node);
          this.repickDeleteArr(repickConfig);
        } else {
          this.deleteColNode(node);
        }
      } else {
        alert("发起人不能删除");
      }
    },
    // 删除节点
    deleteNode(selfConfig, node) {
      selfConfig = selfConfig.map(i => i.id !== node.id && i).filter(Boolean);
      return selfConfig;
    },
    //单独删除col下node
    deleteColNode(node) {
      console.log(node);
      let selfConfig = JSON.parse(JSON.stringify(this.selfConfig));
      let nodeArr = selfConfig.filter(
        i => i.groupId === node.groupId && !i.isRow
      );
      let deleteArr = [];
      let repickConfig;
      if (nodeArr.length > 2) {
        //递归删除所有关联子节点
        deleteArr = [node];
        this.deleteLoop(selfConfig, node, deleteArr);
        repickConfig = {
          id: node.id,
          groupId: node.groupId
        };
      } else {
        //删除整个group
        let allCol = selfConfig
          .map(i => i.groupId === node.groupId && !i.isRow && i)
          .filter(Boolean);
        deleteArr = allCol;
        allCol.forEach(i => {
          this.deleteLoop(selfConfig, i, deleteArr);
        });
        repickConfig = {
          id: node.groupId,
          groupId: node.groupPid
        };
      }
      deleteArr.forEach(i => {
        selfConfig = this.deleteNode(selfConfig, i);
      });
      this.selfConfig = selfConfig;
      this.repickDeleteArr(repickConfig);
      return selfConfig;
    },
    // 循环遍历删除组下关联节点
    deleteLoop(selfConfig, node, deleteArr) {
      console.log(selfConfig, node, "selfConfig");
      let currentDeleteArr = selfConfig.filter(i => {
        if (i.isRow) {
          return i.groupId === node.id;
        } else {
          return i.groupPid === node.id;
        }
      });
      if (currentDeleteArr.length) {
        currentDeleteArr.forEach(i => {
          deleteArr.push(i);
          this.deleteLoop(selfConfig, i, deleteArr);
        });
      } else {
        return;
      }
    },
    //判断是否是row
    judgeNodeIsRow(node) {
      return node.isRow;
    },
    //删除后重组数组
    repickDeleteArr(repickConfig) {
      let selfConfig = JSON.parse(JSON.stringify(this.selfConfig));
      selfConfig.forEach(i => {
        if (i.isRow && i.groupId === repickConfig.id) {
          i.groupId = repickConfig.groupId;
        } else if (!i.isRow && i.groupPid === repickConfig.id) {
          i.groupPid = repickConfig.groupId;
        }
      });
      this.selfConfig = selfConfig;
      console.log(selfConfig, repickConfig, "groupPid");
    },
    //绘制body
    drawBody(h, node) {
      if (node.childNode) {
        return FlowFactory.getFactory.bind(this, h, node.childNode)();
      } else {
        return <div></div>;
      }
    },
    onClose() {
      this.visible = false;
    },
    showDrawer(node) {
      console.log(node);
      this.visible = true;
      this.Currentnode = node;
    },
    editTitle() {
      this.isEdit = false;
      // const input = this.$refs.myInput.refs.input;
      this.$nextTick(() => {
        this.$refs.myInput.focus();
      });
    },
    inputblur() {
      this.Currentnode.title = this.$refs.myInput.$el.value;
      this.nodeChange(this.Currentnode);
      this.isEdit = true;
    },

    handleOk() {
      if (this.$refs.Tree.testingstate().checked.length) {
        this.Currentnode.content = this.$refs.Tree.testingstate().checked[0];
        this.nodeChange(this.Currentnode);
      } else {
        this.Currentnode.content = this.$refs.Tree.testingstate().selected[0];
        this.nodeChange(this.Currentnode);
      }
      this.CC_model = false;
      this.ccpeople = false;
      this.rolevalue = "";
    },
    ccbtn() {
      //选择发起人
      this.CC_model = true;
      this.$nextTick(() => {
        this.$refs.Tree?.reset();
      });
      console.log("抄送人");
    },
    rolebtn() {
      //选择角色
      this.CC_model = true;
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    handleChange(e) {
      this.rolevalue = e.target.innerHTML;
      this.Currentnode.content = e.target.innerHTML;
      this.nodeChange(this.Currentnode);
      this.ccpeople = false;
    },
    conditionalRender(node) {
      if (node.type === "1" || node.type === "2") {
        return (
          <div>
            <div class="ccheader">
              <div>
                <a-button
                  type="primary"
                  onClick={() => {
                    this.ccbtn("person");
                  }}
                >
                  <a-icon type="user-add" />
                  选择人员&部门
                </a-button>
                <div style="margin:20px 0">
                  <h3>选择角色</h3>
                  <a-select
                    show-search
                    placeholder="请选择发起人角色"
                    option-filter-prop="children"
                    style="width: 200px"
                    allowClear={true}
                    value={this.rolevalue}
                    filter-option={this.filterOption}
                    onchange={() => {
                      this.handleChange(event);
                    }}
                  >
                    {this.roleData.map(item => {
                      return (
                        <a-select-option value={item.name}>
                          {item.name}
                        </a-select-option>
                      );
                    })}
                  </a-select>
                </div>
              </div>
              <a-modal
                title="请选择部门或人员"
                v-model={this.CC_model}
                maskClosable={false}
                keyboard={false}
                cancelText="取消"
                okText="确认"
                onok={() => {
                  this.handleOk();
                }}
              >
                <div class="CC_Select">
                  <div style="width:220px">
                    <Tree treeData={this.treeData} ref="Tree" />
                  </div>
                  <div style="width:220px">
                    <ul></ul>
                  </div>
                </div>
              </a-modal>
              <div>
                {this.ccpeople ? (
                  <div>
                    <span>不指定则默认所有人都可发起此审批</span>
                  </div>
                ) : (
                  <h2>{this.Currentnode.content}</h2>
                )}
              </div>
            </div>
          </div>
        );
      } else if (node.type === "4") {
        return <div>抄送人node</div>;
      } else {
        return <div>条件</div>;
      }
    }
  },
  destroyed() {
    // EventBus.$off("nodeChange");
  },
  render(h) {
    let FlowConfig = JSON.parse(JSON.stringify(this.selfConfig));
    FlowConfig = this.transformTree(FlowConfig);
    this.cacheData = FlowConfig;
    const root = JSON.parse(JSON.stringify(this.selfConfig[0]));
    return (
      <div>
        <div class="design-engine">
          <div class="dingflow-design">
            <div class="ie-polyfill-container">
              <div class="box-scale" id="box-scale">
                {RowFactory.nodeWrapRender.bind(this, h, root)()}
                {this.drawBody(h, FlowConfig[0])}
                <div class="end-node">
                  <div class="end-node-circle"></div>
                  <div class="end-node-text">流程结束</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a-drawer
          placement="right"
          width="480"
          class="my_drawer"
          closable={true}
          visible={this.visible}
          onclose={() => {
            this.onClose();
          }}
        >
          <div>
            {this.isEdit ? (
              <span
                class="myspan"
                onClick={() => {
                  this.editTitle();
                }}
              >
                <a-icon type="edit" />
                {this.Currentnode?.title}
              </span>
            ) : (
              <div style="width:300px">
                <a-input
                  value={this.Currentnode?.title}
                  ref="myInput"
                  placeholder="请输入......."
                  onBlur={() => {
                    this.inputblur();
                  }}
                />
              </div>
            )}
          </div>
          {this.conditionalRender(this.Currentnode)}
          {/*
          <div class="drawer_btn">
            <a-button
              style="margin-right:10px"
              onClick={() => {
                this.onClose();
              }}
            >
              取消
            </a-button>
            <a-button type="primary">确认</a-button>
          </div>
          */}
        </a-drawer>
      </div>
    );
  }
};
</script>

<style scoped lang="less">
.design-engine {
  position: relative;
  height: 100%;
  .dingflow-design {
    width: 100%;
    // background-color: #f5f5f7;
    overflow: auto;
    height: 100%;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    /deep/ .ant-popover-arrow {
      display: none !important;
    }
    .ie-polyfill-container {
      display: -ms-grid;
      -ms-grid-columns: min-content;
      .box-scale {
        transform: scale(1);
        display: inline-block;
        position: relative;
        width: 100%;
        padding: 54.5px 0;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        min-width: -webkit-min-content;
        min-width: -moz-min-content;
        min-width: min-content;
        // background-color: #f5f5f7;
        -webkit-transform-origin: 0 0 0;
        transform-origin: 50% 0px 0px;
        .end-node {
          border-radius: 50%;
          font-size: 14px;
          color: rgba(25, 31, 37, 0.4);
          text-align: left;
          .end-node-circle {
            width: 10px;
            height: 10px;
            margin: auto;
            border-radius: 50%;
            background: #dbdcdc;
          }
          .end-node-text {
            margin-top: 5px;
            text-align: center;
          }
        }
      }
    }
  }
}
.my_drawer {
  .myspan {
    font-size: 16px;
    cursor: text;
    width: 100%;
    &:hover {
      color: #1a91ff;
      border-bottom: 1px solid #1a91ff;
    }
    i {
      margin-right: 12px;
    }
  }
}
.drawer_btn {
  position: absolute;
  bottom: 0;
  right: 20px;
  bottom: 20px;
}

.ccheader {
  padding-top: 20px;
  > div {
    button {
      margin-bottom: 20px;
    }
    span {
      color: #1a91ff;
    }
  }
}
.CC_Select {
  div {
    display: flex;
    justify-content: space-between;
  }
}
</style>
