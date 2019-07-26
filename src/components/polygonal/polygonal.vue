<template>
    <div class="polygonal">
        <div class="temperature-map" ref="polygonal"></div>
    </div>
</template>
<script>
import chartsType from '../../assets/js/chartsType.js';
import axios from 'axios'

export default {
    data() {
        return {
            datas: [300, 500, 1000],
            tdataAxis: [2015, 2016, 2017]
        }
    },
    // created () {
    //     axios.get("/tq",{params:{from:'5',lat: 31.10,lng: 105.06,needMoreDay:1},
    //     headers:{Authorization:"APPCODE 912f4ba38a394870aed1d60aca9a34fb"}}).then((res)=>{
    //         console.log(res)
    //     });
    // },
    mounted () {
        // axios.get("/sqtq",{params:{area: '三台'}, 
        // headers:{Authorization:"APPCODE 912f4ba38a394870aed1d60aca9a34fb"}}).then((res)=>{
        //     if (res.status == 200 && res.statusText == 'OK') {
        //         let data = res.data.showapi_res_body.hourList
        //         if (data && data.length) {
        //             for (var i = 0; i < data.length; i++) {
        //                 let curTime = data[i].time.substring(8)
        //                 let curTem = +data[i].temperature
        //                 curTime = curTime.substring(0, 2) + ':' + curTime.substring(2)
        //                 this.tdataAxis.push(curTime)
        //                 this.datas.push(curTem)
        //             }
        //         }
        //         this._drawPolygonal()
        //     }
        // });
        this._drawPolygonal()
    },
    methods: {
        _drawPolygonal () {
            let polygonalChart = this.$echarts.init(this.$refs.polygonal);
            var option = chartsType.charts(this.tdataAxis,this.datas,'用量（亩/kg）','bar','有机肥','#289CF4','x');
            option.legend = {
                left: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
            option.series.push({
                name: '普通肥',
                barWidth:20,
                data:[240, 200 ,90],
                type: 'bar',
                itemStyle: {
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal:{
                            color: 'rgba(1,84,200,0.6)'
                    }
                },
            })
            option.series.push({
                name:'百分比',
                type:'line',
                data: [80, 40, 9],
                itemStyle: {
                    normal:{
                        color: '#4ECB73'
                    }
                }
            })
            polygonalChart.setOption(option);
        }
    }
}
</script>
<style lang="stylus">

</style>
