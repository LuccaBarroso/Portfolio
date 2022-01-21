<template>
  <div class="theProject">
    <div
      v-if="this.proj.id % 2 !== 0"
      class="spacer"
      :style="{
        backgroundImage:
          'url(' +
          require('../../public/backgrounds/background' +
            this.randomSvg() +
            '.svg') +
          ')',
      }"
    ></div>
    <div
      :class="[
        this.proj.id === '0' ? 'first' : '',
        this.isOdd ? 'odd' : 'even',
        'project',
      ]"
      :id="this.proj.id === '0' ? 'firstProject' : ''"
    >
      <div class="info">
        <div class="infoContainer">
          <h3 data-aos="zoom-out-right">{{ proj.name }}</h3>
          <p data-aos="zoom-out-right">{{ proj.descriptionEN }}</p>
        </div>
      </div>
      <div class="imgContainer">
        <img
          class="phoneImg"
          :src="require('../../public/imgs/' + proj.phoneImg)"
          alt="Mockup-phone-application"
          data-aos="zoom-out-left"
        />
      </div>
      <div class="imgContainer">
        <img
          class="laptopImg"
          :src="require('../../public/imgs/' + proj.laptopImg)"
          alt="Mockup-laptop-application"
          data-aos="zoom-in-right"
        />
      </div>
      <div class="btns">
        <div class="icons" data-aos="zoom-out-left">
          <div v-for="tec in proj.stack" :key="tec.icon" class="tec">
            <i :class="'fab fa-' + tec.icon"></i>
            <div class="tooltip-content">
              <p>{{ tec.name }}</p>
            </div>
          </div>
        </div>
        <a :href="proj.github" target="_blank" data-aos="zoom-out-left"
          ><i class="fab fa-github"></i>See Code</a
        >
        <a :href="proj.liveserver" target="_blank" data-aos="zoom-out-left"
          ><i class="fas fa-globe"></i>Live-server</a
        >
      </div>
    </div>
    <div
      v-if="this.proj.id % 2 !== 0"
      class="spacer bottomSvg"
      :style="{
        backgroundImage:
          'url(' +
          require('../../public/backgrounds/background' +
            this.randomSvg() +
            '.svg') +
          ')',
      }"
    ></div>
  </div>
</template>

<script>
//animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data: function () {
    return {
      isOdd: this.proj.id % 2 !== 0,
    };
  },
  props: ["proj"],
  created() {
    AOS.init();
  },
  methods: {
    randomSvg: () => {
      return Math.floor(Math.random() * 8 + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  .info {
    .infoContainer {
      h3 {
        padding-left: 10px;
        padding-bottom: 10px;
      }
      p {
        padding-left: 20px;
        text-align: justify;
        max-width: 30vw;
      }
    }
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .btns {
    .icons {
      .tec {
        position: relative;
      }
      .tec .tooltip-content {
        display: none;
        position: absolute;
        top: -4vh;
        text-align: center;
        padding: 0.5em;
        font-weight: 500;
        font-size: 18px;
      }
      .tec:hover .tooltip-content {
        display: block;
      }
      i {
        color: #ec4e20;
        padding: 10px;
        font-size: 30px;
      }
      display: flex;
    }
    a {
      margin: 8px;
      text-decoration: none;
      color: #ec4e20;
      background: none;
      border: 3px solid #ec4e20;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      transition: all 0.2s ease-in-out;
      padding-right: 8px;
      i {
        font-size: 20px;
        padding: 10px;
      }
    }
    a:hover {
      transform: scale(1.1);
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .imgContainer {
    img {
      width: 50vw;
    }
    .phoneImg {
      position: relative;
      // right: 12vw;
    }
    .laptopImg {
      position: relative;
      // left: -7vw;
      transform: rotate(15deg);
    }
  }
  div {
    max-width: 500px;
    img {
      max-width: 500px;
    }
  }
}
.odd {
  background-color: #161414;
  color: #fff;
  .btns {
    a,
    .icons i {
      color: #fff;
    }
  }
  .btns a {
    border-color: #fff;
  }
  .btns .icons i {
    color: #fff;
    z-index: 2;
  }
  .btns .icons div p {
    color: #fff;
  }
}
.first {
  margin-top: -10vw;
}
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bottomSvg {
  transform: scaleX(-1) scaleY(-1);
}
@media only screen and (min-width: 1400px) {
  h3 {
    font-size: 22px !important;
  }
  p {
    font-size: 20px !important;
  }
  .icons div i {
    font-size: 50px !important;
  }
}
@media only screen and (max-width: 800px) {
  .project .info .infoContainer p {
    max-width: 45vw;
  }
  .phoneImg {
    width: 75vw !important;
    // right: 2vw !important;
  }
}
</style>
