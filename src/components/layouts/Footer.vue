<template>
  <div class="footer">
    <div class="copyright">
      <div>Copyright All Rights Reserved四川本源数科科技有限公司</div>
      <div>蜀ICP备20024953号-1</div>
      <div>
        <a href="http://cmc.scbysk.com">链接：全国中药材资源查询系统</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutFooter"
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  text-align: center;
}
a {
  color: #ffffffd6;
}
a:hover {
  color: white;
}

.copyright {
  color: #ffffff;
  font-size: 12px;
  position: fixed;
  bottom: 5px;
  line-height: 13px;
  width: 40%;
  left: 30%;
}
</style>
