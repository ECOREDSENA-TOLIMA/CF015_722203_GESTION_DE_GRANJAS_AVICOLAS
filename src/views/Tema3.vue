<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sitios de postura y sus nidales

    p.mb-5(data-aos="flip-down") Los sitios donde las gallinas realizan su postura se llaman nidales, y según Pedroza (2005), pueden estar “construidos en madera, asbesto cemento, lámina o cualquier otro material metálico. Posee un número determinado de huecos o nidos para que las ponedoras depositen allí su producción” (p. 38); es decir un sitio de postura puede estar dividido en varios compartimientos o nidos, como se muestra en las siguientes imágenes, en donde se puede observar que estos nidales, están construidos en material metálico. 


    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Sitio de postura colectivo]
          br
          br
          | Los sitios de postura se clasifican según (Pedroza, 2005) dependiendo de la “capacidad de alojar ponedoras, y el tipo de manejo de los nidales” (p. 39) y pueden ser colectivos o individuales. 
          br
          br
          | Los sitios de postura colectivos alojan varias aves en cada compartimiento o nido; son también llamados sitios de postura en jaula; tiene como desventajas la muerte de las aves por asfixia, la ruptura de huevos, la baja calidad del huevo por tanto es poco usado.  

        
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-2.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[b Sitio de postura individual]
          br
          br
          | Los sitios de postura individuales alojan una ponedora por nido según su peso y cada una deposita el huevo en el compartimiento y cama dispuesta como nido. Las medidas del compartimiento son de 25 cm de frente, 30 cm de alto y 30 cm de profundidad; son los más recomendados porque favorecen la calidad del huevo y evitan novedades que inciden en la producción.

    p.mb-3(data-aos="flip-down") Los procedimientos de inspección de los sitios de postura verifican las condiciones de manejo de los nidos para la producción y la recolección del huevo.  Estas condiciones según (Pedroza, 2005) se relacionan con tareas realizadas para el manejo de los nidales tales como: lavar, desinfectar e instalar los nidales; instalar cama en los nidos, manejar las perchas de los nidales, suministrar cama limpia y retirar las gallinas cluecas. 
    p.mb-5(data-aos="flip-down") Estas condiciones se verifican para garantizar la calidad de los huevos, para que estos no estén sucios; se desinfecta para eliminar parásitos o ácaros que afectan a la ponedora; de igual forma una buena instalación del nidal, mejora las operaciones de recolección del huevo, un buen manejo de las camas brinda confort a las aves y protege el huevo en el proceso de postura;  las perchas evitan que la gallina duerma dentro del nido y dañe el huevo; las gallinas cluecas se retiran para evitar que empollen el huevo ya que son de tipo comercial y no fértil.



</template>

<script>
export default {
  name: 'Tema3',
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
