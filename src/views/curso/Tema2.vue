<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Capacidad legal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Cuando se estudian los requisitos de validez del contrato en el Derecho Civil colombiano, uno de los aspectos más importantes a tener en cuenta es la capacidad legal de las partes contratantes.
    
        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta capacidad es el punto de partida para determinar si una persona puede o no obligarse válidamente por sí misma. En otras palabras, si una persona no tiene capacidad legal, su consentimiento carece de valor jurídico, y el contrato puede ser declarado nulo o anulable, según el caso.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] ¿Qué se entiende por capacidad legal?
    
    .row.mb-5
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La capacidad legal es la aptitud reconocida por el ordenamiento jurídico para ejercer derechos y contraer obligaciones por cuenta propia. En el contexto contractual, se traduce en la facultad de celebrar contratos válidos y eficaces.
    
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En Colombia, esta materia está regulada principalmente en el Código Civil, particularmente en el Título del “Acto o Declaración de Voluntad”, y se articula con disposiciones relativas a la tutela, curaduría y protección de personas en condición de vulnerabilidad.
        p(data-aos="fade-left") En principio, toda persona mayor de edad, se presume capaz. Así lo establece el Artículo 1502 del Código Civil, que indica que para que una persona se obligue a otro por acto o declaración de voluntad, se requiere:
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-17.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Que sea legalmente capaz.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-18.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Que consienta en dicho acto o declaración y su consentimiento no adolezca de vicio.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-17.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Que recaiga sobre un objeto lícito.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-18.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Que tenga una causa lícita.
    
    p Por tanto, la capacidad legal aparece como el primer requisito esencial de validez. Si se incumple, no importa que haya consentimiento, objeto y causa: el contrato no será válido.
    p.mb-4 La Ley distingue dos tipos de incapacidad: 

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/5.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="Incapacidad absoluta") 
            p Corresponde a personas que no pueden celebrar ningún tipo de acto jurídico por sí mismas. 
            p En Colombia, esta categoría incluye:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-16
                p.mb-0 Menores de edad no emancipados (es decir, menores de 18 años que no han adquirido capacidad por matrimonio o habilitación judicial).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-16
                p.mb-0 Personas que padecen trastornos mentales profundos o persistentes que les impiden expresar su voluntad, declarados judicialmente como interdictos.
            p Los actos celebrados por personas absolutamente incapaces carecen de valor jurídico, y deben ser realizados por medio de representantes legales (padres, tutores o curadores).
            p <b>Ejemplo práctico.</b> Si un menor de 16 años firma un contrato de compraventa de un inmueble sin la autorización de sus padres, ese acto es nulo absolutamente, incluso si las demás condiciones del contrato están presentes.

          div(numero="2" titulo="Establecer políticas claras y bien definidas") 
            p Aplica a personas que pueden celebrar ciertos actos jurídicos, pero requieren autorización o asistencia de un representante legal. 
            p Este grupo incluye:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-16
                p.mb-0 Menores adultos (mayores de 14 y menores de 18 años).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-16
                p.mb-0 Personas con ciertas limitaciones cognitivas o físicas no graves, que necesitan apoyo en la toma de decisiones, según se haya determinado judicialmente.
            p Los actos celebrados por estas personas sin la intervención legal requerida, son anulables, es decir, pueden ser declarados inválidos si la parte afectada lo solicita en el tiempo previsto por la Ley.
            p <b>Ejemplo práctico.</b> Un joven de 17 años que, sin autorización, alquila un local comercial por 5 años, puede ver ese contrato anulado si sus representantes así lo solicitan.
         
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Protección constitucional y enfoque diferencial
  
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Se debe tener presente que el tratamiento de la capacidad legal ha evolucionado, especialmente con la entrada en vigor de la Convención sobre los Derechos de las Personas con Discapacidad (Ley 1346 de 2009) y el desarrollo jurisprudencial de la Corte Constitucional colombiana. Actualmente, se promueve un enfoque de capacidad jurídica universal, que reconoce que todas las personas tienen capacidad legal en igualdad de condiciones, y lo que varía es el tipo de apoyo que requieren para ejercerla efectivamente.
    
        .bg-color-11.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En ese sentido, el Artículo 12 de la Convención señala que las personas con discapacidad tienen derecho al reconocimiento de su capacidad jurídica en todos los aspectos de la vida. Esta norma, de rango supralegal, obliga al Estado colombiano a adaptar su legislación para evitar restricciones injustificadas o discriminatorias.
        p(data-aos="fade-left") Como abogado, debe evaluar cuidadosamente la capacidad de las partes al momento de redactar o revisar un contrato. Algunas acciones prácticas que puede tomar incluyen:

    .bg-full-width.bg-color-14.mb-5
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center Verificar la edad y estado civil de los contratantes.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center Solicitar copia del documento de identidad.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center Confirmar si alguno requiere representante legal o curador.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/10.svg" alt="" style="width: 90px")
              h5.text-center Cuarto
              p.mb-0.text-center Revisar si existe interdicción judicial o sentencia de apoyo.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") El desconocimiento de la capacidad de una de las partes no exime de responsabilidad. Un contrato celebrado con una persona incapaz puede tener consecuencias patrimoniales y legales graves para su cliente.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para concluir, se puede afirmar que la capacidad legal no es una formalidad, sino un requisito sustancial del contrato. Usted debe abordarlo con la misma rigurosidad con la que analiza el objeto, la causa o el consentimiento. Comprender quién puede obligarse válidamente y en qué condiciones es una competencia básica para todo abogado civilista, y un componente clave para asegurar la eficacia y la legalidad de los actos jurídicos en los que intervenga.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59060 " target="_blank" rel="noopener noreferrer") Fayos Gardó, A. (2018). Derecho civil: manual de derecho de obligaciones y contratos: ( ed.). Dykinson.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/56942 " target="_blank" rel="noopener noreferrer") La Cruz, B. J (2013) Elementos de derecho civil. Tomo II: derecho de obligaciones. Volumen 2: contratos y cuasicontratos (5a. ed.). Editorial: Dykinson. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.valorpyme.cl/blog/nulidad-de-un-contrato-tipos-y-causas" target="_blank" rel="noopener noreferrer") Valor Pyme. (2022, 6 de septiembre). Nulidad de un contrato: tipos y causas. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/W23C777Xipc?si=ocaU__5gFEZ4Mqms " target="_blank" rel="noopener noreferrer") Universidad Continental (2021, 18 de marzo) Evolución histórica de los contratos. [Vídeo] Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
