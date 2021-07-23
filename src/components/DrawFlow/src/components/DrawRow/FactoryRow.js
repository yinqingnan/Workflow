/*
 * @Descripttion:
 * @Autor: yqn
 * @Date: 2021-07-20 17:50:57
 * @LastEditTime: 2021-07-21 17:47:58
 * @FilePath: \src\components\DrawFlow\src\components\DrawRow\FactoryRow.js
 * @LastEditors: yqn
 */
import "./row.less";
import drawFlow from "../factory";
export default {
  /**
   *
   * @param {creatElement} h
   * @param {Object} nodeConfig
   */
  nodeWrapRender(h, nodeConfig) {
    let tep = [];
    tep.push(
      <div class="node-wrap">
        <flow-node
          {...{
            props: { nodeConfig },
            on: {
              clickNode: this.clickNode,
              closeNode: this.closeNode
            }
          }}
        >
          {nodeConfig}
        </flow-node>
        <add-node-btn
          {...{
            props: { belongToNode: nodeConfig },
            on: {
              clickSelectBox: this.clickSelectBox
            }
          }}
        ></add-node-btn>
      </div>
    );
    if (nodeConfig.isRoot) {
      return tep;
    }
    if (nodeConfig.nextNode) {
      let el = drawFlow.getFactory.bind(this, h, nodeConfig.nextNode)();
      tep.push(el);
    }
    return tep;
  }
};
