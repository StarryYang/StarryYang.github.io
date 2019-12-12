jQuery(document).ready(function ($) {
  var vm = new Vue({
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
        windex: 6,
        area: [{ name: "鲁", title: '山东省', value: 6500, pre: 1 }, { name: "晋", title: '山西省', value: 6036, pre: 0.8 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }, { name: "陕", title: '陕西省', value: 5534, pre: 0.65 }]
      }
    },
    mounted() {
      this.getWearth();
      this.getW();
      this.getMap();
      this.getDay();
      this.getAir();
      this.setSex();
      this.getSex();
      this.setCard();
      this.getP();
      this.count();
   
      this.getBar();
      this.initSwiper();
    },
    methods: {
      // initSwiper
      initSwiper() {
        var swiper = new Swiper('#banner', {
          autoplay: 3000,
          // loop: true,
          autoplayDisableOnInteraction: false
        })
      },
      // 获取性别比
      getSex() {
        var myEchart = new echarts.init(document.getElementById('echart-1'));
        var option = {
          color: ['#DB5D09', '#7F55C4'],
          grid: {
            top: 30,
            bottom: 40,
            left: 50,
            right: 20,
          },
          tooltip: {},
          legend: {
            icon: 'circle',
            textStyle: {
              color: '#ffffff',
              fontSize: 12,
            },
            itemWidth: 8,
            itemHeight: 8,
            right: 30,
            top: 0,
            selectedMode: false,
            data: ['男性', '女性'],
            // orient: 'vertical',
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            interval: 0,
            axisLine: {
              show: false,
              interval: 0,
            },
            axisTick: {
              show: false,
              interval: 0,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(101,124,168,0.3)',
              },
              interval: 0,
            },
            axisLabel: {
              interval: 0,
              show: true,
              fontSize: 10,
              color: 'rgba(255,255,255,0.6)',
            },
            data: ['0-17', '18-24', '25-35', '36-64', '65及以上'],
          },
          yAxis: {
            type: 'value',
            splitNumber: 3,
            name: '',
            nameGap: 10,
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 10
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(101,124,168,0.3)',
              },
              interval: 0,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            // splitLine: {
            //   show: false,
            // },
            axisLabel: {
              showMinLabel: false,
              formatter: '{value}%',
              fontSize: 10,
              padding: [0, 10, 0, 0],
              color: 'rgba(255,255,255,0.6)',
            },
          },
          series: [{
            type: 'line',
            name: '女性',
            symbol: 'circle',
            symbolSize: 2,
            markPoint: {},
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#DB5D09', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#FF9999', // 100% 处的颜色
                },
                ]
              },
              width: 2,
              type: 'solid',
            },
            data: [32, 22, 25, 27, 34]
          },
          {
            type: 'line',
            name: '男性',
            symbol: 'circle',
            symbolSize: 2,
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#7349D0', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#79C1FF', // 100% 处的颜色
                },
                ]
              },
              width: 2,
              type: 'solid',
            },
            data: [12, 8, 14, 2, 60],
          },
          ]
        };
        myEchart.clear();
        myEchart.setOption(option)
      },
      //进馆人数
      getP() {
        var data1 = [1200, 2000, 1400, 3000, 600, 800, 1800, 1000, 1500];
        var data2 = [332, 200, 1400, 700, 834, 1200, 1300, 800, 900];
        var myEchart = new echarts.init(document.getElementById('echart-4'));
        var option = {
          title: {
            text: `今日进出馆累计曲线`,
            textStyle: {
              color: "rgba(204, 204, 204, 1)",
              fontSize: 12,
            },

            top: 2,
            left: 0
          },
          color: ['rgba(95, 181, 227, 1)', 'rgba(241, 170, 58, 1)'],
          grid: {
            top: 50,
            bottom: 20,
            left: 50,
            right: 20,
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            boundaryGap: false,
            interval: 0,
            axisLine: {
              show: false,
              interval: 0,
            },
            axisTick: {
              show: false,
              interval: 0,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'RGBA(11, 33, 40, 1)',
              },
              interval: 0,
            },
            axisLabel: {
              interval: 1,
              show: true,
              fontSize: 10,
              color: function (value, index) {
                var date = new Date().getHours();
                return value.indexOf(date) > -1 ? '#fff' : 'rgba(255,255,255,0.6)';
              },
            },
            data: ['9:00', '10:00', '11:00', '12:00', '13:00', "14:00", "15:00", "16:00"],
          },
          yAxis: {
            type: 'value',
            splitNumber: 4,
            name: '',
            nameGap: 10,
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 10
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(101,124,168,0.3)',
              },
              interval: 0,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            // splitLine: {
            //   show: false,
            // },
            axisLabel: {
              showMinLabel: false,
              formatter: '{value}',
              fontSize: 10,
              padding: [0, 10, 0, 0],
              color: 'rgba(255,255,255,0.6)',
            },
          },
          series: [
            {
              type: 'line',
              name: '进馆人数',
              symbol: 'circle',
              symbolSize: 2,
              smooth: true,
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(107, 187, 241, 1)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(98, 88, 173, 0.9)', // 100% 处的颜色
                  },
                  ]
                },
                width: 2,
                type: 'solid',
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(107, 187, 241, 1)"
                    },
                    {
                      offset: 0.95,
                      color: "rgba(98, 88, 173, 0.45)"
                    }
                  ],
                  false
                )
              },
              label: {
                show: true,
                position: 'top',
                formatter: function (params) {
                  var date = new Date().getHours();
                  var str = '';
                  if (params.name.indexOf(date) > -1) {
                    if (data1[params.dataIndex] == data2[params.dataIndex]) {
                      str = "进、出：" + params.value
                    } else {
                      str = '进：' + params.value
                    }
                  }
                  return str
                },
                fontSize: 10,
                color: 'rgba(153, 153, 153, 1)',
              },
              data: data1,
            }, {
              type: 'line',
              name: '出馆人数',
              symbol: 'circle',
              symbolSize: 2,
              markPoint: {},
              smooth: true,
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(241, 170, 58, 0.45)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(247, 86, 62, 0.8)', // 100% 处的颜色
                  },
                  ]
                },
                width: 2,
                type: 'solid',
              },
              label: {
                show: true,
                position: 'top',
                formatter: function (params) {
                  var date = new Date().getHours();
                  var str = '';
                  if (params.name.indexOf(date) > -1) {
                    if (data1[params.dataIndex] != data2[params.dataIndex]) {
                      str = "出：" + params.value
                    }
                  }
                  return str
                },
                fontSize: 10,
                color: 'rgba(153, 153, 153, 1)',
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(241, 170, 58, 0.35)"
                    },
                    {
                      offset: 0.95,
                      color: "rgba(247, 86, 62, 0.45)"
                    }
                  ],
                  false
                )
              },
              data: data2
            }
          ]
        };
        myEchart.clear();
        myEchart.setOption(option)
      },
      // 获取到馆累计
      getBar() {
        var myEchart = echarts.init(document.getElementById("echart-6"));
        var options = {
          title: {
            text: `历年客流量统计`,
            textStyle: {
              color: "rgba(204, 204, 204, 1)",
              fontSize: 12,
            },

            top: 2,
            left: 0
          },
          color: ['#DB5D09', '#7F55C4'],
          grid: {
            top: 50,
            bottom: 20,
            left: 50,
            right: 20,
          },
          xAxis: {
            data: [
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
            ],
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0177d4"
              }
            },
            interval: 0,
            axisLabel: {
              color: "#808080",
              fontSize: 10,
              interval: 0,
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            name: "",
            nameTextStyle: {
              color: "#808080",
              fontSize: 10
            },
            splitNumber: 4,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#0177d4"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              showMinLabel: false,
              color: "#808080",
              fontSize: 10
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#0177d4"
              }
            }
          },
          series: [
            {
              type: "bar",
              barWidth: 8,
              itemStyle: {
                normal: {
                  barBorderRadius: 6,
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "#38C8FF"
                      },
                      {
                        offset: 0.75,
                        color: "#6258AD"
                      }
                    ],
                    false
                  )
                }
              },
              data: [50000, 60000, 40000, 20000, 47000, 50000]
            }
          ]
        };
        myEchart.clear();
        myEchart.setOption(options);
      },
      //七日来馆人数
      getW() {
        var myEchart = new echarts.init(document.getElementById('echart-5'));
        var option = {
          title: {
            text: `近7日客流变化趋势`,
            textStyle: {
              color: "rgba(204, 204, 204, 1)",
              fontSize: 12,
            },

            top: 2,
            left: 0
          },
          color: ['#DB5D09', '#7F55C4'],
          grid: {
            top: 50,
            bottom: 20,
            left: 50,
            right: 20,
          },
          tooltip: {},
          xAxis: {
            type: 'category',
            boundaryGap: false,
            interval: 0,
            axisLine: {
              show: false,
              interval: 0,
            },
            axisTick: {
              show: false,
              interval: 0,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'RGBA(11, 33, 40, 1)',
              },
              interval: 0,
            },
            axisLabel: {
              interval: 0,
              show: true,
              fontSize: 10,
              color: function (value, index) {
                var date = new Date().getHours();
                return index == 6 ? '#fff' : 'rgba(255,255,255,0.6)';
              },
            },
            data: ['11/12', '11/13', '11/14', '11/15', '11/16', "11/17", "11/18"],
          },
          yAxis: {
            type: 'value',
            splitNumber: 4,
            name: '',
            nameGap: 10,
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 10
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(101,124,168,0.3)',
              },
              interval: 0,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            // splitLine: {
            //   show: false,
            // },
            axisLabel: {
              showMinLabel: false,
              formatter: '{value}',
              fontSize: 10,
              padding: [0, 10, 0, 0],
              color: 'rgba(255,255,255,0.6)',
            },
          },
          series: [
            {
              type: 'line',
              name: '近7日客流变化趋势',
              symbol: 'none',
              symbolSize: 2,
              smooth: false,
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(107, 187, 241, 1)', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(98, 88, 173, 1)', // 100% 处的颜色
                  },
                  ]
                },
                width: 2,
                type: 'solid',
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(98, 88, 173, 0.25)"
                    },
                    {
                      offset: 0.95,
                      color: "rgba(98, 88, 173, 0.25)"
                    }
                  ],
                  false
                )
              },
              data: [1200, 2000, 1400, 3000, 600, 800, 1800, 1000, 1500],
            }
          ]
        };
        myEchart.clear();
        myEchart.setOption(option)
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
      
      },
      //初始化地图
      getMap() {
        var arr = [{ name: '山东省', value: 49000 }, { name: "内蒙古自治区", value: 20000 }, { name: "台湾", value: 1000 }, { name: "四川省", value: 500 }, { name: '天津市', value: 450 }, { name: "内蒙古自治区", value: 650 }, { name: "新疆维吾尔自治区", value: 100 }];
        const myEcharts = new echarts.init(document.getElementById('world'));
        const option = {
          legend: {
            show: false,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['地点', '线路'],
            textStyle: {
              color: '#fff',
            },
          },
          geo: {
            map: 'world',
            zoom: 3.5,
            center: [103.29, 35.85],
            selected: false,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                
                  var reg = /^[a-zA-Z\s.]*$/i.test(params.name);
                  if (reg) {
                    return ''
                  } else {
                    var str = ''
                    arr.map((item, index) => {
                      if (params.name == item.name && index > 1) {
                        str = params.name + '\n' + item.value;
                      }
                    })
                    return str == '' ? params.name : str;
                  }
      				
                },
              
                color: "rgba(255,255,255,0.3)",
                fontSize: 9
              },
              emphasis: {
                show: false,
                color: 'rgba(255,255,255,0.3)'
              },
            },
            roam: false, // 是否允许缩放
            itemStyle: {
              normal: {
                color: 'rgba(35, 35, 43, 0.4)', // 地图背景色
                borderColor: '#444', // 省市边界线00fcff 516a89
                borderWidth: 0.5,
              },
              emphasis: {
                // color: 'rgba(37, 43, 61, .5)', // 悬浮背景
                color: 'rgba(35, 35, 43, 0.4)',
              },
            },
            regions: [
              {
                name: 'China',
                selected: false,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(255, 255, 255, 0.84)',
                    color: "#ffffff",
                    borderWidth: 1,
                    areaColor: '#1E2630',
                    // areaColor: {
                    //   type: 'linear',
                    //   x: 0,
                    //   y: 0,
                    //   x2: 0,
                    //   y2: 1,
                    //   colorStops: [
                    //     {
                    //       offset: 1,
                    //       color: '#022136', // 0% 处的颜色
                    //     },
                    //     {
                    //       offset: 1,
                    //       color: '#022136', // 100% 处的颜色
                    //     },
                    //   ],
                    //   globalCoord: false, // 缺省为 false
                    // },
                    shadowColor: '',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    //shadowBlur: 0,
                  },
                  emphasis: {
                    areaColor: 'rgba(36, 36, 44, 1)',
                    borderWidth: 0,
                    color: 'rgba(255,255,255,0.3)'
                  },
                },
              },
            ],
          },
          series: [],
        };
        mapData.moveLines.forEach((item, index) => {
          const obj = {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 1,
            large: true,
            effect: {
              show: true,
              constantSpeed: 40,
              symbolSize: 2,
              trailLength: 0.7,
              symbol: 'triangle',
              // symbol: 'none',
            },
            lineStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(50, 146, 210, 1)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(106, 58, 215, 0.5)',
                    },
                  ],
                  false,
                ),
                width: 1,
                opacity: 0.2,
                curveness: 0.1,
              },
            },
            data: [],
          };

          obj.data.push(item);
          option.series.push(obj);
        });

        myEcharts.setOption(option);
      },
      setCard() {
        var myEchart = new echarts.init(document.getElementById('echart-3'));
        const options = {
          animation: false,
          title: {
            text: `身份证\n{a|60%}`,
            textAlign: "center",
            textStyle: {
              color: "#BBBBBB",
              fontSize: 14,
              fontWeight: "bold",
              lineHieght: 30,
              textAlign: 'center',
              rich: {
                a: {
                  color: "#BBBBBB",
                  fontSize: 16,
                  fontWeight: 500, padding: 5
                }
              }
            },
            top: '32.5%',
            right: 25
          },
          series: [
            {
              type: 'pie',
              startAngle: -90,
              radius: [40, 42],
              center: ['50%', '50%'],
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    fontSize: 10,
                  },
                  position: 'outside',
                },
              },
              labelLine: {
                show: true,
                length: 0,
                length2: 0,
                lineStyle: {
                  width: 0,
                },
              },
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0)',
                  borderWidth: 0,
                },
              },
              data: [
                {
                  name: '身份证',
                  value: 60,
                  label: {
                    show: false,
                    // padding: [0, 0, 140, 120],
                    color: '#E90079',
                    formatter(params) {
                      // console.log(params);
                      return `${params.data.name}\t\t{color1|${
                        params.data.value
                        }%}`;
                    },
                    rich: {
                      color1: {
                        fontSize: 32,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#6A3AD7', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#3292D2', // 100% 处的颜色
                      },
                      ]
                    },
                    borderWidth: 5,
                    borderColor: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#6A3AD7', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#3292D2', // 100% 处的颜色
                      },
                      ]
                    },
                  },
                },
                {
                  name: '',
                  value: 4,
                },
                {
                  name: '男性',
                  value: 40,
                  label: {
                    color: '#0A89EA',
                    // padding: [190, 40, 0, 0],
                    formatter(params) {
                      // console.log(params);
                      return `${params.data.name}\t\t{color1|${
                        params.data.value
                        }%}`;
                    },
                    rich: {
                      color1: {
                        fontSize: 16,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  itemStyle: {
                    color: '#646464',
                    borderWidth: 5,
                    borderColor: '#646464',
                  },
                },
                {
                  name: '',
                  value: 5,
                },
              ],
            },
          ],
        };
        myEchart.clear();
        myEchart.setOption(options)
      },
      setSex() {
        var myEchart = new echarts.init(document.getElementById('echart-2'));
        const options = {
          animation: false,
          graphic: [
            {
              type: 'image',
              left: '29%',
              top: '35%',
              style: {
                // eslint-disable-next-line global-require
                image: 'imgs/women.png',
                width: 14,
                height: 31,
              },
            },
            {
              type: 'image',
              left: '44%',
              top: '35%',
              style: {
                // eslint-disable-next-line global-require
                image: 'imgs/man.png',
                width: 14,
                height: 31,
              },
            },
          ],
          series: [
            {
              type: 'pie',
              startAngle: -90,
              radius: [40, 42],
              center: ['40%', '50%'],
              label: {
                normal: {
                  show: false,
                  textStyle: {
                    fontSize: 10,
                  },
                  position: 'outside',
                },
              },
              labelLine: {
                show: true,
                length: 0,
                length2: 0,
                lineStyle: {
                  width: 0,
                },
              },
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0)',
                  borderWidth: 0,
                },
              },
              data: [
                {
                  name: '女性',
                  value: 58,
                  label: {
                    show: false,
                    // padding: [0, 0, 140, 120],
                    color: '#E90079',
                    formatter(params) {
                      // console.log(params);
                      return `${params.data.name}\t\t{color1|${
                        params.data.value
                        }%}`;
                    },
                    rich: {
                      color1: {
                        fontSize: 32,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#7349D0', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#79C1FF', // 100% 处的颜色
                      },
                      ]
                    },
                    borderWidth: 5,
                    borderColor: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#F1AA3A', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#F7563E', // 100% 处的颜色
                      },
                      ]
                    },
                  },
                },
                {
                  name: '',
                  value: 4,
                },
                {
                  name: '男性',
                  value: 42,
                  label: {
                    color: '#0A89EA',
                    // padding: [190, 40, 0, 0],
                    formatter(params) {
                      // console.log(params);
                      return `${params.data.name}\t\t{color1|${
                        params.data.value
                        }%}`;
                    },
                    rich: {
                      color1: {
                        fontSize: 16,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  itemStyle: {
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#3292D2', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#6A3AD7', // 100% 处的颜色
                      },
                      ]
                    },
                    borderWidth: 5,
                    borderColor: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0,
                        color: '#3292D2', // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#6A3AD7', // 100% 处的颜色
                      },
                      ]
                    },
                  },
                },
                {
                  name: '',
                  value: 5,
                },
              ],
            },
          ],
        };
        myEchart.clear();
        myEchart.setOption(options)
      }
    }
  })
})