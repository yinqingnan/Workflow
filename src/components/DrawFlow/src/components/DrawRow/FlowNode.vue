<!--
* @author 肖阳
* @time 2020-9-10
* @dec 单列生成流程节点的基本节点(开始，抄送，审批)
-->
<script>
export default {
  name: "FlowNode",
  props: {
    nodeConfig: {
      nodeType: Object,
      default() {
        return {
          pid: "root",
          id: "1",
          nodeType: "root", // 1:发起人 2：审批人 3 抄送人 4条件框
          nodeName: "所有人12",
          content: "内容2",
          isRow: true,
          data: {}
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    clickNode(nodeConfig) {
      this.$emit("clickNode", nodeConfig);
    },
    closeNode(e, nodeConfig) {
      e.stopPropagation();
      this.$emit("closeNode", nodeConfig);
    }
  },

  render() {
    const { nodeName, content, nodeType } = this.nodeConfig;
    return (
      <div
        onClick={() => {
          this.clickNode(this.nodeConfig);
        }}
        class="node-wrap-box node_sid-startevent start-node"
      >
        <div>
          <div class={[nodeType !== "startEvent" ? "arrows" : "noArrows"]}>
            <div class={[`node-type-${nodeType}`, "title"]}>
              <span class="edit-title">{nodeName}</span>
              <i
                aria-label="icon: close"
                tabindex="-1"
                class="anticon anticon-close close"
              >
                <a-icon
                  type="close"
                  onClick={event => {
                    this.closeNode(event, this.nodeConfig);
                  }}
                />
              </i>
            </div>
          </div>
          <div class="content">
            <div class="text">{content}</div>
          </div>
        </div>
      </div>
    );
  }
};
</script>

<style scoped lang="less">
.arrows {
  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    border-style: solid;
    border-width: 8px 6px 4px;
    border-color: #cacaca transparent transparent;
    background: #f5f5f7;
  }
}
.node-wrap-box {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  width: 220px;
  min-height: 72px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  .close {
    display: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
  }
  &:hover {
    .close {
      display: block;
    }
    &::after {
      border: 1px solid #3296fa;
      box-shadow: 0 0 6px 0 rgba(50, 150, 250, 0.3);
    }
  }
  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-radius: 4px;
    border: 1px solid transparent;
    transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  }
  //审批
  .node-type-startEvent {
    background: rgb(87, 106, 149);
  }
  .node-type-userTask {
    background: rgb(255, 148, 62);
  }
  .node-type-serviceTask {
    background: rgb(50, 150, 250);
  }
  .title {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;
    padding-right: 30px;
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #ffffff;
    text-align: left;
    border-radius: 4px 4px 0px 0px;
    .edit-title {
      line-height: 15px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-bottom: dashed 1px transparent;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 40px;
      }
    }
  }
  .content {
    position: relative;
    font-size: 14px;
    padding: 16px;
    padding-right: 30px;
    .text {
      display: block;
      white-space: nowrap;
    }
  }
}
</style>
