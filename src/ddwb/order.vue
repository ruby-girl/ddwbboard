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
            <div>asd</div>
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
                <div>
                  <div class="display-flex">
                    <div
                      @click="getLast24HMonitorRecords(1,'soilHumidity')"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="getLast24HMonitorRecords(2,'soilTemperature')"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==2?true:false}"
                    >温度</div>
                    <div
                      @click="getLast24HMonitorRecords(3,'soilEc')"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==3?true:false}"
                    >电导率</div>
                    <div
                      @click="getLast24HMonitorRecords(4,'soilPH')"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==4?true:false}"
                    >PH值</div>
                  </div>
                </div>
              </div>
              <div class="rain-map" ref="bottomLine1" style="height:80%"></div>
              <div v-if="!soliLineShow" class="no-data">暂无数据</div>
            </div>
            <!-- 地图下柱形图 -->
            <div class="item-bg-y" style="position:relative;">
              <div class="last-title display-flex justify-content-flex-justify">
                <div>空气环境</div>
                <div>
                  <div class="display-flex">
                    <div
                      @click="getLast24HMonitorRecordsAir(1,'airHumidity')"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="getLast24HMonitorRecordsAir(2,'airTemperature')"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==2?true:false}"
                    >温度</div>
                    <div
                      style="width:55px"
                      @click="getLast24HMonitorRecordsAir(3,'co2value')"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==3?true:false}"
                    >CO2浓度</div>
                    <div
                      @click="getLast24HMonitorRecordsAir(4,'airPressure')"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==4?true:false}"
                    >压强</div>
                    <div
                      @click="getLast24HMonitorRecordsAir(5,'pm25value')"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==5?true:false}"
                    >PM2.5</div>
                    <div
                      @click="getLast24HMonitorRecordsAir(6,'illIntensity')"
                      :class="{'base-tab':true,'base-tab-action-small':airTab==6?true:false}"
                    >光照强度</div>
                    <div
                      @click="getLast24HMonitorRecordsAir(7,'rainfall')"
                      :class="{'base-tab':true,'base-tab-action-small':airTab==7?true:false}"
                    >降水量</div>
                  </div>
                </div>
              </div>
              <div class="rain-map" ref="bottomLine2" style="height:80%"></div>
              <div v-if="!airLineShow" class="no-data">暂无数据</div>
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
          <div style="position:relative" ref="pieBox">
            <img
              src="../assets/new/pic6.png"
              class="pie-bg"
              :style="{'top':pieTop,'left':pieLeft}"
              ref="pieImg"
            />
            <div class="pie-text flex-direction-column">
              <div style="text-align:center">亩</div>
            </div>
            <!-- <div class="pie-text" :style="{'top':pieTxtTop,'left':pieTxtLeft}">亩</div> -->
            <div style="height:180px" ref="loansChart"></div>
          </div>
          <!-- 饼图说明 -->
          <div class="pie-color-box display-flex justify-content-flex-center">
            <div style="margin-right:15px">
              <div class="display-flex align-items-center">
                <div class="pie-color-2"></div>
                <span>有订单</span>
              </div>
            </div>
            <div>
              <div class="display-flex align-items-center">
                <div class="pie-color-3"></div>
                <span>没有订单</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title">基地保险概况</div>
          <div class="base-progress-box">
            <div
              style="padding:20px;"
              class="base-info display-flex justify-content-flex-justify"
              id="base-info"
              v-if="bx_forests"
            >
              <circle-progress
                :id="111"
                :isAnimation="true"
                :isRound="true"
                :width="twoCircleWidth"
                title="投保面积"
                :radius="20"
                :progress="bx_forests?bx_forests:0"
                :barColor="'#7C89EB'"
                :duration="1000"
                :delay="20"
                :timeFunction="'cubic-bezier(0.99, 0.01, 0.22, 0.94)'"
                :backgroundColor="'#4452B9'"
              />
              <circle-progress
                :id="222"
                :isAnimation="true"
                :isRound="true"
                :width="twoCircleWidth"
                :radius="20"
                title="投保农户"
                :progress="bx_count?bx_count:0"
                :barColor="'#75CDFA'"
                :duration="1000"
                :delay="20"
                :timeFunction="'cubic-bezier(0.99, 0.01, 0.22, 0.94)'"
                :backgroundColor="'#4452B9'"
              />
            </div>
          </div>
        </div>
        <!-- 左侧下柱形图 -->
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title display-flex justify-content-flex-justify">
            <div>基地贷款概况</div>
          </div>
          <div style="height:90%">
            <div class="airs air-temperature" style="height:100%">
              <polygonal-two ref="polygonalTwo" />
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
import polygonalTwo from "@/components/polygonal/polygonalTwoX";
import echartslLine from "@/components/echartslLine/echartslLine";
import circleProgress from "@/components/circle-progress";
import Footer from "@/components/layouts/Footer";
import chartsType from "../assets/js/chartsType.js";
import roll from "../assets/js/roll.js";
import axios from "axios";
import { doneCount } from "../api/apiYZX";
const dataAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "home",
  components: {
    headers,
    polygonalTwo,
    echartslLine,
    Footer,
    circleProgress
  },
  data() {
    return {
      pieTop: 0,
      pieLeft: 0,
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
      markers: [],
      infoWindow: null,
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
    // this._drawCityMap();
    // this.getBaseInsuranceTj();
    // // this._drawRainMap();
    // // 设置饼图背景图
    // let pieBox = this.$refs.pieBox.offsetHeight;
    // let pieBoxW = this.$refs.pieBox.offsetWidth;
    // this.pieTop = (pieBox - 156) / 2 + "px";
    // this.pieTxtTop = (pieBox - 22) / 2 + "px";
    // this.pieTxtLeft = (pieBoxW - 36) / 2 + "px";
    // this.pieLeft = (pieBoxW - 156) / 2 + "px";
    // // 计算保险概率
    // this.twoCircleWidth = pieBox - 20;
    // // 地图下折线图高度
    // let that = this;

    // that.allbasearea = 0;
    // window.addEventListener("done1", function() {
    //   let googleLayer = new AMap.TileLayer({
    //     getTileUrl:
    //       "http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile"
    //   }); //定义谷歌卫星切片图层

    //   let roadNetLayer = new AMap.TileLayer.RoadNet({
    //     opacity: 0
    //   }); //定义一个路网图层
    //   // var layer = new AMap.TileLayer();
    //   that.map.setLayers([googleLayer, roadNetLayer]);
    // });

    // this.getLast24HMonitorRecordsAir(1, "airHumidity"); //底部折线图
    // this.getLast24HMonitorRecords(1, "soilHumidity");
    // this.getBaseInfo();
    // this.getFarmWorkProgress();
    // this.getBaseLoanTj();
    // this.detection(1);
    // this.getBaseMapInfoTotalTj();
    // this.getLastRecord();
    // setTimeout(function() {
    //   that.totalTj();
    // }, 1000);
    // 新*****************************
    let sTime=this.getDay(7)
    this.getOrder(sTime);
  },
  methods: {
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
        let obj={
            startTime:sTime,
            endTime:this.getDay(0),
            breedsId:1,
            orgId:99
        }
      doneCount(obj).then(res => {
          let datas=res.data
          let xData=datas.map(item => {
              return item.baseName
          })
          let yData=datas.map(item=>{
              return item.workOrderDoneCount+10
          })
        this._dramBar(yData,xData);
      });
    },
    _dramBar(xData,yData) {
      let _this = this;
      //右侧饼图
      let rainChart = this.$echarts.init(this.$refs.bar, null, {
        devicePixelRatio: 2.5
      });
      var option = {
        tooltip: {
          trigger: "axis"
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
            data:yData,
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
            data:xData,
            label: {
              normal: {
                show: true,
                position: "insideRight",
                textStyle: {
                  color: "#0afbe2" //color of value
                }
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
    getBaseInfo() {
      //获取基地详情
      getBaseInfo({ baseId: this.baseIdSet }).then(res => {
        this.baseinfoRes = res.data;
        this.pics = this.baseinfoRes.basePics || [];
        if (this.pics.length < 1) {
          //如果没有基地图片，抓取萤石云
          this.getBaseWithMonitorVideos();
        }
      });
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

    getBaseOrderTj() {
      //获取右侧订单饼图
      getBaseOrderTj({ baseId: this.baseId }).then(res => {
        let num = (
          parseFloat(this.totalAcreage) - parseFloat(res.data.order_forests)
        ).toFixed(2);
        let arr = [
          {
            name: `${res.data.count}笔${res.data.order_forests}亩`,
            count: res.data.count,
            value: res.data.order_forests,
            itemStyle: { color: "#7C89EB" }
          },
          {
            name: `${num}亩`,
            count: 0,
            value: num,
            itemStyle: { color: "#13E5C3" }
          }
        ];

        this._dramLoansChart(arr);
      });
    },
    getBaseInsuranceTj() {
      //保险饼图
      getBaseInsuranceTj({ baseId: this.baseId }).then(res => {
        this.bx_forests = 80;
        this.bx_count = 91;
      });
    },
    getLast24HMonitorRecords(n, label) {
      this.soliTab = n;
      getLast24HMonitorRecords({ baseId: this.baseIdSet, column: label }).then(
        res => {
          if (res.data.length > 1) {
            this.getLineData(res.data, n);
          } else {
            this.soliLineShow = false;
          }
        }
      );
    },
    getLineData(data, n) {
      let Xdata = [];
      let xTitle = [];
      let label = this.setUnit(n);
      for (var i = 0; i < data.length; i++) {
        xTitle.push(data[i].monitorTime);
        Xdata.push(data[i][label.data] || 0);
      }
      this._drawLine(Xdata, xTitle, label.unit);
    },
    getLineData2(data, n) {
      let Xdata = [];
      let xTitle = [];
      let label = this.setUnit2(n);
      for (var i = 0; i < data.length; i++) {
        xTitle.push(data[i].monitorTime);
        Xdata.push(data[i][label.data] || 0);
      }
      this._drawLine2(Xdata, xTitle, label.unit);
    },
    getLast24HMonitorRecordsAir(n, label) {
      this.airTab = n;
      getLast24HMonitorRecords({ baseId: this.baseIdSet, column: label }).then(
        res => {
          if (res.data.length > 0) {
            this.getLineData2(res.data, n);
          } else {
            this.airLineShow = false;
          }
        }
      );
    },
    tabFunc(n) {
      this.tab = n;
      this.detection(n);
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
    addBlockOnMap(remarks) {
      //地块的第一个点增加Masker
      this.saveListMarker = [];
      this.polygons = [];
      for (let i = 0; i < remarks.length; i++) {
        let remark = remarks[i].mapAddr;
        if (remark != undefined && remark != null && remark.trim() != "") {
          let remarkJson2 = eval("(" + remark + ")");
          let newPath = [];
          this.listAddMarker(
            [remarkJson2.path[0].lng, remarkJson2.path[0].lat],
            i
          );
          for (let i = 0; i < remarkJson2.path.length; i++) {
            let point = remarkJson2.path[i];
            newPath.push(new AMap.LngLat(point.lng, point.lat));
          }
          remarkJson2.path = newPath;
          let polygon2 = new AMap.Polygon(remarkJson2);
          this.polygons.push(polygon2);
          this.map.add(polygon2);
          this.map.setFitView();
        }
      }
      let that = this;

      for (let i = 0; i < that.polygons.length; i++) {
        that.polygons[i].on("click", function(e) {
          that.rutePush(i);

          // that.infowindow(e, i);
        });
      }
      console.info("that.polygons.length", this.polygons);
    },
    rutePush(i) {
      let obj = this.landList.filter((item, n) => {
        return n == i;
      });
      this.$router.push({
        name: "company",
        query: { userOrganId: Number(obj[0].userId) }
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
          data: ["有订单", "没有订单"],
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
    _drawLine2(xData, xTitle, unit) {
      //底部右侧折线图
      let rainChart = this.$echarts.init(this.$refs.bottomLine2, null, {
        devicePixelRatio: 2.5
      });
      var option = chartsType.charts(
        xTitle,
        xData,
        unit,
        "line",
        "",
        "#0AFBE2",
        "x"
      );
      option.legend = {
        left: "right",
        textStyle: {
          color: "#fff"
        }
      };
      rainChart.setOption(option);
    },
    _drawLine(xData, xTitle, unit) {
      //底部左侧折线图
      //左侧折线图
      let rainChart = this.$echarts.init(this.$refs.bottomLine1, null, {
        devicePixelRatio: 2.5
      });
      var option = chartsType.charts(
        xTitle,
        xData,
        unit,
        "line",
        "",
        "#0AFBE2",
        "x"
      );
      option.legend = {
        left: "right",
        textStyle: {
          color: "#fff"
        }
      };
      rainChart.setOption(option);
    },
    _drawRainMap() {
      let rainChart = this.$echarts.init(this.$refs.rainMap, null, {
        devicePixelRatio: 2.5
      });
      var option = chartsType.charts(
        ["镍", "锌", "铜", "总铬", "铅", "镉", "总砷", "总汞"],
        this.metalDatas,
        "检测量（mg/kg）",
        "bar",
        "实际值",
        "#289CF4",
        "x"
      );
      option.legend = {
        left: "right",
        textStyle: {
          color: "#fff"
        }
      };
      option.series.push({
        name: "国家标准允许最大值",
        barWidth: 20,
        barGap: document.body.clientWidth > 2000 ? "80%" : "30%",
        type: "bar",
        data: [50, 250, 100, 200, 300, 0.3, 30, 0.5],
        itemStyle: {
          normal: {
            color: "#4ECB73",
            "margin-left": 20
          }
        }
      });
      rainChart.setOption(option);
    },
    _drawCityMap() {
      let that = this;
      that.spinning = true;
      MapLoader().then(AMap => {
        let googleLayer = new AMap.TileLayer({
          getTileUrl:
            "http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile"
        });
        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity: 0
        });
        that.map = new AMap.Map("mapChart", {
          zoom: 15,
          layers: [googleLayer, roadNetLayer]
        });
        that.map.on("complete", function() {
          that.mapok = true;
          that.spinning = false;

          var myEvent = new CustomEvent("mapload_done", {});
          if (window.dispatchEvent) {
            window.dispatchEvent(myEvent);
          } else {
            window.fireEvent(myEvent);
          }
        });
        AMap.plugin(["AMap.Autocomplete", "AMap.PlaceSearch"], function() {
          var autoOptions = {
            // 城市，默认全国
            city: that.areacord,
            // 使用联想输入的input的id
            input: "input3",
            citylimit: true
          };
          var autocomplete = new AMap.Autocomplete(autoOptions);
          var placeSearch = new AMap.PlaceSearch({
            city: that.areacord,
            map: that.map
          });
          AMap.event.addListener(autocomplete, "select", function(e) {
            //TODO 针对选中的poi实现自己的功能
            // if (e.poi.address.length > 0) {
            placeSearch.setCity(e.poi.adcode);
            placeSearch.search(e.poi.name);
          });
        });
      });
    },
    infowindow(a, b) {
      this.getinfo(b);
      this.infoWindow = new AMap.InfoWindow({
        content: this.info.join("")
      });
      this.infoWindow.open(this.map, a);
    },
    getinfo(b) {
      this.info = [];
      this.info.push(
        '<div style="color:#fff;width:150px;overflow:hidden;text-align:center"><span>' +
          this.baseinfo[b].name +
          "</span></div>"
      );
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
          width: 49%;
          background: url('../assets/new/bg1.png') no-repeat;
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

  .temperature-rain {
    flex: 1.2;
    height: 160px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    min-width: 400px;

    .airs {
      position: relative;
      flex: 1;
      margin-top: 10px;

      .monitor-data {
        background-color: #26374c;

        .lunbo-wrapper {
          height: 160px;
          padding-top: 6px;
          box-sizing: border-box;

          .ivu-carousel-arrow {
            background-color: rgba(0, 0, 0, 0.2);
          }

          .ivu-carousel-arrow:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
        }

        .monitor-base {
          height: 40px;
          margin-left: 10px;
          color: #fff;
          font-size: 20px;
          line-height: 20px;

          span {
            display: inline-block;
            height: 40px;
            line-height: 40px;
            width: 55%;
            text-align: center;
          }

          .update-time {
            width: 45%;
            float: right;
            font-size: 16px;

            span {
              width: 100%;
              height: 20px;
              line-height: 20px;
            }
          }
        }

        .monitor-item:nth-of-type(1) {
          margin-top: 12px;
        }

        .monitor-item {
          padding: 0 10px;
          text-align: left;
          display: flex;
          height: 40px;
          color: #43cfe0;

          .monitor-message {
            display: inline-block;
            width: 97px;
            text-align: right;
          }

          div {
            flex: 1;
            line-height: 40px;
            height: 40px;

            img {
              margin-right: 5px;
            }
          }

          div:nth-of-type(1) {
            margin-right: 10px;
          }
        }
      }

      .temperature-map, .rain-map {
        height: 150px;
      }

      .rain {
        margin-top: 46px;
      }

      .message-wrapper {
        display: flex;
        height: 45px;
        color: #ffffff;
        font-size: 16px;
        padding-left: 10px;
        box-sizing: border-box;
        background-color: #26374C;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08235294117647057);

        div {
          padding-left: 10px;
          box-sizing: border-box;
        }
      }
    }

    .airs:nth-of-type(1) {
      margin-top: 0px;
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

.pie-text {
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  color: #B1FDF5;
  width: 100%;
  top: 40%;
  height: 100%;
  align-content: center;
  text-align: center;
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

