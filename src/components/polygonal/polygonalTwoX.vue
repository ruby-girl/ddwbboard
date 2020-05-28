<template>
  <div class="polygonal">
    <div class="temperature-map" ref="polygonal"></div>
  </div>
</template>
<script>
// import chartsType from "../../assets/js/chartsType.js";
import axios from "axios";

export default {
  data() {
    return {
      datas: [200, 500, 1000, 1000],
      tdataAxis: [2015, 2016, 2017, 2018]
    };
  },
  mounted() {
    this._drawPolygonal();
  },
  methods: {
    _drawPolygonal() {
      let polygonalChart = this.$echarts.init(this.$refs.polygonal);
      var colors = [
        "#0089FF",
        "#B865DF"
      ];
      // 指定图表的配置项和数据
      var option = {
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff"
            }
          }
        },
       legend: {
                        data:['组数','CMI'],
                        y:10,
                         textStyle: {
                    color: '#fff'
                }
       },
        xAxis: [
          {
            type: "category",
            data: [10, 20, 35],
            axisPointer: {
              type: "shadow"
            },
            axisLine: {
              show: true,

              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: true,
              /* color: '#fff',*/
              fontSize: 12,
              interval: 0,
              formatter: function(value) {
                return value;
              }
              //fontWeight: 'bold'
            }
          }
        ],

        yAxis: [
          {
            type: "value",
            name: "组数整体指标",
            position: "left",
            splitLine: { show: false },
            axisLine: {
              show: true,

              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: true,
              showMinLabel: true,
              showMaxLabel: true,
              formatter: "{value}"
            }
          },
          {
            type: "value",
            name: "CMI",
            position: "right",

            splitLine: { show: false },
            axisLine: {
              show: true,

              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: true,
              showMinLabel: true,
              showMaxLabel: true,
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "组数",
            type: "bar",
            barWidth: 20,
            data: [1, 20, 35],
            yAxisIndex: 0
          },
          {
            name: "CMI",
            type: "bar",
            barWidth: 20,
            data: [1, 10, 15],
            yAxisIndex: 1
          }
        ]
      };
      polygonalChart.setOption(option);
    }
  }
};
</script>
<style lang="stylus">
.polygonal {
  height: 100%;
}

.temperature-map {
  height: 100%;
}
</style>
