<template>
  <div style="background:#212F41;">
<headers></headers>
<div style="position: relative;top:-20px;left:30px;width:70px;height:30px;background:#224665;line-height:30px;text-align:center;color:#fff;cursor:pointer;" @click="backhome">返回</div>


    <a-row :gutter="16" style="background-color:#212F41;padding:0 20px 20px 20px;margin:0;">

  <a-col :span="6">
        <div style="width:100%;height:250px;margin-bottom:20px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:20%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">基础信息</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Basic information</h4>
              </div>
              <!-- <div id="graphwendu" style=" width: 100%;height: 80%;"></div> -->
              <div style="width:100%;height:80%;">
                <table style="width:100%;height:100%;">
                       <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;color:#f1ff66">所在地区：</td>
                         <td style="width:50%">{{baseinformation.baseAddress}}</td>
                       </tr>
                        <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;color:#f1ff66">基地：</td>
                         <td style="width:50%">{{baseinformation.baseName}}</td>
                       </tr>
                        <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;color:#f1ff66">基地范畴：</td>
                         <td style="width:50%">{{baseinformation.baseCategory}}</td>
                       </tr>
                        <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;color:#f1ff66">基地类型：</td>
                         <td style="width:50%">{{baseinformation.baseType}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;color:#f1ff66">面积（亩）：</td>
                         <td style="width:50%">{{baseinformation.area}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;color:#f1ff66">产量（吨）：</td>
                         <td style="width:50%">{{baseinformation.yield}}</td>
                       </tr>
                   </table>
              </div>
        </div>
        <div style="width:100%;height:150px;margin-bottom:19px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:33%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">基地相关人员信息</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Service</h4>
              </div>
              <div style="width:100%;height:67%;overflow:hidden;">
                <table style="width:90%;height:80%;margin:2% 4% 4% 4%;background-color:rgba(150, 150, 150, 0.3);">
                      <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <th style="width:50%;color:#fff;height:30px;border: 1px solid rgba(221, 215, 215, 0.3);">职位</th>
                         <th style="width:50%;color:#fff;height:30px;border: 1px solid rgba(221, 215, 215, 0.3);">姓名</th>
                       </tr>
                      <template v-for="(v,k) in basemannager">
                      <tr :key="k" style="text-align:center;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                        <td style="width:50%;color:	#00FF00;border: 1px solid rgba(221, 215, 215, 0.1);">{{v.position}}</td>
                        <td style="width:50%;color:	#00FF00;border: 1px solid rgba(221, 215, 215, 0.1);">{{v.name}}</td>
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
        <div style="width:100%;height:400px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:13%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">视频监控</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Video Surveillance</h4>
              </div>
              <div style="width:100%;height:87%;">
                 <video style="width:100%;height:100%;" id="myPlayer" controls playsinline webkit-playsinline autoplay>
                    <source type="application/x-mpegURL" src="http://hls01open.ys7.com/openlive/18a69a040bcb45c9a08dfe9c5129399b.m3u8"/>
                    <source src="rtmp://rtmp01open.ys7.com/openlive/18a69a040bcb45c9a08dfe9c5129399b"/>
                </video>
                <!-- <video style="width:50%;height:100%;" width="400" height="300" id="myPlayer1" controls playsinline webkit-playsinline autoplay>
                    <source type="application/x-mpegURL" src="http://hls01open.ys7.com/openlive/a93c67e6dc83420baeba01d0b0fbf416.m3u8"/>
                    <source src="rtmp://rtmp01open.ys7.com/openlive/a93c67e6dc83420baeba01d0b0fbf416"/>
                </video> -->
                </div>
              <!-- <div id="srollbox" style="width:100%;height:85%;overflow:hidden;">
                   <table id="sroll" style="width:100%;height:100%;">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:25%;color:#00FF00">{{v.time}}</td>
                         <td style="width:25%">{{v.start}}</td>
                         <td style="width:25%;color:#f1ff66">{{v.recordname}}</td>
                         <td style="width:25%">{{v.name}}</td>
                       </tr>
                     </template>
                   </table>
                    <table id="sroll1" style="width:100%;height:100%;">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:25%;color:#00FF00">{{v.time}}</td>
                         <td style="width:25%">{{v.start}}</td>
                         <td style="width:25%;color:#f1ff66">{{v.recordname}}</td>
                         <td style="width:25%">{{v.name}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
      </a-col>

<a-col :span="10">
       <div style="width:100%;height:500px;margin-bottom:20px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
         <div style="width:100%;height:10%;padding:10px 0;border-bottom: 1px solid rgba(221, 215, 215, 0.2);">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">地图数据</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">The data map</h4>
              </div>
              <div id="container" style="width:100%;height:90%;"></div>
       </div>
       <div style="width:100%;height:320px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
         <div style="width:100%;height:15%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">种植工单</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Planting scheme</h4>
              </div>
              <div id="srollbox" style="width:100%;height:85%;overflow:hidden;">
                   <table id="sroll" style="width:100%;height:100%;">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:25%;color:#00FF00">{{v.time}}</td>
                         <td style="width:25%">{{v.start}}</td>
                         <td style="width:25%;color:#f1ff66">{{v.recordname}}</td>
                         <td style="width:25%">{{v.name}}</td>
                       </tr>
                     </template>
                   </table>
                    <table id="sroll1" style="width:100%;height:100%;">
                     <template v-for="(v,k) in workrecord">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:25%;color:#00FF00">{{v.time}}</td>
                         <td style="width:25%">{{v.start}}</td>
                         <td style="width:25%;color:#f1ff66">{{v.recordname}}</td>
                         <td style="width:25%">{{v.name}}</td>
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
        <div style="width:100%;height:280px;margin-bottom:10px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:18%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
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
         <div style="width:100%;height:270px;margin-bottom:10px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:19%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
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
        <div style="width:100%;height:270px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:19%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
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
    >
      <img style="width:100%;height:100%;" :src="getbaogao(this.baogao)">
    </a-modal>
  </div>
</template>
<script>
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
    }
  },
  created(){

   this.basenum=Number(this.$route.query.baseId)-1;
   axios.get("json/recordwork.json").then((res)=>{
     console.log(res);
     this.workrecord=res.data.result[this.basenum].workRecord;
   })
  },
  mounted(){
    this.player = new EZUIPlayer('myPlayer');
    // this.player1 = new EZUIPlayer('myPlayer1');
    var srollbox=document.getElementById('srollbox');
    var sroll=document.getElementById('sroll');
    var sroll1=document.getElementById('sroll1');
    var timer = setInterval(autoScrollLine,30);
    srollbox.onmouseover=function() {
			clearInterval(timer)
		}
		srollbox.onmouseout=function(){
			timer=setInterval(autoScrollLine,30)
		}
     function autoScrollLine() {
    if(srollbox.scrollTop>=sroll.offsetHeight){
    srollbox.scrollTop=0;
    }else{
      srollbox.scrollTop++;
    }
    if(srollbox.scrollTop%srollbox.offsetHeight==0){
    clearInterval(timer)
    setTimeout(()=>{
        timer = setInterval(autoScrollLine,30)
    },30)
    }
    }
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
    axios.get("json/plot1.json").then((res)=>{
      that.basemannager=res.data.result[that.basenum].plot[0].manager;
    })
     axios.get("json/baseinfo.json").then((res)=>{
       console.log(res.data.result);
       that.baseinfo=res.data.result;
       axios.get("json/process.json").then((res)=>{
      let a= res.data.result[that.basenum].process;
      let b=0;
      for(let i=0;i<a.length;i++){
        b+=a[i].machining;
      }
      that.baseinformation=that.baseinfo[that.basenum];
      that.baseinformation.yield=b;
       console.log(that.baseinformation)
    })
       axios.get("json/plot.json").then((res)=>{
         that.iniMap();

    window.addEventListener('done', function(){
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
    for(let i=0;i<res.data.result[that.basenum].plot.length;i++){
           let lng1=res.data.result[that.basenum].plot[i].lng;
           let lat1=res.data.result[that.basenum].plot[i].lat;

           let plotmarker= new AMap.Marker({
    position: new AMap.LngLat(lng1, lat1),

});
    that.map.add(plotmarker);
    that.map.setFitView();
    plotmarker.on("click",function(e) { that.$router.push({ name: 'plot',query:{baseId:Number(that.basenum),plotId:i}})});
         }
      });
       })
// axios.post("/video",'accessToken=at.84xrc4wq3ypy48xf7tijywk6cpfhz9qa-92o0v8dwk4-0zzdlqy-gyo7tuzmd',
// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then((res)=>{
//   console.log(res);
// })
    // axios.get("/tq",{params:{from:'5',lat:this.baseinfo[that.basenum].lat,lng:that.baseinfo[this.basenum].lng,needMoreDay:1},headers:{Authorization:"APPCODE 912f4ba38a394870aed1d60aca9a34fb"}}).then((res)=>{
    //             that.tianqi=res.data.showapi_res_body;
    //             console.log(res.data.showapi_res_body);
    //             that.jiangshui=[];
    //             that.week=[];
    //             var isweek=['f1','f2','f3','f4','f5','f6','f7'];
    //             Object.keys(that.tianqi).forEach(function(key){
    //             if(isweek.indexOf(key)!=-1){
    //               that.jiangshui[isweek.indexOf(key)]=that.tianqi[key].jiangshui.split("%")[0];
    //               let a='';
    //               switch (String(that.tianqi[key].weekday)) {
    //                 case '1':
    //                    a='星期一';
    //                   break;
    //                  case '2':
    //                    a='星期二';
    //                   break;
    //                 case '3':
    //                    a='星期三';
    //                   break;
    //                 case '4':
    //                    a='星期四';
    //                   break;
    //                 case '5':
    //                    a='星期五';
    //                   break;
    //                 case '6':
    //                    a='星期六';
    //                   break;
    //                 case '7':
    //                    a='星期日';
    //                   break;
    //                 default:
    //                   break;
    //               }
    //                 that.week[isweek.indexOf(key)]=a;
    //             }
    //             });
    //             that.drawLine1();
    //       });

          });
    // this.jiangshui=[50,60,10,100,150,34,80];
    // this.week=['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
// this.drawLine1();
axios.get("json/plot.json").then((res)=>{
       console.log(res.data.result);
       that.plotinfo=res.data.result;
          });

           axios.get("testitem.json").then((res)=>{
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
    getbaogao(a){
      if(a==1){
      return require('../assets/soiltest.png');
      }
      if(a==2){
      return require('../assets/airtest.png');
      }
      if(a==3){
      return require('../assets/watertest.png');
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
                   {offset: 0,color: "#6681ea"},
                   {offset: 1,color: "#7e43aa"}
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
                   {offset: 0,color: "#6acbe0"},
                   {offset: 1,color: "#6859ea"}
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
                   {offset: 0,color: "#d0ffae"},
                   {offset: 1,color: "#34ebe9"}
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
        var d=this.baseinfo[this.basenum].baseName;
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
          console.log("地图加载完成！");
          var myEvent = new CustomEvent('done',{});
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
#container >>> .amap-info-content {
background-color:rgba(35, 35, 35, 0.6);
 border-radius:10px 10px;
box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
#container >>> .amap-info-sharp{
border-top: 8px solid rgba(35, 35, 35, 0.6);
}
</style>
