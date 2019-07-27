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
    mounted () {
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
