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
            datas: [5600, 5100, 2500 , 3400],
            tdataAxis: ['人工费', '设备费', '农资费用','检测费']
        }
    },
    mounted () {
        this._drawPolygonal()
    },
    methods: {
        _drawPolygonal () {
            let polygonalChart = this.$echarts.init(this.$refs.polygonal,null,{devicePixelRatio: 2.5});
            var option = chartsType.charts(this.tdataAxis,this.datas,'元','bar','计划费用','#14E6C4','x');
            option.legend = {
                left: 'right',
                textStyle: {
                    color: '#fff'
                }
            }
            option.series.push({
                name: '实际费用',
                barWidth:20,
                data:[5100, 5300, 2800 , 3200],
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
