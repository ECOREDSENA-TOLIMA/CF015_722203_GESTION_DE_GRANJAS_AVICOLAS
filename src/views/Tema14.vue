<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Medidas de superficie, longitud, peso y volumen

    p.mb-5(data-aos="flip-down") La aplicación de medidas como superficie, longitud peso y volumen son condiciones necesarias en el proceso de recolección clasificación y acopio del huevo aplicando los procedimientos de verificación e inspección de estos teniendo en cuenta la normatividad vigente, en el siguiente recurso de aprendizaje se describen cada una:


    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Las medidas de superficie")
        .col-12.mb-4.mb-md-0
          p Se utilizan para medir el tamaño o área de objetos que tienen dos dimensiones. La unidad básica es el metro cuadrado, pero en objetos y productos pequeños se habla de centímetros y milímetros cuadrados.  
      .row(titulo="Las medidas de longitud")
        .col-12.mb-4.mb-md-0
          p Miden la distancia entre dos puntos, son utilizadas para medir el tamaño del huevo y clasificarlos. 
          p Los huevos de gallina miden por término medio 4.2 cm de ancho y 5.7 cm de longitud por lo que le corresponde un índice morfológico de 74.

      .row(titulo="Las medidas de peso o masa")
        .col-12.mb-4.mb-md-0
          p Es una magnitud física que mide la cantidad de materia contenida en un cuerpo.
          p En el Sistema Internacional de Unidades la unidad oficial de masa es el kilogramo y en el caso de los huevos se mide en gramos y miligramos.
      .row(titulo="Las medidas de volumen")
        .col-12.mb-4.mb-md-0
          p Son magnitudes dadas en tres dimensiones de una región del espacio.  La unidad de medida de volumen en el Sistema Internacional de Unidades, es el metro cúbico. 
      .row(titulo="Aplicación")
        .col-12.mb-4.mb-md-0
          p Las medidas de superficie, longitud, volumen y peso se utilizan en el acopio de huevo para medir su diámetro, su peso, y mediadas de sus partes como yema o albumen. 
          p El tamaño del huevo está relacionado con el peso de las gallinas y el desarrollo corporal de esta entre la semana 21 y 25 por acción de la foto estimulación, esto trae como consecuencia huevos de un peso mayor a 69 gramos, con una postura deficiente que afecta la producción de huevo de un lote de gallinas.
      .row(titulo="Registros")
        .col-12.mb-4.mb-md-0
          p Cuando se realiza la recolección de huevo, es importante pesar los huevos y llevar registros diarios para detectar desviaciones en la producción y así poder implementar acciones de mejora. 
          p El pesaje del huevo puede hacerse de forma automática, y los equipos como basculas, deben calibrarse. 
      .row(titulo="Control")
        .col-12.mb-4.mb-md-0
          p Las medidas de peso utilizadas para pesar los huevos ayudan a controlar y verificar la producción de éste, que va haciendo aumentos de un gramo cada 2 o 3 semanas teniendo en cuenta un manejo adecuado de los programas de alimentación y el control del fotoperiodo; controlar el peso favorece la calidad del huevo.  

    p.mb-5.mt-5(data-aos="flip-down") Según Cobb-vantress (2018), las causas que inciden en el peso del huevo insuficiente o excesivo se describen en la siguiente tabla:


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 10.] #[i Causas que inciden en el peso del huevo] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado de Cobb-vantress (2018).
            thead
              tr.cabecera-a.text-center
                th(colspan="2") Causas de:
            tbody
              tr
                td Huevos de peso insuficiente
                td Alta producción
              tr
                td Alimentación insuficiente
                td Huevos de peso excesivo
              tr
                td Alimentos bajos en energía o proteínas
                td Alimentación excesiva
              tr
                td Agua insuficiente
                td Alimentos ricos en energía o proteínas
              tr
                td Enfermedades
                td Hembras con sobrepeso
              tr
                td Temperaturas extremas de la caseta
                td Baja producción
              tr
                td Hembras con bajo peso
                td 

    p.mb-5(data-aos="flip-down") Las medidas como superficie, longitud peso y volumen tienen aplicabilidad en la producción avícola permiten tomar datos para la controlar y evaluar los índices productivos y hacer análisis pertinentes y proponer acciones o planes de mejora con base en los resultados que inciden en la rentabilidad del producto.


</template>

<script>
export default {
  name: 'Tema14',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
