<script setup lang="ts">
import ContactComponent from './components/ContactComponent.vue';
import ExperienceComponent from './components/ExperienceComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronAboutMeComponent from './components/JumbotronAboutMeComponent.vue';
import JumbotronMainComponent from './components/JumbotronMainComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';


</script>

<template>
  <HeaderComponent />
  <JumbotronMainComponent />
  <SkillsComponent />
  <ExperienceComponent />
  <JumbotronAboutMeComponent />
  <main>
    <ProjectsComponent />
  </main>
  <ContactComponent />
  <FooterComponent />
</template>

<style scoped>

</style>
