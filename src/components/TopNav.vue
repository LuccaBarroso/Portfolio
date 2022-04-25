<template>
  <div class="sticky">
    <div class="nav-bar">
      <p :class="[content == '' ? 'desactive' : 'active']">{{ content }}</p>
      <a href="#about">
        <i
          class="fas fa-user"
          @mouseover="content = $store.getters.isPT ? 'Sobre' : 'About'"
          @mouseleave="content = ''"
        ></i>
      </a>
      <a href="#firstProject">
        <i
          class="fas fa-file"
          @mouseover="content = $store.getters.isPT ? 'Projetos' : 'Projects'"
          @mouseleave="content = ''"
        ></i>
      </a>
      <a href="#footer">
        <i
          class="fas fa-envelope"
          @mouseover="content = $store.getters.isPT ? 'Contato' : 'Contact'"
          @mouseleave="content = ''"
        ></i>
      </a>
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
  i {
    padding: 10px !important;
    color: white;
    font-size: 22px;
    transition: all 0.2s ease-in-out;
  }
  p {
    opacity: 0;
    color: white;
    transition: all 0.5s ease-in-out;
    font-weight: 300;
  }
  .active {
    opacity: 1;
    font-size: 22px;
  }
  i:hover {
    color: #ec4e20;
  }
}
</style>
