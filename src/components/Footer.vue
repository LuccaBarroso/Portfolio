<template>
  <div id="footer" class="footer">
    <div
      class="spacer"
      :style="{
        backgroundImage:
          'url(' + require('../../public/backgrounds/background1.svg') + ')',
      }"
    ></div>
    <div class="darkBackGround">
      <div class="icons">
        <a href="https://github.com/LuccaBarroso" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lucca-moura-32529119b/"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div class="buttons">
        <a
          href="mailto:barrosolucca@gmail.com?Subject=Portfolio"
          target="_blank"
          ><i class="fas fa-envelope"></i
          >{{ $store.getters.isPT ? "Enviar um email" : "Send an email" }}</a
        >
      </div>
      <div>
        <i class="fab fa-whatsapp"></i>
        <p>+55 (85) 998189540</p>
      </div>
      <div>
        <i class="fas fa-envelope"></i>
        <p>barrosolucca@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  overflow: hidden;
  width: 100%;
}
.spacer {
  aspect-ratio: 960/300;
  width: 100%;
  margin-top: -100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.darkBackGround {
  margin-top: -20px;
  background-color: #161414;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    i {
      font-size: 30px;
      padding: 10px;
    }
  }
}
a {
  color: white;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}
.buttons {
  a {
    margin: 8px;
    text-decoration: none;
    color: #fff;
    background: none;
    border: 2px solid #fff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    padding-right: 8px;
    text-align: center;
    i {
      font-size: 20px;
      padding: 10px;
    }
  }
}
a:hover {
  transform: scale(1.1);
}
@media only screen and (max-width: 600px) {
  .darkBackGround {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
  .spacer {
    margin-top: 0px;
  }
}
</style>
