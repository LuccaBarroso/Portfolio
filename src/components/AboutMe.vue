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
        <h3>About Me</h3>
        <p>
          As a computer science student, currently studying in Brazil. I am
          always looking for new opportunities to gain knowledge and improve my
          coding skills. Lately, I have been taking a lot of coding courses on
          the web and am familiarized with Vue, Node.js and MongoDB. don't
          forget to check some of my projects down the page. As you can see, I
          also have a good level of English, have studied as an exchange student
          in the US. If you need someone eager to learn, you found the right
          person, send me an email, let's work together.
        </p>
      </div>
    </div>
    <div
      class="spacer bottomSvg"
      :style="{
        backgroundImage:
          'url(' + require('../../public/backgrounds/background2.svg') + ')',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.aboutMe {
  position: relative;
  top: -15vw;
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
    top: -10vw;
  }
}
@media only screen and (max-width: 650px) {
  .aboutMe {
    top: 2vw;
  }
}
</style>
