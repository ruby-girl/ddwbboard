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
            datas: [270, 290, 320 , 350],
            tdataAxis: [2015, 2016, 2017,2018]
        }
    },
    mounted () {
        this._drawPolygonal()
    },
    methods: {
        _drawPolygonal () {
            let polygonalChart = this.$echarts.init(this.$refs.polygonal,null,{devicePixelRatio: 2.5});
            var option = chartsType.charts(this.tdataAxis,this.datas,'用量（亩/kg）','bar','有机肥','#14E6C4','x');
            option.legend = {
                left: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
            option.series.push({
                name: '普通肥',
                barWidth:20,
                data:[140, 200 ,90,90],
                type: 'bar',
                itemStyle: {
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#F39474'
                    },
                    normal:{
                            color: '#F39474'
                    }
                },
            })
            polygonalChart.setOption(option);
        }
    }
}
</script>
<style lang="stylus">
.polygonal{
    height:100%;
}
.temperature-map{
    height:100% !important;
    div{
        height:100% !important;
    }
}
</style>
