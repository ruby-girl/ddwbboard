<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <!--    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/xx">xx</router-link>
      </div>-->
      <router-view />
    </div>
  </a-locale-provider>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      locale: zhCN
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
ul,ol,li {
list-style: none;
padding: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.display-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.display-flex > * {
  display: block;
}

.display-inline-flex {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
}

.display-inline-flex > * {
  display: block;
}

/*伸缩流方向*/
.flex-direction-column {
  -webkit-box-orient: vertical;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}

/*主轴对齐*/
.justify-content-flex-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.justify-content-flex-end {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}

.justify-content-flex-justify {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

/*侧轴对齐*/
.align-items-flex-start {
  -webkit-box-align: start;
  -ms-flex-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}

.align-items-flex-end {
  -webkit-box-align: end;
  -ms-flex-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}

.align-items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.align-items-baseline {
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  -webkit-align-items: baseline;
  align-items: baseline;
}

.flex-wrap {
  flex-wrap: wrap;
}

/*伸缩性*/
.flex-auto {
  -webkit-box-flex: 1;
  -ms-flex: auto;
  -webkit-flex: auto;
  flex: auto;
}

.flex-1 {
  width: 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.color-main {
  color: #0afbe2;
}
.color-fff {
  color: #fff;
}
.title-item-y {
  font-size: 14px;
  line-height: 30px;
}
</style>
