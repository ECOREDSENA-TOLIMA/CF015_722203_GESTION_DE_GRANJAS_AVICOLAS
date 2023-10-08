<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Almacenamiento de huevo

    p.mb-4(data-aos="flip-down") El almacenamiento de los huevos en bodegas, almacenes, centros de distribución o de acopio debe cumplir con parámetros técnicos establecidos para evitar el deterioro y disminución de la vida útil de los huevos, por lo que es importante la aplicación e implementación de los procedimientos para el almacenamiento adecuado de los huevos de gallina.

    .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema9/tema9-1.png')})`}"
      ) 
      .bloque-texto-g__texto.p-5 
        p.mb-0 Almacenar es guardar cosas en una bodega, estante o almacén de manera clasificada y ordenada para disponer de los productos cuando se necesiten, como en este caso almacenar los huevos en un sitio fresco, seco y protegidos de la luz solar para evitar acortar su vida útil teniendo en cuenta el peso según la normatividad vigente.

    p.mb-4(data-aos="flip-down") Las labores y procesos que se desarrollan durante el almacenamiento del huevo deben cumplir con condiciones de calidad para que el huevo sea apto para consumo humano; por tanto, se debe verificar el cumplimiento de la Resolución 3651 de 2014, donde se establecen los requisitos y disposiciones que deben cumplir las granjas avícolas con el fin de que sean bio-seguras, en el siguiente recurso de aprendizaje se presentan aspectos relevantes a considerar para el almacenamiento:


    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 d-flex align-items-stretch" data-aos="flip-down")
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-a.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              h4.text-center Bodega
              p.text-center En bodegas, se debe almacenar el producto en condiciones ambientales adecuadas, con orden, limpieza y desinfección.

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-b.svg' alt='')
            .tarjeta.color-primario.p-4
              h4.text-center.texto-negro Estantes o estibas
              p.text-center Es recomendable almacenarlos sobre estantes o estibas que se encuentren en buenas condiciones de limpieza, separado de las paredes, del piso y debidamente ordenados, así se evitan problemas de ventilación y contaminación del producto.

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-c.svg' alt='')
            .tarjeta.color-acento-contenido.p-4
              h4.text-center.texto-negro Lejos de químicos
              p.text-center.texto-negro Los huevos de gallina deben ser almacenados lejos de sustancias y productos químicos (como detergentes, desinfectantes o plaguicidas) que puedan generar olores, y generar afectación en el normal olor y sabor del producto. 
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-d.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              h4.text-center Rotación del producto
              p.text-center Se deben implementar procedimientos para rotación del producto, lo primero que entra es lo primero que sale.
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-e.svg' alt='')
            .tarjeta.color-primario.p-4
              h4.text-center.texto-negro Temperatura
              p.text-center El lugar donde se almacene debe ser fresco, sin someterse a cambios bruscos de temperatura ni exponerlos directamente a los rayos del sol o temperaturas altas.
      
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-f.svg' alt='')
            .tarjeta.color-acento-contenido.p-4
              h4.text-center.texto-negro Control de plagas
              p.text-center.texto-negro Se hace necesario tener en cuenta programas de control de roedores e insectos o plagas que puedan generar condiciones de deterioro del producto.
      
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-g.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              h4.text-center Mantenimientos
              p.text-center Se deben realizar mantenimientos periódicos de utensilios, e instalaciones utilizadas en el almacenamiento de huevo para evitar problemas de contaminación interna, y deterioro de los huevos.

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema9/tema9-h.svg' alt='')
            .tarjeta.color-primario.p-4
              h4.text-center.texto-negro Rotulación
              p.text-center Su envase primario, empaque o embalado, debe estar debidamente identificado o rotulado.


    p.mb-4(data-aos="flip-down") Se deben almacenar los huevos aplicando condiciones de bioseguridad para mantener su calidad, ya sea este de incubación o de mesa, y por tanto, facilitar su comercialización. Para ello, según la ficha técnica se recomienda acciones a seguir en cuanto a recepción y almacenamiento.


</template>

<script>
export default {
  name: 'Tema9',
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
