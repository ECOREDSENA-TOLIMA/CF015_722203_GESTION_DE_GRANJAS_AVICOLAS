<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Empaque, embalaje y rotulado de huevo

    p.mb-4(data-aos="flip-down") El empaque, embalaje y rotulado de los huevos de gallina en una granja avícola debe tener en cuenta parámetros y condiciones técnicas específicas, teniendo en cuenta la implementación de la normatividad vigente y los procedimientos de verificación de los huevos en un centro de acopio avícola. 

    .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema10/tema10-1.png')})`}" 
      ) 
      .bloque-texto-g__texto.p-4
        p.mb-0 El empaque es definido por Ospina (2015), como un “recipiente flexible que toma la forma del producto contenido.” y el embalaje lo define como el “conjunto de materiales, accesorios y demás elementos (envase, empaque, envoltura), especialmente acondicionados para el transporte, almacenamiento y distribución de los productos, asegurando que lleguen en perfecto estado al consumidor” (p.9). Los huevos son empacados en bandejas de cartón de color uniforme, elaboradas y moldeadas con material reciclable, los cuales no deben tener manchas, y estar libres de daños en su estructura; las bandejas PET son bandejas de plástico transparente también elaboradas y moldeadas con plásticos reciclados y que no presentan manchas o perforaciones que afecten su calidad.

    p.mb-4(data-aos="flip-down") El empaque del huevo puede hacerse de forma manual o automática, en la siguiente figura se presenta el ejemplo de una empacadora automática y una banda transportadora.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 4.] #[i Empaque de huevo automático] 
        figure
          img(src='@/assets/curso/temas/tema10/tema10-f4.png', alt='En la figura 4 se muestra un empaque de huevo automático.')  
          figcaption Nota. Adaptada de Cobb-vantress (2018).

    p.mb-4(data-aos="flip-down") Los procedimientos de empaque y embalaje de huevos de gallina que se deben inspeccionar y verificar según la Resolución 3651 de 2014, puede ser manual o mecánica, y debe cumplir con los siguientes requisitos técnicos:


    ul.lista-ul.mb-4.ms-3(data-aos="fade-right")
      li 
        span.text-bold • 
        | Usar envases y embalajes nuevos.
      li 
        span.text-bold • 
        | Mantener los embalajes y envases en un lugar seco y cubierto, en forma ordenada, separado de paredes, pisos y techo.
      li 
        span.text-bold • 
        | Utilizar los envases y embalajes conforme a los requisitos para materiales en contacto con alimento, establecidos por el Ministerio de Salud y de la Protección Social o quien haga sus veces.
      li 
        span.text-bold • 
        | Envasar y embalar el producto debidamente identificado listo para su comercialización. 

    p.mb-4(data-aos="flip-down") Es importante el uso de empaque y embalajes nuevos y de un solo uso, se deben tener almacenados de manera ordenada y en lugares frescos y secos para evitar su deterioro, además de estar identificados adecuadamente para llevar a cabo una comercialización de calidad, con los siguientes requisitos de rotulado: nombre del alimento, número de unidades, nombre y dirección del establecimiento en donde se realiza la clasificación, fecha de vencimiento y los huevos no deben haber sido incubados y su cascarón debe estar entero.



</template>

<script>
export default {
  name: 'Tema10',
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
