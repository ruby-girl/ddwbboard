<template>
  <div class="base base-container">
    <headers></headers>
    <div class="black-btn" @click="toBlack">返回</div>
    <div class="base-wrapper">
      <div class="company-info">
        <div class="bg-item-box left-height" style="padding-bottom:10px">
          <div class="desc">
            <div class="title">基础信息</div>
          </div>
          <div class="company">
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">农户名称</span>
              <span class="color-main">{{userInfo.name}}</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">农户年龄</span>
              <span class="color-main" v-if="userInfo.age>0">{{userInfo.age}}岁</span>
              <span class="color-main" v-else>暂无提供</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">地块数量</span>
              <span class="color-main">{{userInfo.landParcelCount}}块</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff">{{userInfo.intro}}</span>
            </div>
            <!-- <img class="head-img" src="../assets/new/pic6.png" alt /> -->
          </div>
        </div>
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title">综合收益曲线</div>
          <div class="base-progress-box" style="position:relative;">
            <!-- <polygonal-reversal ref="polyHtml"/> -->
            <div ref="leftLine" style="height:100%"></div>
          </div>
        </div>
        <!-- 左侧饼图 -->
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title">
            <div>农资使用计划</div>
            <div class="display-flex justify-content-flex-justify" style="position:relative;">
              <div style="position:relative;width:50%;top:-20px;" ref="pieBoxLeft">
                <img
                  src="../assets/new/pic6.png"
                  class="pie-bg"
                  :style="{'top':pieTopLeft,'left':pieLeftLeft}"
                  ref="pieImg"
                />
                <div style="height:180px" ref="loansChart1"></div>
              </div>
              <div style="position:relative;width:50%;top:-20px;" ref="pieBoxRight">
                <img
                  src="../assets/new/pic6.png"
                  class="pie-bg"
                  :style="{'top':pieTopRight,'left':pieLeftRight}"
                  ref="pieImg"
                />
                <div style="height:180px" ref="loansChart2"></div>
              </div>
              <!-- 饼图说明 -->
              <div class="pie-color-box">
                <span style="margin-right:15px">
                  <span class="pie-color-2"></span>
                  <span>有机肥</span>
                </span>
                <span class>
                  <span class="pie-color-3"></span>
                  <span>复合肥</span>
                </span>
              </div>
              <!-- 显示计划使用 实际使用 -->
              <span style="display: inline-block;width:100%;position:absolute;bottom:30px;">
                <span class="pie-title">计划使用</span>
                <span class="pie-title">实际使用</span>
              </span>
            </div>
          </div>
        </div>
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title">种植费用</div>
          <div style="height:80%">
            <div class="airs air-temperature" style="height:100%">
              <polygonal :userId="userOrganIdSet"></polygonal>
            </div>
          </div>
        </div>
      </div>
      <!-- 地图 -->
      <div class="map-message">
        <div class="map-wrapper">
          <div class="map" ref="mapChart" id="mapChart">
            <div class="map-title-box display-flex align-items-center justify-content-flex-center">
              <div class="map-title-item">
                <div class="map-title-item-num">{{mapInfo.totalAcreage||''}}</div>
                <div>地块总面积（亩）</div>
              </div>
              <div class="map-title-item" style="margin:0 20px">
                <div class="map-title-item-num">{{mapInfo.totalYield||''}}</div>
                <div>预估麦冬年产量（kg）</div>
              </div>
              <div class="map-title-item">
                <div class="map-title-item-num">{{mapInfo.totalProduction||''}}</div>
                <div>预估麦冬年产值（元）</div>
              </div>
            
            </div>
               <!-- 基地环境数据 -->
            <div class="mould-box">
                <div class="display-flex justify-content-flex-justify"><span>大气温度</span><span class="color-yellow">{{LandLastRecord.airTemperature}}</span></div>
                 <div class="display-flex justify-content-flex-justify"><span>大气湿度</span><span class="color-yellow">{{LandLastRecord.airHumidity}}</span></div>
                 <div class="display-flex justify-content-flex-justify"><span>CO2浓度</span><span class="color-yellow">{{LandLastRecord.co2value}}</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>大气压强</span><span class="color-yellow">{{LandLastRecord.airPressure}}</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>光照强度</span><span class="color-yellow">{{LandLastRecord.illIntensity}}</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>风速</span><span class="color-yellow">{{LandLastRecord.windSpeed}}</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>风向</span><span class="color-yellow">{{LandLastRecord.windDirection}}</span></div>
                  <div class="mould-small-txt">信息来源：{{LandLastRecord.source}}</div>
                  <div class="mould-small-txt">更新时间：{{LandLastRecord.monitorTime}}</div>
            </div>
          </div>
        </div>
        <div class="base-message">
          <div
            class="base display-flex justify-content-flex-justify"
            ref="baseMessage"
            :style="{'height':baseMessageHeight}"
          >
            <!-- <baseMap></baseMap> -->
            <div class="item-bg-y">
              <div class="last-title display-flex justify-content-flex-justify">
                <div>土壤环境</div>
                <div>
                  <div class="display-flex">
                    <div
                      @click="usersoilHumidity(1)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="usersoilTemperature(2)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==2?true:false}"
                    >温度</div>
                    <div
                      @click="usersoilEc(3)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==3?true:false}"
                    >电导率</div>
                    <div
                      @click="usersoilPH(4)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==4?true:false}"
                    >PH值</div>
                  </div>
                </div>
              </div>
              <div class="rain-map" ref="bottomLine1" style="height:80%"></div>
            </div>
            <!-- 地图下柱形图 -->
            <div class="item-bg-y">
              <div class="last-title display-flex justify-content-flex-justify" style="padding-left:0;">
                <div>空气环境</div>
                <div>
                  <div class="display-flex">
                    <div
                      @click="userhumidity(1)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="usertemperature(2)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==2?true:false}"
                    >温度</div>
                    <div
                      style="width:55px"
                      @click="userco2value(3)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==3?true:false}"
                    >CO2浓度</div>
                    <div
                      @click="userpressure(4)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==4?true:false}"
                    >压强</div>
                    <div
                      @click="userpm25value(5)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==5?true:false}"
                    >PM2.5</div>
                    <div
                      @click="userillIntensity(6)"
                      :class="{'base-tab':true,'base-tab-action-small':airTab==6?true:false}"
                    >光照强度</div>
                    <div
                      @click="userrainfall(7)"
                      :class="{'base-tab':true,'base-tab-action-small':airTab==7?true:false}"
                    >降水量</div>
                  </div>
                </div>
              </div>
              <div class="rain-map" ref="bottomLine2" style="height:80%"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="company-info" style="margin-left:30px">
        <div
          class="bg-item-box left-height scroll-box"
          style="padding-bottom:10px"
          ref="rightTopHeight"
        >
          <div
            class="last-title display-flex justify-content-flex-justify"
            style="margin-bottom: 10px;"
          >
            <div>金融保险数据</div>
            <div>
              <div class="display-flex">
                <div
                  @click="financeOrder(1)"
                  :class="{'base-tab-small':true,'base-tab-action-small':financeTab==1?true:false}"
                >订单</div>
                <div
                  @click="financeDk(2)"
                  :class="{'base-tab-small':true,'base-tab-action-small':financeTab==2?true:false}"
                >贷款</div>
                <div
                  style="width:49px"
                  @click="financeBx(3)"
                  :class="{'base-tab-small':true,'base-tab-action-small':financeTab==3?true:false}"
                >保险</div>
              </div>
            </div>
          </div>
          <ul
            style="position:relative;list-style:none;background:rgba(255,255,255,0.2);font-size:13px;line-height:30px;"
          >
            <li class="base-item display-flex justify-content-flex-center">
              <span style="text-align: left;display:inline-block; width: 80px;color: #fff;">甲方</span>
              <span style="text-align: center;display:inline-block; width: 100px;color: #fff;">乙方</span>
              <span style="color: #fff;display:inline-block; width: 130px;text-align: center;">订单时间</span>
              <span
                style="color: #fff;display:inline-block; width: 100px;text-align: center;"
              >交付面积（亩）</span>
            </li>
          </ul>
          <div class="base-info" id="base-info">
            <ul id="base-ul1" style="position:relative; top:0px" v-if="financeList.length>0">
              <li class="base-item" v-for="(item,index) in financeList" :key="index">
                <span
                  style="text-align: left;display:inline-block; width: 80px;color: #0AFBE2"
                >{{item.jiaName}}</span>
                <span
                  style="text-align:center;display:inline-block; width: 100px;color: #fff"
                >{{item.yiName}}</span>
                <span
                  style="color: #0AFBE2;display:inline-block; width: 130px;text-align: center;"
                >{{item.time}}</span>
                <span
                  style="color: #fff;display:inline-block; width: 100px;text-align: center;"
                >{{item.forests}}</span>
              </li>
            </ul>
            <ul v-else>
              <li class="base-item" style="text-align:center;color:#fff;">
                暂无数据
              </li>
            </ul>
          </div>
        </div>
        <div
          class="item-bg-y bg-item-box left-height left-height-bottom"
          :style="{'height':lastBoxHeight}"
        >
          <div class="last-title">地块工单</div>
          <ul
            style="position:relative;list-style:none;background:rgba(255,255,255,0.2);font-size:13px;line-height:30px;"
          >
            <li class="base-item display-flex justify-content-flex-center">
              <span style="text-align: left;display:inline-block; width: 80px;color: #fff;">操作时间</span>
              <span style="text-align: center;display:inline-block; width: 130px;color: #fff;">农事操作</span>
              <span style="color: #fff;display:inline-block; width: 100px;text-align: center;">投入品</span>
              <span style="color: #fff;display:inline-block; width: 100px;text-align: center;">操作照片</span>
            </li>
          </ul>
          <div class="base-info" id="base-info" style="height:85%">
            <ul id="base-ul2" style="position:relative; top:0px" v-if="orderList.length>0">
              <li class="base-item" v-for="(item,index) in orderList" :key="index">
                <span style="text-align: left;display:inline-block; width: 80px;color: #0AFBE2">张三</span>
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
            <ul v-else>
              <li class="base-item" style="text-align:center;color:#fff;">
                暂无数据
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import headers from "@/components/header/header";
import baseMap from "@/components/baseMap/baseMap";
import MapLoader from "@/utils/loadMap.js";
import polygonal from "@/components/polygonal/polygonal";
import echartslLine from "@/components/echartslLine/echartslLine";
import circleProgress from "@/components/circle-progress";
import Footer from "@/components/layouts/Footer";
import chartsType from "../assets/js/chartsType.js";
import roll from "../assets/js/roll.js";
import axios from "axios";
import {
  getBaseInfo,
  userco2value,
  userhumidity,
  userillIntensity,
  userpressure,
  getLandLastRecord,
  userpm25value,
  rainfall,
  usertemperature,
  usersoilEc,
  usersoilHumidity,
  usersoilPH,
  userrainfall,
  usersoilTemperature,
  financeBx,
  financeDk,
  financeOrder,
  financeProportion,
  getOrganUserInfo,
  getOrganUserFarmWorkRecordInfo,
  getOrganuserMapInfo
} from "../api/apiYZX";
const dataAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "home",
  components: {
    headers,
    baseMap,
    polygonal,
    echartslLine,
    Footer,
    circleProgress
  },
  data() {
    return {
      baseMessageHeight: 0,
      pieTopRight: 0,
      pieLeftRight: 0,
      pieTopLeft: 0,
      pieLeftLeft: 0,
      tab: 1,
      financeTab: 1,
      airTab: 1,
      soliTab: 1,
      messages: [],
      mapDatas: [],
      orderList:[],
      weixin: false,
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
      nowDate:'',
      plotDatas: [],
      mapChart: "",
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
      rightList: [
        { num: "22", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" },
        { num: "33", name: "空气湿度", icon: "iconkongqishidu" }
      ],
      mapIcon: require("../assets/new/icon_positioning.png"),
      lastBoxHeight: 100,
      userOrganId: "",
      financeList: [], //金融滚动数据
      financeScroll: {},
      userInfo:{},
      mapInfo:{},
      userOrganIdSet:'',
      LandLastRecord:{}
    };
  },
  created() {
    this.userOrganId =55
     var date = new Date().toString().split(" ");
      var month = new Date().getMonth() + 1;
      var str = "";
      this.nowDate = str + date[3] + "/" + month + "/" + date[2] + " " + date[4];
     this.userOrganIdSet = this.$route.query.userOrganId;
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
    this._drawCityMap();
    // this._drawRainMap();
    // 设置饼图背景图-左
    let pieBoxLeft = this.$refs.pieBoxLeft.offsetHeight;
    let pieBoxLeftW = this.$refs.pieBoxLeft.offsetWidth;
    this.pieTopLeft = (pieBoxLeft - 100) / 2 + "px"; //高度
    this.pieLeftLeft = (pieBoxLeftW - 100) / 2 + "px"; //宽度
    // 设置饼图背景图-右
    let pieBox = this.$refs.pieBoxRight.offsetHeight;
    let pieBoxW = this.$refs.pieBoxRight.offsetWidth;
    this.pieTopRight = (pieBox - 100) / 2 + "px";
    this.pieLeftRight = (pieBoxW - 100) / 2 + "px";
    // 最后一个方块高度
    this.getOrganuserMapInfo()
    let height = document.body.clientHeight;
    let heightThree = height * 0.75;
    this.$refs.rightTopHeight.style.height = height - heightThree + "px";
    let rightTopHeight = this.$refs.rightTopHeight.offsetHeight;
    let ms = height * 0.15;
    this.lastBoxHeight = height - parseFloat(rightTopHeight) - ms + "px";

    // 地图下折线图高度
    this.$refs.mapChart.style.height = height - 400 + "px";
    let mapHeight = this.$refs.mapChart.offsetHeight;
    let m = height-mapHeight-160;
   
    this.baseMessageHeight =m + "px";
    // setTimeout(function() {
    //   that._drawLine(); //左侧折线图

    // }, 1000);
    // this._getJson()
    let that=this
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
      });
    });
    this._dramLoansChart();
    // this.getBaeseInfo()//获取基地详情
    this.userhumidity(1);
    this.usersoilHumidity(1);
    this.financeOrder(1);
    this.financeProportion()
    this.getOrganUserInfo()
    this.getOrganUserFarmWorkRecordInfo()
    
  },
  methods: {
    getLandLastRecord(id){//气象
      getLandLastRecord({landparcelId:id}).then(res=>{
          if(res.data.source=='公共数据库'){
           res.data.airTemperature=res.data.airTemperature+'℃'
            res.data.co2value='无'
            res.data.airPressure='无'
            res.data.illIntensity='无'       
         }else{
           res.data.airTemperature=res.data.airTemperature+'℃'
           res.data.airHumidity=res.data.airHumidity+'%'
            res.data.co2value=res.data.co2value+'ppm'
            res.data.airPressure=res.data.airPressure+'kPa'
            res.data.illIntensity=res.data.illIntensity+'Lux'
            res.data.windSpeed=res.data.windSpeed+'m/s'
            res.data.windDirection=res.data.windDirection+'°'  
         }
          this.LandLastRecord=res.data
      })
    },
    getOrganuserMapInfo(){
      getOrganuserMapInfo({ organUserId:this.userOrganIdSet }).then(res=>{
        this.mapInfo=res.data
        
        let that=this
        setTimeout(function(){
          that.addBlockOnMap(res.data.landParcels);       
       },1000)
      })
    },
    getOrganUserFarmWorkRecordInfo(){
      getOrganUserFarmWorkRecordInfo({ organUserId: this.userOrganId }).then(res=>{
        this.orderList=res.data
      })
    },
    getOrganUserInfo(){
      getOrganUserInfo({ organUserId: this.userOrganIdSet }).then(res=>{
        this.userInfo=res.data
      })
    },
    toBlack(){
      this.$router.back(-1)
    },
    financeProportion(){//金融占比 || 综合收益曲线
      let rainChart = this.$echarts.init(this.$refs.leftLine, null, {
        devicePixelRatio: 2.5
      });
      var option = chartsType.charts(
        ["2016", "2017", "2018", "2019", "2020"],
        [12000, 13000, 14500, 14800, 16000],
        "元",
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

      // financeProportion({ userOrganId: this.userOrganId }).then(res=>{
      //   // let arr=[res.data.order_price_tatol,res.data.dk_amount_tatol,res.data.bx_amount_tatol]
      //   let arr=[35,36,32]
      //   this.$refs.polyHtml._drawPolygonal(arr)
      // })
    },
    financeBx(n) {
      this.financeTab = n;
      let _this = this;
      financeBx({ userOrganId: this.userOrganId }).then(res => {
        this.financeList = [];
        if (_this.financeScroll) {
          clearInterval(_this.financeScroll.timer);
        }
        res.data.forEach((item, i) => {
          let obj = {
            jiaName: res.data[i].insurance_company,
            yiName: res.data[i].name,
            time: res.data[i].order_date,
            forests: res.data[i].bx_forests
          };
          this.financeList.push(obj);
        });
        let num = this.financeList.length * 30;
        this.financeScroll = new roll.Roll(
          "base-info",
          "base-ul1",
          "base-ul2",
          -num
        );
      });
    },
    financeDk(n) {
      this.financeTab = n;
      let _this = this;
      financeDk({ userOrganId: this.userOrganId }).then(res => {
        this.financeList = [];
        if (_this.financeScroll) {
          clearInterval(_this.financeScroll.timer);
        }
        res.data.forEach((item, i) => {
          let obj = {
            jiaName: res.data[i].lend_company,
            yiName: res.data[i].name,
            time: res.data[i].order_date,
            forests: res.data[i].dk_amount
          };
          this.financeList.push(obj);
        });
        let num = this.financeList.length * 30;
        this.financeScroll = new roll.Roll(
          "base-info",
          "base-ul1",
          "base-ul2",
          -num
        );
      });
    },
    financeOrder(n) {
      let _this = this;
      this.financeTab = n;
      financeOrder({ userOrganId: this.userOrganId }).then(res => {
        this.financeList = [];
        if (_this.financeScroll) {
          clearInterval(_this.financeScroll.timer);
        }
        res.data.forEach((item, i) => {
          let obj = {
            jiaName: res.data[i].partya,
            yiName: res.data[i].name,
            time: res.data[i].order_date,
            forests: res.data[i].order_forests
          };
          this.financeList.push(obj);
        });
        let num = this.financeList.length * 30;
        this.financeScroll = new roll.Roll(
          "base-info",
          "base-ul1",
          "base-ul2",
          -num
        );
      });
    },
    setUnit(n){
      let unit;
       if(n==1){
        unit='%'
      }else if(n==2){
        unit='℃'
      }else if(n==3){
        unit='S/m'
      }else{
        unit=''
      }
      return unit
    },
    setUnit2(n){
      let unit;
       if(n==1){
        unit='%'
      }else if(n==2){
        unit='℃'
      }else if(n==3){//二氧化碳单位
        unit='ppm'
      }else if(n==4){
        unit='Pa'
      }else if(n==5){//pm2.5
        unit='μg/m3'
      }else if(n==6){//光照强度
        unit='Lux'
      }else if(n==7){//降水量
        unit='mm'
      }
      return unit
    },
    userhumidity(n) {
      this.airTab = n;
      userhumidity({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].air_humidity);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    usertemperature(n) {
      this.airTab = n;
      usertemperature({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].air_temperature);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    userco2value(n) {
      this.airTab = n;
      userco2value({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].co2value);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    userpressure(n) {
      this.airTab = n;
      userpressure({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].air_pressure);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    userpm25value(n) {
      this.airTab = n;
      userpm25value({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].pm25value);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    userillIntensity(n) {
      this.airTab = n;
      userillIntensity({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].ill_intensity);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    userrainfall(n) {
      this.airTab = n;
      userrainfall({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].rainfall);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    usersoilHumidity(n) {
      this.soliTab = n;
      usersoilHumidity({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_humidity);
        }
        this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
    usersoilTemperature(n) {
      this.soliTab = n;
      usersoilTemperature({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_temperature);
        }
       this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
    usersoilEc(n) {
      this.soliTab = n;
      usersoilEc({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_ec);
        }
        this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
    usersoilPH(n) {
      this.soliTab = n;
      usersoilPH({ userOrganId: this.userOrganId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_ph);
        }
        this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
     addBlockOnMap(remarks) {
       this.getLandLastRecord(remarks[0].id)
      //地块的第一个点增加Masker
       this.saveListMarker=[]
      this.polygons = [];
      for (let i = 0; i < remarks.length; i++) {
        let remark = remarks[i].mapAddr;
        if (remark != undefined && remark != null && remark.trim() != "") {
          let remarkJson2 = eval("(" + remark + ")");
          let newPath = [];
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
          that.infowindow(e, i);
        });
      }
    },
    removepoint() {
      this.map.remove(this.markers);
      this.map.remove(this.hezuoshe);
      this.map.remove(this.jiatingnongchang);
      this.map.remove(this.jinmihezuo);
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
        });
    },
    _dramLoansChart() {
      //左侧饼图
      let rainChart = this.$echarts.init(this.$refs.loansChart1,null,{devicePixelRatio: 2.5});
      let rainChart2 = this.$echarts.init(this.$refs.loansChart2,null,{devicePixelRatio: 2.5});
      var option = chartsType.charts(
        ["镍", "锌", "铜", "总铬", "铅", "镉", "总砷", "总汞"],
        this.metalDatas,
        "万元/吨",
        "pie",
        "",
        "#0AFBE2",
        "",
        "1"
      );
      option.series[0].data = [
        { value: 310, name: "105kg", itemStyle: { color: "#7C89EB" } },
        { value: 105, name: "310kg", itemStyle: { color: "#14E6C4" } }
      ];
      option.legend.show = true;
      rainChart.setOption(option);
      rainChart2.setOption(option);
    },
    _drawLine2(xData, xTitle,unit) {
      //底部右侧折线图
      let rainChart = this.$echarts.init(this.$refs.bottomLine2,null,{devicePixelRatio: 2.5});
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
    _drawLine(xData, xTitle,unit) {
      //底部左侧折线图
      //左侧折线图
      let rainChart = this.$echarts.init(this.$refs.bottomLine1,null,{devicePixelRatio: 2.5});
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
      let rainChart = this.$echarts.init(this.$refs.rainMap,null,{devicePixelRatio: 2.5});
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
      // let that = this;
      // MapLoader().then(AMap => {
      //   that.map = new AMap.Map(this.$refs.mapChart, {
      //     center: [105.013664, 31.206397],
      //     zooms: [10, 10]
      //   });

      //   AMap.plugin("AMap.DistrictSearch", function() {
      //     var district = new AMap.DistrictSearch({
      //       extensions: "all",
      //       subdistrict: 0
      //     });
      //     district.search("三台县", function(status, result) {
      //       // 外多边形坐标数组和内多边形坐标数组
      //       var bounds = result.districtList[0].boundaries;
      //       var outer = [
      //         new AMap.LngLat(-360, 90, true),
      //         new AMap.LngLat(-360, -90, true),
      //         new AMap.LngLat(360, -90, true),
      //         new AMap.LngLat(360, 90, true)
      //       ];
      //       var pathArray = [outer];
      //       pathArray.push.apply(pathArray, bounds);
      //       var polygon = new AMap.Polygon({
      //         path: pathArray,
      //         strokeColor: "#0AFBE2",
      //         strokeWeight: 1,
      //         fillColor: "#26374C",
      //         fillOpacity: 0.5
      //       });
      //       polygon.setPath(pathArray);
      //       that.map.add(polygon);
      //       var polygons = [];
      //       if (bounds) {
      //         for (var i = 0, l = bounds.length; i < l; i++) {
      //           //生成行政区划polygon
      //           var polygon1 = new AMap.Polygon({
      //             map: that.map,
      //             strokeWeight: 1,
      //             path: bounds[i],
      //             fillOpacity: 0,
      //             fillColor: "#CCF3FF",
      //             strokeColor: "#CC66CC"
      //           });
      //           polygons.push(polygon1);
      //         }
      //         // 地图自适应
      //         that.map.setFitView(polygons);
      //       }
      //     });
      //     that.map.on("complete", function() {
      //       console.log("地图加载完成！");
      //       var myEvent = new CustomEvent("done1", {});
      //       if (window.dispatchEvent) {
      //         window.dispatchEvent(myEvent);
      //       } else {
      //         window.fireEvent(myEvent);
      //       }
      //     });
      //   });
      // });
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
              placeSearch.setCity(e.poi.adcode)
            placeSearch.search(e.poi.name);
            // } else {
            //   if(!e.poi.location){
            //     that.$message.warning("无法定位，我们将进行模糊定位！");
            //     placeSearch.search(e.poi.district);
            //   }else{
            //     let aa = [];
            //   aa.push(e.poi.location.lng);
            //   aa.push(e.poi.location.lat);
            //   that.map.setCenter(aa);
            //   }
            // }
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
  background: url('../assets/new/bg1.png') no-repeat;
}

.base-wrapper {
  margin: 20px 0 0 0;
  display: flex;
  padding: 0 20px;
  height: calc(100vh - 80px);

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
      position: relative;
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
    height: 160px;
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

      .base {
        height: calc(100vh - 665px);

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
  height: 22%;
}

.left-height-top {
  height: 35%;
}

.left-height-bottom {
  padding: 15px 0;
  margin-top: 20px;
  background: url('../assets/new/bg1.png') repeat;
}

.base-container {
  height: 100%;
  overflow: hidden;
  background: url('../assets/new/bg.jpg') no-repeat;
  background-size: 100% 100%;
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
  width: 100px;
  height: auto;
}

.progress {
  width: 50%;
  height: 15px;
  background: rgba(255, 255, 255, 0.2);
  margin: 8px 15px 0 15px;
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
  height: calc(100% - 30px);

}

.base-progress-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  color: #fff;
  line-height: 26px;
  margin-bottom: 20px;
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
  width: 44  px;
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

.head-img {
  width: 90px !important;
  height: 90px !important;
  right: 20px;
  top: -16px;
  border-radius: 10px;
  position: absolute;
  z-index: 111;
}

.scroll-box {
  overflow-y: hidden;
}

.base-info {
  width: 100%;
  height: 80%;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  margin-top: 10px;
  line-height: 32px;
}

.pie-color-box {
  position: absolute;
  top: -15px;
  right: 20px;
  font-size: 14px;
  line-height: 35px;
  color: #fff;

  .pie-color-2 {
    background: #7C89EB;
    display: inline-block;
    width: 20px;
    margin-right: 5px;
    height: 10px;
    border-radius: 2px;
  }

  .pie-color-3 {
    display: inline-block;
    background: #14E6C4;
    width: 18px;
    margin-right: 5px;
    height: 8px;
    border-radius: 2px;
  }
}

.pie-title {
  display: inline-block;
  width: 50%;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.black-btn{
  width:60px;
height:30px;
line-height:30px;
text-align:center;
border:1px solid rgba(177, 254, 246, 1);
opacity:0.5;
border-radius:4px;
color:#fff;
position:absolute;
top:30px;
left:50px;
cursor:pointer 
}
.mould-box{
  position:absolute;
  z-index:1111;
  bottom:15px;
  right:50px;
  width:270px;
height:316px;
line-height:30px;
font-size:16px;
border-radius:4px;
color:#fff;
background:rgba(1,51,57,0.8);
padding:15px;
}
.color-yellow{
  color:#EBD804;
}
.mould-small-txt{
  font-size:13px;
  text-align:right;
}
</style>

