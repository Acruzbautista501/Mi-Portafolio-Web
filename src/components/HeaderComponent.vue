<script setup lang="ts">

</script>

<template>
  <CHeader class="border-bottom border-dark mb-4">
    <CContainer class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-3">
      <div class="col-lg-3 mb-2 mb-lg-0">
        <a
          href="/"
          class="d-inline-flex align-items-center text-decoration-none text-body"
        >
          <div class="border p-2 bg-dark me-1">
            <font-awesome-icon icon="terminal" size="lg" class="text-white"/>
          </div>
          
          <span class="fw-semibold fs-4">Aldair</span>
        </a>
      </div>

      <CHeaderNav class="col-12 col-lg-auto mb-2 justify-content-center mb-lg-0">
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
      </CHeaderNav>
      <div class="col-lg-3 text-end">
        <CButton
          color="dark"
          component="a"
          href="/files/Aldair_Cruz_Bautista_CV.pdf"
          download="Aldair_Cruz_Bautista_CV.pdf"
        >
          <font-awesome-icon icon="file-invoice" class="text-white"/>
          Descargar CV
        </CButton>
      </div>
    </CContainer>
  </CHeader>
</template>

<style scoped>

</style>