<template>
  <div class="theProject">
    <div
      v-if="this.proj.id % 2 !== 0"
      class="spacer"
      :style="{
        backgroundImage:
          'url(' + require('../../public/backgrounds/background5.svg') + ')',
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
          <p data-aos="zoom-out-right">
            {{ $store.getters.isPT ? proj.descriptionPT : proj.descriptionEN }}
          </p>
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
        <p :class="[content == '' ? 'desactive' : 'active', 'stackName']">
          {{ content }}
        </p>
        <div class="icons" data-aos="zoom-out-left">
          <div
            v-for="tec in proj.stack"
            @mouseover="content = tec.name"
            @mouseleave="content = ''"
            :key="tec.icon"
            class="tec"
          >
            <i :class="tec.icon"></i>
          </div>
        </div>
        <a :href="proj.github" target="_blank" data-aos="zoom-out-left"
          ><i class="fab fa-github"></i
          >{{ $store.getters.isPT ? "Ver Código" : "See Code" }}</a
        >
        <a :href="proj.liveserver" target="_blank" data-aos="zoom-out-left"
          ><i class="fas fa-globe"></i
          >{{ $store.getters.isPT ? "Ver Site" : "Online Demo" }}</a
        >
      </div>
    </div>
    <div
      v-if="this.proj.id % 2 !== 0"
      class="spacer bottomSvg"
      :style="{
        backgroundImage:
          'url(' + require('../../public/backgrounds/background2.svg') + ')',
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
      content: "",
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
.theProject {
  overflow: hidden;
  z-index: 2;
}
.project {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1010px;
  padding: 0 55vw;
  grid-gap: 10px;
  justify-items: center;
  justify-content: center;
  .info {
    .infoContainer {
      h3 {
        padding-left: 10px;
        padding-bottom: 10px;
      }
      p {
        padding-left: 20px;
        text-align: left;
        max-width: 30vw;
      }
    }
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .btns {
    .stackName {
      color: #ec4e20;
      font-size: 0;
      opacity: 0;
      min-height: 25px;
      font-weight: bold;
      padding-bottom: 15px;
      padding-left: 10px;
      transition: all 0.5s ease-in-out;
    }
    .stackName.active {
      font-size: 1.5rem;
      opacity: 1;
      width: auto;
      height: auto;
      transition: all 0.5s ease-in-out;
    }
    .icons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .tec {
        position: relative;
      }
      .tec .tooltip-content {
        display: none;
        position: absolute;
        top: -20px;
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
      // right: vw;
    }
    .laptopImg {
      position: relative;
      // left: -7vw;
      transform: rotate(15deg);
    }
  }
}
.btns,
.imgContainer,
.info {
  width: 50vw;
  max-width: 500px;
  img {
    max-width: 500px;
  }
}
.odd {
  background-color: #161414;
  color: #fff;
  .btns {
    a,
    .stackName,
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
@media only screen and (max-width: 450px) {
  .project {
    padding: 0;
    grid-template-columns: 1fr;
    .info {
      width: 100%;
      .infoContainer {
        width: 80%;
        p {
          text-align: left;
          width: 100% !important;
          max-width: none !important;
        }
      }
    }
    .imgContainer {
      .phoneImg {
        position: relative;
        left: 20vw;
      }
      .laptopImg {
        position: relative;
        left: -18vw;
        width: 120%;
        top: -100px;
        margin-top: -100px;
      }
    }
    .btns {
      padding-top: -1000px;
    }
  }
}
@media only screen and (max-width: 800px) {
  .project .info .infoContainer p {
    max-width: 45vw;
  }
  .phoneImg {
    width: 75vw !important;
    right: 10vw !important;
  }
}
</style>
