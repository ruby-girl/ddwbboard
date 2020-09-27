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
    return {};
  },
  methods: {
    _drawPolygonal(dataLeft,dataRight) {
      let _this = this;
      let polygonalChart = this.$echarts.init(this.$refs.polygonal,null,{devicePixelRatio: 2.5});
      var colors = ["#0089FF", "#B865DF"];
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
          data: ["贷款金额", "贷款人数"],
          y: 10,
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            data: ["订单贷", "劳务贷", "农资贷",'保险贷'],
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
            name: "万元",
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
            name: "人",
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
            name: "贷款金额",
            type: "bar",
            barWidth: 20,
            data:dataLeft,
            yAxisIndex: 0
          },
          {
            name: "贷款人数",
            type: "bar",
            barWidth: 20,
            data:dataRight,
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
