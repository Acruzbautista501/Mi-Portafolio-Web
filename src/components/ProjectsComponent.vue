<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { db } from '../data/project'
import type { Project } from '../interfaces/Portfolio'

/* Detectar ancho de pantalla */
const width = ref(window.innerWidth)

let timeout: number

const handleResize = () => {
  clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    width.value = window.innerWidth
  }, 150)
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

/* Breakpoints (alineados a Bootstrap/CoreUI) */
const itemsPerSlide = computed(() => {
  if (width.value < 576) return 1      
  if (width.value < 768) return 1      
  if (width.value < 992) return 2      
  return 3                             
})

/* Función chunk */
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

/* Slides reactivos según breakpoint */
const slides = computed(() =>
  chunkArray<Project>(db, itemsPerSlide.value)
)

const breakpointKey = computed(() => {
  if (width.value < 576) return 'xs'
  if (width.value < 768) return 'sm'
  if (width.value < 992) return 'md'
  return 'lg'
})
</script>

<template>
  <section class="py-5">
    <CContainer>
      <CRow class="pt-5 pb-5">
        <h2 class="display-4 text-center">
          Mis <span class="fw-bold">Proyectos</span>
        </h2>
      </CRow>
      <CCarousel controls indicators dark :interval="false" :key="breakpointKey">
        <CCarouselItem
          v-for="(group, index) in slides"
          :key="index"
        >
          <CRow class="justify-content-center">
            <CCol
              v-for="project in group"
              :key="project.id"
              xs="12"
              md="6"
              lg="4"
              class="mb-4"
            >
              <CCard class="h-100 shadow-sm project-card border border-2 border-black rounded-0">
                <CCardImage
                  :src="project.image"
                  class="project-img rounded-0 border-bottom border-black border-2"
                />

                <CCardBody>
                  <h5 class="fw-bold mb-2">
                    {{ project.title }}
                  </h5>

                  <p class=" text-body-secondary small">
                    {{ project.description }}
                  </p>

                  <div class="mt-3">
                    <CBadge
                      v-for="tech in project.technologies"
                      :key="tech"
                      color="dark"
                      class="me-2"
                    >
                      {{ tech }}
                    </CBadge>
                  </div>
                </CCardBody>
                <div class="d-flex justify-content-between align-content-between pt-4">
                  <p class="ms-3">asfasfadsf</p>
                  <p class="me-3">dvgsdfagfdsagsfd</p>
                </div>
              </CCard>
            </CCol>
          </CRow>
        </CCarouselItem>
      </CCarousel>
    </CContainer>
  </section>
</template>

<style scoped>
.project-card {
  border: none;
  transition: all 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0,0,0,.12);
}

.project-img {
  height: 200px;
  object-fit: cover;
}

:deep(.carousel) {
  transition: opacity .2s ease;
}

/* Flechas laterales */
:deep(.carousel-control-prev),
:deep(.carousel-control-next) {
  width: 48px;
  height: 48px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  opacity: 0.85;
  transition: all .25s ease;
}

:deep(.carousel-control-prev) { 
  left: -55px;
}

:deep(.carousel-control-next) { 
  right: -55px;
}


/* Hover bonito */
:deep(.carousel-control-prev:hover),
:deep(.carousel-control-next:hover) {
  opacity: 1;
  transform: translateY(-50%) scale(1.08);
}

/* Ícono interno */
:deep(.carousel-control-prev-icon),
:deep(.carousel-control-next-icon) {
  filter: invert(1); /* vuelve blanco el SVG */
  width: 1.4rem;
  height: 1.4rem;
}
</style >