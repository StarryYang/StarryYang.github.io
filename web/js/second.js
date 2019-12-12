jQuery(document).ready(function ($) {
  var V = new Vue({
    el: "#app",
    data: function () {
      return {
        week: '',
        day: '',
        time: '',
        timer: '',
        weather: '',
        air: '',
        arr: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        wlist: [
          '#49008D',
          '#0C43C4',
          '#0294FB',
          '#5EB7FB',
          '#AAF3F7',
          '#FFFEBD',
          '#FFDB63',
          '#FFAA01',
          '#FE6400',
          '#E40001',
          '#A00010',
          '#640000'
        ],
        lists: [
          { status: 1, dian: 100 },
          { status: -1, dian: 15 },
          { status: -1, dian: 60 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: -1, dian: 5 },
          { status: -1, dian: 6 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: -1, dian: 5 },
          { status: -1, dian: 6 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: -1, dian: 5 },
          { status: -1, dian: 6 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: -1, dian: 5 },
          { status: -1, dian: 6 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: -1, dian: 5 },
          { status: -1, dian: 6 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: -1, dian: 5 },
          { status: -1, dian: 6 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: -1, dian: 5 },
          { status: -1, dian: 6 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 },
          { status: 1, dian: 5 }
        ],
        tags: [],
        tagOption: {
          id: "tagcloudSvg",
          width: 200,
          height: 200,
          RADIUS: 60,
          CX: 100,
          CY: 100
        },
        wordClouddata: [
          {
            name: "青玉龙首饰",
            value: 12
          },
          {
            name: "青玉谥册",
            value: 16
          },
          {
            name: "青铜器",
            value: 11
          },
          {
            name: "铁器",
            value: 16
          },
          {
            name: "玉器",
            value: 31
          },
          {
            name: "兵器",
            value: 24
          },
          {
            name: "石器",
            value: 18
          },
          {
            name: "青铜器",
            value: 11
          },
          {
            name: "铁器",
            value: 16
          },
          {
            name: "玉器",
            value: 31
          },
          {
            name: "兵器",
            value: 24
          },
          {
            name: "精神文化",
            value: 10
          },
        ],
        heatmap: [
          { map: null },
          { map: null },
          { map: null },
          { map: null }
        ],
        map1: '',
        map2: '',
        map3: '',
        map4: '',
        windex: 6,
        area: [{ name: "鲁", title: '山东省', value: 6500, pre: 1 }, { name: "晋", title: '山西省', value: 6036, pre: 0.8 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }]
      }
    },
    mounted() {
      this.getDay();
      this.getWearth();
      this.getAir();
      this.getRoad();
      this.getSex();
      this.count();
      var vm = this;
      vm.wordClouddata.forEach(function (item, i) {
        let tag = {};
        var arr = ['#5b52d6', '#3988d3', '#5659d5', '#5955d5'];
     
        let len = vm.wordClouddata.length;
        let k = -1 + (2 * (i + 1) - 1) / len;
        let a = Math.acos(k);
        let b = a * Math.sqrt(len * Math.PI);
        tag.text = item.name;
        tag.x = vm.tagOption.CX + vm.tagOption.RADIUS * Math.sin(a) * Math.cos(b);
        tag.y = vm.tagOption.CY + vm.tagOption.RADIUS * Math.sin(a) * Math.sin(b);
        tag.z = vm.tagOption.RADIUS * Math.cos(a);
        tag.href = "#";
        tag.color = arr[i % 4];
        vm.tags.push(tag);
      });
      vm.TabBall_svg(vm.tagOption);
      // 热力图
      vm.heatmap.forEach(function (a, i) {
        var heatmapDom = document.querySelector('#hotMap-' + (i + 1));
        var scale = heatmapDom.clientWidth / 321;
        a.map = hmap.create({
          container: heatmapDom,
          radius: 35 * scale,
          blur: .75,
          maxOpacity: 1,
          gradient: {
            0.15: "rgb(0,0,255)",
            0.5: "rgb(0,255,0)",
            0.85: "rgb(255,255,0)",
            1.0: "rgb(255,0,0)"
          }
        });
      })
      this.initSwiper();
      this.getRentData();
      this.getHotData();
    
    },
    methods: {
      initSwiper() {
        var swiper = new Swiper('#swiper', {
          autoplay: 3000,
          // loop: true,
          autoplayDisableOnInteraction: false
        })
      },
      getHotData() {
        var data = {
          "status": 1, "msg": "",
          "data": [
            [
              { "x": 851, "y": 197, "value": 0 },
              { "x": 730, "y": 178, "value": 0 },
              { "x": 677, "y": 215, "value": 4 },
              { "x": 702, "y": 178, "value": 0 },
              { "x": 742, "y": 178, "value": 0 },
              { "x": 807, "y": 144, "value": 10 },
              { "x": 668, "y": 201, "value": 2 },
              { "x": 720, "y": 170, "value": 0 },
              { "x": 749, "y": 145, "value": 8 },
              { "x": 797, "y": 118, "value": 0 },
              { "x": 820, "y": 130, "value": 0 },
              { "x": 799, "y": 144, "value": 0 }],
            [{ "x": 996, "y": 152, "value": 0 },
            { "x": 842, "y": 169, "value": 0 },
            { "x": 761, "y": 153, "value": 4 },
            { "x": 407, "y": 177, "value": 10 },
            { "x": 625, "y": 143, "value": 15 },
            { "x": 533, "y": 191, "value": 5 },
            { "x": 473, "y": 95, "value": 0 },
            { "x": 551, "y": 105, "value": 12 },
            { "x": 480, "y": 128, "value": 0 },
            { "x": 704, "y": 138, "value": 0 },
            { "x": 650, "y": 155, "value": 5 },
            { "x": 705, "y": 160, "value": 1 },
            { "x": 755, "y": 216, "value": 3 },
            { "x": 714, "y": 159, "value": 0 },
            { "x": 928, "y": 181, "value": 7 },
            { "x": 975, "y": 275, "value": 0 },
            { "x": 1016, "y": 176, "value": 0 },
            { "x": 1050, "y": 133, "value": 0 },
            { "x": 1017, "y": 152, "value": 0 },
            { "x": 980, "y": 155, "value": 7 },
            ],
            [
              { "x": 856, "y": 74, "value": 4 },
              { "x": 547, "y": 145, "value": 11 },
              { "x": 300, "y": 119, "value": 3 },
              { "x": 757, "y": 137, "value": 0 },
              { "x": 184, "y": 187, "value": 1 },
              { "x": 652, "y": 120, "value": 17 },
              { "x": 140, "y": 189, "value": 2 },
              { "x": 780, "y": 105, "value": 7 },
              { "x": 1059, "y": 145, "value": 4 },
              { "x": 253, "y": 231, "value": 2 },
              { "x": 887, "y": 83, "value": 0 },
              { "x": 311, "y": 123, "value": 2 },
              { "x": 813, "y": 85, "value": 3 },
              { "x": 543, "y": 185, "value": 0 },
              { "x": 1294, "y": 109, "value": 1 },
              { "x": 830, "y": 94, "value": 6 },
              { "x": 722, "y": 156, "value": 0 },
              { "x": 908, "y": 149, "value": 15 },
              { "x": 923, "y": 175, "value": 3 },
              { "x": 712, "y": 153, "value": 3 },
              { "x": 766, "y": 134, "value": 3 },
              { "x": 817, "y": 169, "value": 5 },
              { "x": 554, "y": 159, "value": 6 },
              { "x": 559, "y": 154, "value": 9 },
              { "x": 509, "y": 104, "value": 2 },
              { "x": 891, "y": 171, "value": 2 },
              { "x": 112, "y": 149, "value": 0 },
              { "x": 1199, "y": 124, "value": 0 },
              { "x": 1314, "y": 187, "value": 2 },
              { "x": 230, "y": 188, "value": 3 },
              { "x": 342, "y": 103, "value": 5 },
              { "x": 599, "y": 137, "value": 12 },
              { "x": 687, "y": 63, "value": 0 },
              { "x": 189, "y": 92, "value": 2 },
              { "x": 149, "y": 92, "value": 9 },
              { "x": 347, "y": 98, "value": 9 },
              { "x": 632, "y": 94, "value": 0 }
            ],
            [
              { "x": 559, "y": 154, "value": 9 },
              { "x": 509, "y": 104, "value": 2 },
              { "x": 891, "y": 171, "value": 2 },
              { "x": 112, "y": 149, "value": 0 },
              { "x": 1199, "y": 124, "value": 0 },
              { "x": 1314, "y": 187, "value": 2 },
              { "x": 230, "y": 188, "value": 3 },
              { "x": 342, "y": 103, "value": 5 },
            ]
          ]
        };
        this.rendHotMap(data.data);
      },
      rendHotMap(data) {
        var vm = this;
        var scale = document.querySelector("#hotMap-1").clientWidth / 1400;
        // data = [
        // 	[
        // 		{
        // 			x: 750,
        // 			y: 150,
        // 			value: 150
        // 		},
        // 		{
        // 			x: 850,
        // 			y: 270,
        // 			value: 125
        // 		},
        // 		{
        // 			x: 500,
        // 			y: 550,
        // 			value: 175
        // 		}
        // 	],
        // 	[
        // 		{
        // 			x: 127,
        // 			y: 140,
        // 			value: 80
        // 		}
        // 	],
        // 	[
        // 		{
        // 			x: 500,
        // 			y: 550,
        // 			value: 36
        // 		}
        // 	]
        // ];
        data.forEach(function (a, i) {
          var tem = a;
          if (tem.length > 1) {
            tem.sort(function (a, b) {
              return b.value - a.value;
            });
          }
          tem.forEach(function (b) {
            b.x = parseInt(b.x * scale);
            b.y = parseInt(b.y * 2 * scale);
          });
          // 取最大值作为参考阈值
          var max = Math.ceil(tem[0].value * 1.3) > 10 ? Math.ceil(tem[0].value * 1.3) : 10;
          vm.heatmap[i].map.setData({
            min: 1,
            max: max,
            data: tem
          });
        });
      },
      getRoad() {
        var myEchart = echarts.init(document.getElementById("echart-0"));
        var color1 = new echarts.graphic.LinearGradient(
          1,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: "#3292D2"
            },
            {
              offset: 0.95,
              color: "#6A3AD7"
            }
          ],
          false
        );
        var colors = [color1, "#FFFFFF", "#818288", "#666666", "#555555"];
        var itemStylePlaceHolder = {
          normal: {
            color: "rgba(0,0,0,0)",
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0
          }
        };
        var data = [
          {
            name: "快捷路线",
            value: 48000
          },
          {
            name: "科普路线",
            value: 38000
          },
          {
            name: "亲子路线",
            value: 35033
          },
          {
            name: "精品路线",
            value: 26126
          },
          {
            name: "自选路线",
            value: 20155
          }
        ];
        var total = 0;
        data.forEach(function (a, i) {
          total += +a.value;
        });
        var dataArr = [];
        data.forEach(function (a, i) {
          dataArr.push(
            {
              name: a.name,
              value: +a.value,
              label: {
                formatter: function (val) {
                  if (val.dataIndex == 0) {
                    return "{a1|" +
                      a.name +
                      "}" +
                      " \n" +
                      "{b1|" +
                      Math.round((a.value / total) * 10000) / 100 +
                      "%}"
                  }
                  return (
                    "{a|" +
                    a.name +
                    "}" +
                    " \n" +
                    "{b|" +
                    Math.round((a.value / total) * 10000) / 100 +
                    "%}"
                  );
                },
                rich: {
                  a: {
                    color: '#888888',
                    fontSize: 14,
                    padding: [2, 4]
                  },
                  a1: {
                    color: '#888888',
                    fontSize: 14,
                    padding: [2, 4]
                  },
                  b1: {
                    color: '#888888',
                    fontSize: 12,
                    fontWeight: 700,
                    textAlign: 'center',
                    padding: [2, 8]
                  },
                  b: {
                    fontSize: 12,
                    fontWeight: 700,
                    textAlign: 'center',
                    color: '#888888',
                    padding: [2, 8]
                  }
                }
              },
              itemStyle: {
                borderColor: colors[i]
              }
            },
            {
              name: "空格",
              value: total / 16,
              label: { show: false },
              itemStyle: itemStylePlaceHolder,
              tooltip: {
                backgroundColor: "rgba(0,0,0,0)",
                formatter: function (val) {
                  return "";
                }
              }
            }
          );
        });
     
        var option = {
          tooltip: {},
          color: [color1, "#FFFFFF", "#818288", "#666666", "#555555"],
        
          series: [
            {
              type: "pie",
              clockwise: false,
              hoverAnimation: false,
              center: ["50%", "50%"],
              radius: ["50%", "52%"],
              label: {
                color: "#fff"
              },
              startAngle: 0,
              labelLine: {
                show: false,
                length: 10,
                length2: 12.5
              },
              itemStyle: {
                borderWidth: 10
              },
              data: dataArr
            }
          ]
        };
        myEchart.clear();
        myEchart.setOption(option);
      },
      randomData(data) {
        var d = data.stay_num;
        var r = Math.floor(Math.random() * 6 + 1) / 10;
        this.rData = [d * r, d - d * r];
      },
      //舆情监控-词云图表更新数据
      updateWordcloud: function (data) {
        let vm = this;
        vm.chartWordcloud.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      },
      //取min-max范围内随机数
      getRandomIntInclusive: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
      },
      randomColor: function () {
        var arr = ['#5b52d6', '#3988d3', '#5659d5', '#5955d5'];
        var i = Math.floor(Math.random() * (3 - 0)) + 0;
        console.log(i);
        return (
          arr[i]
        );
      },
      //舆情监控-标签云效果-svg版
      TabBall_svg: function (option) {
        let vm = this;
        class TabBall {
          constructor() {
            let This = this;

            This.id = option.id;
            This.width = option.width;
            This.height = option.height;
            This.RADIUS = option.RADIUS;
            This.CX = option.CX;
            This.CY = option.CY;

            This.speedX = Math.PI / 360;
            This.speedY = Math.PI / 360;

            This.init();
          }
          init() {
            let This = this;
            setInterval(() => {
              This.rotateX(This.speedX);
              This.rotateY(This.speedY);
            }, 20);
            let svgDom = document.querySelector("#" + This.id);
            svgDom.addEventListener("mouseenter", function (event) { });
            svgDom.addEventListener("mousemove", function (event) {
              This.listener(event);
            });
            svgDom.addEventListener("mouseout", function (event) {
              This.speedX = Math.PI / 360;
              This.speedY = Math.PI / 360;
            });
          }
          rotateX(speedX) {
            let This = this;
            let cos = Math.cos(speedX);
            let sin = Math.sin(speedX);
            for (let tag of vm.tags) {
              let y1 = (tag.y - This.CX) * cos - tag.z * sin + This.CX;
              let z1 = tag.z * cos + (tag.y - This.CX) * sin;
              tag.y = y1;
              tag.z = z1;
            }
          }
          rotateY(speedY) {
            let This = this;
            let cos = Math.cos(speedY);
            let sin = Math.sin(speedY);
            for (let tag of vm.tags) {
              let x1 = (tag.x - This.CY) * cos - tag.z * sin + This.CY;
              let z1 = tag.z * cos + (tag.x - This.CY) * sin;
              tag.x = x1;
              tag.z = z1;
            }
          }
          listener(event) {
            //响应鼠标移动
            let This = this;
            let x = event.clientX - This.CY;
            let y = event.clientY - This.CX;
            This.speedX =
              x * 0.0001 > 0
                ? Math.min(This.RADIUS * 0.00002, x * 0.0001)
                : Math.max(-vm.RADIUS * 0.00002, x * 0.0001);
            This.speedY =
              y * 0.0001 > 0
                ? Math.min(This.RADIUS * 0.00002, y * 0.0001)
                : Math.max(-vm.RADIUS * 0.00002, y * 0.0001);
          }
        }
        new TabBall();
      },
      // 获取性别比
      getSex() {
        var myChart = new echarts.init(document.getElementById('echart-1'));
        var id = "echart-4";
        var name = [
          "济宁千秋展",
          "中国运河之都-济宁",
          "济宁精品文物展",
        ];

        var data = [
          {
            value: 6500,
            itemStyle: {
              color: "#555555"
            }
          },
          {
            value: 6800,
            itemStyle: {
              color: "#818288"
            }
          },
          {
            value: 7536,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                1,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#3292D2"
                  },
                  {
                    offset: 0.95,
                    color: "#6A3AD7"
                  }
                ],
                false
              )
            }
				
          }
        ];
        var color = ["#555555", "#666666", "#999999"];
        var option = {
          grid: {
            left: "1%",
            top: "10%",
            right: "20%",
            bottom: "1%",
            containLabel: true
          },
          xAxis: [
            {
              show: false
            }
          ],
          yAxis: [
            {
              axisTick: "none",
              axisLine: "none",
              axisLabel: {
                textStyle: {
                  color: '#999999',
                  fontSize: "12"
                }
              },
              data: name,
            },
            {
              axisLine: {
                lineStyle: {
                  color: "rgba(0,0,0,0)"
                }
              },
              data: [683, 683, 683, 683, 683]
            }
          ],
          series: [
            {
              name: "条",
              type: "bar",
              yAxisIndex: 0,
              data: data,
              barWidth: 6,
              barCateGoryGap: 120,
              barGap: -1,
              itemStyle: {
                normal: {
                  barBorderRadius: 4,
                  color: new echarts.graphic.LinearGradient(-1, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(50, 146, 210, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(106, 58, 215, 1)'
                  }])

                }
              },
              label: {
                normal: {
                  show: false,
                  color: '#999999',
                  position: "right"
                }
              },
              zlevel: 2
            },
            {
              name: "框",
              type: "bar",
              yAxisIndex: 0,
              barCateGoryGap: 120,
              barGap: -1,
              data: [100, 100, 100],
              barWidth: 6,
              barCateGoryGap: 120,
              itemStyle: {
                normal: {
                  color: "none",
                  borderColor: "none",
                  borderWidth: 0,
                  barBorderRadius: 4
                }
              },
              label: {
                normal: {
                  show: true,
                  position: "right",
                  padding: [20, 0, 20, 135],
                  color: "#999",
                  fontSize: 14,
                  fontWeight: 'bold',
                  formatter: function (params) {
                    return data[params.dataIndex].value
                  }
                }
              }
            }
          ]
        };
      
        if (option && typeof option === "object") {
          myChart.clear();
          myChart.setOption(option, true);
        }
      },
      getRentData() {
        var data = { "status": 1, "msg": "", "data": { "sum_order_num": 75420, "renting_order_num": 0, "waiting_balance_order_num": 0, "need_repair_dlj_num": 7, "sum_input": 1427850, "today_input": 0, "cabinet_list": [{ "cabinet_num": "12000301", "is_online": 1, "can_rent_dlj_num": 38, "can_return_dlj_num": 16, "need_repair_dlj_num": 0, "order_count": 0 }, { "cabinet_num": "12000302", "is_online": 1, "can_rent_dlj_num": 58, "can_return_dlj_num": 1, "need_repair_dlj_num": 0, "order_count": 0 }, { "cabinet_num": "12000303", "is_online": 1, "can_rent_dlj_num": 41, "can_return_dlj_num": 18, "need_repair_dlj_num": 0, "order_count": 0 }, { "cabinet_num": "12000304", "is_online": 1, "can_rent_dlj_num": 60, "can_return_dlj_num": 0, "need_repair_dlj_num": 0, "order_count": 0 }, { "cabinet_num": "12000305", "is_online": 1, "can_rent_dlj_num": 58, "can_return_dlj_num": 0, "need_repair_dlj_num": 0, "order_count": 0 }, { "cabinet_num": "12000306", "is_online": 1, "can_rent_dlj_num": 60, "can_return_dlj_num": 0, "need_repair_dlj_num": 0, "order_count": 0 }, { "cabinet_num": "12000307", "is_online": 1, "can_rent_dlj_num": 57, "can_return_dlj_num": 0, "need_repair_dlj_num": 2, "order_count": 0 }, { "cabinet_num": "12000308", "is_online": 1, "can_rent_dlj_num": 60, "can_return_dlj_num": 0, "need_repair_dlj_num": 0, "order_count": 0 }, { "cabinet_num": "12000309", "is_online": 1, "can_rent_dlj_num": 59, "can_return_dlj_num": 0, "need_repair_dlj_num": 0, "order_count": 0 }], "can_borrow_dlj_num": 491, "time_order_count": { "time_list": "[\"09:00\"]", "all_order_counts": "[0]", "renting_order_counts": "[0]", "goods_orders": "[0]", "new_renting_order_counts": "[0]" } } };
        var datas = data.data.time_order_count;
        this.getRent(datas);
      },
      getRent(data) {
        var vm = this;
        var option = {
          color: ['#E60012', '#22AC38', '#F8B551', '#0068B7'],
          grid: {
            top: '10%',
            bottom: '25%',
            left: '5%',
            right: '5%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            show: false,
            icon: 'circle',
            top: '15%',
            left: '25%',
            align: 'right',
            itemWidth: 15,
            itemHeight: 15,
            itemGap: 10,
            textStyle: {
              fontSize: 12,
              color: '#50D4FF'
            },
            data: []
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              color: '#fff',
              fontSize: 12,
              fontWeight: 500
            },
            axisLine: { show: false },
            axisTick: { show: false },
            data: []
          },
          yAxis: {
            type: 'value',
            splitNumber: 3,
            axisLabel: {
              color: '#fff',
              fontSize: 12,
              fontWeight: 500
            },
            splitLine: {
              lineStyle: {
                color: '#3D3D5A'
              }
            },
            axisLine: { show: false },
            axisTick: { show: false }
          },
          series: []
        };
        var vm = this;
        data = {
          times: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
          //times: JSON.parse(data.time_list),
          lists: [
            {
              name: "累计租赁订单",
              // nums: JSON.parse(data.all_order_counts)
              nums: [110, 120, 130, 120, 115, 108, 100, 56, 78]
            },
            {
              name: "增长订单",
              // nums: JSON.parse(data.renting_order_counts)
              nums: [90, 150, 140, 130, 120, 110, 56, 72, 120]
            },
            {
              name: "租赁中订单",
              // nums: JSON.parse(data.new_renting_order_counts)
              nums: [165, 150, 140, 130, 110, 90, 75, 80, 60]
            },
            {
              name: "累计耳机订单",
              // nums: JSON.parse(data.goods_orders)
              nums: [60, 80, 72, 56, 79, 80, 90, 110, 45]
            }
          ]
        }
        var legendArr = [], seriesArr = [];
        data.lists.forEach(function (a, i) {
          legendArr.push(a.name);
          var obj = {
            type: 'line',
            name: a.name,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 1
            },
            markPoint: {
              symbol: 'none',
              symbolSize: 0,
              data: [{
                coord: [a.nums.length - 1, a.nums.slice(a.nums.length - 1)]
              }]
            },
            data: a.nums
          }
          seriesArr.push(obj)
        });
        seriesArr.push({
          name: "占位背景",
          type: "bar",
          itemStyle: {
            normal: {
              show: true,
              color: "#161629",
              opacity: 0.9
            }
          },
          silent: true,
          barWidth: "50%",
          barGap: 0,
          data: [200, 200, 200, 200, 200, 200, 200, 200, 200],
          animation: false
        });
        var option = {
          color: ['#E60012', '#22AC38', '#F8B551', '#0068B7'],
          grid: {
            top: '20%',
            bottom: '25%',
            left: '5%',
            right: '5%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            show: true,
            icon: 'circle',
            top: '0%',
            right: '4%',
            align: 'left',
            itemWidth: 5,
            itemHeight: 5,
            itemGap: 5,
            textStyle: {
              fontSize: 12,
              color: '#50D4FF',
              fontWeight: 500
            },
            data: legendArr
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              color: '#fff',
              fontWeight: 500,
              fontSize: 12
            },
            axisLine: { show: false },
            axisTick: { show: false },
            data: data.times
          },
          yAxis: {
            type: 'value',
            splitNumber: 3,
            axisLabel: {
              color: '#fff',
              fontSize: 12,
              fontWeight: 500
            },
            splitLine: {
              lineStyle: {
                color: '#3D3D5A'
              }
            },
            axisLine: { show: false },
            axisTick: { show: false }
          },
          series: seriesArr,
        };
        var dom = document.getElementById("echart-3");
        var myChart = echarts.init(dom);
        if (option && typeof option === "object") {
          myChart.clear();
          myChart.setOption(option, true);
        }
      },
      // 获取添加天气
      getWearth() {
        var that = this;
        $.ajax({
          url: "https://free-api.heweather.net/s6/weather/now?location=jining&key=e6ec1c07d72445cfa97a5d6f028affac",
          type: "GET",
          dataType: "JSON",
          success: function (res) {
            that.weather = res.HeWeather6[0].now;
            var tmp = that.weather.tmp;
            if (tmp <= -25) {
              that.windex = 0;
            } else if (tmp > -25 && tmp <= -15) {
              thatwindex = 1;
            } else if (tmp > -15 && tmp <= -10) {
              that.windex = 2;
            } else if (tmp > -10 && tmp <= -5) {
              that.windex = 3;
            } else if (tmp > -5 && tmp <= 0) {
              that.windex = 4;
            } else if (tmp > 6 && tmp <= 15) {
              that.windex = 5;
            } else if (tmp > 15 && tmp <= 20) {
              that.windex = 6;
            } else if (tmp > 20 && tmp <= 25) {
              that.windex = 7;
            } else if (tmp > 25 && tmp <= 30) {
              that.windex = 8;
            } else if (tmp > 30 && tmp <= 40) {
              that.windex = 9;
            } else if (tmp > 40) {
              that.windex = 10;
            }
          }
        })
      },
      count() {
        $('.nums').countUp({
          time: 2000
        })
      },
      //获取空气质量
      getAir() {
        var that = this;
        $.ajax({
          url: "https://free-api.heweather.net/s6/air/now?location=jining&key=e6ec1c07d72445cfa97a5d6f028affac",
          type: "GET",
          dataType: "JSON",
          success: function (res) {
            that.air = res.HeWeather6[0].air_now_city;
          }
        })
      },
      //获取时间更新方法
      getDay() {
        this.timer = setInterval(() => {
          var day = new Date();
          this.week = this.arr[day.getDay()];
          var years = day.getFullYear();
          var month = day.getMonth() + 1;
          month = month < 10 ? '0' + month : month;
          var date = day.getDate();
          date = date < 10 ? '0' + date : date;
          var hours = day.getHours();
          hours = hours < 10 ? '0' + hours : hours;
          var min = day.getMinutes();
          min = min < 10 ? '0' + min : min;
          var second = day.getSeconds()
          second = second < 10 ? '0' + second : second;
          this.time = hours + ":" + min + ":" + second;
          this.day = years + '.' + month + '.' + date;
        }, 1000)
      
      }
    }
  })
})