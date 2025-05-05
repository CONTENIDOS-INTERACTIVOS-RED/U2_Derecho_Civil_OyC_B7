<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Lesión enorme'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La lesión enorme es una figura jurídica que cumple una función protectora dentro del Derecho Civil colombiano, en particular en los contratos conmutativos, como la compraventa o la permuta. Su finalidad es corregir situaciones en las que una de las partes resulta gravemente perjudicada debido a un desequilibrio económico evidente al momento de celebrar el contrato, aún cuando este haya sido celebrado con consentimiento válido, objeto lícito y causa legítima.
    
        .bg-color-19.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Aunque a primera vista podría parecer que basta con el acuerdo entre las partes para que un contrato sea válido, el ordenamiento colombiano, como expresión del Estado Social de Derecho, reconoce que en ciertas circunstancias ese consentimiento puede haberse dado en condiciones de desigualdad sustancial, que justifica la intervención del Derecho para restablecer el equilibrio contractual.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Fundamento normativo
    
    p.mb-4 La lesión enorme está regulada principalmente en los siguientes artículos del Código Civil colombiano:
    .bg-full-width.bg-color-14.mb-5
      .p-4.p-md-5
        
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Primero
                p.mb-0 <b>Artículo 1947.</b> Define la lesión enorme en el contrato de compraventa.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Segundo
                p.mb-0 <b>Artículos 1948 a 1955.</b> Regulan sus consecuencias, presunciones legales y condiciones para su alegación.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tercero
                p.mb-0 También se aplica por analogía en contratos como la permuta (Artículo 1956) y otros contratos conmutativos, cuando se demuestra una desproporción manifiesta.
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] ¿Qué es una lesión enorme?
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
      .col-lg-9
        p(data-aos="fade-left") La lesión enorme ocurre cuando, en un contrato conmutativo, una de las partes recibe una prestación significativamente inferior a la que entrega, generando una desigualdad económica grave y evidente. No se trata de cualquier desproporción, sino de una que supere cierto umbral definido por la Ley.
    
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          p.mb-0 En la compraventa de bienes raíces, por ejemplo, el Artículo 1947 establece que hay una lesión enorme cuando el precio que se paga es menor a la mitad del justo precio del inmueble al momento del contrato. También se aplica en sentido inverso: si se paga más del doble del valor del bien, quien compra puede alegar lesión.
        p(data-aos="fade-left") Este justo precio no se refiere al valor sentimental o subjetivo, sino al valor comercial objetivo, determinado por peritos, avalúos o criterios técnicos.

    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Elementos esenciales de la lesión enorme
    
    p.mb-4 Para que proceda esta figura, deben cumplirse los siguientes requisitos:

    .bg-full-width.bg-fondo-2.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema4/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="29%" y="94.5%" numero="+")
                h5 1. Contrato conmutativo
                p Aquel en el que ambas partes conocen de manera clara y anticipada las prestaciones recíprocas, como en la compraventa o la permuta. No aplica en contratos aleatorios o gratuitos.
    
              .bg-color-white.box-shadow.p-3(x="30.4%" y="9%" numero="+")
                h5 2. Desproporción manifiesta
                p Debe existir una desigualdad económica grave entre lo que una parte da y lo que recibe. En el caso de inmuebles, la Ley presume una lesión enorme cuando el precio pagado es inferior a la mitad del justo precio.
    
              .bg-color-white.box-shadow.p-3(x="73%" y="9%" numero="+")
                h5 3. Desproporción al momento del contrato
                p No se toma en cuenta si el precio sube o baja después; lo relevante es el valor del bien al momento de la celebración.
    
              .bg-color-white.box-shadow.p-3(x="73%" y="94%" numero="+")
                h5 4. Buena fe del lesionado
                p La acción está dirigida a quien, sin intención de ser engañado, celebró un contrato con una desventaja que no advirtió o no pudo evitar.

    #t_4_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.4] Consecuencias jurídicas y acción
    
    p.mb-4 Si se prueba una lesión enorme, la parte afectada tiene derecho a rescisión del contrato, es decir, a que este sea declarado ineficaz y se ordene la restitución recíproca de lo entregado por ambas partes. Sin embargo, el Código Civil ofrece una alternativa al demandado: evitar la rescisión pagando la diferencia hasta completar el justo precio. Esto permite conservar el contrato, equilibrando las prestaciones.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La acción para demandar la lesión enorme es de carácter personal, prescriptible en cuatro años, contados a partir de la fecha del contrato. Solo puede ejercerla la parte lesionada o sus causahabientes.
    
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para entender un poco más, veamos un ejemplo práctico: una persona vende una finca en $80 millones, pero el valor real del bien al momento del contrato era de $200 millones. Si el comprador pagó menos de $100 millones (la mitad del justo precio), se configura una lesión enorme. El vendedor podrá pedir la rescisión del contrato, a menos que el comprador complete el valor hasta alcanzar el justo precio.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Aunque el Código regula de manera expresa, la lesión enorme en la compraventa de inmuebles, la jurisprudencia y la doctrina han reconocido su aplicabilidad en otros contratos conmutativos, como:
    
        .bg-color-20(data-aos="fade-left").p-4
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-16
              p.mb-0 Permutas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-16
              p.mb-0 Daciones en pago.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-16
              p.mb-0 Contratos de cesión de derechos.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-16
              p.mb-0 Compraventa de otros bienes, si se prueba desproporción extrema.
        .bg-color-11(data-aos="fade-left").p-4
          p.mb-0 En todos los casos, es indispensable que se demuestre una asimetría económica objetiva y grave, sin necesidad de que haya dolo o engaño.

    #t_4_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.5] Relación con otros vicios y su función social
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/11.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") La lesión enorme no es un vicio del consentimiento como el error, la fuerza o el dolo. Puede coexistir con ellos, pero se trata de una figura autónoma, enfocada no en cómo se formó el consentimiento, sino en el contenido económico del contrato. La lesión enorme protege frente a situaciones donde el consentimiento fue libre, pero las condiciones económicas del contrato resultaron abusivas o desequilibradas.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta figura refleja la evolución del Derecho Civil hacia un modelo más solidario y justo, en el que la autonomía de la voluntad tiene límites cuando genera situaciones de explotación o abuso. La lesión enorme actúa como una válvula de corrección del desequilibrio contractual, permitiendo al juez intervenir cuando el contrato, aunque formalmente válido, encierra una injusticia material evidente.
    
    .bg-full-width.mb-5.bg-color-3
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.text-white En síntesis, la lesión enorme es una institución clave para garantizar la equidad contractual, especialmente en contextos donde una parte puede encontrarse en desventaja económica o informativa. Su aplicación exige un análisis riguroso de las condiciones del contrato y del valor de las prestaciones involucradas. Comprender esta figura permite no solo evitar abusos en la práctica contractual, sino también actuar con responsabilidad al asesorar o representar a personas que hayan sido afectadas por desequilibrios graves en sus relaciones patrimoniales.
              .col-lg-4(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema4/13.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0




    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

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
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la definición de contrato según el Código Civil colombiano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Un acto que genera obligaciones morales entre las partes.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Un acto por el cual una parte se obliga para con otra a dar, hacer o no hacer alguna cosa.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Una promesa unilateral sin efectos jurídicos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Una manifestación de voluntad con valor meramente social.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué corriente del siglo XX influye en la inclusión del contenido social del contrato?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Formalismo legal.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Liberalismo económico extremo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Constitucionalismo y justicia social. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Neocontractualismo romano.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué característica debe tener el objeto del contrato?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Debe ser simbólico.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Debe ser lícito, posible y determinado o determinable. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debe beneficiar a ambas partes por igual.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Debe ser tangible y material únicamente.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué distingue un requisito de un elemento del contrato?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Los elementos se exigen solo si hay litigio.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Los requisitos afectan la validez; los elementos, la existencia. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Los requisitos son opcionales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No existe diferencia práctica',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes afirmaciones es propia de la nulidad relativa?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Puede ser declarada de oficio.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'No prescribe.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Solo puede alegarse por la parte afectada. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Afecta el orden público.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
