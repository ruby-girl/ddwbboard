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
          <div class="map" ref="mapChart"></div>
          <div class="map-footer">
            <div class="base-count">
              <span class="icon" style="background-color:#fe5858"></span>
              <span class="text">基地数量</span>
              <span class="count">{{baseLength}}</span>
            </div>
            <div class="earth-count">
              <span class="icon" style="background-color:#dc9748"></span>
              <span class="text">合作社数量</span>
              <span class="count">1</span>
            </div>
            <div class="area-count">
              <span class="icon" style="background-color:#289CF4"></span>
              <span class="text">家庭农场数量</span>
              <span class="count">1</span>
            </div>
            <div class="farmar-count">
              <span class="icon" style="background-color:#fe58fe"></span>
              <span class="text">农户数量</span>
              <span class="count">1</span>
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
                    <span style="text-align: left;display:inline-block; width: 120px;color: #fff">{{item.name}}</span>
                    <span style="color: #fff;display:inline-block; width: 80px;">{{item.value}}亩</span>
                  </li>
                </ul>
                <ul id="base-ul2" style="position:relative; top:0">
                   <li class="base-item" v-for="(item,index) in this.baseDatas"
                  :key="index">
                    <i class='icon' :style="{backgroundColor: item.itemStyle.color}"></i>
                    <span style="text-align: left;display:inline-block; width: 120px;color: #fff">{{item.name}}</span>
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
                        <span>大气温度：27.3℃</span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤10cm温度：27.8℃</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤20cm温度：27.0℃</span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>大气湿度：10.0%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤10cm湿度：17.8%</span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤20cm湿度：17.8%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>光照度：67h</span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span>蒸发量：27.3mm</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>降雨量：0.0mm</span>
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
                        <span>大气温度：27.3℃</span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤10cm温度：27.8℃</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤20cm温度：27.0℃</span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>大气湿度：10.0%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤10cm湿度：17.8%</span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤20cm湿度：17.8%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>光照度：67h</span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span>蒸发量：27.3mm</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>降雨量：0.0mm</span>
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
                        <span>大气温度：27.3℃</span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤10cm温度：27.8℃</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤20cm温度：27.0℃</span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>大气湿度：10.0%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤10cm湿度：17.8%</span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤20cm湿度：17.8%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>光照度：67h</span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span>蒸发量：27.3mm</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>降雨量：0.0mm</span>
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
                        <span>大气温度：27.3℃</span>
                      </div>
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤10cm温度：27.8℃</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangwendu.png" height="100%" alt="">
                        <span>土壤20cm温度：27.0℃</span>
                      </div>
                      <div>
                        <img src="../assets/daqishidu.png" height="100%" alt="">
                        <span>大气湿度：10.0%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤10cm湿度：17.8%</span>
                      </div>
                      <div>
                        <img src="../assets/turangshidu.png" height="100%" alt="">
                        <span>土壤20cm湿度：17.8%</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/zhaodu.png" height="100%" alt="">
                        <span>光照度：67h</span>
                      </div>
                      <div>
                        <img src="../assets/zhengfaliang.png" height="100%" alt="">
                        <span>蒸发量：27.3mm</span>
                      </div>
                    </li>
                    <li class="monitor-item">
                      <div>
                        <img src="../assets/jiangyuliang.png" height="100%" alt="">
                        <span>降雨量：0.0mm</span>
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
      ],
    }
  },
  created () {
    this._getAddress()
  },
  mounted () {
    this._drawCityMap()
    this._drawRainMap()
    this._getJson()
    this.mapChart.on('click', params => {
      if (params.value.length) {
        this.$router.push({path: '/base', query: {baseId: params.data.id}})
      }
    })
  },
  methods: {
    _getAddress () {
      var date = new Date().toString().split(' ')
      var month = new Date().getMonth() + 1
      var str = ''
      this.date = str + date[3] + '-' + month + '-' + date[2]
      this.hours = date[4]
      let token = 'accessToken=at.84xrc4wq3ypy48xf7tijywk6cpfhz9qa-92o0v8dwk4-0zzdlqy-gyo7tuzmd'
      axios.post('https://open.ys7.com/api/lapp/live/video/list', token, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        if (res.data.code == 200) {
          if (res.data.data && res.data.data.length) {
            this.addresss.push({
              label: res.data.data[0].deviceName,
              value: res.data.data[0].deviceSerial,
              children: []
            })
            for (let i = 0; i < res.data.data.length; i++) {
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
        }
        this.$nextTick(() => {
          myVideo.addEventListener('play', () => {
            this.player.on()
          })
        })
      })
    },
    _getJson() {
      axios.get('json/baseinfo.json').then(res => {
        if (res.status == 200) {
          let data = res.data.result
          if (data && data.length) {
            this.baseLength = data.length
            for (var i = 0; i < data.length; i++) {
              this.totalArea += data[i].area
              this.baseDatas[i].name = data[i].baseName
              this.baseDatas[i].value = data[i].area
              this.mapDatas.push({
                name: data[i].baseName,
                value: [data[i].lng, data[i].lat],
                id: data[i].baseId
              })
            }
            this.$nextTick(() => {
              if (this.baseScroll) {
                clearInterval(this.baseScroll.timer)
              }
              console.log(111)
              this.baseScroll = new roll.Roll('base-info', 'base-ul1', 'base-ul2', -280)
            })
          }
        }
      })
      axios.get('json/plot.json').then(res => {
        if (res.status == 200) {
          let data = res.data.result
          if (data && data.length) {
            this.baseLength = data.length
            for (var i = 0; i < data.length; i++) {
              var plots = data[i].plot
              if (plots && plots.length) {
                this.plotLength += plots.length
                for (var j = 0; j < plots.length; j++) {
                  this.plotDatas.push({
                    name: plots[j].plotName,
                    value: [plots[j].lng, plots[j].lat],
                    id: data[i].baseId
                  })
                }
              }
            }
          }
        }
      })
      axios.get('json/process.json').then(res => {
        if (res.status == 200) {
          let data = res.data.result
          if (data && data.length) {
            for(var i = 0; i < data.length; i++) {
              if (data[i].process && data[i].process.length) {
                for(var j = 0; j < data[i].process.length; j++) {
                  this.messages.push(data[i].process[j])
                }
              }
            }
          }
        }
      })
    },
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
      this.mapChart = this.$echarts.init(this.$refs.mapChart)
      this._setOption()
      axios.get('json/santai.json').then(res => {
        console.log(res)
        this.$echarts.registerMap('santai', res.data)
        this.mapChart.setOption(this.option)
      })
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
@media screen and (min-width: 1500px)
  .base-item
    span:nth-of-type(1)
      width 200px !important
@media screen and (max-width: 1500px)
  .base-item
    span:nth-of-type(1)
      width 120px !important
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
        height 550px
        background-color #26374c
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
          width 50%
          display inline-block
        .base-info
          width 50%
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
