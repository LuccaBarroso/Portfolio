<template>
  <div class="stack" ref="canvas"></div>
</template>

<script>
import * as THREE from "three";
import * as threeUtils from "../../threeFiles/utils";

export default {
  data: function () {
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      3000
    );
    const raycaster = new THREE.Raycaster();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0xffffff, 0);
    const light = new THREE.DirectionalLight("hsl(0, 100%, 100%)");
    const ambientLight = new THREE.AmbientLight(0x404040, 0.75);
    const viewInfo = threeUtils.generateViewInfo(
      window.innerWidth,
      window.innerHeight
    );
    return {
      mouse: {},
      scene: scene,
      stacksNames: ["html", "css", "mongodb", "sass", "vue", "nodejs", "js"],
      camera: camera,
      renderer: renderer,
      light: light,
      ambientLight: ambientLight,
      stacks: [],
      raycaster: raycaster,
      viewInfo: viewInfo,
      speed: 0.02,
    };
  },
  created: function () {
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    this.scene.add(this.camera);
    this.camera.position.z = 5;
    this.scene.add(this.light);
    this.light.position.set(0, 0, 100);
    this.scene.add(this.ambientLight);

    this.stacks = threeUtils.generateStack(
      this.stacksNames,
      this.scene,
      this.viewInfo
    );

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  },
  mounted: function () {
    // append renderer to the canvas
    this.$refs.canvas.appendChild(this.renderer.domElement);
    window.addEventListener("resize", this.onWindowResize, false);
    this.animate();
  },
  methods: {
    animate: function () {
      // change speed based on how far down the user has scrolled
      const scrollParam =
        (document.body.getBoundingClientRect().top + window.innerHeight) /
        window.innerHeight;
      if (scrollParam > 0) this.speed = 0.02 * scrollParam;

      // scale objs on hover and unscale if unhovered
      threeUtils.growOnHover(
        this.raycaster,
        this.stacks,
        this.mouse,
        this.camera
      );

      // move the elements
      threeUtils.moveObjects(this.stacks, this.speed, this.viewInfo);

      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize: function () {
      // // this don't seem to work
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      // I decided to reload the page on resize instead so that the page keeps its resposiveness
      // location.reload();
    },
  },
  computed: {
    rotate: function () {
      if (this.speed === "") {
        return 0;
      } else {
        return this.speed;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.stack {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  z-index: 0;
}
</style>
