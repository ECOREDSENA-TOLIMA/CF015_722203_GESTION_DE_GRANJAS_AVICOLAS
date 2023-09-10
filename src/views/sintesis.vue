<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La inspección y acciones correctivas que deben estar presentes en el proceso de acopio de huevos de gallina tiene como principal objetivo el de proporcionar herramientas técnicas, así como los pasos de aplicación necesarios, para lograr un producto de calidad, mejorando y vigilando las condiciones sanitarias, ambientales y de producción de la población avícola y la inocuidad dentro del enfoque de cadena agroalimentaria. 
    
    p.mb-5 En el siguiente mapa conceptual, podrá consultar la ruta de contenidos vistos en este componente de formación:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente inspección y acciones correctivas del proceso de acopio de los huevos de gallina encontramos proceso relacionados con el acopio, almacenamiento e inventario en las granjas avícolas.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
