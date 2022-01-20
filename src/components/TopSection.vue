<template>
  <div class="topSection">
    <div class="introduction">
      <p class="name">Lucca Barroso</p>
      <p class="job">Web Developer</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.topSection {
  z-index: 2;
  height: 80vh;
}
.introduction {
  position: absolute;
  right: 5vw;
  top: 80vh;
  text-align: center;
  p {
    font-size: 27px;
    margin: -5px;
  }
  p.name {
    font-weight: 500;
  }
  p.job {
    font-weight: 100;
    font-size: 35px;
    color: #ec4e20;
  }
}
</style>
