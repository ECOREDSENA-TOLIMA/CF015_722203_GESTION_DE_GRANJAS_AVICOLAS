<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Novedades en la recolección de huevo de mesa

    p.mb-4(data-aos="flip-down") En los procesos de inspección y verificación del procesos de acopio de huevos se pueden presentar novedades, las cuales deben ser tenidas en cuenta para garantizar la calidad del producto y proponer planes y acciones de mejora en el proceso de producción y acopio, de igual manera es necesario diseñar e implementar planes de contingencia que permitan prevenir y mejorar los procesos de recolección de huevo; todo procesos se debe reportar por medio del uso de formatos y registros debidamente diligenciados y documentados.

    p.mb-4(data-aos="flip-down") La novedad según (Navarro, 2014) es “cuando aparece algo distinto a lo habitual, algo nuevo y diferente”, en la recolección de huevos de mesa las novedades hacen referencia a identificar los huevos con defectos en la cáscara como grietas, huevos fárfara, huevos deformados, huevos corrugados o falta de pigmentación. De igual forma se convierten en novedades los procedimientos que no están establecidos en los procedimientos operativos estandarizados de sanitización POES; relacionados según (Resolución 3651, 2014) con la  “recolección, clasificación, desinfección, almacenamiento y transporte del huevo dentro de los galpones y la granja, relacionando la frecuencia diaria de estas actividades, debe además indicar las características del huevo apto para incubar, procedimientos y la disposición final del no apto”(p. 29).Las novedades son aspectos importantes a tener en cuenta en la calidad del huevo.  

    p.mb-4(data-aos="flip-down") En las explotaciones en jaula, accidentalmente los huevos pueden caer en la gallinacera (lugar donde se recolecta la gallinaza), por desperfectos en las jaulas. En tal caso, estos huevos deben rescatarse oportunamente y luego se debe enmendar la causa de esta irregularidad, estas medidas se tienen en cuenta como parámetro para la calidad del huevo, se utilizan algunas medidas subjetivas y otras cuantitativas y se tiene en cuenta los aspectos externos de los huevos incluyendo: peso, forma, color, grosor de cáscara, peso de cáscara, densidad de cáscara, y textura, entre otros. El peso, forma y color son factores que influyen en la clasificación, precio y preferencias del consumidor.

    p.mb-5(data-aos="flip-down") Las novedades se dan cuando se encuentran defectos en los huevos, las cuales pueden ser defectos externos o de cascarón, en el siguiente anexo podrá consultar algunas de estas:

    .tarjeta-c.color-primario.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema13/tema13-1.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.texto-blanco Alteraciones internas y externas del huevo.
              p.text-small Podrá consultar cuales son los principales defectos que presentan los huevos a nivel externo o de cascarón, e igualmente a nivel interno.
            .col-sm-auto
              a.boton.color-acento-botones(href="#" target="_blank")
                span Descargar
                i.fas.fa-file-download 

    p.mb-5(data-aos="flip-down") Con el fin de establecer estrategias para el manejo y control de posibles situaciones de incidentes de contaminación o eventos que ponen en riesgo los recursos naturales y la integridad de las personas, es necesario implementar planes de contingencia, donde se puedan relacionar estas estrategias para atender las novedades identificadas en la recolección de huevos de mesa. 

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema13/tema13-2.png')})`}" 
      ) 
      .bloque-texto-g__texto.p-4
        p.mb-0 Los planes de contingencia surgen de la necesidad de mitigar los riesgos de forma planificada, y plantear acciones de respuesta ante el riesgo. Los elementos básicos de un plan de contingencia son: los objetivos, las estrategias, las actividades, la asignación de tiempos, los recursos, la ejecución y la medición; que permitan mitigar los riesgos y novedades que se presentan en el proceso de recolección de huevos. 

    p.mb-4(data-aos="flip-down") Los medios de reporte de las novedades en la recolección de huevos de mesa se hacen en el ítem de los registros establecidos para tal fin y, en los formatos de trazabilidad del huevo para consumo humano; con el objeto en corregirlas y ser insumo para el planteamiento de acciones de mejora que inciden en la productividad y rentabilidad. 
    p.mb-5(data-aos="flip-down") En la inspección del proceso de acopio de huevo se utilizan medios de reporte denominados listas de verificación de calidad y producción de huevo en la que la persona encargada plantea interrogantes cómo: ¿se  recolectan los huevos de piso con una frecuencia mínima por día?, propone un objetivo: mínimo de al menos 3 recolecciones de huevos de piso al día, hasta la producción pico, pero depende en gran medida de cuántos huevos de piso se produzcan, se sugiere unas acciones así: aumentar el número de recolecciones diarias si es necesario; y mencionar las posibles causas y soluciones. El sitio #[em web] (Cobb-vantress., 2018), guía manejo de reproductoras, Cobb propone una lista de verificación de calidad y producción de huevo que se presenta en el anexo  4, como medio de reporte y ejemplo. 

    .tarjeta-c.color-acento-contenido.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema13/tema13-3.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.texto-blanco Ejemplo de lista de Verificación de Calidad y Causas y posibles soluciones en la producción de huevos.
              p.text-small Podrá consultar un ejemplo de la lista de verificación de la calidad del producto, así como las causas y posibles soluciones de los huevos en el piso.
            .col-sm-auto
              a.boton.color-acento-botones(href="#" target="_blank")
                span Descargar
                i.fas.fa-file-download 



</template>

<script>
export default {
  name: 'Tema13',
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
