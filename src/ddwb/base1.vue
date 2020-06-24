<template>
  <div class="base base-container">
    <headers></headers>
    <div class="black-btn" @click="toBlack">返回</div>
    <div class="base-wrapper">
      <div class="company-info">
        <div class="bg-item-box left-height-base-info" style="padding-bottom:10px">
          <div class="desc">
            <div class="title">平台简介</div>
          </div>
          <div class="company">
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">基地名称</span>
              <span class="color-fff">{{baseinfoRes.name}}</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">基地负责人</span>
              <span class="color-fff">{{baseinfoRes.leaderName}}</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">基地地址</span>
              <span
              v-if="baseinfoRes.provinceName||baseinfoRes.cityName||baseinfoRes.areaName"
                class="color-fff"
              >{{baseinfoRes.provinceName}}{{baseinfoRes.cityName}}{{baseinfoRes.areaName}}</span>
              <span class="color-fff" v-else>用户暂未添加</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">基地类型</span>
              <span class="color-fff">{{baseinfoRes.typeName}}</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">农户数量</span>
              <span class="color-fff">{{baseinfoRes.batchCount}}户</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">地块数量</span>
              <span class="color-fff">{{baseinfoRes.landParcelCount}}块</span>
            </div>
            <!-- 基地图片 -->
            <div class="display-flex">
              <div class="base-info-img" style=";marginRight:1%">

              </div>
              <div class="base-info-img">

              </div>
            </div>
          </div>
        </div>
        <div class="item-bg-y bg-item-box" style="padding:15px 0;margin-top:20px;
        ">
          <div class="last-title">工单执行进度</div>
          <div class="base-progress-box">
            <div class="base-info" style="margin-top:6px;">
              <ul style="position:relative;list-style-type: none;">
                <li class="base-progress-item">
                  <div>2020年麦冬规范化种植计划（种植批次数量：{{progress.totalCount}}个）</div>
                  <div class="display-flex">
                    <div class="progress">
                      <span class="progressing" v-bind:style="'width:' + (progress.executeCount/progress.totalCount)*100 +'%' "></span>
                    </div>
                    <!-- <div>75%</div> -->
                    <div style="margin-left:15px">{{progress.executeCount}}/{{progress.totalCount}}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 左侧下柱形图 -->
        <div class="item-bg-y bg-item-box left-height-last" style="padding:15px 0;margin-top:20px;">
          <div class="last-title display-flex justify-content-flex-justify">
            <div>土壤检测平均值</div>
            <div>
              <div class="display-flex">
                <div
                  @click="tabFunc(1)"
                  :class="{'base-tab':true,'base-tab-action':tab==1?true:false}"
                >土壤检测</div>
                <div
                  @click="tabFunc(2)"
                  :class="{'base-tab':true,'base-tab-action':tab==2?true:false}"
                >空气检测</div>
                <div
                  @click="tabFunc(3)"
                  :class="{'base-tab':true,'base-tab-action':tab==3?true:false}"
                >水源检测</div>
              </div>
            </div>
          </div>
          <div style="height:90%">
            <div class="airs air-temperature" style="height:100%">
              <echartslLine ref="detection"></echartslLine>
            </div>
          </div>
        </div>
      </div>
      <div class="map-message">
        <div class="map-wrapper">
          <div class="map" ref="mapChart" id="mapChart">
            <div class="map-title-box display-flex align-items-center justify-content-flex-center">
              <div class="map-title-item">
                <div class="map-title-item-num">{{mapInfo.totalAcreage||''}}</div>
                <div>基地面积（亩）</div>
              </div>
               <div class="map-title-item" style="margin:0 20px">
                <div class="map-title-item-num">{{(mapInfo.totalYield*0.001).toFixed(2)||''}}</div>
                <div>预估麦冬年产量（吨）</div>
              </div>
              <div class="map-title-item">
                <div class="map-title-item-num">{{(mapInfo.totalProduction*0.0001).toFixed(2)||''}}</div>
                <div>预估麦冬年产值（万元）</div>
              </div>
            </div>
            <!-- 基地环境数据 -->
            <div class="mould-box">
                <div class="display-flex justify-content-flex-justify"><span>大气温度</span><span class="color-yellow">26℃</span></div>
                 <div class="display-flex justify-content-flex-justify"><span>大气湿度</span><span class="color-yellow">46%</span></div>
                 <div class="display-flex justify-content-flex-justify"><span>CO2浓度</span><span class="color-yellow">503ppm</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>大气压强</span><span class="color-yellow">101kPa</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>光照强度</span><span class="color-yellow">1147Lux</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>风速</span><span class="color-yellow">30m/s</span></div>
                  <div class="display-flex justify-content-flex-justify"><span>风向</span><span class="color-yellow">25°</span></div>
                  <div class="mould-small-txt">信息来源：智能环境检测基站</div>
                  <div class="mould-small-txt">更新时间：{{nowDate}}</div>
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
                      @click="soilHumidity(1)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="soilTemperature(2)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==2?true:false}"
                    >温度</div>
                    <div
                      @click="soilEc(3)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==3?true:false}"
                    >电导率</div>
                    <div
                      @click="soilPH(4)"
                      :class="{'base-tab-small':true,'base-tab-action-small':soliTab==4?true:false}"
                    >PH值</div>
                  </div>
                </div>
              </div>
              <div class="rain-map" ref="bottomLine1" style="height:80%"></div>
            </div>
            <!-- 地图下柱形图 -->
            <div class="item-bg-y">
              <div class="last-title display-flex justify-content-flex-justify">
                <div>空气环境</div>
                <div>
                  <div class="display-flex">
                    <div
                      @click="humidity(1)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="temperature(2)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==2?true:false}"
                    >温度</div>
                    <div
                      style="width:55px"
                      @click="co2value(3)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==3?true:false}"
                    >CO2浓度</div>
                    <div
                      @click="pressure(4)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==4?true:false}"
                    >压强</div>
                    <div
                      @click="pm25value(5)"
                      :class="{'base-tab-small':true,'base-tab-action-small':airTab==5?true:false}"
                    >PM2.5</div>
                    <div
                      @click="illIntensity(6)"
                      :class="{'base-tab':true,'base-tab-action-small':airTab==6?true:false}"
                    >光照强度</div>
                    <div
                      @click="rainfall(7)"
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
              <div>
                {{totalAcreage}}
              </div>
              <div style="text-align:center">亩</div>
            </div>
            <!-- <div class="pie-text" :style="{'top':pieTxtTop,'left':pieTxtLeft}">亩</div> -->
            <div style="height:180px" ref="loansChart"></div>
            <!-- 饼图说明 -->
            <div class="pie-color-box">
              <div class="display-flex align-items-center">
                <div class="pie-color-2"></div>
                <span>有订单</span>
              </div>
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
    <!-- <Foot style="margin:0px;"/> -->
  </div>
