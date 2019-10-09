$(function () {


    var stuData = JSON.parse(localStorage.getItem('stuData'));
    var studyData = [];
    if (stuData) {
        for (var o in stuData.studydata) {
            studyData.push(stuData.studydata[o])
        }
        studyData.shift()
    }
    console.log(stuData)
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    echart_map();
    echart_5();
    echart_rank1();
    echart_rank2();


    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}元"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['日用品', '吃饭消费', '水果', '化妆品', '体育用品', '学习支出', '虚拟充值'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 100.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}元'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: stuData.lifedata ? stuData.lifedata.dailyUse : 100,
                    name: '日用品',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                    {
                        value: stuData.lifedata ? stuData.lifedata.eat : 500,
                        name: '吃饭消费',
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: stuData.lifedata ? stuData.lifedata.fruits : 120,
                        name: '水果',
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: stuData.lifedata ? stuData.lifedata.cosmetics : 130,
                        name: '化妆品',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: stuData.lifedata ? stuData.lifedata.sports : 30,
                        name: '体育用品',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: stuData.lifedata ? stuData.lifedata.study : 150,
                        name: '学习支出',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: stuData.lifedata ? stuData.lifedata.recharge : 150.58,
                        name: '虚拟充值',
                        itemStyle: {
                            normal: {
                                color: '#f6d54a'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));

        function showProvince() {
            var highlight = '#03b7c9';

            var demoData = [
                {
                    name: '身高',
                    value: stuData.healthydata ? stuData.healthydata.high : 190,
                    unit: 'CM',
                    pos: ['16.6%', '25%'],
                    range: [0, 400]
                },
                {
                    name: '体重',
                    value: stuData.healthydata ? stuData.healthydata.weight : 90,
                    unit: 'KG',
                    pos: ['49.8%', '25%'],
                    range: [0, 150]
                },
                {
                    name: '年龄',
                    value: stuData.healthydata ? stuData.healthydata.year : 19,
                    pos: ['83%', '25%'],
                    range: [0, 100]
                },
                {
                    name: '周运动时间',
                    value: stuData.healthydata ? stuData.healthydata.sportsHour : 6.34,
                    unit: 'Hour',
                    pos: ['16.6%', '75%'],
                    range: [0, 50]
                },
                {
                    name: '睡眠时间',
                    value: stuData.healthydata ? stuData.healthydata.sweepHour : 6.28,
                    unit: 'Hour',
                    pos: ['49.8%', '75%'],
                    range: [0, 24]
                },

            ];

            option = {
                backgroundColor: '#222939',

                series: (function () {
                    var result = [];

                    demoData.forEach(function (item) {
                        result.push(
                            // 外围刻度
                            {
                                type: 'gauge',
                                center: item.pos,
                                radius: '33.33%',  // 1行3个
                                splitNumber: item.splitNum || 10,
                                min: item.range[0],
                                max: item.range[1],
                                startAngle: 225,
                                endAngle: -45,
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        width: 2,
                                        shadowBlur: 0,
                                        color: [
                                            [1, highlight]
                                        ]
                                    }
                                },
                                axisTick: {
                                    show: true,
                                    lineStyle: {
                                        color: highlight,
                                        width: 1
                                    },
                                    length: -5,
                                    splitNumber: 10
                                },
                                splitLine: {
                                    show: true,
                                    length: -12,
                                    lineStyle: {
                                        color: highlight,
                                    }
                                },
                                axisLabel: {
                                    distance: -20,
                                    textStyle: {
                                        color: highlight,
                                        fontSize: '14',
                                        fontWeight: 'bold'
                                    }
                                },
                                pointer: {
                                    show: 0
                                },
                                detail: {
                                    show: 0
                                }
                            },

                            // 内侧指针、数值显示
                            {
                                name: item.name,
                                type: 'gauge',
                                center: item.pos,
                                radius: '30.33%',
                                startAngle: 225,
                                endAngle: -45,
                                min: item.range[0],
                                max: item.range[1],
                                axisLine: {
                                    show: true,
                                    lineStyle: {
                                        width: 14,
                                        color: [
                                            [1, 'rgba(255,255,255,.1)']
                                        ]
                                    }
                                },
                                axisTick: {
                                    show: 0,
                                },
                                splitLine: {
                                    show: 0,
                                },
                                axisLabel: {
                                    show: 0
                                },
                                pointer: {
                                    show: true,
                                    length: '105%'
                                },
                                detail: {
                                    show: true,
                                    offsetCenter: [0, '100%'],
                                    textStyle: {
                                        fontSize: 15,
                                        color: '#fff'
                                    },
                                    formatter: [
                                        '{value} ' + (item.unit || ''),
                                        '{name|' + item.name + '}'
                                    ].join('\n'),
                                    rich: {
                                        name: {
                                            fontSize: 14,
                                            lineHeight: 25,
                                            color: '#ddd'
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        color: highlight,
                                    }
                                },
                                data: [{
                                    value: item.value
                                }]
                            }
                        );
                    });

                    return result;
                })()
            };
            myChart.setOption(option);
        }

        var currentIdx = 0;
        showProvince();
        // 使用刚指定的配置项和数据显示图表。
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        var mapName = 'china'
        var data = []
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        var geoCoordMap = {
            '福州': [119.4543, 25.9222],
            '长春': [125.8154, 44.2584],
            '重庆': [107.7539, 30.1904],
            '西安': [109.1162, 34.2004],
            '成都': [103.9526, 30.7617],
            '常州': [119.4543, 31.5582],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '海口': [110.3893, 19.8516],
            '长沙': [113.019455, 28.200103],
            '上海': [121.40, 31.73],
            '内蒙古': [106.82, 39.67]
        };

        var GZData = [
            [{
                name: '长沙'
            }, {
                name: '福州',
                value: 95
            }],
            [{
                name: '长沙'
            }, {
                name: '长春',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '重庆',
                value: 70
            }],
            [{
                name: '长沙'
            }, {
                name: '西安',
                value: 60
            }],
            [{
                name: '长沙'
            }, {
                name: '成都',
                value: 50
            }],
            [{
                name: '长沙'
            }, {
                name: '常州',
                value: 40
            }],
            [{
                name: '长沙'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '长沙'
            }, {
                name: '北海',
                value: 20
            }],
            [{
                name: '长沙'
            }, {
                name: '海口',
                value: 10
            }],
            [{
                name: '长沙'
            }, {
                name: '上海',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '内蒙古',
                value: 80
            }]
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#c5f80e'];
        var series = [];
        [
            ['石家庄', GZData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: 'arrow',
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
        });

        option = {
            title: {
                text: '分类雷达图',
            },
            radar: {
                indicator: [{
                    name: '人民币玩家',
                    max: 500
                },
                    {
                        name: '影迷',
                        max: 10
                    },
                    {
                        name: '漫迷',
                        max: 20
                    },
                    {
                        name: '睡神',
                        max: 12
                    },
                    {
                        name: '土豪',
                        max: 3000
                    },
                    {
                        name: '运动达人',
                        max: 8
                    },
                    {
                        name: '电竞玩家',
                        max: 90
                    },
                    {
                        name: '书虫',
                        max: 30
                    },
                    {
                        name: '吃货',
                        max: 1500
                    },
                    {
                        name: '学霸',
                        max: 540
                    },
                    {
                        name: '外向',
                        max: 8
                    },
                ],
                center: ['50%', '50%'],
                radius: '66%'
            },

            series: [{
                type: 'radar',
                zlevel: 2,
                tooltip: {
                    show: true
                },
                lineStyle: {
                    width: 1,
                    opacity: 1
                },
                areaStyle: {
                    normal: {}
                },
                data: [{
                    value: [stuData.lifedata.recharge > 500 ? 500 : stuData.lifedata.recharge, stuData.playdata.movie > 10 ? 10 : stuData.playdata.movie, stuData.playdata.comic > 20 ? 20 : stuData.playdata.comic, stuData.healthydata.sweepHour > 12 ? 12 : stuData.healthydata.sweepHour, 0, 0, 0, 0, 0, 0, 0],
                },
                    {
                        value: [0, 0, 0, stuData.healthydata.sweepHour > 12 ? 12 : stuData.healthydata.sweepHour, stuData.lifeData > 3000 ? 3000 : stuData.lifeData, stuData.healthyData.sportsHour > 30 ? 30 : stuData.healthydata.sportsHour, stuData.playdata.game > 90 ? 90 : stuData.playdata.game, 0, 0, 0, 0],
                    },
                    {
                        value: [0, 0, 0, 0, 0, 0, stuData.playdata.game > 90 ? 90 : stuData.playdata.game, stuData.playdata.novel > 60 ? 60 : stuData.playdata.novel, stuData.lifedata.eat > 1500 ? 1500 : stuData.lifedata.eat, stuData.studyData > 540 ? 540 : stuData.studyData, 0],
                    },
                    {
                        value: [stuData.lifedata.recharge > 500 ? 500 : stuData.lifedata.recharge, 0, 0, 0, 0, 0, 0, 0, 0, stuData.studyData > 540 ? 540 : stuData.studyData, stuData.playdata.eating > 8 ? 8 : stuData.playdata.eating],
                    },

                ]
            }, {
                type: 'sunburst',
                center: ['50%', '50%'],
                nodeClick: false,
                levels: [{},
                    {
                        r0: '80%',
                        r: '90%',
                    }
                ],
                data: [{
                    name: '学习',
                    value: 4,
                    label: {
                        position: 'inside',
                        rotate: 'tangential'
                    }
                },
                    {
                        name: '生活',
                        value: 4,
                        label: {
                            position: 'inside',
                            rotate: 'tangential'
                        }
                    },
                    {
                        name: '健康',
                        value: 4,
                        label: {
                            position: 'inside',
                            rotate: 'tangential'
                        }
                    },
                    {
                        name: '娱乐',
                        value: 4,
                        label: {
                            position: 'inside',
                            rotate: 'tangential'
                        }
                    },
                ],

            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }


    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        var option = {
            title: {
                text: '雷达图'
            },
            tooltip: {},
            legend: {
                top: 20,
                itemWidth: 12,
                itemHeight: 12,
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
                textStyle: {
                    color: '#fff'
                }
            },
            radar: {
                radius: '60%',
                splitNumber: 8,
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                        opacity: .2
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#fff',
                        opacity: .2
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: 'rgba(127,95,132,.3)',
                        opacity: 1,
                        shadowBlur: 45,
                        shadowColor: 'rgba(0,0,0,.5)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 15,
                    }
                },
                indicator: [{
                    name: '英语',
                    max: 100
                }, {
                    name: '高数',
                    max: 100
                }, {
                    name: 'C语言',
                    max: 100
                }, {
                    name: 'Java',
                    max: 100
                }, {
                    name: '数据结构',
                    max: 100
                }, {
                    name: '离散数学',
                    max: 100
                }]
            },
            series: [{
                name: '学习类综合数据',
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        shadowBlur: 13,
                        shadowColor: 'rgba(0,0,0,.2)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 10,
                        opacity: 1
                    }
                },
                data: [{
                    value: studyData,
                    name: '学生',
                }]
            }],
            color: ['#ef4b4c', '#b1eadb'],
            backgroundColor: {
                type: 'radial',
                x: 0.4,
                y: 0.4,
                r: 0.35,
                colorStops: [{
                    offset: 0,
                    color: '#895355' // 0% 处的颜色
                }, {
                    offset: .4,
                    color: '#593640' // 100% 处的颜色
                }, {
                    offset: 1,
                    color: '#39273d' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        };
        myChart.setOption(option);
    }

    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",

            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['电影', '逛街', '聚餐', '电影', '动漫', '电视剧', '游戏', '阅读'],
                textStyle: {
                    color: '#fff',
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: stuData.playdata.street + stuData.playdata.movie + stuData.playdata.eating,
                            name: '外出娱乐',
                            selected: true
                        },
                        {
                            value: stuData.playdata.pcmovie + stuData.playdata.comic + stuData.playdata.tvplay + stuData.playdata.game + stuData.playdata.novel,
                            name: '宅在家里'
                        }
                    ]
                },
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    data: [
                        {value: stuData.playdata ? stuData.playdata.pcmovie : 8, name: 'PC电影'},
                        {value: stuData.playdata ? stuData.playdata.street : 1, name: '逛街'},
                        {value: stuData.playdata ? stuData.playdata.eating : 5, name: '聚餐'},
                        {value: stuData.playdata ? stuData.playdata.movie : 4, name: '电影院'},
                        {value: stuData.playdata ? stuData.playdata.comic : 10, name: '动漫'},
                        {value: stuData.playdata ? stuData.playdata.tvplay : 15, name: '电视剧'},
                        {value: stuData.playdata ? stuData.playdata.game : 60, name: '游戏'},
                        {value: stuData.playdata? stuData.playdata.novel : 1, name: '阅读'}
                    ]
                }
            ]
        };

        myChart.setOption(option);


    }

    function echart_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_5'));

        var plantCap = [{
            name: '学霸学神',
            value: '222'
        }, {
            name: '低调的有钱人',
            value: '115'
        }, {
            name: '熬夜族',
            value: '113'
        }, {
            name: '得奖小能手',
            value: '95'
        }, {
            name: '吃包最重要',
            value: '92'
        }, {
            name: '充值小能手',
            value: '87'
        }, {
            name: '英语不及格证明我爱国',
            value: '87'
        }, {
            name: '运动达人',
            value: '60'
        }];

        var datalist = [{
            offset: [56, 48],
            symbolSize: 120,
            opacity: .95,
            color: '#f467ce'
        }, {
            offset: [35, 80],
            symbolSize: 95,
            opacity: .88,
            color: '#7aabe2'
        }, {
            offset: [20, 43],
            symbolSize: 90,
            opacity: .84,
            color: '#ff7123'
        }, {
            offset: [83, 30],
            symbolSize: 90,
            opacity: .8,
            color: '#ffc400'
        }, {
            offset: [36, 20],
            symbolSize: 65,
            opacity: .75,
            color: '#5e333f'
        }, {
            offset: [64, 10],
            symbolSize: 70,
            opacity: .7,
            color: '#6b3442'
        }, {
            offset: [75, 75],
            symbolSize: 60,
            opacity: .68,
            color: '#8a3647'
        }, {
            offset: [88, 62],
            symbolSize: 50,
            opacity: .6,
            color: '#68333f'
        }];
        var datas = [];
        for (var i = 0; i < plantCap.length; i++) {
            var item = plantCap[i];
            var itemToStyle = datalist[i];
            datas.push({
                name: item.value + '\n' + item.name,
                value: itemToStyle.offset,
                symbolSize: itemToStyle.symbolSize,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 11
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: itemToStyle.color,
                        opacity: itemToStyle.opacity
                    }
                },
            })
        }
        option = {
            grid: {
                show: false,
                top: 10,
                bottom: 10
            },
            xAxis: [{
                gridIndex: 0,
                type: 'value',
                show: false,
                min: 0,
                max: 100,
                nameLocation: 'middle',
                nameGap: 5
            }],
            yAxis: [{
                gridIndex: 0,
                min: 0,
                show: false,
                max: 100,
                nameLocation: 'middle',
                nameGap: 30
            }],
            series: [{
                type: 'scatter',
                symbol: 'circle',
                symbolSize: 120,
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}',
                        color: '#fff',
                        textStyle: {
                            fontSize: '20'
                        }
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#00acea'
                    }
                },
                data: datas
            }]
        };
        myChart.setOption(option);


        //myChart.setOption(option);
    }

    //
    function echart_rank1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_rank1'));
        var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
        option = {
            backgroundColor: '#0e2147',
            grid: {
                left: '11%',
                top: '12%',
                right: '0%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '27',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '10',
                    }
                },
                data: ['王泽智', '王智泽', '智泽王', '雄劲羽', '韩顺平', '周雨', '高培翔', 'jjj', 'jjj', 'jjj']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '10',
                    }
                },
                data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
            }, {
                name: '分拨延误TOP 10',
                nameGap: '50',
                nameTextStyle: {
                    color: '#ffffff',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#ffffff',
                            fontSize: '16',
                        }
                    }
                },
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            }, {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                barWidth: 24,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
                {
                    name: '外圆',
                    type: 'scatter',
                    hoverAnimation: false,
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    yAxisIndex: 2,
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var num = myColor.length;
                                return myColor[params.dataIndex % num]
                            },
                            opacity: 1,
                        }
                    },
                    z: 2
                }
            ]
        };


        myChart.setOption(option);


        //myChart.setOption(option);
    }

    function echart_rank2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_rank2'));
        var pathSymbols = {
            reindeer: 'path://M-22.788,24.521c2.08-0.986,3.611-3.905,4.984-5.892 c-2.686,2.782-5.047,5.884-9.102,7.312c-0.992,0.005-0.25-2.016,0.34-2.362l1.852-0.41c0.564-0.218,0.785-0.842,0.902-1.347 c2.133-0.727,4.91-4.129,6.031-6.194c1.748-0.7,4.443-0.679,5.734-2.293c1.176-1.468,0.393-3.992,1.215-6.557 c0.24-0.754,0.574-1.581,1.008-2.293c-0.611,0.011-1.348-0.061-1.959-0.608c-1.391-1.245-0.785-2.086-1.297-3.313 c1.684,0.744,2.5,2.584,4.426,2.586C-8.46,3.012-8.255,2.901-8.04,2.824c6.031-1.952,15.182-0.165,19.498-3.937 c1.15-3.933-1.24-9.846-1.229-9.938c0.008-0.062-1.314-0.004-1.803-0.258c-1.119-0.771-6.531-3.75-0.17-3.33 c0.314-0.045,0.943,0.259,1.439,0.435c-0.289-1.694-0.92-0.144-3.311-1.946c0,0-1.1-0.855-1.764-1.98 c-0.836-1.09-2.01-2.825-2.992-4.031c-1.523-2.476,1.367,0.709,1.816,1.108c1.768,1.704,1.844,3.281,3.232,3.983 c0.195,0.203,1.453,0.164,0.926-0.468c-0.525-0.632-1.367-1.278-1.775-2.341c-0.293-0.703-1.311-2.326-1.566-2.711 c-0.256-0.384-0.959-1.718-1.67-2.351c-1.047-1.187-0.268-0.902,0.521-0.07c0.789,0.834,1.537,1.821,1.672,2.023 c0.135,0.203,1.584,2.521,1.725,2.387c0.102-0.259-0.035-0.428-0.158-0.852c-0.125-0.423-0.912-2.032-0.961-2.083 c-0.357-0.852-0.566-1.908-0.598-3.333c0.4-2.375,0.648-2.486,0.549-0.705c0.014,1.143,0.031,2.215,0.602,3.247 c0.807,1.496,1.764,4.064,1.836,4.474c0.561,3.176,2.904,1.749,2.281-0.126c-0.068-0.446-0.109-2.014-0.287-2.862 c-0.18-0.849-0.219-1.688-0.113-3.056c0.066-1.389,0.232-2.055,0.277-2.299c0.285-1.023,0.4-1.088,0.408,0.135 c-0.059,0.399-0.131,1.687-0.125,2.655c0.064,0.642-0.043,1.768,0.172,2.486c0.654,1.928-0.027,3.496,1,3.514 c1.805-0.424,2.428-1.218,2.428-2.346c-0.086-0.704-0.121-0.843-0.031-1.193c0.221-0.568,0.359-0.67,0.312-0.076 c-0.055,0.287,0.031,0.533,0.082,0.794c0.264,1.197,0.912,0.114,1.283-0.782c0.15-0.238,0.539-2.154,0.545-2.522 c-0.023-0.617,0.285-0.645,0.309,0.01c0.064,0.422-0.248,2.646-0.205,2.334c-0.338,1.24-1.105,3.402-3.379,4.712 c-0.389,0.12-1.186,1.286-3.328,2.178c0,0,1.729,0.321,3.156,0.246c1.102-0.19,3.707-0.027,4.654,0.269 c1.752,0.494,1.531-0.053,4.084,0.164c2.26-0.4,2.154,2.391-1.496,3.68c-2.549,1.405-3.107,1.475-2.293,2.984 c3.484,7.906,2.865,13.183,2.193,16.466c2.41,0.271,5.732-0.62,7.301,0.725c0.506,0.333,0.648,1.866-0.457,2.86 c-4.105,2.745-9.283,7.022-13.904,7.662c-0.977-0.194,0.156-2.025,0.803-2.247l1.898-0.03c0.596-0.101,0.936-0.669,1.152-1.139 c3.16-0.404,5.045-3.775,8.246-4.818c-4.035-0.718-9.588,3.981-12.162,1.051c-5.043,1.423-11.449,1.84-15.895,1.111 c-3.105,2.687-7.934,4.021-12.115,5.866c-3.271,3.511-5.188,8.086-9.967,10.414c-0.986,0.119-0.48-1.974,0.066-2.385l1.795-0.618 C-22.995,25.682-22.849,25.035-22.788,24.521z',
            plane: 'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
            rocket: 'path://M-244.396,44.399c0,0,0.47-2.931-2.427-6.512c2.819-8.221,3.21-15.709,3.21-15.709s5.795,1.383,5.795,7.325C-237.818,39.679-244.396,44.399-244.396,44.399z M-260.371,40.827c0,0-3.881-12.946-3.881-18.319c0-2.416,0.262-4.566,0.669-6.517h17.684c0.411,1.952,0.675,4.104,0.675,6.519c0,5.291-3.87,18.317-3.87,18.317H-260.371z M-254.745,18.951c-1.99,0-3.603,1.676-3.603,3.744c0,2.068,1.612,3.744,3.603,3.744c1.988,0,3.602-1.676,3.602-3.744S-252.757,18.951-254.745,18.951z M-255.521,2.228v-5.098h1.402v4.969c1.603,1.213,5.941,5.069,7.901,12.5h-17.05C-261.373,7.373-257.245,3.558-255.521,2.228zM-265.07,44.399c0,0-6.577-4.721-6.577-14.896c0-5.942,5.794-7.325,5.794-7.325s0.393,7.488,3.211,15.708C-265.539,41.469-265.07,44.399-265.07,44.399z M-252.36,45.15l-1.176-1.22L-254.789,48l-1.487-4.069l-1.019,2.116l-1.488-3.826h8.067L-252.36,45.15z',
            train: 'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
            ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
            car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z',
            run: 'path://M13.676,32.955c0.919-0.031,1.843-0.008,2.767-0.008v0.007c0.827,0,1.659,0.041,2.486-0.019 c0.417-0.028,1.118,0.325,1.14-0.545c0.014-0.637-0.156-1.279-0.873-1.367c-1.919-0.241-3.858-0.233-5.774,0.019 c-0.465,0.062-0.998,0.442-0.832,1.069C12.715,32.602,13.045,32.977,13.676,32.955z M14.108,29.013 c1.47-0.007,2.96-0.122,4.414,0.035c1.792,0.192,3.1-0.412,4.273-2.105c-3.044,0-5.882,0.014-8.719-0.01 c-0.768-0.005-1.495,0.118-1.461,1C12.642,28.731,13.329,29.014,14.108,29.013z M23.678,36.593c-0.666-0.69-1.258-1.497-2.483-1.448 c-2.341,0.095-4.689,0.051-7.035,0.012c-0.834-0.014-1.599,0.177-1.569,1.066c0.031,0.854,0.812,1.062,1.636,1.043 c1.425-0.033,2.852-0.01,4.278-0.01v-0.01c1.562,0,3.126,0.008,4.691-0.005C23.614,37.239,24.233,37.174,23.678,36.593z  M32.234,42.292h-0.002c-1.075,0.793-2.589,0.345-3.821,1.048c-0.359,0.193-0.663,0.465-0.899,0.799 c-1.068,1.623-2.052,3.301-3.117,4.928c-0.625,0.961-0.386,1.805,0.409,2.395c0.844,0.628,1.874,0.617,2.548-0.299 c1.912-2.573,3.761-5.197,5.621-7.814C33.484,42.619,33.032,42.387,32.234,42.292z M43.527,28.401 c-0.688-1.575-2.012-0.831-3.121-0.895c-1.047-0.058-2.119,1.128-3.002,0.345c-0.768-0.677-1.213-1.804-1.562-2.813 c-0.45-1.305-1.495-2.225-2.329-3.583c2.953,1.139,4.729,0.077,5.592-1.322c0.99-1.61,0.718-3.725-0.627-4.967 c-1.362-1.255-3.414-1.445-4.927-0.452c-1.933,1.268-2.206,2.893-0.899,6.11c-2.098-0.659-3.835-1.654-5.682-2.383 c-0.735-0.291-1.437-1.017-2.293-0.666c-2.263,0.927-4.522,1.885-6.723,2.95c-1.357,0.658-1.649,1.593-1.076,2.638 c0.462,0.851,1.643,1.126,2.806,0.617c0.993-0.433,1.994-0.857,2.951-1.374c1.599-0.86,3.044-0.873,4.604,0.214 c1.017,0.707,0.873,1.137,0.123,1.849c-1.701,1.615-3.516,3.12-4.933,5.006c-1.042,1.388-0.993,2.817,0.255,4.011 c1.538,1.471,3.148,2.869,4.708,4.315c0.485,0.444,0.907,0.896-0.227,1.104c-1.523,0.285-3.021,0.694-4.538,1.006 c-1.109,0.225-2.02,1.259-1.83,2.16c0.223,1.07,1.548,1.756,2.687,1.487c3.003-0.712,6.008-1.413,9.032-2.044 c1.549-0.324,2.273-1.869,1.344-3.115c-0.868-1.156-1.801-2.267-2.639-3.445c-1.964-2.762-1.95-2.771,0.528-5.189 c1.394-1.357,1.379-1.351,2.437,0.417c0.461,0.769,0.854,1.703,1.99,1.613c2.238-0.181,4.407-0.755,6.564-1.331 C43.557,30.447,43.88,29.206,43.527,28.401z',
            walk: 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z'
        };

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
                formatter: function (params) {
                    return params[0].name + ': ' + params[0].value;
                }
            },
            xAxis: {
                data: ['学习', '生活', '娱乐', '健康'],
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {
                    textStyle: {
                        color: '#e54035'
                    }
                }
            },
            yAxis: {
                splitLine: {show: false},
                axisTick: {show: false},
                axisLine: {show: false},
                axisLabel: {show: false}
            },
            color: ['#e54035'],
            series: [{
                name: 'hill',
                type: 'pictorialBar',
                barCategoryGap: '-130%',
                // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                itemStyle: {
                    normal: {
                        opacity: 0.5
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: [123, 60, 25, 18],
                z: 10
            }, {
                name: 'glyph',
                type: 'pictorialBar',
                barGap: '-100%',
                symbolPosition: 'end',
                symbolSize: 50,
                symbolOffset: [0, '-120%'],
                data: [{
                    value: 123,
                    symbol: pathSymbols.rocket,
                    symbolSize: [60, 60]
                }, {
                    value: 60,
                    symbol: pathSymbols.train,
                    symbolSize: [50, 60]
                }, {
                    value: 25,
                    symbol: pathSymbols.ship,
                    symbolSize: [65, 35]
                }, {
                    value: 18,
                    symbol: pathSymbols.run,
                    symbolSize: [50, 30]
                },]
            }]
        };
        myChart.setOption(option);


        //myChart.setOption(option);
    }

    //点击跳转
    /*    $('#chart_map').click(function(){
            window.location.href = './page/index.html';
        });
        $('.t_btn2').click(function(){
            window.location.href = "./page/index.html?id=2";
        });
        $('.t_btn3').click(function(){
            window.location.href = "./page/index.html?id=3";
        });
        $('.t_btn4').click(function(){
            window.location.href = "./page/index.html?id=4";
        });
        $('.t_btn5').click(function(){
            window.location.href = "./page/index.html?id=5";
        });
        $('.t_btn6').click(function(){
            window.location.href = "./page/index.html?id=6";
        });
        $('.t_btn7').click(function(){
            window.location.href = "./page/index.html?id=7";
        });
        $('.t_btn8').click(function(){
            window.location.href = "./page/index.html?id=8";
        });
        $('.t_btn9').click(function(){
            window.location.href = "./page/index.html?id=9";
        });*/

});
