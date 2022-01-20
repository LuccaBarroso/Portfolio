<template>
  <div class="app">
    <TopNav />
    <Stack />
    <TopSection />
    <AboutMe />
    <div class="projects">
      <Project v-for="proj in projects" :key="proj.id" :proj="proj" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import TopNav from "./components/TopNav";
import TopSection from "./components/TopSection";
import AboutMe from "./components/AboutMe";
import Stack from "./components/Stack";
import Project from "./components/Project";
import projectsFile from "../public/data/projects.json";

export default {
  name: "App",

  components: {
    // HelloWorld,
    TopNav,
    TopSection,
    AboutMe,
    Stack,
    Project,
  },

  data: () => {
    const projects = projectsFile;
    return {
      projects: projects,
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
.projects:first-child {
  margin-top: -10vw;
  background-color: red;
}
.app {
  width: 100%;
}
* {
  font-family: Roboto;
  margin: 0;
}
</style>
