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
    };
  },
  mounted() {
    // this._drawPolygonal();
  },
  methods: {
    _drawPolygonal(datas) {
      let polygonalChart = this.$echarts.init(this.$refs.polygonals,null,{devicePixelRatio: 2.5});
      let option = {
        grid: {
          left: "3",
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
          data: ["订单金额","贷款金额","投保金额"],
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
            data: datas,
            barGap: "60%",
            barCategoryGap: "60%",
            itemStyle: {
              normal: {
                color: function(params) {
                  // build a color map as your need.
                  var colorList = ["#7380DC", "#0A81FB","#0AFBE2"];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,
                  color:'#fff',
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
