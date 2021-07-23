/*
 * @Descripttion:
 * @Autor: yqn
 * @Date: 2021-07-20 17:50:57
 * @LastEditTime: 2021-07-23 15:21:11
 * @FilePath: \src\components\DrawFlow\src\components\NodeConfigFactory\NodeFactory.js
 * @LastEditors: Please set LastEditors
 */
/* eslint-disable no-unused-vars */
/**
 * @author 肖阳
 * @time 2020-9-10
 * @dec 各种节点类
 */
import { getUUID } from "../../utils";
export class Node {
  nodeId;
  nodeType;
  nextNode;
  nodeName = "title";
  content = "content";
  assignee = null;
  candidateGroups = null;
  branchNodes;
  constructor({ id, nodeType, isRow }) {
    if (nodeType === "userTask") {
      this.nodeName = "审批人";
      this.content = "请设置审批人";
    } else if (nodeType === "serviceTask") {
      this.nodeName = "抄送人";
      this.content = "请设置抄送人";
    }
    this.groupId = id;
    this.id = getUUID();
    this.nodeType = nodeType;
    this.isRow = isRow;
  }
}
export class ConditionNode {
  nodeName = "条件";
  conditionExpression = null;
  conditionGroups = [];
  constructor({ groupId, nodeType, id, isRow }) {
    this.id = getUUID();
    this.groupId = groupId;
    this.nodeType = nodeType;
    this.content = "请设置审批条件";
    this.groupPid = id;
    this.isRow = isRow;
  }
}
export class RowNode extends Node {
  constructor({ id, nodeType, isRow, nodeName }) {
    super({ id, nodeType, isRow, nodeName });
  }
}
export class CopyNode {
  nodeName = "标题";
  id = getUUID();
  content = "内容";
  constructor({ id, nextNode, ...node }) {
    return Object.assign(node, this);
  }
}
