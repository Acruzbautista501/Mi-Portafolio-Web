<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { db } from '../data/experience';
import type { Experience } from '../interfaces/Portfolio';

const experiences = ref<Experience[]>([])

onMounted(() => {
  experiences.value = db
})
</script>

<template>
  <section class="py-5">
    <CContainer class="bg-black">
      <CRow class="pt-5 pb-5">
        <h2 class="display-4 text-center text-white">
          Mi <span class="fw-bold">Experiencia</span>
        </h2>
      </CRow>
      <CRow class="g-3 g-lg-5 d-flex justify-content-center pt-5 pb-5">
        <CCol
        v-for="experience in experiences"
        :key="experience.id"
        xs="12"
        class="w-90"
        >
          <CCard class="experience-card border-0">
            <CCardBody>
              <div class="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h5 class="mb-1 text-white fs-4">
                    {{ experience.role }} en 
                    <span class="company">{{ experience.company }}</span>
                  </h5>
                  <div class="location mb-2 mb-xl-0">
                    <font-awesome-icon icon="location-dot" class="fs-6"/>
                    {{ experience.location }}
                  </div>
                </div>
                <CBadge :color="experience.color || 'dark'" class="period-badge fs-6">
                  {{ experience.period }}
                </CBadge>
              </div>
              <p class="mt-3 description">
                {{ experience.description }}
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<style scoped>
.w-90{
  width: 90% !important;
}
.experience-card {
  background: #252525;
  transition: all 0.35s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}
.experience-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}
.company {
  color: #4dabf7;
}

.location {
  color: #7d7d7d;
  font-size: 0.85rem;
  margin-top: 4px;
  letter-spacing: 0.3px;
}

.description {
  color: #a8a8a8;
  line-height: 1.6;
}

.period-badge {
  font-size: 0.75rem;
  padding: 6px 10px;
  border-radius: 6px;
}

</style >