</template>
<script>
import headers from "@/components/header/header";
import baseMap from "@/components/baseMap/baseMap";
import MapLoader from "@/utils/loadMap.js";
import polygonalTwo from "@/components/polygonal/polygonalTwoX";
import echartslLine from "@/components/echartslLine/echartslLine";
import circleProgress from "@/components/circle-progress";
import Foot from "@/components/layouts/GlobalFooter.vue";
import chartsType from "../assets/js/chartsType.js";
import roll from "../assets/js/roll.js";
import axios from "axios";
import {
  getBaseInfo,
  co2value,
  humidity,
  illIntensity,
  pressure,
  pm25value,
  rainfall,
  temperature,
  soilEc,
  soilHumidity,
  soilPH,
  soilTemperature,
  getBaseInsuranceTj,
  getBaseLoanTj,
  getBaseOrderTj,
  getBaseMonitorTj,
  totalTj,
  getFarmWorkProgress,
  getBaseMapInfoTotalTj
} from "../api/apiYZX";
const dataAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "home",
  components: {
    headers,
    baseMap,
    polygonalTwo,
    echartslLine,
    Foot,
    circleProgress
  },
  data() {
    return {
      baseMessageHeight: 0,
      pieTop: 0,
      pieLeft: 0,
      tab: 1,
      airTab: 1,
      soliTab: 1,
      messages: [],
      mapDatas: [],
      nowDate:'',
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
      twoCircleWidth:130,
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
      pieTxtLeft: 0,
      pieTxtTop: 0,
      totalAcreage: 0, //地图面积
      bx_forests: 0, //原形进度条面积
      bx_count: 0, //原形进图条人数
      dataRight: [],
      dataLeft: [],
      baseinfoRes: {},
      totalProduction: 0,
      totalYield: 0,
      pics:[],
      progress:{},
      mapInfo:{},
      baseIdSet:''
    };
  },
  created() {
    this.baseId =12
     var date = new Date().toString().split(" ");
      var month = new Date().getMonth() + 1;
      var str = "";
      this.nowDate = str + date[3] + "/" + month + "/" + date[2] + " " + date[4];
    
     this.baseIdSet = this.$route.query.baseId;
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
    // if (!window.localStorage.token) {
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
    // if (this.baseScroll) {
    //   clearInterval(this.baseScroll.timer);
    // }
    this._drawCityMap();
     this.getBaseInsuranceTj();
    // this._drawRainMap();
    // 设置饼图背景图
    let pieBox = this.$refs.pieBox.offsetHeight;
    let pieBoxW = this.$refs.pieBox.offsetWidth;
    this.pieTop = (pieBox - 156) / 2 + "px";
    this.pieTxtTop = (pieBox - 22) / 2 + "px";
    this.pieTxtLeft = (pieBoxW - 36) / 2 + "px";
    this.pieLeft = (pieBoxW - 156) / 2 + "px";
    // 计算保险概率
     this.twoCircleWidth=pieBox-20
    // 地图下折线图高度
    let height = document.body.clientHeight;
    this.$refs.mapChart.style.height = height - 400 + "px";
    let mapHeight = this.$refs.mapChart.offsetHeight;
    let m = height-mapHeight-160;
   
    this.baseMessageHeight =m + "px";
    let that = this;

    that.allbasearea = 0;
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

    this.humidity(1); //底部折线图
    this.soilHumidity(1);
    this.getBaseInfo();
   this.getFarmWorkProgress()
    this.getBaseLoanTj();
    this.detection(1)
    this.getBaseMapInfoTotalTj()
    setTimeout(function(){
       that.totalTj();
    },1000)
       if (that.baseScroll) {
          clearInterval(that.baseScroll.timer)
        }
        that.$nextTick(() => {
          if (that.baseScroll) {
            clearInterval(that.baseScroll.timer)
          }
          let height=document.getElementById('base-ul1').offsetHeight;
          that.baseScroll = new roll.Roll('base-info', 'base-ul1', 'base-ul2', -height)
        })
  },
  methods: {
    getBaseMapInfoTotalTj(){
      getBaseMapInfoTotalTj({ baseId: this.baseId }).then(res=>{
        this.totalAcreage = res.data.totalAcreage;
        this.totalProduction = res.data.totalProduction; //地图上显示的产量
        this.totalYield = res.data.totalYield; //地图上显示年产值  
        this.mapInfo=res.data
      })
    },
    getFarmWorkProgress(){//执行进度
     getFarmWorkProgress({ baseId: this.baseIdSet }).then(res=>{
        this.progress=res.data
      })
    },
    detection(n){//检测柱形图
      let title,arr;
      if(n==1){
        title='土壤检测';
        arr=['100','200','300','900']
         this.$refs.detection._drawPolygonal(title,arr,'检测量(mg/kg)')
      }else if(n==2){
        title='空气检测'
        arr=['50','120','270','860']
         this.$refs.detection._drawPolygonal(title,arr,'检测量(mg/kg)')
      }else{
         title='土源检测'
         arr=['120','270','450','960']
          this.$refs.detection._drawPolygonal(title,arr,'检测量(mg/kg)')
      }
     
    },
    toBlack() {
      this.$router.back(-1);
    },
    getBaseInfo() {
      //获取基地详情
      getBaseInfo({ baseId: this.baseIdSet }).then(res => {
        this.baseinfoRes = res.data;
        this.pics=this.baseinfoRes.basePics
       console.info('11111111111111111111111111',this.pics)
       
      });
    },
    totalTj() {
      totalTj({ baseId: this.baseIdSet }).then(res => {
        //获取基地总面积- 有订单的面积=无订单面积
      
        console.info('地图地图',this.map)
        let that=this
       setTimeout(function(){
          that.addBlockOnMap(res.data.landParcels);       
       },1000)
         
        this.getBaseOrderTj();
      });
    },
    getBaseLoanTj() {
      //贷款柱形图
      getBaseLoanTj({ baseId: this.baseId }).then(res => {
        // dataRight dataLeft
        // this.dataLeft = res.data.map(item => {
        //   return item.dk_amount;
        // });
        // this.dataRight = res.data.map(item => {
        //   return item.count;
        // });
        this.dataLeft=[95,95,19,76]
        this.dataRight=[2,1,2,2]
        this.$refs.polygonalTwo._drawPolygonal(this.dataLeft, this.dataRight);
      });
    },
    getBaseOrderTj() {
      //获取右侧订单饼图
      getBaseOrderTj({ baseId: this.baseId }).then(res => {
        let num = (parseFloat(this.totalAcreage) - parseFloat(res.data.order_forests)).toFixed(2);
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
        // this.$refs.circle.showCorcle()
        // this.$refs.circles2.showCorcle()
      });
    },
    humidity(n) {
      this.airTab = n;
      humidity({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].air_humidity);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    temperature(n) {
      this.airTab = n;
      temperature({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].air_temperature);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    co2value(n) {
      this.airTab = n;
      co2value({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].co2value);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    pressure(n) {
      this.airTab = n;
      pressure({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].air_pressure);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    pm25value(n) {
      this.airTab = n;
      pm25value({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].pm25value);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    illIntensity(n) {
      this.airTab = n;
      illIntensity({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].ill_intensity);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
      });
    },
    rainfall(n) {
      this.airTab = n;
      rainfall({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].rainfall);
        }
        this._drawLine2(Xdata, xTitle,this.setUnit2(n));
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
    soilHumidity(n) {
      this.soliTab = n;
      soilHumidity({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_humidity);
        }
        this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
    soilTemperature(n) {
      this.soliTab = n;
      soilTemperature({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_temperature);
        }
        this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
    soilEc(n) {
      this.soliTab = n;
      soilEc({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_ec);
        }
        this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
    soilPH(n) {
      this.soliTab = n;
      soilPH({ baseId: this.baseId }).then(res => {
        let Xdata = [];
        let xTitle = [];
        for (var i = 0; i < res.data.length; i++) {
          xTitle.push(res.data[i].monitor_time);
          Xdata.push(res.data[i].soil_ph);
        }
        this._drawLine(Xdata, xTitle,this.setUnit(n));
      });
    },
    tabFunc(n) {
      this.tab = n;
      this.detection(n)
    },
    addBlockOnMap(remarks) {
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
    _dramLoansChart(datas) {
      //右侧饼图
      let rainChart = this.$echarts.init(this.$refs.loansChart,null,{devicePixelRatio: 2.5});
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
      //     zoom: 16
      //     // layers:[googleLayer,roadNetLayer,layer], //设置图层
      //     // viewMode:'3D',
      //   });

      //   AMap.plugin("AMap.DistrictSearch", function() {
      //     var district = new AMap.DistrictSearch({
      //       extensions: "all",
      //       subdistrict: 0
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
  height: 30%;
}
.left-height-last{
  height:calc(100vh - 720px);
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
  width: 156px;
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
  position: absolute;
  bottom: 20px;
  right: 20px;
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
  width:100%;
  top:40%;
  height:100%;
   align-content:center;
   text-align:center;
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
.left-height-base-info{
  height:400px;
}
.base-info-img{
  width:49%;
  height:150px;
  background: url('../assets/new/base1.jpg') no-repeat;
  background-size: 100%;
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

