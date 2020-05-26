<template>
  <div class="base base-container">
    <headers></headers>
    <div class="base-wrapper">
      <div class="company-info">
        <div class="bg-item-box left-height">
          <div class="desc">
            <div class="title">平台简介</div>
          </div>
          <div class="company">
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">企业名称</span>
              <span class="color-main">四川代代为本农业科技有限公司</span>
            </div>
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">基地位置</span>
              <span class="color-main">四川省绵阳市三台县</span>
            </div>
            <div class="title-item-y display-flex justify-content-flex-justify">
              <span class="color-fff">主要品种</span>
              <span class="color-main">麦冬</span>
            </div>
            <p class="company-desc">
              道地药材7S全程质量控制服务平台，是中国中药协会中药材检测认证技术专业委员会联合现代中药资源动态检测信息和技术服务中心依
              托行业资源优势建设，通过建立标准、植保、检测、认证、溯源、仓单监管、信息监测发布等一站式的第三方质量管理体系，为全国道地药材生产基地
              建设，和产销一体化模式，提供第三方质量管理和品质保障，促进中药材产业高质量发展。
            </p>
          </div>
        </div>
        <!-- 图表 -->
        <div class="bg-item-box left-height" style="margin:20px 0;max-height:250px !important">
          <div class="desc">
            <div class="title">麦冬历史价格走势</div>
          </div>
          <div class="company">
            <div class="rain-map" ref="leftLine" style="height:200px"></div>
          </div>
        </div>
        <div class="bg-item-box left-height" style="height:360px;padding-top:10px;">
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
        <div class="base-message">
          <div class="base">
            <!-- <baseMap></baseMap> -->
           <div class="item-bg-y">
             <div class="title">操作工单</div>
             <ul style="position:relative; top:30px">
                <li class="base-item">
                   <span
                    style="text-align: left;display:inline-block; width: 80px;color: #fff;text-align:center"
                  >姓名</span>
                  <span
                    style="text-align: left;display:inline-block; width: 150px;color: #fff;text-align:center"
                  >时间</span>
                  <span style="color: #fff;display:inline-block; width: 80px;text-align:center">数</span>
                </li>
              </ul> 
              <div class="base-info" id="base-info">       
              <ul id="base-ul1" style="position:relative; top:30px">
                <li class="base-item" v-for="(item,index) in this.baseDatas" :key="index">
                  <span
                    style="text-align: left;display:inline-block; width: 150px;color: #fff"
                  >张三</span>
                  <span
                    style="text-align: left;display:inline-block; width: 150px;color: #fff"
                  >{{item.name}}</span>
                  <span style="color: #fff;display:inline-block; width: 80px;">{{item.value}}亩</span>
                </li>
              </ul>
            </div>
           </div>
          </div>
        </div>
      </div>
      <div class="temperature-rain">
        <div class="airs air-temperature">
          <div class="desc">
            <div class="title">有机肥</div>
            <div class="descs">Organic fertilizer</div>
          </div>
          <polygonal></polygonal>
        </div>
        <div class="airs air-humidity">
          <div class="desc">
            <div class="title">基地土壤重金属检测平均值</div>
            <div class="descs">Base soil heavy metal detection average</div>
          </div>
          <div class="rain-map" ref="rainMap"></div>
        </div>
        <div class="airs air-pressure">
          <div class="desc pos">
            <div class="title">监测数据</div>
          </div>
          <div class="monitor-data">
            <Carousel class="lunbo-wrapper" radius-dot>
              <CarouselItem>
                <div class="monitor-base">
                  <span>永明良种繁育基地</span>
                  <div class="update-time">
                    <span>{{date}}</span>
                    <span>{{hours}}</span>
                  </div>
                </div>
                <ul>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">大气温度：</span>
                        {{weather?weather:null}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">大气湿度：</span>
                        {{weather1?weather1.sd:null}}
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm温度：</span>
                        {{weather1?weather1.temperature-1.5:null}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm温度：</span>
                        {{weather1?weather1.temperature-1.9:null}}℃
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm湿度：</span>
                        {{Number(weather2)-5}}%
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm湿度：</span>
                        {{Number(weather2)-6.5}}%
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">光照度：</span>
                        {{Math.round(Math.random()*80)+20}}h
                      </span>
                    </div>
                    <div>
                      <span style="white-space:nowrap">
                        <span class="monitor-message special" style="width:93px">蒸发量：</span>
                        {{(Math.round(Math.random()*30)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">降雨量：</span>
                        {{(Math.round(Math.random()*10)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                </ul>
              </CarouselItem>
              <CarouselItem>
                <div class="monitor-base">
                  <span>老马基地</span>
                  <div class="update-time">
                    <span>{{date}}</span>
                    <span>{{hours}}</span>
                  </div>
                </div>
                <ul>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">大气温度：</span>
                        {{weather-Math.round(Math.random()*5)}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">大气湿度：</span>
                        {{Number(weather2)-6}}%
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm温度：</span>
                        {{weather-Math.round(Math.random()*5)-3.3}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm温度：</span>
                        {{weather-Math.round(Math.random()*5)-3.8}}℃
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm湿度：</span>
                        {{Number(weather2)-6.6}}%
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm湿度：</span>
                        {{Number(weather2)-7.6}}%
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">光照度：</span>
                        {{Math.round(Math.random()*80)+20}}h
                      </span>
                    </div>
                    <div>
                      <span style="white-space:nowrap">
                        <span class="monitor-message special" style="width:93px">蒸发量：</span>
                        {{(Math.round(Math.random()*30)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">降雨量：</span>
                        {{(Math.round(Math.random()*10)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                </ul>
              </CarouselItem>
              <CarouselItem>
                <div class="monitor-base">
                  <span>花园基地</span>
                  <div class="update-time">
                    <span>{{date}}</span>
                    <span>{{hours}}</span>
                  </div>
                </div>
                <ul>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">大气温度：</span>
                        {{weather-Math.round(Math.random()*5)}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">大气湿度：</span>
                        {{Number(weather2)+3}}%
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm温度：</span>
                        {{weather-Math.round(Math.random()*5)-1}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm温度：</span>
                        {{weather-Math.round(Math.random()*5)-2.5}}℃
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm湿度：</span>
                        {{Number(weather2)-2}}%
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm湿度：</span>
                        {{Number(weather2)-3.5}}%
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">光照度：</span>
                        {{Math.round(Math.random()*80)+20}}h
                      </span>
                    </div>
                    <div>
                      <span style="white-space:nowrap">
                        <span class="monitor-message special" style="width:93px">蒸发量：</span>
                        {{(Math.round(Math.random()*30)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">降雨量：</span>
                        {{(Math.round(Math.random()*10)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                </ul>
              </CarouselItem>
              <CarouselItem>
                <div class="monitor-base">
                  <span>花园良种繁育园</span>
                  <div class="update-time">
                    <span>{{date}}</span>
                    <span>{{hours}}</span>
                  </div>
                </div>
                <ul>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">大气温度：</span>
                        {{weather-Math.round(Math.random()*5)}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">大气湿度：</span>
                        {{Number(weather2)-1}}%
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm温度：</span>
                        {{weather-Math.round(Math.random()*5)-3}}℃
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm温度：</span>
                        {{weather-Math.round(Math.random()*5)-3.5}}℃
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">土壤10cm湿度：</span>
                        {{Number(weather2)-2}}%
                      </span>
                    </div>
                    <div>
                      <span>
                        <span class="monitor-message">土壤20cm湿度：</span>
                        {{Number(weather2)-2.8}}%
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">光照度：</span>
                        {{Math.round(Math.random()*80)+20}}h
                      </span>
                    </div>
                    <div>
                      <span style="white-space:nowrap">
                        <span class="monitor-message special" style="width:93px">蒸发量：</span>
                        {{(Math.round(Math.random()*30)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                  <li class="monitor-item">
                    <div>
                      <span>
                        <span class="monitor-message">降雨量：</span>
                        {{(Math.round(Math.random()*10)*1.1).toFixed(1)}}mm
                      </span>
                    </div>
                  </li>
                </ul>
              </CarouselItem>
            </Carousel>
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
import polygonal from "@/components/polygonal/polygonal";
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
    polygonal,
    Foot
  },
  data() {
    return {
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
      allbasearea: 0
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
    this._drawRainMap();
    this._drawLine(); //左侧折线图
    // this._getJson()
    let that = this;
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
          that.addBlockOnMap();
        });
        that.baseinfo = [];
        that.jinmihezuo2 = [];
        that.hezuoshe2 = [];
        that.jiatingnongchang2 = [];
        that.baseLength = 0;
        that.jinmihezuoL = 0;
        that.hezuosheL = 0;
        that.jiatingnongchangL = 0;

        for (let i = 0; i < res.data.result.length; i++) {
          if (res.data.result[i].type == 1) {
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
          if (res.data.result[i].type == 2) {
            that.hezuosheL++;
            that.hezuoshe2.push(res.data.result[i]);
            let lng = res.data.result[i].lng;
            let lat = res.data.result[i].lat;
            let marker1 = new AMap.CircleMarker({
              radius: 5,
              topWhenClick: true,
              zIndex: 999,
              fillColor: "#dc9748",
              strokeColor: "#dc9748",
              center: new AMap.LngLat(lng, lat)
            });
            that.hezuoshe.push(marker1);
            that.map.add(marker1);
            marker1.on("click", function(e) {
              that.$router.push({
                name: "base",
                query: { baseId: Number(res.data.result[i].baseId) }
              });
            });
            marker1.on("mousemove", function(e) {
              marker1.setRadius(18);
              marker1.setOptions({ fillOpacity: 0.5 });
              that.tip = res.data.result[i].name;
            });
            marker1.on("mouseout", function(e) {
              marker1.setRadius(5);
              marker1.setOptions({ fillOpacity: 1 });
              that.tip = "";
            });
          }
          if (res.data.result[i].type == 3) {
            that.jiatingnongchangL++;
            that.jiatingnongchang2.push(res.data.result[i]);
            let lng = res.data.result[i].lng;
            let lat = res.data.result[i].lat;
            let marker2 = new AMap.CircleMarker({
              radius: 5,
              topWhenClick: true,
              zIndex: 999,
              fillColor: "#289CF4",
              strokeColor: "#289CF4",
              center: new AMap.LngLat(lng, lat)
            });
            that.jiatingnongchang.push(marker2);
            that.map.add(marker2);
            marker2.on("click", function(e) {
              that.$router.push({
                name: "base",
                query: { baseId: Number(res.data.result[i].baseId) }
              });
            });
            marker2.on("mousemove", function(e) {
              marker2.setRadius(18);
              marker2.setOptions({ fillOpacity: 0.5 });
              that.tip = res.data.result[i].name;
            });
            marker2.on("mouseout", function(e) {
              marker2.setRadius(5);
              marker2.setOptions({ fillOpacity: 1 });
              that.tip = "";
            });
          }
          if (res.data.result[i].type == 4) {
            that.jinmihezuoL++;
            that.jinmihezuo2.push(res.data.result[i]);
            let lng = res.data.result[i].lng;
            let lat = res.data.result[i].lat;
            let marker3 = new AMap.CircleMarker({
              radius: 5,
              topWhenClick: true,
              zIndex: 999,
              fillColor: "#fe58fe",
              strokeColor: "#fe58fe",
              center: new AMap.LngLat(lng, lat)
            });
            that.jinmihezuo.push(marker3);
            that.map.add(marker3);
            marker3.on("click", function(e) {
              that.$router.push({
                name: "base",
                query: { baseId: Number(res.data.result[i].baseId) }
              });
            });
            marker3.on("mousemove", function(e) {
              marker3.setRadius(18);
              marker3.setOptions({ fillOpacity: 0.5 });
              that.tip = res.data.result[i].name;
            });
            marker3.on("mouseout", function(e) {
              marker3.setRadius(5);
              marker3.setOptions({ fillOpacity: 1 });
              that.tip = "";
            });
          }
        }
      });
    });
  },
  methods: {
    addBlockOnMap() {
      for (let i = 0; i < this.blockinfo.length; i++) {
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
      this.$refs.mapChart.style.height = "520px";
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
          // {
          //     name: "农户",
          //     type: "effectScatter",
          //     coordinateSystem: "geo",
          //     data: this.plotDatas,
          //     showEffectOn: "render",
          //     rippleEffect: {
          //         brushType: "stroke"
          //     },
          //     hoverAnimation: true,
          //     label: {
          //         normal: {
          //             formatter: "{b}",
          //             position: "top",
          //             show: false
          //         },
          //         emphasis: {
          //             show: true,
          //             textStyle: {
          //                 color: "white",
          //                 fontSize: 16,
          //                 fontWeight: 700
          //             }
          //         }
          //     },
          //     itemStyle: {
          //         normal: {
          //             color: '#7f42a0'
          //         }
          //     },
          //     // zlevel: 0
          // },
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
<style lang="stylus">
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
  margin: 20px 15px 0 15px;
  display: flex;

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
    flex: 1.4;
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
    flex: 2.2;
    height: 850px;
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
      height: 210px;

      .base {
        height: 165px;
        .base-map {
          height: 165px;
          width: 40%;
          display: inline-block;
        }
        .item-bg-y{
          width:50%;
           background: url('../assets/new/bg1.png') no-repeat;
           color: #b1fef6;
          line-height: 30px;
          font-size:16px;
          padding:0 10px;
        }
        .base-info {
          width: 100%;
          height: 165px;
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
    flex: 1.4;
    margin-left: 30px;
    height: 850px;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    min-width: 400px;

    .airs {
      position: relative;
      flex: 1;
      margin-top: 10px;

      .monitor-data {
        height: 285px;
        background-color: #26374c;

        .lunbo-wrapper {
          height: 285px;
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
        height: 205px;
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
  max-height: 36%;
}

.base-container {
  min-height: 100%;
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
    padding:10px 0;
    text-align:center;
    background: url('../assets/new/button_set.png') no-repeat;
    background-size: 100% 100%;
  }
  .btn-margin{
    width:20px;
    display: inline-block;
  }
}
</style>

