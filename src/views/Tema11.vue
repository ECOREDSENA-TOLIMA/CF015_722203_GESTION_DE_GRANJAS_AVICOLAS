<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Inventario de huevo

      p.mb-4(data-aos="flip-down") 

    .bloque-texto-g.bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema11/tema11-1.png')})`}" 
      ) 
      .bloque-texto-g__texto.p-4
        p.mb-0 Los inventarios de forma general son listas ordenadas de bienes, productos u objetos que son de propiedad de una persona natural o de una empresa; esta lista se organiza en un documento y se le da un uso contable. Ayudan a planificar actividades, acciones y tareas; también facilitan los procesos de comercialización de productos de una empresa en este caso las granjas avícolas.  
          br
          br
          | Los inventarios según el Decreto 2649 de 1993, representan bienes corporales destinados a la venta en el curso normal de los negocios, así como aquellos que se hallen en proceso de producción o que se utilizarán o consumirán en la producción de otros que van a ser vendidos. 

    p.mb-4(data-aos="flip-down") El control de inventarios es de dos tipos y puede ver la descripción de estos a continuación:

    .row.justify-content-center.align-items-center
      .col-md-6(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema11/tema11-2.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h2.texto-negro Inventario físico o real
              p El inventario físico o real que permite hacer un conteo manual de los artículos para conocer las existencias reales y compararlas con las del inventario permanente.

      .col-md-6(data-aos="fade-down")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema11/tema11-3.svg' alt='')
          .tarjeta.tarjeta--azul
            .p-4
              h2 Inventario permanente
              p El inventario permanente que tiene como objetivo conocer la mercancía existente, llevar registro de los cambios en el inventario y tener un plan para saber con exactitud cuándo se debe solicitar mercancía y en qué cantidad. 


    p.mb-4(data-aos="flip-down") Como el huevo es un producto de la granja avícola, el inventario de huevo es entonces un listado de las existencias que permite hacer el conteo, llevar registro y saber con exactitud la cantidad de huevos por tamaño y peso, y hacer un registro por día y cantidad; el documento del inventario de huevos puede hacerse de forma manual o utilizando software y facilita la gestión de embalaje y ventas optimizando la salida y entrada de huevos.
    p.mb-5(data-aos="flip-down") A continuación, se presenta un recurso de aprendizaje donde entregan elementos claves para el control de bodega y el inventario de huevos:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="El control de bodega")
        .col-12.mb-4.mb-md-0
          p Tiene como objetivo la gestión logística y la prevención de los riesgos, además el registro de la mercancía, los métodos de distribución, la limpieza de la bodega, y la optimización de los espacios, debe tener en cuenta la organización de información sobre la mercancía, dimensiones y peso de la mercancía, número de unidades que se pueden almacenar, espacio necesario para la manipulación y precaución en el transporte.
      .row(titulo="La documentación para el control de bodega")
        .col-12.mb-4.mb-md-0
          p Se relaciona con el registro de entrada, y de salida y #[em stock] de la bodega; con el embalaje teniendo en cuenta materiales que protejan y faciliten la manipulación, la identificación del tipo de mercancía y las instrucciones de manipulación; también es se reconocen los tipos de transporte a utilizar ya sean por rodillos, apiladores y carretillas.
      .row(titulo="El control de huevos en bodega")
        .col-12.mb-4.mb-md-0
          p Se desarrolla llevando registros de inventarios con el fin de identificar falencias y aplicar acciones de mejora para corregirlas a tiempo, tener un archivo o historial de registros para identificar fortalezas en hechos, tiempos y lotes de huevos específicos, que faciliten una mejor producción y plantear así oportunidades de mejoramiento. 
      .row(titulo="El inventario de huevo")
        .col-12.mb-4.mb-md-0
          p Puede ser de panal o bandeja y de huevo clasificado; según (Córdoba & Carvajal, 2016) el primero es “de diversas referencias y su consumo depende de la cantidad de huevo recolectado y clasificado” y el segundo es “el resultado de la clasificación del huevo recolectado o huevo de producción y será el producto terminado y listo para ser vendido” (p.19); estos inventarios facilitan la clasificación y acopio del huevo mejorando la rentabilidad. 
      .row(titulo="Los métodos de inventarios de huevos")
        .col-12.mb-4.mb-md-0
          p Son los mismos métodos de valoración de inventario de las empresas en general regulados por la normatividad contable colombiana. Según el Decreto 2649 de 1993 los métodos utilizados son: “el método PEPS (primeros en entrar, primeros en salir), UEPS (últimos en entrar, primeros en salir), el de identificación específica o el promedio ponderado” (p. 16). 
      .row(titulo="La entrada y salida de huevos")
        .col-12.mb-4.mb-md-0
          p Se registra en los controles de inventarios de bodega según la clasificación de la NTC 1240 de 2011 por peso (en Jumbo, AAA, AA, A, B y C) y en cada tipo se registra según (Fenavi, 2019) “la fecha, y en las entradas (ENT), la cantidad de huevos que se recogieron ese día, según la clasificación; en salida (SAL), la cantidad que se venden el mismo día, y en total (TOT), el saldo que hay en la bodega. 
          p Para sacar el total se debe tomar el total del día anterior, sumarle las entradas y restarle las salidas del día actual.



</template>

<script>
export default {
  name: 'Tema11',
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
