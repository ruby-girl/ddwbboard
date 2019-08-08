<template>
  <div class="base">
    <headers></headers>
    <div class="base-wrapper">
      <div class="company-info">
        <div class="desc">
          <div class="title">公司简介</div>
          <div class="descs">Company profile</div>
        </div>
        <div class="company">
          <img src="../assets/ddwb.png" alt="">
          <p class="company-desc">四川代代为本农业科技有限公司于2010年成立，位于三台县芦溪工业集中区，公司致力川产道地药材产业化发展，荣获省级农业产业化经营重点龙头企业、科技型中小企业等荣誉称号，先后承担国家科技部、国家发改委、国家中医药管理局、省科技厅等省部级科研项目10余项...<span @click="() => {this.$router.push({path: '/company'})}" style="color:#289CF4; cursor:pointer; margin-left:10px">详情 ></span></p>
        </div>
        <div class="desc pos" style="margin-top:20px">
          <div class="title">基地监控</div>
          <div class="descs">Base monitor</div>
          <Cascader @on-change="selectAddress" class="select" :data="addresss"></Cascader>
        </div>
        <div class="monitor" id="monitor">
          <video id="myVideo" width="100%" height="100%" ref="myPlayer" controls :src="address"></video>
        </div>
      </div>
      <div class="map-message">
        <div class="map-wrapper">
          <div class="desc">
            <div class="title">数据地图</div>
            <div class="descs">The data map</div>
          </div>
          <div class="map" ref="mapChart">
            <div class="twotip">
               <div class="base-point">
              <span class="icon2" style="background-color:#9ACD32"></span>
              <span class="text">麦冬核心区</span>
            </div><div class="base-point">
              <span class="icon2" style="background-color:#FFF68F"></span>
              <span class="text">麦冬适种区</span>
            </div>
            </div>
            <div class="tip">{{tip}}</div>
            <div class="changebut" style="background-color:#7e43aa;" @click="changemap">切换卫星地图</div>
            <div class="point">
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
            </div>
          </div>
          <div class="map-footer">
            <div class="base-count">
              <span class="icon" style="background-color:#fe5858"></span>
              <span class="text">合作基地数量</span>
              <span class="count">{{baseLength}}</span>
            </div>
            <div class="earth-count">
              <span class="icon" style="background-color:#dc9748"></span>
              <span class="text">合作社数量</span>
              <span class="count">{{hezuosheL}}</span>
            </div>
            <div class="area-count">
              <span class="icon" style="background-color:#289CF4"></span>
              <span class="text">家庭农场数量</span>
              <span class="count">{{jiatingnongchangL}}</span>
            </div>
            <div class="farmar-count">
              <span class="icon" style="background-color:#fe58fe"></span>
              <span class="text">紧密合作基地数量</span>
              <span class="count">{{jinmihezuoL}}</span>
            </div>
          </div>
        </div>
        <div class="base-message">
          <div class="desc">
            <div class="title">基础信息</div>
            <div class="descs">Base information</div>
          </div>
          <div class="base">
            <baseMap></baseMap>
            <div class="base-info" id="base-info">
                <ul id="base-ul1" style="position:relative; top:0">
                  <li class="base-item" v-for="(item,index) in this.baseDatas"
                  :key="index">
                    <i class='icon' :style="{backgroundColor: item.itemStyle.color}"></i>
                    <span style="text-align: left;display:inline-block; width: 150px;color: #fff">{{item.name}}</span>
                    <span style="color: #fff;display:inline-block; width: 80px;">{{item.value}}亩</span>
                  </li>
                </ul>
                <ul id="base-ul2" style="position:relative; top:0">
                   <li class="base-item" v-for="(item,index) in this.baseDatas"
                  :key="index">
                    <i class='icon' :style="{backgroundColor: item.itemStyle.color}"></i>
                    <span style="text-align: left;display:inline-block; width: 210px;color: #fff">{{item.name}}</span>
                    <span style="color: #fff;display:inline-block; width: 80px;">{{item.value}}亩</span>
                  </li>
                </ul>
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
            <div class="title">重金属</div>
            <div class="descs">Heavy metal</div>
          </div>
          <div class="rain-map" ref="rainMap"></div>
        </div>
        <div class="airs air-pressure">
          <div class="desc pos">
            <div class="title">监测数据</div>
            <div class="descs">Monitoring data</div>
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
                        <img src="../assets/daqiwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气温度：</span>27.3℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气湿度：</span>10.0%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm温度：</span>27.8℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm温度：</span>27.0℃
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm湿度：</span>17.8%
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm湿度：</span>17.8%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">光照度：</span>67h
                        </span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span style="white-space:nowrap">
                          <span class="monitor-message special" style="width:93px">蒸发量：</span>27.3mm
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">降雨量：</span>0.0mm
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
                        <img src="../assets/daqiwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气温度：</span>27.3℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气湿度：</span>10.0%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm温度：</span>27.8℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm温度：</span>27.0℃
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm湿度：</span>17.8%
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm湿度：</span>17.8%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">光照度：</span>67h
                        </span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span style="white-space:nowrap">
                          <span class="monitor-message special" style="width:93px">蒸发量：</span>27.3mm
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">降雨量：</span>0.0mm
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
                        <img src="../assets/daqiwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气温度：</span>27.3℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气湿度：</span>10.0%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm温度：</span>27.8℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm温度：</span>27.0℃
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm湿度：</span>17.8%
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm湿度：</span>17.8%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">光照度：</span>67h
                        </span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span style="white-space:nowrap">
                          <span class="monitor-message special" style="width:93px">蒸发量：</span>27.3mm
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">降雨量：</span>0.0mm
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
                        <img src="../assets/daqiwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气温度：</span>27.3℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">大气湿度：</span>10.0%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm温度：</span>27.8℃
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm温度：</span>27.0℃
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤10cm湿度：</span>17.8%
                        </span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">土壤20cm湿度：</span>17.8%
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">光照度：</span>67h
                        </span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span style="white-space:nowrap">
                          <span class="monitor-message special" style="width:93px">蒸发量：</span>27.3mm
                        </span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>
                          <span class="monitor-message">降雨量：</span>0.0mm
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
    <Foot style="margin:0px;"/>
  </div>
