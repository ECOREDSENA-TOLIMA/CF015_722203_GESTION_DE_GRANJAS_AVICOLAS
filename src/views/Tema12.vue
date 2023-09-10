<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Formatos para reporte de recolección de huevo de mesa

    p.mb-4(data-aos="flip-down") Los formatos de reporte de recolección de huevos de acuerdo con la Resolución 3650 de 2014, deben permitir el registro de la información para el manejo del huevo con datos tales como: el número de huevos recogidos, número del lote, número de galpón, número de huevos incubables y no incubables, y se deben utilizar registros zootécnicos, estos registros son el soporte necesario para ser relacionados con las facturas de compra de alimento e insumos y con las facturas de venta de huevo o pollo en canal, para solicitar la devolución del IVA. Es muy importante que los productores de las granjas avícolas bioseguras reconozcan los tipos de formatos y diligenciamiento de estos.
    p.mb-5(data-aos="flip-down") Como los formatos pueden ser adaptados según la granja avícola, Se presentan a continuación y a modo de ejemplo, los formatos de registro utilizados por el Centro de Atención al Sector Agropecuario (CASA) de la sede aguas calientes, del municipio: El Playón, del departamento de Santander, también se relacionan algunos propuestos por Fenavi y otros utilizados en la granja avícola propiedad del Centro de Recursos Naturales Renovables La Salada, del SENA en el departamento de Antioquia.

    p.mb-4(data-aos="flip-down") #[b Formatos de registro Unidad Avícola CASA:] los formatos de registro de información del proceso de acopio el huevo de la unidad avícola utiliza los siguientes: 

    ul.lista-ul.mb-4.ms-3(data-aos="fade-right")
      li 
        span.text-bold ● 
        | Registro de control de entradas y salidas.
      li 
        span.text-bold ● 
        | Formato de trazabilidad del huevo para el consumo humano.
      li 
        span.text-bold ● 
        | Formato de producción de huevos.

    p.mb-4(data-aos="flip-down") #[b Formatos de registro según Fenavi:] los formatos sugeridos por esta entidad para el registro de información del proceso de acopio el huevo y los registros zootécnicos; son los siguientes:  

    ul.lista-ul.mb-4.ms-3(data-aos="fade-right")
      li 
        span.text-bold ● 
        | Registro zootécnico de postura en producción.
      li 
        span.text-bold ● 
        | Registro de inventario bodega de huevo.

    p.mb-4(data-aos="flip-down") #[b Formatos de registro granja avícola La Salada:] los formatos de registro de información del proceso de acopio el huevo de la granja avícola, son los siguientes:

    ul.lista-ul.mb-4.ms-3(data-aos="fade-right")
      li 
        span.text-bold ● 
        | Producción y movimiento de huevos.
      li 
        span.text-bold ● 
        | Bitácora.
      li 
        span.text-bold ● 
        | Registro mensual de postura.





</template>

<script>
export default {
  name: 'Tema12',
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
