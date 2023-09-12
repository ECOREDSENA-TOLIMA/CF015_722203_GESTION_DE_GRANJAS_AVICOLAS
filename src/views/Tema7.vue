<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Apilamiento del huevo

    p.mb-5(data-aos="flip-down") La colocación a apilamiento de cubetas o bandejas de huevos es un requisito fundamental en los procesos de almacenaje, y en estos se debe tener en cuenta los procedimientos técnicos de calidad y transporte, distribución y comercialización.

    .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/tema7-1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[b Pila de huevos]
        br 
        br 
        | Apilar es colocar una bandeja de huevo sobre otra, sin dañarlos, formando una pila o montón.

    p.mb-5(data-aos="flip-down") Es importante tener en cuenta en el desarrollo de las labores de apilamiento de huevos los parámetros de calidad de las bandejas de huevos descritas en su ficha técnica. 

    .tarjeta-c.color-primario.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema7/tema7-2.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small Para ampliar información, revisar los aspectos de calidad indicados en la ficha técnica del producto, que se relaciona a continuación:
              p.text-small Prestar especial atención a la información que se entrega de la bandeja porta huevos y todos sus elementos, donde se mencionan cantidad, unidad de medida, calidad, generalidades, requisitos generales y específicos, empaque y rotulado, presentación y garantías.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://contratacion.sena.edu.co/_file/solicitudes/27388_2.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    p.mb-5(data-aos="flip-down") Las bandejas de huevos son apiladas en columnas de seis y transportadas en cajas de incubación, y carros, al completar las bandejas, se deben apilar en grupos que no superen las 8 bandejas por pila, esto de acuerdo con el tipo y tamaño de huevo. Se debe tener la precaución de apilar las bandejas sobre una base de varias bandejas vacías o por una lámina de madera para facilitar el movimiento de las pilas y evitar accidentes y rupturas.




</template>

<script>
export default {
  name: 'Tema7',
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
