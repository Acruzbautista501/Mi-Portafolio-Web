<script setup lang="ts">

</script>

<template>
  <section class="mt-5">
    <CContainer>
      <CRow class="g-2 pt-lg-5 pb-lg-5">
        <CCol xs="12" lg="8">
          <h1 class="display-4 pt-md-5 pb-md-4">
            Hola, soy <span class="fw-bold">Aldair Cruz,</span>
            <span class="text-outline"> Desarrollador</span> 
            <span class="fw-bold"> FrontEnd,</span>
            Maquetador <span class="fw-bold">Web</span>
          </h1>
          <p class="fs-4">
            Desarrollo interfaces web modernas, funcionales y responsivas utilizando tecnologías como HTML5, CSS3, JavaScript y TypeScript, junto con frameworks como Angular, Vue y React. Me enfoco en crear experiencias dinámicas, optimizadas y centradas en el usuario.
          </p>
          <div class="d-flex pt-5">
            <CButton 
              class="icon-social me-2" 
              href="https://www.facebook.com/aldair.cruzbautista" 
              target="_blank"
              v-c-tooltip="{content: 'Mi Facebook', placement: 'top'}"
            >
              <font-awesome-icon :icon="['fab', 'facebook']" size="lg" class="icon-social-svg"/>
            </CButton>
            <CButton 
              class="icon-social mx-2" 
              href="https://www.linkedin.com/in/aldair-cruz-bautista" 
              target="_blank"
              v-c-tooltip="{content: 'Mi LinkedIn', placement: 'top'}"
            >
              <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" class="icon-social-svg"/>
            </CButton>
            <CButton 
              class="icon-social mx-2" 
              href="https://github.com/Acruzbautista501" 
              target="_blank"
              v-c-tooltip="{content: 'Mi Github', placement: 'top'}"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="lg" class="icon-social-svg"/>
            </CButton>
            <CButton 
              class="icon-social mx-2" 
              href="http://api.whatsapp.com/send?phone=527681080365" 
              target="_blank"
              v-c-tooltip="{content: 'Mi WhatsApp', placement: 'top'}"
            >
              <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg" class="icon-social-svg"/>
            </CButton>
          </div>
        </CCol>
        <CCol xs="12" lg="4">
          <div class="pt-md-5 pb-md-5">
            <CImage src="/img/aldair-anime.jpeg" class="img-fluid"/>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<style scoped>
.text-outline {
  color: white;
  font-weight: bold;
  text-shadow:
    -2px -2px 0 black,
     2px -2px 0 black,
    -2px  2px 0 black,
     2px  2px 0 black,
    -2px  0px 0 black,
     2px  0px 0 black,
     0px -2px 0 black,
     0px  2px 0 black;
}
.icon-social {
  width: 70px;
  height: 70px;
  border: 2px solid #000;
  background: #fff;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
}

.icon-social-svg {
  font-size: 27px;
  color: #000;
  transition: all 0.3s ease; /* importante para animación suave */
}

/* UN SOLO HOVER */
.icon-social:hover {
  border-color: #fff;
  background: #000;
}

/* El hijo responde al hover del padre */
.icon-social:hover .icon-social-svg {
  color: #fff;
}
</style>