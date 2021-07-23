/**
 * @author 肖阳
 * @time 2020-9-10
 * @dec 下一节点属性
 */
export class NextNode {
  constructor({ id, prevId, nodeType, isRow }) {
    this.id = id;
    this.prevId = prevId;
    this.nodeType = nodeType;
    this.isRow = isRow;
  }
}