</template>
<script>
import headers from '@/components/header/header'
import baseMap from '@/components/baseMap/baseMap'
import MapLoader from '@/utils/loadMap.js'
import polygonal from '@/components/polygonal/polygonal'
import Foot from '@/components/layouts/GlobalFooter.vue'
import chartsType from '../assets/js/chartsType.js';
import roll from '../assets/js/roll.js';
import axios from 'axios'

const dataAxis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default {
  name: 'home',
  components: {
      headers,
      baseMap,
      polygonal,
      Foot
    },
  data(){
    return{
      messages: [],
      mapDatas: [],
      weixin:false,
      showColorDatas: [
        {
          name: '石安镇',
          value: 1
        },
        {
          name: '芦溪镇',
          value: 1
        },
        {
          name: '刘营镇',
          value: 1
        },
        {
          name: '永新镇',
          value: 1
        },
        {
          name: '高堰乡',
          value: 1
        },
        {
          name: '中太镇',
          value: 1
        },
        {
          name: '灵兴镇',
          value: 2
        },
        {
          name: '争胜镇',
          value: 2
        },
        {
          name: '里程镇',
          value: 2
        },
        {
          name: '老马镇',
          value: 2
        },
        {
          name: '光辉镇',
          value: 2
        },
        {
          name: '花园镇',
          value: 2
        },
        {
          name: '永明镇',
          value: 2
        }
      ],
      plotDatas: [],
      mapChart: '',
      baseLength: 0,
      plotLength: 0,
      totalArea: 0,
      option: {},
      addresss: [],
      baseinfo:[],
      address: '',
      curLock: false,
      serviceData: [],
      date: '',
      hours: '',
      metalDatas: [40, 200, 90, 140, 130, 0.2, 20, 0.4],
      baseDatas: [
          {itemStyle: {color: '#975FE5'}},
          {itemStyle: {color: '#FE8463'}},
          {itemStyle: {color: '#36CBCB'}},
          {itemStyle: {color: '#E55F76'}},
          {itemStyle: {color: '#3AA1FF'}},
          {itemStyle: {color: '#5FE583'}},
          {itemStyle: {color: '#5F95E5'}},
          {itemStyle: {color: '#E5AF5F'}},
          {itemStyle: {color: '#36CBCB'}},
          {itemStyle: {color: '#4ECB73'}},
          {itemStyle: {color: '#FBD437'}},
          {itemStyle: {color: '#975FE5'}},
          {itemStyle: {color: '#FE8463'}},
          {itemStyle: {color: '#36CBCB'}},
          {itemStyle: {color: '#E55F76'}},
          {itemStyle: {color: '#3AA1FF'}},
          {itemStyle: {color: '#5FE583'}},
          {itemStyle: {color: '#5F95E5'}},
          {itemStyle: {color: '#E5AF5F'}},
          {itemStyle: {color: '#36CBCB'}},
          {itemStyle: {color: '#4ECB73'}},
          {itemStyle: {color: '#FBD437'}},
          {itemStyle: {color: '#975FE5'}},
          {itemStyle: {color: '#FE8463'}},
          {itemStyle: {color: '#36CBCB'}},
          {itemStyle: {color: '#E55F76'}},
          {itemStyle: {color: '#3AA1FF'}},
          {itemStyle: {color: '#5FE583'}},
          {itemStyle: {color: '#5F95E5'}},
          {itemStyle: {color: '#E5AF5F'}},
          {itemStyle: {color: '#36CBCB'}},
          {itemStyle: {color: '#4ECB73'}},
          {itemStyle: {color: '#FBD437'}},
          {itemStyle: {color: '#975FE5'}},
          {itemStyle: {color: '#FE8463'}},
          {itemStyle: {color: '#36CBCB'}},
          {itemStyle: {color: '#E55F76'}},
          {itemStyle: {color: '#3AA1FF'}},
          {itemStyle: {color: '#5FE583'}},
          {itemStyle: {color: '#5F95E5'}},
          {itemStyle: {color: '#E5AF5F'}},
      ],
      tip:'',
      markers:[],
      hezuoshe:[],
      jiatingnongchang:[],
      jinmihezuo:[],
      hezuosheL:'',
      jiatingnongchangL:'',
      jinmihezuoL:'',
      hezuoshe2:[],
      jiatingnongchang2:[],
      jinmihezuo2:[],
      blockinfo:[],
      polygonss:[],
    }
  },
  created () {
    if (!window.localStorage.token) {
      console.log(111)
      let params = 'appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
      axios.post('https://open.ys7.com/api/lapp/token/get', params, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        if (res.data.code == 200) {
          token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
          window.localStorage.setItem('token', token)
        }
      })
    }
    this._getAddress()
    if(this.$route.query.time){
      console.log('开始')
      let that=this;
    window.addEventListener('done1', function(){

      that.all();

    })
    }
  },
  mounted () {
    if (this.baseScroll) {
      clearInterval(this.baseScroll.timer)
    }
    this._drawCityMap()
    this._drawRainMap()
    // this._getJson()
    let that=this;
    axios.get('json/base_info.json').then(res => {
      for(let i=0;i<res.data.result.length;i++){
        that.baseDatas[i].name =res.data.result[i].name
        that.baseDatas[i].value =res.data.result[i].area
          if (that.baseScroll) {
      console.log(that.baseScroll)
      clearInterval(that.baseScroll.timer)
    }
 that.$nextTick(() => {
              if (that.baseScroll) {
                clearInterval(that.baseScroll.timer)
              }
              that.baseScroll = new roll.Roll('base-info', 'base-ul1', 'base-ul2', -1060)
            })
      }
    window.addEventListener('done1', function(){
       let googleLayer = new AMap.TileLayer({
              getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
           });//定义谷歌卫星切片图层

        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity:0
        }); //定义一个路网图层
        // var layer = new AMap.TileLayer();
      that.map.setLayers([googleLayer,roadNetLayer]);
      axios.get('json/blockinfo.json').then((res)=>{
        that.blockinfo=res.data.result;
        that.addBlockOnMap();
      })
      that.baseinfo=[];
      that.jinmihezuo2=[];
      that.hezuoshe2=[];
      that.jiatingnongchang2=[];
      that.baseLength=0;
      that.jinmihezuoL=0;
      that.hezuosheL=0;
      that.jiatingnongchangL=0;

    for(let i=0;i<res.data.result.length;i++){

      if(res.data.result[i].type==1){
        that.totalArea += res.data.result[i].area

        that.mapDatas.push({
          name: res.data.result[i].name,
          value: [res.data.result[i].lng, res.data.result[i].lat],
          id: res.data.result[i].baseId
        })
        that.baseLength++;
         that.baseinfo.push(res.data.result[i]);
           let lng=res.data.result[i].lng;
           let lat=res.data.result[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#fe5858',
              strokeColor: '#fe5858',
              center: new AMap.LngLat(lng, lat),
});
that.markers.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(res.data.result[i].baseId)}})});
     marker.on("mousemove",function(e) {
       marker.setRadius(8);
       that.tip=res.data.result[i].name
       });
      marker.on("mouseout",function(e) {
        marker.setRadius(5);
        that.tip=''
        });
         }
         if(res.data.result[i].type==2){
      that.hezuosheL++;
        that.hezuoshe2.push(res.data.result[i]);
           let lng=res.data.result[i].lng;
           let lat=res.data.result[i].lat;
           let marker1= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#dc9748',
              strokeColor: '#dc9748',
              center: new AMap.LngLat(lng, lat),
});
that.hezuoshe.push(marker1);
    that.map.add(marker1);
    marker1.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(res.data.result[i].baseId)}})});
     marker1.on("mousemove",function(e) {marker1.setRadius(8);that.tip=res.data.result[i].name});
      marker1.on("mouseout",function(e) {marker1.setRadius(5);that.tip=''});
    }
    if(res.data.result[i].type==3){
      that.jiatingnongchangL++;
        that.jiatingnongchang2.push(res.data.result[i]);
           let lng=res.data.result[i].lng;
           let lat=res.data.result[i].lat;
           let marker2= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#289CF4',
              strokeColor: '#289CF4',
              center: new AMap.LngLat(lng, lat),
});
that.jiatingnongchang.push(marker2);
    that.map.add(marker2);
    marker2.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(res.data.result[i].baseId)}})});
     marker2.on("mousemove",function(e) {marker2.setRadius(8);that.tip=res.data.result[i].name});
      marker2.on("mouseout",function(e) {marker2.setRadius(5);that.tip=''});
    }
    if(res.data.result[i].type==4){
      that.jinmihezuoL++;
        that.jinmihezuo2.push(res.data.result[i]);
           let lng=res.data.result[i].lng;
           let lat=res.data.result[i].lat;
           let marker3= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#fe58fe',
              strokeColor: '#fe58fe',
              center: new AMap.LngLat(lng, lat),
});
that.jinmihezuo.push(marker3);
    that.map.add(marker3);
    marker3.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(res.data.result[i].baseId)}})});
     marker3.on("mousemove",function(e) {marker3.setRadius(8);that.tip=res.data.result[i].name});
      marker3.on("mouseout",function(e) {marker3.setRadius(5);that.tip=''});
    }
    }

      });
