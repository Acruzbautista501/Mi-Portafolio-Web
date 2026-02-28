<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
  <CHeader class="border-bottom border-dark mb-4 p-0">
    <CNavbar expand="lg" color-scheme="light" class="w-100">
      <CContainer class="px-4">
        <CNavbarBrand href="/" class="d-flex align-items-center">
          <div class="border p-2 bg-dark me-2">
            <font-awesome-icon icon="terminal" size="lg" class="text-white"/>
          </div>
          <span class="fw-semibold fs-4 text-dark">Aldair</span>
        </CNavbarBrand>

        <CNavbarToggler @click="visible = !visible" />

        <CCollapse class="navbar-collapse text-center" :visible="visible">
          <CNavbarNav class="mx-auto mb-2 mb-lg-0">
            <CNavItem>
              <CNavLink href="#tech">Tecnologías</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#exp">Experiencia</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#about-Me">Acerca de Mi</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#projects">Proyectos</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#contact">Contacto</CNavLink>
            </CNavItem>
          </CNavbarNav>

          <div class="d-grid d-lg-block">
            <CButton
              color="dark"
              component="a"
              href="/files/Aldair_Cruz_Bautista_CV.pdf"
              download="Aldair_Cruz_Bautista_CV.pdf"
              class="text-nowrap"
            >
              <font-awesome-icon icon="file-invoice" class="me-2 text-white"/>
              Descargar CV
            </CButton>
          </div>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </CHeader>
</template>

<style scoped>
/* Ajuste para que el nav no se pegue a los bordes en móviles */
.navbar-collapse {
  padding: 1rem 0;
}

@media (min-width: 992px) {
  .navbar-collapse {
    padding: 0;
  }
}
</style>