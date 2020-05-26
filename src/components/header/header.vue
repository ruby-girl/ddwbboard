<template>
  <div class="header">
    <div class="title-box">
      <h1 class="title">川产道地(麦冬)数字化管理平台</h1>
    </div>
    <div class="wrapper display-flex align-items-center" style="width:350px">
      <div>
        <div class="display-flex align-items-center">
          <i class="iconfont icondingwei"></i>
          <span>{{city}}</span>
        </div>
        <div class="display-flex align-items-center">
          <i class="iconfont iconrili"></i>
          <span>{{date}}</span>
        </div>
      </div>
      <div style="margin:0 20px;">
        <div class="display-flex align-items-center">
          <div>
            <img style="width:50px" :src="now.weather_pic" alt />
          </div>
          <div>
            <span>{{now.temperature}}</span>
            <span class="weather">{{weather}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    setInterval(() => {
      var date = new Date().toString().split(" ");
      var month = new Date().getMonth() + 1;
      var str = "";
      this.date = str + date[3] + "/" + month + "/" + date[2] + " " + date[4];
    }, 1000);
    axios
      .get("/tq", {
        params: { from: "5", lat: 31.1, lng: 105.06, needMoreDay: 1 },
        headers: { Authorization: "APPCODE 912f4ba38a394870aed1d60aca9a34fb" }
      })
      .then(res => {
        if (res.status === 200) {
          this.now = res.data.showapi_res_body.now;
          this.city =
            res.data.showapi_res_body.cityInfo.c5 +
            res.data.showapi_res_body.cityInfo.c3;
          this.weather = res.data.showapi_res_body.now.weather;
        }
      });
  },
  data() {
    return {
      date: "",
      weather: "",
      now: {},
      city: ""
    };
  }
};
</script>
<style lang="stylus">
body {
  height: 100% !important;
  .title-box {
    background: url('../../assets/new/title.png') no-repeat;
    background-size: 100% 100%;
    width: 60%;
    margin: 0 auto;
    text-align: center;

    >h1 {
      font-size: 26px;
      color: #fff;
      padding-bottom: 20px;
    }
  }

  .header {
    width: 100%;
    display: flex;
    position: relative;

    .left-border, .right-border {
      flex: 1;
      border-top: 1px solid #0093EE;
      margin-top: 20px;
    }
    .iconfont{
        margin-right:8px;
        color:#0AF3DB !important;
    }
    span {
      font-size: 14px;
    }

    .rotate-line:nth-of-type(1) {
      transform: rotateZ(-27deg);
    }

    .rotate-line:nth-of-type(2) {
      transform: rotateZ(27deg);
    }

    .border {
      text-align: center;
      width: 700px;
      height: 60px;
      min-width: 700px;
      font-size: 0;
      border-top: 1px solid rgba(0, 147, 238, 1);

      .title {
        font-size: 40px;
        margin-top: 6px;
        font-weight: 1000;
        letter-spacing: 5px;
      }
    }

    .wrapper {
      position: absolute;
      right: 28px;
      line-height: 35px;
      color:#fff;
    }
  }
}
</style>