//   axios.get('json/baseinfo.json').then(res => {
//     for(let i=0;i<res.data.result.length;i++){
//            let lng=res.data.result[i].lng;
//            let lat=res.data.result[i].lat;
//            let marker= new  AMap.CircleMarker({
//               radius:5,
//               fillColor:'#fe5858',
//               strokeColor: '#fe5858',
//               center: new AMap.LngLat(lng, lat),
// });
// that.markers.push(marker);
//     that.map.add(marker);
//     marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(res.data.result[i].baseId)}})});
//      marker.on("mousemove",function(e) {that.tip=res.data.result[i].baseName});
//       marker.on("mouseout",function(e) {that.tip=''});
//          }
//       });
//       axios.get('json/hezuoshe.json').then(res=>{
//         that.hezuosheL=res.data.result.length;
//         that.hezuoshe2=res.data.result;
//         for(let i=0;i<res.data.result.length;i++){
//            let lng=res.data.result[i].lng;
//            let lat=res.data.result[i].lat;
//            let marker1= new  AMap.CircleMarker({
//               radius:5,
//               fillColor:'#dc9748',
//               strokeColor: '#dc9748',
//               center: new AMap.LngLat(lng, lat),
// });
// that.hezuoshe.push(marker1);
//     that.map.add(marker1);
//      marker1.on("mousemove",function(e) {that.tip=res.data.result[i].name});
//       marker1.on("mouseout",function(e) {that.tip=''});
//          }
//       })

