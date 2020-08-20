<template>
  <div class="base base-container">
    <headers></headers>
    <div class="base-wrapper home-height">
      <div class="company-info">
        <div class="bg-item-box left-height">
          <div class="desc">
            <div class="title">平台简介</div>
          </div>
          <div class="company" style="height:100%">
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">企业名称</span>
              <span class="color-main">{{subjectInfo.name}}</span>
            </div>
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">基地位置</span>
              <span
                class="color-main"
              >{{subjectInfo.provinceName}}{{subjectInfo.cityName}}{{subjectInfo.areaName}}{{subjectInfo.addr}}</span>
            </div>
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">主要品种</span>
              <span class="color-main">麦冬</span>
            </div>
            <p class="company-desc">{{subjectInfo.intro}}</p>
          </div>
        </div>
        <!-- 图表 -->
        <div class="bg-item-box left-height" style="margin:20px 0;">
          <div class="desc">
            <div class="title">麦冬历史价格走势</div>
          </div>
          <div class="company" style="height:90%">
            <div class="rain-map" ref="leftLine" style="height:100%"></div>
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
          <div class="map" ref="mapChart">
            <div class="map-title-box display-flex align-items-center justify-content-flex-center">
              <div class="map-title-item">
                <div class="map-title-item-num">{{mapInfo.totalAcreage}}</div>
                <div>已服务面积（亩）</div>
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
            <!-- <div>
              <div class="map-item-box" style="top:120px">
                <img src="../assets/new/icon_positioning.png" alt />
                <span>全部农户：1213</span>
              </div>
              <div class="map-item-box" style="top:190px">
                <img src="../assets/new/icon_positioning-dai.png" alt />
                <span>有贷款农户：613</span>
              </div>
              <div class="map-item-box" style="top:260px">
                <img src="../assets/new/icon_positioning-ding.png" alt />
                <span>有订单合同农户：113</span>
              </div>
              <div class="map-item-box" style="top:330px">
                <img src="../assets/new/icon_positioning-bao.png" alt />
                <span>有保险农户：13</span>
              </div>
            </div>-->
            <div class="map-footer-box">
              <div :class="{'active':btnActive==1}" @click="changeMapData2">农户</div>
              <span class="btn-margin"></span>
              <div :class="{'active':btnActive==2}" @click="changeMapData1">基地</div>
            </div>
            <div class="map-order-box" style="overflow:hidden">
              <!-- <div
                style="font-size:36px;font-weight:bold;
