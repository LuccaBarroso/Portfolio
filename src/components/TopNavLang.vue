<template>
  <div class="sticky">
    <div class="nav-bar">
      <p v-on:click="$store.commit('changeLang')">
        {{ getLang === "PT" ? "PT-BR" : "EN-US" }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      content: "",
    };
  },
  computed: {
    getLang() {
      return this.$store.state.lang;
    },
  },
  created() {
    console.log(this.$store.state.lang);
  },
};
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10;
}
.nav-bar {
  padding-right: 10px;
  position: absolute;
  left: 0;
  background-color: #161414;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  clear: both;
  float: left;
  border-radius: 0 0 20px 0;
  transition: all 0.2s ease-in-out;
  p {
    padding: 10px !important;
    color: white;
    font-size: 22px;
    font-weight: 400;
    cursor: pointer;
  }
}
</style>
