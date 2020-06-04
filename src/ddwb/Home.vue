<template>
  <div class="base base-container">
    <headers></headers>
    <div class="base-wrapper home-height">
      <div class="company-info">
        <div class="bg-item-box left-height">
          <div class="desc">
            <div class="title">平台简介</div>
          </div>
          <div class="company">
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">企业名称</span>
              <span class="color-main">{{subjectInfo.name}}</span>
            </div>
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">基地位置</span>
              <span class="color-main">{{subjectInfo.provinceName}}{{subjectInfo.cityName}}{{subjectInfo.areaName}}{{subjectInfo.addr}}</span>
            </div>
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">主要品种</span>
              <span class="color-main">{{subjectInfo.breedName}}</span>
            </div>
            <p class="company-desc">
            {{subjectInfo.intro}}
            </p>
          </div>
        </div>
        <!-- 图表 -->
        <div class="bg-item-box left-height" style="margin:20px 0;">
          <div class="desc">
            <div class="title">麦冬历史价格走势</div>
          </div>
          <div class="company">
            <div class="rain-map" ref="leftLine" style="height:200px"></div>
          </div>
        </div>
        <div class="bg-item-box left-height" style="padding-top:10px;">
          <div class="desc pos">
            <div class="title">基地监控</div>
            <Cascader @on-change="selectAddress" class="select" :data="addresss"></Cascader>
          </div>
          <div class="monitor" id="monitor" style="text-align:center;">
            <video id="myVideo" width="90%" height="80%" ref="myPlayer" controls :src="address"></video>
          </div>
        </div>
      </div>
      <div class="map-message">
        <div class="map-wrapper">
          <!-- <div class="desc">
            <div class="title">数据地图</div>
            <div class="descs">The data map</div>
          </div>-->
          <div class="map" ref="mapChart">
            <!-- <div class="changebut" style="background-color:#7e43aa;" @click="changemap">切换卫星地图</div> -->
            <!-- <div class="point">
              <div class="base-point">
                <span class="icon1" style="background-color:red" ref="all" @click="all"></span>
                <span class="text">全部</span>
              </div>
              <div class="base-point">
                <span class="icon1" style="background-color:#fe5858" ref="hz" @click="hezuo1"></span>
                <span class="text">合作基地</span>
              </div>
              <div class="earth-point">
                <span class="icon1" style="background-color:#dc9748" ref="hzs" @click="hezuoshe1"></span>
                <span class="text">合作社</span>
              </div>
              <div class="area-point">
                <span class="icon1" style="background-color:#289CF4" ref="jt" @click="jiatin1"></span>
                <span class="text">家庭农场</span>
              </div>
              <div class="farmar-point">
                <span class="icon1" style="background-color:#fe58fe" ref="jm" @click="jinmi1"></span>
                <span class="text">紧密合作基地</span>
              </div>
            </div>-->
            <div class="map-title-box display-flex align-items-center justify-content-flex-center">
              <div class="map-title-item">
                <div class="map-title-item-num">123123</div>
                <div>已服务面积（亩）</div>
              </div>
              <div class="map-title-item" style="margin:0 20px">
                <div class="map-title-item-num">1223</div>
                <div>麦冬年产量（吨）</div>
              </div>
              <div class="map-title-item">
                <div class="map-title-item-num">3123</div>
                <div>麦冬年产值（万元）</div>
              </div>
            </div>
            <div>
              <div class="map-item-box" style="top:120px">
                <img src="../assets/new/icon_positioning.png" alt />
                <span>全部农户：123213</span>
              </div>
              <div class="map-item-box" style="top:190px">
                <img src="../assets/new/icon_positioning-dai.png" alt />
                <span>全部农户：123213</span>
              </div>
              <div class="map-item-box" style="top:260px">
                <img src="../assets/new/icon_positioning-ding.png" alt />
                <span>全部农户：123213</span>
              </div>
              <div class="map-item-box" style="top:330px">
                <img src="../assets/new/icon_positioning-bao.png" alt />
                <span>全部农户：123213</span>
              </div>
            </div>
            <div class="map-footer-box display-flex align-items-center justify-content-flex-center">
              <div>农户</div>
              <span class="btn-margin"></span>
              <div>基地</div>
            </div>
          </div>
        </div>
        <div class="base-message" :style="{'height':baseMessageHeight}">
          <div class="base display-flex justify-content-flex-justify">
            <!-- <baseMap></baseMap> -->
            <div class="item-bg-y">
              <div class="title">操作工单</div>
              <ul
                style="position:relative;list-style:none;background:rgba(255,255,255,0.2);font-size:13px;"
              >
                <li class="base-item display-flex justify-content-flex-center">
                  <span style="text-align: left;display:inline-block; width: 80px;color: #fff;">姓名</span>
                  <span
                    style="text-align: center;display:inline-block; width: 130px;color: #fff;"
                  >时间</span>
                  <span
                    style="color: #fff;display:inline-block; width: 100px;text-align: center;"
                  >农事操作</span>
                  <span
                    style="color: #fff;display:inline-block; width: 100px;text-align: center;"
                  >农事投入</span>
                </li>
              </ul>
              <div class="base-info" id="base-info">
                <ul id="base-ul1" style="position:relative; top:30px">
                  <li class="base-item" v-for="(item,index) in this.baseDatas" :key="index">
                    <span
                      style="text-align: left;display:inline-block; width: 80px;color: #0AFBE2"
                    >张三</span>
                    <span
                      style="text-align: left;display:inline-block; width: 130px;color: #fff"
                    >2012-12-12 11:11:11</span>
                    <span
                      style="color: #0AFBE2;display:inline-block; width: 100px;text-align: center;"
                    >农事操作</span>
                    <span
                      style="color: #fff;display:inline-block; width: 100px;text-align: center;"
                    >农事投入</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 地图下柱形图 -->
            <div class="item-bg-y">
              <div class="title">年度有机肥用量</div>
              <div style="height:100%" class="temperature-rain">
                <div class="airs air-temperature" style="height:100%" v-if="show">
                   <div class="polygonal">
                      <div class="temperature-map" ref="polygonal"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 底部轮播 -->
        <div class="base-wrapper wrapper-box" :style="{'height':baseMessageHeight}">
          <div class="temperature-rain" style="margin-top:15px;">
            <div class="monitor-data" style="position:relative">
               <div class="wrpper-title">气象监测</div>
              <Carousel class="lunbo-wrapper" radius-dot>
                <CarouselItem v-for="i in 5" :key="i">
                  <div class="display-flex justify-content-flex-justify">
                    <div></div>
                    <div class="color-fff">羊基地</div>
                  </div>
                  <div class="display-flex justify-content-flex-justify">
                    <div v-for="(item,n) in warpperList" :key="n" style="text-align:center">
                    <div class="color-main" style="font-weight:bold;font-size:18px">{{item.num}}</div>
                    <img style="margin-bottom:5px" class="wrapper-img" src="../assets/new/pic3.png" alt />
                    <div>
                      <i :class="['iconfont','color-main',item.icon]"></i>
                      <span style="color:#fff;margin-left:5px;">{{item.name}}</span>
                    </div>
                  </div>
                  </div>
                </CarouselItem>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="temperature-rain" style="margin-left:30px;">
       <div class="bg-item-box left-height left-height-right" style="max-height:250px !important;padding:15px 0;">
          <div class="desc">
            <div class="title">采购订单</div>
          </div>
          <div>
           <div class="display-flex justify-content-flex-justify right-box-padding">
                    <div v-for="(item,n) in rightList" :key="n" style="text-align:center">
                    <div class="color-main" style="font-weight:bold;font-size:18px">{{item.num}}</div>
                    <img style="margin-bottom:5px" src="../assets/new/pic3.png" alt />
                    <div style="color:#fff;">
                     {{item.name}}
                    </div>
                  </div>
                  </div>
          </div>
        </div>
        <div class="bg-item-box left-height left-height-right" style="max-height:250px !important;padding:15px 0;margin-top:20px;">
          <div class="desc">
            <div class="title">保险服务</div>
          </div>
          <div>
           <div class="display-flex justify-content-flex-justify right-box-padding">
                    <div v-for="(item,n) in rightList" :key="n" style="text-align:center">
                    <div class="color-main right-bx-bg" style="font-weight:bold;font-size:18px">{{item.num}}</div>
                   
                    <div style="color:#fff;">
                     {{item.name}}
                    </div>
                  </div>
                  </div>
          </div>
        </div>
        <!-- 贷款服务-饼图 -->
        <div class="bg-item-box left-height left-height-right" style="max-height:250px !important;padding:15px 0;margin-top:20px;">
          <div class="desc">
            <div class="title">贷款服务</div>
          </div>
          <div style="position:relative;top:-40px" ref="pieBox">
            <img src="../assets/new/pic6.png" :style="{'top':pieTop,'left':pieLeft}"
              ref="pieImg" class="pie-bg">
           <div style="height:180px"  ref="loansChart"></div>
           <!-- 饼图说明 -->
           <div class="pie-color-box">
           
            <div class="display-flex align-items-center">
              <div class="pie-color-1"></div>
              <span>农资贷</span>
           </div>
           <div class="display-flex align-items-center">
              <div class="pie-color-2"></div>
              <span>订单贷</span>
           </div>
           <div class="display-flex align-items-center">
              <div class="pie-color-3"></div>
              <span>劳务贷</span>
           </div>
           </div>
          </div>
        </div>
        <!-- 地图下柱形图 -->
            <div class="item-bg-y bg-item-box left-height-right"  style="padding:15px 0;margin-top:20px;">
              <div class="last-title">监测服务</div>
              <div style="height:85%">
                <div class="airs air-temperature" style="height:100%">
                  <echartslLine></echartslLine>
                </div>
              </div>
            </div>
      </div>
    </div>
    <!-- <Foot style="margin:0px;"/> -->
  </div>