color:rgba(255,179,0,1);line-height:36px;padding:10px 0;"
              >{{orderDataCount}}</div>
              <div style="font-size:18px;">实时操作工单(条)</div>-->
              <ul
                style="position:relative;list-style:none;background:rgba(0,0,0,0.5);font-size:13px;padding:5px"
              >
                <li class="base-item display-flex justify-content-flex-center">
                  <span style="text-align: left;display:inline-block; width: 26%;color: #fff;">操作时间</span>
                  <span style="color: #fff;display:inline-block; width:20%;text-align: center;">操作人</span>
                  <span
                    style="text-align: center;display:inline-block; width: 20%;color: #fff;"
                  >农事操作</span>
                  <span
                    style="color: #fff;display:inline-block; width: 34%;text-align: center;"
                  >所属基地</span>
                </li>
              </ul>
              <div class="base-info" id="base-info3" style="overflow:hidden">
                <ul id="base-ul3" style="position:relative; top:0px;list-style:none;">
                  <li class="base-item" v-for="(item,m) in orderList" :key="m+'c'">
                    <span
                      style="text-align: left;display:inline-block; width: 26% !important;color: #fff;padding-left:5px"
                    >{{item.executiontime}}</span>
                    <span
                      style="text-align: center;display:inline-block; width: 20%;color: #fff"
                    >{{item.executionUserName}}</span>
                    <span
                      style="color: #0AFBE2;display:inline-block; width: 20%;text-align: center;"
                    >{{item.farmWorkItemName}}</span>
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
        <div class="base-message" :style="{'height':baseMessageHeight}">
          <div class="base display-flex justify-content-flex-justify">
            <!-- <baseMap></baseMap> -->
            <div class="item-bg-y" style="padding:0">
              <div class="title" style="padding-left:10px">仓储信息</div>
              <ul
                style="position:relative;list-style:none;background:rgba(255,255,255,0.2);font-size:13px;"
              >
                <li class="base-item display-flex justify-content-flex-center">
                  <span style="text-align:left;display:inline-block; width: 17%;color: #fff;">名称</span>
                  <span style="text-align: left;display:inline-block; width: 11%;color: #fff;">类型</span>
                  <span style="color: #fff;display:inline-block; width:10%;text-align: center;">总库容</span>
                  <span style="color: #fff;display:inline-block; width: 10%;text-align: center;">总库存</span>
                  <span style="text-align: center;display:inline-block; width: 10%;color: #fff;">特级</span>
                  <span style="color: #fff;display:inline-block; width: 10%;text-align: center;">一级</span>
                  <span style="color: #fff;display:inline-block; width: 10%;text-align: center;">二级</span>
                  <span style="color: #fff;display:inline-block; width: 10%;text-align: center;">三级</span>
                  <span
                    style="color: #fff;display:inline-block; width: 11%;text-align: center;"
                  >统货(吨)</span>
                </li>
              </ul>
              <div class="base-info" id="base-info">
                <ul id="base-ul1" style="position:relative; top:0px">
                  <li class="base-item" v-for="(item,v) in entrepotArr" :key="v+'v'">
                    <span
                      style="text-align: left;display:inline-block; width: 17% !important;color: #0AFBE2"
                    >{{item[0]}}</span>
                    <span
                      style="text-align: left;display:inline-block; width: 10%;color: #fff"
                    >{{item[1]}}</span>
                    <span
                      style="color: #0AFBE2;display:inline-block; width: 10%;text-align: center;"
                    >{{item[2]}}</span>
                    <span
                      style="color: #fff;display:inline-block; width: 10%;text-align: center;"
                    >{{item[3]}}</span>
                    <span
                      style="color: #fff;display:inline-block; width: 10%;text-align: center;"
                    >{{item[4]}}</span>
                    <span
                      style="color: #fff;display:inline-block; width: 10%;text-align: center;"
                    >{{item[5]}}</span>
                    <span
                      style="color: #fff;display:inline-block; width: 10%;text-align: center;"
                    >{{item[6]}}</span>
                    <span
                      style="color: #fff;display:inline-block; width: 10%;text-align: center;"
                    >{{item[7]}}</span>
                    <span
                      style="color: #fff;display:inline-block; width: 11%;text-align: center;"
                    >{{item[8]}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 地图下柱形图 -->
            <div class="item-bg-y">
              <div class="title">投入品用量</div>
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
              <Carousel class="lunbo-wrapper" :autoplay="true" :autoplay-speed="5000">
                <CarouselItem v-for="(item,i) in warpperList" :key="i">
                  <div class="display-flex justify-content-flex-justify">
                    <div></div>
                    <div class="color-fff">{{item.name}}</div>
                  </div>
                  <div class="display-flex justify-content-flex-justify">
                    <div v-for="(li,n) in item.warpperData" :key="n+'a'" style="text-align:center">
                      <div class="color-main" style="font-weight:bold;font-size:18px">
                        {{li.num}}
                        <span style="font-size:12px">{{li.unit}}</span>
                      </div>
                      <img
                        style="margin-bottom:5px"
                        class="wrapper-img"
                        src="../assets/new/pic3.png"
                        alt
                      />
                      <div>
                        <i :class="['iconfont','color-main',li.icon]"></i>
                        <span style="color:#fff;margin-left:5px;">{{li.name}}</span>
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
        <div
          class="bg-item-box left-height left-height-right"
          style="max-height:250px !important;padding:5px 0;"
        >
          <div class="desc" style="height:25px">
            <div class="title">采购订单</div>
          </div>
          <div>
            <div class="display-flex justify-content-flex-justify right-box-padding">
              <div v-for="(item,n) in rightList" :key="n+'b'" style="text-align:center">
                <div class="color-main" style="font-weight:bold;font-size:18px">{{item.num}}</div>
                <img style="margin-bottom:5px" src="../assets/new/pic3.png" alt />
                <div style="color:#fff;margin-top:10px;">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-item-box left-height left-height-right"
          style="max-height:250px !important;padding:5px 0;margin-top:20px;"
        >
          <div class="desc" style="height:25px">
            <div class="title">保险服务</div>
          </div>
          <div>
            <div class="display-flex justify-content-flex-justify right-box-padding">
              <div v-for="(item,n) in InsuranceList" :key="n+'n'" style="text-align:center">
                <div
                  class="color-main right-bx-bg"
                  style="font-weight:bold;font-size:18px"
                >{{item.num}}</div>

                <div style="color:#fff;margin-top:10px;">{{item.name}}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 贷款服务-饼图 -->
        <div
          class="bg-item-box left-height left-height-right"
          style="max-height:250px !important;padding:15px 0;margin-top:20px;"
        >
          <div class="desc">
            <div class="title">金融服务</div>
          </div>
          <div style="position:relative;top:-60px" ref="pieBox">
            <!-- <img
              src="../assets/new/pic6.png"
              :style="{'top':pieTop,'left':pieLeft}"
              ref="pieImg"
              class="pie-bg"
            />-->
            <div style="height:180px" ref="loansChart"></div>
            <!-- 饼图说明 -->
            <!-- <div class="pie-color-box">
              <div class="display-flex align-items-center">
                <div class="pie-color-0"></div>
                <span>保险贷</span>
              </div>
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
            </div>-->
          </div>
        </div>
        <!-- 新增最新物流 -->
        <div class="display-flex left-height-right" style="margin-top:20px;">
          <div class="item-bg-y bg-item-box" style="padding:15px 0;width:28%;margin-right:15px;">
            <div>
              <div class="last-title">年度销售额</div>
              <div style="height:85%">
                <div class="airs air-temperature" style="height:100%">
                  <div style="text-align:center">
                    <div class="color-main" style="font-weight:bold;font-size:18px">
                      11800
                      <span style="font-size:11px">万元</span>
                    </div>
                    <img style="margin-bottom:5px" src="../assets/new/pic3.png" alt />
                    <div style="color:#fff;margin-top:10px;">2020年度销售额</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="item-bg-y bg-item-box" style="padding:15px 0;height:100%;overflow:hidden">
              <!-- 右边滚动 -->
              <div>
                <div class="last-title">最新订单物流信息</div>
                <div style="height:85%">
                  <div class="airs air-temperature" style="height:100%">
                    <div class="right-scroll-title">三台县健源麦冬种植专业合作社</div>
                    <div class="right-scroll-title">
                      统货
                      <span>&nbsp;&nbsp;</span>50吨
                    </div>
                    <div class="base-info" id="base-info2">
                      <ul id="base-ul2" style="position:relative; top:0px;list-style: none;">
                        <li class="base-item">
                          <span
                            style="text-align: left;display:inline-block; width: 100px;color: #0AFBE2"
                          >2020/7/23</span>
                          <span
                            style="color: #0AFBE2;display:inline-block; width: 150px;text-align: center;"
                          >绵阳市三台县芦溪镇</span>
                        </li>
                        <li class="base-item">
                          <span
                            style="text-align: left;display:inline-block; width: 100px;color: #0AFBE2"
                          >2020/7/24</span>
                          <span
                            style="color: #0AFBE2;display:inline-block; width: 150px;text-align: center;"
                          >绵阳市三台县胜峰村</span>
                        </li>
                        <li class="base-item">
                          <span
                            style="text-align: left;display:inline-block; width: 100px;color: #0AFBE2"
                          >2020/7/25</span>
                          <span
                            style="color: #0AFBE2;display:inline-block; width: 150px;text-align: center;"
                          >绵阳市三台县中新镇</span>
                        </li>
                        <li class="base-item">
                          <span
                            style="text-align: left;display:inline-block; width: 100px;color: #0AFBE2"
                          >2020/7/26</span>
                          <span
                            style="color: #0AFBE2;display:inline-block; width: 150px;text-align: center;"
                          >绵阳市三台县岳家湾</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最后一个模块 -->
        <div
          class="item-bg-y bg-item-box left-height-right"
          style="padding:15px 0;margin-top:20px;"
        >
          <div class="last-title">检测服务</div>
          <div style="height:85%">
            <div class="airs air-temperature" style="height:100%">
              <div style="height:100%" class="display-flex">
                <div ref="pieNew" style="width:50%;height:100%"></div>
                <div ref="pieNew2" style="width:50%;height:100%"></div>
              </div>
              <div class="display-flex">
                <div class="last-title-item">基地环境抽样数量</div>
                <div class="last-title-item">产品检测覆盖率</div>
              </div>
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
import {
  getSubjectInfo,
  getAnnualFertilizer,
  getBaseMapInfo,
  getFarmerMapInfo,
  getOrgMonitorTj,
  getOrgOrderTj,
  getOrgInsuranceTj,
  getOrgLoanTj,
  getAllMonitors,
  getMonitorVideosByBaseId,
  getWorkOrderByRealTime,
  getSite,
  getPriceBySite,
  getBillboardIndexTotal
} from "../api/apiYZX";
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
      mapRemarks: [],
      orderDataCount: 0,
      entrepotArr: [
        ["涪城麦冬", "常温", "5000", "3300", "300", "350", "250", "100", "2300"]
      ],
      pieTop: 0,
      pieLeft: 0,
      weixin: false,
      show: false,
      btnActive: 2,
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
      baseMessageHeight: "50px",
      baseLength: 0,
      plotLength: 0,
      totalArea: 0,
      option: {},
      addresss: [],
      baseinfo: [],
      address: "",
      curLock: false,
      serviceData: [],
      baseScroll3: "",
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
      warpperList: [],
      rightList: [
        { num: "", name: "订单合同数量" },
        { num: "", name: "订单合同面积" },
        { num: "", name: "订单合同预估量" }
      ],
      InsuranceList: [
        { num: "", name: "保险被保面积" },
        { num: "", name: "保单保费总额" },
        { num: "", name: "保险参保人" }
      ], //保险服务
      mapIcon: require("../assets/new/icon_positioning.png"),
      subjectInfo: {}, //主体信息
      annualFertilizer: {}, //年度有机肥用量
      baseList: [],
      allVideoList: [],
      organId: 99,
      baseScroll2: null,
      SiteArr: [],
      SiteArrX: [],
      siteRainChart: null,
      sietObj: [],
      mapInfo: {},
      orderList: [],
      cluster:null
    };
  },
  created() {
    this.getMap();
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
    if (this.$route.query.time) {
      let that = this;
      window.addEventListener("done1", function() {
        // that.all();
      });
    }
  },
  mounted() {
    // 设置饼图背景图
    let pieBox = this.$refs.pieBox.offsetHeight;
    let pieBoxW = this.$refs.pieBox.offsetWidth;
    this.pieTop = (pieBox - 156) / 2 + "px";
    this.pieLeft = (pieBoxW - 156) / 2 + "px";
    // 地图下折线图高度
    let height = document.body.clientHeight;
    let map = height * 0.55;
    this.$refs.mapChart.style.height = map + "px";
    let mapHeight = this.$refs.mapChart.offsetHeight;
    let m = height * 0.15;
    this.baseMessageHeight =
      (height - parseFloat(mapHeight) - m - 20) / 2 + "px";
    let that = this;
    setTimeout(function() {
      that.show = true;

      // 这里要重绘柱形图--------------------柱形图组件传参或者用方法
    }, 1000);
    // this._drawRainMap();

    // this._getJson()
    this._drawCityMap();
    that.allbasearea = 0;

    axios.get("json/base_info.json").then(res => {
      for (let i = 0; i < res.data.result.length; i++) {
        that.allbasearea += res.data.result[i].area;
        that.baseDatas[i].name = res.data.result[i].name;
        that.baseDatas[i].value = res.data.result[i].area;
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

        setTimeout(function() {
          console.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          for (let i = 0; i < that.mapRemarks.length; i++) {
            let remark = that.mapRemarks[i].mapAddr;
            let remarkJson2 = eval("(" + remark + ")");

            let lng = remarkJson2.path[0].lng;
            let lat = remarkJson2.path[0].lat;
            console.info('pppppppppppppppp')
            let marker = new AMap.Marker({
              position: new AMap.LngLat(lng, lat),
              offset: new AMap.Pixel(-10, -10),
               content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>'
            });
            that.markers.push(marker);
            that.map.add(marker);
            that.addCluster()
            marker.on("click", function(e) {
              that.$router.push({
                name: "base",
                query: { baseId: that.mapRemarks[i].id }
              });
            });
            //  that.addCluster(1)
          }
          console.info('??????')
         
        }, 1500);
      });
    });
    this.getSubjectInfo();
    this.getAnnualFertilizer();
    // this.getWorkOrderByRealTime();
    this.getOrgMonitorTj();
    this.getOrgOrderTj();
    this.getOrgInsuranceTj();
    this.getOrgLoanTj();
    let top = this.entrepotArr.length * 30;
    // this.baseScroll = new roll.Roll("base-info", "base-ul1", "", -top);
    this.baseScroll2 = new roll.Roll("base-info2", "base-ul2", "", -120);

    this.getPieNew();
    this.getPieNew2();
    this.getSite();
    setTimeout(function() {
      that._drawLine(); //左侧折线图
      // 这里要重绘柱形图--------------------柱形图组件传参或者用方法
    }, 5000);
    this.getBillboardIndexTotal();
    this.getWorkOrderByRealTimeList();
    // this.addCluster(1)
  },
  methods: {
     addCluster() {
        if (this.cluster) {
            this.cluster.setMap(null);
        }
       
        let _this=this
    
            this.cluster = new AMap.MarkerClusterer(_this.map,_this. markers, {
                gridSize: 80,
                renderClusterMarker: _this._renderClusterMarker
            });
      
    },
    getWorkOrderByRealTimeList() {
      getWorkOrderByRealTime({ organId: this.organId }).then(res => {
        this.orderList = res.data;
        this.orderList.forEach((item, i) => {
          this.orderList[i].executiontime = this.utc2beijing(
            item.executiontime
          );
        });
        this.baseScroll3 = new roll.Roll(
          "base-info3",
          "base-ul3",
          "",
          -this.orderList.length * 18
        );
      });
    },
    utc2beijing(utc_datetime) {
      // 转为正常的时间格式 年-月-日 时:分:秒
      var T_pos = utc_datetime.indexOf("T");
      var Z_pos = utc_datetime.indexOf("Z");
      var year_month_day = utc_datetime.substr(0, T_pos);
      var hour_minute_second = utc_datetime.substr(
        T_pos + 1,
        Z_pos - T_pos - 1
      );
      var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

      // 处理成为时间戳
      timestamp = new Date(Date.parse(new_datetime));
      timestamp = timestamp.getTime();
      timestamp = timestamp / 1000;

      // 增加8个小时，北京时间比utc时间多八个时区
      var timestamp = timestamp + 8 * 60 * 60;
      let time = this.format(timestamp);
      // 时间戳转为时间

      return time; // 2017-03-31 16:02:06
    },
    add0(m) {
      return m < 10 ? "0" + m : m;
    },
    format(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo * 1000);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return (
        y +
        "-" +
        this.add0(m) +
        "-" +
        this.add0(d) +
        " " +
        this.add0(h) +
        ":" +
        this.add0(mm) +
        ":" +
        this.add0(s)
      );
    },
    getBillboardIndexTotal() {
      getBillboardIndexTotal({ organId: this.organId }).then(res => {
        this.mapInfo = res.data;
      });
    },
    getSite() {
      //麦冬地区
      getSite().then(res => {
        this.site = res.data;
        this.site.forEach(item => {
          this.getPriceBySite(item.id, item.site_name);
        });
      });
    },

    getPieNew() {
      let polygonalChart = this.$echarts.init(this.$refs.pieNew, null, {
        devicePixelRatio: 2.5
      });
      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center",
          show: false
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [""],
          show: false
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 120, name: "92.31%" },
              { value: 10, name: "基地环境未检测" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(93,181,249,1)"
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = ["#5DB5F9", "#002451"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      };
      polygonalChart.setOption(option);
    },
    getPieNew2() {
      let polygonalChart = this.$echarts.init(this.$refs.pieNew2, null, {
        devicePixelRatio: 2.5
      });
      var option = {
        title: {
          text: "",
          subtext: "",
          left: "center",
          show: false
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [""],
          show: false
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [{ value: 100, name: "100%" }],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(93,181,249,1)"
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = ["#F9A35D"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      };
      polygonalChart.setOption(option);
    },
    getAllMonitors() {
      getAllMonitors().then(res => {
        this.allVideoList = res.data;
        this.getAddr();
      });
    },
    getOrgLoanTj() {
      getOrgLoanTj({ orgId: this.organId }).then(res => {
        this._dramLoansChart(res.data);
      });
    },
    getOrgInsuranceTj() {
      getOrgInsuranceTj({ orgId: this.organId }).then(res => {
        this.InsuranceList[0].num = 10000 + "亩";
        this.InsuranceList[1].num = 280 + "万";
        this.InsuranceList[2].num = 8000 + "人";
      });
    },
    getOrgOrderTj() {
      //采购订单数据
      getOrgOrderTj({ orgId: this.organId }).then(res => {
        this.rightList[0].num = 30 + "份";
        this.rightList[1].num = 17500 + "亩";
        this.rightList[2].num = 4600 + "吨";
      });
    },
    getOrgMonitorTj() {
      //获取气象数据
      getOrgMonitorTj({ orgId: this.organId }).then(res => {
        let datas = res.data;
        for (var i = 0; i < datas.length; i++) {
          let obj = datas[i];
          let arr = [
            {
              num: obj.air_humidity || "0",
              name: "空气湿度",
              unit: "%",
              icon: "iconkongqishidu"
            },
            {
              num: obj.air_pressure || "0",
              name: "空气压力",
              unit: "kpa",
              icon: "icondaqiyali"
            },
            {
              num: obj.air_temperature || "0",
              name: "空气温度",
              unit: "℃",
              icon: "iconshangpinwenduji"
            },
            {
              num: obj.co2value || "0",
              name: "CO2浓度",
              unit: "ppm",
              icon: "iconeryanghuatan"
            },
            {
              num: obj.ill_intensity || "0",
              name: "光照强度",
              unit: "Lux",
              icon: "icontaiyangfushe"
            },
            {
              num: obj.rainfall || "0",
              name: "降雨量",
              unit: "mm",
              icon: "iconjiangyuliang"
            },
            {
              num: obj.soil_ec || "0",
              name: "土壤EC值",
              unit: "uS/cm",
              icon: "iconjiangyuliang"
            }, //图标
            {
              num: obj.soil_humidity || "0",
              name: "土壤湿度",
              unit: "%",
              icon: "iconturangshidu"
            },
            {
              num: obj.soil_ph || "0",
              name: "土壤PH值",
              unit: "",
              icon: "iconsuanjiandu"
            },
            {
              num: obj.soil_temperature || "0",
              name: "土壤温度",
              unit: "℃",
              icon: "iconturangwendu"
            },
            {
              num: obj.wind_direction || "0",
              name: "风向",
              unit: "o",
              icon: "iconfengxiang"
            },
            {
              num: obj.wind_speed || "0",
              name: "风速",
              unit: "m/s",
              icon: "iconfengsu2"
            }
          ];
          datas[i].warpperData = arr;
        }
        this.warpperList = datas;
      });
    },
    changeMapData1() {
      //切换基地模式
      this.removepoint();
      this.btnActive = 2;
      this.markers = [];
      getBaseMapInfo({ organId: this.organId }).then(res => {
        this.mapRemarks = res.data;
        let that = this;
        for (let i = 0; i < that.mapRemarks.length; i++) {
          let remark = that.mapRemarks[i].mapAddr;
          let remarkJson2 = eval("(" + remark + ")");

          let lng = remarkJson2.path[0].lng;
          let lat = remarkJson2.path[0].lat;
          let marker = new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            offset: new AMap.Pixel(-10, -10),
            content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
          });
          that.markers.push(marker);
          that.map.add(marker);
          that.addCluster()
          marker.on("click", function(e) {
            that.$router.push({
              name: "base",
              query: { baseId: Number(that.mapRemarks[i].id) }
            });
          });
        }
      });
    },
    changeMapData2() {
      //切换农户模式
      this.btnActive = 1;
      this.removepoint();
      this.markers = [];
      getFarmerMapInfo({ organId: this.organId }).then(res => {
        this.mapRemarks = res.data;
        let that = this;
        for (let i = 0; i < that.mapRemarks.length; i++) {
          if (that.mapRemarks[i].mapAddr) {
            let remark = that.mapRemarks[i].mapAddr;
            let remarkJson2 = eval("(" + remark + ")");

            let lng = remarkJson2.path[0].lng;
            let lat = remarkJson2.path[0].lat;
            let marker = new AMap.Marker({
              position: new AMap.LngLat(lng, lat),
              offset: new AMap.Pixel(-10, -10),
              content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
            });
            that.markers.push(marker);
            that.map.add(marker);
            that.addCluster()
            marker.on("click", function(e) {
              console.log("点击了农户~~~~~~~~~~~~~~~~~~~~~");
              that.$router.push({
                name: "company",
                query: { userOrganId: Number(that.mapRemarks[i].id) }
              });
            });
          }
        }
      });
    },
    getMap() {
      getBaseMapInfo({ organId: this.organId }).then(res => {
        this.mapRemarks = res.data;
        this.baseList = res.data; //这里处理监控基地列表
        this.getAllMonitors(); //获取所有监控视频
      });
    },
    getSubjectInfo() {
      //获取主体信息
      getSubjectInfo({ organId: this.organId }).then(res => {
        this.subjectInfo = res.data;
      });
    },
    getAnnualFertilizer() {
      //获取年度有机肥
      getAnnualFertilizer({ organId: this.organId }).then(res => {
        let Xdata = [2017, 2018, 2019, 2020];
        // let data1 = arr.map(item => {
        //   //有机
        //   return item["organicFertilizer"];
        // });
        // let data2 = arr.map(item => {
        //   //无机
        //   return item["inorganicFertilizer"];
        // });
        let _this = this;
        setTimeout(function() {
          let polygonalChart = _this.$echarts.init(
            _this.$refs.polygonal,
            null,
            { devicePixelRatio: 2.5 }
          );
          _this._drawPolygonal(polygonalChart, Xdata);
        }, 1000);
      });
    },
    _drawPolygonal(polygonalChart, tdataAxis) {
      var option = chartsType.charts(
        tdataAxis,
        [8500, 8400, 8300, 8200],
        "用量（亩/kg）",
        "bar",
        "有机肥",
        "#14E6C4",
        "x"
      );
      option.legend = {
        left: "right",
        textStyle: {
          color: "#fff"
        }
      };

      option.series.push({
        name: "复合肥",
        barWidth: 20,
        data: [3900, 3800, 3600, 3500],
        type: "bar",
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "#F39474"
          },
          normal: {
            color: "#F39474"
          }
        }
      });
      option.series.push({
        name: "叶面肥",
        barWidth: 20,
        data: [10, 10, 10, 10],
        type: "bar",
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "#0D63C5"
          },
          normal: {
            color: "#0D63C5"
          }
        }
      });

      polygonalChart.setOption(option);
    },
    removepoint() {
      this.map.remove(this.markers);
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
    getAddr() {
      //根据基地获取监控列表，处理children
      this.baseList.forEach((item, i) => {
        let obj = {
          label: item.name,
          value: item.id,
          children: []
        };
        this.addresss[i] = obj;
        this.getMonitorVideosByBaseId(item.id, i);
      });
    },
    getMonitorVideosByBaseId(id, i) {
      getMonitorVideosByBaseId({ baseId: id }).then(res => {
        this.allVideoList.forEach((item, n) => {
          res.data.forEach((li, n) => {
            if (
              item.channelNo == li.channelNo &&
              item.deviceSerial == li.monitorVideoCode
            ) {
              let obj = {
                label: "通道" + li.channelName,
                value: item.liveAddress,
                name: li.monitorVideoCode
              };

              this.addresss[i].children.push(obj);
            }
          });
        });
      });
    },
    _dramLoansChart(pieData) {
      //左侧折线图
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
          data: ["保险贷", "订单贷", "农资贷", "劳务贷"],
          textStyle: {
            color: "#ffffff" //字体颜色
          },
          show: false
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["30%", "50%"],
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
            data: [
              {
                value: 180,
                name: "保险贷：" + 56 + "笔" + 180 + "万",
                itemStyle: { color: "#F9A35D" }
              },
              {
                value: 720,
                name: "订单贷：" + 260 + "笔" + 720 + "万",
                itemStyle: { color: "#7C89EB" }
              },
              {
                value: 900,
                name: "农资贷：" + 67 + "笔" + 900 + "万",
                itemStyle: { color: "#5DC1FA" }
              },
              {
                value: 720,
                name: "劳务贷：" + 77 + "笔" + 720 + "万",
                itemStyle: { color: "#14E6C4" }
              }
            ]
          }
        ]
      };
      rainChart.setOption(option);
    },
    getPriceBySite(id, name) {
      getPriceBySite({ siteId: id }).then(res => {
        let arr = [];
        this.SiteArrX = [];
        res.data.forEach(item => {
          arr.push(item.mm_price);
          this.SiteArrX.push(item.price_date);
        });
        let obj = {
          name: name,
          type: "line",
          smooth: "true",
          showSymbol: false,
          itemStyle: {
            emphasis: {
              symbol: "circle",
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: arr
        };
        this.sietObj.push(obj);
      });
    },
    _drawLine() {
      //左侧折线图
      let siteRainChart = this.$echarts.init(this.$refs.leftLine, null, {
        devicePixelRatio: 2.5
      });
      let _this = this;
      var option = {
        title: {
          text: "元",
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          x: 30,
          y: 5
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        grid: {
          top: 40,
          left: 40,
          bottom: 20,
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: _this.SiteArrX,
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff"
            }
          }
        },

        yAxis: {
          minInterval: 1,
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#fff"
            }
          }
        },
        series: _this.sietObj
      };

      option.legend = {
        left: "right",
        textStyle: {
          color: "#fff"
        }
      };
      // 麦冬价格中新增地区
      // option.series.push(_this.sietObj);
      siteRainChart.setOption(option);
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
     _renderClusterMarker(context) {
           var count = this.markers.length;
        var factor = Math.pow(context.count / count, 1 / 18);
        var div = document.createElement('div');
        var Hue = 180 - factor * 180;
        var bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
        var fontColor = 'hsla(' + Hue + ',100%,20%,1)';
        var borderColor = 'hsla(' + Hue + ',100%,40%,1)';
        var shadowColor = 'hsla(' + Hue + ',100%,50%,1)';
        div.style.backgroundColor = bgColor;
        var size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
        div.style.width = div.style.height = size + 'px';
        div.style.border = 'solid 1px ' + borderColor;
        div.style.borderRadius = size / 2 + 'px';
        div.style.boxShadow = '0 0 1px ' + shadowColor;
        div.innerHTML = context.count;
        div.style.lineHeight = size + 'px';
        div.style.color = fontColor;
        div.style.fontSize = '14px';
        div.style.textAlign = 'center';
        context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
        context.marker.setContent(div)
    },
    _drawCityMap() {
      //  this.$refs.mapChart.style.height = "520px";
      let that = this;
      MapLoader().then(AMap => {
        that.map = new AMap.Map(this.$refs.mapChart, {
           resizeEnable: true,
          center: [105.013664, 31.206397],
          zooms: [10, 18]
          // layers:[googleLayer,roadNetLayer,layer], //设置图层
          // viewMode:'3D',
        });

        AMap.plugin(["AMap.DistrictSearch","AMap.MarkerClusterer"], function() {
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
              fillOpacity: 0.3
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
          console.info('tag')
           if (that.cluster) {
            that.cluster.setMap(null);
           }else{
  that.cluster = new AMap.MarkerClusterer(that.map,that.markers, {
                gridSize: 80,
                renderClusterMarker: that._renderClusterMarker
            });
           }
        
    console.info('that.cluster',that.cluster)
      
    
           
        
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
      if (datas.length != 0) {
        this.address = datas[1];
        this.$nextTick(() => {
          this.player = new EZUIPlayer("myVideo");
        });
      }
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
  .monitor-message {
    width: 97px !important;
  }

  .special {
    width: 93px !important;
  }
}

@media screen and (max-width: 1550px) {
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

.home-height {
  height: calc(100vh - 80px);
}

.base-wrapper {
  margin: 20px 0 0 0;
  display: flex;
  padding: 0 20px;

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
        font-size: 14px;
        color: #EEEEEE;
        padding-bottom: 10px;
        line-height: 22px;
        height: calc(100% - 135px);
        overflow: hidden;
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
      height: 100%;

      .base {
        height: 100%;

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
          line-height: 32px;

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

.left-height-right {
  height: 17.6%;
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
  min-width: 180px;
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
  top: 30%;
  left: 5%;
  z-index: 111;
  color: #fff;

  >div {
    width: 150px;
    padding: 15px 0;
    text-align: center;
    background: url('../assets/new/button.png') no-repeat;
    background-size: 100% 100%;
  }

  .active {
    width: 150px;
    padding: 15px 0;
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
  background: url('../assets/new/bg1.png') repeat;
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
  left: 139px;
  top: 22px;
  width: 156px;
  height: auto;
}

.air-temperature {
  height: 100%;

  .base-info {
    width: 100%;
    height: 60%;
    padding-left: 15px;
    display: inline-block;
    overflow: hidden;
    text-align: center;
    line-height: 32px;

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

.map-message {
  height: calc(100vh - 80px) !important;
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

  .pie-color-0 {
    background: #F9A35D;
    width: 18px;
    margin-right: 5px;
    height: 8px;
    border-radius: 2px;
  }
}

.wrapper-img {
  width: 60px;
  height: 45px;
}

.polygonal {
  height: 100%;
}

.temperature-map {
  height: 100% !important;

  div {
    height: 100% !important;
  }
}

.right-scroll-title {
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  padding-left: 15px;
}

.map-order-box {
  position: absolute;
  bottom: 15px;
  left: 27%;
  width: 55%;
  z-index: 1111;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
}

.last-title-item {
  width: 50%;
  height: 100%;
  text-align: center;
  color: #fff;
  position: relative;
  top: -10px;
}
</style>

