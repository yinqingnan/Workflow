<!--
 * @Descripttion: 
 * @Autor: yqn
 * @Date: 2021-07-20 17:50:57
 * @LastEditTime: 2021-07-23 15:39:21
 * @FilePath: \src\components\DrawFlow\src\components\DrawAddSelectBox\DrawAddBox.vue
 * @LastEditors: Please set LastEditors
-->

<script>
/* eslint-disable no-unused-vars */
import "./addBox.less";
import { NextNode } from "@/components/DrawFlow/src/components/DrawAddSelectBox/NextNode";
export default {
  name: "AddBox",
  props: {
    nodeConfig: {
      nodeType: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      boxArr: [
        {
          nodeType: "userTask",
          value: "审批人",
          isRow: true,
          calssName: "approver",
          icon: "user"
        },
        // {
        //   type: "4",
        //   value: "抄送人",
        //   isRow: true,
        //   calssName: "notifier",
        //   icon: "highlight"
        // },
        // {
        //   nodeType: "TJ",
        //   value: "条件分支",
        //   isRow: false,
        //   calssName: "route",
        //   icon: "sliders"
        // }
        // {
        //   type: "6",
        //   value: "流转至",
        //   isRow: false,
        //   calssName: "route",
        //   icon: "sliders"
        // }
      ]
    };
  },
  methods: {
    clickSelectBox(item) {
      this.getNexttBox(item);
    },
    getNexttBox(item) {
      const nodeConfig = this.nodeConfig;
      if (item.value === "流转至") {
        this.nodeConfig.isFlowTo = true;
      }
      let { id, prevId, nodeType, isRow, nodeName } = Object.assign(nodeConfig, item);
      let nextNode = new NextNode({ id, prevId, nodeType, isRow, nodeName });
      this.$emit("clickSelectBox", nextNode);
    },
    renderAddSBox() {
      return (
        <div class="add-node-popover">
          <div class="add-node-popover-body">
            {this.boxArr.map(item => {
              return (
                <a
                  onClick={() => {
                    this.clickSelectBox(item);
                  }}
                  class={["add-node-popover-item", item.calssName]}
                >
                  <div class="item-wrapper">
                    <a-icon class="iconfont" type={item.icon} />
                  </div>
                  <span>{item.value}</span>
                </a>
              );
            })}
          </div>
        </div>
      );
    }
  },
  render() {
    return this.renderAddSBox();
  }
};
</script>
