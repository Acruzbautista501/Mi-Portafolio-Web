<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const form = ref({
  from_name: '',
  reply_to: '',
  subject: '',
  message: ''
})

const loading = ref(false)

const sendEmail = async () => {
  if (loading.value) return

  loading.value = true

  try {
    await emailjs.send(
      'service_llvrc87',
      'template_gva83dy',
      form.value,
      'TriiPr4PoUj5brjcS'
    )

    await Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado',
      text: 'Gracias por contactarme. Te responderé pronto.',
      confirmButtonColor: '#000',
      confirmButtonText: 'Aceptar'
    })

    // Limpiar formulario
    form.value = {
      from_name: '',
      reply_to: '',
      subject: '',
      message: ''
    }

  } catch (err) {
    console.error(err)

    Swal.fire({
      icon: 'error',
      title: 'Error al enviar',
      text: 'Ocurrió un problema. Intenta nuevamente.',
      confirmButtonColor: '#000',
      confirmButtonText: 'Cerrar'
    })
  }

  loading.value = false
}
</script>

<template>
	<section class="py-5" id="contact">
		<CContainer>
			<CRow class="g-3 g-lg-5">
				<CCol xs="12" lg="6">
					<CForm class="row g-3" @submit.prevent="sendEmail">
						<CCol xs="12">
							<CFormLabel for="inputPassword4">Nombre</CFormLabel>
							<CFormInput
								id="inputPassword4"
								class="p-3"
								v-model="form.from_name"
								required
							/>
						</CCol>						
						<CCol xs="12">
							<CFormLabel for="inputEmail4">Correo Electrónico</CFormLabel>
							<CFormInput
								type="email"
								id="inputEmail4"
								class="p-3"
								v-model="form.reply_to"
								required
							/>
						</CCol>
						<CCol xs="12">
							<CFormLabel for="inputAddress">Asunto</CFormLabel>
							<CFormInput
								id="inputAddress"
								class="p-3"
								v-model="form.subject"
								required
							/>
						</CCol>
						<CCol xs="12">
							<CFormLabel for="inputAddress2">Mensaje</CFormLabel>
							<CFormTextarea
								id="inputAddress2"
								rows="5"
								placeholder="Escribe aquí tu mensaje"
								v-model="form.message"
								required
							/>
						</CCol>
						<CCol xs="12">
							<CButton
								size="lg"
								color="dark"
								type="submit"
								class="rounded-2"
								:disabled="loading"
							>
								{{ loading ? 'Enviando...' : 'Enviar Mensaje' }}
							</CButton>
						</CCol>
					</CForm>
				</CCol>
				<CCol xs="12" lg="6">
					<div class="py-0 py-md-1">
          <h3 class="display-4 pt-md-5 pb-md-3 fw-bold">
            Hablemos de algo
            <span class="text-outline"> especial</span> 
          </h3>
          <p class="fs-6 text-muted">
            Busco llevar los límites de la creatividad más allá para crear experiencias interactivas atractivas, fáciles de usar y memorables.
          </p>
					<div class="pt-3">
						<p class="fs-4 text-muted m-0">
							<a href="mailto:aldair.cruzbautista@outlook.com" class="text-decoration-none text-black">
								aldair.cruzbautista@outlook.com
							</a>
						</p>
						<p class="fs-4 text-muted m-0">
							<a href="tel:+527681080365" class="text-decoration-none text-black">
								(+52) 768 1080365
							</a>
						</p>
          <div class="d-flex pt-4">
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
					</div>
					</div>	
				</CCol>	
			</CRow>			
		</CContainer>
	</section>
</template>

<style>
.form-control {
  border: 2px solid #000 !important;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

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
  width: 60px;
  height: 60px;
  border: 2px solid #000;
  background: #fff;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
}

.icon-social-svg {
  font-size: 25px;
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