<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Acomodación de huevo de gallina

    p.mb-4(data-aos="flip-down") La acomodación adecuada en los recipientes ayuda a garantizar que productos como el huevo, no sufran posibles daños, causando pérdidas por malas prácticas; por lo que es muy importante implementar los procedimientos de verificación en la acomodación de huevo de gallina, teniendo en cuenta la aplicación de la normatividad vigente y parámetros técnicos.
    p.mb-5(data-aos="flip-down") Acomodar es poner o colocar un producto u objeto en un lugar apropiado de forma cómoda; en el caso del huevo hace referencia a colocarlo de manera adecuada en una bandeja de cartón o plástico para protegerlos de roturas; teniendo en cuenta que el huevo debe ser acomodado con la punta hacia abajo. Para el proceso de acomodación se debe tener en cuenta las características de las bandejas, dependiendo del tamaño y sus dimensiones, en la figura 3, se ilustra sobre algunas especificaciones de las bandejas, por color y medidas de alto: 4 cm, largo: 29 cm y ancho: 29 cm.

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Características de las bandejas de huevo según tamaño y peso] 
        figure
          img(src='@/assets/curso/temas/tema6/tema6-f3.png', alt='En la figura 3 se muestran las características de las bandejas de huevo según tamaño y peso.')  
          figcaption Nota. Adaptado de Edopulpack (2021).

    p.mb-4(data-aos="flip-down") La verificación de la acomodación del huevo durante el proceso de recolección, es muy importante en las granjas avícolas, por lo cual, se deben tener en cuenta las siguientes recomendaciones, las cuales posibilitan ofrecer un producto de calidad:

    .row.mb-5
      .col-md-6.mb-5.mb-md-0(data-aos="fade-down-right")
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="Desplazamiento entre los nidales") El operario debe caminar con cuidado, sin patear las gallinas, ni sacar de los nidos a las que están poniendo. 
          
          .text-small(numero="2" titulo="Uso y protección de las cubetas") 
            p Entrar al galpón cubetas de huevo nuevas, nunca usadas, evitando así la entrada de enfermedades que puedan venir en cubetas infectadas de otras granjas.
            p En la parte inferior poner tres cubetas de cartón o una de plástico y una de cartón para proteger los huevos de la primera.
          
          p.text-small(numero="3" titulo="Recolección") Se deben tomar los huevos de los nidos, de a dos o tres, y ponerlos en las cubetas de cartón con el lado chato hacia arriba. Evitando así que la cámara de aire que está en el lado chato se rompa y, reduzca la vida útil del huevo.
          
          p.text-small(numero="4" titulo="Separación de los huevos") Separe los huevos sucios, rotos o vencidos y los que sean muy grandes. 

          p.text-small(numero="5" titulo="Apilación de cubetas") Complete arrumes o pilas de cinco bandejas e inicie un nuevo arrume. Así previene roturas en el manejo. 
          
          .text-small(numero="6" titulo="Evite exceso de postura") 
            p Recoja los huevos del piso y evite ponerlos allí. Así reduce la pérdida por rotura y suciedad y previene el canibalismo hacia el huevo. 
            p También se puede recoger en baldes con tamo en el fondo, pero se aumenta el riesgo de rotura.
          
          p.text-small(numero="7" titulo="Renovación de las camas") Renueve la cama de los nidos cada ocho días máximo con material nuevo. Nunca ponga cama de piso en los nidos, pues se contaminan los huevos.
          
          p.text-small(numero="8" titulo="Ubicación en zonas limpias") Dado que los huevos salen calientes y tienen los poros abiertos, si son puestos en nidos sucios su estabilidad y vida útil se deterioran. 
          
          .text-small(numero="9" titulo="Clasificación") 
            p Una vez recogidos los huevos, se deben clasificar por tamaño de acuerdo siguiendo la norma establecida.
            p Los huevos manchados o sucios no se deben raspar ni limpiar con agua, ni con otros elementos que dañen la cubierta o película protectora propia.
          
          p.text-small(numero="10" titulo="Contaminación") Si se raspan o humedecen con cualquier producto, se facilita la contaminación interna a través de los poros de la cáscara y se reduce el tiempo de aprovechamiento del huevo.

      .col-md-6.mb-5.mb-md-0(data-aos="fade-down-left")
        img(src='@/assets/curso/temas/tema6/tema6-1.svg')



</template>

<script>
export default {
  name: 'Tema6',
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
