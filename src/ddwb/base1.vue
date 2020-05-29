<template>
  <div class="base base-container">
    <headers></headers>
    <div class="base-wrapper">
      <div class="company-info">
        <div class="bg-item-box left-height" style="padding-bottom:10px">
          <div class="desc">
            <div class="title">基础信息</div>
          </div>
          <div class="company">
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">农户名称</span>
              <span class="color-main">羊子兮基地</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">农户年龄</span>
              <span class="color-main">11岁</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff" style="width:100px">地块数量</span>
              <span class="color-main">6块</span>
            </div>
            <div class="title-item-y display-flex">
              <span class="color-fff">拥有种植猫冬撒大大阿斯达撒大声地阿斯达手打阿斯达阿斯达阿斯达阿斯达</span>
            </div>
            <img class="head-img" src="../assets/new/pic6.png" alt />
          </div>
        </div>
        <div class="item-bg-y bg-item-box left-height" style="padding:15px 0;margin-top:20px;">
          <div class="last-title">金融占比</div>
          <div class="base-progress-box">
            <polygonal-reversal />
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
           <span class="">
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
              <polygonal></polygonal>
            </div>
          </div>
        </div>
      </div>
      <!-- 地图 -->
      <div class="map-message">
        <div class="map-wrapper">
          <div class="map" ref="mapChart">
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
                      @click="tabFunc(1)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="tabFunc(2)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==2?true:false}"
                    >温度</div>
                    <div
                      @click="tabFunc(3)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==3?true:false}"
                    >电导率</div>
                    <div
                      @click="tabFunc(4)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==3?true:false}"
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
                      @click="tabFunc(1)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==1?true:false}"
                    >湿度</div>
                    <div
                      @click="tabFunc(2)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==2?true:false}"
                    >温度</div>
                    <div
                      style="width:49px"
                      @click="tabFunc(3)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==3?true:false}"
                    >CO2浓度</div>
                    <div
                      @click="tabFunc(4)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==3?true:false}"
                    >压强</div>
                    <div
                      @click="tabFunc(4)"
                      :class="{'base-tab-small':true,'base-tab-action-small':tab==3?true:false}"
                    >PM2.5</div>
                    <div
                      @click="tabFunc(4)"
                      :class="{'base-tab':true,'base-tab-action-small':tab==3?true:false}"
                    >光照强度</div>
                    <div
                      @click="tabFunc(4)"
                      :class="{'base-tab':true,'base-tab-action-small':tab==3?true:false}"
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
        <div class="bg-item-box left-height  scroll-box" style="padding-bottom:10px" ref="rightTopHeight">
          <div
          class="last-title display-flex justify-content-flex-justify"
          style="margin-bottom: 10px;"
        >
          <div>金融数据</div>
          <div>
            <div class="display-flex">
              <div
                @click="tabFunc(1)"
                :class="{'base-tab-small':true,'base-tab-action-small':tab==1?true:false}"
              >订单</div>
              <div
                @click="tabFunc(2)"
                :class="{'base-tab-small':true,'base-tab-action-small':tab==2?true:false}"
              >贷款</div>
              <div
                style="width:49px"
                @click="tabFunc(3)"
                :class="{'base-tab-small':true,'base-tab-action-small':tab==3?true:false}"
              >保险</div>
            </div>
          </div>
        </div>
          <ul
            style="position:relative;list-style:none;background:rgba(255,255,255,0.2);font-size:13px;line-height:30px;"
          >
            <li class="base-item display-flex justify-content-flex-center">
              <span style="text-align: left;display:inline-block; width: 80px;color: #fff;">甲方</span>
              <span style="text-align: center;display:inline-block; width: 130px;color: #fff;">乙方</span>
              <span style="color: #fff;display:inline-block; width: 100px;text-align: center;">订单时间</span>
              <span
                style="color: #fff;display:inline-block; width: 100px;text-align: center;"
              >交付面积（亩）</span>
            </li>
          </ul>
          <div class="base-info" id="base-info">
            <ul id="base-ul1" style="position:relative; top:30px">
              <li class="base-item" v-for="(item,index) in this.baseDatas" :key="index">
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
          </div>
        </div>
        <div class="item-bg-y bg-item-box left-height left-height-bottom" :style="{'height':lastBoxHeight}">
          <div class="last-title">地块工单</div>
         <ul
            style="position:relative;list-style:none;background:rgba(255,255,255,0.2);font-size:13px;line-height:30px;"
          >
            <li class="base-item display-flex justify-content-flex-center">
              <span style="text-align: left;display:inline-block; width: 80px;color: #fff;">操作时间</span>
              <span style="text-align: center;display:inline-block; width: 130px;color: #fff;">农事操作</span>
              <span style="color: #fff;display:inline-block; width: 100px;text-align: center;">投入品</span>
              <span
                style="color: #fff;display:inline-block; width: 100px;text-align: center;"
              >操作照片</span>
            </li>
          </ul>
          <div class="base-info" id="base-info" style="height:85%">
            <ul id="base-ul2" style="position:relative; top:30px">
              <li class="base-item" v-for="(item,index) in this.baseDatas" :key="index">
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
import polygonalReversal from "@/components/polygonal/polygonalReversal";
import polygonal from "@/components/polygonal/polygonal";
import echartslLine from "@/components/echartslLine/echartslLine";
import circleProgress from "@/components/circle-progress";
import Foot from "@/components/layouts/GlobalFooter.vue";
import chartsType from "../assets/js/chartsType.js";
import roll from "../assets/js/roll.js";
import axios from "axios";

