<script setup lang="ts">
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="bg-black text-white">
    <footer class="container d-flex flex-wrap justify-content-between align-items-center py-4">
      <CCol xs="12" md="4">
        <a
          href="/"
          class="d-inline-flex align-items-center text-decoration-none text-white"
        >
          <div class="border p-2 bg-white me-1">
            <font-awesome-icon icon="terminal" size="lg" class="text-black"/>
          </div>
          
          <span class="fw-semibold fs-4">Aldair</span>
        </a>        
      </CCol>
      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex mt-1">
        <li class="ms-3">
          <p class="m-0">&copy; {{ year }} Aldair Cruz Bautista</p>
        </li>

        <li class="ms-3 m-0 p-0">
          <p class="m-0">
            Todos los derechos reservados
          </p>
        </li>
      </ul>      
    </footer>
  </div>
</template>

<style scoped>

</style>