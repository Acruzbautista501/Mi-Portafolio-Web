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
  <section class="py-5 bg-body-tertiary" id="projects">
    <CContainer>
      <CRow class="pt-5 pb-5">
        <h2 class="display-4 text-center">
          Mis <span class="fw-bold">Proyectos</span>
        </h2>
      </CRow>
      <CCarousel controls indicators dark :key="breakpointKey" transition="crossfade">
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
              <CCard class="project-card h-100">

                <!-- Imagen -->
                <CCardImage
                  :src="project.image"
                  class="project-img"
                />

                <!-- Contenido -->
                <CCardBody class="project-body">
                  <h5 class="project-title">
                    {{ project.title }}
                  </h5>

                  <p class="project-description">
                    {{ project.description }}
                  </p>

                  <!-- Tags -->
                  <div class="project-tags">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="project-tag"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </CCardBody>
                <div class="d-flex justify-content-between align-content-between pt-4">
                  <p class="ms-3 text-info">
                    <font-awesome-icon icon="link" class="fs-6" />
                    <a :href="project.link" target="_blank" class="text-decoration-none text-info">
                      Visitar Sitio
                    </a>
                  </p>
                  <p class="me-3 text-secondary">
                    <font-awesome-icon :icon="['fab', 'github']" class="fs-6" />
                    <a :href="project.github" target="_blank" class="text-decoration-none text-secondary">
                      Ver Código
                    </a>
                  </p>
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
/* CARD GENERAL */
.project-card {
  background: #f4f4f4 !important;
  border: 2px solid #1a1a1a;
  border-radius: 0;
  overflow: hidden;
  transition: transform .25s ease;
}

/* Hover sutil (como portafolio real) */
.project-card:hover {
  transform: translateY(6px);
}


/* IMAGEN */
.project-img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 0;
  border-bottom: 2px solid #1a1a1a;
  border-left: 0px !important;
}


/* BODY */
.project-body {
  padding: 1.6rem;
}


/* TITULO */
.project-title {
  font-weight: 700;
  font-size: 1.15rem;
  margin-bottom: .6rem;
  color: #111;
}


/* DESCRIPCIÓN */
.project-description {
  font-size: .9rem;
  color: #6b6b6b;
  line-height: 1.55;
  margin-bottom: 1.4rem;
}


/* TAGS */
.project-tags {
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
}


/* TAG INDIVIDUAL */
.project-tag {
  background: #111;
  color: #fff;
  font-size: .65rem;
  padding: .35rem .55rem;
  letter-spacing: .04em;
  text-transform: uppercase;
  border: 1px solid #111;
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