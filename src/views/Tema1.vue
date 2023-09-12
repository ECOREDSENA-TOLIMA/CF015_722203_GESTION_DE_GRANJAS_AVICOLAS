<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Proceso de acopio de huevo
      
    p.mb-5(data-aos="flip-down") El proceso de acopio de huevos se relaciona con el almacenamiento y procesos que permiten inspeccionar y verificar las diferentes labores diarias que suceden en una granja avícola desde la recolección, clasificación, hasta su comercialización final.
    
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Acopiar es sinónimo de almacenamiento, hace referencia a juntar los huevos en un almacén o centro de acopio, para ser comercializados. El acopio de huevos pasa por procesos de #[b recepción, clasificación, embalaje y rotulado] teniendo en cuenta parámetros de calidad con el fin de garantizar un proceso de comercialización adecuado.

    p.mb-5(data-aos="flip-down") En este recurso de aprendizaje se presenta el proceso de acopio de huevo, que se desarrolla en los siguientes pasos: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 d-flex align-items-stretch" data-aos="flip-down")
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/uno.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Verificar labores de alistamiento de instalaciones, equipos, elementos e insumos para la recolección de huevos en la granja avícola.

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/dos.svg' alt='')
            .tarjeta.color-primario.p-4
              p.text-center Inspeccionar los sitios de postura en el galpón.

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/tres.svg' alt='')
            .tarjeta.color-acento-contenido.p-4
              p.text-center.texto-negro Recolección de huevo en galpón siguiendo los parámetros técnicos. 
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/cuatro.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Clasificación de huevos por peso, de acuerdo con la NTC 1240 en: Jumbo, AAA, AA, B y C.
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/cinco.svg' alt='')
            .tarjeta.color-primario.p-4
              p.text-center Acomodación del huevo de gallina teniendo en cuenta la posición del huevo en la bandeja, con el lado chato hacia arriba. 
      
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/seis.svg' alt='')
            .tarjeta.color-acento-contenido.p-4
              p.text-center.texto-negro Apilar o colocar una bandeja de huevo sobre otra, hasta formar una pila o montón sin dañar el producto.
      
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema1/siete.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Recolectar y disponer los residuos que se pueden generar en el proceso de acopio del huevo.

    p.mb-4(data-aos="flip-down") De acuerdo con la Resolución 3651 (2014), se deben incluir también los siguientes pasos: 

    ol.lista-ol.mb-4(data-aos="fade-right")
      li 
        span.text-bold 1.
        | Almacenar los huevos en un sitio fresco, seco y protegidos de la luz solar para evitar acortar su vida útil.
      li 
        span.text-bold 2.
        | El empaque y embalaje de huevos frescos de gallina.
      li 
        span.text-bold 3.
        | Rotulado del huevo para consumo humano y comercialización.

    p.mb-5(data-aos="fade-left") Los aspectos administrativos, contables, logísticos, control de inventarios y manejo de registros también se deben tener presentes en el centro de acopio de huevo con el fin de ofrecer un producto de calidad y buen servicio, para esto se implementan procedimientos como:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-5.col-12(data-aos="fade-right")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Proceso de inventario de huevos") Realizar un proceso de inventario de huevo, según los procedimientos establecidos para llevar un control.
          
          p.text-small(numero="2" titulo="Distribución") Distribuir en la bodega los lotes de huevos acopiados.
          
          p.text-small(numero="3" titulo="Ingreso de bandejas") Implementar el uso de listas de chequeo en el proceso de ingreso de las bandejas o cubetas de huevo en la bodega de almacenamiento, o centro de acopio. 
          
          p.text-small(numero="4" titulo="Documentación") Documentar el proceso de acopio de huevo de mesa, haciendo el uso de registros para su control.

          p.text-small(numero="5" titulo="Novedades del proceso") Inspección y verificación de novedades en el proceso de acopio de huevo y, presentar propuestas de mejora.

          p.text-small(numero="6" titulo="Planes de contingencia") Establecer planes de contingencia en el proceso de acopio del huevo.

      .col-md-6.col-lg-6.col-12.px-md-5(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/tema1-2.svg' alt='')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
