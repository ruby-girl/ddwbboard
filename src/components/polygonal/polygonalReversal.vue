<template>
  <div class="polygonal">
    <div class="temperature-map" ref="polygonals"></div>
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
      let polygonalChart = this.$echarts.init(this.$refs.polygonals);
      let option = {
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top:0,
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: "category",
          show: false,
          data: ["巴西", "印尼", "美国"],
          axisTick: {
            //y轴刻度线
            show: false
          },
          splitLine: {
            //网格线
            show: false
          }
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 25034],
            barGap: "60%",
            barCategoryGap: "60%",
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.

                  var colorList = ["#0AFBE2", "#0A81FB", "#7380DC"];

                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,

                  position: "right",

                  //                             formatter: '{c}'

                  formatter: "{b}\n{c}"
                }
              }
            }, //设置柱的宽度，要是数据太少，柱子太宽不美观~
           
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
