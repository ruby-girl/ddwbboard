<template>
    <div class="base-map" ref="baseMap"></div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
        return {
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
    mounted() {
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name + ': ' + params.value + '亩'
                } 
            },
            grid: {
                left: 20
            },
            series: [
                {
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: this.baseDatas
                }
            ]
        };
        axios.get('json/baseinfo.json').then(res => {
            if (res.status == 200) {
                let data = res.data.result
                if (data && data.length) {
                    for (var i = 0; i < data.length; i++) {
                        this.baseDatas[i].name = data[i].baseName
                        this.baseDatas[i].value = data[i].area
                    } 
                }
                let curBaseMap = this.$echarts.init(this.$refs.baseMap)
                curBaseMap.setOption(option)
            }
        })
        
    }
}
</script>
<style lang="stylus">

</style>