</template>
<script>
import headers from "@/components/header/header";
import baseMap from "@/components/baseMap/baseMap";
import MapLoader from "@/utils/loadMap.js";

import echartslLine from "@/components/echartslLine/echartslLine";

import Foot from "@/components/layouts/GlobalFooter.vue";
import chartsType from "../assets/js/chartsType.js";
import roll from "../assets/js/roll.js";
import axios from "axios";
import {getSubjectInfo,getAnnualFertilizer} from "../api/apiYZX"
const dataAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "home",
  components: {
    headers,
    baseMap,
    echartslLine,
    Foot
  },
  data() {
    return {
      messages: [],
      mapDatas: [],
      pieTop:0,
      pieLeft:0,
      weixin: false,
      show:false,
      showColorDatas: [
        {
          name: "石安镇",
          value: 1
        },
        {
          name: "芦溪镇",
          value: 1
        },
        {
          name: "刘营镇",
          value: 1
        },
        {
          name: "永新镇",
          value: 1
        },
        {
          name: "高堰乡",
          value: 1
        },
        {
          name: "中太镇",
          value: 1
        },
        {
          name: "灵兴镇",
          value: 2
        },
        {
          name: "争胜镇",
          value: 2
        },
        {
          name: "里程镇",
          value: 2
        },
        {
          name: "老马镇",
          value: 2
        },
        {
          name: "光辉镇",
          value: 2
        },
        {
          name: "花园镇",
          value: 2
        },
        {
          name: "永明镇",
          value: 2
        }
      ],
      plotDatas: [],
      mapChart: "",
      baseMessageHeight:'50px',
      baseLength: 0,
      plotLength: 0,
      totalArea: 0,
      option: {},
      addresss: [],
      baseinfo: [],
      address: "",
      curLock: false,
      serviceData: [],
      date: "",
      hours: "",
      metalDatas: [40, 200, 90, 140, 130, 0.2, 20, 0.4],
      baseDatas: [
        { itemStyle: { color: "#975FE5" } },
        { itemStyle: { color: "#FE8463" } },
        { itemStyle: { color: "#36CBCB" } },
        { itemStyle: { color: "#E55F76" } },
        { itemStyle: { color: "#3AA1FF" } },
        { itemStyle: { color: "#5FE583" } },
        { itemStyle: { color: "#5F95E5" } },
        { itemStyle: { color: "#E5AF5F" } },
        { itemStyle: { color: "#36CBCB" } },
        { itemStyle: { color: "#4ECB73" } },
        { itemStyle: { color: "#FBD437" } },
        { itemStyle: { color: "#975FE5" } },
        { itemStyle: { color: "#FE8463" } },
        { itemStyle: { color: "#36CBCB" } },
        { itemStyle: { color: "#E55F76" } },
        { itemStyle: { color: "#3AA1FF" } },
        { itemStyle: { color: "#5FE583" } },
        { itemStyle: { color: "#5F95E5" } },
        { itemStyle: { color: "#E5AF5F" } },
        { itemStyle: { color: "#36CBCB" } },
        { itemStyle: { color: "#4ECB73" } },
        { itemStyle: { color: "#FBD437" } },
        { itemStyle: { color: "#975FE5" } },
        { itemStyle: { color: "#FE8463" } },
        { itemStyle: { color: "#36CBCB" } },
        { itemStyle: { color: "#E55F76" } },
        { itemStyle: { color: "#3AA1FF" } },
        { itemStyle: { color: "#5FE583" } },
        { itemStyle: { color: "#5F95E5" } },
        { itemStyle: { color: "#E5AF5F" } },
        { itemStyle: { color: "#36CBCB" } },
        { itemStyle: { color: "#4ECB73" } },
        { itemStyle: { color: "#FBD437" } },
        { itemStyle: { color: "#975FE5" } },
        { itemStyle: { color: "#FE8463" } },
        { itemStyle: { color: "#36CBCB" } },
        { itemStyle: { color: "#E55F76" } },
        { itemStyle: { color: "#3AA1FF" } },
        { itemStyle: { color: "#5FE583" } },
        { itemStyle: { color: "#5F95E5" } },
        { itemStyle: { color: "#E5AF5F" } }
      ],
      tip: "",
      markers: [],
      hezuoshe: [],
      jiatingnongchang: [],
      jinmihezuo: [],
      hezuosheL: "",
      jiatingnongchangL: "",
      jinmihezuoL: "",
      hezuoshe2: [],
      jiatingnongchang2: [],
      jinmihezuo2: [],
      blockinfo: [],
      polygonss: [],
      infoWindow: null,
      weather1: {},
      weather2: "",
      weather: "",
      allbasearea: 0,
      warpperList: [
        { num: "22", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" }
      ],
      rightList:[{ num: "22", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" }],
      mapIcon:require("../assets/new/icon_positioning.png"),
      subjectInfo:{},//主体信息
      annualFertilizer:{}//年度有机肥用量
    };
  },
  created() {
    axios
      .get("/tq", {
        params: { from: "5", lat: 31.1, lng: 105.06, needMoreDay: 1 },
        headers: { Authorization: "APPCODE 912f4ba38a394870aed1d60aca9a34fb" }
      })
      .then(res => {
        if (res.status === 200) {
          this.weather = res.data.showapi_res_body.now.temperature;
          this.weather1 = res.data.showapi_res_body.now;
          this.weather2 = res.data.showapi_res_body.now.sd.slice(0, 2);
        }
      });
    let params =
      "appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53";
    axios
      .post("https://open.ys7.com/api/lapp/token/get", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        if (res.data.code == 200) {
          let token =
            "accessToken=" +
            res.data.data.accessToken +
            "&pageStart=0&pageSize=50";
          window.localStorage.setItem("token", token);
        }
      });
    // }
    this._getAddress();
    if (this.$route.query.time) {
      let that = this;
      window.addEventListener("done1", function() {
        that.all();
      });
    }
  },
  mounted() {
    if (this.baseScroll) {
      clearInterval(this.baseScroll.timer);
    }

  // 设置饼图背景图
    let pieBox = this.$refs.pieBox.offsetHeight;
    let pieBoxW = this.$refs.pieBox.offsetWidth;
    this.pieTop = (pieBox - 156) / 2 + "px";
    this.pieLeft = (pieBoxW - 156) / 2 + "px";
     // 地图下折线图高度
 let height = document.body.clientHeight;
 let map=height*0.55
     this.$refs.mapChart.style.height = map+ "px";
    let mapHeight = this.$refs.mapChart.offsetHeight;
     let m=height*0.15
    this.baseMessageHeight = (height - parseFloat(mapHeight) - m-30)/2 + "px";
let that = this;
   setTimeout(function(){
     that.show=true
      // 这里要重绘柱形图--------------------柱形图组件传参或者用方法
   },1000)
    // this._drawRainMap();
    
    this._drawLine(); //左侧折线图
    // this._getJson()
    this._drawCityMap()
    that.allbasearea = 0;
    axios.get("json/base_info.json").then(res => {
      for (let i = 0; i < res.data.result.length; i++) {
        that.allbasearea += res.data.result[i].area;
        that.baseDatas[i].name = res.data.result[i].name;
        that.baseDatas[i].value = res.data.result[i].area;
        if (that.baseScroll) {
          console.log(that.baseScroll);
          clearInterval(that.baseScroll.timer);
        }
        that.$nextTick(() => {
          if (that.baseScroll) {
            clearInterval(that.baseScroll.timer);
          }
          that.baseScroll = new roll.Roll(
            "base-info",
            "base-ul1",
            "base-ul2",
            -1060
          );
        });
      }
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
        axios.get("json/blockinfo.json").then(res => {
          that.blockinfo = res.data.result;
          // that.addBlockOnMap();
        });
        that.baseinfo = [];
        that.baseLength = 0;
        for (let i = 0; i < res.data.result.length; i++) {
          if (res.data.result[i].type == 3) {
            that.totalArea += res.data.result[i].area;

            that.mapDatas.push({
              name: res.data.result[i].name,
              value: [res.data.result[i].lng, res.data.result[i].lat],
              id: res.data.result[i].baseId
            });
            that.baseLength++;
            that.baseinfo.push(res.data.result[i]);
            let lng = res.data.result[i].lng;
            let lat = res.data.result[i].lat;
            let marker = new AMap.Marker({
              position: new AMap.LngLat(lng, lat),
              offset: new AMap.Pixel(-10, -10),
              icon:that.mapIcon         
            });
            that.markers.push(marker);
            that.map.add(marker);
            marker.on("click", function(e) {
              that.$router.push({
                name: "company",
                query: { baseId: Number(res.data.result[i].baseId) }
              });
            });
            marker.on("mousemove", function(e) {
              marker.setRadius(18);
              marker.setOptions({ fillOpacity: 0.5 });
              that.tip = res.data.result[i].name;
            });
            marker.on("mouseout", function(e) {
              marker.setRadius(5);
              marker.setOptions({ fillOpacity: 1 });
              that.tip = "";
            });
          }
        }
      });

    });
    this._dramLoansChart()
    this.getSubjectInfo()
    this.getAnnualFertilizer()
  },
  methods: {
    getSubjectInfo(){//获取主体信息
      getSubjectInfo({organId:1}).then(res=>{
        this.subjectInfo=res.data
      })
    },
    getAnnualFertilizer(){//获取年度有机肥
      getAnnualFertilizer({organId:1}).then(res=>{  
        let arr=res.data
         let Xdata=arr.map(item=>{
          
           return item.year
         })    
         let data1=arr.map(item=>{//有机
           return item['organicFertilizer']
         })
          let data2=arr.map(item=>{//无机
           return item['inorganicFertilizer']
         })
         
         let _this=this
          setTimeout(function(){
            let polygonalChart = _this.$echarts.init(_this.$refs.polygonal);
            _this._drawPolygonal(polygonalChart,Xdata,data1,data2)
          },1000)
      })
    },
    _drawPolygonal(polygonalChart,tdataAxis,datas,datas2) {
            var option = chartsType.charts(tdataAxis,datas,'用量（亩/kg）','bar','有机肥','#14E6C4','x');
            option.legend = {
                left: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
            option.series.push({
                name: '普通肥',
                barWidth:20,
                data:datas2,
                type: 'bar',
                itemStyle: {
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#F39474'
                    },
                    normal:{
                            color: '#F39474'
                    }
                },
            })
            polygonalChart.setOption(option);   
    },
    removepoint() {
      this.map.remove(this.markers);
      this.map.remove(this.hezuoshe);
      this.map.remove(this.jiatingnongchang);
      this.map.remove(this.jinmihezuo);
    },
    all() {
      if (this.infoWindow != null) {
        this.infoWindow.close();
      }
      this.removepoint();
      let that = this;
      that.markers = [];
      that.hezuoshe = [];
      that.jiatingnongchang = [];
      that.jinmihezuo = [];
      for (let i = 0; i < that.baseinfo.length; i++) {
        let lng = that.baseinfo[i].lng;
        let lat = that.baseinfo[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#fe5858",
          strokeColor: "#fe5858",
          center: new AMap.LngLat(lng, lat)
        });
        that.markers.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "company",
            query: { baseId: Number(that.baseinfo[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.baseinfo[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
      for (let i = 0; i < that.hezuoshe2.length; i++) {
        let lng = that.hezuoshe2[i].lng;
        let lat = that.hezuoshe2[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#dc9748",
          strokeColor: "#dc9748",
          center: new AMap.LngLat(lng, lat)
        });
        that.hezuoshe.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "base",
            query: { baseId: Number(that.hezuoshe2[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.hezuoshe2[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
      for (let i = 0; i < that.jiatingnongchang2.length; i++) {
        let lng = that.jiatingnongchang2[i].lng;
        let lat = that.jiatingnongchang2[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#289CF4",
          strokeColor: "#289CF4",
          center: new AMap.LngLat(lng, lat)
        });
        that.jiatingnongchang.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "base",
            query: { baseId: Number(that.jiatingnongchang2[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.jiatingnongchang2[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
      for (let i = 0; i < that.jinmihezuo2.length; i++) {
        let lng = that.jinmihezuo2[i].lng;
        let lat = that.jinmihezuo2[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#fe58fe",
          strokeColor: "#fe58fe",
          center: new AMap.LngLat(lng, lat)
        });
        that.jinmihezuo.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "base",
            query: { baseId: Number(that.jinmihezuo2[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.jinmihezuo2[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
    },
    hezuo1() {
      if (this.infoWindow != null) {
        this.infoWindow.close();
      }
      this.removepoint();
      let that = this;
      that.markers = [];
      for (let i = 0; i < that.baseinfo.length; i++) {
        let lng = that.baseinfo[i].lng;
        let lat = that.baseinfo[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#fe5858",
          strokeColor: "#fe5858",
          center: new AMap.LngLat(lng, lat)
        });
        that.markers.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "base",
            query: { baseId: Number(that.baseinfo[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.baseinfo[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
    },
    hezuoshe1() {
      if (this.infoWindow != null) {
        this.infoWindow.close();
      }
      this.removepoint();
      //  this.map.add(this.hezuoshe);
      let that = this;
      that.hezuoshe = [];
      for (let i = 0; i < that.hezuoshe2.length; i++) {
        let lng = that.hezuoshe2[i].lng;
        let lat = that.hezuoshe2[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#dc9748",
          strokeColor: "#dc9748",
          center: new AMap.LngLat(lng, lat)
        });
        that.hezuoshe.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "company",
            query: { baseId: Number(that.hezuoshe2[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.hezuoshe2[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
    },
    jiatin1() {
      if (this.infoWindow != null) {
        this.infoWindow.close();
      }
      this.removepoint();
      //  this.map.add(this.jiatingnongchang);
      let that = this;
      that.jiatingnongchang = [];
      for (let i = 0; i < that.jiatingnongchang2.length; i++) {
        let lng = that.jiatingnongchang2[i].lng;
        let lat = that.jiatingnongchang2[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#289CF4",
          strokeColor: "#289CF4",
          center: new AMap.LngLat(lng, lat)
        });
        that.jiatingnongchang.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "base",
            query: { baseId: Number(that.jiatingnongchang2[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.jiatingnongchang2[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
    },
    jinmi1() {
      if (this.infoWindow != null) {
        this.infoWindow.close();
      }
      this.removepoint();
      //  this.map.add(this.jinmihezuo);
      let that = this;
      that.jinmihezuo = [];
      for (let i = 0; i < that.jinmihezuo2.length; i++) {
        let lng = that.jinmihezuo2[i].lng;
        let lat = that.jinmihezuo2[i].lat;
        let marker = new AMap.CircleMarker({
          radius: 5,
          topWhenClick: true,
          zIndex: 999,
          fillColor: "#fe58fe",
          strokeColor: "#fe58fe",
          center: new AMap.LngLat(lng, lat)
        });
        that.jinmihezuo.push(marker);
        that.map.add(marker);
        marker.on("click", function(e) {
          that.$router.push({
            name: "base",
            query: { baseId: Number(that.jinmihezuo2[i].baseId) }
          });
        });
        marker.on("mousemove", function(e) {
          marker.setRadius(18);
          marker.setOptions({ fillOpacity: 0.5 });
          that.tip = that.jinmihezuo2[i].name;
        });
        marker.on("mouseout", function(e) {
          marker.setRadius(5);
          marker.setOptions({ fillOpacity: 1 });
          that.tip = "";
        });
      }
    },
    changemap() {
      if (this.weixin) {
        this.map.remove(this.map.getLayers());
        let googleLayer = new AMap.TileLayer({
          getTileUrl:
            "http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile"
        }); //定义谷歌卫星切片图层

        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity: 0
        }); //定义一个路网图层
        var layer = new AMap.TileLayer();
        this.map.setLayers([googleLayer, roadNetLayer, layer]);
        this.weixin = false;
      } else {
        this.map.remove(this.map.getLayers());
        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity: 0
        }); //定义一个路网图层
        let layer = new AMap.TileLayer();
        this.map.setLayers([roadNetLayer, layer]);
        this.weixin = true;
      }
    },
    _getAddress(token) {
      var date = new Date().toString().split(" ");
      var month = new Date().getMonth() + 1;
      var str = "";
      this.date = str + date[3] + "-" + month + "-" + date[2];
      this.hours = date[4];
      let params =
        "appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53";
      let curToken = token ? token : window.localStorage.token;
      axios
        .post("https://open.ys7.com/api/lapp/live/video/list", curToken, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            if (res.data.data && res.data.data.length) {
              console.log(res.data.data);
              this.addresss.push({
                label: res.data.data[3].deviceName,
                value: res.data.data[3].deviceSerial,
                children: []
              });
              for (let i = 3; i < res.data.data.length; i++) {
                for (let j = 0; j < this.addresss.length; j++) {
                  if (this.addresss[j].label === res.data.data[i].deviceName) {
                    this.curLock = true;
                    this.addresss[j].children.push({
                      label: "通道" + res.data.data[i].channelNo,
                      value: res.data.data[i].liveAddress,
                      name: res.data.data[i].deviceName
                    });
                  }
                }
                if (!this.curLock) {
                  this.addresss.push({
                    label: res.data.data[i].deviceName,
                    value: res.data.data[i].deviceSerial,
                    name: res.data.data[i].deviceName,
                    children: [
                      {
                        label: "通道" + res.data.data[i].channelNo,
                        value: res.data.data[i].liveAddress,
                        name: res.data.data[i].deviceName
                      }
                    ]
                  });
                }
                this.curLock = false;
              }
            }
            console.log(this.addresss);
          } else if (res.data.code == 10002) {
            axios
              .post("https://open.ys7.com/api/lapp/token/get", params, {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              })
              .then(res => {
                if (res.data.code == 200) {
                  console.log(res);
                  token =
                    "accessToken=" +
                    res.data.data.accessToken +
                    "&pageStart=0&pageSize=50";
                  window.localStorage.setItem("token", token);
                  this._getAddress(token);
                }
              });
          } else if (res.data.code == 10001) {
            axios
              .post("https://open.ys7.com/api/lapp/token/get", params, {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              })
              .then(res => {
                if (res.data.code == 200) {
                  console.log(res);
                  token =
                    "accessToken=" +
                    res.data.data.accessToken +
                    "&pageStart=0&pageSize=50";
                  window.localStorage.setItem("token", token);
                  this._getAddress(token);
                }
              });
          }
          this.$nextTick(() => {
            myVideo.addEventListener("play", () => {
              this.player.on();
            });
          });
        });
    },
    _dramLoansChart(){
       //左侧折线图
      let rainChart = this.$echarts.init(this.$refs.loansChart);
      var option = chartsType.charts(
        ["镍", "锌", "铜", "总铬", "铅", "镉", "总砷", "总汞"],
        this.metalDatas,
        "万元/吨",
        "pie",
        "",
        "#0AFBE2",
        ""
      );
      console.info('info',option)
      rainChart.setOption(option);
    },
    _drawLine() {
      //左侧折线图
      let rainChart = this.$echarts.init(this.$refs.leftLine);
      var option = chartsType.charts(
        ["镍", "锌", "铜", "总铬", "铅", "镉", "总砷", "总汞"],
        this.metalDatas,
        "万元/吨",
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
      // option.series.push({
      //   name: "国家标准允许最大值",
      //   barWidth: 20,
      //   barGap: document.body.clientWidth > 2000 ? "80%" : "30%",
      //   type: "bar",
      //   data: [50, 250, 100, 200, 300, 0.3, 30, 0.5],
      //   itemStyle: {
      //     normal: {
      //       color: "#4ECB73",
      //       "margin-left": 20
      //     }
      //   }
      // });
      rainChart.setOption(option);
    },
    _drawRainMap() {
      let rainChart = this.$echarts.init(this.$refs.rainMap);
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
      //  this.$refs.mapChart.style.height = "520px";
      let that = this;
      MapLoader().then(AMap => {
        that.map = new AMap.Map(this.$refs.mapChart, {
          center: [105.013664, 31.206397],
          zooms: [10, 18]
          // layers:[googleLayer,roadNetLayer,layer], //设置图层
          // viewMode:'3D',
        });

        AMap.plugin("AMap.DistrictSearch", function() {
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
              fillOpacity: 1
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
          // var bounds = that.map.getBounds();
          // that.map.setLimitBounds(bounds);
          that.map.on("complete", function() {
            console.log("地图加载完成！");
            var myEvent = new CustomEvent("done1", {});
            if (window.dispatchEvent) {
              window.dispatchEvent(myEvent);
            } else {
              window.fireEvent(myEvent);
            }
          });
        });
      });
    },
    _setOption() {
      this.option = {
        tooltip: {
          trigger: "item",
          formatter: function() {
            return "";
          }
        },
        legend: {
          bottom: 20,
          left: 20,
          orient: "vertical",
          textStyle: {
            color: "#fff"
          },
          selectedMode: true
        },
        visualMap: {
          show: false,
          min: 0,
          max: 2,
          left: "left",
          top: "top",
          text: ["高", "低"], // 文本，默认为数值文本
          textStyle: {
            color: "#fff"
          },
          calculable: true,
          seriesIndex: [1],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            //99CC99
            color: ["#00b583", "#009a6a"] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
          }
        },
        //地图坐标系组建
        geo: {
          show: true,
          map: "santai",
          aspectScale: 1,
          label: {
            normal: {
              show: false,
              textStyle: {
                color: "#fff",
                fontSize: 16
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: "#000",
                fontSize: 12
              }
            }
          },
          //地图颜色配置
          itemStyle: {
            normal: {
              //区域和区域线条颜色（无数据时候）
              areaColor: "#baaea0",
              borderColor: "#eee"
            },
            emphasis: {
              areaColor: "#fff",
              textStyle: {
                color: "#000"
              }
            }
          },
          zoom: 1.3
        },
        //数据展示
        series: [
          //合作社坐标点，黄点
          {
            name: "基地",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: this.mapDatas,
            symbolSize: function(val) {
              return 12;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "top",
                show: false
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: "white",
                  fontSize: 16,
                  fontWeight: 700
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#fe5858"
              }
            }
            // zlevel: 1
          },
          {
            type: "map",
            map: "santai",
            geoIndex: 0,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: false,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#000"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: false,
            data: this.showColorDatas
          },
          {
            name: "合作社",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {
              return 12;
            },
            data: [
              {
                name: "合作社",
                value: [104.90298, 31.2453],
                id: 1
              }
            ],
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "top",
                show: false
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: "white",
                  fontSize: 16,
                  fontWeight: 700
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#dc9748"
              }
            }
            // zlevel: 0
          },
          {
            name: "家庭农场",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {
              return 12;
            },
            data: [
              {
                name: "家庭农场",
                value: [104.98298, 31.1653],
                id: 1
              }
            ],
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "top",
                show: false
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: "white",
                  fontSize: 16,
                  fontWeight: 700
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#289CF4"
              }
            }
            // zlevel: 0
          },
          {
            name: "农户",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {
              return 12;
            },
            data: [
              {
                name: "农户",
                value: [104.93298, 31.2053],
                id: 1
              }
            ],
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "top",
                show: false
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: "white",
                  fontSize: 16,
                  fontWeight: 700
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#fe58fe"
              }
            }
            // zlevel: 0
          }
        ]
      };
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
    },
    selectAddress(datas, selectedData) {
      this.all();
      if (selectedData[0].label.indexOf("老马") != -1) {
        this.infowindow(this.markers[7].getCenter(), 7);
        //this.map.setFitView([ this.markers[7] ]);
      }
      if (selectedData[0].label.indexOf("老马") == -1) {
        this.infowindow(this.markers[8].getCenter(), 8);
        //this.map.setFitView([ this.markers[8] ]);
      }
      if (datas.length != 0) {
        this.address = datas[1];
        this.$nextTick(() => {
          this.player = new EZUIPlayer("myVideo");
        });
      }
      // else {
      //   monitor.removeChild(monitor.firstElementChild)
      //   let dom = document.createElement('video')
      //   dom.id = 'myVideo'
      //   dom.style.width = '100%'
      //   dom.style.height = '100%'
      //   dom.src = this.address
      //   dom.controls = true
      //   console.dir(dom)
      //   monitor.appendChild(dom)
      // }
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

  .base-message {
    margin-top: 10px !important;
  }

  .map-footer {
    height: 38px !important;
    line-height: 1.5 !important;
  }
}

.bg-item-box {
  width: 100%;
  background: url('../assets/new/bg1.png') no-repeat;
}
.home-height{
  height: calc(100vh - 80px);
}
.base-wrapper {
  margin: 20px 0 0 0;
  display: flex;
  padding:0 20px;
  .desc {
    height: 45px;
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
      height: 90%;

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
    margin-left: 30px;
    min-width: 400px;
    .map-wrapper {
      width: 100%;
      border-radius: 6px;
      background: url('../assets/new/bg1.png') no-repeat;

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
      height:100%;

      .base {
       height:100%;

        .base-map {
          
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
          height: 48%;
          display: inline-block;
          overflow: hidden;
          text-align: center;
          line-height:32px;
          .base-item {
            height: 32px;
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
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    min-width: 400px;
    height: calc(100vh - 80px);
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
.left-height-right{
  height:22%;
}
.base-container {
  height: 100%;
  overflow: hidden;
  background: url('../assets/new/bg.jpg') no-repeat;
  background-size: 100% 100%;
}

.map-item-box {
  position: absolute;
  left: 15px;
  background: url('../assets/new/pic2.png') no-repeat;
  background-size: 100% 100%;
  z-index: 111;
  padding: 10px 10px 6px 10px;

  img {
    width: 30px;
    height: auto;
  }

  span {
    color: #fff;
  }
}

.map-title-box {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 111;
  color: #fff;

  >div {
    width: 20%;
    background: rgba(0, 14, 30, 0.3);
  }
}

.map-title-item {
  padding: 10px;
  text-align: center;

  .map-title-item-num {
    font-size: 35px;
    color: #0AFBE2;
  }
}

.map-footer-box {
  position: absolute;
  bottom: 30px;
  width: 100%;
  z-index: 111;
  color: #fff;

  >div {
    width: 120px;
    padding: 10px 0;
    text-align: center;
    background: url('../assets/new/button_set.png') no-repeat;
    background-size: 100% 100%;
  }

  .btn-margin {
    width: 20px;
    display: inline-block;
  }
}

.wrapper-box {
  background: url('../assets/new/bg1.png') no-repeat;
   padding:0 15px;
}
.ivu-carousel-dots-inside{
 top:-10px !important;
}
.wrpper-title{
  position:absolute;
  top:-6px;
  left:0px;
  color:#b1fef6;
  font-size:16px;
  z-index:111;
}
.right-bx-bg{
   background: url('../assets/new/pic5.png') no-repeat;
   background-size:100% 100%;
   text-align:center;
   line-height:100px;
   width:100px;
   height:100px;
}
.right-box-padding{
  padding-left:15px;
}
.last-title{
  font-size:16px;
  color:#b1fef6;
  padding-left:15px;
}
.pie-bg{
  position:absolute;
  left: 139px;
  top: 22px;
  width: 156px;
  height:auto;
}
.air-temperature{
  height:100%;
}
.map-message{
  height: calc(100vh - 80px) !important;
}
.pie-color-box{
  position:absolute;
  bottom:20px;
  right:20px;
  line-height:35px;
  color:#fff;
  .pie-color-1{
    background:#5DC1FA;
    width:20px;
    height:10px;
    margin-right:5px;
    border-radius:2px;
  }
  .pie-color-2{
    background:#7C89EB;
    width:20px;
    margin-right:5px;
    height:10px;
    border-radius:2px;
  }
  .pie-color-3{
    background:#14E6C4;
    width:18px;
    margin-right:5px;
    height:8px;
    border-radius:2px;
  }
}
.wrapper-img{
  width:60px;
  height:45px;
}
.polygonal{
    height:100%;
}
.temperature-map{
    height:100% !important;
    div{
        height:100% !important;
    }
}
</style>

