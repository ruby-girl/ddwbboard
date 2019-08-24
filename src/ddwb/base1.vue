<template>
  <div style="background:#212F41;">
<headers></headers>
<div style="position: relative;top:-20px;left:30px;width:70px;height:30px;background:#224665;line-height:30px;text-align:center;color:#fff;cursor:pointer;" @click="backhome">返回</div>
<!-- <div style="position: relative;top:-20px;left:30px;width:70px;height:30px;background:#224665;line-height:30px;text-align:center;color:#fff;cursor:pointer;">
  <router-link :to="{name:'home',query:{time:new Date().getTime()}}">返回</router-link>
  <router-view :key="$route.fullPath"></router-view>
</div> -->

    <a-row :gutter="16" style="background-color:#212F41;padding:0 20px 20px 20px;margin:0;">

  <a-col :span="6">
        <div style="width:100%;height:270px;margin-bottom:20px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">基础信息</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Basic information</h4>
              </div>
              <!-- <div id="graphwendu" style=" width: 100%;height: 80%;"></div> -->
              <div style="width:100%;height:80%;">
                <table style="width:100%;height:100%;">
                       <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;">所在地区：</td>
                         <td style="width:50%;color:#f1ff66">{{baseinformation.baseAddress}}</td>
                       </tr>
                        <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%">基地：</td>
                         <td style="width:50%;color:#f1ff66">{{baseinformation.name}}</td>
                       </tr>
                        <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%">基地范畴：</td>
                         <td style="width:50%;color:#f1ff66">{{baseinformation.baseCategory}}</td>
                       </tr>
                        <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%">基地类型：</td>
                         <td style="width:50%;color:#f1ff66">{{baseinformation.baseType}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%">面积（亩）：</td>
                         <td style="width:50%;color:#f1ff66">{{baseinformation.area}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%">产量（吨）：</td>
                         <td style="width:50%;color:#f1ff66">{{baseinformation.yield}}</td>
                       </tr>
                   </table>
              </div>
        </div>
        <div style="width:100%;height:150px;margin-bottom:19px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">基地相关人员信息</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Service</h4>
              </div>
              <div style="width:100%;height:67%;overflow:hidden;">
                <table style="width:90%;height:80%;margin:5px auto;background-color:rgba(150, 150, 150, 0.3);">
                      <!-- <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                        <th style="width:50%;color:#fff;height:30px;border: 1px solid rgba(221, 215, 215, 0.3);">姓名</th>
                         <th style="width:50%;color:#fff;height:30px;border: 1px solid rgba(221, 215, 215, 0.3);">职位</th>
                       </tr> -->
                      <template v-for="(v,k) in basemannager">
                      <tr :key="k" style="text-align:center;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                        <td style="width:50%;color:	#00FF00;border: 1px solid rgba(221, 215, 215, 0.1);">{{v.name}}</td>
                        <td style="width:50%;color:	#00FF00;border: 1px solid rgba(221, 215, 215, 0.1);">{{v.position}}</td>
                      </tr>
                  </template>
                </table>
                <!-- <table style="width:100%;height:100%">
                  <template v-for="(v,k) in basemannager">
                      <tr :key="k" style="text-align:center;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                        <td style="width:50%;color:	#00FF00;border: 1px solid rgba(221, 215, 215, 0.1);">{{v.position}}</td>
                        <td style="width:50%;color:	#00FF00;border: 1px solid rgba(221, 215, 215, 0.1);">{{v.name}}</td>
                      </tr>
                  </template>
                </table> -->
              </div>
              <!-- <div id="graphjiangyu" style=" width: 100%;height: 67%;"></div> -->
        </div>
        <div style="width:100%;height:400px;border-radius:15px;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
             <a-row>
              <a-col :span="12">
                 <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">视频监控</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Video Surveillance</h4>
              </a-col>
              <a-col :span="12">
                 <Cascader @on-change="selectAddress" class="select" :data="addresss" style="margin-right:10px;"></Cascader>
              </a-col>
            </a-row>
              </div>
              <div style="width:100%;height:338px;border-radius:15px;overflow: hidden;">
          <video id="myVideo"  style="width:100%;height:100%" ref="myPlayer" controls :src="address"></video>
                 <!-- <video style="width:100%;height:100%;" id="myPlayer" controls playsinline webkit-playsinline autoplay>
                    <source type="application/x-mpegURL" src="http://hls01open.ys7.com/openlive/18a69a040bcb45c9a08dfe9c5129399b.m3u8"/>
                    <source src="rtmp://rtmp01open.ys7.com/openlive/18a69a040bcb45c9a08dfe9c5129399b"/>
                </video> -->
                </div>
        </div>
      </a-col>

<a-col :span="10">
       <div style="width:100%;height:500px;margin-bottom:20px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
         <div style="width:100%;height:60px;padding:10px 0;border-bottom: 1px solid rgba(221, 215, 215, 0.2);">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">地图数据</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">The data map</h4>
              </div>
              <div id="container" style="width:100%;height:90%;position:relative">
               <div style="position:absolute;width:40%;height:30px;background:rgba(0,0,0,0.5);z-index:99;top:0;left:30%;color:#fff;text-align:center;line-height:30px;">
                 {{tip}}
               </div>
              </div>
       </div>
       <div style="width:100%;height:340px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
         <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">种植工单</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Planting scheme</h4>
              </div>
              <div id="srollbox" style="width:100%;height:85%;overflow:hidden;">
                   <table id="sroll" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:15%;color:#00FF00">{{v.time}}</td>
                         <td style="width:20%">{{v.start}}</td>
                         <td style="width:25%;color:#f1ff66">{{v.recordname}}</td>
                         <td style="width:40%">{{v.name}}</td>
                       </tr>
                     </template>
                   </table>
                    <table id="sroll1" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:15%;color:#00FF00">{{v.time}}</td>
                         <td style="width:20%">{{v.start}}</td>
                         <td style="width:25%;color:#f1ff66">{{v.recordname}}</td>
                         <td style="width:40%">{{v.name}}</td>
                       </tr>
                     </template>
                   </table>
                   <!-- <table id="sroll1" style="width:100%;height:100%;"></table> -->
                </div>
               <!-- <div style="width:100%;height:85%;">
                 <video style="width:50%;height:100%;" width="400" height="300" id="myPlayer" controls playsinline webkit-playsinline autoplay>
                    <source type="application/x-mpegURL" src="http://hls01open.ys7.com/openlive/18a69a040bcb45c9a08dfe9c5129399b.m3u8"/>
                    <source src="rtmp://rtmp01open.ys7.com/openlive/18a69a040bcb45c9a08dfe9c5129399b"/>
                </video> -->
                <!-- <video style="width:50%;height:100%;" width="400" height="300" id="myPlayer1" controls playsinline webkit-playsinline autoplay>
                    <source type="application/x-mpegURL" src="http://hls01open.ys7.com/openlive/a93c67e6dc83420baeba01d0b0fbf416.m3u8"/>
                    <source src="rtmp://rtmp01open.ys7.com/openlive/a93c67e6dc83420baeba01d0b0fbf416"/>
                </video> -->
                <!-- </div> -->
       </div>
      </a-col>

      <a-col :span="8">
        <div style="width:100%;height:290px;margin-bottom:10px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
            <a-row>
              <a-col :span="12">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">土壤检测</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Soil monitoring</h4>
              </a-col>
              <a-col :span="12">
                <div @click="showbaogao(1)" style="float:right;margin-right:20px;border-radius:3px;min-width:70px;background-color:#2899EF;color:#fff;text-align:center;line-height:30px;cursor:pointer;">查看报告</div>
              </a-col>
            </a-row>
              </div>

              <div id="graph1" style=" width: 100%;height: 82%;"></div>

              <!-- <div style="width:100%;height:84%;">
                   <table style="width:100%;height:100%;">
                     <template v-for="v in soiltest">
                       <tr :key="v.id" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%">{{v.testName}}</td>
                         <td style="width:33%">{{v.amount}}mg/kg</td>
                         <td style="width:33%;color:#66F8AF;">{{v.status}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
         <div style="width:100%;height:275px;margin-bottom:10px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                 <a-row>
              <a-col :span="12">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">大气检测</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Atmospheric monitoring</h4>
              </a-col>
              <a-col :span="12">
                <div @click="showbaogao(2)" style="float:right;margin-right:20px;border-radius:3px;min-width:70px;background-color:#2899EF;color:#fff;text-align:center;line-height:30px;cursor:pointer;">查看报告</div>
              </a-col>
            </a-row>
              </div>
              <div id="graph3" style=" width: 100%;height: 81%;"></div>
               <!-- <div style="width:100%;height:67%;">
                   <table style="width:100%;height:100%;">
                     <template v-for="v in airtest">
                       <tr :key="v.id" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%">{{v.testName}}</td>
                         <td style="width:33%">{{v.amount}}mg/L</td>
                         <td style="width:33%;color:#66F8AF;">{{v.status}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
        <div style="width:100%;height:275px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                 <a-row>
              <a-col :span="12">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">水源检测</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Water monitoring</h4>
              </a-col>
              <a-col :span="12">
                <div @click="showbaogao(3)" style="float:right;margin-right:20px;border-radius:3px;min-width:70px;background-color:#2899EF;color:#fff;text-align:center;line-height:30px;cursor:pointer;">查看报告</div>
              </a-col>
            </a-row>
              </div>

              <div id="graph2" style=" width: 100%;height: 81%;"></div>

              <!-- <div style="width:100%;height:86%;">
                   <table style="width:100%;height:100%;">
                     <template v-for="v in watertest">
                       <tr :key="v.id" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%">{{v.testName}}</td>
                         <td style="width:33%">{{v.amount}}mg/m²</td>
                         <td style="width:33%;color:#66F8AF;">{{v.status}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
      </a-col>

    </a-row>
    <Foot style="margin:0px;"/>
    <a-modal
      :title="title"
      v-model="visible"
      @ok="handleOk"
      :footer="null"
    >
      <img style="width:100%;height:100%;" :src="getbaogao(this.baogao)">
    </a-modal>
  </div>
</template>
<script>
import roll from '../assets/js/roll.js';
import MapLoader from '@/utils/loadMap.js'
import headers from '@/components/header/header'
import Foot from '@/components/layouts/GlobalFooter.vue'
import axios from 'axios'
export default {
  components: {
      headers,
      Foot
    },
  data(){
    return{
       workrecord:[],
        soiltest:[],
        watertest:[],
        airtest:[],
        baseinformation:{},
        basemannager:[],
        map:null,
        basemarker:null,
        info:[],
        infoWindow:null,
        basenum:0,
        nowTimed:'',
        nowTimem:'',
        baseinfo:[],
        plotinfo:[],
        temperature:[],
        time:[],
        amount1:[],
        item1:[],
        amount2:[],
        item2:[],
        amount3:[],
        item3:[],
        tianqi:[],
        visible:false,
        title:'',
        baogao:'',
        addresss: [],
        address: '',
        curLock: false,
        tip:'',
        plot5:[],
        polygonss:[],
    }
  },
  created(){

   this.basenum=Number(this.$route.query.baseId)-1;
   this.getAddress();
  },
  mounted(){
    // this.player = new EZUIPlayer('myPlayer');
    // this.player1 = new EZUIPlayer('myPlayer1');
    // axios.get("/sqtq",{params:{area:'三台'},headers:{Authorization:"APPCODE 912f4ba38a394870aed1d60aca9a34fb"}}).then((res)=>{
    //     if(res.statusText=="OK"){
    //       this.time=[];
    //       this.temperature=[];
    //       for(let i=0;i<res.data.showapi_res_body.hourList.length;i++){
    //         let a=res.data.showapi_res_body.hourList[i].time.slice(8,10)+':'+res.data.showapi_res_body.hourList[i].time.slice(10,12);
    //         this.time.push(a);
    //         this.temperature.push(Number(res.data.showapi_res_body.hourList[i].temperature));
    //       }

    //  that.drawLine();
    //     }
    //   });
    let that=this;
    that.baseinformation={};
    that.basemannager=[];
    // axios.get("json/order.json").then((res)=>{
    //   this.workrecord=res.data.result;
    //   for(let i=0;i<this.workrecord;i++){
    //     this.workrecord[i].name='2019-2020'+this.baseinfo.name;
    //   }
    //   this.$nextTick(() => {
    //     if (this.baseScroll) {
    //       clearInterval(this.baseScroll.timer)
    //     }
    //     this.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -280)
    //   })
    // })
    // axios.get("json/plot1.json").then((res)=>{
    //   that.basemannager=res.data.result[that.basenum].plot[0].manager;
    // })
     axios.get("json/base_info.json").then((res)=>{
      //  console.log(res.data.result);
       that.baseinfo=res.data.result;
       that.baseinformation=res.data.result[that.basenum];
       that.baseinformation.yield=(that.baseinformation.area*0.24).toFixed(2);
       that.basemannager=res.data.result[that.basenum].manager;
       axios.get("json/order.json").then((res)=>{
      that.workrecord=res.data.workRecord;
      console.log(res.data.workRecord);
      for(let i=0;i<that.workrecord.length;i++){
        that.workrecord[i].name='2019-2020'+that.baseinformation.name+'种植批次';
      }
      that.$nextTick(() => {
        if (that.baseScroll) {
          clearInterval(that.baseScroll.timer)
        }
        that.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -525)
      })
    })
       axios.get("json/plot1.json").then((res)=>{
         that.iniMap();

    window.addEventListener('done2', function(){
      let lng=that.baseinfo[that.basenum].lng;
      let lat=that.baseinfo[that.basenum].lat;
      var icon = new AMap.Icon({
              size: new AMap.Size(30, 30),    // 图标尺寸
              image: require('../assets/base.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(30, 30)   // 根据所设置的大小拉伸或压缩图片
            });
      that.basemarker= new AMap.Marker({
    position: new AMap.LngLat(lng, lat),
    icon:icon
});
    that.map.add(that.basemarker);
    that.map.setFitView([that.basemarker]);
    that.basemarker.on("click",function(e) {that.infowindow(e);});
    that.basemarker.on("mousemove",function(e) {that.tip=that.baseinfo[that.basenum].name});
    that.basemarker.on("mouseout",function(e) {that.tip=''});
    var icon1 = new AMap.Icon({
              size: new AMap.Size(30, 30),    // 图标尺寸
              image: require('../assets/plot.png'),  // Icon的图像
              imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
              imageSize: new AMap.Size(30, 30)   // 根据所设置的大小拉伸或压缩图片
            });
            if(that.basenum<33){
            if(that.basenum<=10){
    for(let i=0;i<res.data.result[that.basenum].plot.length;i++){
           let lng1=res.data.result[that.basenum].plot[i].lng;
           let lat1=res.data.result[that.basenum].plot[i].lat;
           let plotmarker= new AMap.Marker({
    position: new AMap.LngLat(lng1, lat1),
    icon:icon1
});
    that.map.add(plotmarker);
    that.map.setFitView();
    plotmarker.on("click",function(e) { that.$router.push({ name: 'plot',query:{baseId:Number(that.basenum),plotId:i}})});
    plotmarker.on("mousemove",function(e) {that.tip=res.data.result[that.basenum].plot[i].plotName});
    plotmarker.on("mouseout",function(e) {that.tip=''});
         }
         }else{
          let lng1=that.baseinfo[that.basenum].lng+0.0003;
          let lat1=that.baseinfo[that.basenum].lat+0.0003;
           let plotmarker= new AMap.Marker({
          position: new AMap.LngLat(lng1, lat1),
          icon:icon1
      });
    that.map.add(plotmarker);
    that.map.setFitView();
    plotmarker.on("click",function(e) { that.$router.push({ name: 'plot',query:{baseId:Number(that.basenum),plotId:0}})});
    // plotmarker.on("mousemove",function(e) {that.tip=res.data.result[that.basenum].plot[i].plotName});
    plotmarker.on("mousemove",function(e) {that.tip=that.baseinfo[that.basenum].name+'的地块'});
    plotmarker.on("mouseout",function(e) {that.tip=''});
    }
      }else{
        axios.get('json/plot1.json').then((res)=>{
          that.plot5=res.data.result[that.basenum].plot;
          let a=[];
          for(let i=0;i<that.plot5.length;i++){
          a.push(i);
          }
          that.addBlockOnMap(a);
        })
      }

      });
       })
          });
axios.get("json/plot1.json").then((res)=>{
       console.log(res.data.result);
       that.plotinfo=res.data.result;
          });

           axios.get("testitem.json").then((res)=>{
             console.log(res.data.result);
             that.soiltest=res.data.result[that.basenum].soilTest;
             that.watertest=res.data.result[that.basenum].waterTest;
             that.airtest=res.data.result[that.basenum].airTest;
             that.amount1=[];
             that.item1=[];
             that.amount2=[];
             that.item2=[];
             that.amount3=[];
             that.item3=[];
             for(let i=0;i<that.soiltest.length;i++){
               that.amount1.push(that.soiltest[i].amount);
               that.item1.push(that.soiltest[i].testName);
             }
             for(let i=0;i<that.watertest.length;i++){
               that.amount2.push(that.watertest[i].amount);
               that.item2.push(that.watertest[i].testName);
             }
             for(let i=0;i<that.airtest.length;i++){
               that.amount3.push(that.airtest[i].amount);
               that.item3.push(that.airtest[i].testName);
             }
             this.drawLine1();
             this.drawLine2();
             this.drawLine3();
           });
    //  setInterval(this.nowTimes,1000);
  },

  methods:{
    backhome(){
     this.$router.push({ name: 'home'});
    },
     addBlockOnMap(value){
            console.log(value);
        // if(this.block.length>0){
        //     for(let b=0;b<this.block.length;b++){
        //         this.map.remove(this.block[b]);
        //     }
        // }
        this.polygonss=[];
        for(let j=0; j<value.length;j++){
        let a=value[j];
        for(let i=0;i<this.plot5.length;i++){
        let item = this.plot5[i];
        if(i==a){
        if(item.remark!=undefined && item.remark!=null && item.remark.trim()!=""){
            let remarkJson2 = eval('(' + item.remark + ')');
            //let polygon = new AMap.Polygon(remarkJson2);
            // console.log(remarkJson2.path);
            let newPath = [];
            for(let i=0;i<remarkJson2.path.length;i++){
            let point=remarkJson2.path[i];
            newPath.push(new AMap.LngLat(point.lng,point.lat));
            }
            remarkJson2.path = newPath;
            let polygon2 = new AMap.Polygon(remarkJson2);
            // this.polygonss=[];
            this.polygonss.push(polygon2);
            // this.block.push(polygon2);
            this.map.add(polygon2);
            // polygon2.on("click",function(e) {this.$router.push({ name: 'plot',query:{baseId:Number(this.basenum),plotId:i}})});
            this.map.setFitView([ polygon2 ]);

        }
        }
        }
            }
            let that=this;
            console.log(that.polygonss);
            //polygon2.close();
            for(let i=0;i<that.polygonss.length;i++){
            that.polygonss[i].on("click",function(e) {that.$router.push({ name: 'plot',query:{baseId:Number(that.basenum),plotId:i}})});
            that.polygonss[i].on("mousemove",function(e) {that.tip=that.plot5[i].plotName});
            that.polygonss[i].on("mouseout",function(e) {that.tip=''});
            }
        },
    selectAddress(datas) {
      if (datas.length != 0) {
        this.address = datas[1]
        this.$nextTick(() => {
          this.player = new EZUIPlayer('myVideo');
        })
      }
    },
    getAddress (token) {
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
            if (this.$route.query.baseId == 8) {
              this.addresss.push({
                label: '老马基地',
                children: []
              })
              res.data.data.forEach((item,i) => {
                if (item.deviceName.indexOf('老马') >　-1) {
                  this.addresss[0].children.push({
                    label: '通道' + res.data.data[i].channelNo,
                    value: res.data.data[i].liveAddress
                  })
                }
              })
            }
            if (this.$route.query.baseId == 9) {
              this.addresss.push({
                label: '花园基地',
                children: []
              })
              res.data.data.forEach((item,i) => {
                if (item.deviceName.indexOf('老马') ==　-1) {
                  if(i>2){
                    let a=i-3;
                  this.addresss[0].children.push({
                    label: '通道'+a,
                    value: res.data.data[i].liveAddress
                  })
                }
                }
              })
              console.log(this.addresss);
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
this.getAddress(token)
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



    getbaogao(a){
      if(a==1){
      return require('@/assets/'+this.baseinformation.tuPic);
      }
      if(a==2){
      return require('@/assets/'+this.baseinformation.qiPic);
      }
      if(a==3){
      return require('@/assets/'+this.baseinformation.shuiPic);
      }
    },
    showbaogao(a){
      switch (a) {
        case 1:
          this.title='土壤检测报告';
          this.baogao=1;
          break;
        case 2:
          this.title='大气检测报告';
          this.baogao=2;
          break;
        case 3:
          this.title='水源检测报告';
          this.baogao=3;
          break;
        default:
          break;
      }
      this.visible=true;
    },
    handleOk(){
      this.visible=false;
    },
     timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      // let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      // return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm ;
      this.nowTimed = year + "/" + month + "/" + date +"/";
      this.nowTimem = hh+":"+mm ;
    },
    nowTimes(){
this.timeFormate(new Date());
},
     drawLine(){
        let that=this;
        // 基于准备好的dom，初始化echarts实例
        var myChart = that.$echarts.init(document.getElementById('graphwendu'))
        window.addEventListener("resize", function() {
	     myChart.resize();
	})
        // 绘制图表
        myChart.setOption({
          tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : that.time,
            axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            }

        }
    ],
    yAxis : [

        {
          name:'单位(℃)',
            type : 'value',
            splitLine:{
              show:false
            },
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            }
        }
    ],
    series : [
        {
            name:'气温',
            type:'line',
            stack: '总量',
            data:that.temperature,
            smooth: true,
            symbol: "none",
             itemStyle: {
                color: '#0154C8'
            },
            areaStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(0, 0, 255,0.7)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 255, 255,0.1)'
                }])
            },

        },
    ]
        });

  },
  drawLine1(){
        let that=this;
         var myChart1 = that.$echarts.init(document.getElementById('graph1'))
        window.addEventListener("resize", function() {
	     myChart1.resize();
	})
        // 绘制图表
        myChart1.setOption({
           color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
     grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : that.item1,
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {//坐标轴刻度标签的相关设置。
                    rotate: 0,
                    margin: 20,
                    formatter: function(params) {
                        var newParamsName = '';// 最终拼接成的字符串
                        var paramsNameNumber = params.length;// 实际标签的个数
                        var provideNumber = 3;// 每行能显示的字的个数
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                        /**
                         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                         */
                        // 条件等同于rowNumber>1
                        if (paramsNameNumber > provideNumber) {
                            /** 循环每一行,p表示行 */
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = '';// 表示每一次截取的字符串
                                var start = p * provideNumber;// 开始截取的位置
                                var end = start + provideNumber;// 结束截取的位置
                                // 此处特殊处理最后一行的索引值
                                if (p == rowNumber - 1) {
                                    // 最后一次不换行
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    // 每一次拼接字符串并换行
                                    tempStr = params.substring(start, end) + '\n';
                                }
                                newParamsName += tempStr;// 最终拼成的字符串
                            }
                        } else {
                            // 将旧标签的值赋给新标签
                            newParamsName = params;
                        }
                        //将最终的字符串返回
                        return newParamsName
                    }

                },
        }
    ],
    yAxis : [
        {
            name:'单位(mg/kg)',
             splitLine:{
              show:false
            },
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            type : 'value'
        }
    ],
    series : [
        {
            name:'每千克中含量',
            type:'bar',
            barWidth: '60%',
            data:that.amount1,
            itemStyle: {
							normal: {
                color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                   {offset: 0,color: "#FDAD7B"},
                   {offset: 1,color: "#FDAD7B"}
                   ]),
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: '#fff',
										fontSize: 10
									}
								}
							}
						},
        }
    ]
        });
  },
  drawLine2(){
        let that=this;
         var myChart1 = that.$echarts.init(document.getElementById('graph2'))
        window.addEventListener("resize", function() {
	     myChart1.resize();
	})
        // 绘制图表
        myChart1.setOption({
           color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
     grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : that.item2,
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {//坐标轴刻度标签的相关设置。
                    rotate: 0,
                    margin: 20,
                    formatter: function(params) {
                        var newParamsName = '';// 最终拼接成的字符串
                        var paramsNameNumber = params.length;// 实际标签的个数
                        var provideNumber = 3;// 每行能显示的字的个数
                        var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                        /**
                         * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                         */
                        // 条件等同于rowNumber>1
                        if (paramsNameNumber > provideNumber) {
                            /** 循环每一行,p表示行 */
                            for (var p = 0; p < rowNumber; p++) {
                                var tempStr = '';// 表示每一次截取的字符串
                                var start = p * provideNumber;// 开始截取的位置
                                var end = start + provideNumber;// 结束截取的位置
                                // 此处特殊处理最后一行的索引值
                                if (p == rowNumber - 1) {
                                    // 最后一次不换行
                                    tempStr = params.substring(start, paramsNameNumber);
                                } else {
                                    // 每一次拼接字符串并换行
                                    tempStr = params.substring(start, end) + '\n';
                                }
                                newParamsName += tempStr;// 最终拼成的字符串
                            }
                        } else {
                            // 将旧标签的值赋给新标签
                            newParamsName = params;
                        }
                        //将最终的字符串返回
                        return newParamsName
                    }

                },
        }
    ],
    yAxis : [
        {
            name:'单位(mg/L)',
             splitLine:{
              show:false
            },
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            type : 'value'
        }
    ],
    series : [
        {
            name:'每升中的含量',
            type:'bar',
            barWidth: '60%',
            data:that.amount2,
            itemStyle: {
							normal: {
                 color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                   {offset: 0,color: "#FE7A58"},
                   {offset: 1,color: "#FE7A58"}
                   ]),
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: '#fff',
										fontSize: 10
									}
								}
							}
						},
        }
    ]
        });
  },
  drawLine3(){
        let that=this;
         var myChart1 = that.$echarts.init(document.getElementById('graph3'))
        window.addEventListener("resize", function() {
	     myChart1.resize();
	})
        // 绘制图表
        myChart1.setOption({
           color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
     grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : that.item3,
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            name:'单位(mg/m²)',
             splitLine:{
              show:false
            },
             axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
            },
            type : 'value'
        }
    ],
    series : [
        {
            name:'每平方米中的含量',
            type:'bar',
            barWidth: '60%',
            data:that.amount3,
            itemStyle: {
							normal: {
                 color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                   {offset: 0,color: "#55A1EF"},
                   {offset: 1,color: "#55A1EF"}
                   ]),
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: '#fff',
										fontSize: 10
									}
                },

							}
            },
        }
    ]
        });
  },
     //地块弹窗
        infowindow(e){
        //console.log(info);
        this.info=[];
        this.getinfo();
          this.infoWindow = new AMap.InfoWindow({
          content: this.info.join(""),
          });
            this.infoWindow.open(this.map,[e.lnglat.lng,e.lnglat.lat]);
        },
        getinfo(){
        // console.log(this.defblockid);
        // if(!isNaN(this.defblockid)&&this.defblockid!=null&&this.defblockid!=''){
        //     console.log(this.defblockid);
        //     let aaa={};
        //     for(let i=0;i<this.blockinfo.length;i++){
        //         if(this.blockinfo[i].id==this.defblockid){
        //           aaa=this.blockinfo[i];
        //         }
        //     }
        //     var a=aaa.crop?aaa.crop.cropName:'暂无作物';
        //     var b=aaa.land?aaa.land.landName:'暂无类型';
        //     var c=aaa.soil?aaa.soil.soilName:'暂无类型';
        //     var d=aaa.lotName;
        //     var e=aaa.lotAcreage;
        // }
        this.info = [];
        var a=this.baseinfo[this.basenum].baseAddress;
        var b=this.baseinfo[this.basenum].baseCategory;
        var c=this.baseinfo[this.basenum].baseType;
        var d=this.baseinfo[this.basenum].name;
        var e=this.baseinfo[this.basenum].area;
        var f=this.plotinfo[this.basenum].plot.length;

        this.info.push("<div style=\"width:175px;margin:20px 25px;\"><table>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地名称：</td><td>"+d+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地面积：</td><td>"+e+"亩</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地地址：</td><td>"+a+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地范畴：</td><td>"+b+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">基地类型：</td><td>"+c+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">地块数量：</td><td>"+f+"个</td></tr>");
        this.info.push("</table></div>");

    },
   iniMap(){
     let that = this
      MapLoader().then(AMap => {
        let googleLayer = new AMap.TileLayer({
              getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
           });//定义谷歌卫星切片图层

        let roadNetLayer = new AMap.TileLayer.RoadNet({
          opacity:0
        }); //定义一个路网图层

        that.map = new AMap.Map('container', {
          // center: that.center,
          zoom: 15,
          layers:[googleLayer,roadNetLayer], //设置图层
        });
        that.map.on("complete", function(){
          var myEvent = new CustomEvent('done2',{});
          if(window.dispatchEvent) {
            window.dispatchEvent(myEvent);
          } else {
            window.fireEvent(myEvent);
          }
        });
      })
    }

  }

}
</script>
<style scoped>
#container >>> .amap-info-content {
background-color:rgba(35, 35, 35, 0.6);
 border-radius:10px 10px;
box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
#container >>> .amap-info-sharp{
border-top: 8px solid rgba(35, 35, 35, 0.6);
}
</style>
<style lang='stylus'>
@media screen and (min-width: 2000px)
  body
    line-height 28px !important
.headleft
{
position: relative;
top:32px;
left: -8px;
width:56px;
height:2px;
background-color:#2899EF;
/* Rotate div */
transform:rotate(-37deg);
-moz-transform:rotate(-37deg); /* Firefox */
-webkit-transform:rotate(-37deg); /* Safari 和 Chrome */
-o-transform:rotate(-37deg); /* Opera */
}
.headright
{
position: relative;
top:34px;
right: 8px;
width:56px;
height:2px;
background-color:#2899EF;
/* Rotate div */
transform:rotate(37deg);
-moz-transform:rotate(37deg); /* Firefox */
-webkit-transform:rotate(37deg); /* Safari 和 Chrome */
-o-transform:rotate(37deg); /* Opera */
}

</style>
