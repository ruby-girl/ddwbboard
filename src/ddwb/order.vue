<template>
  <div class="base base-container">
    <headers></headers>
    <div class="black-btn" @click="toBlack">返回</div>
    <div class="base-wrapper">
      <div class="company-info">
        <div class="bg-item-box left-height-base-info" style="height:560px">
          <div class="desc">
            <div class="title">工单处理数量</div>
          </div>
          <div class="company">
            <div class="display-flex">
              <Button type="success" shape="circle" size="small" ghost class="time-margin">最近一周</Button>
              <Button size="small" shape="circle" type="success" ghost class="time-margin">最近一个月</Button>
              <Button size="small" shape="circle" type="success" ghost class="time-margin">最近三个月</Button>
              <Button size="small" shape="circle" type="success" ghost class="time-margin">最近半年</Button>
              <Button type="success" shape="circle" icon="ios-search"></Button>
            </div>
          </div>
          <div ref="bar" class="bar-height"></div>
        </div>

        <div class="left-bottom-box">
          <div class="base display-flex justify-content-flex-justify">
            <div class="bg-item-box left-height" style="padding-bottom:10px">
              <div class="desc">
                <div class="title">基地订单合同</div>
              </div>
              <div style="padding-top:40px">
                <div style="position:relative" ref="pieBox">
                  <img
                    src="../assets/new/pic6.png"
                    class="pie-bg"
                    :style="{'top':pieTop,'left':pieLeft}"
                    ref="pieImg"
                  />

                  <!-- <div class="pie-text" :style="{'top':pieTxtTop,'left':pieTxtLeft}">亩</div> -->
                  <div style="height:180px" ref="loansChart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-message" style="height:100%">
        <div class="map-wrapper">
          <div class="map" ref="mapChart" id="mapChart" style="height:560px"></div>
        </div>
        <div class="base-message">
          <div class="base display-flex justify-content-flex-justify" ref="baseMessage">
            <div class="item-bg-y" style="position:relative;">
              <div class="last-title display-flex justify-content-flex-justify">
                <div>土壤环境</div>
                <div></div>
              </div>
              <div class="rain-map" ref="bottomLine1" style="height:100%"></div>
              <div v-if="!soliLineShow" class="no-data">暂无数据</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <!-- 右侧 -->
      <div class="company-info" style="margin-left:30px">
        <div class="bg-item-box left-height" style="padding-bottom:10px">
          <div class="desc">
            <div class="title">基地订单合同</div>
          </div>
          <div style="padding-top:40px">
            <div style="position:relative;" ref="pieBox2">
              <img
                src="../assets/new/pic6.png"
                class="pie-bg"
                :style="{'top':pieTop2,'left':pieLeft2}"
                ref="pieImg"
              />
              <div style="height:180px" ref="loansChart2"></div>
            </div>
          </div>
        </div>
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title">基地保险概况</div>
          <div style="padding-top:40px">
            <div style="position:relative" ref="pieBox2">
              <img
                src="../assets/new/pic6.png"
                class="pie-bg"
                :style="{'top':pieTop2,'left':pieLeft2}"
                ref="pieImg"
              />
              <div style="height:180px" ref="loansChart3"></div>
            </div>
          </div>
        </div>
        <!-- 左侧下柱形图 -->
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title display-flex justify-content-flex-justify">
            <div>基地贷款概况</div>
          </div>
          <div class="map-order-box" style="overflow:hidden;height:92%" @click="toOrder()">
            <ul
              style="position:relative;list-style:none;background:rgba(255,255,255,0.2);font-size:13px;padding:5px"
            >
              <li class="base-item display-flex justify-content-flex-center">
                <span style="text-align: left;display:inline-block; width: 26%;color: #fff;">操作时间</span>
                <span style="color: #fff;display:inline-block; width:20%;text-align: center;">操作人</span>
                <span style="text-align: center;display:inline-block; width: 20%;color: #fff;">农事操作</span>
                <span style="color: #fff;display:inline-block; width: 34%;text-align: center;">所属基地</span>
              </li>
            </ul>
            <div class="base-info" id="base-info3" style="overflow:hidden">
              <ul id="base-ul3" style="position:relative; top:0px;list-style:none;">
                <li class="base-item" v-for="(item,m) in orderList" :key="m+'c'">
                  <span
                    style="text-align: left;display:inline-block; width: 26% !important;color: #fff;padding-left:5px"
                  >{{item.executionTime}}</span>
                  <span
                    style="text-align: center;display:inline-block; width: 20%;color: #fff"
                  >{{item.executionUserName}}</span>
                  <span
                    style="color: #0AFBE2;display:inline-block; width: 20%;text-align: center;"
                  >{{item.farmWordItemName}}</span>
                  <span
                    style="color: #fff;display:inline-block; width: 34%;text-align: center;white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;"
                  >{{item.baseName}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "@/components/header/header";
import MapLoader from "@/utils/loadMap.js";
import Footer from "@/components/layouts/Footer";
import chartsType from "../assets/js/chartsType.js";
import roll from "../assets/js/roll.js";
import axios from "axios";
import {
  doneCount,
  typePercentForOrg,
  typeCountAndPercent,
  baseWorkOrderCount,
  baseFarmerCount,
  currentWorkOrder
} from "../api/apiYZX";
const dataAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "home",
  components: {
    headers,
    Footer
  },
  data() {
    return {
      pieTop: 0,
      pieLeft: 0,
      pieTop2: 0,
      pieLeft2: 0,
      orderList: [],
      mapRemarks: [],
      markers: [],
      tab: 1,
      airTab: 1,
      soliTab: 1,
      weixin: false,
      option: {},
      baseinfo: [],
      address: "",
      curLock: false,
      serviceData: [],
      metalDatas: [40, 200, 90, 140, 130, 0.2, 20, 0.4],
      tip: "",
      twoCircleWidth: 130,
      infoWindowdata: null,
      allbasearea: 0,
      mapIcon: require("../assets/new/icon_positioning.png"),
      pieTxtLeft: 0,
      pieTxtTop: 0,

      bx_forests: 0, //原形进度条面积
      bx_count: 0, //原形进图条人数
      dataRight: [],
      dataLeft: [],
      baseinfoRes: {},
      totalProduction: 0,
      totalYield: 0,
      pics: [],
      progress: {},
      mapInfo: {},
      baseIdSet: "",
      landList: [],
      lastRecord: {},
      soliLineShow: true,
      airLineShow: true,
      imgUrl: ""
    };
  },
  created() {
    this.baseId = 12;
    this.baseIdSet = this.$route.query.baseId;
    // }
    // this._getAddress();
  },
  mounted() {
    this._drawCityMap();
    let that = this;
    window.addEventListener("done1", function() {
      let googleLayer = new AMap.TileLayer({
        getTileUrl:
          "http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile"
      }); //定义谷歌卫星切片图层

      let roadNetLayer = new AMap.TileLayer.RoadNet({
        opacity: 0
      }); //定义一个路网图层
      // var layer = new AMap.TileLayer();
      that.map.setLayers([googleLayer, roadNetLayer]);
    });
    let pieBox = this.$refs.pieBox.offsetHeight;
    let pieBoxW = this.$refs.pieBox.offsetWidth;

    let pieBox2 = this.$refs.pieBox2.offsetHeight;
    let pieBoxW2 = this.$refs.pieBox2.offsetWidth;
    this.pieTop = (pieBox - 156) / 2 + "px";
    this.pieLeft = (pieBoxW - 156) / 2 + "px";
    this.pieTop2 = (pieBox2 - 156) / 2 + "px";
    this.pieLeft2 = (pieBoxW2 - 156) / 2 + "px";
    let sTime = this.getDay(7);
    this.getOrder(sTime);
    this.typePercentForOrg(); //坐下饼图
    this.typeCountAndPercent();
    this.baseFarmerCount();
    this.baseWorkOrderCount();
    // this.currentWorkOrder()
  },
  methods: {
    addCluster() {
      if (this.cluster) {
        this.cluster.setMap(null);
      }
      let _this = this;
      this.cluster = new AMap.MarkerClusterer(_this.map, _this.markers, {
        // styles: sts,
        gridSize: 50,
        renderClusterMarker: _this._renderClusterMarker
      });
      this.cluster.setMinClusterSize(5); // 代表低于五个点就不聚合 这样能有效防止
    },
    currentWorkOrder() {
      currentWorkOrder({ breedsId: 1, orgId: 99 }).then(res => {
        this.orderList = res.data;
        this.baseScroll3 = new roll.Roll(
          "base-info3",
          "base-ul3",
          "",
          -this.orderList.length * 18
        );

        //  处理地图数据*****
        this.removepoint();
        this.btnActive = 2;
        this.markers = [];
        this.mapRemarks = res.data;
        let that = this;
        for (let i = 0; i < that.mapRemarks.length; i++) {
          let remark = that.mapRemarks[i].mapAddr;
          let remarkJson2 = eval("(" + remark + ")");
          if (remarkJson2.path) {
            let lng = remarkJson2.path[0].lng;
            let lat = remarkJson2.path[0].lat;
            let marker = new AMap.Marker({
              position: new AMap.LngLat(lng, lat),
              offset: new AMap.Pixel(-10, -10),
              content:
                '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>'
            });
            that.markers.push(marker);
            that.map.add(marker);
            that.addCluster();
            marker.on("click", function(e) {
              that.infowindow(e, i);
              // that.$router.push({
              //   name: "base",
              //   query: { baseId: Number(that.mapRemarks[i].id) }
              // });
            });
          }
        }
      });
    },
    getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() - 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate;
    },
    doHandleMonth(month) {
      var m = month;
      if (month.toString().length == 1) {
        m = "0" + month;
      }
      return m;
    },
    getOrder(sTime) {
      let obj = {
        startTime: sTime,
        endTime: this.getDay(0),
        breedsId: 1,
        orgId: 99
      };
      doneCount(obj).then(res => {
        let datas = res.data.slice(0, 7);
        let xData = datas.map(item => {
          return item.baseName;
        });
        let yData = datas.map(item => {
          return item.workOrderDoneCount + 10;
        });
        this._dramBar(yData, xData);
      });
    },
    _dramBar(xData, yData) {
      let _this = this;
      let rainChart = this.$echarts.init(this.$refs.bar, null, {
        devicePixelRatio: 2.5
      });
      var option = {
        tooltip: {
          trigger: "axis",
          formatter:'{b}<br/>{a0}:{c0}条'
        },
        grid: {
          top: "20px",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: [
          {
            type: "category",
            show: false,
            data: yData,
            inverse: true,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              margin: 10,
              width: 20,
              show: false,
              textStyle: {
                fontSize: 12,
                color: "#53a8fa"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#2548ac"
              }
            }
          }
        ],
        xAxis: [
          {
            type: "value",
            position: "top",
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#0afbe2"
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        // backgroundColor: '#192469',
        series: [
          {
            name: "",
            type: "bar",
            barWidth: 21,
            data: xData,
            label: {
              normal: {
                show: true,
                position: "insideRight",
                textStyle: {
                  color: "#0afbe2" //color of value
                },
                formatter: "{c}条"
              }
            },
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#182D3B" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#155EA0" // 100% 处的颜色
                    }
                  ],
                  false
                ),
                barBorderRadius: [0, 4, 4, 0],
                shadowColor: "rgba(0,0,0,0.1)",
                shadowBlur: 3,
                shadowOffsetY: 3
              }
            }
          }
        ]
      };
      rainChart.setOption(option);
    },
    toBlack() {
      this.$router.back(-1);
    },
    typeCountAndPercent() {
      typeCountAndPercent({ breedsId: 1, orgId: 99 }).then(res => {
        let batchCountArr = res.data.batchCount.slice(0, 7);
        let batchCount = batchCountArr.map(item => {
          return item.workOrderTypeCount;
        });
        let farmWorkRecordCountArr = res.data.farmWorkRecordCount.slice(0, 7);
        let farmWorkRecordCount = farmWorkRecordCountArr.map(item => {
          return item.workOrderTypeCount;
        });
        let feedBackCountArr = res.data.feedBackCount.slice(0, 7);
        let feedBackCount = feedBackCountArr.map(item => {
          return item.workOrderTypeCount;
        });
        let batchPercentArr = res.data.batchPercent.slice(0, 7);
        let batchPercent = batchPercentArr.map(item => {
          return item.workOrderTypePercent;
        });
        let farmWorkRecordPercentArr = res.data.farmWorkRecordPercent.slice(
          0,
          7
        );
        let farmWorkRecordPercent = farmWorkRecordPercentArr.map(item => {
          return item.workOrderTypePercent;
        });
        let feedBackPercentArr = res.data.feedBackPercent.slice(0, 7);
        let feedBackPercent = feedBackPercentArr.map(item => {
          return item.workOrderTypePercent;
        });
        let xdata = feedBackPercentArr.map(item => {
          return item.baseName;
        });
        this.moreBar(
          xdata,
          batchCount,
          farmWorkRecordCount,
          feedBackCount,
          batchPercent,
          farmWorkRecordPercent,
          feedBackPercent
        );
      });
    },
    // 中间多则线
    moreBar(
      xData,
      batchCount,
      farmWorkRecordCount,
      feedBackCount,
      batchPercent,
      farmWorkRecordPercent,
      feedBackPercent
    ) {
      let rainChart = this.$echarts.init(this.$refs.bottomLine1, null, {
        devicePixelRatio: 2.5
      });
      let _this = this;
      var option = {
        grid: {
          top: 100
        },
        tooltip: {
          trigger: "axis",
          formatter: function(a) {
            let list = [];
            let listItem = "";
            for (var i = 0; i < a.length; i++) {
              let unit=''
              if(a[i].seriesName.indexOf("占比") !== -1){
                unit='%'
              }else{
                unit='条'
              }
              list.push(
                '<i style="display: inline-block;width: 10px;height: 10px;background: ' +
                  a[i].color +
                  ';margin-right: 5px;border-radius: 50%;}"></i><span style="width:70px; display:inline-block;">' +
                  a[i].seriesName +
                  "</span>&nbsp&nbsp：" +
                  a[i].value +unit
              );
            }
            listItem = list.join("<br>");
            return '<div class="showBox">' + listItem + "</div>";
          }
        },
        legend: {
          data: [
            "批次工单数量",
            "农事记录数量",
            "巡查工单数量",
            "批次工单占比",
            "农事记录占比",
            "巡查工单占比"
          ],
          textStyle: {
            color: "#ffffff",
            fontSize: 11
          },
          y: "top",
          x: "center"
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#1F7EFF",
                width: 1
              }
            },
            data: xData,
            axisPointer: {
              type: "shadow"
            },
            axisLabel: {
              interval: 0, //横轴信息全部显示
              textStyle: {
                color: "#fff"
              },
              fontSize: 11,
              // rotate:45,//度角倾斜显示
              formatter: function(value) {
                return value.length > 5 ? value.substring(0, 5) + "..." : value;
              }
            }
          }
        ],
        yAxis: [
          //这里配置两条Y轴
          {
            type: "value",
            splitLine: {
              show: false,
              lineStyle: {
                color: "#021439",
                width: 1
              }
            },
            axisLine: {
              lineStyle: {
                color: "#1F7EFF",
                width: 1
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
              },
              fontSize: 11,
              interval: "auto",
              formatter: "{value}"
            },
            name: "工单数量：条",
            nameTextStyle: {
              color: "#fff"
            }
          },
          {
            type: "value",
            splitLine: {
              show: false,
              lineStyle: {
                color: "#021439",
                width: 1
              }
            },
            axisLine: {
              lineStyle: {
                color: "#1F7EFF",
                width: 1
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
              },
              fontSize: 11,
              interval: "auto",
              formatter: "{value}%"
            },
            name: "工单占比：%",
            nameTextStyle: {
              color: "#fff",
              fontSize: 11
            }
          }
        ],
        series: [
          {
            name: "批次工单数量",
            barWidth: "26%",
            type: "bar",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#0FEBFF"
                },
                color: "#0FEBFF"
              }
            },
            yAxisIndex: 0, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: batchCount
          },
          {
            name: "农事记录数量",
            barWidth: "26%",
            type: "bar",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#7C89EB"
                },
                color: "#7C89EB"
              }
            },
            yAxisIndex: 0,
            data: farmWorkRecordCount
          },
          {
            name: "巡查工单数量",
            barWidth: "26%",
            type: "bar",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#FD6760"
                },
                color: "#FD6760"
              }
            },
            yAxisIndex: 0,
            data: feedBackCount
          },
          {
            name: "批次工单占比",
            barWidth: "30%",
            type: "line",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#0FEBFF"
                },
                fontSize: 11,
                color: "#0FEBFF"
              }
            },
            symbol: "circle",
            symbolSize: 10, //折线点的大小
            yAxisIndex: 1, ////使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data: batchPercent
          },
          {
            name: "农事记录占比",
            barWidth: "30%",
            type: "line",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#7C89EB"
                },
                fontSize: 11,
                color: "#7C89EB"
              }
            },
            symbol: "circle",
            symbolSize: 10, //折线点的大小
            yAxisIndex: 1,
            data: farmWorkRecordPercent
          },
          {
            name: "巡查工单占比",
            barWidth: "30%",
            type: "line",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "#FD6760"
                },
                fontSize: 11,
                color: "#FD6760"
              }
            },
            symbol: "circle",
            symbolSize: 10, //折线点的大小
            yAxisIndex: 1,
            data: feedBackPercent
          }
        ]
      };
      rainChart.setOption(option);
    },
    // 自定义提示框
    formatterTip(params) {
      //移除重复的数据
      for (var i = 0; i < params.length; i++) {
        for (var j = params.length - 1; j > i; j--) {
          if (params[j].data == params[i].data) {
            params.splice(j, 1);
            break;
          }
        }
      }

      var tip = "";
      for (var i = 0; i < params.length; i++) {
        //这里是自己定义样式， params[i].marker 表示是否显示左边的那个小圆圈
        if (params[i].value != 0) {
          tip =
            tip +
            params[i].marker +
            params[i].seriesName.substring(0, 4) +
            "年" +
            ":" +
            params[i].value +
            "<br/>";
        }
      }

      return tip;
    },
    totalTj() {
      totalTj({ baseId: this.baseIdSet }).then(res => {
        //获取基地总面积- 有订单的面积=无订单面积
        this.totalAcreage = res.data.totalAcreage;
        this.totalProduction = res.data.totalProduction; //地图上显示的产量
        this.totalYield = res.data.totalYield; //地图上显示年产值
        let that = this;
        this.landList = res.data.landParcels;
        setTimeout(function() {
          that.addBlockOnMap(res.data.landParcels);
        }, 1000);

        this.getBaseOrderTj();
      });
    },

    typePercentForOrg() {
      //获取坐下侧订单饼图
      typePercentForOrg({ orgId: 99, breedsId: 1 }).then(res => {
        let arr = [
          {
            name: `农事记录:${res.data.farmWorkRecordPercent}%`,
            count: 100,
            value: res.data.farmWorkRecordPercent,
            itemStyle: { color: "#7C89EB" }
          },
          {
            name: `批次工单:${res.data.batchOrderPercent}%`,
            count: 100,
            value: res.data.batchOrderPercent,
            itemStyle: { color: "#13E5C3" }
          },
          {
            name: `巡查工单:${res.data.feedBackOrderPercent}%`,
            count: 100,
            value: res.data.feedBackOrderPercent,
            itemStyle: { color: "#5DC1FA" }
          }
        ];

        this._dramLoansChart(arr);
      });
    },
    //右侧饼图
    _dramLoansChart23(refy, name, datas) {
      let rainChart = this.$echarts.init(this.$refs[refy], null, {
        devicePixelRatio: 2.5
      });
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: name,
          textStyle: {
            color: "#ffffff" //字体颜色
          },
          show: false
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "left"
            },
            tooltip: {
              trigger: "item",
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            data: datas
          }
        ]
      };
      rainChart.setOption(option);
    },
    // 右侧农户
    baseFarmerCount() {
      baseFarmerCount({ orgId: 99, breedsId: 1 }).then(res => {
        let arr = [];
        let name = res.data.map(item => {
          let obj = {
            name: `${item.baseName}`,
            count: 0,
            value: item.farmerCount,
            itemStyle: this.getRandomColor()
          };
          arr.push(obj);
          return item.baseName;
        });
        this._dramLoansChart23("loansChart3", name, arr);
      });
    },
    removepoint() {
      this.map.remove(this.markers);
    },
    baseWorkOrderCount() {
      baseWorkOrderCount({ orgId: 99, breedsId: 1 }).then(res => {
        let arr = [];
        let name = res.data.map(item => {
          let obj = {
            name: `${item.baseName}`,
            count: 0,
            value: item.baseWorkOrderCount,
            itemStyle: this.getRandomColor()
          };
          arr.push(obj);
          return item.baseName;
        });
        this._dramLoansChart23("loansChart2", name, arr);
      });
    },
    getRandomColor() {
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    },
    getBaseInsuranceTj() {
      //保险饼图
      getBaseInsuranceTj({ baseId: this.baseId }).then(res => {
        this.bx_forests = 80;
        this.bx_count = 91;
      });
    },
    listAddMarker(position, i) {
      var markerContent =
        "" +
        '<div class="custom-content-marker" style="postion:relative;text-align:center">' +
        '   <img src="https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png">' +
        "</div>";
      let that = this;
      // let markers = [];
      var marker = new AMap.Marker({
        map: that.map,
        position: position,
        content: markerContent,
        offset: new AMap.Pixel(-13, -30)
      });
      that.map.setZoomAndCenter(15, position);
      // markers.push(marker);
      that.saveListMarker.push(marker);
      marker.setMap(that.map);
      AMap.event.addListener(marker, "click", function(e) {
        that.map.setZoomAndCenter(15, [e.lnglat.lng, e.lnglat.lat]);
      });
    },
    _dramLoansChart(datas) {
      //右侧饼图
      let rainChart = this.$echarts.init(this.$refs.loansChart, null, {
        devicePixelRatio: 2.5
      });
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["农事记录", "批次工单", "巡查工单"],
          textStyle: {
            color: "#ffffff" //字体颜色
          },
          show: false
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "left"
            },
            tooltip: {
              trigger: "item",
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            data: datas
          }
        ]
      };
      rainChart.setOption(option);
    },
    _renderClusterMarker(context) {
      var count = this.markers.length;
      var factor = Math.pow(context.count / count, 1 / 10);
      var div = document.createElement("div");
      var Hue = 180 - factor * 180;
      var bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
      var fontColor = "hsla(" + Hue + ",100%,20%,1)";
      var borderColor = "hsla(" + Hue + ",100%,40%,1)";
      var shadowColor = "hsla(" + Hue + ",100%,50%,1)";
      // div.style.backgroundColor = bgColor;
      div.style.backgroundColor = "#fce700";
      var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
      // div.style.width = div.style.height = size + 'px';
      div.style.width = div.style.height = "40px";
      // div.style.border = 'solid 1px ' + borderColor;
      div.style.border = "solid 1px #fce700";
      div.style.borderRadius = size / 2 + "px";
      div.style.boxShadow = "0 0 1px " + shadowColor;
      div.innerHTML = context.count;
      // div.style.lineHeight = size + 'px';
      div.style.lineHeight = "40px";
      div.style.color = fontColor;
      div.style.fontSize = "14px";
      div.style.textAlign = "center";
      context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
      context.marker.setContent(div);
    },
    _drawCityMap() {
      //  this.$refs.mapChart.style.height = "520px";
      let that = this;
      MapLoader().then(AMap => {
        that.map = new AMap.Map(this.$refs.mapChart, {
          resizeEnable: true,
          center: [105.013664, 31.206397],
          zooms: [10, 18]
          //  layers:[googleLayer,roadNetLayer,layer], //设置图层
          // viewMode:'3D',
        });

        AMap.plugin(
          ["AMap.DistrictSearch", "AMap.MarkerClusterer"],
          function() {
            var district = new AMap.DistrictSearch({
              extensions: "all",
              subdistrict: 0
            });
            district.search("三台县", function(status, result) {
              // 外多边形坐标数组和内多边形坐标数组
              var bounds = result.districtList[0].boundaries;
              var outer = [
                new AMap.LngLat(-360, 90, true),
                new AMap.LngLat(-360, -90, true),
                new AMap.LngLat(360, -90, true),
                new AMap.LngLat(360, 90, true)
              ];
              var pathArray = [outer];
              pathArray.push.apply(pathArray, bounds);
              var polygon = new AMap.Polygon({
                path: pathArray,
                strokeColor: "#0AFBE2",
                strokeWeight: 1,
                fillColor: "#26374C",
                fillOpacity: 0.9
              });
              polygon.setPath(pathArray);
              that.map.add(polygon);
              var polygons = [];
              if (bounds) {
                for (var i = 0, l = bounds.length; i < l; i++) {
                  //生成行政区划polygon
                  var polygon1 = new AMap.Polygon({
                    map: that.map,
                    strokeWeight: 1,
                    path: bounds[i],
                    fillOpacity: 0,
                    fillColor: "#CCF3FF",
                    strokeColor: "#CC66CC"
                  });
                  polygons.push(polygon1);
                }
                // 地图自适应
                that.map.setFitView(polygons);
              }
            });
            // 聚合点

            if (that.cluster) {
              that.cluster.setMap(null);
            } else {
              that.cluster = new AMap.MarkerClusterer(that.map, that.markers, {
                gridSize: 100,
                renderClusterMarker: that._renderClusterMarker
              });
            }

            // var bounds = that.map.getBounds();
            // that.map.setLimitBounds(bounds);
            that.map.on("complete", function() {
              var myEvent = new CustomEvent("done1", {});
              that.currentWorkOrder();
              if (window.dispatchEvent) {
                window.dispatchEvent(myEvent);
              } else {
                window.fireEvent(myEvent);
              }
            });
          }
        );
      });
    },

    infowindow(e, b) {
      this.infoWindowdata = new AMap.InfoWindow({
        content: `<div style="color:#fff;width:250px;overflow:hidden;text-align:left">
        <div>基地名称：${this.mapRemarks[b].baseName}</div>
        <div>农户姓名：${this.mapRemarks[b].executionUserName}</div>
        <div>农事操作：${this.mapRemarks[b].farmWordItemName}</div>
        <div>操作时间：${this.mapRemarks[b].executionTime}</div>
        </div>`
      });
      this.infoWindowdata.open(this.map, [e.lnglat.lng, e.lnglat.lat]);
    }
  }
};
</script>
<style scoped>
.map >>> .amap-info-content {
  background-color: rgba(35, 35, 35, 0.6);
  border-radius: 10px 10px;
  box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
.map >>> .amap-info-sharp {
  border-top: 8px solid rgba(35, 35, 35, 0.6);
}
.map >>> .amap-info-outer {
  overflow-x: hidden;
}
</style>
<style lang="stylus" scoped>
@media screen and (min-width: 1550px) {
  .base-item {
    span:nth-of-type(1) {
      width: 80px !important;
      white-space: nowrap;
    }
  }

  .monitor-message {
    width: 97px !important;
  }

  .special {
    width: 93px !important;
  }
}

@media screen and (max-width: 1550px) {
  .base-item {
    span:nth-of-type(1) {
      width: 80px !important;
    }
  }

  .monitor-message {
    width: 97px !important;
  }

  .special {
    width: 93px !important;
  }
}

@media screen and (min-width: 2000px) {
  .changebut {
    width: 180px !important;
  }

  .company-desc {
    line-height: 28px !important;
  }

  .base-item {
    line-height: 20px !important;

    span:nth-of-type(1) {
      width: 535px !important;
      white-space: nowrap;
    }

    span:nth-of-type(2) {
      width: 100px !important;
    }
  }

  .monitor-message {
    width: 200px !important;
  }

  .special {
    width: 190px !important;
  }

  .update-time {
    span {
      transform: scale(0.9);
    }
  }

  .map-footer {
    height: 38px !important;
    line-height: 1.5 !important;
  }
}

.bg-item-box {
  width: 100%;
  background: url('../assets/new/bg1.png');
}

.base-wrapper {
  margin: 20px 0 0 0;
  display: flex;
  padding: 0 20px;
  height: calc(100% - 80px);

  .desc {
    height: 30px;
    color: #ffffff;
    font-size: 16px;
    padding-left: 10px;
    box-sizing: border-box;

    .title {
      height: 20px;
      color: #B1FEF6;
      line-height: 30px;
    }

    .descs {
      font-size: 6px;
    }
  }

  .pos {
    position: relative;

    .select {
      width: 200px;
      position: absolute;
      right: 20px;
      top: 5px;
    }

    .monitor-title {
      color: #fff;
      text-align: center;
      padding-top: 5px;
      font-size: 18px;
      position: absolute;
      right: 10px;
      top: 5px;
    }
  }

  .company-info {
    flex: 1.2;
    border-radius: 6px;
    min-width: 310px;

    .company {
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
      overflow: hidden;

      img {
        margin-top: 15px;
        width: 100%;
        height: 235px;
      }

      .company-desc {
        margin-top: 15px;
        font-size: 14px;
        color: #EEEEEE;
        padding-bottom: 10px;
        line-height: 22px;
      }
    }

    .monitor {
      height: 335px;

      .lunbo-wrapper {
        height: 100%;

        .demo {
          height: 335px;
          line-height: 335px;
          text-align: center;
          color: #fff;
          font-size: 30px;
        }

        .ivu-carousel-arrow {
          background-color: rgba(0, 0, 0, 0.2);
        }

        .ivu-carousel-arrow:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .map-message {
    flex: 2.6;
    height: 100%;
    margin-left: 30px;
    min-width: 400px;

    .map-wrapper {
      width: 100%;
      border-radius: 6px;
      background: url('../assets/new/bg1.png');

      .map {
        position: relative;
        height: 550px;

        .changebut {
          position: absolute;
          width: 80px;
          height: 25px;
          text-align: center;
          line-height: 25px;
          border-radius: 15px;
          top: 10%;
          right: 5%;
          color: #fff;
          z-index: 99999;
          cursor: pointer;
        }

        .point {
          position: absolute;
          left: 5%;
          top: 10%;
          z-index: 99999;

          .text {
            color: #fff;
          }

          .icon1 {
            display: inline-block;
            cursor: pointer;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            margin-right: 10px;
            vertical-align: middle;
          }
        }
      }

      .map-footer {
        display: flex;
        height: 25px;
        color: #ffffff;
        font-size: 16px;
        background-color: #2E4562;

        .earth-count {
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .area-count {
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        div {
          flex: 1;
          text-align: center;

          span {
            font-size: 12px;
            vertical-align: middle;
          }

          .count {
            color: #6DD230;
          }

          span:nth-of-type(1) {
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }

          span:nth-of-type(2) {
            margin-left: 5px;
          }

          span:nth-of-type(3) {
            margin-left: 10px;
          }
        }
      }
    }

    .base-message {
      margin-top: 20px;
      height: calc(100% - 652px);

      .base {
        height: 100%;

        .base-map {
          height: 165px;
          width: 40%;
          display: inline-block;
        }

        .item-bg-y {
          width: 100%;
          background: url('../assets/new/bg1.png');
          color: #b1fef6;
          line-height: 30px;
          font-size: 16px;
          padding: 0 10px;
        }

        .base-info {
          width: 100%;
          height: 98px;
          display: inline-block;
          overflow: hidden;
          text-align: center;

          .base-item {
            height: 26px;
            padding: 3px 0;
            box-sizing: border-box;
            font-size: 12px;
            letter-spacing: 1px;

            .icon {
              display: inline-block;
              width: 5px;
              height: 5px;
              border-radius: 50%;
              margin-right: 10px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}

.left-height {
  height: 30%;
}

.left-height-last {
  height: calc(100% - 680px);
}

.base-container {
  overflow: hidden;
  background: url('../assets/new/bg.jpg') no-repeat;
  background-size: 100% 100%;
}

.wrapper-box {
  background: url('../assets/new/bg1.png') no-repeat;
  padding: 0 15px;
}

.ivu-carousel-dots-inside {
  top: -10px !important;
}

.wrpper-title {
  position: absolute;
  top: -6px;
  left: 0px;
  color: #b1fef6;
  font-size: 16px;
  z-index: 111;
}

.right-bx-bg {
  background: url('../assets/new/pic5.png') no-repeat;
  background-size: 100% 100%;
  text-align: center;
  line-height: 100px;
  width: 100px;
  height: 100px;
}

.right-box-padding {
  padding-left: 15px;
}

.last-title {
  font-size: 16px;
  color: #b1fef6;
  padding-left: 15px;
}

.pie-bg {
  position: absolute;
  width: 156px;
  height: auto;
}

.progress {
  width: 50%;
  height: 15px;
  background: rgba(255, 255, 255, 0.2);
  margin: 5px 15px 0 15px;
  border-radius: 10px;
  text-align: center;
  color: #fff;

  .progressing {
    position: relative;
    float: left;
    margin: 0 auto;
    height: 15px;
    background-image: linear-gradient(to left, #2DB7FF 5%, #4349A9);
    border-radius: 10px;

    .percentage {
      margin-left: 50px;
    }
  }
}

.base-progress-box {
  height: 80px;
}

.base-progress-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: #fff;
  line-height: 26px;
}

.base-tab {
  width: 60px;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  opacity: 0.3;
  cursor: pointer;
}

.base-tab-action {
  color: #fff;
  position: relative;
  opacity: 1;

  &:after {
    content: '';
    width: 20px;
    position: absolute;
    border: 1px solid #fff;
    bottom: -5px;
    left: 20px;
  }
}

.base-tab-small {
  width: 44px;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 1);
  opacity: 0.3;
  cursor: pointer;
}

.base-tab-action-small {
  color: #fff;
  position: relative;
  opacity: 1;

  &:after {
    content: '';
    width: 20px;
    position: absolute;
    border: 1px solid #fff;
    bottom: 0px;
    left: 30%;
  }
}

.pie-color-box {
  line-height: 35px;
  color: #fff;

  .pie-color-1 {
    background: #5DC1FA;
    width: 20px;
    height: 10px;
    margin-right: 5px;
    border-radius: 2px;
  }

  .pie-color-2 {
    background: #7C89EB;
    width: 20px;
    margin-right: 5px;
    height: 10px;
    border-radius: 2px;
  }

  .pie-color-3 {
    background: #14E6C4;
    width: 18px;
    margin-right: 5px;
    height: 8px;
    border-radius: 2px;
  }
}

.black-btn {
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid rgba(177, 254, 246, 1);
  opacity: 0.5;
  border-radius: 4px;
  color: #fff;
  position: absolute;
  top: 30px;
  left: 50px;
  cursor: pointer;
}

.left-height-base-info {
  height: 430px;
}

.base-info-img {
  width: 100%;
  height: 150px;
  // background: url('../assets/new/base1.jpg') no-repeat;
  // background-size: 100%;
}

.color-yellow {
  color: #EBD804;
}

.no-data {
  color: #fff;
  position: absolute;
  top: 40px;
  left: 45%;
  font-size: 14px;
}

.base-container {
  min-width: 1600px;
  height: 1080px;
}

.scorll-height {
  height: calc(((100% - 570px) / 2)) !important;
}

.time-margin {
  margin-right: 5px;
}

.left-bottom-box {
  margin-top: 20px;
  height: calc(100% - 652px);
  background: url('/img/bg1.9363892a.png') no-repeat;
}

.bar-height {
  height: calc(100% - 100px);
  width: 100%;
}
</style>


