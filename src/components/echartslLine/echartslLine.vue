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
            datas: [200, 500, 100 , 1000],
            tdataAxis: [2017, 2018, 2019,2020]
        }
    },
    mounted () {
        // this._drawPolygonal()
    },
    methods: {
        _drawPolygonal (title,datas) {
            let polygonalChart = this.$echarts.init(this.$refs.polygonal,null,{devicePixelRatio: 2.5});
            var option = chartsType.charts(this.tdataAxis,datas,'份','bar',title,'#3C5DFA','x');
            option.legend = {
                left: 'right',
                textStyle: {
                    color: '#fff'
                },
                show:false
            }
            polygonalChart.setOption(option);
        }
    }
}
</script>
<style lang="stylus">

</style>
