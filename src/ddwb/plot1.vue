<template>

  <div style="background:#212F41;">
    <headers></headers>
    <!-- <a-row>
      <a-col :span="9">
        <div style="width:100%;height:50px;background:#212F41;border-bottom: 2px solid #2899EF;"></div>
        <div style="width:100%;height:50px;background:#212F41;padding:10px 0 0 30px;">
          <div style="width:70px;height:30px;background:#224665;line-height:30px;text-align:center;color:#fff;cursor:pointer;" @click="backhome">返回</div>
        </div>
      </a-col>
      <a-col :span="6">
        <a-row>
          <a-col :span="2">

            <div class="headleft"></div>
          </a-col>
          <a-col :span="20">
            <div style="min-width:475px;margin:auto;width:100%;height:20px;background:#212F41;border-bottom: 2px solid #2899EF;"></div>
          </a-col>
          <a-col :span="2">
            <div class="headright"></div>
          </a-col>
        </a-row>
        <div style="width:100%;height:80px;background:#212F41;color:#2899EF;font-size:40px;text-align:center;line-height:85px;">代代农场数据化管理平台</div>
      </a-col>
      <a-col :span="9">
        <div style="width:100%;height:50px;background:#212F41;border-bottom: 2px solid #2899EF;"></div>
        <div style="width:100%;height:50px;background:#212F41;">
          <div style="float:right;min-width:150px;width:150px;height:30px;line-height:40px;margin-right:30px;color:#289CF4;font-size:16px;">{{nowTimed}}{{nowTimem}}</div>
        </div>
      </a-col>
    </a-row> -->
    <div style="position: relative;top:-20px;left:30px;width:70px;height:30px;background:#224665;line-height:30px;text-align:center;color:#fff;cursor:pointer;" @click="backhome">返回</div>
    <a-row :gutter="16" style="background-color:#212F41;padding:0 20px 20px 20px;margin:0;">
      <a-col :span="7">
        <!-- <a-row :gutter="8"> -->
          <!-- <a-col :span="10"> -->
            <div style="width:100%;height:320px;background:red;margin:0 0 20px 0;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
           <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-0.5% 0 0 2%;color:#2899EF;font-weight: bold;">基础信息</h3>
                <h4 style="margin:0 0 0 2%;color:#fff;font-weight: bold;">Basic Information</h4>
            </div>
            <div style="width:100%;height:80%;">
                   <table style="width:90%;height:90%;margin:4% 4% 4% 4%;background-color:rgba(150, 150, 150, 0.3);">
                       <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;font-size:15px;border: 1px solid rgba(221, 215, 215, 0.3);">地块名称：</td>
                         <td style="width:50%;color:#f1ff66;border: 1px solid rgba(221, 215, 215, 0.3);">{{plot.plotName}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;font-size:15px;border: 1px solid rgba(221, 215, 215, 0.3);">地理位置：</td>
                         <td style="width:50%;color:#f1ff66;border: 1px solid rgba(221, 215, 215, 0.3);">{{base.baseAddress}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;font-size:15px;border: 1px solid rgba(221, 215, 215, 0.3);">所属基地：</td>
                         <td style="width:50%;color:#f1ff66;border: 1px solid rgba(221, 215, 215, 0.3);">{{base.baseName}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;font-size:15px;border: 1px solid rgba(221, 215, 215, 0.3);">基地类型：</td>
                         <td style="width:50%;color:#f1ff66;border: 1px solid rgba(221, 215, 215, 0.3);">{{base.baseType}}</td>
                       </tr>
                       <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;font-size:15px;border: 1px solid rgba(221, 215, 215, 0.3);">种植面积(亩)：</td>
                         <td style="width:50%;color:#f1ff66;border: 1px solid rgba(221, 215, 215, 0.3);">{{plot.plotArea}}</td>
                       </tr>
                   </table>
                </div>
        </div>
         <div style="width:100%;height:200px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
                <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-0.5% 0 0 3%;color:#2899EF;font-weight: bold;">地块相关人员信息</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Service</h4>
                </div>
               <div style="width:100%;height:70%;">
                   <table style="width:90%;height:80%;margin:2% 4% 4% 4%;background-color:rgba(150, 150, 150, 0.3);">
                      <tr style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <th style="width:50%;color:#fff;height:30px;border: 1px solid rgba(221, 215, 215, 0.3);">姓名</th>
                         <th style="width:50%;color:#fff;height:30px;border: 1px solid rgba(221, 215, 215, 0.3);">职位</th>
                       </tr>
                     <template v-for="(v,k) in people">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:15px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:50%;color:#fff;border: 1px solid rgba(221, 215, 215, 0.3);">{{v.name}}</td>
                         <td style="width:50%;color:#fff;border: 1px solid rgba(221, 215, 215, 0.3);">{{v.position}}</td>
                       </tr>
                     </template>
                   </table>
                </div>
              </div>
              <div style="margin-top:20px;width:100%;height:279px;margin-bottom:19px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">采收产量数据</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Data comparison</h4>
              </div>
              <div id="graphjiangyu" style=" width: 100%;height: 82%;"></div>
        </div>
           </a-col>
           <a-col :span="10">
            <div style="width:100%;height:540px;background:red;margin:0 0 20px 0;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
           <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-0.5% 0 0 2%;color:#2899EF;font-weight: bold;">地块信息</h3>
                <h4 style="margin:0 0 0 2%;color:#fff;font-weight: bold;">Plot related personnel information</h4>
            </div>
            <div id="container" style="width:100%;height:90%;"></div>
        </div>
          <!-- </a-col>
        </a-row> -->
        <!-- <div style="width:100%;height:320px;">
          <a-row :gutter="16">
            <a-col :span="10"> -->

            <!-- </a-col>
            <a-col :span="14"> -->
              <div style="width:100%;height:280px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
                <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-0.5% 0 0 3%;color:#2899EF;font-weight: bold;">地块工单</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Land work order</h4>
              </div>
               <div id="srollbox" style="width:100%;height:84%;overflow:hidden;">
                   <table id="sroll" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in work">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%;color:fff">{{v.solarTerm}}</td>
                         <td style="width:33%">{{v.date}}</td>
                         <td style="width:33%;color:#f1ff66">{{v.farmingName}}</td>
                       </tr>
                     </template>
                   </table>
                    <table id="sroll1" style="width:100%;height:100%;position:relative; top:0">
                     <template v-for="(v,k) in work">
                       <tr :key="k" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%;color:#fff">{{v.solarTerm}}</td>
                         <td style="width:33%">{{v.date}}</td>
                         <td style="width:33%;color:#f1ff66">{{v.farmingName}}</td>
                       </tr>
                     </template>
                   </table>
                </div>
              </div>
             </a-col>
         <!-- </a-row>
        </div>
      </a-col> -->
      <a-col :span="7">
        <div style="width:100%;height:450px;margin-bottom:20px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">检测数据</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Quality Comparison</h4>
              </div>
              <a-row style="height:80%">
                <a-col :span="4">
                  <div v-for="(v,k) in tname" :key="k" ref="but" class="testname" @mouseover="changecolor(k)" @mouseout="changecolor1(k)" @click="change(v.name,k)" style="cursor:pointer;width:65px;height:40px;background:#2899EF;border-radius:15px;line-height:40px;text-align:center;color:#fff;margin:10px 0 0 10px;">{{v.name}}</div>
                </a-col>
                <a-col :span="20">
                  <div class="tubiao">
                    <div id="graph" style=" width: 100%;height: 400px;margin-top:2%"></div>
                   </div>
                  </a-col>
              </a-row>
              <!-- <div id="graphwendu" style=" width: 100%;height: 400px;margin-top:2%"></div> -->
        </div>

        <!-- <div style="width:100%;height:241px;margin-bottom:19px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:20%;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">采收产量数据</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Data comparison</h4>
              </div>
              <div id="graphjiangyu" style=" width: 100%;height: 80%;"></div>
        </div> -->
        <div style="width:100%;height:370px;border-radius:15px;overflow: hidden;background-color:rgba(150, 150, 150, 0.1);border: 1px solid rgba(221, 215, 215, 0.2);">
          <div style="width:100%;height:60px;border-bottom: 1px solid rgba(221, 215, 215, 0.2);padding:10px 0;">
                <h3 style="margin:-1% 0 0 3%;color:#2899EF;font-weight: bold;">农场实景</h3>
                <h4 style="margin:0 0 0 3%;color:#fff;font-weight: bold;">Pictures</h4>
              </div>
              <div class="tupian" style="width:96%;height:87%;margin:4% 2% 2% 2%;">
                   <a-carousel autoplay>
                    <div v-for="(v,k) in plotpic" :key="k">
                      <img style="width:100%;height:100%" :src="v.picUrl">
                    </div>
                  </a-carousel>
                </div>
        </div>
      </a-col>
    </a-row>
    <Foot style="margin:0px;"/>
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
      time:[],
      temperature:[],
      people:[],
      work:[],
      plot:{},
      tubiao:[],
      plotpic:[
        {picUrl:require('../assets/plot_1.jpg')},
        {picUrl:require('../assets/plot_2.jpg')},
        {picUrl:require('../assets/plot_3.jpg')},
        {picUrl:require('../assets/plot_4.jpg')},
        {picUrl:require('../assets/plot_5.jpg')},
      ],
      baseId:1,
      plotId:1,
      nowTimed:'',
      nowTimem:'',
      blockinfo:[],
      block:[],
      polygonss:[],
      map:null,
      info:[],
      base:{},
      baseName:'',
      seed:[],
      changenum:-1,
      changeint:null,
      aaa:-1,
      tname:[
        {name:'种苗检测'},
        {name:'采收检测'},
        {name:'初加工检测'},
      ],
      a:{},
    }
  },
  created(){
    this.baseId=this.$route.query.baseId;
    this.plotId=this.$route.query.plotId;
    let that=this;
     axios.get("/json/baseinfo.json").then((res)=>{
      that.base=res.data.result[that.baseId];
      that.baseName=res.data.result[that.baseId].baseName;
    })

     axios.get("/json/plot1.json").then((res)=>{
      let a=res.data.result[that.baseId].plot;
      that.work=a[that.plotId].work;
    })

    axios.get("/json/plotre.json").then((res)=>{
      that.blockinfo=res.data.result[that.baseId].plot;
      console.log(that.blockinfo)
    })
  },
  mounted(){
    axios.get("/json/plot1.json").then((res)=>{
      let a=res.data.result[that.baseId].plot;
      that.people=a[that.plotId].manager;
      that.work=a[that.plotId].work;
      that.plot=a[that.plotId];
      this.$nextTick(() => {
        if (this.baseScroll) {
          clearInterval(this.baseScroll.timer)
        }
        this.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -229)
      })
    })
       axios.get("json/seedtest.json").then((res)=>{
       that.seed=res.data.seedDetection;
       that.aaa=0;
       this.$refs.but[that.aaa].style.background='blue';
      that.gettestitem();
    })
    this.week=[];
    this.jiangshui=[];
      axios.get("json/process.json").then((res)=>{
        let a=res.data.result[this.baseId].process;
        console.log(a.length);
        for(let i=0;i<a.length;i++){
           if(this.week.indexOf(a[i].leave)==-1){
              this.week.push(a[i].leave);
              this.jiangshui.push(a[i].machining);
           }
           else{
              this.jiangshui[this.week.indexOf(a[i].leave)]+=a[i].machining;
           }
        }
        this.drawLine1();
      })
    this. iniMap();
    let that=this;
    window.addEventListener('done', function(){
      let a=[];
      a.push(that.plotId);
      that.addBlockOnMap(a);
    })
  },
  methods:{
    gettestitem(){
      let that =this;
      that.changeint=setInterval(function () {
        that.changenum++;
    if(that.changenum>=that.seed.length){
      that.changenum=0;
    }
    //that.a.a=this.seed[this.changenum].minstandard+'<{value}<'+this.seed[this.changenum].maxstandard;
    // if('unit' in this.seed[this.changenum]){
    //    that.a.a='{value}'+this.seed[this.changenum].unit;
    // }else{
       that.a.a='{value}';
    // }
         that.a.b=that.seed[that.changenum].testItem;
         if(that.seed[that.changenum].minstandard>5){
         that.a.c=5/(that.seed[that.changenum].maxstandard-that.seed[that.changenum].minstandard+10);
         that.a.d=1-that.a.c;
         that.a.e=that.seed[that.changenum].minstandard-5;
         }else{
           that.a.c=0;
         that.a.d=1-5/(that.seed[that.changenum].maxstandard-that.seed[that.changenum].minstandard+5);
         that.a.e=that.seed[that.changenum].minstandard;
         }
         that.a.f=that.seed[that.changenum].realValue;
         that.a.g=that.seed[that.changenum].maxstandard+5;
         that.drawLine('graph');
},4000);

    },
    change(j,k){
      this.$refs.but[this.aaa].style.background='#2899EF';
      this.$refs.but[k].style.background='blue';
      this.aaa=k;
      if(j=='种苗检测'){
       axios.get("json/seedtest.json").then((res)=>{
       this.seed=res.data.seedDetection;
       this.changenum=0;
       //this.a.a=this.seed[this.changenum].minstandard+'<{value}<'+this.seed[this.changenum].maxstandard;
       this.a.a='{value}'+this.seed[this.changenum].unit;
         this.a.b=this.seed[this.changenum].testItem;
         if(this.seed[this.changenum].minstandard>5){
         this.a.c=5/(this.seed[this.changenum].maxstandard-this.seed[this.changenum].minstandard+10);
         this.a.d=1-this.a.c;
         this.a.e=this.seed[this.changenum].minstandard-5;
         }else{
           this.a.c=0;
         this.a.d=1-5/(this.seed[this.changenum].maxstandard-this.seed[this.changenum].minstandard+5);
         this.a.e=this.seed[this.changenum].minstandard;
         }
         this.a.f=this.seed[this.changenum].realValue;
         this.a.g=this.seed[this.changenum].maxstandard+5;
         this.drawLine('graph');
       clearInterval(this.changeint);
      this.gettestitem();
    })
      }
      if(j=='初加工检测'){
       axios.get("json/firsttest.json").then((res)=>{
       this.seed=res.data.firstDetection;
        this.changenum=0;
       //this.a.a=this.seed[this.changenum].minstandard+'<{value}<'+this.seed[this.changenum].maxstandard;
       this.a.a='{value}';
         this.a.b=this.seed[this.changenum].testItem;
         if(this.seed[this.changenum].minstandard>5){
         this.a.c=5/(this.seed[this.changenum].maxstandard-this.seed[this.changenum].minstandard+10);
         this.a.d=1-this.a.c;
         this.a.e=this.seed[this.changenum].minstandard-5;
         }else{
           this.a.c=0;
         this.a.d=1-5/(this.seed[this.changenum].maxstandard-this.seed[this.changenum].minstandard+5);
         this.a.e=this.seed[this.changenum].minstandard;
         }
         this.a.f=this.seed[this.changenum].realValue;
         this.a.g=this.seed[this.changenum].maxstandard+5;
         this.drawLine('graph');
        clearInterval(this.changeint);
      this.gettestitem();
    })
      }
      if(j=='采收检测'){
       axios.get("json/gettest.json").then((res)=>{
       this.seed=res.data.firstDetection;
       this.changenum=0;
       //this.a.a=this.seed[this.changenum].minstandard+'<{value}<'+this.seed[this.changenum].maxstandard;
       this.a.a='{value}';
         this.a.b=this.seed[this.changenum].testItem;
         if(this.seed[this.changenum].minstandard>5){
         this.a.c=5/(this.seed[this.changenum].maxstandard-this.seed[this.changenum].minstandard+10);
         this.a.d=1-this.a.c;
         this.a.e=this.seed[this.changenum].minstandard-5;
         }else{
           this.a.c=0;
         this.a.d=1-5/(this.seed[this.changenum].maxstandard-this.seed[this.changenum].minstandard+5);
         this.a.e=this.seed[this.changenum].minstandard;
         }
         this.a.f=this.seed[this.changenum].realValue;
         this.a.g=this.seed[this.changenum].maxstandard+5;
         this.drawLine('graph');
       clearInterval(this.changeint);
      this.gettestitem();
    })
      }
    },
    changecolor(a){
      if(a!=this.aaa){
      this.$refs.but[a].style.background='blue';
      }
    },
    changecolor1(a){
      if(a!=this.aaa){
       this.$refs.but[a].style.background='#2899EF';
      }
    },
     backhome(){
       let a=Number(this.baseId)+1;
     this.$router.push({ name: 'base',query:{baseId:a}});
    },
    //画地块函数
        addBlockOnMap(value){
            console.log(value);
        if(this.block.length>0){
            for(let b=0;b<this.block.length;b++){
                this.map.remove(this.block[b]);
            }
        }
        for(let j=0; j<value.length;j++){
        let a=value[j];
        for(let i=0;i<this.blockinfo.length;i++){
        let item = this.blockinfo[i];
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
            this.polygonss=[];
            this.polygonss.push(polygon2);
            this.block.push(polygon2);
            this.map.add(polygon2);
            this.map.setFitView([ polygon2 ]);

        }
        }
        }
            }
            let that=this;
            //polygon2.close();
            for(let i=0;i<this.polygonss.length;i++){
            this.polygonss[i].on("click",function(e) {that.infowindow(e);});
            }
        },
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
            var a=this.plot.plotName;
            var b=this.plot.plotArea;
            var c=this.plot.status;
            var e=this.plot.altitude.toFixed(2);
            var d=this.baseName;
        this.info = [];
        this.info.push("<div style=\"width:175px;margin:20px 25px;\"><table>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">地块名称：</td><td>"+a+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">地块面积：</td><td>"+b+"亩</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">地块状态：</td><td>"+c+"</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">地块海拔：</td><td>"+e+"米</td></tr>");
        this.info.push("<tr style=\"color:#fff;line-height:20px;\"><td style=\"width:80px;\">所属基地：</td><td>"+d+"</td></tr>");
        this.info.push("</table></div>");

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
     drawLine(q){
        let that=this;
        // 基于准备好的dom，初始化echarts实例
        var myChart = that.$echarts.init(document.getElementById(q))
        window.addEventListener("resize", function() {
	     myChart.resize();
  })
//   var c={
//     a:'25cm<{value}<32cm',
//     b:'苗高',
//     c:0.295,
//     d:0.7,
//     f:31,
// }
        // 绘制图表
        myChart.setOption({
           title : {
             text:this.a.b,
             left: 'center',
                textStyle: {
                    fontSize: 20,
                    color: '#fff',
                }
            },
            tooltip : {
        formatter: "{a} : {c}"
    },
    series: [
        {
            name: '检测值',
            type: 'gauge',
            min:this.a.e,
            max:this.a.g,
            fontSize: 15,
            detail: {
            formatter:this.a.a,
            textStyle: {
              color: '#f1ff66',
              fontSize : 20,

                        }
          },
            data: [{value: this.a.f}],
            axisLine: {            // 坐标轴线
                     lineStyle: {       // 性lineStyle控制线条样式
                         color: [[this.a.c, '#FE585A'], [this.a.d, '#48DCD9'], [1, '#FE585A']],
                         width: 20,
                                }
                            },
        }
    ]
        });

  },
  drawLine1(){
        let that=this;
         var myChart1 = that.$echarts.init(document.getElementById('graphjiangyu'))
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
        top: '20%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : that.week,
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
            name:'单位(kg)',
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
            name:'总重',
            type:'bar',
            barWidth: '60%',
            data:that.jiangshui,
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
@media screen and (min-width: 1550px) {
    .testname {
      width: 100px !important;
    }
    .tupian img {
      height: 280px !important
    }
}
@media screen and (max-width: 1550px) {
    .testname {
      width:65px !important;
    }
    .tupian img {
      height: 100% !important
    }
}
.testname:hover{
 background:blue;
}
#container >>> .amap-info-content {
background-color:rgba(35, 35, 35, 0.6);
 border-radius:10px 10px;
box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
#container >>> .amap-info-sharp{
border-top: 8px solid rgba(35, 35, 35, 0.6);
}
.tubiao >>> .slick-slide {
  height: 400px;
  background:rgba(150, 150, 150, 0);
  overflow: hidden;
}
.tupian >>> .slick-slide {
  height: 280px;
  background:rgba(150, 150, 150, 0.1);
  overflow: hidden;
}
</style>
