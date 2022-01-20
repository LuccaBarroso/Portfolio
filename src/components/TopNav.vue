<template>
  <div class="sticky">
    <div class="nav-bar">
      <p v-if="content !== ''">{{ content }}</p>
      <i
        class="fas fa-user"
        @mouseover="content = 'About'"
        @mouseleave="content = ''"
      ></i>
      <i
        class="fas fa-file"
        @mouseover="content = 'Projects'"
        @mouseleave="content = ''"
      ></i>
      <i
        class="fas fa-envelope"
        @mouseover="content = 'Contact'"
        @mouseleave="content = ''"
      ></i>
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
  padding-left: 10px;
  position: absolute;
  right: 0;
  background-color: #161414;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  clear: both;
  float: left;
  border-radius: 0 0 0 20px;
  transition: all 0.2s ease-in-out;
  p,
  i {
    padding: 10px !important;
    color: white;
    font-size: 22px;
  }
  p {
    transition: all 0.2s ease-in-out;
    font-weight: 300;
  }
  i:hover {
    color: #ec4e20;
  }
}
</style>
