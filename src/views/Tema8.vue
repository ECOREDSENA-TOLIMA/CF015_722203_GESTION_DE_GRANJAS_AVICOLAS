<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Recolección y disposición de los residuos


    p.mb-4(data-aos="flip-down") La recolección y disposición de residuos sólidos o líquidos generados en los procesos de recolección, apilamiento y otras actividades relacionadas con el manejo de huevos en una granja avícola, bodega o centro de acopio debe tener en cuenta los procedimientos de verificación e inspección de estos además de acatar las directrices sanitarias y ambientales siguiendo los parámetros técnicos y normatividad de estas actividades.

    p.mb-4(data-aos="flip-down") Según Fenavi (2019b) el residuo es cualquier objeto, material, sustancia o elemento sólido, líquido o gaseoso generado en actividades de producción que se abandona, bota o rechaza, y que es susceptible o no de aprovechamiento o transformación en un bien con valor económico. Un residuo sólido es cualquier material, sustancia o elemento sólido de desecho que se produce tras la fabricación, transformación o utilización de algún bien de consumo en actividades domésticas, industriales, comerciales, institucionales o de servicios, que el generador abandona, rechaza o entrega y que es susceptible de aprovechamiento o transformación en un nuevo bien con valor económico o de disposición final.  En el proceso de acopio del huevo se pueden generar residuos de diferentes tipos como lo son bandejas contaminadas, huevos rotos, residuos de cama. 

    p.mb-5(data-aos="flip-down") Los procedimientos de verificación de los residuos que surgen del proceso de acopio de huevo de gallina, los residuos generados dispondrán de sistemas sanitarios adecuados para la recolección, el tratamiento y la disposición de aguas residuales; la disposición final de los residuos debe ser en lugares aprobados por la autoridad sanitaria ambiental, o darles un manejo interno, que no represente ningún tipo de riesgo ni tampoco afecte la comunidad y el ambiente y el manejo de emisiones atmosféricas no deben representar riesgo de contaminación para el producto aviar y las instalaciones y deben cumplir con lo establecido en la legislación sanitaria y ambiental vigente.


</template>

<script>
export default {
  name: 'Tema8',
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
