<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Nulidad '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Cuando se estudian contratos en Derecho Civil, se debe tener claro que no todos los acuerdos celebrados entre personas son válidos, solo por el hecho de haber sido firmados. La Ley establece ciertos requisitos que deben cumplirse para que un contrato produzca efectos jurídicos legítimos. La nulidad es la figura mediante la cual el ordenamiento jurídico declara ineficaz un contrato o acto jurídico que ha sido celebrado en contravención a estos requisitos.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En sentido jurídico, la nulidad es una sanción legal que se aplica a los actos o contratos que adolecen de vicios esenciales, lo que significa que fueron celebrados sin cumplir con las condiciones básicas exigidas por la Ley. Esta sanción implica que el contrato, aun cuando fue celebrado, no tiene efectos jurídicos válidos o puede perder esos efectos si así lo declara un juez.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La nulidad es, en esencia, una medida correctiva que protege al sistema jurídico de actos contrarios al orden legal, al interés público o a los derechos de los particulares. Su función no es solo castigar el incumplimiento de la Ley, sino restablecer el equilibrio y la justicia contractual.
    
    .bg-full-width.mb-5.bg-color-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.text-white En Colombia, la nulidad se encuentra regulada en el Libro Cuarto del Código Civil, Título XXII, específicamente en los Artículos 1740 a 1756. Allí se establecen las causales, los efectos y las condiciones para alegar judicialmente. La legislación colombiana adopta una clasificación dual de la nulidad: nulidad absoluta y nulidad relativa, siguiendo una tradición romanista que distingue el tipo de interés protegido por la Ley.
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema3/4.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Nulidad absoluta y relativa
    
    p.mb-4 El estudio de la nulidad absoluta y relativa en el Derecho Civil colombiano permite diferenciar las consecuencias jurídicas de los vicios contractuales según el interés que se protege.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Nulidad absoluta y relativa
            p.mb-4(data-aos="fade-right") En el PDF <b>Nulidad absoluta y relativa</b>, se analizan sus características, causales y efectos, brindando herramientas para determinar cuándo un contrato puede ser anulado total o parcialmente, quiénes pueden solicitar la nulidad y qué implicaciones prácticas tiene cada tipo en el ámbito legal.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Nulidad absoluta y relativa.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Efectos de la nulidad
    
    p.mb-4 Cuando un juez declara la nulidad de un contrato, lo que ocurre es que se reconoce legalmente que ese acto no debió producir efectos jurídicos, ya sea por violar normas imperativas o por haberse celebrado en condiciones que afectan la validez del consentimiento o la capacidad de una de las partes. El efecto más importante es el llamado efecto retroactivo, que implica que el contrato se considera como no celebrado desde su origen. Es decir, jurídicamente se borra del tiempo: se actúa como si nunca hubiera existido.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-8.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En consecuencia, las partes deben restituirse mutuamente lo que hayan recibido en virtud del contrato. Si, por ejemplo, una persona entrega una suma de dinero y la otra entrega un bien, ambos deben devolver lo recibido. Esta restitución busca restablecer el equilibrio y evitar que alguien obtenga una ventaja indebida de un acto que fue inválido desde su inicio.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-11.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") En algunos casos, la restitución material puede no ser posible. Por ejemplo, si se entregó un bien que ya no existe o se prestó un servicio que no puede deshacerse. En esos escenarios, la Ley permite que se apliquen compensaciones económicas para resarcir el perjuicio causado. Así, quien no pueda devolver lo recibido en especie, deberá hacerlo en dinero, de forma proporcional y justa.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Todo este conjunto de efectos se fundamenta en el principio de que nadie debe enriquecerse injustamente a costa de otro mediante un acto inválido. Por eso, la nulidad no solo elimina el contrato, sino que también impone obligaciones posteriores orientadas a restaurar la situación patrimonial que existía antes de su celebración. Estos efectos, tanto en la nulidad absoluta como en la relativa, son esenciales para garantizar la justicia contractual y la seguridad jurídica en las relaciones civiles.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En este punto queda claro que la nulidad cumple una función esencial dentro del sistema jurídico: garantizar la legalidad, proteger los intereses legítimos de las partes, y preservar el orden público. Usted, como futuro abogado, debe aprender a identificar cuándo un contrato puede estar afectado por una causal de nulidad, cómo alegarla, y qué consecuencias puede tener en la práctica. Además, con la evolución constitucional, la nulidad también se interpreta desde la perspectiva de los derechos fundamentales, el principio de equidad y la protección del débil contractual, lo que refuerza su importancia en un contexto de justicia material y no meramente formal.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la nulidad no es solo un mecanismo técnico: es una herramienta que permite al Derecho corregir irregularidades y proteger valores fundamentales. Usted debe abordarla no solo desde el cumplimiento normativo, sino también desde una perspectiva ética y constitucional, asegurando que los contratos no se conviertan en vehículos de injusticia, abuso o ilegalidad. Dominar esta figura le permitirá prevenir conflictos, asesorar correctamente a sus clientes y actuar con solvencia en los escenarios judiciales donde la validez del contrato esté en juego.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/46321 " target="_blank" rel="noopener noreferrer") Rogel Vide, C. (2008). Estudios de Derecho Civil: obligaciones y contratos: ( ed.). Editorial Reus. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/30466 " target="_blank" rel="noopener noreferrer") Grupo Gaceta Juridica (2014) Jurisprudencia: derecho civil: derecho de contratos. Editorial: El Cid Editor.   
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/lesion-enorme.html " target="_blank" rel="noopener noreferrer") Gerencie.com. (2022, 8 de septiembre). Lesión enorme. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/efANJMt20lk?si=x3oqOe9YyUcFuEee " target="_blank" rel="noopener noreferrer") Universidad Continental (2021, 18 de marzo)  Definición de un contrato u clasificación [Vídeo] Youtube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
