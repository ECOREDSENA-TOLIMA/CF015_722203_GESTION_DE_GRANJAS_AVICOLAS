<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Recolección de huevo en galpón

    p.mb-5(data-aos="flip-down") El proceso de recolección  de huevos en el galpón consiste en retirar los huevos de los nidos siguiendo procedimientos de verificación, teniendo en cuenta los parámetros técnicos y la normativa vigente al momento de llevar a cabo la recolección para su posterior distribución y comercialización.

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La recolección de huevos es el proceso de recoger los huevos en los sitios de postura en cada uno de sus nidos, para así conducirlos hasta la bodega de clasificación, en la recolección de los huevos se utilizan bandejas plásticas o en su defecto, bandejas de cartón reciclado. Este proceso lo desarrolla el galponero con supervisión del veterinario de la granja avícola con bastante cuidado.

    p.mb-4(data-aos="flip-down") Existen dos métodos para recolectar los huevos de las gallinas: 

    ul.lista-ul.mb-4(data-aos="fade-right")
      li 
        span.text-bold • 
        | #[b Recolección automática:] se realiza mediante un sistema de movimiento mecánico que utilizan una bandeja automática para recoger el huevo que ha rodado al frente de la jaula, y lo movilizan hasta un punto de acopio para su identificación, clasificación y empaque. Se debe revisar constantemente su buen funcionamiento y realizar mantenimiento periódico.
      li 
        span.text-bold • 
        | #[b Recolección manual:] es el sistema donde los operarios de la granja hacen la recolección del huevo de la rejilla (en el sistema de jaula) o de los cubículos de postura (en los sistemas de piso, también llamados nidales).

    p.mb-5(data-aos="flip-down") La siguiente figura 1 muestra imágenes de sistemas de recolección automática de huevos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Recolección de huevo] 
        figure
          img(src='@/assets/curso/temas/tema4/tema4-f1.png', alt='En la figura 1 se muestran diferentes sistemas de recolección automática  de huevo.')  

    p.mb-5(data-aos="flip-down") A continuación, se entregan recomendaciones al momento de realizar la recolección de huevos de forma manual:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En relación a la postura
            p La mayor postura de huevos se produce entre las cuatro y las nueve de la mañana, por esto, se recomienda que la recolección se inicie después de terminar la distribución de la comida, posterior a las 8 a.m., para no incomodar a las gallinas en los nidos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-2.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En relación a la ovulación
            p La ovulación puede iniciarse de 15 a 30 minutos después de que haya sido puesto el huevo anterior, por tanto, se recomienda desarrollar labores de recolección de huevos cada dos horas, para evitar la acumulación y ruptura de estos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-3.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En relación a la recolección
            p La periodicidad de recolección del huevo es recomendable hacerla tres veces al día, pero si hay exceso de calor o frío se debe aumentar la frecuencia de recolección para evitar el daño al embrión en el caso de huevo fértil. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-4.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En relación a la ubicación
            p Se recomienda iniciar el proceso de recolección de huevos, con los huevos que están fuera del nido y luego recoger de los nidales en el caso que la producción sea en piso.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-5.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En relación a la disposición
            p Cuando se realiza la recolección de huevos se debe garantizar que la parte ancha del huevo quede hacia arriba, porque allí se encuentra la cámara de aire y evita la ruptura del huevo por su consistencia.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-6.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 En relación al personal
            p La recolección en las granjas avícolas bio-seguras deben hacerlas operarios adultos respetando los tiempos, el confort del animal y garantizando los parámetros de calidad del huevo, porque ayudan a la producción y mejoran la rentabilidad.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-7.png', alt='')

    p.mb-5(data-aos="flip-down") En cuanto a los cuidados que debe tener el operario al llevar a cabo la recolección de huevos, se tienen los siguientes:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 d-flex align-items-stretch" data-aos="flip-down")
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-8.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Colocar el huevo roto y sucio en bandejas diferentes a los huevos limpios. 

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-9.svg' alt='')
            .tarjeta.color-primario.p-4
              p.text-center Desinfectar bandejas y verificar que estén en buenas condiciones para su uso. 

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-10.svg' alt='')
            .tarjeta.color-acento-contenido.p-4
              p.text-center.texto-negro Limpiar los nidos frecuentemente.
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-11.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Hacer la recolección de huevos con una frecuencia de 4 a 5 veces por día.
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-12.svg' alt='')
            .tarjeta.color-primario.p-4
              p.text-center Evitar exponer el huevo al sol y al agua. 
      
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-13.svg' alt='')
            .tarjeta.color-acento-contenido.p-4
              p.text-center.texto-negro Usar bandejas diferenciadas para la recolección del huevo y para la distribución y comercialización.
      
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-14.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Evitar la ruptura de huevos por accidentes ocasionados con obstáculos cercanos a los sitios de postura.

    p.mb-5(data-aos="flip-down") En caso de recoger huevos fértiles, antes de su incubación se debe verificar el desarrollo del siguiente proceso:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4 d-flex align-items-stretch" data-aos="flip-down")
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-a.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Recolección cuidadosa para evitar huevos con roturas y, reducir probabilidades de contaminación. 

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-b.svg' alt='')
            .tarjeta.color-primario.p-4
              p.text-center Se seleccionan y separan los huevos incubables, limpios y se hace descarte de los contaminados. Los parámetros de descarte son aquellos huevos que no están en nidales, los que el peso sea inferior a 48 gramos o superior a los 80 gramos, los huevos picados, y huevos doble yema.

      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-c.svg' alt='')
            .tarjeta.color-acento-contenido.p-4
              p.text-center.texto-negro Los huevos se limpian para retirar la suciedad y se colocan en las bandejas; luego se procede a la desinfección con un desinfectante que puede ser amonio cuaternario y con agua a una temperatura entre 25 y 38 grados y, se hace el proceso de fumigación. 
              
      .row.justify-content-center.mb-3
        .col-12
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema4/tema4-d.svg' alt='')
            .tarjeta.color-acento-botones.p-4
              p.text-center Después del proceso de desinfección se hace el proceso de secado durante 4 horas, se procede a enfriar y almacenar a 28 grados centígrados. El espacio de almacenamiento libre de moscas, aseado diariamente y fumigado dos veces por semana. 

              








</template>

<script>
export default {
  name: 'Tema4',
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
