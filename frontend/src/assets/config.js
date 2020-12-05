/**
 * Start index is 1, so we need to minus 1 when access by index
 *
 * rate mode:   fixed, range, rate
 *              fixed:  multiply with fixed number
 *              range:  user can switch in range with min and max
 *              rate:   default mode, multiply with number specified in
 *                      rate section and range in item rates section
 * */
let config = [
    {
        "index": 1,
        "year": 2004,
        "title": "苏价服(2004) 483号",
        "rates": [
            {
                "index": 1,
                "min": 0,
                "max": 1000000
            },
            {
                "index": 2,
                "min": 1000000,
                "max": 5000000
            },
            {
                "index": 3,
                "min": 5000000,
                "max": 10000000
            },
            {
                "index": 4,
                "min": 10000000,
                "max": 50000000
            },
            {
                "index": 5,
                "min": 50000000,
                "max": 100000000
            },
            {
                "index": 6,
                "min": 100000000,
                "max": "unlimited"
            }
        ],
        "items": [
            {
                "index": 1,
                "name": "编制设计概算",
                "cost": "概算价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.8
                    },
                    {
                        "index": 2,
                        "thousandth": 1.5
                    },
                    {
                        "index": 3,
                        "thousandth": 1.2
                    },
                    {
                        "index": 4,
                        "thousandth": 1.0
                    },
                    {
                        "index": 5,
                        "thousandth": 0.7
                    },
                    {
                        "index": 6,
                        "thousandth": 0.4
                    }
                ]
            },
            {
                "index": 2,
                "name": "审核设计概算",
                "cost": "概算价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.1
                    },
                    {
                        "index": 2,
                        "thousandth": 0.9
                    },
                    {
                        "index": 3,
                        "thousandth": 0.7
                    },
                    {
                        "index": 4,
                        "thousandth": 0.6
                    },
                    {
                        "index": 5,
                        "thousandth": 0.4
                    },
                    {
                        "index": 6,
                        "thousandth": 0.2
                    }
                ]
            },
            {
                "index": 3,
                "name": "编制预算、标底(含清单编制)",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 3.8
                    },
                    {
                        "index": 2,
                        "thousandth": 3.4
                    },
                    {
                        "index": 3,
                        "thousandth": 3.0
                    },
                    {
                        "index": 4,
                        "thousandth": 2.4
                    },
                    {
                        "index": 5,
                        "thousandth": 1.8
                    },
                    {
                        "index": 6,
                        "thousandth": 1.4
                    }
                ]
            },
            {
                "index": 4,
                "name": "单独编制工程量清单",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 2.0
                    },
                    {
                        "index": 2,
                        "thousandth": 1.8
                    },
                    {
                        "index": 3,
                        "thousandth": 1.6
                    },
                    {
                        "index": 4,
                        "thousandth": 1.4
                    },
                    {
                        "index": 5,
                        "thousandth": 1.2
                    },
                    {
                        "index": 6,
                        "thousandth": 1.0
                    }
                ]
            },
            {
                "index": 5,
                "name": "编制投标报价(不含清单编制)",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 2.2
                    },
                    {
                        "index": 2,
                        "thousandth": 2.0
                    },
                    {
                        "index": 3,
                        "thousandth": 1.7
                    },
                    {
                        "index": 4,
                        "thousandth": 1.5
                    },
                    {
                        "index": 5,
                        "thousandth": 1.2
                    },
                    {
                        "index": 6,
                        "thousandth": 1.0
                    }
                ]
            },
            {
                "index": 6,
                "name": "编制预算、标底、投标报价(不含编制工程量清单)",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 0.8
                    },
                    {
                        "index": 2,
                        "thousandth": 0.6
                    },
                    {
                        "index": 3,
                        "thousandth": 0.5
                    },
                    {
                        "index": 4,
                        "thousandth": 0.4
                    },
                    {
                        "index": 5,
                        "thousandth": 0.3
                    },
                    {
                        "index": 6,
                        "thousandth": 0.2
                    }
                ]
            },
            {
                "index": 7,
                "name": "单独编制工程量清单",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.8
                    },
                    {
                        "index": 2,
                        "thousandth": 1.6
                    },
                    {
                        "index": 3,
                        "thousandth": 1.4
                    },
                    {
                        "index": 4,
                        "thousandth": 1.2
                    },
                    {
                        "index": 5,
                        "thousandth": 0.9
                    },
                    {
                        "index": 6,
                        "thousandth": 0.7
                    }
                ]
            },
            {
                "index": 8,
                "name": "审核标底",
                "cost": "送审工程造价",
                "mode": "range",
                "rate": {
                    "min": {
                        "percentage": 15
                    },
                    "max": {
                        "percentage": 25
                    }
                }
            },
            {
                "index": 9,
                "name": "工程结算编制",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.2
                    },
                    {
                        "index": 2,
                        "thousandth": 1.0
                    },
                    {
                        "index": 3,
                        "thousandth": 0.9
                    },
                    {
                        "index": 4,
                        "thousandth": 0.8
                    },
                    {
                        "index": 5,
                        "thousandth": 0.7
                    },
                    {
                        "index": 6,
                        "thousandth": 0.5
                    }
                ]
            },
            {
                "index": 10,
                "name": "工程竣工结算审核基本收费",
                "cost": "送审项目工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.2
                    },
                    {
                        "index": 2,
                        "thousandth": 1.0
                    },
                    {
                        "index": 3,
                        "thousandth": 0.9
                    },
                    {
                        "index": 4,
                        "thousandth": 0.8
                    },
                    {
                        "index": 5,
                        "thousandth": 0.7
                    },
                    {
                        "index": 6,
                        "thousandth": 0.5
                    }
                ]
            },
            {
                "index": 11,
                "name": "工程竣工结算审核追加费用",
                "cost": "核减(增)额",
                "unit": "元",
                "mode": "fixed",
                "rate": {
                    "percentage": 5
                }
            },
            {
                "index": 12,
                "name": "施工阶段全过程工程造价控制",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 12
                    },
                    {
                        "index": 2,
                        "thousandth": 10
                    },
                    {
                        "index": 3,
                        "thousandth": 9
                    },
                    {
                        "index": 4,
                        "thousandth": 7
                    },
                    {
                        "index": 5,
                        "thousandth": 5
                    },
                    {
                        "index": 6,
                        "thousandth": 4
                    }
                ]
            }
        ]
    },
    {
        "index": 2,
        "year": 2014,
        "title": "苏价服(2014) 483号",
        "rates": [
            {
                "index": 1,
                "min": 0,
                "max": 5000000
            },
            {
                "index": 2,
                "min": 5000000,
                "max": 10000000
            },
            {
                "index": 3,
                "min": 10000000,
                "max": 50000000
            },
            {
                "index": 4,
                "min": 50000000,
                "max": 100000000
            },
            {
                "index": 5,
                "min": 100000000,
                "max": 500000000
            },
            {
                "index": 6,
                "min": 500000000,
                "max": "unlimited"
            }
        ],
        "items": [
            {
                "index": 1,
                "name": "投资估算编制或审核",
                "cost": "总投资",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.0
                    },
                    {
                        "index": 2,
                        "thousandth": 0.8
                    },
                    {
                        "index": 3,
                        "thousandth": 0.6
                    },
                    {
                        "index": 4,
                        "thousandth": 0.4
                    },
                    {
                        "index": 5,
                        "thousandth": 0.3
                    },
                    {
                        "index": 6,
                        "thousandth": 0.2
                    }
                ]
            },
            {
                "index": 2,
                "name": "审核设计概算",
                "cost": "概算价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.5
                    },
                    {
                        "index": 2,
                        "thousandth": 1.3
                    },
                    {
                        "index": 3,
                        "thousandth": 1.0
                    },
                    {
                        "index": 4,
                        "thousandth": 0.9
                    },
                    {
                        "index": 5,
                        "thousandth": 0.8
                    },
                    {
                        "index": 6,
                        "thousandth": 0.7
                    }
                ]
            },
            {
                "index": 3,
                "name": "审核设计概算",
                "cost": "概算价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.0
                    },
                    {
                        "index": 2,
                        "thousandth": 0.8
                    },
                    {
                        "index": 3,
                        "thousandth": 0.7
                    },
                    {
                        "index": 4,
                        "thousandth": 0.6
                    },
                    {
                        "index": 5,
                        "thousandth": 0.5
                    },
                    {
                        "index": 6,
                        "thousandth": 0.4
                    }
                ]
            },
            {
                "index": 4,
                "name": "单独编制工程量清单",
                "cost": "中标价或合同价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 2.7
                    },
                    {
                        "index": 2,
                        "thousandth": 2.5
                    },
                    {
                        "index": 3,
                        "thousandth": 2.1
                    },
                    {
                        "index": 4,
                        "thousandth": 1.9
                    },
                    {
                        "index": 5,
                        "thousandth": 1.7
                    },
                    {
                        "index": 6,
                        "thousandth": 1.5
                    }
                ]
            },
            {
                "index": 5,
                "name": "单独审核工程量清单",
                "cost": "中标价或合同价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.9
                    },
                    {
                        "index": 2,
                        "thousandth": 1.8
                    },
                    {
                        "index": 3,
                        "thousandth": 1.5
                    },
                    {
                        "index": 4,
                        "thousandth": 1.3
                    },
                    {
                        "index": 5,
                        "thousandth": 1.2
                    },
                    {
                        "index": 6,
                        "thousandth": 1.1
                    }
                ]
            },
            {
                "index": 6,
                "name": "工程预算、招标控制价、投标报价(不含编制工程量清单)编制",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.5
                    },
                    {
                        "index": 2,
                        "thousandth": 1.2
                    },
                    {
                        "index": 3,
                        "thousandth": 1.0
                    },
                    {
                        "index": 4,
                        "thousandth": 0.8
                    },
                    {
                        "index": 5,
                        "thousandth": 0.6
                    },
                    {
                        "index": 6,
                        "thousandth": 0.4
                    }
                ]
            },
            {
                "index": 7,
                "name": "工程预算、招标控制价、投标报价(不含审核工程量清单)审核",
                "cost": "送审建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.0
                    },
                    {
                        "index": 2,
                        "thousandth": 0.8
                    },
                    {
                        "index": 3,
                        "thousandth": 0.6
                    },
                    {
                        "index": 4,
                        "thousandth": 0.5
                    },
                    {
                        "index": 5,
                        "thousandth": 0.4
                    },
                    {
                        "index": 6,
                        "thousandth": 0.3
                    }
                ]
            },
            {
                "index": 8,
                "name": "工程预算、招标控制价、投标报价(含工程量清单编制)编制",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 3.8
                    },
                    {
                        "index": 2,
                        "thousandth": 3.4
                    },
                    {
                        "index": 3,
                        "thousandth": 3.0
                    },
                    {
                        "index": 4,
                        "thousandth": 2.4
                    },
                    {
                        "index": 5,
                        "thousandth": 2.0
                    },
                    {
                        "index": 6,
                        "thousandth": 1.6
                    }
                ]
            },
            {
                "index": 9,
                "name": "工程预算、招标控制价、投标报价(含工程量清单审核)审核",
                "cost": "送审建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 2.7
                    },
                    {
                        "index": 2,
                        "thousandth": 2.4
                    },
                    {
                        "index": 3,
                        "thousandth": 2.1
                    },
                    {
                        "index": 4,
                        "thousandth": 1.7
                    },
                    {
                        "index": 5,
                        "thousandth": 1.4
                    },
                    {
                        "index": 6,
                        "thousandth": 1.1
                    }
                ]
            },
            {
                "index": 10,
                "name": "施工阶段全过程造价控制基本收费",
                "cost": "送审建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 9.0
                    },
                    {
                        "index": 2,
                        "thousandth": 8.0
                    },
                    {
                        "index": 3,
                        "thousandth": 6.0
                    },
                    {
                        "index": 4,
                        "thousandth": 4.0
                    },
                    {
                        "index": 5,
                        "thousandth": 3.5
                    },
                    {
                        "index": 6,
                        "thousandth": 3.0
                    }
                ]
            },
            {
                "index": 11,
                "name": "施工阶段全过程造价控制效益收费",
                "cost": "过程造价核减",
                "unit": "元",
                "mode": "fixed",
                "rate": {
                    "percentage": 4
                }
            },
            {
                "index": 12,
                "name": "施工阶段全过程造价控制驻场收费",
                "cost": "送审建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 5.8
                    },
                    {
                        "index": 2,
                        "thousandth": 5.4
                    },
                    {
                        "index": 3,
                        "thousandth": 4.3
                    },
                    {
                        "index": 4,
                        "thousandth": 3.0
                    },
                    {
                        "index": 5,
                        "thousandth": 2.5
                    },
                    {
                        "index": 6,
                        "thousandth": 2.0
                    }
                ]
            },
            {
                "index": 13,
                "name": "工程结算编制",
                "cost": "建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.8
                    },
                    {
                        "index": 2,
                        "thousandth": 1.4
                    },
                    {
                        "index": 3,
                        "thousandth": 1.1
                    },
                    {
                        "index": 4,
                        "thousandth": 0.9
                    },
                    {
                        "index": 5,
                        "thousandth": 0.7
                    },
                    {
                        "index": 6,
                        "thousandth": 0.5
                    }
                ]
            },
            {
                "index": 14,
                "name": "工程结算审核基本收费",
                "cost": "送审建安工程造价",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 1.8
                    },
                    {
                        "index": 2,
                        "thousandth": 1.4
                    },
                    {
                        "index": 3,
                        "thousandth": 1.1
                    },
                    {
                        "index": 4,
                        "thousandth": 0.9
                    },
                    {
                        "index": 5,
                        "thousandth": 0.7
                    },
                    {
                        "index": 6,
                        "thousandth": 0.5
                    }
                ]
            },
            {
                "index": 15,
                "name": "工程结算审核效益收费",
                "cost": "核增额加核减额",
                "unit": "元",
                "mode": "fixed",
                "rate": {
                    "percentage": 6
                }
            },
            {
                "index": 16,
                "name": "工程造价司法鉴定",
                "cost": "司法鉴定委托标的额",
                "unit": "元",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 10
                    },
                    {
                        "index": 2,
                        "thousandth": 8.0
                    },
                    {
                        "index": 3,
                        "thousandth": 7.0
                    },
                    {
                        "index": 4,
                        "thousandth": 6.0
                    },
                    {
                        "index": 5,
                        "thousandth": 5.0
                    },
                    {
                        "index": 6,
                        "thousandth": 4.0
                    }
                ]
            },
            {
                "index": 17,
                "name": "钢筋及预埋件计算(另算)",
                "cost": "按实际钢筋使用量",
                "unit": "吨",
                "mode": "rate",
                "rate": [
                    {
                        "index": 1,
                        "thousandth": 10
                    },
                    {
                        "index": 2,
                        "thousandth": 8.0
                    },
                    {
                        "index": 3,
                        "thousandth": 7.0
                    },
                    {
                        "index": 4,
                        "thousandth": 6.0
                    },
                    {
                        "index": 5,
                        "thousandth": 5.0
                    },
                    {
                        "index": 6,
                        "thousandth": 4.0
                    }
                ]
            }
        ]
    }
]

export default config