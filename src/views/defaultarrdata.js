/*
 * @Descripttion:
 * @Autor: yqn
 * @Date: 2021-07-21 09:28:31
 * @LastEditTime: 2021-07-21 09:28:39
 * @FilePath: \src\views\defaultarrdata.js
 * @LastEditors: yqn
 */
let arr = [
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
    cond: []
  },
  {
    id: "aih9i4egy",
    groupId: "a760akwo8",
    pids: ["akqp6zgta", "asw8uaef6"],
    groupPid: "akqp6zgta,asw8uaef6",
    childFlowIdx: "a8lm9tjxp",
    type: "4",
    title: "抄送人",
    members: [
      {
        sort: 1,
        userId: 454,
        username: "吴翔",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "None",
    content: "吴翔",
    approve: "None",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "aqrkuujfu",
    groupId: "asci83q72",
    pids: ["asci83q72"],
    groupPid: "asci83q72",
    childFlowIdx: "ab6cmeg95,as1th8f5t",
    type: "2",
    title: "审批人",
    members: [
      {
        sort: 1,
        userId: 998,
        username: "陈鹏昆",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "陈鹏昆",
    approve: "AllAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "aeva5mh9z",
    groupId: "a0a0vu95d",
    pids: ["a0a0vu95d"],
    groupPid: "a0a0vu95d",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人01",
    members: [
      {
        sort: 1,
        userId: 717,
        username: "陈美群",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "陈美群",
    approve: "AllAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "a0a0vu95d",
    groupId: "awqb50ebu",
    pids: ["ahf97w4aq"],
    groupPid: "ahf97w4aq",
    childFlowIdx: "aeva5mh9z",
    type: "3",
    title: "条件10",
    members: [],
    memberType: "None",
    content: "单选 等于 选项2",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 458,
        condIdx: "aavy9udc9",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项2",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  },
  {
    id: "army6ys9q",
    groupId: "aubf1tcqt",
    pids: ["a8szgnpan", "asci83q72", "arfs6e27i", "ay6xgxbbt"],
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
    content: "李廷鸿",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "ab6cmeg95",
    groupId: "acez5pcef",
    pids: ["aqrkuujfu"],
    groupPid: "aqrkuujfu",
    childFlowIdx: "asnvs96wm",
    type: "3",
    title: "条件",
    members: [],
    memberType: "None",
    content: "单选 等于 选项3",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 459,
        condIdx: "a64d6qyss",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项3",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  },
  {
    id: "a5hkv0d64",
    groupId: "arfs6e27i",
    pids: ["arfs6e27i"],
    groupPid: "arfs6e27i",
    childFlowIdx: "a6ytm26pm,ati3sqytn",
    type: "2",
    title: "审批人",
    members: [
      {
        sort: 1,
        userId: 743,
        username: "余路",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "余路",
    approve: "AnyAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "arh1ah12r",
    groupId: "akqp6zgta",
    pids: ["akqp6zgta"],
    groupPid: "akqp6zgta",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人07",
    members: [
      {
        sort: 1,
        userId: 671,
        username: "刘阳",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "刘阳",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "afugk0x4d",
    groupId: "asw8uaef6",
    pids: ["asw8uaef6"],
    groupPid: "asw8uaef6",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人08",
    members: [
      {
        sort: 1,
        userId: 949,
        username: "陈东升",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "陈东升",
    approve: "AllAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "a8szgnpan",
    groupId: "aubf1tcqt",
    pids: ["a78x4anxe"],
    groupPid: "a78x4anxe",
    childFlowIdx: "army6ys9q,ahf97w4aq",
    type: "3",
    title: "条件01",
    members: [
      {
        sort: 1,
        userId: 454,
        username: "吴翔",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "None",
    content: "金额输入框 小于 100",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 460,
        condIdx: "ajxudvy6m",
        sort: 1,
        formIdx: "a0m2d5dlg",
        operation: "LT",
        value: "100",
        elementCode: "Amount",
        title: "金额输入框",
        options: null
      }
    ]
  },
  {
    id: "a6ytm26pm",
    groupId: "ap0qedkbt",
    pids: ["a5hkv0d64"],
    groupPid: "a5hkv0d64",
    childFlowIdx: "a802r3eny",
    type: "3",
    title: "条件",
    members: [],
    memberType: "None",
    content: "单选 等于 选项1",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 461,
        condIdx: "atxmy1da3",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项1",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  },
  {
    id: "apbchgigc",
    groupId: "ati3sqytn",
    pids: ["ati3sqytn"],
    groupPid: "ati3sqytn",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人06",
    members: [
      {
        sort: 1,
        userId: 881,
        username: "余娇",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "余娇",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "aqwvd0qw8",
    groupId: "ay6xgxbbt",
    pids: ["ay6xgxbbt"],
    groupPid: "ay6xgxbbt",
    childFlowIdx: "akqp6zgta,asw8uaef6",
    type: "2",
    title: "审批人",
    members: [
      {
        sort: 1,
        userId: 711,
        username: "区寿童",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "区寿童",
    approve: "AnyAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "akqp6zgta",
    groupId: "a760akwo8",
    pids: ["aqwvd0qw8"],
    groupPid: "aqwvd0qw8",
    childFlowIdx: "arh1ah12r,aih9i4egy",
    type: "3",
    title: "条件",
    members: [],
    memberType: "None",
    content: "单选 等于 选项4",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 462,
        condIdx: "aqctc1ce4",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项4",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  },
  {
    id: "asnvs96wm",
    groupId: "ab6cmeg95",
    pids: ["ab6cmeg95"],
    groupPid: "ab6cmeg95",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人03",
    members: [
      {
        sort: 1,
        userId: 666,
        username: "陈旭东",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "陈旭东",
    approve: "AllAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "asci83q72",
    groupId: "aubf1tcqt",
    pids: ["a78x4anxe"],
    groupPid: "a78x4anxe",
    childFlowIdx: "aqrkuujfu,army6ys9q",
    type: "3",
    title: "条件02",
    members: [
      {
        sort: 1,
        userId: 454,
        username: "吴翔",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "None",
    content: "金额输入框 等于 100",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 463,
        condIdx: "azihqaqik",
        sort: 1,
        formIdx: "a0m2d5dlg",
        operation: "EQ",
        value: "100",
        elementCode: "Amount",
        title: "金额输入框",
        options: null
      }
    ]
  },
  {
    id: "arfs6e27i",
    groupId: "aubf1tcqt",
    pids: ["a78x4anxe"],
    groupPid: "a78x4anxe",
    childFlowIdx: "army6ys9q,a5hkv0d64",
    type: "3",
    title: "条件03",
    members: [
      {
        sort: 1,
        userId: 454,
        username: "吴翔",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      },
      {
        sort: 2,
        userId: 472,
        username: "吴国旸",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "None",
    content: "金额输入框 介于 101.1至200",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 464,
        condIdx: "aonocfby7",
        sort: 1,
        formIdx: "a0m2d5dlg",
        operation: "Between",
        value: "101.1",
        elementCode: "Amount",
        title: "金额输入框",
        options: null,
        value1: "200"
      }
    ]
  },
  {
    id: "ahf97w4aq",
    groupId: "a8szgnpan",
    pids: ["a8szgnpan"],
    groupPid: "a8szgnpan",
    childFlowIdx: "a0a0vu95d,aakbu5r4o",
    type: "2",
    title: "审批人",
    members: [
      {
        sort: 1,
        userId: 694,
        username: "庄培锋",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "庄培锋",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "as1th8f5t",
    groupId: "acez5pcef",
    pids: ["aqrkuujfu"],
    groupPid: "aqrkuujfu",
    childFlowIdx: "a4fk9pku9",
    type: "3",
    title: "条件",
    members: [],
    memberType: "None",
    content: "单选 等于 选项3",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 465,
        condIdx: "a55cgcg4q",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项3",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  },
  {
    id: "ati3sqytn",
    groupId: "ap0qedkbt",
    pids: ["a5hkv0d64"],
    groupPid: "a5hkv0d64",
    childFlowIdx: "apbchgigc",
    type: "3",
    title: "条件",
    members: [],
    memberType: "None",
    content: "单选 等于 选项3",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 466,
        condIdx: "ai63eelt2",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项3",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  },
  {
    id: "a4fk9pku9",
    groupId: "as1th8f5t",
    pids: ["as1th8f5t"],
    groupPid: "as1th8f5t",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人04",
    members: [
      {
        sort: 1,
        userId: 658,
        username: "李国华",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "李国华",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "aakbu5r4o",
    groupId: "awqb50ebu",
    pids: ["ahf97w4aq"],
    groupPid: "ahf97w4aq",
    childFlowIdx: "a1vrss296",
    type: "3",
    title: "条件",
    members: [],
    memberType: "None",
    content: "单选 等于 选项1",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 467,
        condIdx: "a8gnju57h",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项1",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  },
  {
    id: "a1vrss296",
    groupId: "aakbu5r4o",
    pids: ["aakbu5r4o"],
    groupPid: "aakbu5r4o",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人02",
    members: [
      {
        sort: 1,
        userId: 1037,
        username: "潘敏桃",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "潘敏桃",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "a802r3eny",
    groupId: "a6ytm26pm",
    pids: ["a6ytm26pm"],
    groupPid: "a6ytm26pm",
    childFlowIdx: "a8lm9tjxp",
    type: "2",
    title: "审批人05",
    members: [
      {
        sort: 1,
        userId: 776,
        username: "许岩生",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "User",
    content: "许岩生",
    approve: "OrderAllow",
    isRow: true,
    isRoot: false,
    data: {},
    cond: []
  },
  {
    id: "ay6xgxbbt",
    groupId: "aubf1tcqt",
    pids: ["a78x4anxe"],
    groupPid: "a78x4anxe",
    childFlowIdx: "army6ys9q,aqwvd0qw8",
    type: "3",
    title: "条件04",
    members: [
      {
        sort: 1,
        userId: 472,
        username: "吴国旸",
        deptId: 0,
        deptName: "",
        roleId: 0,
        roleName: ""
      }
    ],
    memberType: "None",
    content: "金额输入框 大于 200",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 468,
        condIdx: "a0i00igf1",
        sort: 1,
        formIdx: "a0m2d5dlg",
        operation: "GT",
        value: "200",
        elementCode: "Amount",
        title: "金额输入框",
        options: null
      }
    ]
  },
  {
    id: "asw8uaef6",
    groupId: "a760akwo8",
    pids: ["aqwvd0qw8"],
    groupPid: "aqwvd0qw8",
    childFlowIdx: "afugk0x4d,aih9i4egy",
    type: "3",
    title: "条件",
    members: [],
    memberType: "None",
    content: "单选 等于 选项2",
    approve: "None",
    isRow: false,
    isRoot: false,
    data: {},
    cond: [
      {
        id: 469,
        condIdx: "ai25b9wr5",
        sort: 1,
        formIdx: "aw7gbivto",
        operation: "EQ",
        value: "选项2",
        elementCode: "Radio",
        title: "单选",
        options: [
          {
            idx: "a0ta96sn0",
            optionIdx: 1,
            value: "选项2",
            relationFormIdx: [""]
          },
          {
            idx: "aji3ygghz",
            optionIdx: 2,
            value: "选项1",
            relationFormIdx: [""]
          },
          {
            idx: "a64minv8f",
            optionIdx: 3,
            value: "选项3",
            relationFormIdx: [""]
          },
          {
            idx: "atgbk4l0i",
            optionIdx: 4,
            value: "选项4",
            relationFormIdx: [""]
          }
        ]
      }
    ]
  }
];
