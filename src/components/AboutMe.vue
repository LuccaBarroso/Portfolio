<template>
  <div class="aboutMe">
    <div
      class="spacer"
      :style="{
        backgroundImage:
          'url(' + require('../../public/backgrounds/background1.svg') + ')',
      }"
    ></div>
    <div class="darkBackGround">
      <div class="content">
        <h3>{{ $store.getters.isPT ? "Sobre" : "About Me" }}</h3>
        <p>
          {{ $store.getters.isPT ? this.about[0] : this.about[1] }}
        </p>
      </div>
    </div>
    <div
      class="spacer bottomSvg"
      :style="{
        backgroundImage:
          'url(' + require('../../public/backgrounds/background5.svg') + ')',
      }"
    ></div>
  </div>
</template>

<script>
import about from "../../public/data/about.json";
export default {
  data: function () {
    return { about };
  },
};
</script>

<style lang="scss" scoped>
.aboutMe {
  position: relative;
  margin-top: -15vw;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    h3 {
      padding: 1vw;
    }
    text-align: justify;
    p {
      text-indent: 2em;
    }
    padding: 3vh 0;
    width: 80%;
    max-width: 600px;
  }
}
.darkBackGround {
  background-color: #161414;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spacer {
  z-index: 0;
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bottomSvg {
  transform: scaleX(-1) scaleY(-1);
}
@media only screen and (min-width: 1200px) {
  .content {
    font-size: 20px;
    z-index: 2;
  }
}
@media only screen and (max-width: 1100px) {
  .aboutMe {
    margin-top: -10vw;
  }
}
@media only screen and (max-width: 650px) {
  .aboutMe {
    margin-top: 2vw;
  }
}
</style>