//  axios.get('json/jiatinnongchang.json').then(res=>{
//    that.jiatingnongchangL=res.data.result.length;
//    that.jiatingnongchang2=res.data.result;
//         for(let i=0;i<res.data.result.length;i++){
//            let lng=res.data.result[i].lng;
//            let lat=res.data.result[i].lat;
//            let marker2= new  AMap.CircleMarker({
//               radius:5,
//               fillColor:'#289CF4',
//               strokeColor: '#289CF4',
//               center: new AMap.LngLat(lng, lat),
// });
// that.jiatingnongchang.push(marker2);
//     that.map.add(marker2);
//     marker2.on("mousemove",function(e) {that.tip=res.data.result[i].name});
//      marker2.on("mouseout",function(e) {that.tip=''});
//          }
//       })

// axios.get('json/jinmihezuo.json').then(res=>{
//   that.jinmihezuoL=res.data.result.length;
//   that.jinmihezuo2=res.data.result
//         for(let i=0;i<res.data.result.length;i++){
//            let lng=res.data.result[i].lng;
//            let lat=res.data.result[i].lat;
//            let marker3= new  AMap.CircleMarker({
//               radius:5,
//               fillColor:'#fe58fe',
//               strokeColor: '#fe58fe',
//               center: new AMap.LngLat(lng, lat),
// });
// that.jinmihezuo.push(marker3);
//     that.map.add(marker3);
//     marker3.on("mousemove",function(e) {that.tip=res.data.result[i].name});
//     marker3.on("mouseout",function(e) {that.tip=''});
//          }
//       })

  });
  },
  methods: {
    addBlockOnMap(){
        for(let i=0;i<this.blockinfo.length;i++){
        let item = this.blockinfo[i];
        if(item.remark!=undefined && item.remark!=null && item.remark.trim()!=""){
            let remarkJson2 = eval('(' + item.remark + ')');
            let newPath = [];
            for(let i=0;i<remarkJson2.path.length;i++){
            let point=remarkJson2.path[i];
            newPath.push(new AMap.LngLat(point.lng,point.lat));
            }
            remarkJson2.path = newPath;
            let polygon2 = new AMap.Polygon(remarkJson2);
            this.polygonss=[];
            this.polygonss.push(polygon2);
            this.map.add(polygon2);
        }
        }
        },
    removepoint(){
     this.map.remove(this.markers);
     this.map.remove(this.hezuoshe);
     this.map.remove(this.jiatingnongchang);
     this.map.remove(this.jinmihezuo);
    },
    all(){
      this.removepoint();
      let that=this;
      that.markers=[];
      that.hezuoshe=[];
      that.jiatingnongchang=[];
      that.jinmihezuo=[];
      for(let i=0;i<that.baseinfo.length;i++){
           let lng=that.baseinfo[i].lng;
           let lat=that.baseinfo[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#fe5858',
              strokeColor: '#fe5858',
              center: new AMap.LngLat(lng, lat),
});
    that.markers.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.baseinfo[i].baseId)}})});
    marker.on("mousemove",function(e) {marker.setRadius(8);that.tip=that.baseinfo[i].name});
      marker.on("mouseout",function(e) {marker.setRadius(5);that.tip=''});
         }
          for(let i=0;i<that.hezuoshe2.length;i++){
           let lng=that.hezuoshe2[i].lng;
           let lat=that.hezuoshe2[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#dc9748',
              strokeColor: '#dc9748',
              center: new AMap.LngLat(lng, lat),
});
    that.hezuoshe.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.hezuoshe2[i].baseId)}})});
    marker.on("mousemove",function(e) {marker.setRadius(8);that.tip=that.hezuoshe2[i].name});
      marker.on("mouseout",function(e) {marker.setRadius(5);that.tip=''});
         }
          for(let i=0;i<that.jiatingnongchang2.length;i++){
           let lng=that.jiatingnongchang2[i].lng;
           let lat=that.jiatingnongchang2[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#289CF4',
              strokeColor: '#289CF4',
              center: new AMap.LngLat(lng, lat),
});
    that.jiatingnongchang.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jiatingnongchang2[i].baseId)}})});
    marker.on("mousemove",function(e) {marker.setRadius(8);that.tip=that.jiatingnongchang2[i].name});
      marker.on("mouseout",function(e) {marker.setRadius(5);that.tip=''});
         }
          for(let i=0;i<that.jinmihezuo2.length;i++){
           let lng=that.jinmihezuo2[i].lng;
           let lat=that.jinmihezuo2[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#fe58fe',
              strokeColor: '#fe58fe',
              center: new AMap.LngLat(lng, lat),
});
    that.jinmihezuo.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jinmihezuo2[i].baseId)}})});
    marker.on("mousemove",function(e) {
      marker.setRadius(8);
      that.tip=that.jinmihezuo2[i].name;
      });
      marker.on("mouseout",function(e) {
        marker.setRadius(5);
        that.tip='';
        });
         }

    },
    hezuo1(){
     this.removepoint();
     let that=this;
     that.markers=[];
      for(let i=0;i<that.baseinfo.length;i++){
           let lng=that.baseinfo[i].lng;
           let lat=that.baseinfo[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#fe5858',
              strokeColor: '#fe5858',
              center: new AMap.LngLat(lng, lat),
});
that.markers.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.baseinfo[i].baseId)}})});
    marker.on("mousemove",function(e) {marker.setRadius(8);that.tip=that.baseinfo[i].name});
      marker.on("mouseout",function(e) {marker.setRadius(5);that.tip=''});
         }

    },
    hezuoshe1(){
     this.removepoint();
    //  this.map.add(this.hezuoshe);
    let that=this;
     that.hezuoshe=[];
      for(let i=0;i<that.hezuoshe2.length;i++){
           let lng=that.hezuoshe2[i].lng;
           let lat=that.hezuoshe2[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#dc9748',
              strokeColor: '#dc9748',
              center: new AMap.LngLat(lng, lat),
});
that.hezuoshe.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.hezuoshe2[i].baseId)}})});
    marker.on("mousemove",function(e) {marker.setRadius(8);that.tip=that.hezuoshe2[i].name});
      marker.on("mouseout",function(e) {marker.setRadius(5);that.tip=''});
         }
    },
    jiatin1(){
     this.removepoint();
    //  this.map.add(this.jiatingnongchang);
    let that=this;
     that.jiatingnongchang=[];
      for(let i=0;i<that.jiatingnongchang2.length;i++){
           let lng=that.jiatingnongchang2[i].lng;
           let lat=that.jiatingnongchang2[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#289CF4',
              strokeColor: '#289CF4',
              center: new AMap.LngLat(lng, lat),
});
that.jiatingnongchang.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jiatingnongchang2[i].baseId)}})});
    marker.on("mousemove",function(e) {marker.setRadius(8);that.tip=that.jiatingnongchang2[i].name});
      marker.on("mouseout",function(e) {marker.setRadius(5);that.tip=''});
         }
    },
    jinmi1(){
     this.removepoint();
    //  this.map.add(this.jinmihezuo);
    let that=this;
     that.jinmihezuo=[];
      for(let i=0;i<that.jinmihezuo2.length;i++){
           let lng=that.jinmihezuo2[i].lng;
           let lat=that.jinmihezuo2[i].lat;
           let marker= new  AMap.CircleMarker({
              radius:5,
              topWhenClick:true,
              zIndex:999,
              fillColor:'#fe58fe',
              strokeColor: '#fe58fe',
              center: new AMap.LngLat(lng, lat),
});
that.jinmihezuo.push(marker);
    that.map.add(marker);
    marker.on("click",function(e) { that.$router.push({ name: 'base',query:{baseId:Number(that.jinmihezuo2[i].baseId)}})});
    marker.on("mousemove",function(e) {marker.setRadius(8);that.tip=that.jinmihezuo2[i].name});
      marker.on("mouseout",function(e) {marker.setRadius(5);that.tip=''});
         }
    },
    changemap(){
if(this.weixin){
  this.map.remove(this.map.getLayers());
   let googleLayer = new AMap.TileLayer({
              getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
           });//定义谷歌卫星切片图层

        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity:0
        }); //定义一个路网图层
         var layer = new AMap.TileLayer();
      this.map.setLayers([googleLayer,roadNetLayer,layer]);
      this.weixin=false;
}else{
       this.map.remove(this.map.getLayers());
       let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity:0
        }); //定义一个路网图层
        let layer = new AMap.TileLayer();
      this.map.setLayers([roadNetLayer,layer]);
      this.weixin=true;
}
    },
    _getAddress (token) {
        var date = new Date().toString().split(' ')
        var month = new Date().getMonth() + 1
        var str = ''
        this.date = str + date[3] + '-' + month + '-' + date[2]
        this.hours = date[4]
        let params = 'appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
        let curToken = token ? token : window.localStorage.token
        axios.post('https://open.ys7.com/api/lapp/live/video/list', curToken, {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
        console.log(res)
        if (res.data.code == 200) {
            if (res.data.data && res.data.data.length) {
                console.log(res.data.data)
                this.addresss.push({
                  label: res.data.data[3].deviceName,
                  value: res.data.data[3].deviceSerial,
                  children: []
                })
            for (let i = 3; i < res.data.data.length; i++) {
                for (let j = 0; j < this.addresss.length; j++) {
                if (this.addresss[j].label === res.data.data[i].deviceName) {
                    this.curLock = true
                    this.addresss[j].children.push({
                        label: '通道' + res.data.data[i].channelNo,
                        value: res.data.data[i].liveAddress
                    })
                }
                }
                if (!this.curLock) {
                    this.addresss.push({
                    label: res.data.data[i].deviceName,
                    value: res.data.data[i].deviceSerial,
                    children: [{
                      label: '通道' + res.data.data[i].channelNo,
                      value: res.data.data[i].liveAddress
                      }]
                    })
                }
                this.curLock = false
            }
            }
        } else if (res.data.code == 10002) {
        axios.post('https://open.ys7.com/api/lapp/token/get', params, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
        }).then(res => {
        if (res.data.code == 200) {
        console.log(res)
        token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
        window.localStorage.setItem('token', token)
        this._getAddress(token)
        }
        })
        } else if (res.data.code == 10001) {
        axios.post('https://open.ys7.com/api/lapp/token/get', params, {
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }
        }).then(res => {
        if (res.data.code == 200) {
        console.log(res)
        token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
        window.localStorage.setItem('token', token)
        this._getAddress(token)
        }
        })
        }
        this.$nextTick(() => {
        myVideo.addEventListener('play', () => {
        this.player.on()
        })
        })
        })
},
    // _getJson() {
    //   axios.get('json/base_info.json').then(res => {
    //     if (res.status == 200) {
    //       this.baseinfo=res.data.result;
    //       let data = res.data.result
    //       if (data && data.length) {
    //         this.baseLength = data.length
    //         for (var i = 0; i < data.length; i++) {
    //           this.totalArea += data[i].area
    //           this.baseDatas[i].name = data[i].baseName
    //           this.baseDatas[i].value = data[i].area
    //           this.mapDatas.push({
    //             name: data[i].baseName,
    //             value: [data[i].lng, data[i].lat],
    //             id: data[i].baseId
    //           })
    //         }
    //         this.$nextTick(() => {
    //           if (this.baseScroll) {
    //             clearInterval(this.baseScroll.timer)
    //           }
    //           this.baseScroll = new roll.Roll('base-info', 'base-ul1', 'base-ul2', -280)
    //         })
    //       }
    //     }
    //   })
      // axios.get('json/plot.json').then(res => {
      //   if (res.status == 200) {
      //     let data = res.data.result
      //     if (data && data.length) {
      //       this.baseLength = data.length
      //       for (var i = 0; i < data.length; i++) {
      //         var plots = data[i].plot
      //         if (plots && plots.length) {
      //           this.plotLength += plots.length
      //           for (var j = 0; j < plots.length; j++) {
      //             this.plotDatas.push({
      //               name: plots[j].plotName,
      //               value: [plots[j].lng, plots[j].lat],
      //               id: data[i].baseId
      //             })
      //           }
      //         }
      //       }
      //     }
      //   }
      // })
    //   axios.get('json/process.json').then(res => {
    //     if (res.status == 200) {
    //       let data = res.data.result
    //       if (data && data.length) {
    //         for(var i = 0; i < data.length; i++) {
    //           if (data[i].process && data[i].process.length) {
    //             for(var j = 0; j < data[i].process.length; j++) {
    //               this.messages.push(data[i].process[j])
    //             }
    //           }
    //         }
    //       }
    //     }
    //   })
    // },
    _drawRainMap () {
      let rainChart = this.$echarts.init(this.$refs.rainMap);
      var option = chartsType.charts(['镍', '锌', '铜', '总铬', '铅', '镉', '总砷','总汞'], this.metalDatas,'用量（mg/kg）','bar','实际值','#289CF4','x');
      option.legend = {
          left: 'right',
          textStyle: {
              color: '#fff'
          }
      }
      option.series.push({
        name:'最大值',
        type:'line',
        data: [50, 250, 100, 200, 300, 0.3, 30, 0.5],
        itemStyle: {
          normal:{
            color: '#4ECB73'
          }
        },
      })
      rainChart.setOption(option);
    },
    _drawCityMap() {
      this.$refs.mapChart.style.height = '550px'
      let that = this
      MapLoader().then(AMap => {
        that.map = new AMap.Map(this.$refs.mapChart, {
          center: [105.013664,31.206397],
          zooms: [10,18],
          // layers:[googleLayer,roadNetLayer,layer], //设置图层
          // viewMode:'3D',
        });

        AMap.plugin('AMap.DistrictSearch',function(){
        var district=new AMap.DistrictSearch({
        extensions:'all',
        subdistrict:0
    })
    district.search('三台县',function(status,result){
        // 外多边形坐标数组和内多边形坐标数组
       var bounds = result.districtList[0].boundaries
       var outer = [
            new AMap.LngLat(-360,90,true),
            new AMap.LngLat(-360,-90,true),
            new AMap.LngLat(360,-90,true),
            new AMap.LngLat(360,90,true),
        ];
        var pathArray = [
            outer
        ];
        pathArray.push.apply(pathArray,bounds)
        var polygon = new AMap.Polygon( {
            path:pathArray,
            strokeColor: '#000000',
            strokeWeight: 1,
            fillColor: '#26374C',
            fillOpacity: 1
        });
        polygon.setPath(pathArray);
        that.map.add(polygon)
        var polygons=[];
    if (bounds) {
      for (var i = 0, l = bounds.length; i < l; i++) {
       //生成行政区划polygon
       var polygon1 = new AMap.Polygon({
         map: that.map,
         strokeWeight: 1,
         path: bounds[i],
         fillOpacity: 0,
         fillColor: '#CCF3FF',
         strokeColor: '#CC66CC'
       })
       polygons.push(polygon1)
     }
     // 地图自适应
     that.map.setFitView(polygons)
   }
    })
    // var bounds = that.map.getBounds();
    // that.map.setLimitBounds(bounds);
        that.map.on("complete", function(){
          console.log("地图加载完成！");
          var myEvent = new CustomEvent('done1',{});
          if(window.dispatchEvent) {
            window.dispatchEvent(myEvent);
          } else {
            window.fireEvent(myEvent);
          }
        });

      })
        })



      // this.mapChart = this.$echarts.init(this.$refs.mapChart)
      // this._setOption()
      // axios.get('json/santai.json').then(res => {
      //   console.log(res)
      //   this.$echarts.registerMap('santai', res.data)
      //   this.mapChart.setOption(this.option)
      // })
    },
    _setOption () {
      this.option = {
        tooltip: {
            trigger: 'item',
            formatter: function () {
              return ''
            }
        },
        legend: {
          bottom: 20,
          left: 20,
          orient: 'vertical',
          textStyle: {
            color: '#fff'
          },
          selectedMode: true
        },
        visualMap: {
            show: false,
            min: 0,
            max: 2,
            left: 'left',
            top: 'top',
            text: ['高', '低'], // 文本，默认为数值文本
            textStyle: {
              color: '#fff'
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
                color: ['#00b583', '#009a6a'] // 蓝绿
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
            map: 'santai',
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
                    borderColor: "#eee",
                },
                emphasis: {
                    areaColor: '#fff',
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
							name: '基地',
							type: 'effectScatter',
							coordinateSystem: 'geo',
							data: this.mapDatas,
							symbolSize: function(val) {
								return 12
							},
							showEffectOn: 'render',
							rippleEffect: {
								brushType: 'stroke'
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
                      color: '#fe5858'
                  }
              },
              // zlevel: 1
            },
            {
                type: 'map',
                map: 'santai',
                geoIndex: 0,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#000',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
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
                  return 12
                },
                data: [{
                  name: '合作社',
                  value: [104.90298, 31.2453],
                  id: 1
                }],
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
                        color: '#dc9748'
                    }
                },
                // zlevel: 0
            },
            {
                name: "家庭农场",
                type: "effectScatter",
                coordinateSystem: "geo",
                symbolSize: function(val) {
                  return 12
                },
                data: [{
                  name: '家庭农场',
                  value: [104.98298, 31.1653],
                  id: 1
                }],
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
                        color: '#289CF4'
                    }
                },
                // zlevel: 0
            },
            {
                name: "农户",
                type: "effectScatter",
                coordinateSystem: "geo",
                symbolSize: function(val) {
                  return 12
                },
                data: [{
                  name: '农户',
                  value: [104.93298, 31.2053],
                  id: 1
                }],
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
                        color: '#fe58fe'
                    }
                },
                // zlevel: 0
            },
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
    selectAddress(datas) {
      if (datas.length != 0) {
        this.address = datas[1]
        this.$nextTick(() => {
          this.player = new EZUIPlayer('myVideo');
        })
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
}
</script>
<style lang="stylus">
@media screen and (min-width: 1550px)
  .base-item
    span:nth-of-type(1)
      width 260px !important
  .monitor-message
    width 150px !important
  .special
    width 140px !important
@media screen and (max-width: 1550px)
  .base-item
    span:nth-of-type(1)
      width 120px !important
  .monitor-message
    width 97px !important
  .special
    width 93px !important
.base-wrapper
  margin 20px 15px 20px
  display flex
  .desc
    height 45px
    color #ffffff
    font-size 16px
    padding-left 10px
    box-sizing border-box
    background-color #26374C
    border-bottom 1px solid rgba(255,255,255,0.08235294117647057)
    .title
      height 20px
      color #289CF4
      line-height 30px
    .descs
      font-size 6px
  .pos
    position relative
    .select
      width 200px
      position absolute
      right 10px
      top 5px
    .monitor-title
      color: #fff;
      text-align: center;
      padding-top: 5px;
      font-size: 18px;
      position absolute
      right 10px
      top 5px
  .company-info
    flex 1.4
    height 850px
    border-radius 6px
    min-width 310px
    .company
      height 405px
      width 100%
      padding 0 10px
      box-sizing border-box
      overflow hidden
      background-color #26374C
      img
        margin-top 15px
        width 100%
        height 235px
      .company-desc
        margin-top 15px
        font-size 14px
        color #EEEEEE
        line-height 22px
    .monitor
      height 335px
      background-color #26374C
      .lunbo-wrapper
        height 100%
        .demo
            height 335px
            line-height 335px
            text-align center
            color #fff
            font-size 30px
            background #26374C
        .ivu-carousel-arrow
          background-color rgba(0, 0, 0, 0.2)
        .ivu-carousel-arrow:hover
          background-color rgba(0, 0, 0, 0.5)

  .map-message
    flex 2.2
    height 850px
    margin-left 30px
    min-width 400px
    .map-wrapper
      width 100%
      border-radius 6px
      .map
        position relative
        height 550px
        background-color #26374c
        .twotip
          position absolute
          left 5%
          bottom 10%
          z-index 99
          .text
            color #fff
          .icon2
            display inline-block
            width 25px
            height 15px
            border-radius 5px
            margin-right 10px
            vertical-align middle
        .tip
          position absolute
          width 30%
          height 30px
          background rgba(0,0,0,0.5)
          z-index 9999
          top 0
          left 35%
          color #fff
          text-align center
          line-height 30px
        .changebut
          position absolute
          width 80px
          height 25px
          text-align center
          line-height 25px
          border-radius 15px
          top 10%
          right 5%
          color #fff
          z-index 99999
          cursor pointer
        .point
          position absolute
          left 5%
          top 10%
          z-index 99999
          .text
            color #fff
          .icon1
            display inline-block
            cursor pointer
            width 15px
            height 15px
            border-radius 50%
            margin-right 10px
            vertical-align middle
      .map-footer
        display flex
        height 25px
        color #ffffff
        font-size 16px
        background-color #2E4562
        .earth-count
          border-left 1px solid rgba(255,255,255,0.08)
          border-right 1px solid rgba(255,255,255,0.08)
        .area-count
          border-right 1px solid rgba(255,255,255,0.08)
        div
          flex 1
          text-align center
          span
            font-size 12px
            vertical-align middle
          .count
            color #6DD230
          span:nth-of-type(1)
            display inline-block
            width 12px
            height 12px
            border-radius 50%
          span:nth-of-type(2)
            margin-left 5px
          span:nth-of-type(3)
            margin-left 10px
    .base-message
      margin-top 20px
      height 210px
      .base
        height 165px
        background-color #26374c
        .base-map
          height 165px
          width 40%
          display inline-block
        .base-info
          width 60%
          height 165px
          display inline-block
          overflow hidden
          text-align: center
          .base-item
            height 26px
            padding 3px 0
            box-sizing border-box
            font-size 12px
            letter-spacing 1px
            .icon
              display inline-block
              width 5px
              height 5px
              border-radius 50%
              margin-right 10px
              vertical-align middle

  .temperature-rain
    flex 1.4
    margin-left 30px
    height 850px
    display flex
    flex-direction column
    padding-bottom 20px
    min-width 400px
    .airs
      position relative
      flex 1
      margin-top 10px
      .monitor-data
        height 285px
        background-color #26374c
        .lunbo-wrapper
          height: 285px;
          padding-top: 6px;
          box-sizing: border-box;
          .ivu-carousel-arrow
              background-color rgba(0, 0, 0, 0.2)
          .ivu-carousel-arrow:hover
              background-color rgba(0, 0, 0, 0.5)
        .monitor-base
          height: 40px;
          margin-left 10px
          color: #fff;
          font-size: 20px;
          line-height: 20px;
          span
            display inline-block
            height 40px
            line-height 40px
            width 55%
            text-align center
          .update-time
            width:45%;
            float:right;
            font-size: 16px
            span
              width 100%
              height 20px
              line-height 20px
        .monitor-item:nth-of-type(1)
          margin-top 12px
        .monitor-item
          padding 0 10px
          text-align left
          display flex
          height 40px
          color: #43cfe0
          .monitor-message
            display:inline-block;
            width:97px;
            text-align:right
          div
            flex 1
            line-height 40px
            height 40px
            img
              margin-right 5px
          div:nth-of-type(1)
            margin-right 10px
      .temperature-map, .rain-map
        height 205px
        background-color #26374c
      .rain
        margin-top 46px
      .message-wrapper
        display flex
        height 45px
        color #ffffff
        font-size 16px
        padding-left 10px
        box-sizing border-box
        background-color #26374C
        border-bottom 1px solid rgba(255,255,255,0.08235294117647057)
        div
          padding-left 10px
          box-sizing border-box
    .airs:nth-of-type(1)
      margin-top 0px
</style>
