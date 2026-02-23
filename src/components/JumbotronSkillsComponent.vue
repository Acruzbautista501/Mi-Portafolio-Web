<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { db } from '../data/skills';
import type { Skill } from '../interfaces/Skills';

const skills = ref<Skill[]>([])

onMounted(() => {
  skills.value = db
})
</script>

<template>
  <CContainer class="mt-3 mt-md-5 mb-3 mb-md-4 pb-lg-5">
    <div class="pt-3 pb-5">
      <h2 class="display-4 text-center">
        <span class="fw-bold">Tecnologías</span> que utilizo
      </h2>
    </div>
    <CRow class="g-3 g-lg-5 d-flex justify-content-center pt-3 pb-5">
      <CCol 
        xs="12" 
        md="6" 
        lg="4"
        xl="3" 
        v-for="skill in skills"
        :key="skill.id"
        class="d-flex justify-content-center"
      >
      <div class="skill-card">
        <font-awesome-icon :icon="skill.icon" class="skill-card-icon" />
        <span class="fs-4 skill-card-text pt-4">{{ skill.skill }}</span>
      </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<style scoped>
.skill-card{
  width: 250px;
  height: 250px;
  border: 2px solid #000;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
}

.skill-card-icon{
  font-size: 120px;
  color: #000;
  transition: all 0.3s ease; /* importante para animación suave */
}

.skill-card-text{
  transition: all 0.3s ease;
}

/* UN SOLO HOVER */
.skill-card:hover{
  border-color: #fff;
  background: #000;
}

/* El hijo responde al hover del padre */
.skill-card:hover .skill-card-icon,
.skill-card:hover .skill-card-text {
  color: #fff;
}

</style>