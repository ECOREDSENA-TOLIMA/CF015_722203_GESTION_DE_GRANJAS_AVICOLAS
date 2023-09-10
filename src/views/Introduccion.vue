<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .row.mb-4(data-aos="fade-down")
      .col-12
        p Se invita a revisar el siguiente video para que se comprendan algunas indicaciones iniciales relacionadas con el aprendizaje de los elementos necesarios a tener en cuenta en relación con la inspección del proceso de acopio de huevos y la presentación de propuestas de acciones de mejora cuando se evidencian fallas en dichas actividades:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-LAm7-b5YaI" title="Inspección y acciones correctivas del proceso de acopio de los huevos de gallina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Inspección y acciones correctivas del proceso de acopio de los huevos de gallina

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
