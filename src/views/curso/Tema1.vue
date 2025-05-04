<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El contrato'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El contrato es una de las herramientas jurídicas más utilizadas para ordenar las relaciones patrimoniales entre las personas. No importa si se trata de un negocio multimillonario o de una compraventa sencilla en la tienda del barrio: detrás de cada uno de esos actos hay un acuerdo de voluntades que crea efectos jurídicos. Comprender qué es un contrato y cómo ha evolucionado, le permitirá no solo manejar adecuadamente su concepto jurídico, sino también entender el papel que juega en la vida social y económica de nuestro país.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto y evolución
    
    p.mb-4 Para conocer sobre el concepto y evolución del contrato, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Elementos del contrato     
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") Para que un contrato exista y produzca efectos jurídicos válidos, se debe tener presente que la Ley exige la concurrencia de ciertos elementos esenciales. Se les llama esenciales porque, en su ausencia, no estamos frente a un contrato, sino ante un acto que carece de valor jurídico. Estos elementos no son simples formalidades ni requisitos accesorios: son la estructura misma del contrato, su columna vertebral.
    
        .bg-color-11.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el Derecho Civil colombiano, estos elementos se han identificado tradicionalmente como: <b>el consentimiento, el objeto y la causa</b>. A continuación, se explican cada uno de ellos de manera detallada, clara y con ejemplos que permitirán visualizar su importancia en la práctica.

    h2(data-aos="fade-left") a. Consentimiento
    p El consentimiento es el punto de partida del contrato. No puede obligarse válidamente, si no ha se expresado su voluntad de hacerlo. En otras palabras, el consentimiento es ese acuerdo libre y serio que se forma cuando dos o más partes manifiestan su intención de obligarse jurídicamente.
    p.mb-5 Pero no cualquier manifestación de voluntad basta. El consentimiento debe cumplir varias condiciones para ser válido:

    .bg-full-width.bg-color-14.mb-5
      .p-4.p-md-5
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in")
          .col-lg-8
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Debe ser libre
                  p.mb-0 Es decir, no puede estar forzado ni manipulado.
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Debe ser consciente
                  p.mb-0 Lo que implica que las partes entienden claramente a qué se están obligando.
            .bg-color-2.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Debe coincidir entre las partes
                  p.mb-0 Es decir, que haya oferta y aceptación sobre los mismos términos.

        p.mb-4 El Código Civil establece que el consentimiento puede estar viciado por error, fuerza o dolo, y si eso ocurre, el contrato puede ser anulado. Se aportan algunos ejemplos para que se comprenda cómo actúan estos vicios:
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Error
                p.mb-0 Si usted celebra un contrato creyendo que está comprando un lote urbano, pero en realidad es rural y ese uso era esencial para su decisión, su consentimiento está viciado por error.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Fuerza
                p.mb-0 Si lo obligan a firmar un contrato mediante amenazas físicas o psicológicas, ese consentimiento no es válido.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Dolo
                p.mb-0 Si la otra parte le oculta intencionalmente una información relevante o le engaña para que usted contrate, se configura el dolo.

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white Recuerde que no hay contrato sin consentimiento. Si falta o está viciado, no hay acuerdo, y por tanto, no hay obligación que pueda exigirse válidamente.
    
    h2(data-aos="fade-left") b. Objeto
    p El objeto del contrato es aquello sobre lo cual recae la obligación: lo que las partes se comprometen a dar, hacer o no hacer. Es el contenido mismo del contrato, su finalidad directa. El objeto puede ser una cosa (como un bien inmueble), un servicio (como la construcción de una casa) o una abstención (como el compromiso de no competir comercialmente en un mercado determinado).
    p.mb-5 Para que el objeto sea válido, debe reunir tres características esenciales:
    
    TabsC.color-acento-contenido
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Debe ser lícito" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Debe ser lícito
            p No puede ir en contra de la Ley, el orden público ni las buenas costumbres. No es válido un contrato para vender armas ilegales, pagar por un crimen o explotar trabajo infantil.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Debe ser posible" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Debe ser posible
            p Física y jurídicamente. No puede contratar la entrega de algo inexistente o que no puede materializarse, como vender una estrella o ceder derechos que la Ley prohíbe transferir.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Debe ser determinado o determinable" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Debe ser determinado o determinable
            p No basta con que se diga “le vendo algo”. El objeto debe estar claramente definido, o debe poder determinarse con criterios objetivos al momento de su ejecución. Por ejemplo, si se acuerda la venta de “50 kilos de café tipo exportación, de la finca El Porvenir, recolectados en enero”, el objeto está perfectamente determinable.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/13.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Un contrato sin objeto válido es nulo. Debe verificar siempre que lo pactado tenga existencia real, que pueda cumplirse y que no contradiga normas legales ni principios éticos.
    
    h2(data-aos="fade-left") c. Causa
    p.mb-5 La causa es quizás el elemento más complejo de entender, porque en el Derecho colombiano no está regulado de manera tan expresa como en otros sistemas jurídicos. Sin embargo, su comprensión es indispensable para usted como futuro jurista.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La causa no es el motivo personal o psicológico que lleva a una persona a contratar. En Derecho, la causa es la razón jurídica que justifica el contrato. Es el fin inmediato y objetivo que cada parte persigue al obligarse. Veámoslo con un ejemplo claro:
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En un contrato de compraventa, la causa de la obligación del vendedor es recibir el precio; la causa de la obligación del comprador es recibir la cosa vendida. Si una de las partes no tiene ese fin, o si ese fin es ilícito, el contrato carece de causa válida.
        p(data-aos="fade-left") La causa debe ser:

    .bg-full-width.bg-color-14.mb-5
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/16.svg" alt="" style="width: 90px")
              h5.text-center Lícita
              p.mb-0.text-center No puede ir en contra de la Ley o del orden público. Si se acuerda simular una compraventa para ocultar un bien y evitar un embargo, la causa del contrato es ilícita.
        
          div.col-lg-6.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 90px")
              h5.text-center Real y existente
              p.mb-0.text-center No puede fundarse en una causa falsa o inexistente. Por ejemplo, si se firma un contrato de préstamo pero nunca se entregó el dinero, no hay causa real para exigir el pago.
        
        .bg-full-width.bg-color-3
          .px-4.px-md-5.py-4
            p.mb-0.text-white La causa cumple una función de control del contrato, porque permite identificar acuerdos que en apariencia son válidos, pero que en el fondo persiguen fines contrarios al orden jurídico.
        
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Cuando se estudian los contratos, no basta con identificar los elementos esenciales, consentimiento, objeto y causa. 
    
        .bg-color-11.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para que un contrato sea plenamente válido y produzca efectos jurídicos, debe cumplir también con una serie de requisitos generales de validez, sin los cuales el negocio jurídico puede ser inválido, ineficaz o susceptible de ser anulado. 
        p(data-aos="fade-left") Estos requisitos son exigidos por el ordenamiento jurídico para proteger, tanto el interés privado de los contratantes como el interés general de la sociedad:
    
    h2(data-aos="fade-left") a. Capacidad de las partes
    p La capacidad jurídica es la aptitud reconocida por la Ley para adquirir derechos y contraer obligaciones. En materia contractual, se debe verificar que todas las personas que participan en un contrato tengan la capacidad legal para obligarse válidamente. El Código Civil colombiano presume que toda persona es capaz, salvo que la Ley disponga lo contrario. Así, los mayores de edad (18 años o más) y que no estén afectados por una causal de interdicción, tienen capacidad plena para contratar.
    p.mb-5 No obstante, la Ley establece <b>incapacidades absolutas y relativas:</b>

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Incapaces absolutos
              p Son incapaces absolutos los menores de edad no emancipados y quienes por enfermedad mental no puedan expresar voluntad. No pueden celebrar contratos válidamente por sí mismos, y necesitan de un representante legal..
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Incapaces relativos
              p Son incapaces relativos aquellos que, aun teniendo alguna capacidad, requieren autorización o asistencia para ciertos actos. Por ejemplo, los menores adultos (entre 14 y 18 años) pueden celebrar ciertos contratos, pero con autorización de sus representantes.
    
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/22.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Así, por ejemplo, si un menor de 16 años vende un bien inmueble sin autorización de sus padres, ese contrato es anulable, aunque haya habido consentimiento y el objeto sea lícito. La capacidad, como requisito de validez, no se presume; debe verificarse en cada caso concreto.
    
    h2(data-aos="fade-left") b. Consentimiento libre y exento de vicios
    p.mb-5 Aunque el consentimiento ya ha sido mencionado como elemento esencial, aquí se deben examinar las condiciones para su validez. No basta con que haya un acuerdo de voluntades: ese consentimiento debe haber sido libre, consciente y sin vicios. Los vicios del consentimiento son tres: error, fuerza y dolo, y cuando se configuran, pueden hacer que el contrato sea anulable por la parte afectada.

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/23.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Error") Se presenta cuando una de las partes se equivoca sobre un elemento esencial del contrato. Por ejemplo, si usted compra un lote creyendo que tiene uso comercial, y resulta que solo tiene uso agrícola, puede alegar error si esta condición fue determinante para contratar.
          p(numero="2" titulo="Fuerza") Se configura cuando el consentimiento fue arrancado mediante amenazas o presión ilegítima. Si una persona firma un contrato bajo amenaza de daño físico o familiar, no puede hablarse de voluntad libre.
          p(numero="3" titulo="Dolo") Implica engaño o manipulación intencional por parte de una de las partes para obtener el consentimiento del otro. Si se oculta deliberadamente una información relevante (como problemas legales sobre el bien vendido), hay dolo.
    
    p.mb-4 La presencia de cualquiera de estos vicios, da lugar a la nulidad relativa del contrato, que podrá ser solicitada judicialmente por la parte perjudicada dentro del término legal.

    h2.mb-5(data-aos="fade-left") c. Objeto lícito

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Como ya se explicó en los elementos esenciales, el contrato debe tener un objeto válido, pero aquí se insiste en su licitud como requisito indispensable de validez.
        p El objeto de un contrato no puede ser:
    
        .bg-color-15(data-aos="fade-left")
          .row.align-items-end
            .col-lg-auto.order-2
              img.d-flex(src="@/assets/curso/tema1/25.svg", style="max-width: 135px").mx-auto
            .col-lg.order-1.px-5.py-3
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-16
                  p.mb-0 Contrario a la Ley.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-16
                  p.mb-0 Contrario al orden público.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-16
                  p.mb-0 Contrario a las buenas costumbres.
        .bg-color-4(data-aos="fade-left").p-5
          p.mb-0 De manera práctica, un contrato cuyo objeto sea pagar por la comisión de un delito, la trata de personas o el cobro de intereses usurarios, es nulo por objeto ilícito. Aunque las partes hayan consentido libremente y el acto parezca formalmente válido, la ilicitud del objeto vicia el contrato desde su raíz. También se considera ilícito el objeto cuando va en contra de disposiciones específicas. Por ejemplo, vender tierras a extranjeros en zonas de frontera, cuando la Ley lo prohíbe, constituye un objeto ilícito.
    
    h2(data-aos="fade-left") d. Causa lícita
    p La causa se refiere al motivo jurídico que impulsa a cada parte a contratar. Aunque no es un elemento explícitamente regulado por el Código Civil colombiano, sí se ha reconocido su relevancia a través de la doctrina y la jurisprudencia.
    p.mb-5 La causa debe ser:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Real
              p.mb-0 Es decir, debe existir efectivamente.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/27.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Lícita
              p.mb-0 No puede perseguir fines contrarios a la Ley o al orden público.
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/28.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Por ello, si se firma un contrato de compraventa, pero en realidad es una simulación para esconder un bien de un embargo, la causa real del contrato es ilícita, y por tanto el contrato puede ser declarado nulo. La causa también permite detectar contratos que, aunque aparentan legalidad, en realidad esconden un fin ilícito. Por ejemplo, un contrato de préstamo que oculta una operación de lavado de activos. Aquí, aunque el objeto (el dinero) sea lícito, y el consentimiento parezca válido, la causa real e ilícita invalida el contrato.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Diferencia entre elementos y requisitos

    p.mb-4 En el Derecho Civil, es fundamental distinguir entre los elementos y los requisitos del contrato, dado que aunque ambos conceptos están relacionados, cumplen funciones diferentes dentro del negocio jurídico. 

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Elementos del contrato
              p Son los componentes esenciales que permiten su existencia: consentimiento, objeto y causa. Si alguno de estos elementos falta, simplemente no hay contrato; el acuerdo no llega a configurarse jurídicamente y, por tanto, no produce efectos. Por ejemplo, si no hay consentimiento entre las partes o el objeto es inexistente, el contrato no puede considerarse celebrado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/30.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Requisitos del contrato
              p Son condiciones legales que deben cumplirse para que el contrato sea válido. Su incumplimiento no impide la existencia del contrato, pero sí puede acarrear su nulidad o anulabilidad. Entre estos requisitos se encuentran la capacidad legal de las partes, la licitud del objeto y de la causa, y que el consentimiento esté libre de vicios como el error, la fuerza o el dolo. 

    .bg-full-width.bg-color-11
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Así, mientras los elementos hacen que el contrato nazca, los requisitos garantizan que nazca válido ante el ordenamiento jurídico. Entender esta diferencia le permitirá identificar cuándo un contrato simplemente no existe y cuándo existe, pero puede ser impugnado, lo cual tiene profundas implicaciones en la práctica jurídica.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/34185 " target="_blank" rel="noopener noreferrer") Acedo Penco, Á. (2008). Contratos y responsabilidad civil: cuestiones jurídicas actuales: ( ed.). Dykinson. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/123148 " target="_blank" rel="noopener noreferrer") Marin, L. & Cordero,E. (2018). Lecciones de derecho civil: Derecho de obligaciones y contratos en general (3a. ed.) Editorial: Difusora Larousse - Editorial Tecnos. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://openaccess.uoc.edu/bitstream/10609/148551/4/Modulo4_TeoriaGeneralDelContrato.pdf " target="_blank" rel="noopener noreferrer") Universitat Oberta de Catalunya (UOC). (s.f.). Módulo 4. Teoría general del contrato. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/V5RGX_jQHww?si=iyee4WeFNBZXkgNM " target="_blank" rel="noopener noreferrer") Díaz, C. (2018, 10 de noviembre) Conoce la nulidad relativa.  Todo lo que debes saber. Derecho [Vídeo] Youtube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
