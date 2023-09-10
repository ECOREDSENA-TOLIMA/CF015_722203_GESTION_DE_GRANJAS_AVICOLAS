<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Clasificación de huevos

    p.mb-5(data-aos="flip-down") Es la organización y el ordenamiento de los huevos teniendo en cuenta parámetros técnicos y procedimientos de verificación en la clasificación, para esto es importante tener en cuenta el peso de los huevos a la hora de seleccionarlos.

    .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/tema5-1.png')})`}"
      ) 
      .bloque-texto-g__texto.p-5
        p.mb-0 La clasificación de los huevos de gallina se realiza teniendo en cuenta la #[b NTC 1240], que entrega elementos para categorizarlos según el peso y con fines comerciales, no todos los huevos son iguales, por lo tanto, los aspectos de peso, nutrición y calidad tendrán una relación directa con el precio al consumidor. En algunas granjas avícolas se utilizan equipos para clasificación de huevos.

    p.mb-4(data-aos="flip-down") En el proceso de clasificación de huevo, se debe tener en cuenta su peso, que según los parámetros establecidos en la (Norma Técnica Colombiana NTC 1240, 2011) para huevos de gallina frescos son los siguientes, ver tabla 1: 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-11(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Peso de los huevos] 
      .col-12.col-lg-11(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado de Norma Técnica Colombiana NTC 1240 (2011).
            thead
              tr.cabecera-a.text-center
                th Categorías 
                th Rango de peso en gramos
            tbody
              tr.text-center
                th Jumbo 
                th >78,0 g
              tr.text-center
                th AAA 
                th 67,0 - 77,9 g
              tr.text-center
                th AA 
                th 60,0 - 66,9 g
              tr.text-center
                th A 
                th 53,0 - 59,9 g
              tr.text-center
                th B 
                th 46,0 - 52,9 g
              tr.text-center
                th C 
                th <46,0 g

    p.mb-4(data-aos="flip-down") Al clasificar los huevos, se procede a acomodarlos en bandejas que vienen codificadas según el peso del huevo como se muestra en la siguiente figura, estos parámetros se pueden verificar en fichas técnicas de productos de empresas productoras de huevo en el apartado clasificación, ver figura 2.

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Tamaño de huevo por peso] 
        figure 
          img(src='@/assets/curso/temas/tema5/tema5-f2.svg', alt='En la figura 2 se muestra el tamaño de huevo por peso según su clasificación.')  
          figcaption.mt-2 Nota. Adaptado de Edopulpack (2021). 



</template>

<script>
export default {
  name: 'Tema5',
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