const dataAxis = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
  name: "home",
  components: {
    headers,
    baseMap,
    polygonalReversal,
    polygonal,
    echartslLine,
    Foot,
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
      messages: [],
      mapDatas: [],
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
      lastBoxHeight:100
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
    // if (!window.localStorage.token) {
    console.log(111);
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
    
    let height = document.body.clientHeight;
    let heightThree=height*0.75
    this.$refs.rightTopHeight.style.height = height - heightThree + "px";
    let rightTopHeight = this.$refs.rightTopHeight.offsetHeight;
    let ms = height * 0.15;
    this.lastBoxHeight = height - parseFloat(rightTopHeight) - ms + "px";
   
    // 地图下折线图高度
    this.$refs.mapChart.style.height = height - 400 + "px";
    let mapHeight = this.$refs.mapChart.offsetHeight;
    let m = height * 0.15;
    this.baseMessageHeight = height - parseFloat(mapHeight) - m + "px";
    let that = this;
    setTimeout(function() {
      that._drawLine(); //左侧折线图
      that._drawLine2(); //左侧折线图
    }, 1000);
    // this._getJson()

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
          //滚动距离可以用一条的高度*条数~~~~~~~~~~~~~
          that.baseScroll = new roll.Roll(
            "base-info",
            "base-ul1",
            "base-ul2",
            -660
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
          that.addBlockOnMap();
        });
      });
    });
    this._dramLoansChart();
  },
  methods: {
    tabFunc(n) {
      console.log(n);
      this.tab = n;
    },
    addBlockOnMap() {
      //这里删除了地块length~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      for (let i = 0; i < this.blockinfo.length - 3; i++) {
        let item = this.blockinfo[i];
        if (
          item.remark != undefined &&
          item.remark != null &&
          item.remark.trim() != ""
        ) {
          let remarkJson2 = eval("(" + item.remark + ")");
          let newPath = [];
          for (let i = 0; i < remarkJson2.path.length; i++) {
            let point = remarkJson2.path[i];
            newPath.push(new AMap.LngLat(point.lng, point.lat));
          }
          remarkJson2.path = newPath;
          let polygon2 = new AMap.Polygon(remarkJson2);
          this.polygonss = [];
          this.polygonss.push(polygon2);
          this.map.add(polygon2);
        }
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
      let rainChart = this.$echarts.init(this.$refs.loansChart1);
      let rainChart2 = this.$echarts.init(this.$refs.loansChart2);
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
        { value: 105, name: "有机肥", itemStyle: { color: "#7C89EB" } },
        { value: 310, name: "复合肥", itemStyle: { color: "#14E6C4" } }
      ];
      option.legend.show = false;
      rainChart.setOption(option);
      rainChart2.setOption(option);
    },
    _drawLine2() {
      let rainChart = this.$echarts.init(this.$refs.bottomLine2);
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
      rainChart.setOption(option);
    },
    _drawLine() {
      //左侧折线图
      let rainChart = this.$echarts.init(this.$refs.bottomLine1);
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
      let that = this;
      MapLoader().then(AMap => {
        that.map = new AMap.Map(this.$refs.mapChart, {
          center: [105.013664, 31.206397],
          zooms: [10, 10]
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
              fillOpacity: 0.5
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
.left-height-top{
  height: 35%;
}
.left-height-bottom{
  padding:15px 0;margin-top:20px;
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
  overflow-y: hidden;
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
  width: 40px;
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
.pie-color-box{
  position:absolute;
  top:-15px;
  right:20px;
  font-size:14px;
  line-height:35px;
  color:#fff;
  .pie-color-2{
    background:#7C89EB;
    display: inline-block
    width:20px;
    margin-right:5px;
    height:10px;
    border-radius:2px;
  }
  .pie-color-3{
    display: inline-block
    background:#14E6C4;
    width:18px;
    margin-right:5px;
    height:8px;
    border-radius:2px;
  }
}
.pie-title{
  display: inline-block;width:50%;
  text-align:center;
  font-size:14px;
  color:#fff;
}
</style>

