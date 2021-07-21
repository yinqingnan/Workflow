/*
 * @Descripttion:
 * @Autor: yqn
 * @Date: 2021-07-20 17:50:57
 * @LastEditTime: 2021-07-21 14:35:10
 * @FilePath: \src\components\DrawFlow\src\components\NodeConfigFactory\NodeFactory.js
 * @LastEditors: yqn
 */
/* eslint-disable no-unused-vars */
/**
 * @author 肖阳
 * @time 2020-9-10
 * @dec 各种节点类
 */
import { HashCode } from "../../utils";
export class Node {
  nodeId;
  type;
  childNode;
  title = "title";
  content = "content";
  conditionNodes;
  constructor({ id, type, isRow }) {
    if (type === "2") {
      this.title = "审批人";
      this.content = "请设置审批人";
    } else {
      this.title = "抄送人";
      this.content = "请设置抄送人";
    }
    this.groupId = id;
    this.id = HashCode();
    this.type = type;

    this.isRow = isRow;
  }
}
export class ConditionNode {
  title = "条件";
  data = {};
  constructor({ groupId, type, id, isRow }) {
    this.id = HashCode();
    this.groupId = groupId;
    this.type = type;
    this.content = "请设置审批条件";
    this.groupPid = id;
    this.isRow = isRow;
  }
}
export class RowNode extends Node {
  data = {};
  constructor({ id, type, isRow, title }) {
    super({ id, type, isRow, title });
  }
}
export class CopyNode {
  title = "标题";
  id = HashCode();
  content = "内容";
  data = {};
  constructor({ id, childNode, ...node }) {
    return Object.assign(node, this);
  }
}
