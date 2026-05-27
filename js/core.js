
// ========================================================
// MAPA INTERACTIVO - Dunbhròn
// ========================================================
// DIMENSIONES ORIGINALES DE LA IMAGEN: 1536 x 1024 píxeles
// ========================================================
// CÓMO AÑADIR NUEVOS PUNTOS:
// * xPx: coordenada X en píxeles (desde Affinity)
// * yPx: coordenada Y en píxeles (desde Affinity)
// * nombre: texto que aparece en el tooltip
// * descripcionCorta: descripción adicional
// * pdfUrl: ruta al archivo PDF (opcional)
// * iconoTipo: tipo de icono (ver lista más abajo)
// ========================================================


const puntos = [

    // ==================== DISTRITOS ====================

    {
        xPx: 527,
        yPx: 247,
        nombre: `Distrito «Casco antiguo»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> An Seann Baile<br><strong>Pronunciación:</strong> /<em>an SHOWN BAHL-yeh</em>/<br><strong>En inglés:</strong> Old Town<br><br>
		El Casco Antiguo es la postal que vende Dunbhròn al mundo: calles empedradas que serpentean entre edificios de piedra amarilla del siglo XI, dominados por la silueta imponente del Castillo de Dunbhròn (la «Tristeza») y las agujas de la Catedral gótica de Santa Euna. Su plaza central bulle cada mañana con el mercado diario, y en verano se llena de puestos medievales y turistas con cámaras. Pero bajo esa fachada de libra esterlina y historia viva, late un corazón profundamente conservador y desconfiado. Aquí, la amabilidad de los lugareños es directamente proporcional a lo mucho que encajes en su cuadriculada visión del mundo. Si no lo haces, notarás el frío silencio, las miradas de reojo y la ausencia de sonrisas al servirte una pinta. Es el distrito de los «de toda la vida», y ellos lo saben.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 1141,
        yPx: 518,
        nombre: `Distrito «Costa Nueva»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Oirthir Nuadh<br><strong>Pronunciación:</strong> /<em>OR-heer NOO-agh</em>/<br><strong>En inglés:</strong> New Coast
		<br><br>
		Costa Nova es la cara moderna y aspiracional de Dunbhròn: un paseo marítimo flanqueado por hoteles de lujo, chiringuitos de playa, terrazas acristaladas y el imponente acuario con túneles submarinos. Su playa de arena oscura —volcánica en su origen, exótica en su aspecto— atrae a turistas y lugareños en busca de sol (cuando lo hay) y de vistas al Mar del Norte. Es el distrito del «ocio distinguido»: aquí se viene a ver y ser visto, a gastar dinero y a olvidar por unas horas que al otro lado de la colina está el Dunbhròn real, el de la piedra amarilla y los callejones que huelen a cerveza rancia. Los residentes permanentes son una mezcla de profesionales liberales, jubilados adinerados y personal de hostelería que vive en pisos pequeños. El ambiente es cosmopolita, relajado durante el día y ligeramente ostentoso por la noche. Pero bajo las sombrillas de colores y el olor a bronceador, también hay sitio para el misterio: el mar no perdona, y las leyendas de ahogados, sirenas y naufragios flotan en el ambiente cada vez que la niebla se adentra en la costa.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 778,
        yPx: 466,
        nombre: `Distrito «El Corazón Roto»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Cridhe Briste<br><strong>Pronunciación:</strong> /<em>KREE-yeh BREES-tchuh</em>/<br><strong>En inglés:</strong> Broken Heart
		<br><br>
		El Corazón Roto es el distrito que nunca duerme... excepto en invierno, cuando parece un barrio fantasma. Es la válvula de escape de Dunbhròn: decenas de bares, pubs, discotecas, salones de apuestas y locales de comida rápida abiertos hasta las tantas. Durante el verano, sus calles se llenan de turistas, estudiantes y jóvenes locales que buscan emborracharse, ligar o simplemente olvidar que al día siguiente hay que madrugar. En invierno, la marea humana se retira y solo quedan los habituales: alcohólicos funcionales, noctámbulos de corazón y algún que otro desesperado. Es ruidoso, sucio, caótico y, a veces, violento. Las peleas son frecuentes, las denuncias por agresión también, y la policía patrulla con mano dura pero sin demasiada esperanza. Es el distrito que Dunbhròn prefiere no mostrar en sus folletos turísticos, pero que todo el mundo conoce. Y bajo el olor a cerveza rancia y ambientador barato, se esconde un latido sobrenatural que pocos saben leer.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 937,
        yPx: 541,
        nombre: `Distrito «El Barrio Gótico»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> An Ceathrámh Gòtach<br><strong>Pronunciación:</strong> /<em>an KYAH-rav GO-tach</em>/<br><strong>En inglés:</strong> Gothic Quarter
		<br><br>
		El Barrio Gótico es el rincón olvidado de la ciudad donde la piedra es negra, las calles son laberínticas y la luz del sol apenas se filtra entre los tejados puntiagudos. Aquí no vienen los turistas por error: vienen atraídos por la promesa de lo oculto, lo viejo y lo incómodo. Librerías que huelen a papel podrido, tiendas esotéricas con calderos humeantes, y un antiguo hospital psiquiátrico abandonado que se alza en el centro del distrito como un recordatorio de que la locura tiene muchas formas. Durante el día, el Barrio Gótico es sombrío pero tranquilo: estudiantes de filosofía, artistas marginales y buscadores de grimorios recorren sus calles con paso pausado. Al anochecer, las persianas se cierran, los pocos vecinos que quedan se encierran en sus casas, y algo más que la niebla comienza a moverse entre los callejones —o eso cuentan los más valientes (o locos). Es el distrito de las brujas, los vampiros y los que saben demasiado. Y es, sin duda, el favorito de los amantes del misterio... y también de sus víctimas.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 999,
        yPx: 667,
        nombre: `Distrito «Puerto Bajo»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Port Ìosal<br><strong>Pronunciación:</strong> /<em>port EE-oh-sal</em>/<br><strong>En inglés:</strong> Low Harbour
		<br><br>
		El Puerto Bajo es la tripa de Dunbhròn, el distrito que la ciudad busca esconder "bajo el felpudo". Aquí no hay piedra amarilla ni paseos marítimos: hay almacenes portuarios oxidados, astilleros semiderruidos, fábricas textiles humeantes y bloques de viviendas sociales que el viento del norte golpea sin piedad. El olor a gasoil, pescado podrido y humedad impregna cada calle. Es pobre, ruidoso y, para muchos, peligroso. Pero también es el motor económico real de la ciudad: los barcos pesqueros siguen atracando, las fábricas siguen produciendo a duras penas, y el contrabando —tabaco, alcohol, drogas, y cosas más extrañas— mantiene a flote a gran parte de la población. Los residentes son trabajadores portuarios, obreros, familias de varias generaciones atrapadas en la pobreza, y una creciente comunidad de inmigrantes (europeos del este, asiáticos y africanos) que hacen los trabajos que nadie quiere. Es el distrito de los que no tienen voz, y también el de los que no quieren ser vistos. Se dice que bajo sus calles de asfalto agrietado se esconde una red de túneles, alcantarillas y sótanos que conectan con el Barrio Gótico, y a través de ellos, con algo mucho más antiguo. Aunque nadie se ha atrevido a corroborarlo nunca.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 535,
        yPx: 531,
        nombre: `Distrito «Los Prados»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Na Linntean<br><strong>Pronunciación:</strong> /<em>na LEEN-tchen</em>/<br><strong>En inglés:</strong> The Meadows
		<br><br>
		Los Prados es el distrito de la clase trabajadora respetable. El lugar donde la gente normal vive, trabaja y cría a sus hijos sin aspavientos. No tiene la belleza histórica del Casco Antiguo, el brillo turístico de Costa Nova, ni el caos del Corazón Roto. Es un barrio de adosados con jardincillo, centros comerciales funcionales, polideportivos públicos y calles arboladas que huelen a hierba recién cortada en verano y a hojas mojadas en otoño. Es seguro, ordenado y, para muchos, aburrido. Los residentes son profesionales de clase media (profesores, administrativos, pequeños comerciantes, funcionarios), familias jóvenes que huyeron del centro y jubilados que vendieron sus casas en otros barrios para vivir tranquilos. Es el distrito que Dunbhròn muestra a los inversores: moderno, estable y aburrido. Pero incluso en la calma más plácida, las grietas dejan ver algo más.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 182,
        yPx: 806,
        nombre: `Distrito «Las Laderas»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Na Leòidean<br><strong>Pronunciación:</strong> /<em>na LYAW-tchen</em>/<br><strong>En inglés:</strong> The Slopes
		<br><br>
		Las Laderas es el distrito de los que trabajan con las manos. Un barrio residencial de clase trabajadora construido en las empinadas calles que suben desde Los Prados hacia la Cima de los Vientos, aunque sin llegar a la cima. Aquí no hay hoteles de lujo ni centros comerciales relucientes: hay casas adosadas de piedra gris, pequeños comercios de barrio, escuelas públicas y vistas parciales al valle cuando la niebla lo permite. Es un lugar tranquilo, incluso apacible, pero con una dureza silenciosa: la gente madruga, trabaja, cuida de sus mayores y no se queja. Los jóvenes suelen marcharse a la universidad o a otros distritos, y los que se quedan heredan los trabajos de sus padres: la construcción, el transporte, los pequeños talleres. Es el distrito de los olvidados, pero también el de los orgullosos. Y en sus límites superiores, donde las calles se convierten en caminos de tierra y las farolas escasean, la ciudad se desdibuja y el bosque del Robledal Negro susurra al oído de los que se acercan demasiado.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 293,
        yPx: 553,
        nombre: `Distrito «Los Jardines»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Na Gàrraidhean<br><strong>Pronunciación:</strong> /<em>na GA-ree-an</em>/<br><strong>En inglés:</strong> The Gardens
		<br><br>
		Los Jardines es el distrito de la clase media-alta que huye del centro sin llegar a la élite de la cima. Un barrio residencial de adosados con jardín privado, calles arboladas y silenciosas, colegios concertados y pequeños comercios de barrio caros. Es limpio, ordenado, seguro y, para muchos, asfixiantemente aburrido. Sus residentes son profesionales liberales (médicos, abogados, arquitectos, pequeños empresarios), familias que quieren lo mejor para sus hijos, y jubilados con muy buenas pensiones. La violencia callejera es casi inexistente. Los índices de criminalidad son los más bajos de la ciudad —a excepción de la Cima de los Vientos—, y los problemas se resuelven con el boca a boca o, en última instancia, con denuncias al ayuntamiento. Pero bajo esa fachada de privacidad y buenas maneras, Los Jardines es también un distrito de secretos bien guardados, frustraciones silenciosas y una fragilidad nerviosa que estalla en pequeños dramas domésticos, chismorreos crueles y una desconfianza apenas disimulada hacia todo lo que venga de fuera de sus límites asfaltados.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 85,
        yPx: 767,
        nombre: `Distrito «La Colina del Conocimiento»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd an Fhoghlaim<br><strong>Pronunciación:</strong> /<em>ARD an OK-lam</em>/<br><strong>En inglés:</strong> Hill of Learning
		<br><br>
		La Colina del Conocimiento es el distrito del saber, la juventud y el futuro. Aquí se alza la Universidad «James Watt», sus residencias de estudiantes, la Biblioteca Central de Dunbhròn, el Hospital Universitario «Alexander Fleming», el Museo Real de Dunhbròn y decenas de cafeterías, bares y pequeños comercios que viven al ritmo de los semestres académicos. Es un distrito vibrante, multicultural y ligeramente caótico durante el curso, pero que se vacía y entristece en verano, cuando los estudiantes vuelven a sus casas y solo quedan los profesores, el personal administrativo y los alumnos de posgrado que alargan su estancia. Es el lugar más joven de la ciudad (la media de edad baja drásticamente en septiembre) y también el más abierto a nuevas ideas, lo que lo convierte en un foco de tensiones culturales con los distritos más tradicionales. Bajo su bullicio intelectual, la Colina guarda también sus propios secretos: laboratorios cerrados, bibliotecas con fondos restringidos, y una relación incómoda con el bosque que se extiende al oeste, donde los estudiantes más intrépidos (o temerarios) celebran rituales de iniciación que a veces salen mal.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
	{
        xPx: 389,
        yPx: 453,
        nombre: `La Cima de los Vientos`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Mullach nam Gaoth<br><strong>Pronunciación:</strong> /<em>MU-lach nam GWEH</em>/<br><strong>En inglés:</strong> Peak of the Winds
		<br><br>
		La Cima de los Vientos es el distrito más exclusivo, elevado y codiciado de Dunbhròn. Literal y figurativamente. Por encima de Los Jardines, se alza este barrio de la élite. Donde el dinero no es un problema sino una condición de entrada. El nombre proviene de las fuertes ráfagas que azotan las colinas, a las que los vecinos llaman «el rugido de los vientos». Aunque todas las mansiones cuentan con barreras acústicas y cortavientos. Las calles son anchas, serpenteantes y están bordeadas de cuidados y verdes árboles centenarios. Aquí no hay adosados ni bloques de pisos de protección oficial; hay mansiones, urbanizaciones de lujo, centros comerciales privados y todos los servicios que una comunidad de élite pueda necesitar. La Cima de los Vientos es una ciudad sobre la ciudad que, suspendida en la altura, mira hacia abajo con la indiferencia que los ricos reservan para el proletariado. El resto de Dunbhròn la mira con resentimiento, admiración y deseo. Los estudiantes de sociología escriben tesis sobre segregación urbana con esta colina como ejemplo paradigmático. Aunque nunca consiguen permiso para hacer trabajo de campo.`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },

    // ==================== CASCO ANTIGUO ====================

	// ==================== BAR
	
	{
        xPx: 716,
        yPx: 326,
        nombre: `Bar «El Pozo de los Susurros»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bar «Tobar nan Cogar»<br><strong>Pronunciación:</strong> /<em>Bar TO-par nan KO-gar</em>/<br><strong>En inglés:</strong> Whispering Well Bar<br><br>
		El «Pozo de los Susurros» es un bar de toda la vida, de esos que parecen haber estado ahí desde que el mundo es mundo. Está escondido en una calle secundaria del Casco Antiguo y pasa desapercibido para los turistas: su fachada de piedra amarilla y su pequeña entrada de madera oscura no pueden competir con los pubs más llamativos. Pero para los vecinos del distrito, es un segundo hogar. Su nombre no es casual: en el centro del local hay un antiguo pozo seco, protegido por un círculo de piedra y una reja de hierro que le da un carácter muy especial. La especialidad son las cervezas de barril (lagers y ales escocesas), los vinos de la casa y el vermut, además de las tapas gratis con la consumición. El ambiente es tranquilo, de conversaciones susurradas —de ahí el apodo—, y la clientela, mayoritariamente local, se conoce desde hace años. Es el sitio ideal para escuchar los chismes del barrio… siempre que sepas escuchar con discreción.
		<br><br>
		<strong>Tipo:</strong> Bar tradicional<br>
		<strong>Horario:</strong> 12:00 - 02:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (taburetes en barra y mesas altas)<br>
		<strong>Especialidad:</strong> Cerveza de barril (lagers y ales escocesas), vinos de la casa y vermut.<br>
		<strong>Juegos:</strong> Dardos y máquinas tragaperras.<br>
		<strong>Ambiente:</strong> Tradicional. Destaca una barra de madera, paredes de piedra vista y un pozo seco en el centro del local. La clientela susurra más que habla alto.<br>
		<strong>Música:</strong> Rock clásico suave a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos, adultos locales y trabajadores de la zona.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuenta con pantallas que emiten noticias (no deportes).<br>
		✔️ Es famoso por sus "susurros": los chismes del barrio que circulan entre parroquianos.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
    {
        xPx: 793,
        yPx: 329,
        nombre: `Bar «La Cuerda del Ahorcado»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bar «Ropaidh an Crochaidh»<br><strong>Pronunciación:</strong> /<em>Bar RO-pay an JRO-ya</em>/<br><strong>En inglés:</strong> Hangman's Rope Bar<br><br>
		«La Cuerda del Ahorcado» es un bar temático que juega con la atracción por lo macabro y lo legendario. Está escondido en una calle empedrada que asciende desde la plaza central hacia el norte. Su fachada de piedra negra —diferente a la amarilla del resto del Casco Antiguo— y su cartel de madera con una soga dibujada llaman la atención de los turistas que buscan experiencias «oscuras». En el interior, el ambiente es deliberadamente tenebroso: paredes de piedra oscura, iluminación casi nula, y una soga de cáñamo que cuelga del techo, supuestamente la misma con la que ahorcaron a un hombre hace siglos. La especialidad son los whiskies escoceses (más de 50 marcas, desde blends asequibles hasta single malts de ediciones limitadas) y las cervezas de importación (belgas, alemanas, checas). No sirven comida caliente, solo frutos secos y patatas fritas de bolsa. La música es rock duro o metal a volumen alto, y la clientela, mayoritariamente joven y forastera, busca una noche diferente, alejada de los pubs tradicionales y familiares del distrito.
		<br><br><strong>Tipo:</strong> Bar temático (histórico)<br>
		<strong>Horario:</strong> 16:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Whiskies escoceses (más de 50 marcas) y cervezas de importación.<br>
		<strong>Juegos:</strong> Dardos y máquinas tragaperras.<br>
		<strong>Ambiente:</strong> Oscuro y de marcado carácter temático. Una soga cuelga del techo como principal elemento decorativo, evocando la leyenda local de un ahorcado.<br>
		<strong>Música:</strong> Rock duro o metal, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes, turistas en busca de experiencias "oscuras" y curiosos en general.<br><br>
		<strong>Notas:</strong><br>
		✔️ El whisky se sirve en vasos de cristal grueso.<br>
		✔️ No se sirve comida caliente. Solo frutos secos y patatas fritas de bolsa.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
    {
        xPx: 799,
        yPx: 253,
        nombre: `Bar «El Violín del Diablo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bar «Fidheall an Diabhail»<br><strong>Pronunciación:</strong> /<em>Bar FEE-al an JEE-val</em>/<br><strong>En inglés:</strong> Devil's Fiddle Bar<br><br>
		«El Violín del Diablo» es un bar de copas con alma rockera, escondido en una calle empinada que asciende desde la plaza central hacia el norte. Su fachada de ladrillo visto y su cartel de madera con un violín roto atraen a una clientela joven, alternativa y ruidosa: rockeros, moteros y noctámbulos que buscan música alta, copas bien servidas y un ambiente sin tapujos. En su interior, las paredes de ladrillo y las vigas de madera están decoradas con violines rotos y pentagramas tatuados en la piedra, y hay una pequeña peña para música en vivo cuando se organizan conciertos. La especialidad son los cócteles, tanto clásicos como de autor, y las ginebras premium, aunque también tienen cerveza de barril y una selección de whiskies. No sirven comida, solo frutos secos y patatas de bolsa. Es el antro perfecto para los que quieren rock duro, volumen alto y una noche que puede acabar en pelea o en amistad para siempre.
		<br><br><strong>Tipo:</strong> Bar de copas / Rock<br>
		<strong>Horario:</strong> 18:00 - 04:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cócteles (clásicos y de autor) y ginebras premium.<br>
		<strong>Juegos:</strong> Billar (una mesa) y dardos.<br>
		<strong>Ambiente:</strong> Caverna de ladrillo visto, decorada con violines rotos y pentagramas. Los fines de semana no es raro que se produzcan altercados.<br>
		<strong>Música:</strong> Rock, punk y rockabilly, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Rockeros, moteros y gente de la noche.<br><br>
		<strong>Notas:</strong><br>
		✔️ No sirven comida.<br>
		✔️ El local es pequeño y se llena rápidamente.<br>
		✔️ La barra es larga.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 577,
        yPx: 323,
        nombre: `Bar «La Cruz de Huesos»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Crois nan Cnàmhan»<br><strong>Pronunciación:</strong> /KROSH nan KNA-van/<br><strong>En inglés:</strong> Cross of Bones Bar<br><br>
		«La Cruz de Huesos» es un bar alternativo de marcado carácter gótico y ocultista, escondido en una callejuela sombría del Casco Antiguo. Su fachada de piedra negra —similar a la de «La Cuerda del Ahorcado», pero más antigua y deteriorada— y su cartel de madera con una calavera atraen a una clientela muy específica: góticos, amantes del misterio, estudiantes de filosofía y turistas en busca de lo escabroso. En el interior, la iluminación es casi exclusivamente a la luz de las velas, velas reales, no eléctricas. Las paredes lucen huesos pintados y telarañas falsas, y una cruz de madera negra adornada con réplicas de huesos preside la sala principal. La especialidad son las cervezas artesanas en botella, la absenta y los licores oscuros. No sirven comida caliente. El ambiente es íntimo, sombrío y propicio para las conversaciones susurradas. Es el refugio de los que se sienten más cómodos en la penumbra.
		<br><br><strong>Tipo:</strong> Bar alternativo / Gótico<br>
		<strong>Horario:</strong> 17:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza artesana (en botella), absenta y licores oscuros.<br>
		<strong>Juegos:</strong> Dardos, ubicados en una esquina apartada.<br>
		<strong>Ambiente:</strong> Muy oscuro y teatral. Las paredes lucen huesos pintados y telas de araña falsas, mientras las velas iluminan el conjunto.<br>
		<strong>Música:</strong> Rock gótico, post-punk y darkwave, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Góticos, alternativos y amantes del misterio.<br><br>
		<strong>Notas:</strong><br>
		✔️ La iluminación es casi exclusivamente a la luz de las velas.<br>
		✔️ No se admiten reservas.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 974,
        yPx: 380,
        nombre: `Bar «La Losa Gris»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Leac Liath»<br><strong>Pronunciación:</strong> /an LYAK LIA/<br><strong>En inglés:</strong> The Grey Slab Bar<br><br>
		«La Losa Gris» es un bar de barrio de esos de toda la vida que huelen a cerveza y a fritura, donde los vecinos se conocen por su nombre y los turistas solo entran por error. Está situado en una calle ancha del este del Casco Antiguo. Su fachada de piedra gris —de ahí el nombre— y su letrero de neón desgastado pasan desapercibidos entre las tiendas de ultramarinos y las viviendas. Es el refugio de los trabajadores, los jubilados y los aficionados al deporte que quieren ver el partido sin pagar el precio de un pub del centro. Su especialidad es la cerveza de barril económica, el vino de cartón y las tapas (tortilla, jamón, queso, calamares). Las pantallas siempre emiten deportes: fútbol, rugby, dardos profesionales. El ambiente es tranquilo pero animado, con tertulias de barrio y algún que otro cliente que se duerme en la barra. Es, en esencia, el antídoto contra la masificación turística  del Casco Antiguo.
		<br><br><strong>Tipo:</strong> Bar de barrio / Deportivo<br>
		<strong>Horario:</strong> 11:00 - 01:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril (económica), vino de cartón y tapas: tortilla, jamón y queso.<br>
		<strong>Juegos:</strong> Billar, futbolín, dardos y máquinas tragaperras.<br>
		<strong>Ambiente:</strong> Sencillo y sin lujos, con una gran barra de fórmica. Es el auténtico bar de los vecinos.<br>
		<strong>Música:</strong> Pop o rock suave, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos del barrio, obreros y jubilados.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las pantallas siempre emiten deportes (fútbol, rugby, dardos profesionales).<br>
		✔️ Es el único bar del barrio construido en piedra.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 678,
        yPx: 375,
        nombre: `Bar «La Pipa del Marinero»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Pìob a’ Mharaiche»<br><strong>Pronunciación:</strong> /PII-op a VAR-ij-e/<br><strong>En inglés:</strong> The Sailor’s Pipe Bar<br><br>
		«La Pipa del Marinero» es un bar temático de ambiente marinero, escondido en una calle estrecha y empinada que desciende hacia el sur del Casco Antiguo. Su fachada de piedra amarilla envejecida y su cartel de madera con una pipa humeante atraen a vecinos, a marineros de tierra adentro y a turistas que buscan un lugar con carácter, sin artificios góticos ni deportivos. En el interior, las paredes de piedra vista están cubiertas de redes de pesca, mapas antiguos, un timón y pipas de barro colgando del techo. El dueño es un excéntrico coleccionista de pipas procedentes de todo el mundo, que están expuestas en vitrinas. La especialidad son los rones de diferentes países, la cerveza oscura y el pescado en conserva (anchoas, mejillones, sardinas). No sirven comida caliente, pero sí buenas conservas y pan. La música es folk celta y marinero, a volumen medio, y el ambiente es tranquilo, con una clientela que charla en voz baja y respeta el carácter náutico del lugar.
		<br><br>
		<strong>Tipo:</strong> Bar temático (marinero)<br>
		<strong>Horario:</strong> 12:00 - 02:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Ron procedente de diferentes países, cerveza oscura y pescado en conserva (anchoas, mejillones).<br>
		<strong>Juegos:</strong> Dardos.<br>
		<strong>Ambiente:</strong> Decorado con redes, mapas, un timón y pipas de barro colgando del techo. El local huele a sal y a madera envejecida.<br>
		<strong>Música:</strong> Folk celta y marinero, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos, marineros de tierra adentro y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ El dueño posee una colección privada de pipas procedentes de todo el mundo, expuestas en vitrinas.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 958,
        yPx: 267,
        nombre: `Bar «La Cabra Montesa»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Gobhar na Beinne»<br><strong>Pronunciación:</strong> /GO-ar na BEN-ye/<br><strong>En inglés:</strong> The Mountain Goat Bar<br><br>
		«La Cabra Montesa» es un bar de campo y montaña, un rincón rural en medio del Casco Antiguo. Está situado en la parte más alta del distrito, en una calle empinada que baja hacia la Catedral de Santa Euna. Su fachada de piedra amarilla y su cartel de madera con una cabra saltando entre peñascos atraen a cazadores, senderistas, amantes de la naturaleza y vecinos mayores que buscan un ambiente rústico y auténtico, lejos del bullicio turístico. En el interior, las paredes de piedra están cubiertas de pieles de animales (falsas y reales), astas de ciervo y una chimenea enorme que arde en invierno. Preside la sala un barril de cerveza gigante decorativo, y en un rincón hay una vitrina con escopetas antiguas, descargadas y con seguro. La especialidad son las cervezas de montaña (elaboradas en las Highlands), los vinos de la zona y las chacinas y quesos de cabra curados. No tienen cocina caliente, pero sí buenas tablas de embutidos. La música es country, folk americano y música de los Apalaches, a volumen medio, y el ambiente es cálido, acogedor y pausado.
		<br><br><strong>Tipo:</strong> Bar de campo / Montaña<br>
		<strong>Horario:</strong> 10:00 - 00:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de montaña, vinos de la zona, chacinas y queso de cabra curado.<br>
		<strong>Juegos:</strong> Dardos.<br>
		<strong>Ambiente:</strong> Rústico y acogedor. Pieles de animales adornan las paredes y preside la sala un barril de cerveza gigante. En invierno, la chimenea permanece encendida.<br>
		<strong>Música:</strong> Country y folk americano, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Cazadores, senderistas y personas amantes de la naturaleza.<br><br>
		<strong>Notas:</strong><br>
		✔️ En invierno, la chimenea está encendida todo el día.<br>
		✔️ Dispone de terraza exterior con vistas a la calle.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 827,
        yPx: 414,
        nombre: `Bar «El Tonel de la Galia»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Am Baraille Gàidhealach»<br><strong>Pronunciación:</strong> /am BA-rai-ye GAI-yal-aj/<br><strong>En inglés:</strong> The Gallic Barrel Bar<br><br>
		«El Tonel de la Galia» es un bar de copas con una fuerte temática celta. Está situado en una calle ancha y concurrida del Casco Antiguo norte. Su fachada de piedra amarilla y su cartel de madera con un tonel y un arpa gaélica atraen a aficionados a la cultura celta, estudiantes, grupos de amigos y turistas que buscan un ambiente animado pero sin el caos del Corazón Roto. En el interior, las paredes de piedra están decoradas con banderas celtas (de Escocia, Irlanda, Bretaña, Galicia, Cornualles e Isla de Man), un arpa gaélica decorativa en una esquina y toneles de madera convertidos en mesas. La especialidad es la sidra natural, la cerveza irlandesa (Guinness) y el hidromiel. También sirven algo de comida: tablas de quesos, embutidos y pan de centeno. La música es folk celta (gaitas, violines, flautas) a volumen medio, y los jueves hay música en vivo con grupos de folk tradicional. El ambiente es festivo pero ordenado, con mucha conversación y risas.
		<br><br><strong>Tipo:</strong> Bar de copas / Celta<br>
		<strong>Horario:</strong> 19:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Sidra natural, cerveza irlandesa (Guinness) e hidromiel.<br>
		<strong>Juegos:</strong> Billar (una mesa pequeña).<br>
		<strong>Ambiente:</strong> Decorado con toneles, banderas celtas y un arpa gaélica en una esquina. Desprende una sensación de hermandad.<br>
		<strong>Música:</strong> Folk celta con gaitas y violines, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Aficionados a la cultura celta, grupos de amigos y estudiantes.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los jueves hay música en vivo con grupos de folk.<br>
		✔️ La sidra se sirve en vasos anchos.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	
	// ==================== BIBLIOTECA
	
	{
        xPx: 772,
        yPx: 354,
        nombre: `Biblioteca «Santa Euna»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann ««Naoimh Euna»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan NEV E-u-na</em>/<br><strong>En inglés:</strong> St. Euna's Library<br><br>
		La Biblioteca «Santa Euna» es una pequeña biblioteca pública especializada en historia local, genealogía y folclore escocés. Está situada en una calle tranquila del Casco Antiguo, a pocos minutos de la Catedral de Santa Euna, de la que toma su nombre. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVI, con una fachada sencilla y un letrero de bronce apenas visible. Es un lugar de culto para los investigadores, los aficionados a la genealogía, los estudiantes de primaria y secundaria y los vecinos mayores que buscan tranquilidad y acceso a archivos muy concretos que no se encuentran en la Biblioteca Central de la Colina del Saber. Su fondo es reducido pero muy especializado, con una sección de manuscritos antiguos (algunos del siglo XVII) y una colección de mapas históricos de Dunbhròn y sus alrededores. El ambiente es silencioso, ordenado y ligeramente anticuado, con olor a papel viejo y cera. El bibliotecario, un hombre mayor llamado Alasdair, es conocido por su mal carácter, pero también por su sabiduría: si logras ganarte su confianza, te abrirá los archivos restringidos, esos documentos que la biblioteca no muestra al público.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },
	
	// ==================== CAFÉ - BAR
	
	{
        xPx: 799,
        yPx: 399,
        nombre: `Cafetería «El Cuervo Negro»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Fhitheach Dubh»<br><strong>Pronunciación:</strong> /an I-jej DUV/<br><strong>En inglés:</strong> The Black Raven Café<br><br>
		«El Cuervo Negro» es una cafetería pequeña y tranquila, situada en una calle adoquinada del Casco Antiguo, a pocos metros de la plaza central. Su fachada de piedra amarilla y su cartel de madera con un cuervo posado en una rama atraen a turistas, trabajadores de la zona y algún que otro vecino que busca un buen café y un ambiente relajado. Es una de las pocas cafeterías del distrito que no cierra a media tarde, y su wifi gratuito la convierte en un refugio para viajeros con portátil y estudiantes de las cercanías. La especialidad es el café de especialidad (de importación, tostado medio), la bollería casera (cruasanes, napolitanas, bizcochos) y los bocadillos de jamón y queso. El ambiente es acogedor, con mesas de madera y paredes de piedra vista, y suena jazz suave o bossa nova a volumen meramente ambiental. No es un lugar para charlas ruidosas; es más bien un remanso de paz en medio del bullicio turístico.
		<br><br>
		<strong>Tipo:</strong> Cafetería<br>
		<strong>Horario:</strong> 08:00 - 20:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Alta variedad de cafés (de importación incluso), bollería casera y bocadillos de jamón y queso.<br>
		<strong>Ambiente:</strong> Tranquilo. Con paredes de piedra vista y mesas de madera. Huele a café recién molido.<br>
		<strong>Música:</strong> Jazz suave / bossa nova a volumen meramente ambiental.<br>
		<strong>Clientela habitual:</strong> Turistas y trabajadores de la zona.<br><br>
		<strong>Notas:</strong><br>
		✔️ Wifi gratis<br>
		✔️ No admite reservas.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 727,
        yPx: 348,
        nombre: `Cafetería «El Viejo Reloj»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Seann Chloc»<br><strong>Pronunciación:</strong> /an SHAUN JLOK/<br><strong>En inglés:</strong> The Old Clock Café<br><br>
		«El Viejo Reloj» es una cafetería tradicional de las que ya casi no quedan en el Casco Antiguo. Está situada en una calle tranquila, y ocupa la planta baja de un edificio de piedra amarilla del siglo XVII. Su fachada modesta y su letrero desgastado pasan desapercibidos para los turistas, pero los vecinos del distrito, los jubilados y las familias con niños pequeños la conocen bien: es el lugar donde desayunar como Dios manda. La especialidad son los desayunos ingleses completos (huevos, bacon, salchichas, judías, tostadas, té), las tostadas con mermelada casera y el té de hojas sueltas, servido en tetera de porcelana. El ambiente es acogedor, con un reloj de pared antiguo que da la campanada cada hora, y la clientela es mayoritariamente local y de confianza. No es un sitio para turistas impacientes o que busquen wifi —no tienen—. Es un remanso de tranquilidad, rutina y tradición.
		<br><br>
		<strong>Tipo:</strong> Cafetería<br>
		<strong>Horario:</strong> 07:30 - 21:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Desayunos ingleses completos, tostadas con mermelada casera y té de hojas sueltas.<br>
		<strong>Ambiente:</strong> Acogedor, con un reloj de pared antiguo que da la hora cada hora. Suena a campanilla.<br>
		<strong>Música:</strong> Clásica suave / piano a modo de música ambiental.<br>
		<strong>Clientela habitual:</strong> Jubilados, familias con niños pequeños y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ El té lo sirven en tetera de porcelana.<br>
		✔️ Tienen bizcochos caseros para llevar.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 916,
        yPx: 255,
        nombre: `Cafetería «La Rosa Oculta»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Ròs Falaichte»<br><strong>Pronunciación:</strong> /an ROOS fa-LAJ-che/<br><strong>En inglés:</strong> The Hidden Rose Café<br><br>
		«La Rosa Oculta» es una tetería íntima y elegante, escondida en una calle secundaria del Casco Antiguo. Su fachada de piedra amarilla y su discreto cartel de madera con una rosa roja pasan desapercibidos para los turistas. Pero los vecinos del distrito, las parejas, los grupos de amigas y la gente que busca tranquilidad conocen su reputación: es el lugar donde tomar una infusión de calidad, té de hojas sueltas de todo el mundo, chocolate caliente artesano y pasteles veganos en un ambiente acogedor y silencioso. La decoración combina paredes empapeladas de rosas, lámparas de papel y sofás de terciopelo, con una pequeña terraza interior acristalada donde crecen plantas colgantes. No hay wifi, ni música alta, ni prisas. Es un refugio para los que quieren desconectar del mundo exterior.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Tetería<br>
		<strong>Horario:</strong> 10:00 - 22:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Infusiones, tés procedentes de diversas regiones del mundo, pastelería fina y tartas caseras.<br>
		<strong>Ambiente:</strong> Íntimo y acogedor. De luz tenue, paredes empapeladas de rosas y sofás de terciopelo que invitan al reposo.<br>
		<strong>Música:</strong> Ambiental o chill-out, siempre a volumen bajo, como telón de fondo discreto.<br>
		<strong>Clientela habitual:</strong> Parejas, grupos de amigas y personas que buscan un rato de tranquilidad.<br><br>
		<strong>Notas:</strong><br>
		✔️ Dispone de una pequeña terraza interior con plantas.<br>
		✔️ No se admiten grupos grandes.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 593,
        yPx: 367,
        nombre: `Cafetería «La Puerta de al Lado»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Doras Ri Taobh»<br><strong>Pronunciación:</strong> /an DO-ras ri TOV/<br><strong>En inglés:</strong> The Next Door Café<br><br>
		«La Puerta de al Lado» es una cafetería-bar de tapas funcional y rápida, situada en una calle comercial del Casco Antiguo. Su nombre no es casual: está literalmente al lado de una tienda de ultramarinos y frente a una pequeña plaza donde aparcan las furgonetas de reparto. No tiene pretensiones estéticas: es el sitio al que van los vecinos del barrio, los trabajadores de las tiendas cercanas y la gente que sale de compras para comer algo rápido, barato y contundente. La especialidad son las tapas calientes y frías (tortilla, croquetas, calamares, patatas bravas), las raciones son generosas, la cerveza de barril y el vino de la casa. El servicio es notablemente rápido, las mesas son escasas (hay más barra que mesas) y no tienen wifi para desalentar las estancias largas. El ambiente es animado pero no ruidoso, con clientes que entran, comen y se van. No es un sitio para turistas con prisas por hacer fotos; es un sitio para comer de verdad.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Bar de tapas<br>
		<strong>Horario:</strong> 09:00 - 00:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas)<br>
		<strong>Especialidad:</strong> Tapas calientes y frías, raciones generosas, cerveza de barril y vinos de la casa.<br>
		<strong>Ambiente:</strong> Animado y funcional. Cuenta con una larga barra y unas pocas mesas, concebido para comer algo rápido antes de continuar la jornada.<br>
		<strong>Música:</strong> Pop o rock suave, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos del barrio, trabajadores de la zona y personas que salen de compras.<br><br>
		<strong>Notas:</strong><br>
		✔️ No dispone de wifi, para desalentar estancias prolongadas.<br>
		✔️ El servicio es notablemente rápido.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 908,
        yPx: 396,
        nombre: `Cafetería «Bruma de Plata»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «Ceò Airgid»<br><strong>Pronunciación:</strong> /KYO AR-git/<br><strong>En inglés:</strong> Silver Mist Café<br><br>
		«Bruma de Plata» es una cafetería-pastelería elegante y luminosa, situada en una calle céntrica del Casco Antiguo, a pocos pasos de la catedral. Su fachada de piedra amarilla restaurada y sus grandes ventanales de cristal la distinguen de los locales más antiguos del barrio. Atrae a profesionales, turistas con poder adquisitivo y personas que buscan un capricho dulce en un ambiente cuidado y silencioso. La especialidad son la pastelería francesa y escocesa (croissants, pain au chocolat, scones, shortbread), los pasteles caseros (tarta de queso, carrot cake, lemon drizzle) y el café de especialidad (tostado medio, de origen único). El local es amplio, con mesas de mármol blanco, sillas de terciopelo azul marino y una vitrina de cristal que exhibe las delicias del día. Ofrecen opciones sin gluten y veganas. El servicio es rápido y profesional, y el ambiente, relajado aunque con un punto de distinción.
		<br><br><strong>Tipo:</strong> Cafetería / Pastelería<br>
		<strong>Horario:</strong> 08:00 - 19:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Pastelería francesa y escocesa: croissants, pain au chocolat, scones y shortbread.<br>
		<strong>Ambiente:</strong> Elegante pero acogedor. Sus vitrinas de cristal exhiben una tentadora selección de pasteles.<br>
		<strong>Música:</strong> Jazz suave, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Profesionales, turistas con poder adquisitivo y personas que buscan un capricho dulce.<br><br>
		<strong>Notas:</strong><br>
		✔️ Ofrece opciones sin gluten y veganas.<br>
		✔️ El café es de especialidad.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 634,
        yPx: 277,
        nombre: `Cafetería «La Grieta Púrpura»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Sgoltadh Purpaidh»<br><strong>Pronunciación:</strong> /an SKOL-tah PUR-pai/<br><strong>En inglés:</strong> The Purple Rift Café<br><br>
		«La Grieta Púrpura» es una cafetería alternativa y bohemia, escondida en una calle secundaria del Casco Antiguo. Su fachada pintada de morado y negro, sus graffitis y su cartel de neón rosa llaman la atención de una clientela joven y desenfadada: estudiantes de arte, músicos, escritores y público alternativo que busca un local sin pretensiones, con precios bajos y un ambiente creativo. En el interior, las paredes están pintadas en tonos púrpura y negro. Los muebles son reciclados (butacas desparejadas y mesas de madera pintadas de colores) y las paredes exhiben obras de artistas locales que están a la venta. La especialidad son el café de comercio justo, los batidos; smoothies veganos, las tortas saladas vegetarianas y las ensaladas. También tienen cerveza artesana en botella y vinos ecológicos. El wifi es gratuito. Y los jueves hay micrófono abierto (poesía, monólogos, música acústica). Se admiten mascotas. Es un lugar ruidoso, desordenado y lleno de vida.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Alternativa<br>
		<strong>Horario:</strong> 09:00 - 23:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de comercio justo, batidos, smoothies, tortas saladas y ensaladas.<br>
		<strong>Ambiente:</strong> Bohemio y desenfadado. Las paredes están pintadas en tonos púrpura y negro, los muebles son reciclados y las paredes exhiben obras de artistas locales.<br>
		<strong>Música:</strong> Indie, folk o rock alternativo, a volumen medio-bajo.<br>
		<strong>Clientela habitual:</strong> Estudiantes, artistas y público joven de tendencia alternativa.<br><br>
		<strong>Notas:</strong><br>
		✔️ Organiza micrófono abierto los jueves por la noche.<br>
		✔️ Se admiten mascotas.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	
	// ==================== CATEDRALES / IGLESIAS
	
	{
        xPx: 882,
        yPx: 356,
        nombre: `Catedral gótica de Santa Euna`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cathair-eaglais Naoimh Euna<br><strong>Pronunciación:</strong> /<em>KA-hir EK-lish NEV E-u-na</em>/<br><strong>En inglés:</strong> St. Euna's Gothic Cathedral<br><br>
		La Catedral de Santa Euna es el segundo edificio más emblemático del Casco Antiguo y el corazón religioso de Dunbhròn. De estilo gótico, fue construida en piedra arenisca amarilla entre los siglos XIII y XV, y domina la ciudad con sus dos torres gemelas y su rosetón occidental, considerado uno de los mejores de Escocia. Es la sede de la diócesis local y un importante destino turístico, que recibe más de 100.000 visitantes al año. Además de su función religiosa (misas diarias, bodas, funerales), alberga un museo capitular, un claustro del siglo XIV y una cripta abierta al público con restos arqueológicos. Para los vecinos del Casco Antiguo, es un punto de referencia tanto espiritual como social; para los turistas, una visita obligada.`,
        pdfUrl: `#`,
        iconoTipo: `iglesia`
    },
	
	// ==================== CENTRO DE SALUD
	
	{
        xPx: 683,
        yPx: 341,
        nombre: `Centro de Salud de Ann Seann Baile`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte an t-Seann Bhaile<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te an CHAUN VA-le</em>/<br><strong>En inglés:</strong> Ann Seann Baile Health Centre<br><br>
		El Centro de Salud de Ann Seann Baile es el principal centro médico del Casco Antiguo, situado en una calle ancha y arbolada. Ocupa un edificio de piedra amarilla del siglo XIX, originalmente un hospital de beneficencia, reformado en los años 80 para adaptarse a las necesidades de la atención primaria. Da servicio a unos 15.000 residentes del distrito (y a los turistas que sufren accidentes leves). Ofrece consultas de medicina general, pediatría, enfermería, pequeña cirugía ambulatoria y un servicio de urgencias básicas (sin hospitalización, solo estabilización). Es un edificio funcional, con poco encanto arquitectónico, pero muy querido por los vecinos, que conocen a los médicos de cabecera desde hace décadas. El ambiente es el típico de un ambulatorio público escocés: colas, carteles de «no fumar», revistas viejas en las salas de espera y personal sanitario con prisas.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },
	{
        xPx: 916,
        yPx: 285,
        nombre: `Centro de Salud de la Plaza Central`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte na Ceàrnaig Mheadhain<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te na KYAR-nik VE-an</em>/<br><strong>En inglés:</strong> Central Square Health Centre<br><br>
		El Centro de Salud de la Plaza Central es el segundo centro médico del Casco Antiguo: más pequeño y más moderno que su homólogo de Ann Seann Baile. Está situado en un edificio de construcción reciente (1995), integrado en un bloque de viviendas protegidas. Atiende a unos 8.000 residentes de la parte norte y este del distrito, así como a los turistas que sufren accidentes en la catedral o en la plaza. Es un centro de atención primaria básica (sin urgencias las 24 horas: solo de 9 a 18h). Es funcional, limpio y con aire moderno, pero con menos personal y recursos que el principal. Los vecinos lo llaman «el centro nuevo» o «el de la plaza». Su personal es más joven, en general, y está menos quemado.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },
	
	// ==================== COLEGIOS
	
	{
        xPx: 882,
        yPx: 261,
        nombre: `Colegio «San Columba»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Chaluim Chille<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Já-luim Jí-le</em>/<br><strong>En inglés:</strong> St. Columba's Primary<br><br>
		El Colegio «San Columba» es una escuela de educación primaria (de 4 a 11 años) situada en una calle tranquila del Casco Antiguo, a pocos minutos de la catedral. Ocupa un edificio de piedra amarilla del siglo XIX, originalmente una escuela parroquial dedicada al santo irlandés que evangelizó Escocia, y ha sido ampliado en varias ocasiones. Es el colegio más antiguo del distrito y uno de los más queridos por los vecinos. Ofrece educación infantil y primaria, con unos 200 alumnos aproximadamente. Es un centro público, de gestión municipal, con una plantilla de profesores y personal de apoyo. El ambiente es el de una escuela de barrio: ordenada, tradicional, con buen nivel académico y mucha implicación de las familias (sobre todo de las madres). Las instalaciones son modestas pero cuidadas. Es conocido por su coro escolar, que canta en la catedral cada Navidad.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
	
	{
        xPx: 636,
        yPx: 397,
        nombre: `Colegio «La Colina del Viento»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «a' Chnuic Gaoithe<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl a JNIK GÚY-e</em>/<br><strong>En inglés:</strong> Windyhill Primary School<br><br>
		El Colegio «La Colina del Viento» es una escuela de educación primaria (de 4 a 11 años) situada en la parte alta del Casco Antiguo, cerca del límite con el Barrio de «los Prados», en una calle empinada y ventosa (de ahí el nombre). Es un centro más pequeño que «San Columba», con unos 120 alumnos, muchos de ellos procedentes de familias trabajadoras del barrio y, en los últimos años, de inmigrantes de Europa del Este (polacos, lituanos) que han llegado a Dunbhròn para trabajar en la construcción y los servicios. El edificio es de construcción más reciente (década de 1930), con una estética funcional y menos encanto histórico. Es un centro público, con menos recursos que el otro colegio, pero con un profesorado joven y comprometido. El ambiente es más humilde y menos tradicional, aunque no exento de tensiones (los padres de toda la vida a veces se quejan de que «el nivel ha bajado» desde que llegaron los inmigrantes, pero la dirección hace lo posible por integrar a todos). Es conocido por su huerto escolar y por su programa de acogida a niños refugiados.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
	
	// ==================== COMISARÍA (ENTRE CASCO ANTIGUO Y LA COSTA NOVA)
	
	{
        xPx: 819,
        yPx: 357,
        nombre: `Comisaría de Ann Seann Baile`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Tigh an Lagha an t-Seann Bhaile<br><strong>Pronunciación:</strong> /<em>Tay an LAY-a an CHAUN VA-le</em>/<br><strong>En inglés:</strong> Ann Seann Baile Police Station<br><br>
		La Comisaría de Ann Seann Baile es la principal comisaría del centro histórico y una de las más grandes de Dunbhròn. Da servicio a dos distritos completos: el Casco Antiguo (con su densa población turística y residencial) y Costa Nova (con su zona de ocio, playa y turismo de lujo). Es un edificio moderno y funcional, construido en la década de 1990 para sustituir a la antigua comisaría victoriana (hoy un centro cultural). Alberga a unos 60 agentes (entre policías locales y agentes de tráfico), personal administrativo y de mantenimiento. Dispone de calabozos (solo retención temporal, no prisión preventiva), un pequeño laboratorio forense, gimnasio y garaje para vehículos (coches patrulla, furgonetas). Es un centro bien equipado, con cámaras de vigilancia en el exterior y sistemas informáticos modernos. Sin embargo, el personal refleja la sociedad tradicional de Dunbhròn: muchos agentes son conservadores, desconfiados con los forasteros y, en algunos casos, abiertamente homófobos o racistas. Las denuncias por agresiones machistas u homófobas suelen archivarse rápido si no hay pruebas contundentes. La comisaría también tiene una relación incómoda con una desconocida agencia llamada STCA —que parece tener más licencias de las que le gustaría a la policía— y con el contrabando del puerto. Que se rumorea que algunos agentes miran hacia otro lado.`,
        pdfUrl: `#`,
        iconoTipo: `comisaria`
    },
	
	// ==================== DISCOTECA
	
	{
        xPx: 527,
        yPx: 316,
        nombre: `Discoteca «El Vértice»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Club-oidhche «An Iomaire»<br><strong>Pronunciación:</strong> /an I-mor-e/<br><strong>En inglés:</strong> The Vertex Club<br><br>
		«El Vértice» es la única discoteca del Casco Antiguo y una de las más populares de Dunbhròn entre los jóvenes. Situada al exterior noroeste del distrito,  ocupa un antiguo cine de los años 60 reconvertido en sala de fiestas. Es un local enorme, con capacidad para más de 500 personas, que atrae a estudiantes, turistas jóvenes, y adultos que buscan una noche de desenfreno los fines de semana. Su fama es ambivalente: es el sitio donde todo el mundo va a bailar, beber y ligar, pero también donde surgen peleas, agresiones y algún que otro escándalo con cierta frecuencia. La música es comercial (pop, reggaetón, electrónica) a volumen atronador, y las consumiciones son caras para lo que ofrecen. El ambiente es caótico, especialmente en la pista principal, y la seguridad es privada (porteros musculosos que no dudan en usar la fuerza). Es el lugar al que los jóvenes del Casco Antiguo, Costa Nova y Los Prados acuden para «perderse» los fines de semana, mientras los padres miran hacia otro lado.
		<br><br>
		<strong>Tipo:</strong> Discoteca / Sala de fiestas<br>
		<strong>Horario:</strong> 23:00 - 05:00 (viernes y sábados)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (cabinas VIP y taburetes altos en zona de descanso)<br>
		<strong>Especialidad:</strong> Cubatas, chupitos, cerveza de barril y servicio de botella en VIP.<br>
		<strong>Juegos:</strong> Ninguno.<br>
		<strong>Ambiente:</strong> Caótico, oscuro y ruidoso, con música comercial a volumen atronador, luces estroboscópicas y láseres. El suelo de hormigón suele estar pegajoso. Es famoso tanto por su ambiente festivo como por la frecuencia de peleas y escándalos.<br>
		<strong>Música:</strong> Pop, reggaetón y música electrónica, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Estudiantes, turistas jóvenes y adultos que buscan desenfreno los fines de semana.<br><br>
		<strong>Notas:</strong><br>
		✔️ Ocupa un antiguo cine de los años sesenta reconvertido, con capacidad para más de quinientas personas.<br>
		✔️ Consta de dos plantas: pista principal en planta baja (con dos barras y cabinas VIP) y mezzanine con segunda pista, otra barra y zona de fumadores interior.<br>
		✔️ Los porteros revisan bolsos a la entrada, aunque no muy a fondo.<br>
		✔️ La seguridad es privada (porteros musculosos que no dudan en usar la fuerza si lo estiman necesario).<br>
		✔️ Los baños cuentan con personal de aseo que cobra propina (casi obligatoria).<br>
		✔️ El sótano no está abierto al público (almacén, vestuarios y sala de calderas).`,
        pdfUrl: `#`,
        iconoTipo: `discoteca`
    },
	
	// ==================== HELADERÍAS
	
	// ==================== HOSPITALES
	
	{
        xPx: 716,
        yPx: 442,
        nombre: `Hospital Real de Dunbhròn`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-eiridinn Rìoghail Dhùn Bhròn<br><strong>Pronunciación:</strong> /<em>Tay e-re-tin RREE-ul JUN VRON</em>/<br><strong>En inglés:</strong> Dunbhròn Royal Infirmary<br><br>
		El Hospital Real de Dunbhròn es el tercer centro sanitario más grande y mejor equipado de la ciudad, con una historia que se remonta al siglo XVIII. Está situado en una extensa parcela en el límite entre el Casco Antiguo y el Corazón Roto, y da servicio a una población de más de 60.000 personas, incluyendo residentes de varios distritos y los turistas de temporada. Cuenta con más de 400 camas, un servicio de urgencias que atiende una media de 200 pacientes al día, quirófanos, UCI, maternidad, unidad de psiquiatría y diversos laboratorios. Es un hospital público del NHS Scotland, con una plantilla de unos 1.500 empleados (médicos, enfermeras, personal administrativo y de mantenimiento). Su arquitectura es un batiburrillo de estilos: el ala original del siglo XVIII, de piedra amarilla; ampliaciones victorianas de ladrillo rojo; y pabellones modernos de hormigón y cristal de los años 80 y 2000. Es conocido por su servicio de urgencias (el más saturado de la ciudad), por su unidad de quemados (referencia en el norte de Escocia) y por su viejo psiquiátrico, que da miedo a los vecinos. El ambiente es el de un gran hospital público: agobio, listas de espera, personal quemado, pero también profesionales comprometidos. Y, cómo no, circulan leyendas entre el personal sobre pacientes extraños y sucesos inexplicables.`,
        pdfUrl: `#`,
        iconoTipo: `hospital`
    },
	
	// ==================== HOTELES/HOSTALES
	
	{
        xPx: 748,
        yPx: 279,
        nombre: `The Dunbhròn Palace Hotel`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-òsta Lùchairt Dhùn Bhròn<br><strong>Pronunciación:</strong> /<em>Tai-OS-ta LOO-jart JUN VRON</em>/<br><strong>En inglés:</strong> Dunbhròn Palace Hotel<br><br>
		The Dunbhròn Palace Hotel es el hotel de lujo por excelencia del Casco Antiguo. Un establecimiento de cinco estrellas que ocupa un palacio neoclásico del siglo XVIII, reformado por dentro para ofrecer las máximas comodidades actuales sin renunciar a su majestuosidad original. Está situado en una calle amplia y arbolada a pocos minutos de la catedral, y atrae a turistas de alto poder adquisitivo, celebridades, políticos y ejecutivos que buscan una estancia distinguida. El edificio es una joya arquitectónica: piedra amarilla, columnas corintias, frescos en el techo. Pero sus habitaciones tienen climatización, wifi ultrarrápido, televisores OLED y baños de mármol con hidromasaje. Ofrece spa, piscina cubierta, gimnasio, un restaurante con estrella Michelin (una, de momento), salones para banquetes y un pequeño teatro. La plantilla es numerosa (más de 100 empleados) y los protocolos son estrictos. Es el lugar donde la élite de Dunbhròn celebra bodas y donde los turistas con dinero se alojan para sentirse como la realeza. Pero, como todo edificio antiguo con historia, también guarda secretos y leyendas que los empleados cuentan entre ellos.`,
        pdfUrl: `#`,
        iconoTipo: `hotel`
    },
	
	// ==================== INSTITUTOS
	
	{
        xPx: 951,
        yPx: 400,
        nombre: `Instituto «Los Acantilados de Sal»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd-sgoil «Bearraidhean an t-Salainn»<br><strong>Pronunciación:</strong> /<em>Ard-sgoyl Bé-ra-i-an an Ta-layn</em>/<br><strong>En inglés:</strong> Salt Cliffs Academy
		<br><br>
		El Instituto «Los Acantilados de Sal» es el único centro de educación secundaria del Casco Antiguo y también atrae a alumnos de los distritos colindantes, como el sur del Barrio Gótico y el este de Las Laderas. Ocupa un edificio tradicionalista de los años 60, construido en una parcela elevada con vistas al mar, de ahí su nombre: los acantilados de sal que se forman en la costa noreste cuando el agua del mar se evapora y deja costras blancas. Tiene unos 600 alumnos, de 12 a 18 años, y una plantilla de unos 50 profesores y personal de apoyo. Es un centro público, con la típica mezcla de alumnos de diferentes orígenes sociales, desde hijos de profesionales liberales hasta adolescentes del Barrio Gótico y Las Laderas. El ambiente es el de un instituto de ciudad: aulas funcionales, pasillos ruidosos, algunos conflictos entre alumnos (acoso escolar, peleas, pequeños trapicheos), y una dirección que intenta mantener el orden con mano firme. Es conocido por su equipo de rugby, el segundo mejor de la ciudad; por su orquesta, que toca en la catedral en Navidad junto al coro del Colegio «San Columna»; y por los casos esporádicos de violencia homófoba que la dirección intenta silenciar para no dañar la reputación del centro.`,
        pdfUrl: `#`,
        iconoTipo: `instituto`
    },
	
	// ==================== LIBRERÍAS
	
	{
        xPx: 817,
        yPx: 299,
        nombre: `Librería «Catedral de Santa Euna»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann ««Cathair-eaglais Naoimh Euna»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan KA-hir EK-lish NEV E-u-na</em>/<br><strong>En inglés:</strong> St. Euna's Cathedral Bookshop<br><br>
		La librería «Catedral de Santa Euna» no es una biblioteca, sino una pequeña librería especializada situada en un edificio anexo a la catedral: la antigua casa del canónigo. Está gestionada por la diócesis y ofrece un fondo muy centrado en libros religiosos, historia de Escocia, arte sacro, guías de viaje de Dunbhròn y una pequeña sección de literatura escocesa. Es un lugar tranquilo, con olor a papel viejo y cera, frecuentado por turistas (que compran guías, postales, dedales, imanes...), fieles (que buscan Biblias o libros de oración) y estudiosos (que consultan sus fondos sobre la historia local). También tiene una sección de manuscritos antiguos, no accesible al público, solo para investigadores con permiso del obispado. Es un espacio pequeño, íntimo, con una librera que conoce cada título y que, si le caes bien, te enseñará la trastienda donde guardan los libros más valiosos.`,
        pdfUrl: `#`,
        iconoTipo: `libreria`
    },
	
	// ==================== PARQUE DE BOMBEROS
	
	{
        xPx: 628,
        yPx: 341,
        nombre: `Parque de Bomberos de Ann Seann Baile`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh an t-Seann Bhaile<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay an CHAUN VA-le</em>/<br><strong>En inglés:</strong> Ann Seann Baile Fire Station
		<br><br>
		El Parque de Bomberos de Ann Seann Baile es la principal estación de bomberos del Casco Antiguo, y también cubre emergencias en Costa Nova y en la parte norte del Corazón Roto. Ocupa un edificio funcional de los años 80, ampliado en 2005, situado en una calle ancha a las afueras del casco histórico para permitir la salida rápida de los vehículos. Es un centro moderno y bien equipado, con una plantilla de 45 bomberos profesionales (más personal administrativo y de mantenimiento) que trabajan en turnos rotativos de 24 horas. Dispone de tres vehículos principales (un camión de bomberos urbano, una autoescala y una unidad de rescate), así como furgonetas de apoyo y una embarcación para rescates en la costa de Costa Nova, que guardan en un garaje anexo. Es un servicio muy valorado por los vecinos, ya que los incendios en edificios antiguos del Casco Antiguo son especialmente peligrosos. El ambiente es el de un cuartel: compañerismo, rutina, espera, pero también momentos de tensión. El personal refleja la sociedad tradicional de Dunbhròn: la mayoría son hombres, conservadores, con algún que otro joven más abierto.`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },
	{
        xPx: 983,
        yPx: 290,
        nombre: `Parque de Bomberos de la Plaza Central`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh na Ceàrnaig Mheadhain<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay na KYAR-nik VE-an</em>/<br><strong>En inglés:</strong> Central Square Fire Station
		<br><br>
		Más pequeña y especializada que la de Ann Seann Baile, este parque de bomberos se encuentra en un edificio rehabilitado del siglo XIX (antigua cochera de diligencias), a las afueras este del distrito. Cubre la zona más occidental y peatonal del distrito, así como el límite con Costa Nova, es decir, las calles comerciales y los hoteles. Es un puesto avanzado, con menos personal y menos vehículos que la estación principal, diseñado para dar una respuesta rápida en una zona de difícil acceso para los camiones grandes. Dispone de dos vehículos (una bomba urbana pequeña y una furgoneta de rescate) y una plantilla de 20 bomberos (más personal administrativo) que trabajan en turnos rotativos. Es un edificio con encanto histórico por fuera, pero funcional por dentro. El ambiente es el de un cuartel pequeño: más familiar, con mucho compañerismo, pero también con la presión de trabajar en una zona llena de turistas y edificios antiguos de alto valor histórico.`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },
	
	// ==================== PUBS
	
	{
        xPx: 835,
        yPx: 226,
        nombre: `Pub «El Ciervo Blanco»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Fhèidh Bàn»<br><strong>Pronunciación:</strong> /an EII BAAN/<br><strong>En inglés:</strong> The White Deer Pub<br><br>
		«El Ciervo Blanco» es un pub temático de ambiente cazador y tradicional, situado en una calle ancha del Casco Antiguo. Su fachada de piedra amarilla y su cartel de madera con un ciervo blanco rampante atraen a una clientela específica: cazadores, amantes de la naturaleza, turistas en busca de experiencias rústicas y vecinos mayores que aprecian un ambiente de copas sin estridencias. En el interior, las paredes están decoradas con cabezas disecadas de ciervo, jabalí y zorro, rifles antiguos (descargados) y pieles de animales. Es un lugar oscuro, de madera y piedra, con una chimenea encendida en invierno. La especialidad son los whiskies de malta, las ginebras premium y los licores de hierbas. No sirven comida caliente, solo frutos secos, patatas fritas de bolsa y algún queso. La música es rock clásico y blues a volumen alto, pero no atronador. Es el refugio de los que huyen de la masificación turística y buscan un pub con carácter.
		<br><br>
		<strong>Tipo:</strong> Pub temático (caza)<br>
		<strong>Horario:</strong> 18:00 - 04:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Whiskies de malta, ginebras premium y licores de hierbas.<br>
		<strong>Juegos:</strong> Dardos y billar.<br>
		<strong>Ambiente:</strong> Decorado con cabezas disecadas de ciervo, rifles antiguos y pieles. Un ambiente pensado para los amantes de la caza.<br>
		<strong>Música:</strong> Rock clásico y blues, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Cazadores, gente de la noche y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ No se sirve comida caliente, solo frutos secos y patatas fritas de bolsa.<br>
		✔️ Es un pub de copas de ambiente duro.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 716,
        yPx: 381,
        nombre: `Pub «La Canción Rota»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An t-Òran Briste»<br><strong>Pronunciación:</strong> /an TOR-an BRISH-te/<br><strong>En inglés:</strong> The Broken Song Pub<br><br>
		«La Canción Rota» es un pub de copas especializado en karaoke, situado en una calle comercial del Casco Antiguo, cerca del límite con el Corazón Roto. Es el templo de la noche para los jóvenes de la ciudad, de 18 a 30 años, para los grupos de amigos y para las despedidas de soltero. Abre desde las 21:00 hasta las 5:00, y su fama se debe a su escenario de karaoke con pantalla gigante, una de las listas de canciones más extensas de Dunbhròn y un ambiente caótico, ruidoso y siempre lleno. El local es grande, con dos plantas, y la música se apaga durante las actuaciones para que los cantantes puedan lucirse o ridiculizarse. El suelo tiene fama de estar siempre pegajoso, las colas para cantar son largas y los precios de las consumiciones son elevados para lo que ofrecen. Es un pub sin complejos, donde lo importante es divertirse, gritar y olvidar la semana laboral. El personal es joven, dinámico y tolera bien el desorden, aunque a veces hay broncas.
		<br><br>
		<strong>Tipo:</strong> Pub de copas / Karaoke<br>
		<strong>Horario:</strong> 21:00 - 05:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas)<br>
		<strong>Especialidad:</strong> Cócteles llamativos (con nombres de canciones), chupitos a granel y cerveza de barril.<br>
		<strong>Juegos:</strong> Karaoke con escenario y pantalla gigante.<br>
		<strong>Ambiente:</strong> Caótico y ruidoso, frecuentado por jóvenes que cantan a pleno pulmón. Es el pub más ruidoso del distrito.<br>
		<strong>Música:</strong> Pop, rock y reggaetón a volumen muy alto, aunque se apaga durante las actuaciones del karaoke.<br>
		<strong>Clientela habitual:</strong> Jóvenes de entre 18 y 30 años, despedidas de soltero y grupos de amigos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las colas para cantar suelen ser largas.<br>
		✔️ El suelo del local tiene fama de estar siempre pegajoso.<br>
		✔️ Es un pub muy popular en la zona.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 752,
        yPx: 318,
        nombre: `Pub «Stonehenge»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «Clachan Stonehenge»<br><strong>Pronunciación:</strong> /KLA-jan STON-henj/<br><strong>En inglés:</strong> Stonehenge Pub<br><br>
		«Stonehenge» es un pub británico clásico, de los que huelen a madera y a cerveza, donde el tiempo parece haberse detenido en los años 70. Está situado en una calle céntrica del Casco Antiguo, y es el pub de cabecera de los vecinos de toda la vida, de los turistas británicos que buscan un trozo de su tierra lejos de casa, y de los aficionados a los dardos profesionales (aquí se retransmiten todos los torneos). La fachada es discreta: piedra amarilla, letrero de madera con una imagen de Stonehenge, y una pequeña terraza en la acera. En el interior, madera, mármol, alfombras raídas y mesas bajas. La especialidad son las cervezas de barril (lagers, ales y stouts británicas), servidas por camareros veteranos que conocen a sus clientes por su nombre. El ambiente es tranquilo pero animado, con tertulias, dardos y pantallas que siempre emiten deportes, especialmente dardos y rugby. Es el antídoto contra los pubs temáticos para turistas.
		<br><br>
		<strong>Tipo:</strong> Pub británico clásico<br>
		<strong>Horario:</strong> 12:00 - 02:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril (lagers, ales y stouts británicas).<br>
		<strong>Juegos:</strong> Dardos, billar y máquinas tragaperras.<br>
		<strong>Ambiente:</strong> El pub británico por excelencia: madera, mármol, alfombras y mesas bajas. El aroma a cerveza impregna el local.<br>
		<strong>Música:</strong> Rock clásico y pop británico, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos, turistas británicos y aficionados al billar.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las pantallas siempre emiten dardos profesionales.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 967,
        yPx: 326,
        nombre: `Pub «El Faro Inclinado»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Taigh-solais Claon»<br><strong>Pronunciación:</strong> /an TAI-sho-lash KLA-on/<br><strong>En inglés:</strong> The Leaning Lighthouse Pub<br><br>
		«El Faro Inclinado» es un pub irlandés auténtico, de los que tienen música en vivo todas las noches, una barra de madera tallada y un ambiente acogedor que atrae tanto a turistas como a lugareños. Está situado en una calle comercial del Casco Antiguo, y ocupa un edificio de piedra amarilla del siglo XVIII. Su nombre hace referencia a un faro inclinado —dibujado en el cartel— que, según la leyenda local, existió en la costa de Dunbhròn y fue derribado por una tormenta. En el interior, la decoración es de estilo dublinés: espejos de Guinness, toneles, barriles de whisky y una pequeña tarima para los músicos. La especialidad es la cerveza Guinness tirada (importada), el whisky irlandés (Jameson, Bushmills) y el licor de crema (Baileys). Los precios son los más caros del distrito, pero la calidad y el ambiente lo justifican. La música en vivo es todas las noches: folk irlandés, violín, flauta, gaita irlandesa, a volumen medio. La clientela es variada: turistas irlandeses, amantes de la cultura celta, parejas y grupos de amigos que buscan una noche agradable sin caos.
		<br><br>
		<strong>Tipo:</strong> Pub irlandés<br>
		<strong>Horario:</strong> 16:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza Guinness tirada, whisky irlandés y licor de crema (Baileys).<br>
		<strong>Juegos:</strong> Dardos.<br>
		<strong>Ambiente:</strong> Decorado como un auténtico pub de Dublín: barra de madera tallada, espejos de Guinness y toneles. Muy acogedor.<br>
		<strong>Música:</strong> Folk irlandés en vivo (violín, flauta y gaita irlandesa), a volumen medio.<br>
		<strong>Clientela habitual:</strong> Turistas irlandeses, amantes de la cultura celta y parejas.<br><br>
		<strong>Notas:</strong><br>
		✔️ La música en vivo es todas las noches.<br>
		✔️ Es el pub más caro del distrito.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 583,
        yPx: 293,
        nombre: `Pub «La Brújula de Cobre»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Combaist Umha»<br><strong>Pronunciación:</strong> /an KOM-bast U-va/<br><strong>En inglés:</strong> The Copper Compass Pub<br><br>
		«La Brújula de Cobre» es un pub rockero de ambiente duro. El más extremo del Casco Antiguo. Situado en una calle oscura y estrecha, es conocido solo entre los metaleros, los rockeros y la gente de la noche que buscan un lugar sin concesiones: música alta (heavy metal, hard rock, punk), apenas iluminación, y ninguna mesa, solo barriles de cerveza para apoyar las copas. El suelo es de hormigón, las paredes están forradas de carteles de grupos y guitarras eléctricas rotas, y la cabina del DJ está al fondo. No sirven comida, solo bebida: cerveza de barril, chupitos de whisky y cubatas. Las peleas no son raras, pero los porteros, grandes y expeditivos, las disuelven rápido. Es el pub de los que no temen mancharse las botas.
		<br><br>
		<strong>Tipo:</strong> Pub rockero<br>
		<strong>Horario:</strong> 20:00 - 05:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> No (solo barriles)<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager y stout), chupitos de whisky y combinados de ron con cola.<br>
		<strong>Juegos:</strong> Dardos.<br>
		<strong>Ambiente:</strong> Oscuro y contundente. Guitarras eléctricas cuelgan de las paredes, junto a carteles de grupos de los ochenta. Cabina de DJ al fondo.<br>
		<strong>Música:</strong> Rock duro y heavy metal, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Metaleros, rockeros y gente de la noche dura.<br><br>
		<strong>Notas:</strong><br>
		✔️ El suelo es de hormigón.<br>
		✔️ No hay mesas: se bebe de pie apoyado en barriles.<br>
		✔️ No es raro que se produzcan altercados.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	
	// ==================== RESTAURANTES

	{
        xPx: 841,
        yPx: 388,
        nombre: `Restaurante «Las Hostias de Santa Euna»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Naoimh Euna»<br><strong>Pronunciación:</strong> /<em>Tai-BEE NEV E-u-na</em>/<br><strong>En inglés:</strong> St. Euna's Host Restaurant<br><br>
		«Las Hostias de Santa Euna» es un restaurante de alta cocina escocesa situado en un edificio histórico anexo a la catedral, a pocos pasos de la plaza central. Ocupa la planta baja de una antigua casa del canónigo del siglo XVI, rehabilitada con exquisito gusto para ofrecer un ambiente elegante y sobrio, con paredes de piedra vista, manteles de lino y cubiertos de plata. Es uno de los restaurantes más caros del Casco Antiguo, frecuentado por turistas con poder adquisitivo, parejas en celebración y críticos gastronómicos. Su especialidad es la cocina escocesa tradicional elevada a categoría de autor: haggis con espuma de whisky, salmón ahumado sobre blinis, cordero de las Highlands con reducción de moras. El servicio es impecable, y el silencio solo se rompe con el tintineo de los cubiertos. No se admiten niños pequeños, y la reserva es obligatoria.
		<br><br>
		<strong>Tipo:</strong> Restaurante (alta cocina)<br>
		<strong>Horario:</strong> 13:00 - 15:30 / 20:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Escocesa tradicional / De autor<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Haggis con espuma de whisky, salmón ahumado sobre blinis y cordero de las Highlands con reducción de moras.<br>
		<strong>Ambiente:</strong> Elegante y sobrio. Paredes de piedra vista, manteles de lino y cubiertos de plata.<br>
		<strong>Clientela habitual:</strong> Turistas con poder adquisitivo, parejas y críticos gastronómicos.<br><br>
		<strong>Notas:</strong><br>
		✔️ No se admiten niños pequeños.<br>
		✔️ Reserva obligatoria.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 747,
        yPx: 378,
        nombre: `Restaurante «El Faro de Jade»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Taigh-solais Iad»<br><strong>Pronunciación:</strong> /TAI-sho-lash I-ad/<br><strong>En inglés:</strong> The Jade Lighthouse Restaurant<br><br>
		«El Faro de Jade» es un restaurante de cocina fusión escocesa-marina con toques asiáticos, situado en una calle comercial del Casco Antiguo, cerca de la plaza central. Ocupa un edificio de piedra amarilla del siglo XVIII, rehabilitado con un estilo moderno y luminoso que combina la piedra original con grandes ventanales y tonos verdes y dorados. Es uno de los restaurantes de moda en Dunbhròn, frecuentado por turistas con poder adquisitivo, gente de negocios y amantes de la buena mesa que buscan algo diferente a la cocina tradicional escocesa. Su especialidad es el marisco fresco (langosta, centollo, vieiras, salmón) preparado con técnicas asiáticas: salsa de soja, jengibre, lima, leche de coco. También ofrecen opciones vegetarianas elaboradas. El precio es elevado, el servicio es atento pero no excesivamente protocolario, y el ambiente es relajado pero elegante.
		<br><br>
		<strong>Tipo:</strong> Restaurante (cocina fusión)<br>
		<strong>Horario:</strong> 12:30 - 16:00 / 19:30 - 23:30<br>
		<strong>Tipo de cocina:</strong> Escocesa-marina / Fusión asiática<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Marisco fresco con toques asiáticos (salsa de soja, jengibre), pescado al vapor con verduras salteadas.<br>
		<strong>Ambiente:</strong> Moderno y luminoso, con vistas a la calle principal. La decoración combina tonos verdes y dorados.<br>
		<strong>Clientela habitual:</strong> Turistas, gente de negocios y amantes de la buena mesa.<br><br>
		<strong>Notas:</strong><br>
		✔️ La carta de vinos incluye opciones asiáticas como sake y vino de arroz.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
    {
        xPx: 679,
        yPx: 419,
        nombre: `Restaurante «La Mesa del Errante»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Bòrd an Fhògarraich»<br><strong>Pronunciación:</strong> /BOR-d an VO-gar-ij/<br><strong>En inglés:</strong> The Wanderer’s Table Restaurant<br><br>
		«La Mesa del Errante» es un restaurante de cocina escocesa casera y de mercado, situado en una calle tranquila del Casco Antiguo. Ocupa un edificio de piedra amarilla del siglo XVIII, antiguo albergue para peregrinos, que conserva su carácter rústico y acogedor. Es el lugar al que acuden vecinos, viajeros solitarios y grupos pequeños que buscan comida honesta, abundante y sin pretensiones. Su especialidad es el menú del día, que cambia según lo que ofrezca el mercado; el Cullen Skink (sopa de haddock ahumado); el guiso del día; y el pescado fresco. El ambiente es familiar, con mesas grandes y compartidas, como en los viejos albergues, chimenea encendida en invierno y vigas de madera vistas. No admiten reservas, el servicio es rápido y el precio es moderado. Es el antídoto contra los restaurantes de lujo para turistas.
		<br><br>
		<strong>Tipo:</strong> Restaurante (comida casera)<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 22:00<br>
		<strong>Tipo de cocina:</strong> Escocesa de mercado / Temporada<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (grandes y compartidas)<br>
		<strong>Especialidad:</strong> Cullen Skink, guiso del día, asado del día y pescado del día.<br>
		<strong>Ambiente:</strong> Rústico y acogedor, con vigas de madera y chimenea. Las mesas son grandes y compartidas.<br>
		<strong>Clientela habitual:</strong> Vecinos, viajeros solitarios y grupos pequeños.<br><br>
		<strong>Notas:</strong><br>
		✔️ No se admiten reservas.<br>
		✔️ El menú cambia cada día según lo que ofrezca el mercado.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 839,
        yPx: 256,
        nombre: `Restaurante «La Colina Roja»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Druim Dearg»<br><strong>Pronunciación:</strong> /an DRUIM JERAK/<br><strong>En inglés:</strong> The Red Ridge Restaurant<br><br>
		«La Colina Roja» es un restaurante especializado en cocina de las Highlands escocesas, situado en una calle empinada que asciende desde la plaza central hacia la catedral, en la zona noreste del Casco Antiguo. Ocupa un edificio de piedra amarilla del siglo XVII, rehabilitado con un estilo cálido y envolvente que evoca una casa de campo de las tierras altas. Tartanes en las paredes, astas de ciervo, fotografías de paisajes de montaña y una chimenea encendida en invierno crean un ambiente acogedor para familias, aficionados a la caza y turistas que buscan probar las carnes de caza típicas de Escocia. La especialidad son los platos de venado, jabalí y faisán, acompañados de colcannon (puré de patatas y col) y salsas de frutos del bosque. También ofrecen opciones de cordero de las Highlands y pescado de río. El precio es moderado, el servicio es amable y la clientela es variada, incluyendo a muchos vecinos del barrio que vienen a celebrar ocasiones especiales.
		<br><br>
		<strong>Tipo:</strong> Restaurante (cocina de las Highlands)<br>
		<strong>Horario:</strong> 13:00 - 16:00 / 19:30 - 22:30<br>
		<strong>Tipo de cocina:</strong> Escocesa de las Highlands<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Carnes de caza (venado, jabalí, faisán), colcannon y salsas de frutos del bosque.<br>
		<strong>Ambiente:</strong> Cálido y envolvente. Tartanes en las paredes, astas de ciervo y fotografías de paisajes de las Highlands.<br>
		<strong>Clientela habitual:</strong> Familias, aficionados a la caza y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los domingos ofrecen Sunday Roast.<br>
		✔️ Se admiten perros en la terraza.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 955,
        yPx: 354,
        nombre: `Restaurante «Vientos del Este»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Gaothan an Ear»<br><strong>Pronunciación:</strong> /GO-an an ER/<br><strong>En inglés:</strong> Eastern Winds Restaurant<br><br>
		«Vientos del Este» es un restaurante especializado en marisco y pescado fresco de la costa este de Escocia, situado en una calle comercial del Casco Antiguo, cerca de la catedral. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII que durante décadas fue una pescadería, de ahí la tradición marinera. Es un local marítimo y auténtico, con paredes decoradas con cuerdas, faroles y redes de pescador. Su especialidad son los Arbroath Smokies (haddock ahumado), los langostinos, el pescado frito con patatas fritas caseras (fish & chips) y el marisco fresco (mejillones, berberechos, langosta). El precio es asequible, el servicio es rápido y el ambiente es familiar y desenfadado. Es muy popular entre los turistas, las familias y los amantes del pescado que buscan calidad sin pretensiones. No disponen de carta de vinos, solo cerveza y sidra, y el pescado llega fresco cada mañana del puerto de Costa Nova.
		<br><br>
		<strong>Tipo:</strong> Restaurante (marisco)<br>
		<strong>Horario:</strong> 12:30 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Escocesa de la costa este<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Arbroath Smokies, langostinos, pescado frito y patatas fritas caseras.<br>
		<strong>Ambiente:</strong> Marítimo y auténtico, decorado con cuerdas, faroles y redes de pescador.<br>
		<strong>Clientela habitual:</strong> Turistas, familias y amantes del pescado.<br><br>
		<strong>Notas:</strong><br>
		✔️ El pescado llega fresco cada mañana.<br>
		✔️ No disponen de carta de vinos, solo cerveza y sidra.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 656,
        yPx: 301,
        nombre: `Restaurante «El Umbral del Norte»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Stairsneach Tuath»<br><strong>Pronunciación:</strong> /an STAR-shnaj TU-ah/<br><strong>En inglés:</strong> The Northern Threshold Restaurant<br><br>
		«El Umbral del Norte» es un restaurante de alta cocina inspirada en las islas del norte de Escocia (Orcadas, Shetland y Hébridas), situado en una calle tranquila del Casco Antiguo, cerca del límite con Los Jardines. Ocupa un edificio de piedra amarilla del siglo XVIII, rehabilitado con un estilo minimalista y luminoso: paredes blancas, muebles claros, grandes ventanales y fotografías en blanco y negro de acantilados y faros. Es uno de los restaurantes más exclusivos de Dunbhròn, frecuentado por turistas con interés gastronómico, parejas en celebración y críticos. Su especialidad son las vieiras de Orkney, el cangrejo de Shetland, la sopa de berberechos y el cordero de las islas, todo con un enfoque de temporada y producto local. Las raciones son generosas, el servicio es atento pero formal, y la reserva es obligatoria.
		<br><br>
		<strong>Tipo:</strong> Restaurante (cocina de las islas)<br>
		<strong>Horario:</strong> 13:00 - 15:30 / 19:30 - 22:30<br>
		<strong>Tipo de cocina:</strong> Escocesa de las islas del norte (Orcadas, Shetland)<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Vieiras de Orkney, cangrejo de Shetland, sopa de berberechos y cordero de las islas.<br>
		<strong>Ambiente:</strong> Minimalista y luminoso. Paredes blancas, muebles claros y fotografías de acantilados y faros.<br>
		<strong>Clientela habitual:</strong> Turistas con interés gastronómico y parejas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los precios son altos, pero las raciones son generosas.<br>
		✔️ Se aceptan reservas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 580,
        yPx: 403,
        nombre: `Restaurante «Cuatro Estaciones»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Na Ceithir Ràithean»<br><strong>Pronunciación:</strong> /na KE-hir RAA-han/<br><strong>En inglés:</strong> Four Seasons Restaurant<br><br>
		«Cuatro Estaciones» es el restaurante más exclusivo y caro del Casco Antigu;, un templo de la alta cocina escocesa moderna con fusión europea, situado en una calle residencial muy tranquila. Ocupa un edificio de piedra amarilla del siglo XVIII, rehabilitado con un estilo sofisticado y minimalista, que apenas muestra cartel en el exterior: solo una pequeña placa de bronce. Es conocido únicamente entre los gourmets, los críticos gastronómicos y las personas de alto poder adquisitivo, que reservan con semanas de antelación para disfrutar de su menú degustación de siete platos, que cambia cada temporada: primavera, verano, otoño, invierno. No se admiten niños, el servicio es impecable pero frío, y el ambiente es de silencio y concentración en la comida. La reserva es obligatoria y requiere depósito previo.
		<br><br>
		<strong>Tipo:</strong> Restaurante (alta cocina)<br>
		<strong>Horario:</strong> 20:00 - 23:00 (solo cenas)<br>
		<strong>Tipo de cocina:</strong> Escocesa moderna / Fusión europea<br>
		<strong>Precio:</strong> 💰💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Menú degustación de siete platos que cambia cada temporada.<br>
		<strong>Ambiente:</strong> Sofisticado y elegante. Manteles blancos, cubertería de diseño y luz tenue.<br>
		<strong>Clientela habitual:</strong> Gourmets, celebraciones y personas de alto poder adquisitivo.<br><br>
		<strong>Notas:</strong><br>
		✔️ La reserva es obligatoria y requiere semanas de antelación.<br>
		✔️ No se admiten niños.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	
	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	{
        xPx: 678,
        yPx: 278,
        nombre: `Tienda de souvenirs «Lanas de Dunbhròn»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth chuimhneachan «Clòimh Dhùn Bhròn»<br><strong>Pronunciación:</strong> /<em>BOO-h HOOV-nan KLUV JUN VRON</em>/<br><strong>En inglés:</strong> Dunbhròn Woollens<br><br>
		«Lanas de Dunbhròn» es una pequeña tienda de souvenirs especializada en productos de lana y tweed, situada en una calle comercial del Casco Antiguo, a pocos pasos del castillo. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVII, que durante generaciones fue el taller y la tienda de una familia de tejedores. Es el lugar ideal para comprar bufandas, jerséis, mantas, gorros y chales de lana de oveja escocesa (Cheviot, Blackface), así como auténtico tweed de Harris (importado de las islas) y artesanía local, como posavasos de lana o figuras de fieltro. El ambiente es cálido y acogedor, con el característico olor a lana y a madera, y una decoración rústica que combina la piedra original con estanterías de madera oscura. Es frecuentada por turistas (que buscan un recuerdo auténtico), vecinos mayores (que compran madejas para tejer) y aficionados a la artesanía. Los precios son moderados, y la dueña, una mujer mayor, es conocida por su carácter afable y su conocimiento de las tradiciones textiles de Escocia.`,
        pdfUrl: `#`,
        iconoTipo: `souvenirs`
    },
    {
        xPx: 783,
        yPx: 380,
        nombre: `Tienda de souvenirs «El Barril del Highlander»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth chuimhneachan «Baraille a' Ghàidheil»<br><strong>Pronunciación:</strong> /<em>BOO-h HOOV-nan ba-RA-ye a GA-yel</em>/<br><strong>En inglés:</strong> The Highlander's Barrel<br><br>
		«El Barril del Highlander» es una tienda de souvenirs temática dedicada a la cultura de las Highlands escocesas, situada en una calle muy concurrida del Casco Antiguo, a tiro de piedra de la catedral. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII, cuyo interior está decorado como una antigua destilería de whisky: barriles de roble, banderas de clanes, un «hombre de las Highlands» de cartón piedra a la entrada y una réplica de un tonel gigante. Es un local muy turístico, con un ambiente festivo y algo caótico, frecuentado por visitantes extranjeros que buscan el típico recuerdo escocés: gorros de lana con pelo rojo, botellas de whisky barato, escudos de clanes, tazas de «Scotland», imanes de nevera, etc. El dueño es un hombre afable que ha sabido explotar el filón del turismo. Los precios son asequibles, pero la calidad es la típica de los souvenirs de masas.`,
        pdfUrl: `#`,
        iconoTipo: `souvenirs`
    },
    {
        xPx: 752,
        yPx: 419,
        nombre: `Tienda de souvenirs «La Cesta de las Brumas»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth chuimhneachan «Basaidh nam Bruthaichean»<br><strong>Pronunciación:</strong> /<em>BOO-h HOOV-nan BA-say nam BROO-a-yan</em>/<br><strong>En inglés:</strong> Basket of the Mists<br><br>
		«La Cesta de las Brumas» es una pequeña y encantadora tienda de souvenirs de estilo rústico y campestre, situada en una calle tranquila del Casco Antiguo. Especializada en artesanía de fibras naturales (cestas de mimbre, objetos de madera, velas aromáticas, jabones artesanales y productos de lana de oveja local), se diferencia de las tiendas de souvenirs masivas por su ambiente íntimo, natural y cuidado. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVII, que fue antiguamente una cestería, de ahí el nombre. Es frecuentada por turistas que buscan recuerdos auténticos, vecinos del barrio y amantes de la artesanía. Los precios son moderados, y la dueña, una mujer de mediana edad, es conocida por su amabilidad y su conocimiento de las tradiciones artesanas de Escocia.`,
        pdfUrl: `#`,
        iconoTipo: `souvenirs`
    },

	// ==================== TIENDA GCSETÉRICA

	{
        xPx: 846,
        yPx: 319,
        nombre: `Tienda esotérica «Magia y Fantasía»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth esoteric «Draoidheachd is Fantas»<br><strong>Pronunciación:</strong> /<em>BOO-h es-o-te-rik DROO-yajk is FAN-tas</em>/<br><strong>En inglés:</strong> Magic & Fantasy
		<br><br>
		«Magia y Fantasía» es una tienda esotérica de las que parecen sacadas de un cuento, situada en una calle comercial del Casco Antiguo, a pocos metros de la Catedral de Santa Euna. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII, con el escaparate pintado de morado oscuro y lleno de objetos llamativos: calderos de cristal, varitas, bolas de cristal, y un cartel de neón violeta que reza «Magia y Fantasía». No es la típica tienda de recuerdos para turistas: es un local frecuentado por aficionados serios al esoterismo, brujas modernas (Wicca), curiosos y algún que otro turista que busca un amuleto o un libro de hechizos, atraídos por la cercanía de la catedral (el contraste entre lo sagrado y lo esotérico es parte de su encanto). Venden velas de colores, inciensos, aceites esenciales, tarots, runas, cuarzos, grimorios (reproducciones), calderos de hierro fundido, varitas de madera tallada, athames (dagas rituales decorativas) y joyas esotéricas como colgantes de pentáculo, ojo de Horus o tréboles. El ambiente es oscuro, íntimo y perfumado: huele a incienso de sándalo y a cera de abejas. La dueña, una mujer de unos cincuenta años, es una bruja declarada (Wicca) y ofrece lecturas de tarot con cita previa. También organiza talleres de velas mágicas y ceremonias de luna llena en una sala trasera. Es un lugar respetado (y un poco temido) por los feligreses de la catedral, que a veces la miran con recelo, pero los turistas la adoran.`,
        pdfUrl: `#`,
        iconoTipo: `esoterico`
    },
    {
        xPx: 706,
        yPx: 409,
        nombre: `Tienda esotérica «El Rincón Esotérico»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth esoteric «Oisean Esoteric»<br><strong>Pronunciación:</strong> /<em>BOO-h es-o-te-rik OSH-an es-o-te-rik</em>/<br><strong>En inglés:</strong> The Esoteric Corner
		<br><br>
		«El Rincón Esotérico» es una pequeña y discreta tienda esotérica, especializada en astrología, tarot, velas rituales y cristales, situada en una calle tranquila del Casco Antiguo, cerca de la plaza central. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVII, con una fachada austera y un pequeño cartel de madera. A diferencia de otras tiendas esotéricas del distrito, esta es más sobria y profesional, sin el ambiente teatral de «Magia y Fantasía». Es frecuentada por clientes habituales (muchos de ellos vecinos del barrio), astrólogos aficionados y algún turista despistado que busca un amuleto. Venden velas de colores, inciensos, piedras semipreciosas, libros de astrología y tarot, péndulos, y joyas esotéricas discretas, como colgantes de símbolos planetarios o signos del zodiaco. El ambiente es íntimo, ordenado y tranquilo, con olor a incienso de sándalo y a papel viejo. El dueño, un hombre de mediana edad, es un astrólogo serio que ofrece consultas de carta astral con cita previa y dirige un pequeño círculo de estudio de astrología los jueves por la noche.`,
        pdfUrl: `#`,
        iconoTipo: `esoterico`
    },

	// ==================== OTROS
	
    {
        xPx: 787,
        yPx: 432,
        nombre: `Plaza central`,
        descripcionCorta: `<strong>En gaélico:</strong> Ceàrnag Mheadhanach<br><strong>Pronunciación:</strong> /<em>KYAR-nak VEE-an-ak</em>/<br><strong>En inglés:</strong> Central Square
		<br><br>
		La Plaza Central, conocida por los lugareños como «la Plaza» a secas, es el corazón del Casco Antiguo de Dunbhròn y uno de los espacios públicos más vibrantes de la ciudad. Con forma de hexágono y una superficie de unos 2.500 m², está rodeada por edificios de piedra amarilla de los siglos XVII y XVIII, con soportales en sus lados norte y sur. Durante el día, de lunes a sábado de 8:00 a 14:00, alberga el mercado diario de fruta, verdura, pescado y artesanía local. Por la noche, cuando los puestos se desmontan, la plaza se convierte en un lugar de tránsito para las personas. Cuatro semanas en verano (una al mes de junio a septiembre), la plaza se transforma en el Mercadillo Medieval de Dunbhròn, también conocido popularmente como «El Mercado del Dragón» por la leyenda de que un dragón dormía bajo sus piedras. Es entonces cuando el número de visitantes se dispara, llegando hasta 12.000 personas al día, y la plaza se llena de puestos de comida, artesanía, espectáculos de cetrería, torneos de caballeros y un ambiente festivo y caótico.`,
        pdfUrl: `docs/mercado_negro.pdf`,
        iconoTipo: `monumento`
    },
    {
        xPx: 694,
        yPx: 221,
        nombre: `Castillo de Dunbhròn`,
        descripcionCorta: `<strong>En gaélico:</strong> Caisteal Dhùn Bhròin<br><strong>Pronunciación:</strong> /<em>KASH-tyal GHOO-n VRO-in</em>/<br><strong>En inglés:</strong> Dunbhròn Castle
		<br><br>
		El Castillo de Dunbhròn, conocido popularmente como «la Tristeza» o «el Castillo del Pesar», es una fortaleza medieval del siglo XII que corona la colina más alta del Casco Antiguo. Construido en piedra arenisca amarilla, la misma de los edificios del casco histórico, domina la ciudad con su silueta imponente: una torre del homenaje de 25 metros, murallas almenadas y un foso seco que nunca se llenó de agua. Fue residencia de los condes de Dunbhròn durante siglos, luego cuartel militar, y hoy es un museo histórico gestionado por el ayuntamiento, abierto al público con entrada de pago. Es uno de los principales atractivos turísticos de la ciudad, pero también un lugar cargado de leyendas oscuras: se dice que en sus mazmorras aún habitan los espíritus de los prisioneros torturados, y que la «Dama de gris» (el fantasma más famoso de Dunbhròn) vaga por sus pasillos en las noches de luna llena. Los guías turísticos tienen un repertorio de anécdotas escalofriantes que cuentan a los visitantes más valientes.`,
        pdfUrl: `#`,
        iconoTipo: `castillo`
    },

    // ==================== COSTA NOVA ====================
	
	// ==================== BAR

	{
        xPx: 1069,
        yPx: 284,
        nombre: `Bar «El Fin de la Calle»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Ceann na Sràide»<br><strong>Pronunciación:</strong> /KYAN na SRAA-je/<br><strong>En inglés:</strong> End of the Street Bar<br><br>
		«El Fin de la Calle» es un bar deportivo de barrio situado en el extremo norte de Costa Nova, justo donde el paseo marítimo se convierte en una calle residencial que sube hacia los acantilados. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, con una fachada modesta que pasa desapercibida entre las tiendas de ultramarinos y los pisos de vecinos. Es el típico bar de toda la vida: barra de madera, taburetes altos, mesas de fórmica, y un olor a cerveza y a fritura que se ha quedado impregnado en las paredes. Es frecuentado por vecinos de Costa Nova, trabajadores del puerto, jubilados y algún turista despistado que busca un sitio auténtico, lejos de los chiringuitos de playa. La especialidad son las tapas calientes (calamares a la romana, croquetas, patatas bravas) que se sirven gratis con la consumición, de ahí su popularidad. Las pantallas siempre emiten deportes (fútbol, rugby, dardos) y el ambiente es animado pero sin alboroto. Abre desde el mediodía hasta la 1 de la madrugada, y los fines de semana retransmiten partidos importantes.
		<br><br>
		<strong>Tipo:</strong> Bar de barrio / Deportivo<br>
		<strong>Horario:</strong> 12:00 - 01:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril y tapas calientes (tortilla, croquetas, calamares).<br>
		<strong>Juegos:</strong> Dardos, máquinas tragaperras y pantallas deportivas.<br>
		<strong>Ambiente:</strong> Bar de toda la vida, con barra larga de madera, taburetes altos y mesas de fórmica. El aroma a cerveza y a fritura lo impregna todo.<br>
		<strong>Música:</strong> Pop o rock suave, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos, trabajadores del puerto y jubilados.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las tapas son gratis con la consumición.<br>
		✔️ Es famoso por sus calamares a la andaluza.<br>
		✔️ Los fines de semana retransmiten partidos de fútbol en las pantallas.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 1041,
        yPx: 369,
        nombre: `Bar «Tierras Lejanas»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Tìrean Fada»<br><strong>Pronunciación:</strong> /TII-ren FA-da/<br><strong>En inglés:</strong> Distant Lands Bar<br><br>
		«Tierras Lejanas» es un bar de copas temático de viajes, situado en una calle comercial de Costa Nova, a pocos minutos del paseo marítimo. Su fachada colorida y su cartel con un globo terráqueo atraen a una clientela joven y viajera: estudiantes Erasmus, mochileros, turistas y lugareños que buscan ambientes distintos. El interior está decorado con mapas, maletas viejas, banderas de países y fotografías de viajeros de todo el mundo. La especialidad son los cócteles exóticos (con nombres de países, como el «Mojito Cubano» o la «Caipirinha Brasileña»), las cervezas de importación y los rones de todo el mundo. También tienen una pequeña mesa de billar y dardos. La música es variada (reggae, salsa, flamenco, bossa nova) a volumen medio, y los miércoles organizan una noche de intercambio de idiomas muy popular entre los estudiantes. El ambiente es acogedor y desenfadado, con un toque bohemio, y es uno de los pocos locales de Costa Nova donde se respira un aire cosmopolita.
		<br><br>
		<strong>Tipo:</strong> Bar de copas / Temático de viajes<br>
		<strong>Horario:</strong> 17:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cócteles exóticos (con nombres de países), cervezas de importación y rones de todo el mundo.<br>
		<strong>Juegos:</strong> Dardos y billar (una mesa pequeña).<br>
		<strong>Ambiente:</strong> Decorado con mapas, maletas viejas, banderas de países y fotografías de viajeros. Ambiente de mochileros y aventureros.<br>
		<strong>Música:</strong> Música del mundo (reggae, salsa, flamenco, bossa nova), a volumen medio.<br>
		<strong>Clientela habitual:</strong> Viajeros, jóvenes, estudiantes Erasmus y gente que busca ambientes distintos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Disponen de un "mapa de viajes" donde la gente señala su ciudad de origen.<br>
		✔️ Los miércoles hay noche de intercambio de idiomas.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 1020,
        yPx: 466,
        nombre: `Bar «El Equilibrio»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Cothrom»<br><strong>Pronunciación:</strong> /an KO-trom/<br><strong>En inglés:</strong> The Balance Bar<br><br>
		«El Equilibrio» es un bar lounge de copas elegante situado en una de las calles más exclusivas de Costa Nova, a pocos metros del paseo marítimo, con vistas al mar desde su terraza acristalada. Es el lugar de moda entre la clientela de alto poder adquisitivo de Dunbhròn: profesionales liberales, parejas en busca de una velada romántica, y turistas que no escatiman en gastos. Su decoración combina el lujo discreto con la comodidad: sofás de terciopelo, mesas de mármol blanco, luces tenues y una terraza acristalada con vistas al mar. La especialidad son los cócteles de autor (creados por un mixólogo de renombre), las ginebras premium (más de 30 marcas, desde las clásicas inglesas hasta las artesanas escocesas) y el vermut de grifo, servido directamente de barricas de roble. El código de vestimenta es elegante (prohibidas las chanclas y los bañadores), los precios son altos, y los viernes hay un DJ que pincha música electrónica suave. Es el lugar para ver y ser visto en Costa Nova.
		<br><br>
		<strong>Tipo:</strong> Bar de copas / Lounge<br>
		<strong>Horario:</strong> 19:00 - 02:00<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (sofás)<br>
		<strong>Especialidad:</strong> Cócteles de autor, ginebras premium y vermut de grifo.<br>
		<strong>Juegos:</strong> Ninguno.<br>
		<strong>Ambiente:</strong> Elegante, con luces tenues, sofás de terciopelo y mesas bajas de mármol. Ambiente de coqueteo y conversación.<br>
		<strong>Música:</strong> Música electrónica suave (deep house, chill-out), a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Parejas, profesionales y gente de alto poder adquisitivo.<br><br>
		<strong>Notas:</strong><br>
		✔️ El código de vestimenta es elegante (prohibidas las chanclas y los bañadores).<br>
		✔️ La terraza tiene vistas al mar.<br>
		✔️ Los viernes hay DJ.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 1115,
        yPx: 450,
        nombre: `Bar «Las Musas»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Na Mùsan»<br><strong>Pronunciación:</strong> /na MU-san/<br><strong>En inglés:</strong> The Muses Bar<br><br>
		«Las Musas» es un bar cultural y alternativo situado a nivel del Paseo Marítimo. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, que fue antiguamente un taller de escultor, de ahí el nombre. Es un local con personalidad artística: paredes llenas de cuadros de artistas locales (a la venta), un escenario para micrófono abierto, y una decoración ecléctica que mezcla muebles reciclados con obras de arte contemporáneo. Es el punto de encuentro de artistas, estudiantes de bellas artes, músicos y bohemios de Dunbhròn, así como de turistas que buscan un ambiente auténtico y alternativo. La especialidad son las cervezas artesanas en botella, los vinos ecológicos, el vermut y las tapas vegetarianas. Ofrecen juegos de mesa (ajedrez, dominó, cartas), los martes hay micrófono abierto (poesía, monólogos, música acústica) y los jueves, concurso de talentos. Es un lugar ruidoso, desordenado, pero muy vivo. Se admiten mascotas.
		<br><br>
		<strong>Tipo:</strong> Bar cultural / Alternativo<br>
		<strong>Horario:</strong> 16:00 - 02:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza artesana (en botella), vinos ecológicos, vermut y tapas vegetarianas.<br>
		<strong>Juegos:</strong> Dardos y juegos de mesa (ajedrez, dominó, cartas).<br>
		<strong>Ambiente:</strong> Alternativo, con paredes llenas de cuadros de artistas locales y escenario para micrófono abierto. Ambiente de tertulia y creación.<br>
		<strong>Música:</strong> Indie, folk y rock alternativo, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Artistas, estudiantes de bellas artes y gente bohemia.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los martes hay micrófono abierto (poesía, monólogos, música).<br>
		✔️ Los jueves hay concurso de talentos.<br>
		✔️ Se venden obras de artistas locales.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 1080,
        yPx: 604,
        nombre: `Bar «La Costa Dorada»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Oirthir Òir»<br><strong>Pronunciación:</strong> /an OR-hir OIR/<br><strong>En inglés:</strong> The Golden Coast Bar<br><br>
		«La Costa Dorada» es un bar playero temático que funciona todo el año, situado en la zona más ancha del paseo marítimo de Costa Nova, a pocos metros de la playa de arena oscura. Su fachada de colores vivos (amarillo, azul celeste y blanco) y sus palmeras artificiales lo convierten en un imán para los turistas. Es un chiringuito de invierno con todas las de la ley: mesas de plástico blanco, sombrillas de colores, hamacas en la terraza en verano, y una decoración que evoca la costa mediterránea más que la escocesa. En invierno, encienden calefactores en la terraza y cierran la zona acristalada. La especialidad son las cervezas bien frías, la sangría, los mojitos y el pescaíto frito (calamares, boquerones, puntillitas) con ensaladilla. La música es latina, pop y reggaetón a volumen medio-alto, y el ambiente es festivo pero no conflictivo. Es muy popular entre familias, jóvenes y turistas que buscan un trocito de playa mediterránea en la fría Escocia. Los fines de semana hay DJ en directo.
		<br><br>
		<strong>Tipo:</strong> Bar playero / Chiringuito de invierno<br>
		<strong>Horario:</strong> 11:00 - 01:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza bien fría, sangría, mojitos y pescaito frito con ensaladilla.<br>
		<strong>Juegos:</strong> Dardos y futbolín.<br>
		<strong>Ambiente:</strong> Decorado con palmeras artificiales, sombrillas de colores y mesas de plástico blanco. Ambiente playero durante todo el año.<br>
		<strong>Música:</strong> Música latina, pop y reggaetón, a volumen medio-alto.<br>
		<strong>Clientela habitual:</strong> Turistas, familias y jóvenes.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuando hace bueno, abren la terraza exterior.<br>
		✔️ En invierno, utilizan calefactores.<br>
		✔️ El pescaito frito es casero.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 1096,
        yPx: 496,
        nombre: `Bar «El Gato de Pelo Corto»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Cat Goirid Fionn»<br><strong>Pronunciación:</strong> /an KAT GO-rid FION/<br><strong>En inglés:</strong> The Short-Haired Cat Bar<br><br>
		«El Gato de Pelo Corto» es un bar de gatos —el único de Dunbhròn— situado a escasos metros del paseo marítimo. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, reformado para crear un espacio acogedor y pensado para los felinos. Es un lugar único en la ciudad: un local donde los gatos viven libres, deambulan entre los clientes, se suben a las mesas con permiso, y ofrecen compañía y terapia felina a los visitantes. La especialidad son los cafés, infusiones, batidos y pasteles caseros (no se sirve alcohol, solo cerveza sin). Los juegos son los propios gatos: se puede jugar con ellos, acariciarlos, cepillarlos. El ambiente es relajado, con música suave de fondo y el característico olor a gato limpio (no a orín) mezclado con «hierba gatera». Es necesario reservar hora para entrar (control de aforo), y los gatos son adoptables: los clientes pueden llevarse a uno si cumplen los requisitos. No se permite la entrada con niños muy pequeños (menores de 5 años) para garantizar la seguridad de los animales.
		<br><br>
		<strong>Horario:</strong> 12:00 - 22:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café, infusiones, batidos y pasteles caseros. No se sirve alcohol (solo cerveza sin).<br>
		<strong>Juegos:</strong> Los gatos (se puede jugar con ellos).<br>
		<strong>Ambiente:</strong> Local lleno de rascadores, camas y juguetes para gatos. Los felinos viven allí y deambulan libres. El olor es a gato limpio.<br>
		<strong>Música:</strong> Música suave de fondo, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Amantes de los gatos, familias con niños y gente que busca terapia felina.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es necesario reservar hora para entrar (control de aforo).<br>
		✔️ Los gatos son adoptables.<br>
		✔️ No se permite la entrada con niños muy pequeños.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA
	
	{
        xPx: 1034,
        yPx: 497,
        nombre: `Biblioteca «Robert Louis Stevenson»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Raibeart Louis Stevenson»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan RA-pert LOO-is STE-ven-son</em>/<br><strong>En inglés:</strong> Robert Louis Stevenson Library
		<br><br>
		La Biblioteca «Robert Louis Stevenson» es la biblioteca pública principal de Costa Nova, situada en una calle ancha y arbolada a unos cuantos metros del paseo marítimo. Ocupa un edificio de piedra amarilla del siglo XVIII (antigua aduana marítima) que fue rehabilitado en 1985 para convertirlo en biblioteca, y ampliado en 2005 con un ala moderna de cristal y acero. Es un espacio luminoso, tranquilo y muy frecuentado por los vecinos del distrito, estudiantes, turistas que buscan un rato de lectura, y los aficionados a la literatura. Su colección supera los 30.000 volúmenes, con especial énfasis en literatura escocesa, novelas de aventuras y obras de Robert Louis Stevenson, de quien toma el nombre. Dispone de zona infantil, sala de estudio, ordenadores públicos, wifi gratuito y una pequeña cafetería con máquinas de café y aperitivos. Es un lugar de encuentro cultural: organizan clubes de lectura, tertulias literarias y talleres para niños. El ambiente es el de una biblioteca moderna y activa, pero sin perder el encanto de su arquitectura histórica.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },
		
	// ==================== CAFÉ - BAR
	
	{
        xPx: 1048,
        yPx: 268,
        nombre: `Cafetería «La Llave de Plata»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Deochair Airgid»<br><strong>Pronunciación:</strong> /an JO-jair AR-gid/<br><strong>En inglés:</strong> The Silver Key Café<br><br>
		«La Llave de Plata» es una cafetería-pastelería elegante y luminosa, situada en la calle principal de Costa Nova, a pocos metros del paseo marítimo y del acuario. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII, rehabilitado con un estilo moderno y luminoso: grandes ventanales de cristal, tonos azul marino y blanco, y una decoración que combina lo clásico con lo contemporáneo. Es el lugar de moda entre los turistas con poder adquisitivo, las familias de la zona y los profesionales que buscan un desayuno de calidad, un brunch tranquilo o una merienda con vistas a la calle. La especialidad son el café de especialidad (de tostación media, de origen único), la pastelería fina (croissants, pain au chocolat, tartas de frutas, scones con mermelada y clotted cream) y los zumos naturales. También tienen opciones sin gluten y veganas. El servicio es rápido y profesional, y el ambiente es relajado pero distinguido. En verano, la terraza de la acera está siempre llena.
		<br><br><strong>Tipo:</strong> Cafetería / Pastelería<br>
		<strong>Horario:</strong> 08:00 - 21:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de especialidad, pastelería fina, tartas de frutas y scones con mermelada y clotted cream.<br>
		<strong>Ambiente:</strong> Elegante y luminoso, con mesas de mármol blanco, sillas de terciopelo azul marino y grandes ventanales con vistas a la calle principal.<br>
		<strong>Música:</strong> Jazz suave o bossa nova, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Turistas con poder adquisitivo, familias y profesionales.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuenta con terraza en la acera.<br>
		✔️ El café es de tostación media.<br>
		✔️ Se admiten perros pequeños.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 1064,
        yPx: 396,
        nombre: `Cafetería «El Rincón Pequeño»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Cùil Beag»<br><strong>Pronunciación:</strong> /an KUUL BYAK/<br><strong>En inglés:</strong> The Small Nook Café<br><br>
		«El Rincón Pequeño» es una tetería íntima y acogedora, escondida en una calle secundaria de Costa Nova, alejada del bullicio del paseo marítimo y de las calles comerciales. Ocupa un pequeño local de piedra amarilla del siglo XVIII, antiguo taller de un tonelero, con una fachada modesta y apenas visible. Es el lugar preferido por los vecinos del distrito, los jubilados y la gente que busca tranquilidad para leer o charlar en voz baja. La especialidad son los tés de hojas sueltas (más de 20 variedades: desde el clásico English Breakfast hasta tés verdes japoneses y rooibos sudafricano), las infusiones de hierbas (preparadas con plantas del huerto local), y los bizcochos caseros y galletas de mantequilla. No disponen de wifi, para fomentar la conversación y la desconexión, y los dueños —una pareja mayor— atienden personalmente con una amabilidad casi familiar. Es un pequeño remanso de paz en la Costa Nova más turística.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Tetería<br>
		<strong>Horario:</strong> 09:00 - 20:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas)<br>
		<strong>Especialidad:</strong> Té de hojas sueltas (más de veinte variedades), infusiones, bizcochos caseros y galletas de mantequilla.<br>
		<strong>Ambiente:</strong> Acogedor y pequeño, con estanterías llenas de tazas y teteras de porcelana. El aroma a canela y vainilla lo impregna todo.<br>
		<strong>Música:</strong> Música clásica suave, a volumen muy bajo.<br>
		<strong>Clientela habitual:</strong> Vecinos, jubilados y gente que busca tranquilidad.<br><br>
		<strong>Notas:</strong><br>
		✔️ No disponen de wifi: es un sitio para desconectar.<br>
		✔️ Los dueños son una pareja mayor muy amable.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 1072,
        yPx: 484,
        nombre: `Cafetería «El Pájaro Azul»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An t-Eun Gorm»<br><strong>Pronunciación:</strong> /an CHEN GORM/<br><strong>En inglés:</strong> The Blue Bird Café<br><br>
		«El Pájaro Azul» es una cafetería-brunch moderna y fotogénica. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, completamente rehabilitado con un estilo nórdico-contemporáneo: paredes pintadas de azul claro, plantas colgantes, mesas de madera clara y una gran cantidad de luz natural. Es el lugar de moda entre los jóvenes, turistas, influencers y grupos de amigas que buscan un desayuno tardío o un brunch con opciones saludables y muy cuidadas estéticamente. La especialidad son los huevos benedictinos, las tostadas de aguacate, los bowls de yogur con granola y frutas, los smoothies bowls y los batidos. También tienen opciones veganas y sin gluten. El servicio es rápido y amable, y los fines de semana hay cola para el brunch (no aceptan reservas para grupos pequeños, solo para grupos de 4 o más). Es un local alegre, luminoso y muy activo en redes sociales.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Brunch<br>
		<strong>Horario:</strong> 09:00 - 22:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Brunch (huevos benedictinos, tostadas de aguacate, bowls de yogur y smoothies).<br>
		<strong>Ambiente:</strong> Moderno, con paredes pintadas de azul claro, plantas colgantes y mesas de madera clara. Muy fotogénico.<br>
		<strong>Música:</strong> Pop o indie, a volumen medio-bajo.<br>
		<strong>Clientela habitual:</strong> Jóvenes, turistas, influencers y grupos de amigas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay cola para el brunch.<br>
		✔️ Se aceptan reservas solo para grupos de cuatro o más personas.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 972,
        yPx: 464,
        nombre: `Cafetería «El Cuaderno Abierto»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Leabhar Fosgailte»<br><strong>Pronunciación:</strong> /an LYO-ar FOS-kal-te/<br><strong>En inglés:</strong> The Open Notebook Café<br><br>
		«El Cuaderno Abierto» es una cafetería-librería de segunda mano. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII, que fue antiguamente una imprenta, de ahí el nombre. Es un lugar íntimo y silencioso, frecuentado por estudiantes de la universidad (que bajan de la Colina del Saber), lectores, teletrabajadores y gente que busca un rato de tranquilidad con un buen libro. La mitad del local es una cafetería (con cafés de filtro, té, pasteles caseros y bocadillos fríos) y la otra mitad es una pequeña librería de segunda mano, con estanterías llenas de libros usados a la venta y también un área de préstamo gratuito. Ofrecen wifi gratuito y enchufes en casi todas las mesas, y los miércoles organizan un club de lectura muy popular entre los jubilados y los estudiantes. El ambiente es tranquilo, con olor a papel y a café, y música folk o de cantautor a volumen bajo.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Librería<br>
		<strong>Horario:</strong> 10:00 - 20:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de filtro, té, pasteles caseros y bocadillos fríos.<br>
		<strong>Ambiente:</strong> Tranquilo, con una pequeña librería de segunda mano en la parte trasera. Sofás y mesas bajas. El aroma a papel y café lo impregna todo.<br>
		<strong>Música:</strong> Folk o cantautor, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Estudiantes, lectores y gente que trabaja con el ordenador.<br><br>
		<strong>Notas:</strong><br>
		✔️ Disponen de wifi gratuito.<br>
		✔️ Se pueden leer los libros sin necesidad de comprarlos.<br>
		✔️ Se organizan clubes de lectura los miércoles.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 1078,
        yPx: 574,
        nombre: `Cafetería «Sinfonía»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «Symphonia»<br><strong>Pronunciación:</strong> /sim-FO-ni-a/<br><strong>En inglés:</strong> Symphony Café<br><br>
		«Sinfonía» es una cafetería musical única en Dunbhròn. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII, rehabilitado con un estilo elegante y bohemio, donde la música es el alma del local. En el centro de la sala preside un piano de cola (un Yamaha restaurado) que se toca en directo los jueves por la noche, y en las paredes cuelgan violines, violas y violonchelos (algunos decorativos, otros funcionales), además de partituras antiguas enmarcadas. Es el lugar de encuentro de amantes de la música clásica y el jazz, parejas en busca de un ambiente romántico, y gente mayor que disfruta de las veladas musicales. La especialidad son los cafés de especialidad, los cócteles sin alcohol (para los conciertos nocturnos) y las tablas de quesos y embutidos (no cocinan, solo ofrecen productos fríos de calidad). El aforo es reducido, unas 30 o 35 personas, y las entradas para los conciertos de los jueves se agotan rápido. Es un remanso de paz y buena música en la Costa Nova más turística.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Musical<br>
		<strong>Horario:</strong> 11:00 - 00:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café, copas, cócteles sin alcohol y tabla de quesos y embutidos.<br>
		<strong>Ambiente:</strong> Decorado con partituras, instrumentos de cuerda colgados y un piano de cola en el centro. Por las noches, música en vivo (piano, violín, jazz).<br>
		<strong>Música:</strong> Música clásica, jazz y piano en vivo, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Amantes de la música, parejas y gente mayor.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los jueves hay conciertos de piano.<br>
		✔️ El local es pequeño y las entradas se agotan rápido.<br>
		✔️ La carta de tés es extensa.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },

	// ==================== CATEDRALES / IGLESIAS
			
	// ==================== CENTRO DE SALUD
	
	{
        xPx: 1037,
        yPx: 397,
        nombre: `Centro de Salud de Costa Nova`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte Oirthir Nuadh<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te OR-heer NOO-agh»</em>/<br><strong>En inglés:</strong> New Coast Health Centre
		<br><br>
		El Centro de Salud de Costa Nova es el principal centro médico del distrito, situado en una calle ancha y arbolada. Es un edificio moderno y funcional (construido en 1995), de dos plantas, con una fachada de ladrillo claro y grandes ventanales. Atiende a una población de más de 15.000 residentes del distrito (más una enorme población flotante de turistas en verano), y está equipado con servicios de medicina general, pediatría, enfermería, urgencias básicas (sin hospitalización) y una pequeña unidad de fisioterapia. Es conocido por su eficiencia y por ser uno de los centros mejor financiados del sistema de salud de Dunbhròn, gracias a las contribuciones de los hoteleros de la zona. El personal es joven y profesional, y el ambiente es el de un ambulatorio moderno: limpio, ordenado, con menos saturación que el del Casco Antiguo, pero con cierta impersonalidad.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },
	{
        xPx: 1050,
        yPx: 574,
        nombre: `Centro de Salud «Elsie Inglis»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte «Eilidh Inglis»<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te AY-lee ING-lis</em>/<br><strong>En inglés:</strong> Elsie Inglis Health Centre
		<br><br>
		El Centro de Salud «Elsie Inglis» es el segundo centro médico de Costa Nova. Junto con el Centro de Salud de Costa Nova (que cubre la mitad norte), este centro atiende a la población residente de la mitad sur del distrito (unos 12.000 habitantes), así como a los turistas que se alojan en los hoteles de esa zona. Es un edificio más pequeño y modesto que el de Costa Nova, construido en 2008 para descongestionar el otro centro. Ocupa una parcela en una calle residencial, con una fachada de ladrillo claro y un pequeño jardín delantero. Ofrece servicios de medicina general, pediatría, enfermería y urgencias básicas (sin hospitalización). No tiene unidad de fisioterapia, por lo que derivan al otro centro. Es conocido por su ambiente más familiar y menos impersonal que su homólogo del norte, y por tener una unidad de atención a la salud mental (pequeña, con un psicólogo a tiempo parcial). El personal es joven y comprometido, con una alta rotación, ya que muchos médicos están de becarios.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },
	
	// ==================== CHIRINGUITOS
	
	{
        xPx: 1121,
        yPx: 338,
        nombre: `Chiringuito «La Ola Azul»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bothan «An Tonn Ghorm»<br><strong>Pronunciación:</strong> /<em>BO-han an TOWN GHOR-um</em>/<br><strong>En inglés:</strong> The Blue Wave<br><br>
		«La Ola Azul» es un chiringuito de playa situado en la zona más ancha del paseo marítimo de Costa Nova. Es el más grande y concurrido de los tres chiringuitos del distrito, abierto desde la mañana hasta la madrugada en verano. Su estructura de madera pintada de azul y blanco, con palmeras artificiales y sombrillas de colores, evoca las playas mediterráneas más que las escocesas. Es el lugar favorito de bañistas, turistas, familias y jóvenes que buscan una cerveza fría, un mojito o un pescaíto frito con vistas al mar. La terraza de hamacas y mesas de plástico se extiende sobre la arena en verano, y en invierno instalan calefactores y cierran la zona acristalada. La música es variada (reggaetón, salsa, pop, chill-out) a volumen medio-alto. Los fines de semana hay DJ en directo. Es un local alegre, ruidoso y desenfadado, el epicentro de la vida playera en Costa Nova.
		<br><br>
		<strong>Tipo:</strong> Chiringuito de playa<br>
		<strong>Horario:</strong> 10:00 - 02:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (hamacas y mesas de plástico en la arena)<br>
		<strong>Especialidad:</strong> Cerveza fría, sangría, mojitos, pescaito frito, ensaladilla y bocadillos de calamares.<br>
		<strong>Ambiente:</strong> Desenfadado y playero, con música ambiental y el sonido del mar de fondo. Terraza con sombrillas de colores.<br>
		<strong>Música:</strong> Música latina, pop y chill-out, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Bañistas, turistas y familias.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay DJ en directo.<br>
		✔️ Solo se acepta efectivo.<br>
		✔️ Las hamacas tienen un consumo mínimo.`,
        pdfUrl: `#`,
        iconoTipo: `chiringuito`
    },
	{
        xPx: 1169,
        yPx: 454,
        nombre: `Chiringuito «El Ancla Perdida»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bothan «An Acair Chaillte»<br><strong>Pronunciación:</strong> /<em>BO-han an A-kar KAYL-te</em>/<br><strong>En inglés:</strong> The Lost Anchor<br><br>
		«El Ancla Perdida» es un chiringuito de playa temático y marinero, situado en la zona sur del paseo marítimo de Costa Nova, frente a una pequeña cala rocosa y a pocos metros del puerto deportivo. Es más pequeño y menos masificado que «La Ola Azul», con una decoración que evoca un viejo barco pesquero: redes, boyas, un ancla gigante clavada en la arena (de verdad) y un mástil con velas decorativas. Es frecuentado por familias, jóvenes y turistas que buscan un ambiente más auténtico y menos ruidoso que su vecino del norte. La especialidad son los cócteles (mojito, piña colada, daiquiri), el pescado a la plancha y las sardinas espetadas, su plato estrella. También tienen una pequeña tienda de souvenirs al lado. La música es rock suave, pop y música de los 80 y 90, a volumen medio. Los fines de semana hay música en vivo con grupos locales de versiones. El ambiente es festivo pero ordenado, y se admiten perros en la terraza.
		<br><br>
		<strong>Tipo:</strong> Chiringuito de playa / Temático<br>
		<strong>Horario:</strong> 11:00 - 01:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cócteles (mojito, piña colada, daiquiri), pescado a la plancha y sardinas espetadas.<br>
		<strong>Ambiente:</strong> Decorado con un ancla gigante clavada en la arena, redes y boyas. Ambiente marinero y auténtico.<br>
		<strong>Música:</strong> Rock suave, pop y música de los ochenta y noventa, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Familias, jóvenes y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las sardinas espetadas son la especialidad de la casa.<br>
		✔️ Cuentan con una pequeña tienda de souvenirs al lado.<br>
		✔️ Se admiten perros en la terraza.`,
        pdfUrl: `#`,
        iconoTipo: `chiringuito`
    },
	{
        xPx: 1189,
        yPx: 661,
        nombre: `Chiringuito «Las Gaviotas»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bothan «Na Faoileagan»<br><strong>Pronunciación:</strong> /<em>BO-han na OO-le-gan</em>/<br><strong>En inglés:</strong> The Seagulls<br><br>
		«Las Gaviotas» es el chiringuito de playa más familiar y modesto de Costa Nova, situado en la zona sur del paseo marítimo y a poca distancia del puerto deportivo. Es el único de los tres que cierra temprano, a las 20:00, y no sirve alcohol por la noche (solo cerveza sin alcohol después de las 18:00). Está gestionado por una familia de toda la vida, los MacDougall, que lleva tres generaciones ofreciendo bocadillos, refrescos y helados a los bañistas. Es un local sencillo, sin pretensiones: mesas de plástico blanco, sombrillas desgastadas, y un ambiente de barrio playero donde los vecinos se conocen. Es frecuentado por familias con niños, gente mayor y bañistas que buscan un sitio tranquilo, económico y auténtico. Los fines de semana montan castillos hinchables para los niños en la arena. Es el chiringuito de los que no quieren ruido ni alcohol.
		<br><br>
		<strong>Tipo:</strong> Chiringuito de playa / Familiar<br>
		<strong>Horario:</strong> 09:00 - 20:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Bocadillos (calamares, tortilla, jamón y queso), refrescos, helados y café.<br>
		<strong>Ambiente:</strong> Familiar y sencillo, con mesas de plástico y sombrillas. Es el chiringuito de toda la vida.<br>
		<strong>Música:</strong> Música suave de fondo (pop, baladas), a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Familias con niños, gente mayor y bañistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es el único chiringuito que cierra temprano.<br>
		✔️ Los fines de semana hay castillos hinchables para niños.<br>
		✔️ No se sirve alcohol a partir de las seis de la tarde.`,
        pdfUrl: `#`,
        iconoTipo: `chiringuito`
    },

	// ==================== COLEGIOS
	
	{
        xPx: 1069,
        yPx: 369,
        nombre: `Colegio «Fuente Santa»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «an Tobair Naoimh»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl an To-par Név</em>/<br><strong>En inglés:</strong> Holy Well Primary
		<br><br>
		El Colegio «Fuente Santa» es una escuela de educación primaria (de 4 a 11 años) en una calle tranquila y arbolada. Es un centro moderno y bien equipado, construido en 1995 para atender a la creciente población del distrito, tanto residentes como hijos de trabajadores de la hostelería. Ocupa un edificio de ladrillo claro de dos plantas, rodeado de zonas verdes y un patio de juegos. Tiene unos 200 alumnos aproximadamente, de orígenes diversos, desde hijos de profesionales liberales hasta niños de familias inmigrantes que trabajan en los hoteles. Es conocido por su programa de inglés para extranjeros (muchos alumnos no hablan inglés al llegar) y por su huerto escolar. El ambiente es el de una escuela de barrio costero: abierta, luminosa y con vistas al mar desde algunas aulas. La dirección es joven y progresista para los estándares de Dunbhròn, lo que a veces genera tensiones con los padres más tradicionales.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
	{
        xPx: 1029,
        yPx: 538,
        nombre: `Colegio «Valle del Ciervo»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Ghleann Damh»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Ylaun Dav</em>/<br><strong>En inglés:</strong> Deer Valley Primary
		<br><br>
		El Colegio «Valle del Ciervo» es una escuela de educación primaria (de 4 a 11 años) situada en una calle residencial tranquila. Es un centro más pequeño y modesto que su homólogo «Fuente Santa» (al norte del distrito), con unos 120 alumnos. Fue construido en 1975 —y remodelado en 2016— para atender a las familias trabajadoras de la zona: pescadores, pequeños comerciantes, personal de hostelería. El edificio es de ladrillo rojo, de dos plantas, sin grandes pretensiones arquitectónicas. Tiene un ambiente más humilde y cercano que el otro colegio, con menos recursos pero con un profesorado muy implicado. Es conocido por su huerto escolar (herencia de cuando el barrio tenía zonas rurales) y por su programa de apoyo a familias desfavorecidas. La dirección es tradicional y conservadora, pero el equipo docente, más joven, intenta introducir cambios. La relación con las familias es muy estrecha: muchos padres son antiguos alumnos.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
		
	// ==================== COMISARÍAS
	
	// ==================== DISCOTECA
	
	{
        xPx: 1111,
        yPx: 287,
        nombre: `Discoteca «La Puerta Zero»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Club-oidhche «An Doras Neoni»<br><strong>Pronunciación:</strong> /an DO-ras NYO-ni/<br><strong>En inglés:</strong> Zero Door Club
		<br><br>
		«La Puerta Zero» es la discoteca más grande y popular de Costa Nova, situada en primera línea de playa. Ocupa un edificio de hormigón de dos plantas construido en 2005, con una gran terraza acristalada que da directamente a la arena. Es conocida por sus fiestas nocturnas en la playa (con permiso municipal obtenido en 2020), que han convertido el local en un referente del ocio nocturno en Dunbhròn. Su clientela es mayoritariamente joven (de 18 a 30 años), turistas y estudiantes, atraídos por la música electrónica, el reggaetón y el pop comercial, así como por los espectáculos de luz y sonido en la arena. El local cuenta con dos pistas de baile (interior y exterior), una barra muy larga y un escenario para DJs y espectáculos. El ambiente es festivo, caótico y a veces conflictivo, como toda discoteca de moda. Los fines de semana, las colas para entrar llegan hasta la calle.
		<br><br>
		<strong>Tipo:</strong> Discoteca / Sala de fiestas (con zona de playa habilitada)<br>
		<strong>Horario:</strong> 22:00 - 06:00 (viernes y sábados; la terraza acristalada abre como bar-playa por el día)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (cabinas VIP en interior y hamacas con servicio de botella en la playa)<br>
		<strong>Especialidad:</strong> Cubatas, chupitos, cerveza de barril, mojitos y servicio de botella en VIP.<br>
		<strong>Juegos:</strong> Ninguno (el baile es la actividad principal).<br>
		<strong>Ambiente:</strong> Festivo, caótico y a veces conflictivo, con música a volumen muy alto, luces estroboscópicas y láseres. En verano, la fiesta se extiende a la playa.<br>
		<strong>Música:</strong> Música electrónica, reggaetón y pop comercial, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes (18-30 años), turistas y estudiantes.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es la discoteca más grande y popular de Costa Nova, situada en primera línea de playa.<br>
		✔️ Ocupa un edificio de hormigón de dos plantas construido en 2005, con una gran terraza acristalada que da directamente a la arena.<br>
		✔️ Las noches de verano cuentan con permiso municipal para realizar fiestas en la playa (desde 2020), con una zona habilitada de unos doscientos metros cuadrados.<br>
		✔️ Consta de pista interior (planta baja), terraza acristalada (segunda pista) y zona de playa exterior con plataforma de baile y escenario.<br>
		✔️ Capacidad total: unas ochocientas personas (interior, terraza y playa).<br>
		✔️ Los porteros cobran entrada y revisan bolsos a la entrada.<br>
		✔️ El guardarropa cuesta dos libras.<br>
		✔️ Los baños cuentan con personal de aseo que cobra propina.<br>
		✔️ El sonido se extiende por toda la playa en verano, lo que genera quejas ocasionales de los vecinos (aunque el local tiene licencia).`,
        pdfUrl: `#`,
        iconoTipo: `discoteca`
    },

	// ==================== HELADERÍAS
	
	{
        xPx: 1081,
        yPx: 340,
        nombre: `Heladería «The Icecream Boat»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàta reòiteag<br><strong>Pronunciación:</strong> /<em>BA-ta RYO-tek</em>/<br><strong>En inglés:</strong> The Icecream Boat
		<br><br>
		«The Icecream Boat» es una heladería temática única en Dunbhròn. Ocupa un antiguo barco de pesca (un arrastrero de los años 60) que ha sido varado en la arena, rehabilitado y convertido en un local de helados artesanales. Es uno de los lugares más fotografiados de Costa Nova, especialmente por los turistas y los niños. La especialidad son los helados artesanales —fabricados por la dueña con ingredientes locales: leche de oveja, frutas de la región, y opciones veganas—, los smoothies y los granizados. También venden gofres y crepes. El local es pequeño y acogedor, con una terraza de mesas de madera sobre la arena. Es frecuentado por familias con niños, jóvenes y turistas que buscan un capricho dulce con vistas al mar. El ambiente es alegre y desenfadado, con música pop suave de fondo.
		<br><br>
		<strong>Tipo:</strong> Heladería temática / Barco de helados<br>
		<strong>Horario:</strong> 11:00 - 21:00 (horario de verano; en invierno cierra antes)<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (terraza sobre la arena con seis u ocho mesas, y dos mesas altas en el interior)<br>
		<strong>Especialidad:</strong> Helados artesanales (con leche de oveja y frutas de la región), smoothies, granizados, gofres y crepes.<br>
		<strong>Juegos:</strong> Ninguno.<br>
		<strong>Ambiente:</strong> Alegre y desenfadado, con vistas al mar. El sonido de las olas y el tintineo de las cucharas se mezclan con la música pop suave de fondo.<br>
		<strong>Música:</strong> Pop suave, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Familias con niños, jóvenes, turistas y paseantes que buscan un capricho dulce con vistas al mar.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es uno de los lugares más fotografiados de Costa Nova: ocupa un antiguo barco de pesca (arrastrero de los años sesenta) varado en la arena y rehabilitado.<br>
		✔️ Se conservan elementos originales como el timón, los cabos de amarre y las escaleras de mano. El mástil se ha convertido en un poste con banderines.<br>
		✔️ La heladería es muy pequeña (apenas doce metros cuadrados en el interior), con capacidad para veinte o veinticinco personas en la terraza y seis u ocho en el interior.<br>
		✔️ La barra está en cubierta (exterior, bajo un toldo), con una vitrina refrigerada que exhibe los sabores del día.<br>
		✔️ No dispone de baños propios: los clientes usan los baños públicos del paseo marítimo.<br>
		✔️ La dueña fabrica los helados artesanalmente con ingredientes locales.<br>
		✔️ El local no tiene máquina de café (solo helados, smoothies, gofres y crepes).<br>
		✔️ Huele a helado de fresa y a gofre recién hecho. Las gaviotas se acercan con frecuencia.`,
        pdfUrl: `#`,
        iconoTipo: `heladeria`
    },
	{
        xPx: 1086,
        yPx: 454,
        nombre: `Heladería «Gelato di Nonna»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Reòiteag na Seanmhar<br><strong>Pronunciación:</strong> /<em>RYO-tek na SHAYN-var</em>/<br><strong>En inglés:</strong> Nonna's Gelato
		<br><br>
		«Gelato di Nonna» es una heladería artesanal de estilo italiano. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, rehabilitado con una estética que evoca una antigua heladería de Roma: paredes de azulejos blancos y azules, mármol en la barra, vitrinas de acero inoxidable y un letrero de neón con el nombre. Es famosa por sus helados artesanos elaborados a diario con recetas tradicionales italianas (leche entera, fruta natural, pistachos de Bronte, etc.), así como por sus granizados y brioches. La dueña es una señora italiana de mediana edad —Nonna significa «abuela» en italiano— que llegó a Dunbhròn hace treinta años y ha convertido su heladería en una institución local. El ambiente es familiar, acogedor y muy popular entre turistas, familias y jóvenes. No tienen terraza, solo algunas mesas en el interior. Los fines de semana se forman colas.
		<br><br>
		<strong>Tipo:</strong> Heladería artesanal / Estilo italiano<br>
		<strong>Horario:</strong> 10:00 - 23:00 (cierra más tarde en verano)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (ocho mesas de mármol en el interior y cuatro en la acera)<br>
		<strong>Especialidad:</strong> Helados artesanales elaborados a diario con recetas tradicionales italianas (pistacho de Bronte, stracciatella, limón, fresa, chocolate, tiramisú), granizados y brioches.<br>
		<strong>Juegos:</strong> Rincón infantil con pizarra para dibujar y cesta de juguetes pequeños.<br>
		<strong>Ambiente:</strong> Elegante, limpio y acogedor, con una estética de heladería italiana de los años cincuenta: azulejos blancos y azules, suelo de mármol en damero y lámparas colgantes de latón. Música italiana clásica o pop de fondo.<br>
		<strong>Música:</strong> Música italiana (clásica o pop), a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Turistas, familias con niños, jóvenes y amantes del helado artesano.<br><br>
		<strong>Notas:</strong><br>
		✔️ Fundada por una señora italiana llegada a Dunbhròn hace treinta años, se ha convertido en una institución local.<br>
		✔️ En la pared del fondo preside una foto enorme de la abuela de la dueña (Nonna) haciendo helado en Sicilia.<br>
		✔️ Ocupa la planta baja de un edificio de piedra arenisca amarilla del siglo XIX, rehabilitado con una fachada pintada en blanco y azul celeste.<br>
		✔️ Cuenta con toldo de rayas blancas y azules, y un cartel de neón rosa con el nombre.<br>
		✔️ La barra es de mármol blanco, con una vitrina refrigerada que exhibe unos veinte sabores.<br>
		✔️ No dispone de terraza propiamente dicha, sino de cuatro mesas en la acera con sombrillas.<br>
		✔️ Capacidad aproximada: treinta o treinta y cinco personas.<br>
		✔️ Los baños están en la parte trasera, decorados con azulejos blancos y un cartel de "Grazie".<br>
		✔️ Personal fijo: la dueña, una ayudante italiana y una camarera local.`,
        pdfUrl: `#`,
        iconoTipo: `heladeria`
    },
	{
        xPx: 1076,
        yPx: 542,
        nombre: `Heladería «Scoop & Sail»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Reòiteag is Seòl<br><strong>Pronunciación:</strong> /<em>RYO-tek is SHYOL</em>/<br><strong>En inglés:</strong> Scoop & Sail
		<br><br>
		«Scoop & Sail» es una heladería marinera. Ocupa una pequeña estructura de madera pintada de azul y blanco, con forma de caseta de salvavidas, y tiene una pequeña terraza con vistas al mar. Es un local muy popular entre los navegantes, las familias y los turistas que pasean por el puerto. La especialidad son los helados artesanos con nombres de velas, como «Brisa Marina» (menta con chocolate), «Viento del Este» (coco y lima) o «Timón de Fresa» (fresa natural), así como los sorbetes y los batidos. También venden barritas heladas artesanales con palitos de madera. El local es diminuto, con una barra donde se sirve y pocas mesas en la terraza. El dueño es un exmarinero escocés que aprendió a hacer helados durante sus viajes al Mediterráneo.
		<br><br>
		<strong>Tipo:</strong> Heladería marinera / Quiosco<br>
		<strong>Horario:</strong> 11:00 - 20:00 (horario de verano; en invierno abre solo los fines de semana)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (terraza con seis mesas redondas de madera pintada de azul)<br>
		<strong>Especialidad:</strong> Helados artesanales con nombres de velas (Brisa Marina —menta con chocolate—, Viento del Este —coco y lima—, Timón de Fresa —fresa natural—), sorbetes, batidos y barritas heladas artesanales con palito de madera.<br>
		<strong>Juegos:</strong> Ninguno.<br>
		<strong>Ambiente:</strong> Marinero y relajado, con vistas al puerto deportivo. El olor a mar se mezcla con el barquillo de helado y la fruta fresca. Se oyen las gaviotas, el chapoteo de las olas en los barcos y alguna risa de niños.<br>
		<strong>Música:</strong> No tienen música ambiental (se escucha el sonido del puerto).<br>
		<strong>Clientela habitual:</strong> Navegantes, familias con niños, turistas que pasean por el puerto y amantes del helado artesano.<br><br>
		<strong>Notas:</strong><br>
		✔️ Ocupa una pequeña estructura de madera pintada de azul y blanco con forma de caseta de salvavidas, situada sobre una plataforma en el paseo del puerto.<br>
		✔️ La cubierta imita una vela desplegada y el cartel tiene forma de vela con el nombre pintado en azul.<br>
		✔️ El dueño es un exmarinero escocés que aprendió a hacer helados durante sus viajes al Mediterráneo.<br>
		✔️ El interior es una sola estancia (unos diez metros cuadrados) donde solo caben la barra, un congelador y un pequeño almacén. No hay mesas dentro.<br>
		✔️ Capacidad: solo terraza, para unas veinte o veinticinco personas.<br>
		✔️ Personal fijo: el dueño y una empleada eventual.<br>
		✔️ Los clientes hacen cola en el exterior, delante de la barra.`,
        pdfUrl: `#`,
        iconoTipo: `heladeria`
    },

	// ==================== HOSPITALES
	
	{
        xPx: 982,
        yPx: 516,
        nombre: `Hospital de Costa Nova`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ospadal Oirthir Nuadh<br><strong>Pronunciación:</strong> /<em>OS-pa-tal OR-heer NOO-agh</em>/<br><strong>En inglés:</strong> New Coast Hospital
		<br><br>
		El Hospital de Costa Nova es el centro sanitario de referencia para la zona este de Dunbhròn. Situado en una parcela amplia en la zona central del distrito, en una calle ancha que conecta la zona residencial con el paseo marítimo. Es un hospital grande y bien equipado, con una capacidad de más de 300 camas y una plantilla de unos 1.200 empleados (médicos, enfermeras, personal administrativo y de mantenimiento). Fue construido en 1988 para descongestionar el Hospital Real del Casco Antiguo. Y desde entonces ha crecido con varias ampliaciones. La última en 2015. Pudiendo atender a una población que supera los 100.000 habitantes: incluyendo todo Costa Nova, el Barrio Gótico, la Zona Industrial, buena parte del Corazón Roto y el sur del Casco Antiguo. Es conocido por su servicio de urgencias. El más saturado de la ciudad, sobre todo los fines de semana por las peleas del Corazón Roto, por los accidentes en la Zona Industrial; por su unidad de psiquiatría y por su unidad de quemados. Pequeña pero bien dotada. El edificio es una mezcla de estilos: el ala original de los 80 (hormigón visto) y varias ampliaciones más modernas (cristal y acero). El ambiente es el de un gran hospital público: ajetreo, listas de espera, personal con prisas, pero también profesionales vocacionales.`,
        pdfUrl: `#`,
        iconoTipo: `hospital`
    },

	// ==================== HOTELES/HOSTALES
	
	{
        xPx: 1131,
        yPx: 424,
        nombre: `The Grand Oceanic Hotel & Spa`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-òsta Mòr a' Chuain is Spà<br><strong>Pronunciación:</strong> /<em>Tai-OS-ta MOR a CHOO-an is SPÀ»</em>/<br><strong>En inglés:</strong> The Grand Oceanic Hotel & Spa
		<br><br>
		The Grand Oceanic Hotel & Spa es el hotel de lujo más exclusivo de Costa Nova, y uno de los más caros de Dunbhròn. Situado en la zona central del paseo marítimo, a pocos metros de la playa de arena oscura y con vistas panorámicas al mar desde casi todas sus habitaciones, ocupa un edificio de estilo victoriano rehabilitado (original de 1885) que fue ampliado en 2005 con un ala moderna de cristal y acero. Es un hotel de 5 estrellas, con 120 habitaciones (incluyendo 12 suites de lujo), un spa de primer nivel (con piscina climatizada, sauna, baño turco, jacuzzi y tratamientos de belleza), un restaurante con una estrella Michelin (gastronomía escocesa de autor), un bar lounge con vistas al mar, y varios salones para banquetes y congresos. Es frecuentado por celebridades, políticos, ejecutivos de alto nivel y turistas adinerados que buscan privacidad y lujo. La plantilla supera los 120 empleados, con una gerencia muy estricta y un servicio impecable. El edificio combina la elegancia victoriana (mármoles, arañas de cristal, suelos de madera) con las comodidades modernas (climatización, wifi ultrarrápido, domótica en las suites). Es el hotel de referencia para las estrellas de cine que visitan Escocia, y ha alojado a miembros de la realeza en visitas privadas.`,
        pdfUrl: `#`,
        iconoTipo: `hotel`
    },
	{
        xPx: 1138,
        yPx: 593,
        nombre: `The Dunbhròn Marina & Yatch Club`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Club Luingeis is Marina Dhùn Bhròn<br><strong>Pronunciación:</strong> /<em>Kloob LOON-esh is MA-ri-na JUN VRON</em>/<br><strong>En inglés:</strong> Dunbhròn Marina & Yacht Club
		<br><br>
		The Dunbhròn Marina & Yacht Club es un hotel de lujo discreto y exclusivo, situado en la parte sur del distrito, junto a los amarres de los grandes yates y megayates del puerto deportivo. Ocupa un edificio de piedra arenisca amarilla de estilo georgiano (construido en 1820 como almacén del puerto), rehabilitado en 1995 y ampliado en 2010 con un ala moderna de cristal y acero. Es el hotel preferido por navegantes adinerados, empresarios, políticos y celebridades que buscan privacidad y discreción absoluta. Su lema no escrito es «lo que pasa en el Yacht Club, se queda en el Yacht Club». Cuenta con 80 habitaciones (todas suites), un restaurante de alta cocina (especializado en marisco), un club náutico privado (solo para miembros y huéspedes), un spa pequeño pero exclusivo, y un pantanal privado (muelle de acceso restringido). Es conocido por sus entradas y salidas discretas: el puerto permite acceder directamente a las suites sin pasar por recepción, lo que lo convierte en el lugar ideal para affairs de alto nivel, reuniones de empresarios que no quieren ser vistos, y encuentros discretos. A pesar de su reputación intachable en la fachada (es un hotel respetable, con dos estrellas Michelin y miembros de la realeza en su lista de huéspedes), los rumores sobre lo que ocurre en sus suites con vistas al puerto son moneda corriente en los círculos de la élite de Dunbhròn y entre los periodistas de la prensa rosa. El hotel tiene una política de confidencialidad muy estricta: los empleados firman acuerdos de confidencialidad y hay cámaras de seguridad en los accesos, pero no en las habitaciones.`,
        pdfUrl: `#`,
        iconoTipo: `hotel`
    },

	// ==================== INSTITUTOS
	

	{
        xPx: 1053,
        yPx: 604,
        nombre: `Instituto «La Orilla del Viento»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd-sgoil «Cladach na Gaoithe»<br><strong>Pronunciación:</strong> /<em>Ard-sgoyl Kla-daj na Gúi-e</em>/<br><strong>En inglés:</strong> Windshore Academy
		<br><br>
		El Instituto «La Orilla del Viento» es el centro de educación secundaria de referencia para la zona este de Dunbhròn. Fue construido en 1972. Y posteriormente remodelado y ampliado en 2005. Alberga a unos 800 alumnos de 12 a 18 años (GCSE y GCE). Su área de captación es enorme: además de Costa Nova, recibe estudiantes del Barrio Gótico, la Zona Industrial, el Corazón Roto y la parte sur del Casco Antiguo. Es un centro concertado con una población estudiantil muy diversa socialmente: desde hijos de profesionales adinerados (de Costa Nova) hasta adolescentes de familias obreras (del Puerto Bajo) y algunos de entornos marginales (del Corazón Roto). Esta mezcla genera tensiones frecuentes (peleas, acoso escolar, pequeñas bandas), y la dirección tiene que lidiar con conflictos casi a diario. El instituto es conocido por su equipo de rugby (el mejor de la ciudad), por su orquesta (que toca en la catedral en Navidad) y por sus casos de acoso homófobo, que la dirección, de corte tradicional, intenta silenciar para no dañar la reputación. Las instalaciones son funcionales pero algo desgastadas, con un gimnasio, campos deportivos, aulas de taller, laboratorios y una biblioteca pequeña. El ambiente es el de un instituto grande, ruidoso y a veces conflictivo, pero con una plantilla de profesores vocacionales que intentan sacar lo mejor de sus alumnos.`,
        pdfUrl: `#`,
        iconoTipo: `instituto`
    },

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS
	
	{
        xPx: 1053,
        yPx: 463,
        nombre: `Parque de Bomberos de Costa Nova`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh Oirthir Nuadh<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay OR-heer NOO-agh</em>/<br><strong>En inglés:</strong> New Coast Fire Station
		<br><br>
		El Parque de Bomberos de Costa Nova es la estación principal del cuerpo de bomberos en el distrito, situado en una calle ancha y funcional en la zona central de Costa Nova. Es un edificio moderno y bien equipado, construido en 1998 y ampliado en 2012, que da servicio a todo el distrito de Costa Nova, así como a las áreas colindantes del Corazón Roto (sur) y la Zona Industrial (por la carretera de circunvalación). Tiene una plantilla de 50 bomberos profesionales (más personal administrativo y de mantenimiento) que trabajan en turnos rotativos de 24 horas. Dispone de cuatro vehículos principales (un camión de bomberos urbano, una autoescala, una unidad de rescate y una bomba forestal para incendios en los bosques cercanos, como el Bosque de los Faros), así como furgonetas de apoyo y una embarcación de rescate guardada en el puerto deportivo, a 500 metros. Es un servicio muy valorado por los vecinos y por los hoteleros, que han contribuido a su equipamiento. El ambiente es el de un cuartel moderno: compañerismo, profesionalidad, y un toque de tensión por la alta afluencia turística en verano, que aumenta los accidentes y los incendios en los hoteles.`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },
	
	// ==================== PUBS
	
	{
        xPx: 1064,
        yPx: 513,
        nombre: `Pub «El Ratón Beodo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Luch Ìobrach»<br><strong>Pronunciación:</strong> /an LUCH II-braj/<br><strong>En inglés:</strong> The Drunken Mouse Pub<br><br>
		«El Ratón Beodo» es un pub temático y humorístico. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, rehabilitado con una decoración que mezcla el kitsch y la diversión: un gran ratón beodo de fibra de vidrio (de 2 metros) da la bienvenida en la entrada, y en el interior hay dibujos y estatuas de ratones con gafas de sol, sombrero y botella de cerveza. Es un local muy popular entre los jóvenes, turistas y grupos de amigos, especialmente los fines de semana, cuando hay karaoke y concurso de disfraces de ratón. La especialidad son las cervezas de barril, los cubatas y los chupitos (con nombres de ratones famosos: Mickey, Jerry, Speedy). Tienen billar, dardos, y el ambiente es desenfadado y caótico, con música pop y rock de los 80 y 90 a volumen alto. El aforo es pequeño y se llena rápidamente.
		<br><br>
		<strong>Tipo:</strong> Pub temático (humorístico)<br>
		<strong>Horario:</strong> 19:00 - 04:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril, cubatas y chupitos.<br>
		<strong>Juegos:</strong> Billar, dardos y karaoke los viernes.<br>
		<strong>Ambiente:</strong> Decorado con dibujos y estatuas de ratones beodos, con gafas de sol y sombrero. Ambiente desenfadado y caótico.<br>
		<strong>Música:</strong> Pop, rock y música de los ochenta y noventa, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes, grupos de amigos y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las copas llevan nombres de ratones famosos (Mickey, Jerry, Speedy).<br>
		✔️ El local es pequeño y se llena rápidamente.<br>
		✔️ Los viernes hay concurso de disfraces de ratón.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 1076,
        yPx: 630,
        nombre: `Pub «El Caballo Salvaje»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «Each Fiadhaich»<br><strong>Pronunciación:</strong> /EJ FII-yaij/<br><strong>En inglés:</strong> The Wild Horse Pub
		<br><br>
		«El Caballo Salvaje» es un pub rockero y vaquero de ambiente duro ubicado en una calle ancha y concurrida. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, rehabilitado con una decoración de taberna del oeste americano: una entrada con arco de madera que imita la puerta de un saloon, y en el interior, sillas de montar, cuerdas, sombreros vaqueros y carteles de grupos de rock sureño (Lynyrd Skynyrd, ZZ Top, The Allman Brothers). Es un pub frecuentado por rockeros, moteros, vaqueros de ciudad y turistas que buscan un ambiente auténtico y algo peligroso. La especialidad son los whiskies (de malta, bourbon y rye), así como las cervezas de barril. Tienen dardos y billar, y los fines de semana hay conciertos de grupos locales de rock sureño. El ambiente es oscuro, con música alta (rock duro, metal y country rock), y no es raro que se produzcan altercados, como peleas entre borrachos. Es un local de culto para los aficionados al género, con una clientela fiel que se conoce de años.
		<br><br>
		<strong>Tipo:</strong> Pub rockero / Vaquero<br>
		<strong>Horario:</strong> 20:00 - 05:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Whisky (de malta, bourbon y rye).<br>
		<strong>Juegos:</strong> Dardos y billar.<br>
		<strong>Ambiente:</strong> Decorado con sillas de montar, cuerdas, sombreros vaqueros y carteles de grupos de rock sureño. No es raro que se produzcan altercados.<br>
		<strong>Música:</strong> Rock duro, metal y country rock, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Rockeros, moteros, vaqueros de ciudad y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay conciertos de grupos locales de rock sureño.<br>
		✔️ La entrada es un arco de madera.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 1034,
        yPx: 328,
        nombre: `Pub «El Reloj de Arena»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Uaireadair Gainmhich»<br><strong>Pronunciación:</strong> /an UA-re-dar GAIN-vij/<br><strong>En inglés:</strong> The Hourglass Pub
		<br><br>
		«El Reloj de Arena» es un pub lounge de copas elegante situado en una de las calles más exclusivas de Costa Nova. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII, rehabilitado con un estilo que combina la piedra original con detalles de lujo: lámparas de araña, mesas de mármol, cortinas de terciopelo, y una decoración temática de relojes de arena (decorativos) repartidos por toda la sala. Es un pub frecuentado por una clientela de alto poder adquisitivo: ejecutivos, políticos, turistas adinerados y parejas que buscan un ambiente íntimo y distinguido. La especialidad son los vinos (carta extensa, con referencias francesas e italianas), el champán y los cócteles de autor. Tienen una pequeña pista de dardos electrónicos (muy discreta), y el código de vestimenta es elegante (prohibidas las chanclas y las camisetas de tirantes). La música es jazz, bossa nova o música clásica, a volumen bajo. Es el lugar para verse y dejarse ver en la Costa Nova más exclusiva.
		<br><br>
		<strong>Tipo:</strong> Pub de copas / Elegante<br>
		<strong>Horario:</strong> 18:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Vinos (carta extensa), champán y cócteles de autor.<br>
		<strong>Juegos:</strong> Dardos electrónicos (llevan la cuenta).<br>
		<strong>Ambiente:</strong> Elegante, con paredes de piedra vista, lámparas de araña y mesas de mármol. Relojes de arena decorativos por todas partes.<br>
		<strong>Música:</strong> Jazz, bossa nova y música clásica, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Gente de alto poder adquisitivo, parejas y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ El local tiene un código de vestimenta: prohibidas las chanclas y las camisetas de tirantes.<br>
		✔️ La carta de vinos es extensa.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },

	// ==================== RESTAURANTES
	
	{
        xPx: 1104,
        yPx: 627,
        nombre: `Restaurante «El Barco Hundido»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Soitheach Bàthte»<br><strong>Pronunciación:</strong> /an SOI-hej BAHT-te/<br><strong>En inglés:</strong> The Sunken Vessel Restaurant
		<br><br>
		«El Barco Hundido» es un restaurante temático marítimo de alta cocina. Ocupa un edificio de piedra amarilla del siglo XIX que ha sido rehabilitado para parecer un barco encallado: la fachada está inclinada, simulando la popa de un velero, y el interior está decorado con cuerdas, redes, ventanas redondas (ojos de buey) y un gran agujero simulado en el techo, como si una vela hubiera roto el casco. Es un restaurante muy popular entre turistas, familias y amantes del marisco, conocido por su mariscada, su langosta, su centollo y su arroz caldoso con bogavante. El local es grande y acogedor, con una terraza acristalada con vistas al mar. Los fines de semana hay música en vivo (folk marinero). Es necesario reservar con antelación, especialmente en temporada alta.
		<br><br>
		<strong>Tipo:</strong> Restaurante temático (marítimo)<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 00:00<br>
		<strong>Tipo de cocina:</strong> Escocesa-marina / Marisco<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Mariscada, langosta, centollo, pescado a la plancha y arroz caldoso con bogavante.<br>
		<strong>Ambiente:</strong> Decorado como un barco hundido: paredes inclinadas, cuerdas, redes y ventanas redondas como ojos de buey. El techo tiene un agujero simulado.<br>
		<strong>Clientela habitual:</strong> Turistas, familias y amantes del marisco.<br><br>
		<strong>Notas:</strong><br>
		✔️ El local es muy popular: es necesario reservar.<br>
		✔️ Los fines de semana hay música en vivo (folk marinero).<br>
		✔️ El marisco es de primera calidad.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 1120,
        yPx: 479,
        nombre: `Restaurante «El Trébol Amarillo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An t-Seamrag Buidhe»<br><strong>Pronunciación:</strong> /an CHAM-rak BUI-ye/<br><strong>En inglés:</strong> The Yellow Clover Restaurant<br><br>
		«El Trébol Amarillo» es un restaurante-pub irlandés auténtico situado en una calle comercial que conecta con la zona residencial. Ocupa la planta baja de un edificio de piedra amarilla del siglo XVIII, rehabilitado para recrear una taberna de Dublín de principios del siglo XX: barra de madera tallada, espejos de Guinness, toneles de cerveza, y una decoración con tréboles, arpas celtas y fotografías de escritores irlandeses como James Joyce y W.B. Yeats. Es un lugar muy popular entre turistas irlandeses (y británicos), amantes de la cerveza negra y familias, que buscan un ambiente acogedor y música en vivo de folk irlandés. La especialidad son los guisos tradicionales (Irish stew, shepherd's pie), el fish & chips, y por supuesto la cerveza Guinness tirada, importada directamente de Dublín. Los jueves hay música en vivo (violín, flauta, gaita irlandesa), y los domingos ofrecen Sunday Roast. Tiene terraza exterior y es muy concurrido los fines de semana.
		<br><br>
		<strong>Tipo:</strong> Restaurante irlandés / Pub<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 00:00<br>
		<strong>Tipo de cocina:</strong> Irlandesa / Británica<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Irish stew (guiso irlandés), fish & chips, shepherd's pie y Guinness de barril.<br>
		<strong>Ambiente:</strong> Auténtico pub irlandés: barra de madera tallada, espejos Guinness y toneles. Música folk irlandesa en vivo. Ambiente acogedor y animado.<br>
		<strong>Clientela habitual:</strong> Turistas irlandeses, amantes de la cerveza negra y familias.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los jueves hay música en vivo.<br>
		✔️ Los domingos ofrecen Sunday Roast.<br>
		✔️ La Guinness es importada.<br>
		✔️ Tiene terraza exterior.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 1033,
        yPx: 426,
        nombre: `Restaurante «La Foca Verde»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Ròn Uaine»<br><strong>Pronunciación:</strong> /an ROON OO-an-ye/<br><strong>En inglés:</strong> The Green Seal Restaurant<br><br>
		«La Foca Verde» es un restaurante vegetariano y vegano situado en una calle tranquila que conecta con la zona residencial. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, rehabilitado con un estilo moderno y natural: paredes de tonos verdes y azules, fotografías de focas y paisajes marinos, y un ambiente relajado y saludable. Es un restaurante muy popular entre veganos, vegetarianos, gente concienciada con la salud y turistas que buscan opciones sin carne. La especialidad son las ensaladas creativas, los bowls de quinoa, las hamburguesas vegetales y los postres sin azúcar. Todo es casero y de proximidad. Los domingos ofrecen brunch vegano. Se aceptan reservas. El ambiente es íntimo, con mesas de madera clara y plantas colgantes, y una pequeña terraza interior acristalada.
		<br><br>
		<strong>Tipo:</strong> Restaurante vegetariano / Vegano<br>
		<strong>Horario:</strong> 13:00 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Mediterránea / Vegana<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Ensaladas creativas, bowls de quinoa, hamburguesas vegetales y postres sin azúcar.<br>
		<strong>Ambiente:</strong> Decorado con motivos marinos en tonos verdes y azules, con fotografías de focas. Ambiente relajado y saludable.<br>
		<strong>Clientela habitual:</strong> Veganos, vegetarianos y gente concienciada con la salud.<br><br>
		<strong>Notas:</strong><br>
		✔️ Todo es casero y de proximidad.<br>
		✔️ Los domingos ofrecen brunch vegano.<br>
		✔️ Se aceptan reservas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 1076,
        yPx: 307,
        nombre: `Restaurante «El Jardín de las Voces»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Gàrradh nan Guthan»<br><strong>Pronunciación:</strong> /GA-rah nan GU-han/<br><strong>En inglés:</strong> The Garden of Voices Restaurant<br><br>
		«El Jardín de las Voces» es un restaurante de autor de alta cocina fusión (asiática y mediterránea), situado en la zona más exclusiva de Costa Nova, en una calle arbolada. Ocupa un edificio de piedra amarilla del siglo XVIII, rehabilitado con un estilo íntimo y elegante: paredes de terciopelo, cortinas de seda, y un jardín interior con una fuente y plantas que crean un sonido de fondo similar a voces, de ahí el nombre. Es uno de los restaurantes más caros de Dunbhròn, con un menú degustación de diez platos que cambia cada temporada (cocina molecular y fusión). Es frecuentado por gourmets, celebridades, críticos gastronómicos y gente de alto poder adquisitivo. La reserva es obligatoria (con semanas de antelación) y no se admiten niños. El precio no incluye bebidas.
		<br><br>
		<strong>Tipo:</strong> Restaurante de autor / Fusión<br>
		<strong>Horario:</strong> 13:30 - 16:00 / 20:00 - 23:30<br>
		<strong>Tipo de cocina:</strong> Fusión asiática / Mediterránea<br>
		<strong>Precio:</strong> 💰💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Menú degustación de diez platos (cocina molecular y de fusión).<br>
		<strong>Ambiente:</strong> Íntimo, con mesas separadas por cortinas de terciopelo e iluminación tenue. Jardín interior con una fuente y plantas que crean un sonido de fondo similar a voces (de ahí el nombre).<br>
		<strong>Clientela habitual:</strong> Gourmets, celebridades y gente de alto poder adquisitivo.<br><br>
		<strong>Notas:</strong><br>
		✔️ La reserva es obligatoria y requiere semanas de antelación.<br>
		✔️ El menú cambia cada temporada.<br>
		✔️ No se admiten niños.<br>
		✔️ El precio no incluye bebidas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 947,
        yPx: 496,
        nombre: `Restaurante «El Descanso del Viajero»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An t-Achadh an Luchd-siubhail»<br><strong>Pronunciación:</strong> /an TA-ha an LUCHD-SIU-bal/<br><strong>En inglés:</strong> The Traveller’s Rest Restaurant<br><br>
		«El Descanso del Viajero» es un restaurante de carretera de comida casera. Es un local sencillo y funcional, sin lujos, con mesas de fórmica, sillas de plástico y un letrero luminoso desgastado. Es frecuentado por camioneros, viajeros de paso, trabajadores de la Zona Industrial y vecinos de la zona que buscan una comida abundante y barata. La especialidad son los desayunos contundentes (huevos, bacon, salchichas, judías, tostadas), el menú del día (primeros, segundos, postre y bebida por 12 libras), las hamburguesas y el pescado frito. El horario es muy amplio, de 7:00 a 23:00, y solo aceptan efectivo. El ambiente es ruidoso, con olor a aceite de freír, y el servicio es rápido y directo. Es el sitio más barato de Costa Nova.
		<br><br>
		<strong>Tipo:</strong> Restaurante de carretera / Comida casera<br>
		<strong>Horario:</strong> 07:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Escocesa casera / Internacional<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Desayunos contundentes, menú del día (primeros, segundos, postre y bebida), hamburguesas y pescado frito.<br>
		<strong>Ambiente:</strong> Restaurante de carretera, sin lujos, con mesas de fórmica, sillas de plástico y letrero luminoso. El olor a aceite de freír es característico.<br>
		<strong>Clientela habitual:</strong> Camioneros, viajeros y trabajadores de la zona.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es el sitio más barato de Costa Nova.<br>
		✔️ El menú del día cuesta doce libras.<br>
		✔️ Abren desde temprano hasta tarde.<br>
		✔️ Solo aceptan efectivo.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA
	
	{
        xPx: 1091,
        yPx: 399,
        nombre: `Tienda «Artesanía del Mar`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth «Ealain na Mara»<br><strong>Pronunciación:</strong> /<em>BOO-h YA-lan na MA-ra</em>/<br><strong>En inglés:</strong> Sea Crafts
		<br><br>
		«Artesanía del Mar» es una tienda de souvenirs y artesanía local especializada en productos inspirados en el mar y la costa. Ocupa la planta baja de un edificio de piedra amarilla del siglo XIX, rehabilitado con un estilo marítimo y acogedor: la fachada está pintada de azul y blanco, y el interior está decorado con redes, boyas y conchas marinas. Es muy popular entre los turistas (especialmente familias y aficionados a la artesanía) y los vecinos del distrito que buscan regalos originales. Venden cerámica pintada a mano (con motivos de peces, olas, faros), joyas de plata con motivos marinos (conchas, anclas, focas), velas aromáticas con olor a mar (brisa marina, algas, sal), y pequeños objetos decorativos (barcos en botella, móviles de conchas, imanes). La mayoría de los productos son hechos por artesanos locales de Dunbhròn y alrededores, y la tienda apoya el comercio justo. La dueña es una artista local que diseña sus propias cerámicas.`,
        pdfUrl: `#`,
        iconoTipo: `souvenirs`
    },
	{
        xPx: 1101,
        yPx: 531,
        nombre: `Tienda «The Tartan Shed»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth «Seada na Tartan»<br><strong>Pronunciación:</strong> /<em>BOO-h SHE-da na TAR-tan</em>/<br><strong>En inglés:</strong> The Tartan Shed
		<br><br>
		«The Tartan Shed» es una tienda de souvenirs especializada en tartán y productos de lana escocesa. Ocupa una pequeña estructura de madera pintada de rojo y verde, imitando un cobertizo de las Highlands, construida expresamente para la tienda en 2010. Es un local muy popular entre los turistas, especialmente americanos y europeos, que buscan auténticos productos de tartán: bufandas, mantas, gorros, kilts, y recuerdos como posavasos, imanes y libretas con estampados de cuadros. La dueña es una artesana textil local que diseña algunos de los productos, como bufandas tejidas a mano. Aunque la tienda está orientada al turismo, se esfuerza por ofrecer calidad (lana de oveja escocesa, no poliéster). El ambiente es acogedor, con olor a lana, y suele estar lleno de turistas buscando el recuerdo perfecto.`,
        pdfUrl: `#`,
        iconoTipo: `souvenirs`
    },

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS

    {
        xPx: 1076,
        yPx: 236,
        nombre: `Acuario de Dunbhròn`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Uisgeadair Dhùn Bhròn<br><strong>Pronunciación:</strong> /<em>OOSH-ke-tar JUN VRON</em>/<br><strong>En inglés:</strong> Dunbhròn Aquarium
		<br><br>
		El Acuario de Dunbhròn es una de las atracciones turísticas más importantes y famosas de toda Escoci. Situado en el extremo norte del paseo marítimo de Costa Nova, justo donde este se encuentra con los acantilados. Es un complejo enorme y de vanguardia, financiado por un excéntrico magnate amante del mundo marino que invirtió una fortuna en crear una experiencia única. La estrella del acuario son sus famosos túneles acristalados que se adentran en el mar, ofreciendo tres niveles de experiencia: una opción económica (1 km), una intermedia (10 km) y una experiencia de lujo en vehículo especial que recorre 40 kilómetros bajo el mar. Además, el edificio principal alberga un acuario tradicional de tamaño monumental con una sala subterránea (a 2 km de la costa) llena de salas temáticas. Lo que más orgullece al acuario es su compromiso con el bienestar animal: las instalaciones son amplias, los animales están tratados por biólogos y veterinarios expertos, y las condiciones son de las mejores del mundo, alejándose de la explotación comercial pura para centrarse en la conservación y la educación. Es un imán para turistas, familias, biólogos marinos y amantes de la naturaleza.`,
        pdfUrl: `#`,
        iconoTipo: `acuario`
    },    
    {
        xPx: 1107,
        yPx: 370,
        nombre: `Paseo Marítimo`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cladach a' Chala<br><strong>Pronunciación:</strong> /<em>KLA-daj a JA-la</em>/<br><strong>En inglés:</strong> The Promenade
		<br><br>
		El Paseo Marítimo de Costa Nova es la arteria principal y el corazón turístico del distrito: un largo paseo de 4,5 kilómetros que bordea toda la costa, desde el límite norte (junto a los acantilados del Bosque de los Faros) hasta el extremo sur (donde el río separa este distrito del Puerto Bajo). Es un lugar de encuentro para turistas, paseantes, deportistas y familias, que lo recorren a pie, en bicicleta o en patines. Está flanqueado por farolas de estilo victoriano (restauradas), bancos de piedra, jardineras, y una hilera de palmeras (traídas del sur, que sufren cada invierno). Es el escaparate de Costa Nova: aquí se concentran los hoteles de lujo, chiringuitos, heladerías, restaurantes con terraza, tiendas de souvenirs y el famoso acuario. El ambiente cambia según la hora y la estación: por la mañana, es un hervidero de runners y paseadores de perros; al mediodía, familias con niños y turistas con helados; al atardecer, parejas y jubilados; por la noche, jóvenes y noctámbulos que van de bar en bar. Es un lugar seguro, limpio y bien iluminado, pero también con sus rincones oscuros y sus leyendas.`,
        pdfUrl: `#`,
        iconoTipo: `paseo`
    },
    {
        xPx: 1202,
        yPx: 404,
        nombre: `Playa «La Paz»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Tràigh «na Sìthe»<br><strong>Pronunciación:</strong> /<em>TRÁY na SHEE-e</em>/<br><strong>En inglés:</strong> Peace Beach<br><br>
		La playa «La Paz» es la principal playa urbana de Costa Nova y una de las más famosas de Dunbhròn. Es conocida por su arena de color gris oscuro a negro (de origen volcánico, arrastrada por las corrientes marinas desde las islas del norte), que le da un aspecto exótico y muy fotografiado. Es una playa de arena fina y oscura, con un fuerte oleaje (adecuado para surfistas, pero vigilada por socorristas en verano). Tiene bandera azul (calidad) y está limpia y bien cuidada. Es muy popular entre turistas, familias, surfistas y jubilados, que la disfrutan durante todo el año (aunque en invierno el viento arrecia). Ofrece servicios de socorrismo, alquiler de hamacas y sombrillas, duchas y aseos, y acceso para sillas de ruedas (con rampas de madera). Es el lugar de encuentro por excelencia de los veraneantes en Dunbhròn.`,
        pdfUrl: `#`,
        iconoTipo: `playa`
    },
	{
        xPx: 1251,
        yPx: 700,
        nombre: `Playa «Las Dunas»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Tràigh «nam Mòinteach»<br><strong>Pronunciación:</strong> /<em>TRÁY nam MÓN-tchaj</em>/<br><strong>En inglés:</strong> Dunes Beach
		<br><br>
		La playa «Las Dunas» es la segunda playa de Costa Nova en extensión y la más salvaje de las dos, situada en el extremo sur del distrito. Tiene una longitud de 2,5 kilómetros y se caracteriza por sus dunas de arena oscura (de origen volcánico, como el resto de la costa) cubiertas de hierba duna, una planta autóctona que protege la arena de la erosión. Es una playa menos urbanizada y más tranquila que «La Paz», frecuentada por surfistas, pescadores, nudistas (en una zona apartada) y paseantes solitarios, que la usan como su playa particular, ya que está a poca distancia de sus residencias. No tiene servicios de socorrismo (solo un puesto de vigilancia ocasional en verano), ni alquiler de hamacas. Hay un aparcamiento de tierra al final de la carretera, algunos bancos de madera y una ducha exterior de agua fría, a menudo estropeada. Es un lugar popular para el surf (olas más grandes y limpias que en «La Paz»), la pesca con caña desde la orilla y el avistamiento de aves (gaviotas, cormoranes, y a veces focas). Por la noche, es un punto de encuentro para los jóvenes que buscan privacidad.`,
        pdfUrl: `#`,
        iconoTipo: `playa`
    },
    {
        xPx: 1145,
        yPx: 487,
        nombre: `Casino Royal Dunbhròn`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Casino Rìoghail Dhùn Bhròn<br><strong>Pronunciación:</strong> /<em>KA-si-no RREE-ul JUN VRON</em>/<br><strong>En inglés:</strong> Dunbhròn Royal Casino<br><br>
		El Casino Royal Dunbhròn es el único casino de la ciudad y uno de los más exclusivos de Escocia, situado en un edificio de estilo art déco, a pie del paseo marítimo y vistas al mar. Es un lugar de lujo y ostentación, frecuentado por turistas adinerados, celebridades, políticos, empresarios y jugadores profesionales que buscan emociones fuertes y un ambiente distinguido. Su lema no escrito es «lo que ganas aquí, lo gastas aquí». Abre 24 horas al día, los 365 días del año, y su época de máximo apogeo es la temporada turística, de finales de mayo a principios de septiembre, cuando las ganancias son tan enormes que cubren los gastos de todo el año y dejan un generoso beneficio para sus dueños. El edificio es una joya arquitectónica: mármoles, arañas de cristal, frescos en el techo y tapices de seda, todo ello vigilado por cámaras de seguridad y personal de seguridad impecable. Ofrece mesas de ruleta, blackjack, póker (varias variantes), bacará, y cientos de máquinas tragamonedas (de última generación y las clásicas de un brazo). También cuenta con un restaurante de alta cocina (con estrella Michelin), dos bares (uno con vistas al mar), un salón de fumadores (con puros cubanos) y un área VIP para los grandes apostantes (con servicio personalizado). El código de vestimenta es estricto: traje y corbata para hombres, vestido de noche para mujeres, y la entrada es gratuita, pero hay que registrarse.`,
        pdfUrl: `#`,
        iconoTipo: `casino`
    },
    {
        xPx: 1208,
        yPx: 586,
        nombre: `Puerto Deportivo`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Acarsaid Spòrs<br><strong>Pronunciación:</strong> /<em>A-kar-sat SPORS</em>/<br><strong>En inglés:</strong> Marina
		<br><br>
		El Puerto Deportivo de Dunbhròn es uno de los más exclusivos y mejor equipados de la costa escocesa. Está situado en el extremo este de Costa Nova, junto a la desembocadura del río Corrie y protegido por un dique de piedra. Es un puerto de yates de lujo, con capacidad para 200 embarcaciones (de hasta 50 metros de eslora), y también alberga una pequeña flota pesquera (de unos 10 barcos) que sobrevive gracias a las subvenciones. Es famoso por su discreción y seguridad: hay cámaras de vigilancia, un control de acceso con barrera, y un club náutico privado (el Dunbhròn Marina & Yacht Club) que solo permite la entrada a sus miembros y a los propietarios de los yates. En el extremo norte del puerto se encuentra el hotel del mismo nombre (The Dunbhròn Marina & Yacht Club), con su entrada discreta y su fama de encuentros de alto nivel. En el extremo sur hay un antiguo embarcadero de madera (en desuso) que sirve como paseo para los pescadores y como punto de encuentro de los amantes de la noche. El puerto es un lugar de contradicciones: por un lado, el lujo de los megayates y las fiestas a bordo; por otro, la pobreza de los pescadores locales y el contrabando que se mueve en las sombras.`,
        pdfUrl: `#`,
        iconoTipo: `puertoDeportivo`
    },
	,
    {
        xPx: 1117,
        yPx: 658,
        nombre: `Centro comercial Costa Nova`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad Bhùthan na h-Oirthir Ùire<br><strong>Pronunciación:</strong> /<em>EE-un-at VOO-an na HOR-hir OO-ir-e</em>/<br><strong>En inglés:</strong> New Coast Shopping Centre
		<br><br>
		El Centro Comercial Costa Nova es el tercer centro comercial más grande y moderno de Dunbhròn —tan sólo superado por The Highs y por el Centro Comercial de los Jardines—. Ocupa una parcela de 30.000 m² en un edificio de tres plantas de cristal y acero, con una fachada curva que imita las olas del mar. Fue inaugurado en 2018 por una multinacional del sector, y desde entonces se ha convertido en el principal polo de atracción comercial y de ocio de la ciudad, especialmente para los turistas (que buscan tiendas de marca y entretenimiento), los jóvenes (que pasan las tardes en el cine o la bolera) y los residentes de Costa Nova y Los Prados (que hacen sus compras semanales).<br>
		Alberga más de 100 tiendas, un cine de 12 salas, una bolera de 20 pistas, un parque de bolas para niños, un gimnasio de 2.000 m², un food court con 15 restaurantes de comida rápida (McDonald's, Burger King, KFC, Harry Ramsden's —famoso fish & chips—, Brewers Fayre, pizzerías, kebab, mexicana, sushi), un supermercado (Tesco Extra), tiendas de videojuegos (Game, CeX), joyerías (Tous, Pandora), tiendas de ropa (Zara, H&M, Mango, Primark), lencería (Intimissimi, Oysho), salones de belleza (peluquería, manicura, depilación), electrónica (Currys, Argos), ropa deportiva (JD Sports), y una librería-cafetería (Waterstones). También cuenta con un Marks & Spencer Foodhall para comida de calidad.<br>
		Es un centro limpio, luminoso y seguro, con aparcamiento subterráneo para 1.500 coches, y está conectado con la ciudad por varias líneas de autobús.`,
        pdfUrl: `#`,
        iconoTipo: `centrocomercial`
    },

    // ==================== EL CORAZÓN ROTO ====================
	
	// ==================== BAR
	
	{
        xPx: 806,
        yPx: 483,
        nombre: `Bar «El Último Tren»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bar «An Trèana mu Dheireadh»<br><strong>Pronunciación:</strong> /<em>Bar an TRAY-na mu YER-ee</em>/<br><strong>En inglés:</strong> The Last Train
		<br><br>
		«El Último Tren» es un bar rockero de ambiente duro, situado en una calle oscura y estrecha. Es conocido solo entre los rockeros, moteros, obreros de la Zona Industrial y buscadores de camorra que huyen de los pubs turísticos del centro. El local es pequeño, con más barra que mesas, y el suelo está siempre pegajoso (nadie sabe si es cerveza, grasa o algo peor). Las paredes están forradas de graffitis y pegatinas de grupos (Motörhead, Ramones, Sex Pistols, Metallica), y el olor a cerveza rancia es característico. La música es rock duro, punk y metal a volumen alto, y no es raro que se produzcan altercados: peleas de borrachos que los porteros disuelven a golpes. La especialidad son las cervezas de barril baratas, los chupitos de whisky y los cubatas. No sirven comida caliente, solo frutos secos y patatas fritas de bolsa. Los sábados hay conciertos de grupos locales de rock duro (versiones). Es un lugar de culto para los noctámbulos de Dunbhròn.
		<br><br><strong>Tipo:</strong> Bar rockero<br>
		<strong>Horario:</strong> 18:00 - 04:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas, más barra)<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager), chupitos de whisky barato y cubatas.<br>
		<strong>Juegos:</strong> Billar (una mesa), dardos y máquinas tragaperras.<br>
		<strong>Ambiente:</strong> Oscuro y descuidado. Las paredes lucen grafitis y pegatinas de grupos musicales. El olor a cerveza rancia es característico. No es raro que se produzcan altercados.<br>
		<strong>Música:</strong> Rock duro, punk y metal, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Rockeros, moteros, obreros de la Zona Industrial y buscadores de camorra.<br><br>
		<strong>Notas:</strong><br>
		✔️ El suelo está siempre pegajoso.<br>
		✔️ Los sábados hay conciertos de grupos locales de rock duro (versiones).`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 894,
        yPx: 471,
        nombre: `Bar «La Luna Fría»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> A' Ghealach Fhuar<br><strong>Pronunciación:</strong> /<em>Bar rok a YAL-aj OO-ar</em>/<br><strong>En inglés:</strong> The Cold Moon
		<br><br>
		«La Luna Fría» es un bar rockero alternativo de culto, situado en una calle secundaria. Es un local pequeño, oscuro y deliberadamente descuidado, con las paredes forradas de vinilos y carteles de grupos como Joy Division, The Cure, Bauhaus, The Clash y Nirvana. Es famoso entre los metaleros, punks, artistas underground y noctámbulos que buscan un ambiente auténtico, sin turistas y con música a volumen atronador. La especialidad son la cerveza negra, la absenta y los licores extraños (genciana, anís, amargos). No sirven comida caliente. Los jueves hay karaoke con temática rock duro y metal, y es famoso porque el repertorio se limita a esos géneros, nada de pop ni baladas. El ambiente es íntimo y cerrado, con una iluminación escasa (focos rojos y velas eléctricas), y es considerado un local de culto por los auténticos amantes del rock.
		<br><br>
		<strong>Tipo:</strong> Bar rockero alternativo<br>
		<strong>Horario:</strong> 20:00 - 05:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (taburetes altos)<br>
		<strong>Especialidad:</strong> Cerveza negra, absenta y licores extraños.<br>
		<strong>Juegos:</strong> Dardos y karaoke los jueves (temática rock duro).<br>
		<strong>Ambiente:</strong> Muy oscuro, con las paredes forradas de vinilos y carteles de grupos. Considerado un local de culto.<br>
		<strong>Música:</strong> Rock duro, metal, punk y grunge, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Metaleros, punks, artistas underground y gente de la noche.<br><br>
		<strong>Notas:</strong><br>
		✔️ No se sirve comida caliente.<br>
		✔️ El karaoke es solo los jueves y el repertorio se limita a rock y metal.<br>
		✔️ La iluminación es cerrada y escasa.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 906,
        yPx: 532,
        nombre: `Bar «El Cazador»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An t-Sealgair»<br><strong>Pronunciación:</strong> /an CHAL-ger/<br><strong>En inglés:</strong> The Hunter Bar<br><br>
		«El Cazador» es un bar temático de caza, situado en una calle ancha de la zona. Es frecuentado por cazadores, gente del campo y turistas que buscan un ambiente rústico y auténtico, lejos del caos de las discotecas. La decoración es de caza mayor: paredes con cabezas disecadas de ciervos y jabalíes, rifles antiguos colgados, alfombras de piel y una atmósfera de taberna de montaña. La especialidad son la cerveza de barril, los vinos tintos de la casa, las chacinas y el queso curado. Tienen billar (una mesa camuflada de verde) y dardos. La música es country, rock sureño y blues, a volumen medio. El ambiente es tranquilo pero animado, con tertulias de cazadores. La dueña, una mujer mayor, sirve la cerveza con «mano izquierda»; es famosa por su generosidad al servir.
		<br><br>
		<strong>Tipo:</strong> Bar temático (caza)<br>
		<strong>Horario:</strong> 17:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril, vinos tintos de la casa, chacinas y queso curado.<br>
		<strong>Juegos:</strong> Billar (mesa camuflada de verde) y dardos.<br>
		<strong>Ambiente:</strong> Paredes decoradas con cabezas disecadas de ciervos y jabalíes. Rifles de caza antiguos cuelgan junto a alfombras de piel. Un ambiente pensado para los amantes de la caza.<br>
		<strong>Música:</strong> Country, rock sureño y blues, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Cazadores, gente del campo y turistas en busca de exotismo.<br><br>
		<strong>Notas:</strong><br>
		✔️ La dueña, una mujer mayor, sirve la cerveza con mucha mano izquierda.<br>
		✔️ Es famoso por sus partidas de billar.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 777,
        yPx: 586,
        nombre: `Bar «El Murmullo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Gearan»<br><strong>Pronunciación:</strong> /an GYA-ran/<br><strong>En inglés:</strong> The Murmur Bar<br><br>
		«El Murmullo» es un bar lounge íntimo y elegante, especializado en cócteles de autor y ginebras premium, situado en una calle tranquila de la zona. Es un oasis de tranquilidad en medio del caos del distrito: su entrada es discreta, parece una puerta más en la fachada, y una vez dentro, las cortinas de terciopelo, las velas y los sofás de cuero crean un ambiente de privacidad y exclusividad. Es frecuentado por parejas, gente que busca hablar sin gritar, seductores y hombres de negocios que huyen del ruido de los pubs y discotecas. No tienen juegos (ni dardos ni billar). La música es electrónica suave (deep house, chill-out) a volumen bajo. El código de vestimenta es elegante (prohibido el chándal). Los viernes y sábados hay DJ. Es un lugar de encuentro para encuentros discretos y conversaciones privadas.
		<br><br><strong>Tipo:</strong> Bar lounge / Copas<br>
		<strong>Horario:</strong> 19:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (sofás)<br>
		<strong>Especialidad:</strong> Cócteles de autor, ginebras premium y champán.<br>
		<strong>Juegos:</strong> Ninguno.<br>
		<strong>Ambiente:</strong> Íntimo y acogedor: con velas, cojines y cortinas de terciopelo. Un oasis de tranquilidad en medio del caos del Corazón Roto.<br>
		<strong>Música:</strong> Música electrónica suave (deep house, chill-out), a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Parejas, gente que busca hablar sin gritar, seductores y hombres de negocios.<br><br>
		<strong>Notas:</strong><br>
		✔️ La entrada es discreta, parece una puerta más.<br>
		✔️ Cuenta con un código de vestimenta: prohibido el chándal.<br>
		✔️ Hay DJ los viernes y sábados.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 776,
        yPx: 513,
        nombre: `Bar «La Tercera Copa»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Treas Cupa»<br><strong>Pronunciación:</strong> /an TRAS KU-pa/<br><strong>En inglés:</strong> The Third Glass Bar<br><br>
		«La Tercera Copa» es un bar latino de copas, especializado en mojitos, cubatas y rones, situado en una calle ancha y concurrida. Es un local de ambiente festivo y caótico, con una larga barra de mármol, espejos, luces de colores y una pequeña pista de baile (apenas un espacio entre las mesas). Es frecuentado por jóvenes, universitarios, aficionados a la música latina y gente que busca ritmo y ligoteo. La música es reggaetón, salsa, bachata y otros géneros latinos, a volumen muy alto. Los fines de semana hay clases de bachata antes de la apertura, a las 21:00. La barra es muy larga y siempre se forman aglomeraciones. Es un lugar de ligue intenso, con ambiente de fiesta y algo de conflictividad, con peleas ocasionales entre borrachos. No tiene juegos: el baile es el juego.
		<br><br>
		<strong>Tipo:</strong> Bar latino / Copas<br>
		<strong>Horario:</strong> 21:00 - 06:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas, más barra y pista)<br>
		<strong>Especialidad:</strong> Mojitos, cubatas y rones de todo el mundo.<br>
		<strong>Juegos:</strong> Ninguno (el baile es el juego).<br>
		<strong>Ambiente:</strong> Espejos, lucefs de colores y una pequeña pista de baile. Ambiente propicio para el ligoteo intenso.<br>
		<strong>Música:</strong> Reggaetón, salsa, bachata y demás géneros latinos, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes latinos, aficionados a la música latina y gente que busca ritmo y ligar.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay clases de bachata antes de la apertura.<br>
		✔️ La barra es muy larga y siempre se forman aglomeraciones.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA

	{
        xPx: 741,
        yPx: 488,
        nombre: `Biblioteca «Sir Walter Scott»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Shir Walter Scott»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan SHIR WAL-ter SCOT</em>/<br><strong>En inglés:</strong> Sir Walter Scott Library
		<br><br>
		La Biblioteca «Sir Walter Scott» es la biblioteca pública principal del Corazón Roto, situada en una calle relativamente tranquila. En una zona donde el bullicio nocturno da paso a un ambiente más ordenado durante el día. Ocupa un edificio de piedra arenisca gris de tres plantas, construido en 1905 como escuela primaria y reconvertido en biblioteca en 1985. Es un espacio funcional y luminoso, con una colección de unos 25.000 volúmenes, especializada en literatura escocesa, novela negra e historia local. Es un remanso de paz para estudiantes, jubilados y algún que otro noctámbulo que busca refugio antes de que empiece el caos nocturno. Tiene una sala de estudio, ordenadores públicos y una pequeña sala de exposiciones. El ambiente es silencioso y ordenado, con un toque de nostalgia por el viejo edificio escolar. La bibliotecaria jefa, una mujer de mediana edad, es conocida por su mal genio con los que hablan alto.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },

	// ==================== CAFÉ - BAR

	{
        xPx: 720,
        yPx: 542,
        nombre: `Cafetería «La Casa del Vapor»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «Taigh na Smùide»<br><strong>Pronunciación:</strong> /TAI na SMUU-dje/<br><strong>En inglés:</strong> House of Steam Café<br><br>
		«La Casa del Vapor» es una cafetería temática industrial, situada en una calle ancha y transitada donde se mezclan los talleres mecánicos con los primeros locales de ocio. Ocupa la planta baja de un edificio de ladrillo visto (antiguo almacén) reformado en los años 90. La decoración es industrial y funcional: tuberías de cobre a la vista, máquinas de vapor decorativas, paredes de ladrillo visto, y un suelo de baldosa hidráulica envejecida. Es un local pequeño y ruidoso, frecuentado por trabajadores de la zona, obreros de la Zona Industrial y algún estudiante que busca un desayuno contundente o un café rápido. La especialidad son los desayunos (huevos, bacon, salchichas, tostadas), los bocadillos calientes (de salchicha y huevo, de carne mechada) y los pasteles de carne. El café es de filtro, simple y fuerte. El ambiente es el de un bar de toda la vida, con clientes que entran, comen rápido y se van. Abre muy temprano (6:00) y cierra pronto (20:00). No tienen wifi.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Temática industrial<br>
		<strong>Horario:</strong> 08:00 - 20:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de filtro, té negro, bocadillos calientes de salchicha y huevo, y pasteles de carne.<br>
		<strong>Ambiente:</strong> Local pequeño con paredes de ladrillo visto y tuberías de cobre a la vista. Decorado con máquinas de vapor. El aroma a café y grasa lo impregna todo.<br>
		<strong>Música:</strong> Rock clásico suave, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Trabajadores de la zona, obreros y algún estudiante.<br><br>
		<strong>Notas:</strong><br>
		✔️ El desayuno es su fuerte.<br>
		✔️ A las siete de la mañana ya está lleno de trabajadores.<br>
		✔️ Cierra pronto por la tarde.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 865,
        yPx: 473,
        nombre: `Cafetería «La Habitación Roja»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An t-Seòmar Dearg»<br><strong>Pronunciación:</strong> /an CHO-mar JERAK/<br><strong>En inglés:</strong> The Red Room Café<br><br>
		«La Habitación Roja» es una cafetería alternativa y acogedora, situada en una calle tranquila a salvo del ruido más intenso. Ocupa la planta baja de un edificio de piedra arenisca gris de dos plantas, reformado con un estilo íntimo y bohemio: paredes pintadas de rojo intenso, muebles oscuros, lámparas de mesa y una pequeña estantería con libros. Es un local pequeño, frecuentado por jóvenes alternativos, estudiantes de arte, parejas y noctámbulos que buscan un ambiente tranquilo antes de salir de fiesta (o para despejarse después). La especialidad son el café de especialidad, las infusiones, el pastel de zanahoria y las tartas caseras, además de cerveza artesana embotellada. Por las noches se llena de gente que va camino de los bares de la zona. Los viernes hay micrófono abierto (poesía, monólogos, música acústica) en un pequeño escenario improvisado. El ambiente es tranquilo pero animado, con una clientela que respeta el espacio ajeno.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Alternativa<br>
		<strong>Horario:</strong> 10:00 - 22:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de especialidad, infusiones, pastel de zanahoria, tartas caseras y cerveza artesana embotellada.<br>
		<strong>Ambiente:</strong> Local pequeño con paredes pintadas de rojo intenso, muebles oscuros y lámparas de mesa. Acogedor, aunque con un punto tétrico.<br>
		<strong>Música:</strong> Jazz o blues, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Jóvenes alternativos, estudiantes de arte y parejas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Por las noches se llena de gente antes de salir de fiesta.<br>
		✔️ Cuenta con un pequeño escenario para micrófono abierto los viernes.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },

	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD
	
	{
        xPx: 728,
        yPx: 517,
        nombre: `Centro de Salud de la Estación`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte na Stèisean<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te na SHTAY-shan</em>/<br><strong>En inglés:</strong> Station Health Centre
		<br><br>
		El Centro de Salud de la Estación es el principal centro médico del Corazón Roto, situado en una calle ancha y transitada. Ocupa un edificio de tres plantas (construido en 1985 y ampliado y modernizado en 2010) de ladrillo visto y hormigón, con una capacidad para atender a una población de más de 20.000 personas (residentes del distrito, más los turistas y noctámbulos). Es un centro bien equipado pero desbordado en verano, con consultas de medicina general, pediatría, ginecología, enfermería, un servicio de urgencias (24 horas los fines de semana), radiología básica, un pequeño laboratorio y una unidad de salud mental. Tiene una plantilla de unos 40 empleados (médicos, enfermeras, administrativos, limpiadores). El ambiente es el de un ambulatorio público con prisas, pero con más recursos que un consultorio de barrio. Es conocido por atender las consecuencias de las peleas nocturnas (apuñalamientos, fracturas) y las sobredosis, y por tener una sala de espera siempre llena.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },

	// ==================== COLEGIOS
	
	    {
        xPx: 810,
        yPx: 558,
        nombre: `Colegio «Estrella de la Mañana»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Rionnag na Maidne»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Rú-nak na Mad-ne</em>/<br><strong>En inglés:</strong> Morning Star Primary
		<br><br>
		El Colegio «Estrella de la Mañana» es el único centro de educación primaria del Corazón Roto, situado en una calle ancha. Es un colegio grande y completo, con unos 400 alumnos (de 4 a 11 años). Fue construido en 1972 y ampliado y restaurado en 2005. Tiene tres plantas, un amplio patio de cemento, un campo de fútbol de tierra, un huerto escolar, comedor, biblioteca, aula de informática, gimnasio y aula de apoyo para necesidades especiales. Es el único colegio de primaria del distrito, y acoge a niños de familias muy diversas: trabajadores, inmigrantes, familias desestructuradas. El ambiente es el de una escuela de barrio conflictivo, con un profesorado vocacional pero quemado, y una dirección conservadora.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },

	// ==================== COMISARÍA
	
	{
        xPx: 763,
        yPx: 539,
        nombre: `Comisaría «Corazón Roto»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Tigh an Lagha «Cridhe Briste»<br><strong>Pronunciación:</strong> /<em>Tay an LAY-a KREE-yeh BREES-tchuh</em>/<br><strong>En inglés:</strong> Broken Heart Police Station
		<br><br>
		La Comisaría «Corazón Roto» es la principal comisaría de policía del distrito, situada en una calle ancha y algo deteriorada al norte del Parque de Bomberos del distrito, casi al lado, compartiendo la misma manzana. Es un edificio funcional y austero de los años 80, de dos plantas, con una fachada de ladrillo visto y hormigón. Alberga a unos 40 agentes (entre policías locales, agentes de paisano y personal administrativo), así como calabozos (para retención temporal, máximo 24 horas), un pequeño laboratorio forense (para análisis básicos) y un garaje para vehículos (coches patrulla, furgonetas, y una furgoneta antidisturbios). Es un centro desbordado y con personal quemado, que atiende un distrito conflictivo: peleas, robos, tráfico de drogas, violencia doméstica. Los agentes tienen fama de ser duros y poco empáticos con los vecinos, y hay rumores de corrupción: algunos miran hacia otro lado con el contrabando o con ciertos delincuentes. La comisaría tiene una relación incómoda con la STCA (que opera al margen) y con los servicios sociales del distrito.`,
        pdfUrl: `#`,
        iconoTipo: `comisaria`
    },
	
	// ==================== DISCOTECAS
	
	{
        xPx: 692,
        yPx: 498,
        nombre: `Discoteca «Valix»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Discò «Valix»<br><strong>Pronunciación:</strong> /<em>DIS-ko VA-liks</em>/<br><strong>En inglés:</strong> Club: Valix<br><br>
		«Valix» es la discoteca más grande y lujosa de Dunbhròn. Y desde su inauguración en 2024 ha superado en capacidad al IMVRS (antigua Privilege) de Ibiza. Convirtiéndose en la discoteca más grande del mundo. Situada en una gran explanada con parking público a ambos lados, es un templo de la música y el ocio nocturno. Frecuentado por turistas adinerados, jóvenes de clase media-alta, celebridades y amantes de la fiesta de toda Escocia. El edificio es una obra de arte de la arquitectura moderna: fachada de cristales ahumados, acero pulido y paneles de hormigón de color gris perla, con un diseño minimalista que contrasta con el lujo interior. Tiene dos plantas sobre el suelo y 21 pistas de baile (11 en la planta baja y 10 en la primera), cada una con un estilo musical diferente y fuertemente insonorizadas. Cuenta con piscinas (dos grandes y varias pequeñas alrededor), bares en cada sala con bartenders expertos, gogós y pole dance en las salas que lo requieren. El alcohol es siempre de la máxima calidad, nada de garrafón. Bajo el edificio hay un aparcamiento privado de pago y amplios aparcamientos gratuitos a ambos lados. Es el lugar de moda en Dunbhròn.
		<br><br>
		<strong>Tipo:</strong> Discoteca / Club de lujo (macro-discoteca)<br>
		<strong>Horario:</strong> 23:00 - 07:00 (viernes y sábados; el horario puede variar en eventos especiales)<br>
		<strong>Precio:</strong> 💰💰💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (amplia variedad: mesas altas, camas balinesas, sofás VIP, suites privadas)<br>
		<strong>Especialidad:</strong> Música de todos los géneros (21 pistas diferentes), cócteles de autor, champán Moët, licores de primeras marcas.<br>
		<strong>Juegos:</strong> No aplica (el entretenimiento principal es la música, el baile y los espectáculos de gogós y pole dance).<br>
		<strong>Ambiente:</strong> Lujoso, moderno y masivo. Es la discoteca más grande del mundo. Un templo del ocio nocturno marcado por un lujo ostentoso.<br>
		<strong>Música:</strong> 21 estilos diferentes en otras tantas pistas (techno, house, trance, hardstyle, deep house, drum & bass, reggaetón, salsa, bachata, pop, rock, indie, ochenta, etc.), a volumen muy alto y con insonorización entre salas.<br>
		<strong>Clientela habitual:</strong> Turistas adinerados, jóvenes de clase media-alta, celebridades, amantes de la fiesta.<br><br>
		<strong>Notas:</strong><br>
		✔️ Inaugurada en 2024, es la discoteca más grande del mundo por capacidad (15.000 personas), superando al antiguo Privilege de Ibiza.<br>
		✔️ Edificio de arquitectura moderna: fachada de cristales ahumados, acero pulido y paneles de hormigón gris perla, con un gran cartel de neón blanco y morado.<br>
		✔️ Dispone de dos plantas sobre el suelo (21 pistas de baile en total, cada una con un estilo musical distinto), piscinas, gogós y pole dance.<br>
		✔️ Servicios de alta gama: barras de mármol blanco, bartenders profesionales, alcohol de primeras marcas.`,
        pdfUrl: `#`,
        iconoTipo: `discoteca`
    },
    {
        xPx: 844,
        yPx: 553,
        nombre: `Discoteca «El Sótano»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Discò «An Làr Ìosal»<br><strong>Pronunciación:</strong> /<em>DIS-ko an LAR EE-o-sal</em>/<br><strong>En inglés:</strong> Club: The Basement
		<br><br>
		«El Sótano» es una discoteca de tamaño medio, de ambiente alternativo y gótico, situada en una calle estrecha y oscura. Es uno de los locales más antiguos del distrito (abrió en 1995) y ha sobrevivido a la competencia de las megadiscotecas gracias a su clientela fiel: góticos, metaleros, alternativos y amantes del rock industrial. Ocupa la planta baja y el sótano —de ahí el nombre— de un edificio de piedra gris de los años 60, reformado en 2010. Es un local oscuro, húmedo y con un aire decadente, con paredes pintadas de negro, graffitis, y una pequeña pista de baile en el sótano. La música es rock industrial, metal gótico, EBM y darkwave, a volumen muy alto. Tiene dos bares (uno en la planta baja, otro en el sótano), una zona de fumadores interior con extractores, y guardarropa. Es famoso por sus noches temáticas (dark 80s, cyberpunk, medieval gótico) y por ser el refugio de los que huyen del reggaetón y del pop comercial. El ambiente es íntimo y algo sórdido, pero con una comunidad muy unida.
		<br><br>
		<strong>Tipo:</strong> Discoteca alternativa / Gótica<br>
		<strong>Horario:</strong> 22:00 - 05:00 (viernes y sábados; ocasionalmente otros días)<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (seis mesas de hierro en la planta baja, con taburetes altos)<br>
		<strong>Especialidad:</strong> Whisky barato, ron, vodka, lager tostada, stout, IPA, cider.<br>
		<strong>Juegos:</strong> Ninguno (el baile y la música son el principal atractivo).<br>
		<strong>Ambiente:</strong> Oscuro, húmedo y cavernoso, con un aire decadente. Paredes de ladrillo visto pintadas de negro, graffitis, pegatinas de grupos y poca iluminación (solo focos rojos). Es íntimo, algo sórdido, pero con una comunidad muy unida de fieles habituales.<br>
		<strong>Música:</strong> Rock industrial, metal gótico, EBM y darkwave, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Góticos, metaleros, alternativos, amantes del rock industrial y quienes huyen del reggaetón y el pop comercial.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es uno de los locales más antiguos del Corazón Roto (abrió en 1995) y ha sobrevivido a la competencia de las megadiscotecas gracias a su clientela fiel.<br>
		✔️ Ocupa la planta baja y el sótano (de ahí el nombre) de un edificio de piedra gris de los años sesenta, reformado en 2010.<br>
		✔️ El sótano alberga la pista de baile principal (unos cincuenta metros cuadrados) y una segunda barra. Se accede por una escalera de caracol.<br>
		✔️ Cuenta con zona de fumadores interior acristalada con extractores y guardarropa de pago (dos libras).<br>
		✔️ La fachada es estrecha (unos cinco metros), pintada de negro mate, con un cartel de neón rojo con una calavera.<br>
		✔️ Capacidad aproximada: entre doscientas y doscientas cincuenta personas.<br>
		✔️ Es famoso por sus noches temáticas (dark ochenta, cyberpunk, medieval gótico).<br>
		✔️ Los baños (unisex, en el sótano) suelen estar sucios, con azulejos negros y rojos. Y no es raro encontrar parejas en el interior de los mismos, dejándose llevar por algún vicio...`,
        pdfUrl: `#`,
        iconoTipo: `discoteca`
    },
	{
        xPx: 891,
        yPx: 509,
        nombre: `Discoteca «El Eclipse»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Club-oidhche «An Dubhradh»<br><strong>Pronunciación:</strong> /an DU-vra/<br><strong>En inglés:</strong> The Eclipse Club<br><br>
		«El Eclipse» es una discoteca de tamaño medio, de ambiente mainstream y comercial, situada en una calle peatonal ancha y bien iluminada. Es uno de los locales más populares entre los jóvenes de 18 a 25 años, estudiantes universitarios y turistas que buscan música actual (pop, reggaetón, electrónica comercial) sin las excentricidades del Valix ni la oscuridad de El Sótano. Ocupa la planta baja de un edificio de piedra gris de los años 80, reformado en 2015 con un estilo moderno y luminoso (dentro de lo que cabe en una discoteca). Tiene dos pistas de baile (una principal y una secundaria), una zona VIP elevada, dos bares y una terraza exterior acristalada en invierno. Es famoso por sus noches temáticas (fiesta de los 80, noche latina, fiesta de espuma en verano) y por ser el lugar donde «todo el mundo va» los fines de semana. El ambiente es festivo y ruidoso, con un público variado, desde pijos hasta chicos del barrio. No es tan lujoso como el Valix, pero es más asequible y con mucha más afluencia masiva.
		<br><br>
		<strong>Tipo:</strong> Discoteca comercial / Mainstream<br>
		<strong>Horario:</strong> 21:00 - 05:00 (viernes y sábados; Happy Hour de 19:00 a 21:00)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (zona VIP con mesas altas y sofás de cuero; terraza con mesas altas)<br>
		<strong>Especialidad:</strong> Cubatas, chupitos, cerveza de barril y servicio de botella en VIP.<br>
		<strong>Juegos:</strong> Ninguno (el baile es la actividad principal).<br>
		<strong>Ambiente:</strong> Festivo, ruidoso y masivo, con música actual a volumen muy alto, luces estroboscópicas, láseres y pantallas LED. Es el lugar al que «todo el mundo va» los fines de semana, con un público variado que va desde pijos hasta chicos del barrio.<br>
		<strong>Música:</strong> Pop, reggaetón, electrónica comercial y música latina, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes de dieciocho a veinticinco años, estudiantes universitarios y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Consta de dos pistas de baile: la principal (con pantalla LED gigante) y una secundaria dedicada a la música latina.<br>
		✔️ Dispone de zona VIP elevada con barra privada (acceso con pulsera especial que cuesta veinte libras extra).<br>
		✔️ Cuenta con terraza exterior acristalada (zona de fumadores con extractores) que en verano abre sus ventanas.<br>
		✔️ Capacidad aproximada: entre ochocientas y mil personas.<br>
		✔️ Es famoso por sus noches temáticas: fiesta de los ochenta, noche latina, baile victoriano de máscaras, fiesta de espuma en verano, only-lencería...<br>
		✔️ El guardarropa cuesta dos libras.<br>
		✔️ Personal fijo: veinte empleados (gerente, DJs, porteros, camareros, bartenders y personal de limpieza).`,
        pdfUrl: `#`,
        iconoTipo: `discoteca`
    },

	// ==================== HELADERÍAS

	// ==================== HOSPITALES

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS
	
	{
        xPx: 760,
        yPx: 566,
        nombre: `Parque de Bomberos del Corazón Roto`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh Cridhe Briste<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay KREE-yeh BREES-tchuh</em>/<br><strong>En inglés:</strong> Broken Heart Fire Station
		<br><br>
		Situado en una calle ancha y funcional, a apenas 20-50 metros al sur de la Comisaría (casi al lado, compartiendo la misma manzana). Es un edificio moderno (construido en 2005) , de una sola planta (más sótano), con una fachada de hormigón y ladrillo visto. Da servicio a todo el distrito del Corazón Roto (con sus frecuentes peleas, incendios en viviendas sociales y algún que otro incendio provocado), así como a las áreas colindantes del sur del Casco Antiguo y el norte del Puerto Bajo. Tiene una plantilla de 35 bomberos profesionales que trabajan en turnos rotativos de 24 horas. Dispone de cuatro vehículos principales (un camión de bomberos urbano, una autoescala, una unidad de rescate y una furgoneta de apoyo), así como un garaje con cuatro plazas. Es un servicio eficiente pero desbordado (especialmente los fines de semana, cuando las peleas del Corazón Roto pueden acabar en incendios). El ambiente es el de un cuartel moderno: compañerismo, tensión en las emergencias, y una estrecha relación con la Comisaría (a menudo colaboran en los mismos incidentes).`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },

	// ==================== PUBS
	
	{
        xPx: 805,
        yPx: 526,
        nombre: `Pub «La Herradura Rota»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Pub «An Cruth-eich Bhriste»<br><strong>Pronunciación:</strong> /<em>Pub an KROO-yech VRIS-te</em>/<br><strong>En inglés:</strong> The Broken Horseshoe<br><br>
		«La Herradura Rota» es un pub rockero de ambiente duro, situado en una calle ancha y transitada. Es uno de los pubs más antiguos del distrito (abrió en 1985) y ha sobrevivido a la competencia de las discotecas gracias a su clientela fiel (rockeros, moteros, punkies y noctámbulos). La decoración es de rock duro: paredes con herraduras viejas (de caballo), banderas de rock (AC/DC, Metallica, Ramones), luces rojas, y un suelo de hormigón siempre pegajoso. No es raro que se produzcan altercados (peleas de borrachos), y el local es conocido por su tolerancia cero con los alborotadores (los porteros son expeditivos). La especialidad son la cerveza de barril, los chupitos de whisky y los cubatas. No sirven comida caliente (solo frutos secos y patatas fritas de bolsa). Las copas son de plástico duro (para evitar heridas en las peleas). Es un lugar de culto para los rockeros de Dunbhròn.
		<br><br>
		<strong>Tipo:</strong> Pub rockero<br>
		<strong>Horario:</strong> 19:00 - 04:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril, chupitos de whisky y cubatas.<br>
		<strong>Juegos:</strong> Dardos y billar.<br>
		<strong>Ambiente:</strong> Decorado con herraduras viejas, banderas de rock y luces rojas. No es raro que se produzcan altercados.<br>
		<strong>Música:</strong> Rock clásico y metal, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Rockeros, gente de la noche y buscadores de pelea.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las copas son de plástico duro.<br>
		✔️ El suelo es de hormigón.<br>
		✔️ No se sirve comida.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 865,
        yPx: 509,
        nombre: `Pub «El Susurro de Medianoche»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Pub «Dìomhair na Meadhan-oidhche»<br><strong>Pronunciación:</strong> /<em>Pub JEE-o-var na ME-an-oy-e</em>/<br><strong>En inglés:</strong> The Midnight Whisper<br><br>
		«El Susurro de Medianoche» es un pub de karaoke muy popular en el Corazón Roto, situado en una calle ancha y bien iluminada. Es uno de los locales más concurridos del distrito, especialmente los fines de semana, famoso por su escenario de karaoke, su pantalla gigante y su enorme lista de canciones. El local es grande, con dos plantas, y está siempre lleno de jóvenes, grupos de amigos, despedidas de soltero y turistas. El ambiente es caótico, ruidoso y festivo, con un suelo pegajoso y un olor a cerveza mezclado con ambientador barato. Tienen concurso de karaoke los sábados por la noche, con un premio: una cena gratis en el restaurante «El Castillo del Burgués». La especialidad son los cócteles sencillos, los cubatas y la cerveza de barril. Es el templo del karaoke en Dunbhròn.
		<br><br>
		<strong>Tipo:</strong> Pub karaoke / Copas<br>
		<strong>Horario:</strong> 21:00 - 05:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas)<br>
		<strong>Especialidad:</strong> Cócteles sencillos, cubatas y cerveza de barril.<br>
		<strong>Juegos:</strong> Karaoke (el principal del distrito).<br>
		<strong>Ambiente:</strong> Local grande, con escenario y pantallas. El olor a cerveza mezclado con ambientador barato es característico.<br>
		<strong>Música:</strong> Pop, rock, reggaetón y baladas. Volumen alto, pero se apaga durante las actuaciones.<br>
		<strong>Clientela habitual:</strong> Gente joven, grupos de amigos y despedidas de soltero.<br><br>
		<strong>Notas:</strong><br>
		✔️ Hay colas para cantar.<br>
		✔️ La lista de canciones es enorme.<br>
		✔️ Los sábados se celebra un concurso de karaoke.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
    {
        xPx: 877,
        yPx: 442,
        nombre: `Pub «La Sombra del Cuervo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Pub «Sgàil an Fhithich»<br><strong>Pronunciación:</strong> /<em>Pub SKAL an EE-yaj</em>/<br><strong>En inglés:</strong> The Raven's Shadow<br><br>
		«La Sombra del Cuervo» es un pub gótico y alternativo, situado en una calle estrecha y oscura. Es uno de los locales más singulares del distrito, frecuentado por góticos, alternativos, amantes de la oscuridad y gente del Barrio Gótico que cruzan la frontera del distrito para disfrutar de su ambiente. La entrada es discreta: no hay cartel luminoso, solo una puerta negra sin letrero, con una pequeña placa de bronce que muestra un cuervo grabado. El interior es muy oscuro, decorado con plumas de cuervo, telarañas falsas, velas eléctricas y calaveras de plástico. La música es rock gótico, post-punk y darkwave a volumen alto. Tienen billar (una mesa en un rincón oscuro) y dardos. Los camareros visten de negro. Es un lugar de culto para los noctámbulos más oscuros de Dunbhròn.
		<br><br>
		<strong>Tipo:</strong> Pub gótico / Alternativo<br>
		<strong>Horario:</strong> 20:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza negra, absenta, licores oscuros y cócteles de nombre lúgubre.<br>
		<strong>Juegos:</strong> Billar (una mesa en un rincón oscuro) y dardos.<br>
		<strong>Ambiente:</strong> Muy oscuro, decorado con plumas de cuervo, telarañas falsas y velas. Considerado un local de culto.<br>
		<strong>Música:</strong> Rock gótico, post-punk y darkwave, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Góticos, alternativos, amantes del misterio y gente del Barrio Gótico.<br><br>
		<strong>Notas:</strong><br>
		✔️ La entrada es discreta: no hay cartel llamativo, solo una puerta negra.<br>
		✔️ Los camareros visten de negro.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 740,
        yPx: 578,
        nombre: `Pub «La Sirena»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «Maighdeann-mhara»<br><strong>Pronunciación:</strong> /MAI-jan VA-ra/<br><strong>En inglés:</strong> The Mermaid Pub<br><br>
		«La Sirena» es un pub de copas temático marino, situado en una calle ancha y concurrida del distrito. Es un local muy popular entre los jóvenes, universitarios y turistas que buscan un ambiente festivo y desenfadado, con decoración de sirenas de plástico, redes de pesca y neones azules. La especialidad son los cubatas, los chupitos de colores y los cócteles afrutados, a precios inflados para lo que ofrecen. Tienen música pop comercial, reggaetón y latina a volumen muy alto. El local es pequeño y se llena hasta la bandera, especialmente los fines de semana. Es un lugar propicio para el ligoteo intenso. Las consumiciones son caras, pero la clientela es joven y despreocupada.
		<br><br>
		<strong>Tipo:</strong> Pub de copas / Temático<br>
		<strong>Horario:</strong> 22:00 - 06:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas, más barra)<br>
		<strong>Especialidad:</strong> Cubatas, chupitos de colores y cócteles afrutados.<br>
		<strong>Juegos:</strong> Ninguno.<br>
		<strong>Ambiente:</strong> Decoración marina algo cutre: redes, sirenas de plástico y neones azules. Muy popular entre los jóvenes.<br>
		<strong>Música:</strong> Pop comercial, reggaetón y latina, a volumen muy alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes, universitarios y gente que busca ligar.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las consumiciones son caras para lo que ofrecen.<br>
		✔️ El local es pequeño y se llena hasta la bandera.<br>
		✔️ Ambiente propicio para el ligoteo.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 687,
        yPx: 550,
        nombre: `Pub «El Caballito de Mar»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An t-Each-mara Beag»<br><strong>Pronunciación:</strong> /an TECH-ma-ra BYAK/<br><strong>En inglés:</strong> The Seahorse Pub<br><br>
		«El Caballito de Mar» es un pub de barrio de los de toda la vida, situado en una calle estrecha y algo deteriorada. Es uno de los pocos locales del distrito donde los vecinos del barrio, los alcohólicos funcionales y algún turista despistado se sienten como en casa. El local es pequeño, con el encanto de un bar de toda la vida en medio del caos: el suelo está manchado, el olor a limpio y a cerveza se entremezcla, y el dueño es un cascarrabias famoso en el barrio. La especialidad son las cervezas de barril baratas (lager económica), el vino de cartón y las tapas de escabeche (boquerones, berberechos, mejillones). Tienen dardos muy desgastados y máquinas tragaperras. Es el refugio de los que no soportan el ruido de las discotecas.
		<br><br>
		<strong>Tipo:</strong> Pub de barrio<br>
		<strong>Horario:</strong> 16:00 - 02:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas)<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager económica), vino de cartón y tapas de escabeche.<br>
		<strong>Juegos:</strong> Dardos (muy desgastados) y máquinas tragaperras.<br>
		<strong>Ambiente:</strong> Local pequeño y sucio, con el encanto de un bar de toda la vida en medio del caos. El olor a limpio y a cerveza se entremezcla.<br>
		<strong>Música:</strong> Música variada de fondo (rock suave, pop), a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos del barrio, alcohólicos funcionales y algún turista despistado.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es de los pocos sitios del Corazón Roto donde los vecinos se sienten como en casa.<br>
		✔️ El dueño es un cascarrabias.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 752,
        yPx: 467,
        nombre: `Pub «Sol y Sombra»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «Grian is Sgàil»<br><strong>Pronunciación:</strong> /GRI-an ish SKAAL/<br><strong>En inglés:</strong> Sun and Shadow Pub<br><br>
		«Sol y Sombra» es un pub deportivo de ambiente animado, situado en una calle ancha y bien comunicada. El local es amplio, con varias zonas, y está siempre lleno los fines de semana, especialmente cuando juega el Dunbhròn FC o la selección escocesa de rugby. La especialidad son las cervezas de barril, los vinos de la casa y las tapas de tortilla y jamón. Tienen billar, dardos y máquinas de apuestas con pantallas que emiten carreras de caballos y fútbol. El ambiente es ruidoso pero ordenado, con una clientela variada, desde jubilados hasta jóvenes. Es el lugar ideal para ver el partido sin perderse detalle.
		<br><br>
		<strong>Tipo:</strong> Pub deportivo<br>
		<strong>Horario:</strong> 12:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril, vinos de la casa y tapas de tortilla y jamón.<br>
		<strong>Juegos:</strong> Billar y dardos.<br>
		<strong>Ambiente:</strong> Local amplio, con varias zonas y pantallas repartidas por todo el local. Ambiente centrado en el fútbol y las apuestas.<br>
		<strong>Música:</strong> Pop y rock, que baja de volumen cuando hay un partido importante.<br>
		<strong>Clientela habitual:</strong> Aficionados al deporte, quinielistas, cuadrillas y gente que busca retransmisiones.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las pantallas siempre emiten deportes: fútbol, rugby, dardos profesionales y boxeo.<br>
		✔️ Disponen de máquinas de apuestas.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },

	// ==================== RESTAURANTES
	
	 {
        xPx: 838,
        yPx: 470,
        nombre: `Pizzería «4fan»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Pizzeria «Ceithir Fan»<br><strong>Pronunciación:</strong> /<em>PEET-se-ree-a KAY-hir FAN</em>/<br><strong>En inglés:</strong> 4fan Pizzeria<br><br>
		Es uno de los locales más populares del distrito para comer rápido y barato, frecuentado por gente joven, borrachos que salen de fiesta y estudiantes. Es famoso por sus pizzas de masa fina, cortes cuadrados, grandes y baratas, así como por las porciones sueltas, perfectas para llevar. El local es pequeño, con pocas mesas (la mayoría de los clientes piden para llevar). El aroma a masa y queso se percibe desde la calle. No aceptan reservas. Solo aceptan pago en efectivo o tarjeta sin contacto. Es el típico sitio al que se va de madrugada después de una noche de copas.
		<br><br>
		<strong>Tipo:</strong> Restaurante (comida rápida)<br>
		<strong>Horario:</strong> 13:00 - 17:00 / 20:00 - 05:00<br>
		<strong>Tipo de cocina:</strong> Italiana (pizza rápida)<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas)<br>
		<strong>Especialidad:</strong> Pizzas de masa fina, cortes cuadrados, grandes y baratas. También venden porciones sueltas.<br>
		<strong>Ambiente:</strong> Local pequeño, con mucho tránsito de pedidos para llevar. El aroma a masa y queso se percibe desde la calle.<br>
		<strong>Clientela habitual:</strong> Gente joven, borrachos y estudiantes.<br><br>
		<strong>Notas:</strong><br>
		✔️ No se aceptan reservas.<br>
		✔️ Solo pago en efectivo o tarjeta sin contacto.`,
        pdfUrl: `#`,
        iconoTipo: `pizzeria`
    },
	{
        xPx: 854,
        yPx: 490,
        nombre: `Dönner Kebab «Mezopotamia»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Dönner Kebab «Mesopotàmia»<br><strong>Pronunciación:</strong> /<em>DON-er KEBAB Me-so-po-TA-mi-a</em>/<br><strong>En inglés:</strong> Dönner Kebab: Mesopotamia<br><br>
		El Dönner Kebab «Mezopotamia» es un local de comida rápida especializado en kebab. Es el rey de la madrugada en el distrito: abre hasta las 6:00, y a las 4 de la madrugada la cola llega a la calle. Es frecuentado por gente que sale de fiesta, grupos hambrientos y borrachos que buscan algo contundente para terminar la noche. El local es muy pequeño, con apenas sitio para apoyarse: solo una barra de metal, sin mesas. La especialidad son los kebabs en pan de pita, durum (enrollado) y pizza de kebab. Tienen cuatro niveles de salsa picante: suave, medio, fuerte, extra picante y ultra picante. Solo aceptan efectivo. El ambiente es ruidoso, con el olor a carne girando en el asador y las prisas de los camareros.
		<br><br>
		<strong>Tipo:</strong> Restaurante (comida rápida)<br>
		<strong>Horario:</strong> 12:00 - 15:00 / 17:00 - 06:00<br>
		<strong>Tipo de cocina:</strong> Turca / Alemana (kebab, döner)<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Muy poco (solo de pie en barra)<br>
		<strong>Especialidad:</strong> Kebab en pan de pita, durum y pizza de kebab.<br>
		<strong>Ambiente:</strong> Local con la clásica barra de metal donde se ve girar la carne. Luces blancas y brillantes. Apenas hay sitio para sentarse.<br>
		<strong>Clientela habitual:</strong> Gente saliendo de fiesta, grupos hambrientos y borrachos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es el rey de la madrugada: a las cuatro de la mañana hay cola.<br>
		✔️ Solo se acepta efectivo.<br>
		✔️ Tienen salsa picante, muy picante, extra picante y ultra picante.`,
        pdfUrl: `#`,
        iconoTipo: `kebab`
    },
	{
        xPx: 811,
        yPx: 504,
        nombre: `Restaurante «El Cocodrilo con Chistera»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Crogall le Hat Àrd»<br><strong>Pronunciación:</strong> /an KRO-gal le HAT AARD/<br><strong>En inglés:</strong> The Crocodile with a Top Hat Restaurant<br><br>
		«El Cocodrilo con Chistera» es un restaurante temático extravagante y caprichoso. Es un lugar de culto por lo absurdo: las paredes están pintadas con cocodrilos que llevan chistera, los camareros visten de mayordomo (con chaqué y guantes blancos), y la carta incluye platos con nombres surrealistas como «haggis frito con salsa de mango», «hamburguesa de venado con ketchup de fresa» y «perrito caliente con toppings locos» (doritos, queso derretido, cebolla caramelizada, salsa barbacoa y piña). Es frecuentado por gente que busca una experiencia rara, turistas con resaca y curiosos. El dueño, un excéntrico coleccionista de chisteras, ha llenado el local de sombreros de copa: colgados del techo, sobre las mesas, en las paredes. El precio es moderado, la comida es sorprendentemente buena (a pesar de las combinaciones locas), y el ambiente es festivo y desenfadado.
		<br><br>
		<strong>Tipo:</strong> Restaurante temático / Caprichoso<br>
		<strong>Horario:</strong> 20:00 - 02:00<br>
		<strong>Tipo de cocina:</strong> Escocesa fusión / Caprichosa<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Haggis frito con salsas exóticas, hamburguesas de venado y perritos calientes con toppings locos.<br>
		<strong>Ambiente:</strong> Local extravagante y algo cutre. Las paredes están pintadas con cocodrilos que llevan chistera. Es un sitio de culto por lo absurdo.<br>
		<strong>Clientela habitual:</strong> Gente que busca una experiencia rara, turistas con resaca y curiosos.<br><br>
		<strong>Notas:</strong><br>
		✔️ El dueño es un excéntrico que colecciona chisteras.<br>
		✔️ Los camareros visten de mayordomo.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 884,
        yPx: 538,
        nombre: `Restaurante «El Castillo del Burgués»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Caisteal a’ Bhùirgeoisich»<br><strong>Pronunciación:</strong> /KAISH-tel a VUR-goy-shaj/<br><strong>En inglés:</strong> The Burgher’s Castle Restaurant<br><br>
		«El Castillo del Burgués» es un restaurante de cocina tradicional británica y escocesa. Es un antiguo pub reconvertido en restaurante familiar, uno de los pocos sitios del distrito donde se puede comer con mantel de papel (no es de tela, pero es un lujo local). Sirve fish & chips, steak & ale pie, desayunos ingleses (todo el día) y Sunday Roast los domingos. Es frecuentado por vecinos mayores, trabajadores de la zona y algún turista despistado que se ha alejado demasiado del centro. El local es amplio, con una barra de madera (restos del antiguo pub) y banquetas de cuero. El ambiente es familiar y tranquilo (cierra a las 23:00, más temprano que el resto del distrito). Los precios son asequibles y las raciones, generosas.
		<br><br>
		<strong>Tipo:</strong> Restaurante tradicional<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Británica / Escocesa<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Fish & chips, steak & ale pie y desayunos ingleses (todo el día).<br>
		<strong>Ambiente:</strong> Antiguo pub reconvertido en restaurante. Conserva la barra de madera y las banquetas. Es el único sitio del Corazón Roto donde se puede comer con mantel de papel.<br>
		<strong>Clientela habitual:</strong> Vecinos mayores, trabajadores de la zona y algún turista despistado.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cierra más temprano que el resto.<br>
		✔️ Es un local familiar.<br>
		✔️ Los domingos ofrecen Sunday Roast.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 823,
        yPx: 573,
        nombre: `Restaurante «El As de Picas»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An t-Às Spèilidh»<br><strong>Pronunciación:</strong> /an TAAS SPEI-lij/<br><strong>En inglés:</strong> The Ace of Spades Restaurant<br><br>
		«El As de Picas» es un restaurante americano especializado en hamburguesas gigantes, costillas BBQ, aros de cebolla y batidos espesos, situado en una calle ancha y concurrida. Es uno de los locales más populares entre los jóvenes, grupos de amigos y gente que quiere comer fuerte antes de la fiesta. La decoración es de naipes y cartas: paredes con motivos de picas, corazones, diamantes y tréboles, luces de neón rojas y negras, y sillas de cuero negro. Las hamburguesas llevan nombres de cartas (As de picas, Rey de corazones, Reina de diamantes, Jota de tréboles). Ofrecen opciones vegetarianas (hamburguesa de garbanzos). El ambiente es ruidoso y festivo, con música rock a volumen medio. El local es amplio y suele estar lleno los fines de semana.
		<br><br>
		<strong>Tipo:</strong> Restaurante americano<br>
		<strong>Horario:</strong> 13:00 - 17:00 / 19:00 - 02:00<br>
		<strong>Tipo de cocina:</strong> Americana (hamburguesas, costillas)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Hamburguesas gigantes, costillas BBQ, aros de cebolla y batidos espesos.<br>
		<strong>Ambiente:</strong> Decorado con motivos de naipes y cartas. Luces de neón y música rock a volumen medio. Sillas de cuero.<br>
		<strong>Clientela habitual:</strong> Jóvenes, grupos de amigos y gente que quiere comer fuerte antes de la fiesta.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las hamburguesas llevan nombre de cartas (As de picas, Rey de corazones...).<br>
		✔️ Ofrecen opciones vegetarianas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 700,
        yPx: 525,
        nombre: `Restaurante «El Jardín del Peregrino»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Gàrradh an Taistealaich»<br><strong>Pronunciación:</strong> /GA-rah an TASH-tal-aj/<br><strong>En inglés:</strong> The Pilgrim’s Garden Restaurant<br><br>
		«El Jardín del Peregrino» es un restaurante vegetariano y vegano (con opciones para todos los públicos), situado en una calle relativamente tranquila. Es el único local del distrito que ofrece comida vegana elaborada y casera, con opciones para celíacos y alérgicos. Es frecuentado por gente joven concienciada, vegetarianos, estudiantes universitarios de la Colina del Saber (que se desplazan hasta aquí) y algún que otro turista que busca alternativas saludables en medio del caos del Corazón Roto. La especialidad son las hamburguesas vegetales (de garbanzos, lentejas o quinoa), los bowls de quinoa, el falafel casero y los batidos de frutas. Todo es casero y de proximidad: compran las verduras a proveedores locales. No aceptan reservas. El ambiente es íntimo y acogedor, con paredes pintadas de murales de peregrinos inspirados en el Camino de Santiago y en la peregrinación a la catedral de Dunbhròn. Es un pequeño remanso de paz en medio del distrito más conflictivo de la ciudad.
		<br><br>
		<strong>Tipo:</strong> Restaurante vegetariano/vegano<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 01:00<br>
		<strong>Tipo de cocina:</strong> Internacional rápida / Vegana<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Hamburguesas vegetales, bowls de quinoa, falafel casero y batidos de frutas.<br>
		<strong>Ambiente:</strong> Local pequeño con paredes pintadas de murales de peregrinos. Es el único sitio del distrito con opciones vegetarianas y veganas elaboradas.<br>
		<strong>Clientela habitual:</strong> Gente joven concienciada, vegetarianos y buscadores de opciones más sanas en medio del caos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Todo es casero.<br>
		✔️ Los precios son asequibles para la calidad.<br>
		✔️ No se aceptan reservas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS

    {
        xPx: 807,
        yPx: 460,
        nombre: `Calle de los Botellones: Tramo norte`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Sràid nam Botal: Earrann a Tuath<br><strong>Pronunciación:</strong> /<em>STRAT nam BO-tal: ER-an a TOO-a</em>/<br><strong>En inglés:</strong> Bottle Alley: North Section`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 763,
        yPx: 496,
        nombre: `Estación de autobuses`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Stèisean nam Bus<br><strong>Pronunciación:</strong> /<em>SHTAY-shan nam BUS</em>/<br><strong>En inglés:</strong> Bus Station
		<br><br>
		La Estación de Autobuses de Dunbhròn es el principal centro de transporte público de la ciudad, situada en una amplia explanada. Es un edificio moderno, funcional y amplio, construido en 2005 y reformado en 2018, que conecta la ciudad con el aeropuerto, los distritos periféricos y las localidades cercanas. Es el medio de transporte más utilizado por los residentes de Dunbhròn (por su frecuencia y cobertura: hay paradas cuidadas y cubiertas (para proteger de la lluvia cada 200-500 metros en toda la ciudad) y por los turistas (que llegan desde el aeropuerto). La estación está abierta 24 horas, aunque los servicios reducen su actividad de madrugada. Es un lugar de tránsito constante: viajeros con maletas, estudiantes, trabajadores, familias, y también jóvenes que vuelven de fiesta (los fines de semana, la estación se llena de noctámbulos esperando el primer autobús de la madrugada). El edificio alberga taquillas, máquinas expendedoras, una cafetería, una tienda de prensa, aseos públicos y consignas. Es un lugar seguro y vigilado (cámaras y vigilantes jurados), pero no exento de problemas (carteristas, borrachos, algún que otro sintecho).`,
        pdfUrl: `#`,
        iconoTipo: `bus`
    },
    {
        xPx: 671,
        yPx: 530,
        nombre: `Recinto de conciertos «El Auditorio»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad cuirm-chiùil «An Talla-èisteachd»<br><strong>Pronunciación:</strong> /<em> EE-un-at KOO-irm-a-JYO-ol an TA-la-ESH-tchajk</em>/<br><strong>En inglés:</strong> The Auditorium: Concert Venue
		<br><br>
		«El Auditorio» no es un edificio al uso, sino una enorme explanada de asfalto situada en el extremo oeste del Corazón Roto, a orillas del río Leith. Es un aparcamiento disuasorio de 20.000 m² (con capacidad para más de 1.000 vehículos) que, cuando hay un concierto importante, una fiesta local o un evento provincial o nacional, se transforma en un recinto de conciertos al aire libre. El resto del año es un lugar desangelado, ventoso y solitario, frecuentado por conductores que dejan el coche para coger el autobús, camioneros de paso, y algún que otro sintecho. Pero cuando hay eventos, el espacio se engalana: se montan escenarios, gradas, barras, casetas de comida, aseos portátiles, vallas de seguridad, pantallas gigantes en algunos eventos y una gigantesca carpa para la lluvia. El ambiente pasa de ser un páramo asfaltado a un hervidero de gente, música y fiesta. Es el lugar elegido por el ayuntamiento para los conciertos de bandas nacionales e internacionales, las verbenas populares (como la del solsticio de verano), y las fiestas de la cerveza (inspiradas en el Oktoberfest). Es famoso por su mala acústica (el eco del río) y por su ubicación apartada, lejos de las viviendas para no molestar a los vecinos. Es el corazón festivo del Corazón Roto… cuando hay fiesta.`,
        pdfUrl: `#`,
        iconoTipo: `salaConciertos`
    },
    {
        xPx: 835,
        yPx: 502,
        nombre: `Calle de los Botellones: Tramo central`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Sràid nam Botal: Earrann Mheadhain<br><strong>Pronunciación:</strong> /<em>STRAT nam BO-tal: ER-an VE-an</em>/<br><strong>En inglés:</strong> Bottle Alley: Central Section`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 834,
        yPx: 525,
        nombre: `Salón de apuestas`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Seòmar nan Geall<br><strong>Pronunciación:</strong> /<em>SHO-mar nan GYOUL</em>/<br><strong>En inglés:</strong> Betting Shop
		<br><br>
		Es un local moderno y funcional, inaugurado en 2018, que ofrece tanto apuestas deportivas (fútbol, rugby, carreras de caballos, dardos, boxeo) como productos de la Lotería Nacional británica (EuroMillions, Lotto, Thunderball, Set For Life, entre otros). Es frecuentado por aficionados al deporte, quinielistas, clientes habituales del barrio y algún turista despistado que busca probar suerte. El ambiente es ruidoso y tenso (sobre todo los días de grandes eventos deportivos), con una clientela mayoritariamente masculina y de mediana edad. El local dispone de pantallas de televisión (retransmisión de eventos deportivos), máquinas de apuestas electrónicas (self-service betting terminals) y un mostrador tradicional para apuestas atendidas por personal. Es uno de los pocos establecimientos del distrito que abre los domingos (de 10:00 a 17:00).
		<br><br>
		<strong>Tipo:</strong> Casa de apuestas / Salón de juegos<br>
		<strong>Horario:</strong> 10:00 - 21:00 (domingos de 10:00 a 17:00)<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡ (rápida en los terminales de autoservicio; normal en el mostrador)<br>
		<strong>¿Tiene mesas?:</strong> Sí (doce butacas reclinables en zona de visionado y taburetes en la barra)<br>
		<strong>Especialidad:</strong> Apuestas deportivas (fútbol, rugby, carreras de caballos, dardos, boxeo) y productos de la Lotería Nacional británica (Lotto, EuroMillions, Thunderball, Set For Life, HotPicks, Scratchcards).<br>
		<strong>Juegos:</strong> Máquinas de apuestas electrónicas (self-service betting terminals) y seis máquinas tragaperras modernas.<br>
		<strong>Ambiente:</strong> Ruidoso y tenso, sobre todo los días de grandes eventos deportivos. Moderno, funcional y algo frío, con una estética que busca la eficiencia y la transparencia.<br>
		<strong>Música:</strong> No hay música ambiental (se escucha el sonido de las pantallas y las máquinas).<br>
		<strong>Clientela habitual:</strong> Aficionados al deporte, quinielistas, clientes habituales del barrio y algún turista despistado. Mayoritariamente masculina y de mediana edad.<br><br>
		<strong>Notas:</strong><br>
		✔️ Dispone de mostrador de apuestas con tres cajeros, cinco terminales de autoservicio con biombos de privacidad, y diez pantallas de televisión de alta definición para seguir los eventos.<br>
		✔️ Tiene máquina de café de cápsulas y expendedora de aperitivos junto a la entrada.<br>
		✔️ Los aseos están limpios (para lo que es la zona).<br>
		✔️ Capacidad aproximada: entre cuarenta y cincuenta personas.<br>
		✔️ Es uno de los pocos establecimientos del distrito que abre los domingos.<br>
		✔️ Personal fijo: seis empleados (gerente, tres cajeros y personal de limpieza), con refuerzos los fines de semana y días de eventos importantes.`,
        pdfUrl: `#`,
        iconoTipo: `casaApuestas`
    },
    {
        xPx: 864,
        yPx: 548,
        nombre: `Calle de los Botellones: Tramo sur`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Sràid nam Botal: Earrann a Deas<br><strong>Pronunciación:</strong> /<em>STRAT nam BO-tal: ER-an a JES</em>/<br><strong>En inglés:</strong> Bottle Alley: South Section`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },

    // ==================== BARRIO GÓTICO ====================
	
	// ==================== BAR

	{
        xPx: 821,
        yPx: 607,
        nombre: `Bar «El Holandés Errante»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Duitseach Itealaich»<br><strong>Pronunciación:</strong> /an DUJ-saj I-te-la/<br><strong>En inglés:</strong> The Flying Dutchman Bar<br><br>
		«El Holandés Errante» es un bar temático y místico situado en una calle estrecha y empedrada. El local está ambientado en la leyenda del Holandés Errante, el famoso barco fantasma condenado a navegar eternamente por los mares. La decoración es oscura, envolvente y teatral: paredes pintadas de negro y azul marino, con un mural de un barco fantasma —un galeón hundido, con velas rotas y un esqueleto de capitán— pintado en la pared principal, y una máquina de humo (niebla artificial) que sale del suelo a intervalos regulares. La iluminación es tenue: focos azules y blancos, velas eléctricas. La música es rock psicodélico y rock progresivo (Pink Floyd, The Doors, Led Zeppelin) a volumen medio. El local es pequeño y se llena rápidamente, sobre todo los jueves, cuando hay cuentacuentos de leyendas marítimas (un viejo marinero narra historias de barcos fantasma, sirenas y naufragios). La especialidad son la cerveza oscura, el ron, la ginebra y los cócteles ahumados, servidos bajo campana de cristal con humo. Es un lugar de culto para los amantes de la leyenda, los jóvenes alternativos y los noctámbulos del Barrio Gótico.
		<br><br>
		<strong>Tipo:</strong> Bar temático / Místico<br>
		<strong>Horario:</strong> 18:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza oscura, ron, ginebra y cócteles ahumados.<br>
		<strong>Juegos:</strong> Dardos.<br>
		<strong>Ambiente:</strong> Decorado con un barco fantasma pintado en la pared y niebla artificial que sale del suelo mediante una máquina de humo. Ambiente misterioso y envolvente.<br>
		<strong>Música:</strong> Rock psicodélico y rock progresivo, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Jóvenes, alternativos y amantes de la leyenda del Holandés Errante.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los cócteles ahumados se sirven con campana de cristal y humo.<br>
		✔️ Los jueves hay cuentacuentos de leyendas marítimas.<br>
		✔️ El local es pequeño y se llena rápidamente.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 929,
        yPx: 627,
        nombre: `Bar «La Campanada de Medianoche»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Clag Meadhan-Oidhche»<br><strong>Pronunciación:</strong> /KLAG ME-hañ OI-je/<br><strong>En inglés:</strong> Midnight Bell Bar<br><br>
		«La Campanada de Medianoche» es un bar de copas elegante y romántico, situado en una calle empedrada y relativamente ancha. Ocupa la planta baja de un edificio de piedra negra del siglo XVII, rehabilitado con un estilo clásico y refinado: paredes de piedra vista, lámparas de araña, cortinas de terciopelo rojo y mesas de mármol. Es el lugar preferido por parejas, citas románticas y clientes de alto poder adquisitivo que buscan un ambiente íntimo y distinguido, lejos del bullicio de las discotecas. La especialidad son el champán, el cava, los vinos espumosos y los cócteles elegantes, como el «Midnight Bell» (champán con licor de frambuesa) o el «Velvet Kiss» (gin tonic con pétalos de rosa). El código de vestimenta es elegante, prohibida la ropa deportiva. Una campanada suena a medianoche (una campana real instalada en el techo), dando nombre al local. Los viernes hay música en vivo de piano y violín. El ambiente es tranquilo, con mesas separadas para garantizar la intimidad. Las copas de champán son de cristal de Bohemia importado. Es un oasis de lujo en medio de la oscuridad del Barrio Gótico.
		<br><br>
		<strong>Tipo:</strong> Bar de copas / Romántico<br>
		<strong>Horario:</strong> 19:00 - 02:00<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Champán, cava, vinos espumosos y cócteles elegantes.<br>
		<strong>Juegos:</strong> Ninguno.<br>
		<strong>Ambiente:</strong> Elegante, con paredes de terciopelo rojo, lámparas de araña y mesas de mármol. Una campanada suena a medianoche, dando nombre al local.<br>
		<strong>Música:</strong> Jazz y bossa nova, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Parejas, citas románticas y gente de alto poder adquisitivo.<br><br>
		<strong>Notas:</strong><br>
		✔️ El código de vestimenta es elegante: prohibida la ropa deportiva.<br>
		✔️ Las copas de champán son de cristal de Bohemia.<br>
		✔️ Los viernes hay música en vivo (piano y violín).`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 791,
        yPx: 690,
        nombre: `Bar «El Escudo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Sgiath»<br><strong>Pronunciación:</strong> /an SKI-a/<br><strong>En inglés:</strong> The Shield Bar<br><br>
		«El Escudo» es un bar de barrio de los de toda la vida, situado en una calle estrecha y empedrada. Es el último refugio de los vecinos del distrito (los pocos que quedan), de los trabajadores de la zona y de los jubilados que no se han dejado ahogar por la gente y el turismo oscuro. El local es pequeño, con barra de madera, taburetes altos, mesas de fórmica y un olor a cerveza y a fritura que se ha quedado impregnado en las paredes. Es el típico bar de toda la vida donde las tapas son gratis con la consumición (croquetas, calamares a la romana, patatas bravas) y donde los clientes se conocen por su nombre de pila. Las pantallas siempre emiten deportes (fútbol, rugby, dardos profesionales) a volumen bajo para no molestar las conversaciones. Los fines de semana, los jubilados discuten sobre política y fútbol mientras juegan a los dardos. Es un lugar tranquilo, auténtico y ajeno a las modas, un oasis de normalidad en medio de la oscuridad del Barrio Gótico.
		<br><br>
		<strong>Tipo:</strong> Bar de barrio / Deportivo<br>
		<strong>Horario:</strong> 12:00 - 01:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril, vino de la casa, tapas calientes y bocadillos.<br>
		<strong>Juegos:</strong> Dardos, máquinas tragaperras y pantallas deportivas.<br>
		<strong>Ambiente:</strong> Bar de toda la vida, con barra de madera, taburetes altos y mesas de fórmica. Es el bar de los vecinos del Barrio Gótico (los pocos que quedan).<br>
		<strong>Música:</strong> Pop y rock suave, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos mayores, trabajadores y jubilados.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las tapas son gratis con la consumición.<br>
		✔️ Es famoso por sus calamares a la romana.<br>
		✔️ Los fines de semana hay partidos de fútbol en las pantallas.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA
	
    {
        xPx: 952,
        yPx: 658,
        nombre: `Biblioteca «John Logie Baird»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Iain Logie Baird»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan EE-an LO-gee BAIRD</em>/<br><strong>En inglés:</strong> John Logie Baird Library
		<br><br>
		La Biblioteca «John Logie Baird» es la biblioteca pública principal del distrito. Un centro de conocimiento de gran tamaño que da servicio a una amplia zona de la ciudad: el Barrio Gótico, el Corazón Roto, Puerto Bajo y la mitad sur de Costa Nova. Inaugurada en 1998 en un edificio de nueva planta (diseño modernista de ladrillo rojo y cristal), fue ampliada en 2015 para hacer frente a la creciente demanda de una población de más de 60.000 habitantes. Es un espacio luminoso, funcional y bien equipado, con una colección de más de 80.000 volúmenes, una hemeroteca, una mediateca, una sala de ordenadores, una sala de estudio, un auditorio para conferencias y actos culturales, una cafetería y una ludoteca infantil. Es un lugar frecuentado por estudiantes, investigadores, jubilados, vecinos del Barrio Gótico, trabajadores del Puerto Bajo y familias de Costa Nova. El ambiente es el de una gran biblioteca urbana: silencioso en las zonas de estudio, más animado en la zona infantil y en el auditorio. Es conocida por su sección local (historia de Dunbhròn, genealogía, folclore) y por su archivo digital con mapas y documentos antiguos escaneados. La bibliotecaria jefe, una mujer de mediana edad, es una apasionada de la obra de Baird (el inventor de la televisión) y ha organizado una sala de exposiciones permanente sobre su vida y obra.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },

	// ==================== CAFÉ - BAR

	{
        xPx: 839,
        yPx: 619,
        nombre: `Cafetería «El Candil»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Coinneal»<br><strong>Pronunciación:</strong> /an KON-yal/<br><strong>En inglés:</strong> The Oil Lamp Café
		<br><br>
		«El Candil» es una tetería y cafetería íntima, situada en una calle estrecha y empedrada. Ocupa la planta baja de un edificio de piedra negra del siglo XVII, rehabilitado con un estilo rústico y acogedor: paredes de piedra vista, lámparas de aceite (eléctricas, que imitan candiles), muebles de madera oscura y un aroma a incienso de canela que lo impregna todo. Es un refugio para los estudiantes de la cercana universidad (de la Colina del Saber), escritores, artistas y gente que busca tranquilidad en medio de la oscuridad del Barrio Gótico. La especialidad son las infusiones, los tés de hierbas (más de 30 variedades), el café de filtro y los pasteles de zanahoria y calabaza (caseros). El local es pequeño y acogedor, con una pequeña biblioteca de segunda mano (los clientes pueden leer los libros gratis). No disponen de wifi (para fomentar la conversación y la lectura). Los jueves hay lectura de poesía (micrófono abierto para poetas locales). Es un lugar de silencio y letras, muy alejado del bullicio de las discotecas.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Tetería<br>
		<strong>Horario:</strong> 10:00 - 22:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Infusiones, tés de hierbas, café de filtro y pasteles de zanahoria y calabaza.<br>
		<strong>Ambiente:</strong> Íntimo, con paredes de piedra vista, lámparas de aceite (eléctricas que imitan candiles) y muebles de madera oscura. El aroma a incienso de canela lo impregna todo.<br>
		<strong>Música:</strong> Música clásica o jazz suave, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Estudiantes de la cercana universidad, escritores y gente que busca tranquilidad.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuentan con una pequeña biblioteca de segunda mano.<br>
		✔️ Los jueves hay lectura de poesía.<br>
		✔️ No disponen de wifi para fomentar la conversación.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 910,
        yPx: 567,
        nombre: `Cafetería «La Flauta del Sátiro»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Duiseal an t-Sàthair»<br><strong>Pronunciación:</strong> /an DU-shal an TAA-hir/<br><strong>En inglés:</strong> The Satyr’s Flute Café<br><br>
		«La Flauta del Sátiro» es una cafetería alternativa y bohemia, situada en una calle empedrada y relativamente ancha. Es un local de culto para artistas, estudiantes de filosofía, músicos y bohemios de Dunbhròn, que buscan un ambiente creativo y desenfadado. La decoración es surrealista y mitológica: las paredes están cubiertas de máscaras de sátiros (de cartón piedra, madera y yeso), figuras mitológicas (faunos, ninfas, centauros) y murales de paisajes arcádicos (bosques, fuentes, criaturas fantásticas). Hay una pequeña tarima para micrófono abierto los viernes (poesía, música acústica, monólogos) y las paredes están llenas de cuadros de artistas locales que están a la venta. La especialidad son el café de especialidad, la cerveza artesana en botella, las infusiones y los bocadillos vegetarianos. Se admiten mascotas: perros, gatos, y alguna vez se han visto igualas y serpientes. El ambiente es ruidoso pero creativo, con música en directo los viernes y exposiciones rotativas. Es el lugar donde los estudiantes de la universidad (la Colina del Saber) vienen a discutir sobre arte y existencia.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Alternativa<br>
		<strong>Horario:</strong> 11:00 - 01:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de especialidad, cerveza artesana en botella, infusiones y bocadillos vegetarianos.<br>
		<strong>Ambiente:</strong> Decorado con máscaras de sátiros, figuras mitológicas y murales de faunos. Ambiente alternativo y bohemio.<br>
		<strong>Música:</strong> Jazz, blues y folk, a volumen medio-bajo.<br>
		<strong>Clientela habitual:</strong> Artistas, estudiantes de filosofía y bohemios.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los viernes hay micrófono abierto (música, poesía).<br>
		✔️ Las paredes están llenas de cuadros de artistas locales que se venden.<br>
		✔️ Se admiten mascotas.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 843,
        yPx: 698,
        nombre: `Cafetería «La Vidriera»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Uinneag Gloine»<br><strong>Pronunciación:</strong> /an UN-yak GLOI-ne/<br><strong>En inglés:</strong> The Stained Glass Window Café<br><br>
		«La Vidriera» es una cafetería-pastelería luminosa y elegante, situada en una calle ancha y relativamente soleada. Ocupa la planta baja de un edificio de piedra negra del siglo XVIII, reformado con un estilo que combina lo rústico y lo acogedor. Su característica principal son las vidrieras de colores (imitando las de una iglesia) que decoran sus ventanales y el interior, proyectando luces de colores en el suelo durante las horas de sol. Es un local muy popular entre los turistas (por su estética fotogénica), las parejas, la gente mayor del barrio y los amantes del chocolate caliente. La especialidad son el café, el chocolate caliente espeso (famoso en toda la ciudad) y los pasteles caseros: tarta de queso, brownies, carrot cake, pastas de té. También tienen una pequeña terraza interior acristalada, un invernadero con plantas colgantes. Los domingos ofrecen pastas de té gratuitas con el café. El ambiente es tranquilo, cálido y luminoso (a pesar de estar en el Barrio Gótico), con música clásica o piano a volumen bajo. Es un remanso de paz para los amantes del chocolate y la repostería.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Pastelería<br>
		<strong>Horario:</strong> 09:00 - 20:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café, chocolate caliente espeso y pasteles caseros (brownies, tartas de queso, pastas de té).<br>
		<strong>Ambiente:</strong> Decorado con vidrieras de colores que imitan las de una iglesia, proyectando luces de colores en el suelo. Ambiente cálido y acogedor.<br>
		<strong>Música:</strong> Música clásica o piano, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Turistas, parejas y gente mayor.<br><br>
		<strong>Notas:</strong><br>
		✔️ El chocolate caliente es famoso en toda la ciudad.<br>
		✔️ Cuentan con una pequeña terraza interior acristalada.<br>
		✔️ Los domingos ofrecen pastas de té gratuitas con el café.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },

	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD
	
	{
        xPx: 733,
        yPx: 626,
        nombre: `Centro de Salud «La Abadía»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte «na Manachainn»<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te na MA-na-jin</em>/<br><strong>En inglés:</strong> Abbey Health Centre
		<br><br>
		El Centro de Salud «La Abadía» es el principal centro médico del Barrio Gótico y también atiende a una parte del Puerto Bajo, concretamente la zona más cercana al límite sur del distrito. Situado en una calle ancha y relativamente tranquila, ocupa el edificio de una antigua abadía del siglo XVI (de ahí su nombre), que fue rehabilitada y ampliada en 2002 para adaptarla a la atención primaria. Es un centro de tamaño grande, con capacidad para atender a una población de más de 25.000 personas (residentes del Barrio Gótico, más los que acuden del norte del Puerto Bajo). Es conocido por su arquitectura singular: la fachada original de piedra negra con arcos de medio punto se conserva, mientras que la parte trasera es una ampliación moderna de cristal y acero. Tiene consultas de medicina general, pediatría, ginecología, enfermería, un servicio de urgencias básico, radiología, un pequeño laboratorio y una unidad de salud mental. Es un centro bien equipado pero desbordado, especialmente por los pacientes del Puerto Bajo, que acuden aquí porque el centro de salud de su distrito está saturado. El personal es variopinto: desde médicos veteranos quemados hasta residentes jóvenes con vocación. El ambiente es el de un ambulatorio público con historia y carácter, donde se mezclan la piedra medieval con los carteles de «No fumar». Es famoso por su sala de espera abovedada (antiguo refectorio de la abadía) y por las leyendas de monjes fantasmas que algunos pacientes aseguran haber visto.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },

	// ==================== COLEGIOS
	
	{
        xPx: 972,
        yPx: 604,
        nombre: `Colegio «Ángel de la Guarda»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Aingeil Fhreiceadain»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl an AN-gyel RRE-ke-tan</em>/<br><strong>En inglés:</strong> Guardian Angel Primary School
		<br><br>
		El Colegio «Ángel de la Guarda» es el único centro de educación primaria del Barrio Gótico y uno de los más antiguos de Dunbhròn. Situado en una calle empedrada y relativamente ancha del noreste del distrito, acoge a unos 300 alumnos de 4 a 11 años. Su área de captación abarca todo el Barrio Gótico, así como una pequeña parte del Puerto Bajo (la zona más cercana al sur) y algunos niños del Casco Antiguo cuyos padres prefieren un ambiente más «tradicional». Es un centro público y laico, aunque con una dirección conservadora, que ha sabido mantener su prestigio a pesar de la compleja mezcla social de su alumnado: desde hijos de familias de toda la vida del Barrio Gótico (cada vez menos) hasta niños del Puerto Bajo (con problemas económicos y familiares), pasando por algunos inmigrantes (polacos, lituanos, rumanos y africanos) y algún que otro hijo de profesionales liberales del Casco Antiguo. Esta diversidad genera tensiones frecuentes: acoso escolar, peleas, insultos homófobos y racistas, y casos de violencia doméstica que los profesores detectan en los alumnos. El colegio es conocido por su estricta disciplina (el director cree en la letra con sangre entra), pero también por tener a algunos profesores muy vocacionales que intentan compensar las carencias del entorno. La STCA tiene agentes encubiertos en el centro (un conserje y un profesor de apoyo) para vigilar posibles casos de alumnos con habilidades sobrenaturales o familias vinculadas al mundo oculto del Barrio Gótico.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },

	// ==================== COMISARÍA

	// ==================== DISCOTECA
	
	{
        xPx: 877,
        yPx: 690,
        nombre: `Discoteca «Nexo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Club-oidhche «Ceangal»<br><strong>Pronunciación:</strong> /KYAN-gal/<br><strong>En inglés:</strong> The Nexus Club
		<br><br>
		«Nexo» es la discoteca más emblemática del Barrio Gótico y uno de los epicentros de la vida nocturna más oscura y clandestina de Dunbhròn. Situada en una calle ancha y mal iluminada, ocupa la planta baja y el sótano de un antiguo almacén de piedra negra del siglo XVIII, rehabilitado en 1995 y reformado en 2015. Es un local grande, laberíntico y deliberadamente oscuro, con una decoración que roza lo siniestro y lo opresivo: paredes de piedra negra húmeda, vigas de hierro oxidado, arañas de cristal rotas (decorativas), y una iluminación casi nula (solo focos rojos y ultravioletas). La música es electrónica industrial, darkwave, EBM y metal gótico a volumen atronador. Es frecuentada por góticos, metaleros y humanos atraídos por lo oculto que buscan un ambiente donde las normas sociales se difuminan. El local tiene dos pistas (una principal en la planta baja y una secundaria en el sótano), tres bares y una zona VIP. Es conocido por sus desapariciones ocasionales (turistas que entran y no vuelven a salir).
		<br><br>
		<strong>Servicios:</strong> Música alta, baile, copas.<br><strong>Ambiente:</strong> Normalmente conflictivo.<br><strong>Horario:</strong> Noche - Madrugada.<br><strong>Clientela:</strong> Jóvenes, algunos adultos.
		<br><br>
		<strong>Tipo:</strong> Discoteca de ambiente oscuro / Club clandestino<br>
		<strong>Horario:</strong> 22:00 - 06:00 (viernes y sábados; horario irregular entre semana)<br>
		<strong>Precio:</strong> 💰💰 (moderado; entrada 10 libras después de las 23:00, pero solo para quienes «encajan en el ambiente»)<br>
		<strong>Rapidez:</strong> ⚡⚡ (normal; las barras no suelen colapsar, pero el servicio puede ser lento por la poca visibilidad)<br>
		<strong>¿Tiene mesas?:</strong> Sí (zona VIP con mesas de mármol negro y sofás de cuero)<br>
		<strong>Especialidad:</strong> Absenta, licores negros y cerveza negra (solo en botella).<br>
		<strong>Juegos:</strong> Ninguno (el baile y los rituales clandestinos son el principal atractivo).<br>
		<strong>Ambiente:</strong> Laberíntico, oscuro y opresivo. Paredes de piedra negra húmeda, vigas de hierro oxidado, tuberías que gotean y niebla artificial. La iluminación es casi nula (solo focos rojos y ultravioletas). Es el lugar donde lo humano y lo sobrenatural se conectan, con una frecuente presencia de la STCA.<br>
		<strong>Música:</strong> Electrónica industrial, darkwave, EBM y metal gótico, a volumen atronador.<br>
		<strong>Clientela habitual:</strong> Góticos, metaleros y humanos atraídos por lo oculto que buscan un ambiente donde las normas sociales se difuminan.<br><br>
		<strong>Notas:</strong><br>
		✔️ La fachada es ancha (unos ocho metros), sin cartel luminoso; solo una pequeña placa de metal con el nombre sobre la puerta.<br>
		✔️ Un portero controla el acceso y solo permite la entrada a quienes «encajan en el ambiente» (los turistas normales son rechazados).<br>
		✔️ Es conocido por sus desapariciones ocasionales (turistas que entran y no vuelven a salir).<br>
		✔️ Capacidad aproximada: entre trescientas y cuatrocientas personas.<br>
		✔️ Personal fijo: veinte empleados (gerente, DJs, porteros, camareros, personal de limpieza...).`,
        pdfUrl: `#`,
        iconoTipo: `discoteca`
    },

	// ==================== HELADERÍAS

	// ==================== HOSPITALES
	
	{
        xPx: 862,
        yPx: 651,
        nombre: `Hospital Psiquiátrico «San Mungo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ospadal Inntinn «Naoimh Mhungo»<br><strong>Pronunciación:</strong> /<em>OS-pa-tal IN-tin NEV VUN-go</em>/<br><strong>En inglés:</strong> St. Mungo's Psychiatric Hospital
		<br><br>
		El Hospital Psiquiátrico «San Mungo» es el edificio abandonado más emblemático y siniestro del Barrio Gótico. Se encuentra cubierto de maleza. Cerró sus puertas en 1974 (hace 51 años) tras un escándalo por malos tratos, experimentos médicos ilegales y muertes sospechosas. Desde entonces, ha sido víctima del vandalismo, la intemperie y la ocupación ilegal. Es un enorme caserón de piedra negra de cuatro plantas (más sótano), con alas laterales, torreones y una verja de hierro oxidado que lo rodea. Hoy es un lugar tétrico, ruinoso y peligroso, frecuentado por yunkies, sintecho, prostitutas, vándalos, grafiteros y camellos que se esconden de la policía. También es un punto de encuentro para los amantes de lo oculto, que creen que el dolor acumulado ha abierto un portal hacia otra dimensión. Los vecinos del Barrio Gótico evitan incluso mirarlo. Es el corazón oscuro del distrito.<br>
		Sobre la puerta principal del hospital aún cuelgan los restos de dos carteles de metal: el superior en inglés y el inferior en gaélico. El vandalismo, la humedad y el paso de los años han hecho que la mayoría de las letras se hayan caído. Sin embargo, las pocas que aún se sujetan al muro, leídas en orden (primero el cartel gaélico, luego el inglés, o en la disposición visual que se muestra), deletrean una inquietante frase:<br>
		<br>
		St. Mungo's Psychiatric Hospital<br>
		Ospadal Inntinn «Naoimh Mhungo»<br>
		S__ _o_s ___________ ________<br>
		_______ _______ _______ Mhun<br>
		<br>
		Los ocultistas y grafiteros del Barrio Gótico han interpretado este mensaje como una advertencia y una petición de auxilio simultáneamente:<br>
		«SOS» es la señal internacional de socorro. El hospital pide ayuda. 		«MHUN» es una forma abreviada de la palabra gaélica «mhùn» (muerte), o una parte de «MHUNGO» (el nombre del santo). La interpretación más extendida es «Muerte».<br>
		Por tanto, el mensaje completo que cuelga sobre la puerta es: «Socorro – Muerte».<br>
		Debajo, alguien (nadie sabe quién) ha pintado con spray negro la traducción: «SOS – DEATH». Y, en letras más pequeñas, una advertencia: «Quien entre aquí, que abandone la esperanza de salir con la mente intacta».<br>
		En cualquier caso, el cartel es un icono del terror local y los grafiteros respetan las letras supervivientes (nadie las arranca del todo). Los turistas más temerarios que se atreven a inmortalizar el momento aseguran que luego tienen pesadillas.`,
        pdfUrl: `#`,
        iconoTipo: `psiquiatrico`
    },

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS
	
	{
        xPx: 845,
        yPx: 594,
        nombre: `Instituto «La Cumbre Brumosa»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd-sgoil «a' Mhullaich Cheòthach»<br><strong>Pronunciación:</strong> /<em>Ard-sgoyl *a* Vú-laj Jó-aj</em>/<br><strong>En inglés:</strong> Misty Peak Academy
		<br><br>
		El Instituto «La Cumbre Brumosa» es el único centro de educación secundaria del Barrio Gótico. Situado en una calle ancha y mal iluminada, acoge a unos 800 alumnos de 12 a 18 años (GCSE y GCE). Su área de captación abarca todo el Barrio Gótico, la mitad sur del Corazón Roto (la más cercana), el norte del Puerto Bajo y una pequeña parte de Los Prados. Es un centro público, con una mezcla social muy diversa y conflictiva: desde hijos de familias tradicionales del Barrio Gótico (cada vez menos) hasta adolescentes del Puerto Bajo (con problemas económicos, violencia doméstica, absentismo escolar), pasando por inmigrantes (polacos, rumanos, africanos) y algún que otro hijo de profesionales liberales. La diversidad genera tensiones constantes: peleas entre bandas, acoso escolar (homófobo, racista, por apariencia), pequeños trapicheos, y una creciente influencia de actividades ocultas (algunos alumnos están vinculados a familias de brujos, cambiaformas o vampiros). El edificio es una mezcla de estilos: el ala original (1930) de piedra negra, ampliaciones de ladrillo de los años 60, y un pabellón moderno de cristal y acero de 2005. Es conocido por su claustro de profesores quemado (alta rotación), su equipo de rugby (el más violento de la ciudad) y sus casos de desapariciones esporádicas de alumnos que nunca se resuelven (la STCA los investiga en secreto). La dirección es conservadora y autoritaria, pero desbordada. El instituto es un hervidero de lo oculto bajo la superficie.`,
        pdfUrl: `#`,
        iconoTipo: `instituto`
    },

	// ==================== LIBRERÍAS
	
	{
        xPx: 879,
        yPx: 580,
        nombre: `Librería «El Pregón del Cuervo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Gairm an Fhithich»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan GAR-im an EE-yaj</em>/<br><strong>En inglés:</strong> The Raven's Call Bookshop
		<br><br>
		«El Pregón del Cuervo» es una librería de viejo especializada en ocultismo, folclore escocés y literatura gótica, situada en una calle estrecha y oscura. Es uno de los establecimientos más antiguos del distrito (abrió en 1965) y un punto de referencia para los amantes de lo oculto, los investigadores de lo sobrenatural y los curiosos que buscan libros malditos, grimorios (auténticos o supuestamente auténticos) y manuscritos imposibles de encontrar en otros lugares. El local es sombrío, polvoriento y laberíntico, con estanterías de madera negra que llegan hasta el techo, olor a papel podrido y a cera de vela, y una tenue iluminación de candiles eléctricos. Los dueños, una pareja de hermanos, son conocidos por su reticencia a vender ciertos libros y por su sabiduría en asuntos oscuros. Es un lugar donde los clientes susurran, donde los cuervos anidan en el tejado (de ahí el nombre), y donde las leyendas dicen que los libros cambian de estantería solos por la noche.`,
        pdfUrl: `#`,
        iconoTipo: `libreria`
    },    
    {
        xPx: 813,
        yPx: 651,
        nombre: `Librería «El Candil de los Sabios»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Coinneal nan Saoidh»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan KON-yal nan SOO-ee</em>/<br><strong>En inglés:</strong> The Sages' Lantern
		<br><br>
		«El Candil de los Sabios» es una librería especializada en filosofía esotérica, alquimia, astrología y manuscritos antiguos, situada en una calle empedrada y angosta. Es uno de los establecimientos más respetados (y temidos) del distrito por los académicos, ocultistas serios, alquimistas aficionados y coleccionistas de manuscritos que buscan libros difíciles de encontrar y tratados en lenguas muertas. A diferencia de su vecina «El Pregón del Cuervo», esta librería tiene un aire más académico y severo, con una atmósfera de antigua biblioteca de monasterio. Las estanterías de roble oscuro, los facsímiles de pergaminos, los bustos de filósofos antiguos (Aristóteles, Platón, Séneca) y la chimenea de piedra (siempre encendida en invierno) crean un ambiente de estudio y recogimiento. El dueño, un hombre erudito y huraño, se presenta a sí mismo como un «buscador de la verdad» y no tolera a los curiosos frívolos. Se dice que en el sótano guarda su colección privada de manuscritos alquímicos, algunos de dudosa autenticidad, otros terriblemente reales.`,
        pdfUrl: `#`,
        iconoTipo: `libreria`
    },
    {
        xPx: 768,
        yPx: 656,
        nombre: `Librería «El Rincón del Mago»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Oisean a' Bhreugadair»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan OSH-an a VRE-ga-tar</em>/<br><strong>En inglés:</strong> The Wizard's Corner
		<br><br>
		«El Rincón del Mago» es la librería más comercial y accesible del Barrio Gótico, situada en una calle ancha y relativamente concurrida. A diferencia de sus vecinas «El Pregón del Cuervo» (más ocultista) y «El Candil de los Sabios» (más académica), esta librería está orientada al público general: turistas y aficionados a la fantasía y el esoterismo ligero. Venden libros de magia (reproducciones), tarots, runas, cristales, inciensos, velas de colores, amuletos de recuerdo, postales, y una amplia sección de literatura fantástica (Tolkien, Rowling, Martin, etc.). El local es más luminoso y ordenado que las otras, aunque no pierde el encanto tétrico propio del barrio: las paredes de piedra negra están pintadas de morado oscuro, y hay una estatua de un mago (con gorro de estrellas) a la entrada. Es un lugar de paso para los curiosos, pero también un punto de encuentro para los iniciados que saben pedir «bajo el mostrador» (donde se venden auténticos grimorios y objetos encantados).`,
        pdfUrl: `#`,
        iconoTipo: `libreria`
    },

	// ==================== PARQUE DE BOMBEROS
	
	{
        xPx: 915,
        yPx: 666,
        nombre: `Parque de Bomberos del Barrio Gótico`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh a' Cheathrámh Gòtaich<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay a JYAH-rav GO-taj</em>/<br><strong>En inglés:</strong> Gothic Quarter Fire Station
		<br><br>
		Situado en una calle ancha y funcional, es un edificio moderno (construido en 2008), que contrasta fuertemente con la arquitectura de piedra negra del distrito: es de hormigón visto, acero y grandes paneles de cristal, con una fachada de color gris claro que apenas se ensucia (a pesar del hollín del barrio). Da servicio a todo el Barrio Gótico, el norte del Puerto Bajo y la parte sur del Casco Antiguo, cubriendo una población de más de 40.000 habitantes (más los turistas y la población flotante). Tiene una plantilla de 45 bomberos profesionales (más personal administrativo y de mantenimiento) que trabajan en turnos rotativos de 24 horas. Dispone de cinco vehículos principales (dos camiones de bomberos urbanos, una autoescala, una unidad de rescate y una bomba forestal), así como una embarcación de rescate guardada en el puerto, a 2 km. Es un servicio eficiente pero desbordado, especialmente por los incendios en edificios abandonados (el hospital, almacenes) y las peleas con fuego en el Puerto Bajo. El ambiente es el de un cuartel moderno: compañerismo, tensión en las emergencias y una estrecha relación con la policía y los servicios de emergencias. La estación es conocida por su alta tasa de bajas psicológicas (los bomberos han visto cosas que no pueden explicar) y por su mascota no oficial: un gato negro que vive en el garaje.`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },

	// ==================== PUBS

	{
        xPx: 819,
        yPx: 680,
        nombre: `Pub «Los Dos Cuervos»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Dà Fhitheach»<br><strong>Pronunciación:</strong> /an DAA I-jej/<br><strong>En inglés:</strong> The Two Ravens Pub<br><br>
		«Los Dos Cuervos» es un pub temático nórdico de ambiente oscuro y envolvente, situado en una calle empedrada y estrecha. Es un local de culto para los amantes de la cultura vikinga, rockeros, metaleros, alternativos y noctámbulos del Barrio Gótico que buscan un ambiente rudo pero acogedor, con una estética que evoca una taberna de la era vikinga: paredes de piedra negra con runas grabadas, escudos y espadas colgados, un cuerno de hidromiel gigante como decoración, y estatuas de cuervos (Huginn y Muninn, los cuervos de Odín) flanqueando la barra. La especialidad es el hidromiel (la bebida de la casa, elaborada artesanalmente por el dueño), la cerveza negra y los licores de hierbas. Tienen dardos y billar, y los fines de semana hay música en vivo con grupos de folk metal, viking metal o rock celta. El ambiente es cálido, oscuro y ligeramente peligroso (no es raro que se produzcan altercados entre borrachos), pero la clientela habitual se conoce y se respeta. Las camareras visten como valkirias: con cascos con cuernos y vestidos de cuero, lo que añade un toque teatral.
		<br><br>
		<strong>Tipo:</strong> Pub temático (nórdico / cuervos)<br>
		<strong>Horario:</strong> 18:00 - 04:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Hidromiel (la especialidad de la casa).<br>
		<strong>Juegos:</strong> Dardos y billar.<br>
		<strong>Ambiente:</strong> Decorado con estatuas de cuervos, runas vikingas, escudos y espadas colgando. Ambiente de taberna nórdica. El aroma a madera e hidromiel lo impregna todo.<br>
		<strong>Música:</strong> Rock y metal vikingo, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Aficionados a la cultura nórdica, rockeros y alternativos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay música en vivo (grupos de folk metal).<br>
		✔️ Las camareras visten como Valkirias.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 912,
        yPx: 604,
        nombre: `Pub «El Percherón Pelirrojo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Each Dearg Mòr»<br><strong>Pronunciación:</strong> /an EJ JERAK MOR/<br><strong>En inglés:</strong> The Red Draft Horse Pub<br><br>
		«El Percherón Pelirrojo» es un pub irlandés-rockero de ambiente duro, situado en una calle ancha y mal iluminada. Es un local de culto para los rockeros, moteros, aficionados a la cerveza negra (Guinness) y noctámbulos del Barrio Gótico que buscan un ambiente auténtico, sin concesiones a la estética gótica de otros bares del distrito. La decoración es la de un pub irlandés tradicional de los años 70, pero con un marcado toque rockero: barra de madera tallada, espejos de Guinness, toneles de cerveza, y por las paredes, guitarras eléctricas colgadas, carteles de grupos de rock (Thin Lizzy, U2, Rory Gallagher) y fotografías de músicos irlandeses. El local es grande, con dos plantas, y está siempre lleno los fines de semana. La especialidad es la Guinness importada directamente de Dublín, la cerveza negra local y los whiskies irlandeses. Tienen billar, dardos y música en vivo los jueves con grupos de rock y folk irlandés. La clientela es mayoritariamente rockera y alternativa, con un ambiente ruidoso pero ordenado (no suele haber peleas, pero sí discusiones acaloradas). Es un lugar de encuentro para los irlandeses expatriados de Dunbhròn y para los amantes de la buena cerveza negra.
		<br><br>
		<strong>Tipo:</strong> Pub irlandés / Rock<br>
		<strong>Horario:</strong> 16:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza negra (Guinness importada).<br>
		<strong>Juegos:</strong> Dardos y billar.<br>
		<strong>Ambiente:</strong> Pub irlandés de toda la vida, con barra de madera tallada, espejos Guinness y toneles, pero con un toque rockero: guitarras colgadas y carteles de grupos.<br>
		<strong>Música:</strong> Rock, folk irlandés y punk, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Rockeros, amantes de la cerveza negra e irlandeses.<br><br>
		<strong>Notas:</strong><br>
		✔️ La Guinness es importada.<br>
		✔️ Los jueves hay música en vivo (grupos de rock y folk).<br>
		✔️ El local es grande y tiene dos plantas.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },

	// ==================== RESTAURANTES

	{
        xPx: 761,
        yPx: 624,
        nombre: `Restaurante «El Archipiélago Invernal»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Na h-Eileanan Geamhraidh»<br><strong>Pronunciación:</strong> /na HEL-an-an GEM-rai/<br><strong>En inglés:</strong> The Winter Archipelago Restaurant<br><br>
		«El Archipiélago Invernal» es el restaurante más exclusivo y caro del Barrio Gótico. Un templo de la alta cocina de fusión nórdico-escocesa, situado en una calle empedrada y oscura. Ocupa la planta baja y el sótano de un edificio de piedra negra del siglo XVIII, rehabilitado con un estilo minimalista y evocador que recuerda a un refugio en las islas Lofoten: paredes blancas (contrastando con la piedra negra exterior), suelos de madera clara de abedul, grandes ventanales (con vistas a un pequeño patio interior nevado, en invierno con nieve artificial), y una iluminación tenue que simula el sol de medianoche (focos LED con tonos azulados y dorados). Es un restaurante de autor, con un menú degustación de doce platos (cambiante cada temporada), inspirado en las islas del norte de Escocia (Orcadas, Shetland, Hébridas) y en la cocina nórdica (ahumados, fermentados, salazones, mariscos y carnes de caza). La reserva es obligatoria (con semanas de antelación) y el precio es prohibitivo. El local es muy pequeño (solo seis mesas), con un servicio impecable y anónimo. Es frecuentado por gourmets, críticos gastronómicos, celebridades que visitan el Barrio Gótico de incógnito y amantes de la cocina nórdica. No se admiten niños. El dueño y chef es un hombre enigmático de origen noruego que apenas sale de la cocina.
		<br><br>
		<strong>Tipo:</strong> Restaurante de autor / Fusión nórdica<br>
		<strong>Horario:</strong> 20:00 - 23:00 (solo cenas)<br>
		<strong>Tipo de cocina:</strong> Fusión nórdica / Escocesa<br>
		<strong>Precio:</strong> 💰💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Menú degustación de doce platos, inspirado en las islas del norte: ahumados, fermentados, marisco y carnes de caza.<br>
		<strong>Ambiente:</strong> Minimalista, con paredes blancas, mesas de madera clara y luces tenues. Suenan efectos de viento y mar de fondo.<br>
		<strong>Clientela habitual:</strong> Gourmets, críticos y amantes de la cocina nórdica.<br><br>
		<strong>Notas:</strong><br>
		✔️ La reserva es obligatoria y requiere semanas de antelación.<br>
		✔️ El local tiene solo seis mesas.<br>
		✔️ El menú cambia cada temporada.<br>
		✔️ No se admiten niños.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 962,
        yPx: 555,
        nombre: `Restaurante «El Barco Pirata»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Long Spùinneadair»<br><strong>Pronunciación:</strong> /an LON SPUIN-ya-dir/<br><strong>En inglés:</strong> The Pirate Ship Restaurant<br><br>
		«El Barco Pirata» es un restaurante temático familiar de ambiente oscuro y teatral, situado en una calle ancha y relativamente concurrida. Es el único restaurante del distrito orientado expresamente a familias con niños, turistas y grupos, en un barrio donde priman los locales para adultos. La decoración es una exageración pirata: el interior simula la cubierta y la bodega de un galeón del siglo XVIII, con mástiles, velas (decorativas), cofres del tesoro (con monedas de chocolate), mapas antiguos en las paredes y un loro disecado (llamado «Capitán») que vigila la sala principal. Los camareros visten de pirata (camisas blancas desgastadas, chalecos de cuero, parches en el ojo, pañuelos en la cabeza). La especialidad son las costillas BBQ, las hamburguesas piratas (con un huevo frito y aros de cebolla), el pescado a la plancha y las patatas bravas. La carta está escrita en «lenguaje pirata» (con términos como «botín», «tesoro», «grog»). Los niños disponen de un menú especial con juguete (una espada de plástico o un parche). Los fines de semana hay espectáculos de piratas (espadas, bailes, cuentacuentos). El ambiente es ruidoso, caótico y festivo, pero con un toque tétrico (las velas eléctricas parpadean y hay calaveras de plástico por todas partes). Es el lugar favorito de los niños del Barrio Gótico, y también de aquellos adultos que añoran la aventura.
		<br><br>
		<strong>Tipo:</strong> Restaurante temático / Familiar<br>
		<strong>Horario:</strong> 13:00 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Internacional / Parrilla<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Costillas BBQ, hamburguesas piratas, pescado a la plancha y patatas bravas.<br>
		<strong>Ambiente:</strong> Decorado como un barco pirata: mástiles, velas, cofres del tesoro y un loro disecado. Los camareros visten de pirata. Ambiente familiar y animado.<br>
		<strong>Clientela habitual:</strong> Familias con niños, turistas y grupos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los niños disponen de un menú especial con juguete.<br>
		✔️ Los fines de semana hay espectáculos de piratas (espadas, bailes).<br>
		✔️ La carta está escrita en "lenguaje pirata".`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 942,
        yPx: 683,
        nombre: `Restaurante «El Caldero de Bronce»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Coire Umha»<br><strong>Pronunciación:</strong> /an KO-re U-va/<br><strong>En inglés:</strong> The Bronze Cauldron Restaurant<br><br>
		«El Caldero de Bronce» es un restaurante de cocina tradicional escocesa especializado en guisos de carne, haggis casero y platos de cuchara, situado en una calle empedrada y relativamente ancha. Es uno de los pocos locales del distrito que ha logrado mantener su esencia rústica y familiar a pesar de la gentrificación oscura del barrio. Ocupa la planta baja de un edificio de piedra negra del siglo XVII, que fue originalmente la casa de un calderero, de ahí el nombre. El local es acogedor y cálido (en contraste con la frialdad exterior), con paredes de piedra vista, una gran chimenea de piedra (siempre encendida en invierno), y un caldero de bronce antiguo de más de un metro de diámetro que preside la sala principal (hoy decorativo, pero en el pasado se usaba para cocinar). La especialidad son los guisos de carne (stew de cordero o ternera, cocidos a fuego lento durante horas), el haggis casero (receta familiar, servido con «neeps & tatties» —nabos y patatas—), y el Cullen skink (sopa de haddock ahumado, patatas y cebolla). No admiten reservas (se come por orden de llegada) y los domingos ofrecen Sunday Roast. El ambiente es tranquilo y familiar, frecuentado por vecinos del Barrio Gótico (los pocos que quedan), trabajadores del Puerto Bajo, y algún turista despistado que busca comida auténtica lejos de los circuitos turísticos. El olor a guiso y a chimenea impregna el local, creando una atmósfera de hogar en medio de la oscuridad.
		<br><br>
		<strong>Tipo:</strong> Restaurante de cocina tradicional<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 22:30<br>
		<strong>Tipo de cocina:</strong> Escocesa tradicional / Guisos<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Guisos de carne (stew), haggis, neeps & tatties y Cullen skink.<br>
		<strong>Ambiente:</strong> Rústico, con un gran caldero de bronce en la entrada. Paredes de piedra y chimenea encendida en invierno. El aroma a guiso lo impregna todo.<br>
		<strong>Clientela habitual:</strong> Vecinos y turistas que buscan comida tradicional escocesa.<br><br>
		<strong>Notas:</strong><br>
		✔️ El haggis es casero (receta familiar).<br>
		✔️ Los domingos ofrecen Sunday Roast.<br>
		✔️ No se admiten reservas: se come por orden de llegada.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 810,
        yPx: 711,
        nombre: `Restaurante «El Espejo Resquebrajado»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Sgàthan Sgàinte»<br><strong>Pronunciación:</strong> /an SKAA-han SKAAN-te/<br><strong>En inglés:</strong> The Cracked Mirror Restaurant<br><br>
		«El Espejo Resquebrajado» es un restaurante de autor de cocina molecular y fusión, situado en una calle estrecha y oscura. Es uno de los locales más enigmáticos y exclusivos del distrito, frecuentado por gourmets, amantes de la cocina experimental y gente que busca experiencias únicas (y está dispuesta a pagar por ellas). El local es pequeño y teatral, con una estética oscura y onírica: paredes de piedra negra cubiertas de terciopelo granate, un gran espejo resquebrajado (de más de 2 metros de alto) que preside la sala principal, y una iluminación de neón violeta que crea una atmósfera irreal. El menú degustación (de diez platos) cambia cada temporada y juega con las texturas, los ahumados, las espumas y las sorpresas visuales (platos que parecen lo que no son). Cada plato viene acompañado de una historia escrita en un papel: relatos cortos de terror o fantasía escritos por un autor local. El local tiene ocho mesas y la reserva es obligatoria. No se admiten niños. El chef, un joven prodigio de la cocina molecular, es conocido por su obsesión por los espejos, pues cree que reflejan realidades alternativas. La clientela es de alto poder adquisitivo y busca algo más que una simple cena: una experiencia sensorial y narrativa.
		<br><br>
		<strong>Tipo:</strong> Restaurante de autor / Experimental<br>
		<strong>Horario:</strong> 20:30 - 23:30 (solo cenas)<br>
		<strong>Tipo de cocina:</strong> Cocina molecular / Fusión<br>
		<strong>Precio:</strong> 💰💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Menú degustación de diez platos, con texturas, espumas, ahumados y sorpresas visuales.<br>
		<strong>Ambiente:</strong> Oscuro, con un gran espejo resquebrajado en la pared principal y luces de neón violetas. Ambiente teatral y misterioso.<br>
		<strong>Clientela habitual:</strong> Gourmets, amantes de la cocina experimental y gente que busca experiencias únicas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cada plato viene acompañado de una historia escrita en un papel.<br>
		✔️ El local tiene ocho mesas.<br>
		✔️ La reserva es obligatoria.<br>
		✔️ No se admiten niños.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 997,
        yPx: 613,
        nombre: `Restaurante «El Reflejo Virtuoso»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Meòrachadh Bòidheach»<br><strong>Pronunciación:</strong> /MYO-rah-joñ BOI-yeh/<br><strong>En inglés:</strong> The Virtuous Reflection Restaurant<br><br>
		«El Reflejo Virtuoso» es un restaurante vegetariano y vegano de alta cocina, situado en una calle empedrada y relativamente ancha. Es un oasis de luz y elegancia en medio de la oscuridad del barrio, frecuentado por veganos, vegetarianos, amantes de la cocina saludable y gente concienciada con la alimentación (así como por turistas que buscan opciones sin carne). El local es íntimo y luminoso (contrasta con la estética tétrica del distrito), con paredes de espejos que reflejan la luz de las velas, manteles blancos, cubertería de diseño y una pequeña terraza interior acristalada. La especialidad son los platos coloridos y elaborados (remolacha asada con queso vegano, berenjenas con granada y crema de calabaza con jengibre), todos de temporada y con ingredientes de proximidad. Ofrecen opciones sin gluten y aceptan reservas. El chef es una mujer joven y creativa, muy conocida en el circuito vegano de Escocia. El ambiente es tranquilo, sofisticado y ligeramente espiritual (hay una pequeña fuente en el centro con agua y piedras). Es el lugar preferido por la clientela alternativa del Barrio Gótico que busca una cena elegante sin renunciar a sus principios.
		<br><br>
		<strong>Tipo:</strong> Restaurante vegetariano / Vegano<br>
		<strong>Horario:</strong> 13:00 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Mediterránea / Vegana creativa<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Platos coloridos y elaborados: remolacha asada con queso vegano, berenjenas con granada y crema de calabaza con jengibre.<br>
		<strong>Ambiente:</strong> Elegante, con espejos en las paredes que reflejan la luz de las velas. Manteles blancos y cubertería de diseño.<br>
		<strong>Clientela habitual:</strong> Veganos, vegetarianos y gente concienciada con la alimentación saludable.<br><br>
		<strong>Notas:</strong><br>
		✔️ Todo es casero y de temporada.<br>
		✔️ La presentación de los platos es muy cuidada.<br>
		✔️ Ofrecen opciones sin gluten.<br>
		✔️ Se aceptan reservas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA
	
	{
        xPx: 786,
        yPx: 618,
        nombre: `Tienda esotérica «La Esencia de la Luna»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth esoteric «Brìgh na Gealaich»<br><strong>Pronunciación:</strong> /<em>BOO-h es-o-te-rik BREE na YAL-aj</em>/<br><strong>En inglés:</strong> The Essence of the Moon<br><br>
		«La Esencia de la Luna» es una tienda esotérica de ambiente cálido y místico, situada en una calle empedrada y relativamente tranquila. Es uno de los comercios más queridos del distrito, frecuentado por aficionados al esoterismo, buscadores de bienestar, mujeres jóvenes y curiosos que buscan velas, inciensos, aceites esenciales, sales de baño y cristales (cuarzo, amatista, turmalina, citrino, etc.). El local es pequeño y acogedor, con un aroma a incienso de sándalo que lo impregna todo, estanterías de madera oscura llenas de frascos y piedras, y una iluminación cálida y tenue (lámparas de sal del Himalaya, velas eléctricas). La dueña, una mujer de mediana edad (Morven, pero no confundir con otras Morven), es una experta en cristales y aceites esenciales y ofrece lecturas de tarot los jueves por la tarde con cita previa, muy demandadas. También venden saquitos de hierbas para rituales (amor, protección, dinero). Es un lugar de paz y serenidad en medio de la oscuridad del Barrio Gótico.
		<br><br>
		<strong>Tipo:</strong> Tienda esotérica<br>
		<strong>Horario:</strong> 10:00 - 20:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Especialidad:</strong> Velas, inciensos, aceites esenciales, sales de baño y cristales (cuarzo, amatista, turmalina).<br>
		<strong>Ambiente:</strong> El aroma a incienso de sándalo lo impregna todo. Suena música ambiental de cuencos tibetanos. Estanterías de madera oscura llenas de frascos y piedras.<br>
		<strong>Clientela habitual:</strong> Aficionados al esoterismo, buscadores de bienestar y mujeres jóvenes.<br><br>
		<strong>Notas:</strong><br>
		✔️ La dueña lee el tarot los jueves por la tarde (con cita previa).<br>
		✔️ También venden saquitos de hierbas para rituales.`,
        pdfUrl: `#`,
        iconoTipo: `esoterico`
    },
    {
        xPx: 947,
        yPx: 580,
        nombre: `Tienda esotérica «El Caldero de las Brujas»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth esoteric «Coire nam Bana-bhuidseach»<br><strong>Pronunciación:</strong> /<em>BOO-h es-o-te-rik KO-re nam BA-na-VOO-chaj</em>/<br><strong>En inglés:</strong> The Witches' Cauldron<br><br>
		«El Caldero de las Brujas» es una tienda esotérica de marcado carácter wicca y brujería tradicional, situada en una calle estrecha y oscura. Es uno de los locales más teatrales y sobrecogedores del distrito, frecuentado por brujas modernas (wiccanas), ocultistas serios, curiosos y turistas que buscan autenticidad (y algo de miedo). El local es oscuro y recargado, con paredes pintadas de negro y púrpura, telarañas falsas (de plástico, pero muy realistas), calderos humeantes (con incienso), velas negras y un altar dedicado a la Diosa y al Dios. La dueña, una mujer de mediana edad que se presenta como «bruja declarada», es conocida en todo el Barrio Gótico por su saber en artes oscuras y por sus talleres de velas mágicas (los martes por la tarde). Vende calderos de hierro fundido (de varios tamaños), varitas de madera (de diferentes maderas: roble, sauce, abedul), athames (dagas rituales, sin filo, decorativas), grimorios (algunos auténticos, otros reproducciones), hierbas mágicas (ruda, artemisa, hierba de San Juan) y amuletos de protección (contra el mal de ojo, contra energías negativas). El ambiente es intenso y envolvente, con incienso de mirra y música ambiental de cuencos tibetanos (a veces). Es un lugar donde los clientes susurran y respetan el espacio.
		<br><br>
		<strong>Tipo:</strong> Tienda esotérica / Wicca<br>
		<strong>Horario:</strong> 11:00 - 21:00<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Especialidad:</strong> Calderos, varitas, athames (dagas rituales), grimorios y hierbas mágicas (amor, protección, dinero).<br>
		<strong>Ambiente:</strong> Oscuro y teatral, con telas de araña falsas, calderos humeantes (con incienso) y velas negras. Ambiente de película de brujas.<br>
		<strong>Clientela habitual:</strong> Brujas modernas (Wicca), curiosos y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ La dueña es una bruja declarada.<br>
		✔️ Los martes hay talleres de velas mágicas.<br>
		✔️ Venden amuletos de protección.`,
        pdfUrl: `#`,
        iconoTipo: `esoterico`
    },
	 {
        xPx: 909,
        yPx: 703,
        nombre: `Tienda esotérica «El Ojo de Horus»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bùth esoteric «Sùil Horais»<br><strong>Pronunciación:</strong> /<em>BOO-h es-o-te-rik SOOL HO-rash</em>/<br><strong>En inglés:</strong> The Eye of Horus<br><br>
		«El Ojo de Horus» es una tienda esotérica de temática egipcia, situada en una calle estrecha y oscura. Es un local de culto para los aficionados a la cultura del Antiguo Egipto, coleccionistas de amuletos, turistas y ocultistas que buscan autenticidad y un ambiente envolvente. La decoración es recargada y teatral, imitando el interior de una tumba faraónica: paredes pintadas de color ocre con jeroglíficos (reproducciones), estatuillas de dioses (Anubis, Bastet, Horus, Toth), papiros enmarcados, y un aroma a incienso de mirra e incienso (que queman en un pequeño brasero). El dueño, un egiptólogo aficionado, ha dedicado su vida al estudio de la cultura egipcia y ha llenado la tienda con réplicas (y algunos originales de dudosa procedencia) de joyas, amuletos, estatuas y papiros. Vende joyas con el ojo de Horus (en plata y oro), papiros (reproducciones de textos del Libro de los Muertos), estatuillas de dioses (de resina o alabastro), inciensos de mirra e incienso, y amuletos (escarabajos, ojos de Horus, cruces ansadas). Los sábados hay charlas sobre el Antiguo Egipto (gratuitas, con donación).
		<br><br>
		<strong>Tipo:</strong> Tienda esotérica / Egipcia<br>
		<strong>Horario:</strong> 10:00 - 19:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Especialidad:</strong> Joyas con ojo de Horus, papiros, estatuillas de dioses egipcios (Anubis, Bastet, Horus) e inciensos de mirra e incienso.<br>
		<strong>Ambiente:</strong> Decorado al estilo del Antiguo Egipto: jeroglíficos en las paredes, estatuas de Anubis y aroma a incienso de mirra. Suena música ambiental egipcia.<br>
		<strong>Clientela habitual:</strong> Aficionados a la cultura egipcia, coleccionistas y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ El dueño es un egiptólogo aficionado.<br>
		✔️ Los sábados hay charlas sobre el Antiguo Egipto.<br>
		✔️ Venden réplicas de amuletos egipcios.`,
        pdfUrl: `#`,
        iconoTipo: `esoterico`
    },

	// ==================== OTROS

    {
        xPx: 899,
        yPx: 633,
        nombre: `Cementerio de San Mungo`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cladh Naoimh Mhungo<br><strong>Pronunciación:</strong> /<em>KLA NEV VUN-go</em>/<br><strong>En inglés:</strong> St. Mungo's Cemetery
		<br><br>
		El Cementerio de San Mungo es el cementerio municipal activo más antiguo de Dunbhròn, situado en una colina baja y cubierta de hierba del sur del Barrio Gótico, junto al Hospital Psiquiátrico abandonado (que lleva su mismo nombre). A diferencia del hospital, el cementerio nunca cerró y sigue recibiendo inhumaciones a día de hoy, aunque a un ritmo mucho menor que en el pasado. Fue inaugurado en 1845 como camposanto parroquial de la iglesia de Santa Euna (cuando el Barrio Gótico aún era un barrio de artesanos). Con el crecimiento de la ciudad, se expandió en 1902 y nuevamente en 1955. Actualmente ocupa una superficie de 12 acres (casi 5 hectáreas), con una mezcla de tumbas victorianas, panteones familiares, lápidas modernas y una sección de nichos para cenizas. Es un lugar de contrastes: las zonas antiguas (las más cercanas al hospital) están en semiabandono, con lápidas rotas, hiedra cubriéndolo todo y un aire profundamente tétrico; las zonas nuevas (al oeste, cerca de la entrada principal) están bien cuidadas, con césped cortado y flores frescas. Es frecuentado por familiares de los difuntos, paseantes solitarios, historiadores aficionados y góticos. Aunque no es raro ver figuras moverse por la zona de noche.`,
        pdfUrl: `#`,
        iconoTipo: `cementerio`
    },
	{
        xPx: 846,
        yPx: 674,
        nombre: `Mercadillo «Luna Menguante»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Margadh «A' Ghealach Lìonadh»<br><strong>Pronunciación:</strong> /<em>MAR-gak a YAL-ach LEE-un-ak</em>/<br><strong>En inglés:</strong> Waning Moon Market
		<br><br>
		El Mercadillo de Luna Menguante es un mercado esotérico ambulante que se instala cada dos semanas en la placita frente al Hospital Psiquiátrico «San Mungo» —los jueves de luna menguante, según la tradición local—. Es un lugar único en Dunbhròn. Donde lo cutre y lo auténtico se mezclan en un equilibrio inestable. Allí se puede encontrar de todo: velas de siete colores, aceites de ángel, cartas del tarot falsificadas (y alguna que otra verdadera), amuletos de plumas de paloma (que los vendedores juran que son de cuervo), cristales de cuarzo (la mayoría de vidrio), y algún que otro objeto que realmente no debería estar a la venta. La policía lo tolera porque apenas hay quejas (los vecinos del Barrio Gótico ya están acostumbrados, y los turistas del misterio lo consideran una atracción más). Pero los que saben —los iniciados— evitan ciertos puestos, sobre todo los que abren después del anochecer. Porque allí, entre los toldos descoloridos y las mesas de plástico, se puede comprar algo más que bisutería esotérica. Y los vendedores no siempre son charlatanes.
		<br>
		El mercadillo no tiene una ubicación fija dentro de la plaza (los puestos se colocan donde hay sitio, dependiendo de la luna, del tiempo y de quién haya llegado primero). Tampoco tiene horario oficial: empieza al atardecer (cuando la luz se vuelve gris y las sombras se alargan) y se desmonta alrededor de medianoche (o antes, si la policía pasa o si algún cliente se pone nervioso). En invierno, cuando oscurece pronto, puede empezar a las cuatro de la tarde. En verano, a las ocho. La afluencia de público varía: los turistas del misterio (con sus cámaras y sus guías de "Escocia oculta") llenan la plaza en temporada alta. En invierno, solo quedan los habituales: curiosos, algún que otro investigador paranormal, y gente que busca algo específico (y normalmente ilegal).`,
        pdfUrl: `#`,
        iconoTipo: `mercadillo`
    },
    

    // ==================== ZONA INDUSTRIAL ====================
	
	// ==================== BAR
	
	{
        xPx: 804,
        yPx: 833,
        nombre: `Bar «La Campana»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Clag»<br><strong>Pronunciación:</strong> /an KLAK/<br><strong>En inglés:</strong> The Bell Bar<br><br>
		«La Campana» es un bar de trabajadores de ambiente duro y directo, situado en una calle ancha y deteriorada a poca distancia de los astilleros y los bloques de viviendas sociales. Es el bar de los obreros, camioneros, trabajadores del puerto y vecinos del Puerto Bajo que buscan una caña barata, una tapa caliente y una pantalla donde ver el fútbol sin florituras. El local es modesto y funcional, con una larga barra de madera, mesas de fórmica, taburetes altos y un suelo siempre manchado de cerveza. El olor a fritura (calamares, croquetas, patatas bravas) es constante. Las tapas son gratis con la consumición (los calamares a la romana son famosos en toda la zona). Las pantallas siempre emiten deportes (fútbol, rugby, boxeo). Los fines de semana, los jubilados y los parroquianos discuten sobre política y fútbol mientras juegan a los dardos. El dueño, un cascarrabias famoso en el barrio, conoce a todos sus clientes por su nombre y tiene la memoria de un elefante para las deudas. Es el centro neurálgico de la vida social de la Zona Industrial.
		<br><br>
		<strong>Tipo:</strong> Bar de trabajadores / Deportivo<br>
		<strong>Horario:</strong> 11:00 - 23:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager), vino de cartón, chupitos de whisky barato y tapas calientes (callos, garbanzos con bacalao).<br>
		<strong>Juegos:</strong> Dardos, máquinas tragaperras y pantallas deportivas.<br>
		<strong>Ambiente:</strong> Bar de toda la vida, con barra larga de madera, taburetes altos y mesas de fórmica. El suelo está siempre manchado de cerveza. El aroma a fritura es característico.<br>
		<strong>Música:</strong> Rock clásico y pop español, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Trabajadores de la zona, obreros, camioneros y vecinos del Puerto Bajo.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las tapas son gratis con la consumición.<br>
		✔️ Los callos son la especialidad de la casa los jueves.<br>
		✔️ Los fines de semana hay partidos de fútbol en las pantallas.<br>
		✔️ El dueño es un cascarrabias famoso en el barrio.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA

	// ==================== CAFÉ - BAR

	{
        xPx: 804,
        yPx: 881,
        nombre: `Cafetería «Las Piedras del Río»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «Clachan an Abhainn»<br><strong>Pronunciación:</strong> /KLA-jan an AV-in/<br><strong>En inglés:</strong> Stones of the River Café<br><br>
		«Las Piedras del Río» es una cafetería de trabajadores de ambiente humilde y funcional, situada en una calle ancha y ruidosa a escasos metros del río (que le da nombre), cerca de los astilleros. Es el típico bar de carretera y de fábrica, donde los obreros, camioneros, trabajadores de la Zona Industrial y jubilados entran a desayunar antes del turno o a tomar un café rápido en el descanso. El local es muy pequeño, con más barra que mesas, y el suelo de baldosa hidráulica está desgastado por las botas de seguridad de décadas de clientes. Abre muy temprano (6:00) y cierra pronto (18:00), porque la clientela nocturna es inexistente en esta zona. La especialidad son el café solo con leche, el té, los bocadillos calientes (de tortilla de patata, de salchicha, de jamón y queso) y la bollería industrial. Las tapas no existen, solo bocadillos. El servicio es rápido, el trato es directo, y no hay wifi (ni falta que hace). Es el bar de los que madrugan.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Bar de trabajadores<br>
		<strong>Horario:</strong> 06:00 - 18:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (pocas, más barra)<br>
		<strong>Especialidad:</strong> Café solo con leche, té, bocadillos de tortilla, de salchicha, de jamón y queso, y bollería industrial.<br>
		<strong>Ambiente:</strong> Local pequeño, con paredes de azulejo blanco y suelo de baldosa hidráulica desgastada. El aroma a café y a aceite de freír lo impregna todo. Una máquina tragaperras ocupa una esquina.<br>
		<strong>Música:</strong> Radio (música variada y noticias), a volumen medio.<br>
		<strong>Clientela habitual:</strong> Trabajadores de la zona (astilleros, fábricas, almacenes), camioneros y jubilados.<br><br>
		<strong>Notas:</strong><br>
		✔️ Abren muy temprano para los trabajadores del turno de mañana.<br>
		✔️ Cierran pronto; no hay servicio de cena.<br>
		✔️ El bocadillo de tortilla es famoso en toda la zona.<br>
		✔️ Solo se acepta efectivo.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },

	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD
	
	{
        xPx: 835,
        yPx: 842,
        nombre: `Centro Médico del Puerto Bajo`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-leighis Port Ìosal<br><strong>Pronunciación:</strong> /<em>EE-un-at ley-ish port EE-o-sal</em>/<br><strong>En inglés:</strong> Low Harbour Medical Centre
		<br><br>
		El Centro Médico del Puerto Bajo es el principal centro de atención primaria de la zona más pobre de Dunbhròn, situado en una calle ancha y descuidada. Da servicio a una población de más de 20.000 personas, incluyendo los tres bloques de viviendas de 20 plantas (unos 5.000 residentes solo en ellos), los trabajadores de la Zona Industrial, los vecinos del Barrio Gótico más cercanos y los sintecho que deambulan por la zona. Ocupa un edificio de hormigón visto de tres plantas, construido en 1985 y reformado a duras penas en 2010 (con fondos mínimos del ayuntamiento). Es un centro pequeño, desbordado y con recursos limitados, donde las listas de espera son largas, el mobiliario está desgastado, y el personal está quemado (los médicos duran poco, excepto los más veteranos que no pueden jubilarse). Tiene consultas de medicina general, pediatría, enfermería, un pequeño servicio de urgencias (para heridas de peleas y accidentes laborales), una sala de curas, y una unidad de salud mental (un psicólogo a tiempo parcial). El ambiente es caótico y triste, con olor a desinfectante y a humedad, y la sala de espera está siempre llena de gente tosiendo o con vendas improvisadas. Es el centro de salud de los que no tienen otra opción.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },

	// ==================== COLEGIOS
	
	{
        xPx: 822,
        yPx: 868,
        nombre: `Colegio «Santa Brígida»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Bhrìghde»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Vrí-je</em>/<br><strong>En inglés:</strong> St. Bride's Primary
		<br><br>
		El Colegio «Santa Brígida» es el único centro de educación primaria de la Zona Industrial, situado en una calle ancha y descuidada. Fue construido en 1968 y apenas se ha reformado desde entonces (solo una ampliación de urgencia en 1990). Es un edificio de hormigón visto y ladrillo rojo, de dos plantas, con un patio de cemento agrietado y una valla metálica oxidada. Acoge a unos 300 alumnos de 4 a 11 años, casi todos hijos de familias trabajadoras del Puerto Bajo, de las viviendas sociales, de los astilleros y de las fábricas textiles. Es un centro público y laico, con una dirección desbordada y resignada, una plantilla de profesores quemada (alta rotación, bajas por estrés) y unos recursos mínimos (libros de texto desfasados, ordenadores viejos, material deportivo escaso). El ambiente es triste, ruidoso y a veces violento (peleas entre alumnos, absentismo escolar, casos de malnutrición y violencia doméstica que los profesores detectan en los niños). El colegio es conocido por su comedor social (donde muchos niños hacen la única comida completa del día) y por el huerto escolar (una iniciativa de una profesora jubilada que aún viene como voluntaria). Es el reflejo de la pobreza del distrito.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },

	// ==================== COMISARÍA

	// ==================== HELADERÍAS

	// ==================== HOSPITALES

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS
	
	{
        xPx: 839,
        yPx: 764,
        nombre: `Instituto «Puerto de los Barcos»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd-sgoil «Chala nam Bàta»<br><strong>Pronunciación:</strong> /<em>Ard-sgoyl Já-la nam Ba-ta</em>/<br><strong>En inglés:</strong> Boat Harbour Academy
		<br><br>
		El Instituto «Puerto de los Barcos» es el único centro de educación secundaria de la Zona Industrial, situado en una calle ancha y polvorienta. Fue construido en 1975 y ampliado en 1995 con un ala de talleres, pero desde entonces apenas se ha invertido en mantenimiento. Es un edificio de hormigón visto y ladrillo, de tres plantas, con un patio de cemento agrietado y una valla metálica oxidada que no disuade a nadie. Acoge a unos 600 alumnos de 12 a 18 años (GCSE y GCE), procedentes casi en su totalidad de las familias trabajadoras del Puerto Bajo, de las viviendas sociales, de los astilleros y de las fábricas textiles. El índice de absentismo es altísimo, las tasas de fracaso escolar también, y los conflictos son diarios: peleas entre bandas, acoso, pequeños trapicheos, violencia doméstica reflejada en los alumnos, y una creciente presencia de drogas blandas. La dirección es autoritaria pero desbordada, los profesores están quemados (la mayoría son veteranos que no pueden jubilarse o jóvenes que se van al año), y el personal de apoyo es mínimo. El instituto es conocido por su equipo de rugby (el más violento de la ciudad, pero el único orgullo del centro), su taller de mecánica (donde los alumnos aprenden un oficio) y su alta tasa de abandono escolar. Es el reflejo de la desesperanza de la zona.`,
        pdfUrl: `#`,
        iconoTipo: `instituto`
    },

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS

	// ==================== PUBS

	// ==================== RESTAURANTES

	{
        xPx: 716,
        yPx: 852,
        nombre: `Restaurante «El Afluente»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An t-Aibhnichean Beag»<br><strong>Pronunciación:</strong> /an TAV-ni-jan BYAK/<br><strong>En inglés:</strong> The Tributary Restaurant<br><br>
		«El Afluente» es un restaurante de carretera de comida casera y económica, situado en una carretera ancha y polvorienta. Es un local modesto, funcional y sin pretensiones, con mesas de fórmica, sillas de plástico, un letrero luminoso desgastado y un aparcamiento de tierra delante. Es frecuentado por camioneros, trabajadores de la Zona Industrial, viajeros de paso y vecinos del Puerto Bajo que buscan una comida abundante y barata (el menú del día cuesta 10 libras, bebida incluida). Abre desde muy temprano (7:00) hasta tarde (22:00), y es famoso por sus desayunos contundentes (huevos, bacon, salchichas, judías, tostadas) y por su pescado frito (bacalao o eglefino). Solo aceptan efectivo. El dueño, un exmarinero, es un hombre rudo pero de buen corazón que a veces fía a los parroquianos habituales. El ambiente es ruidoso, con olor a aceite de freír, y las conversaciones son de fútbol, trabajo y quejas sobre la vida.
		<br><br>
		<strong>Tipo:</strong> Restaurante de carretera / Comida casera<br>
		<strong>Horario:</strong> 07:00 - 22:00<br>
		<strong>Tipo de cocina:</strong> Escocesa casera / Internacional<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Desayunos contundentes (huevos, bacon, salchichas, judías, tostadas), menú del día (primeros, segundos, postre y bebida), pescado frito y hamburguesas.<br>
		<strong>Ambiente:</strong> Restaurante de carretera, sin lujos, con mesas de fórmica, sillas de plástico y letrero luminoso. El aroma a aceite de freír y a limpio lo caracteriza.<br>
		<strong>Clientela habitual:</strong> Camioneros, trabajadores de la zona y viajeros de paso.<br><br>
		<strong>Notas:</strong><br>
		✔️ El menú del día cuesta diez libras (bebida incluida).<br>
		✔️ Es el sitio más barato para comer bien en todo Dunbhròn.<br>
		✔️ Abren desde muy temprano hasta tarde.<br>
		✔️ Solo se acepta efectivo.<br>
		✔️ Los domingos cierran a las cuatro de la tarde.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS

    {
        xPx: 959,
        yPx: 725,
        nombre: `Fábrica textil «Tweeddale Mills»: Hiladura`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Muiltean a' Ghlinne»: Snìomh<br><strong>Pronunciación:</strong> /<em>MOOL-tchen a GLEE-ne: SNEEV</em>/<br><strong>En inglés:</strong> Tweeddale Mills: Spinning<br><br>
		La nave de hiladura de la fábrica textil «Tweeddale Mills» es el corazón del proceso productivo del complejo. Situada en una enorme nave industrial de ladrillo rojo y hormigón, es uno de los principales empleadores de la zona, dando trabajo a más de 150 personas (la mayoría mujeres inmigrantes de Europa del Este, África y Asia, así como algunos trabajadores locales del Puerto Bajo). La fábrica fue construida en 1965 y modernizada a duras penas en 1995 con maquinaria de segunda mano comprada a una fábrica cerrada en Yorkshire. El ambiente es infernalmente ruidoso, caluroso y polvoriento: el estruendo de las máquinas de hilar (ring spinning y open-end) es constante, la temperatura ronda los 30°C incluso en invierno, y el aire está cargado de partículas de fibra (lana, algodón sintético, poliéster) que se adhieren a la ropa y a los pulmones. Las condiciones laborales son precarias: turnos de 10 o 12 horas, salarios por debajo del mínimo (se paga a destajo, por kg de hilo producido), ausencia de sindicatos (la dirección los ha ilegalizado), y un clima de miedo (los trabajadores que protestan son despedidos o, según los rumores, «desaparecen»). La dirección (la familia Tweeddale, que vive en una mansión en la Cima de los Vientos) apenas pisa la fábrica; el día a día lo gestionan contramaestres corruptos y violentos, que miran hacia otro lado con el contrabando (algunos trabajadores roban hilo para venderlo en el mercado negro).`,
        pdfUrl: `#`,
        iconoTipo: `fabrica`
    },
    {
        xPx: 976,
        yPx: 729,
        nombre: `Fábrica textil «Tweeddale Mills»: Tejeduría`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Muiltean a' Ghlinne»: Fhighe<br><strong>Pronunciación:</strong> /<em>MOOL-tchen a GLEE-ne: EE-e</em>/<br><strong>En inglés:</strong> Tweeddale Mills: Weaving
		<br><br>
		La nave de tejeduría de la fábrica textil «Tweeddale Mills» es el segundo eslabón del proceso productivo, donde los hilos producidos en la hiladura (o los importados) se convierten en tejidos de tweed, sarga y otros textiles industriales. Situada junto a la nave de hiladura (conectada por un pasillo cubierto), ocupa otro enorme bloque de ladrillo rojo y hormigón, construido en 1970 y apenas reformado desde entonces. Da trabajo a más de 120 personas (la mayoría mujeres inmigrantes, similares a las de la hiladura, y algunos hombres para las tareas más pesadas). El ambiente es ensordecedor (más que la hiladura), caluroso y peligroso: los telares jacquard y rapier (de segunda mano, comprados en una fábrica alemana en los 90) funcionan a gran velocidad, produciendo un ruido rítmico y atronador (los trabajadores apenas pueden comunicarse a gritos), la temperatura supera los 30°C, y las lanzaderas, si se rompen, salen despedidas como balas. Las condiciones laborales son igual de precarias que en la hiladura: turnos de 10 o 12 horas, salarios a destajo, ausencia de sindicatos, y un clima de miedo impuesto por los contramaestres. La tejeduría es conocida por su alta tasa de accidentes (dedos amputados, heridas por lanzaderas) y por el síndrome del túnel carpiano, una enfermedad profesional endémica. La dirección (familia Tweeddale) sigue sin pisar el taller.`,
        pdfUrl: `#`,
        iconoTipo: `fabrica`
    },
    {
        xPx: 999,
        yPx: 730,
        nombre: `Fábrica textil «Tweeddale Mills»: Tintorería`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Muiltean a' Ghlinne»: Dathaidh<br><strong>Pronunciación:</strong> /<em>MOOL-tchen a GLEE-ne: DA-hay</em>/<br><strong>En inglés:</strong> Tweeddale Mills: Dyeing
		<br><br>
		La nave de tintorería de la fábrica textil «Tweeddale Mills» es la tercera fase del proceso productivo, donde los tejidos crudos (procedentes de la tejeduría) o los hilos (de la hiladura) adquieren color. Situada en un edificio de hormigón y ladrillo (con un olor químico insoportable que se percibe a 200 metros a la redonda), fue construida en 1980 y es, con diferencia, la nave más peligrosa y contaminante del complejo. Da trabajo a unas 80 personas (la mayoría mujeres inmigrantes, pero también algunos hombres para las tareas pesadas), expuestas a productos químicos tóxicos (colorantes azoicos, fijadores, agentes tensioactivos, ácidos) sin la protección adecuada (los equipos de seguridad que da la empresa son insuficientes o están rotos). El ambiente es caluroso, húmedo y saturado de vapores químicos: el aire huele a amoníaco, a azufre y a «algo más» que los trabajadores no saben identificar. Las condiciones laborales son aún peores que en las otras naves: los turnos son igual de largos, pero el riesgo de enfermedades respiratorias, cáncer de vejiga y dermatitis es altísimo. La empresa (familia Tweeddale) ha sido denunciada varias veces por vertidos ilegales al río (el agua coloreada se vierte sin tratar), pero las multas son bajas y las pagan con las ganancias de una semana.`,
        pdfUrl: `#`,
        iconoTipo: `fabrica`
    },
    {
        xPx: 1021,
        yPx: 735,
        nombre: `Fábrica textil «Tweeddale Mills»: Vestuarios y comedor`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Muiltean a' Ghlinne»: Seòmraichean-fheum is Ithe<br><strong>Pronunciación:</strong> /<em>MOOL-tchen a GLEE-ne: SHOM-ra-yan-EM is EE-e»</em>/<br><strong>En inglés:</strong> Tweeddale Mills: Changing Rooms & Canteen
		<br><br>
		Los vestuarios y el comedor de «Tweeddale Mills» son los espacios comunes donde los más de 350 trabajadores de las tres naves (hiladura, tejeduría, tintorería) cambian su ropa de calle por los monos de trabajo, descansan, comen y, a veces, duermen (en turnos dobles). Situados en un edificio anexo de ladrillo y hormigón (de una sola planta, construido en 1975 y apenas reformado), son un reflejo de la precariedad y la segregación del complejo: los vestuarios están separados por sexo (hombres y mujeres, aunque también hay un pequeño espacio para los contramaestres), y el comedor es único, pero con mesas «reservadas» para los capataces. Las instalaciones son viejas, sucias y mal mantenidas: taquillas oxidadas, duchas que apenas funcionan (agua fría, poca presión), suelos de baldosa rota, olor a humedad y a desinfectante barato. La comida que sirve la empresa (a través de un cáterin externo de ínfima calidad) es escasa, grasienta y cara (los trabajadores se quejan, pero no tienen alternativa). El ambiente es triste y tenso: los trabajadores apenas hablan entre sí (están agotados), y los contramaestres vigilan para que no se organicen. Es el lugar donde la explotación se hace más visible.`,
        pdfUrl: `#`,
        iconoTipo: `fabrica`
    },
    {
        xPx: 1046,
        yPx: 735,
        nombre: `Fábrica textil «Tweeddale Mills»: Almacén A`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Muiltean a' Ghlinne»: Taigh-stòir A<br><strong>Pronunciación:</strong> /<em>MOOL-tchen a GLEE-ne: TAI-stor A»</em>/<br><strong>En inglés:</strong> Tweeddale Mills: Warehouse A
		<br><br>
		El Almacén A de «Tweeddale Mills» es una de las dos grandes naves de almacenamiento del complejo textil, conectada por una pasarela cubierta de chapa. Fue construido en 1965 (junto con la hiladura) y apenas ha sido reformado. Es un enorme espacio diáfano de 5.000 metros cuadrados, con una altura de techo de 10 metros, dedicado a almacenar materias primas (fardos de lana, balas de poliéster, bobinas de hilo importado) y productos semiacabados (bobinas de hilo hilado en la fábrica, rollos de tejido crudo que pasarán a la tintorería). El ambiente es polvoriento, oscuro y mal ventilado. Las estanterías metálicas (de 8 metros de altura) están apiladas hasta casi el techo, creando un laberinto de pasillos estrechos donde los trabajadores (unos 30) manejan carretillas elevadoras manuales (algunas eléctricas, pero viejas) y transpaletas. Las condiciones laborales son igual de precarias que en las naves productivas: turnos largos, salarios bajos, ausencia de medidas de seguridad (las estanterías no están ancladas, los pasillos carecen de iluminación adecuada, y el polvo de lana, inflamable, se acumula en el suelo). Además, el almacén es el punto neurálgico del contrabando interno: los contramaestres organizan la sustracción de hilo y tejido que luego se vende en el mercado negro (a talleres textiles clandestinos o a particulares). La dirección (familia Tweeddale) lo sabe, pero mira hacia otro lado (recibe un soborno).`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 1069,
        yPx: 740,
        nombre: `Fábrica textil «Tweeddale Mills»: Almacén B`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Muiltean a' Ghlinne»: Taigh-stòir B<br><strong>Pronunciación:</strong> /<em>MOOL-tchen a GLEE-ne: TAI-stor B»</em>/<br><strong>En inglés:</strong> Tweeddale Mills: Warehouse B
		<br><br>
		El Almacén B de «Tweeddale Mills» es la segunda gran nave de almacenamiento del complejo textil, conectada por una rampa de hormigón por la que circulan las carretillas. Fue construido en 1985 (una década después que el Almacén A) con el objetivo de almacenar producto terminado (rollos de tejido teñido y acabado, listos para la venta) y productos químicos para la tintorería (en un área segregada). Es una nave de 4.000 metros cuadrados, con una altura de techo de 8 metros, y se diferencia del Almacén A en que está mejor organizado (estanterías más seguras, pasillos más anchos) porque aquí se guarda la mercancía de mayor valor, la que se vende a clientes exteriores. Sin embargo, las condiciones laborales siguen siendo precarias: los trabajadores (unos 25) manejan carretillas elevadoras (algunas eléctricas), están expuestos al polvo de tejido y a los vapores químicos que se filtran desde la tintorería. Además, el Almacén B es el punto de salida del contrabando de mayor valor: los rollos de tejido de primera calidad se desvían hacia canales ilegales (mercado negro, venta a empresas sin factura) con la complicidad de los contramaestres y de algunos camioneros. La STCA también vigila este almacén por el tráfico de productos químicos, algunos de los cuales podrían usarse para fines no textiles.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 974,
        yPx: 754,
        nombre: `Fábrica textil «Tweeddale Mills»: Oficinas`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Muiltean a' Ghlinne»: Oifisean<br><strong>Pronunciación:</strong> /<em>MOOL-tchen a GLEE-ne: O-fee-shan»</em>/<br><strong>En inglés:</strong> Tweeddale Mills: Offices
		<br><br>
		Las oficinas de «Tweeddale Mills» son el centro administrativo y de gestión del complejo textil, situadas en un edificio de ladrillo rojo de tres plantas (construido en 1965 y reformado en 1995) que se alza junto a la nave de hiladura, conectado por un pasillo acristalado (con ventanas sucias). Es el único lugar del complejo que ha recibido inversiones visibles: mobiliario moderno, ordenadores no muy viejos. Aquí trabajan unas 30 personas (gerencia, contabilidad, recursos humanos, ventas, compras), la mayoría de ellas con un estatus muy superior al de los obreros: son empleados de confianza de la familia Tweeddale, en su mayoría locales (de Los Jardines o de la Cima de los Vientos), bien vestidos, con horarios de oficina (9:00 a 17:00) y salarios decentes. El ambiente es el de una oficina provinciana, aburrida y ligeramente cutre, con máquinas de café, plantas mustias y un aire de superioridad hacia los trabajadores de la fábrica. La dirección (el hijo del dueño) tiene su despacho en la última planta, con vistas a las chimeneas de la fábrica y al río contaminado.`,
        pdfUrl: `#`,
        iconoTipo: `oficinas`
    },
    {
        xPx: 855,
        yPx: 907,
        nombre: `«Astillero del Viejo Govan»: Grada de construcción`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Seann Ghobha Ghobhainn»: Slip-slighe<br><strong>Pronunciación:</strong> /<em>SHAUN GO-a GO-vin: SLIP-slee»</em>/<br><strong>En inglés:</strong> Govan Old Shipyard: Building Slip
		<br><br>
		La grada de construcción del Astillero del Viejo Govan es el corazón histórico del complejo, el lugar donde durante más de un siglo se construyeron barcos de acero. Es una estructura de hormigón y acero oxidado en semiabandono, que data de 1890 (con ampliaciones de 1920 y 1950). Hoy apenas se usa para construcciones ocasionales (barcazas, remolcadores, reparaciones de grandes barcos), pero conserva su imponente grúa pórtico (de 30 metros de altura, oxidada pero aún operativa) y los raíles por los que las gradas deslizaban los cascos hacia el agua. El ambiente es ruidoso (soldaduras, martillos), peligroso (óxido, amianto, maquinaria pesada) y frío (el viento del río azota sin piedad). Trabajan aquí unos 40 operarios (soldadores, caldereros, aparejadores), la mayoría contratistas eventuales (sin estabilidad laboral), expuestos a condiciones de salud muy precarias (enfermedades pulmonares, accidentes). El astillero es propiedad de un consorcio de inversores (que también controlan los almacenes portuarios), y hay rumores de que por la noche se realizan allí reparaciones ilegales (para barcos sancionados o de contrabandistas).`,
        pdfUrl: `#`,
        iconoTipo: `astilleroConstruccion`
    },
    {
        xPx: 877,
        yPx: 890,
        nombre: `«Astillero del Viejo Govan»: Dique seco`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Seann Ghobha Ghobhainn»: Dotard Thioram<br><strong>Pronunciación:</strong> /<em>SHAUN GO-a GO-vin: DO-tard HEE-ram»</em>/<br><strong>En inglés:</strong> Govan Old Shipyard: Dry Dock
		<br><br>
		El dique seco del Astillero del Viejo Govan es una de las instalaciones más impresionantes y a la vez más decadentes del complejo. Situado en la parte sur del astillero, es una enorme cuenca de hormigón de 120 metros de largo, 25 metros de ancho y 12 metros de profundidad, construida en 1910 y ampliada en 1950. Se utiliza para la reparación de barcos (sacar del agua, limpiar el casco, soldar planchas, reparar hélices). El ambiente es húmedo, frío y peligroso: las paredes de hormigón tienen grietas, las escaleras de acceso están oxidadas, y el fondo está cubierto de limo y restos metálicos. Se bombea el agua (con unas bombas viejas y ruidosas) y los operarios (unos 25) trabajan en condiciones extremas (con marea, con corriente). El dique es también un punto de contrabando y actividades ilegales (se repara barcos sancionados o de contrabandistas por la noche, con la complicidad de los capataces).`,
        pdfUrl: `#`,
        iconoTipo: `astilleroReparaciones`
    },
    {
        xPx: 898,
        yPx: 870,
        nombre: `«Astillero del Viejo Govan»: Muelle de reparación`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Seann Ghobha Ghobhainn»: Cidhe Càraidh<br><strong>Pronunciación:</strong> /<em>SHAUN GO-a GO-vin: KEE-e KA-ray»</em>/<br><strong>En inglés:</strong> Govan Old Shipyard: Repair Quay
		<br><br>
		Situado junto al dique seco y conectado con él por un canal de acceso, es un muelle flotante de hormigón y acero de 80 metros de largo, construido en 1960 y reformado a duras penas en 1995. Se utiliza para reparaciones menores de barcos (sin necesidad de varada): soldaduras en el casco (con barcos a flote), cambio de hélices, limpieza de fondos (con buzos), y mantenimiento de sistemas. Es frecuentado por pesqueros, remolcadores y alguna barcaza de los almacenes portuarios. El ambiente es ruidoso, húmedo y peligroso (trabajos en altura sobre el agua, riesgos de electrocución, caídas). Trabajan aquí unos 35 operarios (soldadores, caldereros, electricistas, buzos), la mayoría contratistas eventuales. El muelle es también un punto de actividades ilegales: se reparan barcos sancionados con papeles falsos y se realizan cambios de carga en el agua (contrabando).`,
        pdfUrl: `#`,
        iconoTipo: `astilleroReparaciones`
    },
    {
        xPx: 919,
        yPx: 854,
        nombre: `«Astillero del Viejo Govan»: Talleres`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Seann Ghobha Ghobhainn»: Bùithtean-obrach<br><strong>Pronunciación:</strong> /<em>SHAUN GO-a GO-vin: BOO-yan-O-braj»</em>/<br><strong>En inglés:</strong> Govan Old Shipyard: Workshops
		<br><br>
		Los talleres del Astillero del Viejo Govan son el centro de trabajo fino y especializado del complejo, el lugar donde se fabrican y reparan los componentes que luego se instalan en los barcos (hélices, ejes, válvulas, sistemas hidráulicos). Situados en un edificio de ladrillo rojo y hormigón de una sola planta (con un altillo), construido en 1950 y ampliado en 1975, están ubicados entre la grada de construcción y el dique seco, conectados por una pasarela cubierta de chapa. Es un espacio ruidoso (tornos, fresadoras, martillos neumáticos), polvoriento (virutas de metal, polvo de carborundo) y peligroso (máquinas sin protección, falta de ventilación). Aquí trabajan unos 25 operarios (torneros, fresadores, caldereros, soldadores de taller), la mayoría contratistas eventuales (con baja cualificación, excepto algunos veteranos). A diferencia de la grada o el muelle, aquí el trabajo es más preciso y mecánico, pero las condiciones son igual de precarias: salarios bajos, turnos largos, falta de medidas de seguridad, y un ambiente de miedo impuesto por los capataces. El taller es también un punto de fabricación ilegal de piezas (para barcos sancionados o para el mercado negro de repuestos), con la complicidad de la dirección.`,
        pdfUrl: `#`,
        iconoTipo: `astilleroTaller`
    },
    {
        xPx: 867,
        yPx: 870,
        nombre: `«Astillero del Viejo Govan»: Oficinas y vestuarios`,
		descripcionCorta: `<br><strong>En gaélico:</strong> «Seann Ghobha Ghobhainn»: Oifisean is Seòmraichean-fheum<br><strong>Pronunciación:</strong> /<em>SHAUN GO-a GO-vin: O-fee-shan is SHOM-ra-yan-EM»</em>/<br><strong>En inglés:</strong> Govan Old Shipyard: Offices & Changing Rooms
		<br><br>
		Las oficinas y vestuarios del Astillero del Viejo Govan son el centro administrativo y los espacios comunes del complejo. Situados en un edificio de ladrillo rojo de dos plantas (construido en 1960 y apenas reformado), están ubicados junto a la entrada principal del astillero, a pocos metros de la grada de construcción y de los talleres. Es un lugar de contrastes: las oficinas de los gerentes y capataces (en la primera planta) son funcionales y relativamente modernas (ordenadores, teléfonos, aire acondicionado), mientras que los vestuarios de los trabajadores (en la planta baja) son viejos, sucios y mal mantenidos (taquillas oxidadas, duchas con agua fría, olor a humedad). Aquí trabajan unas 10 personas (gerentes, administrativos, capataces) y los 350 trabajadores del astillero pasan por aquí para cambiarse, ducharse (si pueden) y comer en el comedor (una sala anexa, igual de precaria). El ambiente es el de una empresa en decadencia: los directivos apenas pisan la fábrica, los capataces controlan con mano dura, y los obreros se cambian en silencio, sin apenas hablar.`,
        pdfUrl: `#`,
        iconoTipo: `oficinas`
    },
    {
        xPx: 1128,
        yPx: 818,
        nombre: `Refinería «Inverclyde»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Fùirneis «Inbhir Chluaidh»<br><strong>Pronunciación:</strong> /<em>FOO-ir-nesh IN-ver KLOO-ee</em>/<br><strong>En inglés:</strong> Inverclyde Refinery
		<br><br>
		La Refinería «Inverclyde» es la instalación industrial más grande, peligrosa y contaminante de toda la Zona Industrial, y uno de los complejos petrolíferos más importantes del norte de Escocia. Situada en el extremo sureste de la ciudad, ocupa una enorme extensión de 50 hectáreas (500.000 m²) de terreno ganado al mar, con una red laberíntica de tuberías, torres de destilación, tanques de almacenamiento, chimeneas (que escupen llamas) y un muelle para petroleros. Fue construida en 1965 y ampliada en 1980 y posteriormente en 2005. Es propiedad de una multinacional energética con sede en Londres y accionistas en el extranjero. Da trabajo a unos 400 empleados (entre personal fijo y contratistas), la mayoría altamente cualificados (ingenieros, técnicos de procesos, operadores de sala de control), pero también hay trabajadores de mantenimiento (soldadores, electricistas, fontaneros) con condiciones más precarias. El ambiente es infernal: el ruido de las turbinas y las antorchas es ensordecedor, el olor a azufre, gasoil y productos químicos es constante, y la luz de las antorchas (llamas de gas que queman los excedentes) ilumina el cielo de noche de un naranja enfermizo. Es un lugar de alto riesgo (explosiones, fugas de gas, incendios) y ha sufrido varios accidentes graves a lo largo de su historia, el peor en 1988 con 12 muertos.`,
        pdfUrl: `#`,
        iconoTipo: `refineria`
    },
	{
        xPx: 1030,
        yPx: 793,
        nombre: `Almacenes portuarios «La Corona»: A`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-stòir «a' Chala Rìoghail»: A<br><strong>Pronunciación:</strong> /<em>TIE-an STOR a JA-la RRI-ul: A»</em>/<br><strong>En inglés:</strong> «Crown» Harbour Warehouses: A
		<br><br>
		Los Almacenes portuarios «La Corona» son un complejo de siete grandes naves industriales (de la A a la G) situadas en en la zona este del distrito, a orillas del río Leith. Fueron construidos entre 1880 y 1920 para almacenar las mercancías que llegaban por barco (madera, carbón, cereales, textiles) y, posteriormente, productos químicos y contenedores. Hoy son un laberinto de hormigón, ladrillo y acero oxidado, en semiabandono (algunas naves aún se usan para almacenaje legal, pero la mayoría están infrautilizadas o directamente okupadas). Cada nave tiene una personalidad y un uso diferente, pero todas comparten un ambiente de degradación, peligro y actividad ilegal.<br>
		El Almacén A es la más antigua (1880) y la que se encuentra en peor estado: paredes agrietadas, tejado de uralita con goteras, suelo de tierra batida (con barro cuando llueve). Se utiliza para almacenamiento ilegal de contrabando (tabaco, alcohol, drogas, armas) que luego se distribuye por toda la ciudad. Los contrabandistas (bandas organizadas) controlan el acceso. La policía local lo sabe. Pero no pueden intervenir por la corrupción. Es el lugar más sórdido del Puerto Bajo.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 1277,
        yPx: 805,
        nombre: `Almacenes portuarios «La Corona»: B`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-stòir «a' Chala Rìoghail»: B<br><strong>Pronunciación:</strong> /<em>TIE-an STOR a JA-la RRI-ul: B</em>/<br><strong>En inglés:</strong> «Crown» Harbour Warehouses: B
		<br><br>
		El Almacén B del complejo «La Corona» es uno de los más grandes y mejor conservados (dentro de la decadencia general). Construido en 1895 como almacén de carbón (de ahí su estructura robusta), fue reconvertido en los años 50 para almacenar productos químicos (sacos de fertilizantes, soda cáustica, etc.). Hoy en día es un almacén mixto: una parte se alquila a una empresa de logística legal para almacenamiento de contenedores con mercancías lícitas; la otra está controlada por contrabandistas y se utiliza para esconder productos químicos ilegales (precursores de drogas, ácidos, etc.) que luego se venden a laboratorios clandestinos o a narcotraficantes. Es el lugar donde la actividad ilegal se mezcla con la legal, lo que dificulta la acción policial. El ambiente es tóxico y peligroso: el suelo está manchado de productos químicos, el aire huele a amoníaco y a disolventes, y hay un riesgo constante de incendio o explosión.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 1249,
        yPx: 846,
        nombre: `Almacenes portuarios «La Corona»: C`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-stòir «a' Chala Rìoghail»: C<br><strong>Pronunciación:</strong> /<em>TIE-an STOR a JA-la RRI-ul: C</em>/<br><strong>En inglés:</strong> «Crown» Harbour Warehouses: C
		<br><br>
		El Almacén C del complejo «La Corona» es una de las naves más grandes y singulares del puerto, construida en 1905 como almacén de lana (de ahí su estructura de ladrillo con tejado de dientes de sierra, que permitía la entrada de luz natural sin calor directo). Hoy en día es un almacén mixto que combina, en la parte sur, el alquiler de espacios a pequeñas empresas (talleres artesanales, estudios de artistas, almacenes de muebles) y, en la parte norte, un punto de distribución de productos falsificados (marcas de lujo imitadas, electrónica falsa) controlado por contrabandistas. Es un lugar de contrastes: el olor a lana (antiguo) se mezcla con el de plástico barato y pintura.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 1287,
        yPx: 859,
        nombre: `Almacenes portuarios «La Corona»: D`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-stòir «a' Chala Rìoghail»: D<br><strong>Pronunciación:</strong> /<em>TIE-an STOR a JA-la RRI-ul: D</em>/<br><strong>En inglés:</strong> «Crown» Harbour Warehouses: D
		<br><br>
		El Almacén D del complejo «La Corona» es, con diferencia, el más siniestro y peligroso de todos, y el que concentra la mayor atención de la STCA. Construido en 1910 como almacén frigorífico (para carne congelada importada), fue reconvertido en los años 50 en un depósito de productos químicos refrigerados (amoníaco, gases licuados). Hoy en día está semi abandonado y es utilizado por los contrabandistas como almacén de mercancía ilegal de alto riesgo y, según los rumores, como punto de encuentro para rituales de seres sobrenaturales (vampiros, demonios) que buscan la oscuridad y el frío. El edificio es un enorme bloque de hormigón sin ventanas, con paredes de un metro de espesor, puertas de acero blindadas y un sistema de refrigeración antiguo (pero aún operativo) que mantiene el interior a una temperatura bajo cero, incluso en verano. El ambiente es helado, húmedo y maloliente: a amoníaco, a carne podrida (antigua) y a algo más.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 1313,
        yPx: 820,
        nombre: `Almacenes portuarios «La Corona»: E`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-stòir «a' Chala Rìoghail»: E<br><strong>Pronunciación:</strong> /<em>TIE-an STOR a JA-la RRI-ul: E</em>/<br><strong>En inglés:</strong> «Crown» Harbour Warehouses: E
		<br><br>
		El Almacén E del complejo «La Corona» es uno de los más modernos (dentro de la decadencia general), construido en 1965 como almacén de productos envasados (latas, botellas, cajas). Es el único del complejo que aún se utiliza para actividades mayoritariamente legales: varias empresas de logística alquilan espacio para guardar alimentos no perecederos, material de limpieza, papel, etc. Sin embargo, la parte trasera está controlada por los contrabandistas y se utiliza para esconder productos robados (electrodomésticos, herramientas, ropa) antes de su venta en el mercado negro. Es un almacén ordenado y limpio (en comparación con los demás), con estanterías metálicas, suelo de hormigón pintado y buena iluminación.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 1323,
        yPx: 869,
        nombre: `Almacenes portuarios «La Corona»: F`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-stòir «a' Chala Rìoghail»: F<br><strong>Pronunciación:</strong> /<em>TIE-an STOR a JA-la RRI-ul: F</em>/<br><strong>En inglés:</strong> «Crown» Harbour Warehouses: F
		<br><br>
		El Almacén F del complejo «La Corona» es uno de los más pequeños y deteriorados del grupo, construido en 1925 como almacén de aceite vegetal (de ahí los restos de grasas en el suelo). Hoy en día está semi abandonado, utilizado por los contrabandistas como almacén temporal de mercancía «caliente» (recién robada, que necesita ser distribuida rápidamente) y como taller de manipulación de productos robados (cambio de etiquetas, borrado de números de serie). Es un lugar de paso, no de almacenamiento duradero. El ambiente es grasiento, maloliente (aceite rancio, humedad) y peligroso (suelo resbaladizo, restos de aceite). Es el menos «importante» de los almacenes, pero el que mayor rotación de mercancía ilegal tiene.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 1345,
        yPx: 825,
        nombre: `Almacenes portuarios «La Corona»: G`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-stòir «a' Chala Rìoghail»: G<br><strong>Pronunciación:</strong> /<em>TIE-an STOR a JA-la RRI-ul: G</em>/<br><strong>En inglés:</strong> «Crown» Harbour Warehouses: G
		<br><br>
		El Almacén G es el más moderno y mejor conservado del complejo «La Corona», construido en 1985 como almacén de contenedores refrigerados (para productos perecederos importados). Es el único que todavía funciona como un almacén legal de pleno derecho (sin actividad ilegal aparente), alquilado por una empresa de logística internacional (Cold Storage Ltd.) que guarda alimentos congelados (pescado, carne, verduras) para su posterior distribución a supermercados y restaurantes. Los contrabandistas no lo utilizan, o al menos no de forma visible, porque la empresa legal tiene un sistema de seguridad muy estricto (cámaras, control de acceso, personal fijo). Es un lugar frío, limpio y ordenado, con un intenso olor a pescado congelado y a desinfectante. Es el único almacén del puerto que no da miedo.`,
        pdfUrl: `#`,
        iconoTipo: `almacen`
    },
    {
        xPx: 948,
        yPx: 788,
        nombre: `Lonja «The Fishmarket»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Margadh an Èisg<br><strong>Pronunciación:</strong> /<em>MAR-ga an ESHK</em>/<br><strong>En inglés:</strong> The Fishmarket
		<br><br>
		«The Fishmarket» es la lonja de pescado más importante de Dunbhròn y una de las más modernas y mejor gestionadas de Escocia, a pesar de estar ubicada en el corazón del Puerto Bajo, rodeada de pobreza, almacenes abandonados y viviendas sociales. Es un edificio de hormigón y acero inoxidable de dos plantas, construido en 1995 (y ampliado en 2010), que contrasta fuertemente con la decadencia del entorno. Es el centro neurálgico de la distribución de pescado y marisco de toda la ciudad: aquí se subasta a diario la captura de los barcos pesqueros (llegada por la mañana temprano), y desde aquí se distribuye a restaurantes, hoteles, pescaderías y supermercados de toda Dunbhròn (incluyendo el Casco Antiguo, Costa Nova, el Barrio Gótico y hasta Los Jardines). La calidad del producto es impecable, gracias a la estricta normativa de la lonja (inspección veterinaria, cadena de frío, trazabilidad). El ambiente es el de un mercado de subastas tradicional (con subastador, pantallas de precios, compradores gritando), pero con tecnología de punta. Los pescaderos locales (los del Puerto Bajo) venden aquí su captura, pero también lo hacen barcos de otras localidades. Es un lugar de contradicciones: en el exterior, la miseria; en el interior, la eficiencia y el dinero.`,
        pdfUrl: `#`,
        iconoTipo: `lonja`
    },
    {
        xPx: 1002,
        yPx: 917,
        nombre: `Central Térmica «Santa Caledonia»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Stèisean Cumhachd «Naoimh Chaledonia»<br><strong>Pronunciación:</strong> /<em>SHTAY-shan KOO-ajk «NEV JA-le-do-nee-a»</em>/<br><strong>En inglés:</strong> St. Caledonia Power Station
		<br><br>
		La Central Térmica «Santa Caledonia» es una gigantesca y obsoleta planta de generación eléctrica de carbón, situada en el extremo sureste de la Zona Industrial, junto al estuario del río Dun y a pocos kilómetros del mar abierto. Fue construida en 1965 (en pleno auge industrial) y ampliada en 1980, pero desde entonces apenas ha recibido inversiones. Es una de las centrales térmicas más contaminantes de Escocia, y su cierre está programado para 2030 (aunque se retrasa constantemente). Presuntamente para ser sustituida por una central de energía renovable. Ocupa una enorme extensión de 30 hectáreas, con una chimenea de 150 metros de altura (visible desde toda la ciudad), un parque de carbón (montañas de hulla al aire libre), torres de refrigeración (de hormigón, con vapor blanco), y un laberinto de tuberías y turbinas. El ambiente es infernal: el ruido de las turbinas es ensordecedor, el aire huele a azufre y a hollín, y la lluvia ácida (diluida) corroe las estructuras. Da trabajo a unos 200 empleados (ingenieros, técnicos, operadores), la mayoría sindicalizados y con condiciones dignas (a diferencia de otras industrias de la zona), pero la planta está en declive y los despidos son constantes`,
        pdfUrl: `#`,
        iconoTipo: `centralTermica`
    },
    {
        xPx: 748,
        yPx: 849,
        nombre: `Viviendas Sociales «Nueva Esperanza» (Bloque A)`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-còmhnaidh «Dòchas Ùr» (Bloc A)<br><strong>Pronunciación:</strong> /<em>TIE-an KO-nay DO-ja-s OOR (Bloc A)</em>/<br><strong>En inglés:</strong> New Hope Housing Estate (Block A)
		<br><br>
		Las Viviendas Sociales «Nueva Esperanza» son un complejo de tres enormes bloques de pisos (A, B, C y D). Fueron construidos entre 1970 y 1975 para realojar a las familias que perdieron sus casas en una riada (y también para acoger a los trabajadores de las fábricas). Cada bloque tiene 20 plantas y en cada planta hay 20 pisos (400 viviendas por bloque). En total, el complejo alberga a unos 3.000 habitantes. Es el símbolo de la pobreza y la marginalidad del Puerto Bajo: las fachadas están desconchadas, los ascensores no funcionan (desde los años 90), las escaleras huelen a orín y a marihuana, y los pisos son pequeños, mal aislados (el viento se cuela por las ventanas) y caros para lo que ofrecen (pero es lo único que la gente puede pagar). El ambiente es de abandono, miseria y violencia latente: peleas entre vecinos, trapicheo de drogas en los rellanos, prostitutas en los bajos, y niños jugando en la plaza central comunitaria (un espacio de cemento con bancos rotos y una fuente seca). Es el lugar más deprimente de Dunbhròn.`,
        pdfUrl: `#`,
        iconoTipo: `casaSocial`
    },
    {
        xPx: 778,
        yPx: 821,
        nombre: `Viviendas Sociales «Nueva Esperanza» (Bloque B)`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-còmhnaidh «Dòchas Ùr» (Bloc B)<br><strong>Pronunciación:</strong> /<em>TIE-an KO-nay DO-ja-s OOR (Bloc B)</em>/<br><strong>En inglés:</strong> New Hope Housing Estate (Block B)
		<br><br>
		El Bloque B de las Viviendas Sociales «Nueva Esperanza» es el segundo de los cuatro enormes bloques de pisos del complejo, situado al lado del Bloque A, conectado a él por una pasarela de cemento (en mal estado) que cruza la plaza central comunitaria. Fue construido en 1972 (dos años después que el Bloque A) y comparte las mismas características de abandono y pobreza, pero con una diferencia fundamental: aquí vive la comunidad de inmigrantes de Europa del Este (polacos, lituanos, rumanos, búlgaros) que trabajan en la Zona Industrial y en la refinería. Es un microcosmos dentro del barrio: los vecinos apenas se relacionan con los del Bloque A (por idioma, por cultura, por desconfianza), y mantienen sus propias tradiciones (tiendas ilegales de productos de sus países, iglesias ortodoxas en sótanos, bandas organizadas). El bloque está en peor estado aún que el A (hay más pisos vacíos, más vandalismo, más humedad), y la inseguridad es mayor (peleas entre bandas rumanas y polacas). El ayuntamiento lo ha dado casi por perdido.`,
        pdfUrl: `#`,
        iconoTipo: `casaSocial`
    },
    {
        xPx: 785,
        yPx: 859,
        nombre: `Viviendas Sociales «Nueva Esperanza» (Bloque C)`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-còmhnaidh «Dòchas Ùr» (Bloc C)<br><strong>Pronunciación:</strong> /<em>TIE-an KO-nay DO-ja-s OOR (Bloc C)</em>/<br><strong>En inglés:</strong> New Hope Housing Estate (Block C)
		<br><br>
		El Bloque C de las Viviendas Sociales «Nueva Esperanza» es el tercero y segundo más siniestro y abandonado de los cuatro bloques, situado al lado del Bloque B, en el extremo sur del complejo. Fue construido en 1975 (el penúltimo de los tres) y presenta un estado deplorable: hay más pisos vacíos que ocupados (un 70% de okupación, la mayoría por sintecho, drogadictos, prostitutas y delincuentes de poca monta), las fachadas están agrietadas, las escaleras son peligrosas (falta de barandillas, escalones rotos), y la plaza comunitaria (la zona del Bloque C) está convertida en un vertedero. El ayuntamiento ha declarado el bloque en ruina técnica (prohibido el acceso a no residentes, pero nadie lo respeta). Es el corazón de la delincuencia del Puerto Bajo: aquí se trafica con drogas duras, se esconden fugitivos de la justicia, se organizan peleas de perros en el sótano y se prostituye a menores (los casos más turbios). La policía solo entra con chalecos antibalas y en grupos numerosos. Los vecinos que aún viven aquí (los pocos que quedan) son los más vulnerables (ancianos, discapacitados, madres solteras sin recursos) y viven aterrorizados por las bandas.`,
        pdfUrl: `#`,
        iconoTipo: `casaSocial`
    },
	{
        xPx: 739,
        yPx: 817,
        nombre: `Viviendas Sociales «Nueva Esperanza» (Bloque D)`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taighean-còmhnaidh «Dòchas Ùr» (Bloc D)<br><strong>Pronunciación:</strong> /<em>TIE-an KO-nay DO-ja-s OOR (Bloc D)</em>/<br><strong>En inglés:</strong> New Hope Housing Estate (Block D)
		<br><br>
		El Bloque D de las Viviendas Sociales «Nueva Esperanza» es el cuarto y más siniestro de todos. Una estructura fantasma que nunca llegó a terminarse. Situado al extremo oeste del complejo, su construcción comenzó en 1980 pero se paralizó en 1983 por falta de presupuesto (y por los escándalos de corrupción del ayuntamiento). Nunca se llegaron a instalar los ascensores, ni las tuberías de agua, ni la electricidad, ni los acabados (pintura, suelos). El esqueleto de hormigón se ha ido degradando durante 40 años. Sin embargo, los pisos (20 plantas, 20 pisos por planta) están estructuralmente acabados (paredes, techos, ventanas sin acristalar), y han sido okupados por lo peor de lo peor del Puerto Bajo: asesinos en fuga, violadores, pederastas, narcotraficantes de alta peligrosidad y miembros de sectas satánicas que buscan un lugar sin ley donde esconderse. Es un territorio sin ley donde la policía solo entra en gran número y con munición letal, y donde los pocos vecinos de los otros bloques evitan incluso mirar. Es el corazón de las tinieblas del Puerto Bajo.`,
        pdfUrl: `#`,
        iconoTipo: `casaSocial`
    },

    // ==================== LOS PRADOS ====================

	// ==================== BAR

	{
        xPx: 522,
        yPx: 478,
        nombre: `Bar «Negro y Rojo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Dubh is Dearg»<br><strong>Pronunciación:</strong> /DUV ish JERAK/<br><strong>En inglés:</strong> Black and Red Bar<br><br>
		«Negro y Rojo» es un bar de copas y rock de ambiente moderno y desenfadado, situado en una calle ancha y bien iluminada. Es uno de los pocos locales del barrio que no cierra a las 23:00 (abre hasta las 3:00 los fines de semana), lo que lo convierte en un punto de encuentro para los jóvenes del distrito, los trabajadores de las oficinas cercanas y algún que otro turista despistado. El local ocupa la planta baja de un edificio moderno de 2018 (de ladrillo claro y grandes ventanales), con una decoración industrial y minimalista: paredes de ladrillo visto pintadas de negro y rojo, tuberías de cobre a la vista, lámparas colgantes de diseño, y un suelo de hormigón pulido. La especialidad son las cervezas de barril (lagers y ales escocesas), los chupitos de whisky y los cócteles clásicos. Tienen dardos, billar y máquinas tragaperras (modernas). La música es rock clásico y rock duro a volumen alto, pero no atronador. El ambiente es animado, ruidoso y seguro (no es conflictivo, porque Los Prados es un barrio tranquilo). Es el lugar donde los jóvenes de Los Prados se sienten «mayores».
		<br><br>
		<strong>Tipo:</strong> Bar de copas / Rock<br>
		<strong>Horario:</strong> 17:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager y ales), chupitos de whisky, cócteles clásicos y cerveza negra.<br>
		<strong>Juegos:</strong> Dardos, billar y máquinas tragaperras.<br>
		<strong>Ambiente:</strong> Oscuro, con paredes pintadas de negro y rojo, carteles de grupos de los ochenta y una barra larga de madera. No es raro que se produzcan altercados los fines de semana.<br>
		<strong>Música:</strong> Rock clásico y rock duro, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Rockeros, moteros y gente joven del barrio.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los jueves hay noche de micrófono abierto (rock y metal).<br>
		✔️ No se sirve comida caliente, solo frutos secos y patatas fritas de bolsa.<br>
		✔️ El local es pequeño y se llena rápidamente.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 535,
        yPx: 603,
        nombre: `Bar «La Segunda Puerta»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Dara Doras»<br><strong>Pronunciación:</strong> /an DA-ra DO-rass/<br><strong>En inglés:</strong> The Second Door Bar<br><br>
		«La Segunda Puerta» es un bar de barrio y deportivo de ambiente tradicional y familiar, situado en una calle ancha y arbolada. Es el típico bar de toda la vida, de los que ya casi no quedan en este distrito tan moderno: una larga barra de fórmica blanca, mesas de madera desgastadas, pantallas de televisión (siempre con deportes), y un olor a cerveza y a fritura que se ha quedado impregnado en las paredes. Es frecuentado por vecinos del barrio (sobre todo jubilados y trabajadores), padres y madres del cercano colegio, y algún que otro joven que busca un sitio auténtico lejos de los bares modernos. La especialidad son las cervezas de barril baratas, el vino de cartón, y las tapas calientes (calamares a la romana, croquetas, patatas bravas) que son gratis con la consumición. Los fines de semana, las pantallas retransmiten partidos de fútbol (y los jubilados discuten de política). Es el antídoto contra la gentrificación de Los Prados.
		<br><br>
		<strong>Tipo:</strong> Bar de barrio / Deportivo<br>
		<strong>Horario:</strong> 11:00 - 01:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager), vino de cartón y tapas calientes (calamares, croquetas, patatas bravas).<br>
		<strong>Juegos:</strong> Dardos, futbolín y pantallas deportivas.<br>
		<strong>Ambiente:</strong> Bar de toda la vida, con barra larga de fórmica, taburetes altos y mesas de madera desgastada. Es el centro de reunión de los vecinos de Los Prados.<br>
		<strong>Música:</strong> Pop y rock suave, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos del barrio, trabajadores, jubilados y padres y madres del colegio cercano.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las tapas son gratis con la consumición.<br>
		✔️ Es famoso por sus calamares a la romana.<br>
		✔️ Los viernes hay partidos de fútbol en las pantallas.<br>
		✔️ El dueño es un tipo simpático que organiza torneos de dardos.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 678,
        yPx: 705,
        nombre: `Bar «La Nutria Risueña»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Dòbhran Sunndach»<br><strong>Pronunciación:</strong> /an DOV-ran SUN-daj/<br><strong>En inglés:</strong> The Laughing Otter Bar<br><br>
		«La Nutria Risueña» es un bar temático familiar de ambiente desenfadado y colorido, situado en una calle ancha y arbolada. Es el único local del distrito (y de toda la ciudad) que cuenta con una zona de juegos infantiles y un ambiente explícitamente pensado para familias con niños. La decoración es alegre y natural: paredes pintadas de verde claro y azul, con dibujos de nutrias sonrientes (en murales y vinilos), plantas colgantes (potos, helechos), y muebles de madera clara. La especialidad son las cervezas artesanas en botella (de Escocia y del resto del mundo), los batidos naturales (frutas, yogur), los bocadillos de pavo con queso y las ensaladas, y las pizzas caseras hechas en horno de leña. Tienen juegos de mesa (ajedrez, dominó, cartas, y una colección de juegos infantiles) y los sábados por la mañana organizan cuentacuentos para niños. El ambiente es tranquilo y familiar, con música indie o pop a volumen bajo. Se admiten mascotas (perros, gatos, y alguna vez un conejo). Es el lugar favorito de los padres y madres del barrio que quieren tomar una cerveza tranquilos mientras los niños juegan.
		<br><br>
		<strong>Tipo:</strong> Bar temático / Familiar<br>
		<strong>Horario:</strong> 10:00 - 00:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza artesana (en botella), batidos naturales, bocadillos de pavo con queso, ensaladas y pizzas.<br>
		<strong>Juegos:</strong> Juegos de mesa (ajedrez, dominó, cartas y juegos de mesa infantiles).<br>
		<strong>Ambiente:</strong> Decorado con dibujos de nutrias, plantas colgantes y colores vivos. Ambiente familiar y desenfadado. Es el único bar de Los Prados con zona de juegos para niños.<br>
		<strong>Música:</strong> Pop e indie, a volumen medio-bajo.<br>
		<strong>Clientela habitual:</strong> Familias con niños, jóvenes y grupos de amigos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los sábados por la mañana hay cuentacuentos para niños.<br>
		✔️ Las pizzas son caseras y se pueden hacer con masa sin gluten.<br>
		✔️ Se admiten mascotas.<br>
		✔️ Cuentan con terraza exterior con sombrillas.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA

    {
        xPx: 560,
        yPx: 471,
        nombre: `Biblioteca «Adam Smith»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Adhamh Smith»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan A-dav SMITH</em>/<br><strong>En inglés:</strong> Adam Smith Library
		<br><br>
		La Biblioteca «Adam Smith» es la biblioteca pública principal de Los Prados, situada en una calle ancha y arbolada. Es un edificio moderno y funcional de dos plantas, construido en 2018 con un diseño luminoso y minimalista: grandes ventanales de cristal, paredes blancas, suelo de madera clara, y una fachada de ladrillo claro que imita el estilo de las construcciones tradicionales escocesas. Es un espacio tranquilo, ordenado y bien equipado, con una colección de más de 30.000 volúmenes, especializada en economía, literatura escocesa, novela contemporánea y libros infantiles. Tiene una sala de estudio, una zona infantil, ordenadores públicos, wifi gratuito y una pequeña cafetería con máquinas de café y aperitivos. Es frecuentada por estudiantes del instituto, jóvenes profesionales, jubilados del barrio y familias que llevan a sus hijos a la zona infantil. El ambiente es el de una biblioteca moderna y activa, con una programación cultural que incluye clubes de lectura, talleres para niños y conferencias. La bibliotecaria jefe, una mujer joven y dinámica, ha logrado convertirla en un centro de vida comunitaria.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },
    {
        xPx: 644,
        yPx: 720,
        nombre: `Biblioteca «David Hume»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Dhaibhidh Hume»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan GHA-vid HYOOM</em>/<br><strong>En inglés:</strong> David Hume Library
		<br><br>
		La Biblioteca «David Hume» es la biblioteca pública de educación. Es un edificio más pequeño y modesto que la biblioteca «Adam Smith», construido en 2018 con un diseño funcional y acogedor de una sola planta (con un altillo). A diferencia de su homóloga, está más orientada a la comunidad de vecinos que a los estudiantes (aunque también tiene una sala de estudio). Su colección es de unos 15.000 volúmenes, con especial énfasis en literatura popular (novela romántica, thriller, cómic), revistas, y una sección de autoayuda. Es muy conocida por su sección de genealogía (muy solicitada por los jubilados del barrio) y por su club de lectura para mayores (se reúnen los jueves por la tarde). El ambiente es el de una biblioteca de barrio: tranquila, ordenada, con mobiliario cómodo y un personal muy cercano a los usuarios. Es frecuentada por jubilados, amas de casa, jóvenes padres con niños pequeños, y algún que otro estudiante del instituto que vive cerca.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },

	// ==================== CAFÉ - BAR

	{
        xPx: 506,
        yPx: 453,
        nombre: `Cafetería «Luz de Invierno»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «Solas Geamhraidh»<br><strong>Pronunciación:</strong> /SO-las GEM-rai/<br><strong>En inglés:</strong> Winter Light Café
		<br><br>
		«Luz de Invierno» es una cafetería moderna y acogedora, especializada en café de especialidad y pastelería casera, situada en una calle ancha y arbolada. Ocupa la planta baja de un edificio de ladrillo claro construido en 2018, con una fachada de grandes ventanales que dejan entrar la luz natural (de ahí el nombre). Es un lugar muy popular entre teletrabajadores, estudiantes, jóvenes profesionales y jubilados que buscan un ambiente tranquilo, con wifi gratuito y enchufes en todas las mesas. La especialidad son el café de especialidad (tostado medio, de origen único), el chocolate caliente espeso y los pasteles caseros (tarta de zanahoria, brownies, galletas de avena, carrot cake). También ofrecen opciones sin gluten y veganas. El local es amplio y luminoso, con paredes pintadas de azul claro y blanco, mesas de madera clara, y una estantería con libros para leer. Los martes hay dos por uno en cafés. Se admiten mascotas en la terraza. Es el lugar de moda entre los teletrabajadores de Los Prados.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Pastelería<br>
		<strong>Horario:</strong> 08:00 - 20:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de especialidad, chocolate caliente espeso y pasteles caseros (tarta de zanahoria, brownies, galletas de avena).<br>
		<strong>Ambiente:</strong> Acogedor, con paredes pintadas de azul claro, lámparas de techo de estilo industrial, mesas de madera reciclada y grandes ventanales que dejan entrar mucha luz natural.<br>
		<strong>Música:</strong> Jazz suave o folk, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Vecinos, familias, estudiantes del cercano instituto y teletrabajadores.<br><br>
		<strong>Notas:</strong><br>
		✔️ Disponen de wifi gratuito y enchufes en todas las mesas.<br>
		✔️ Los pasteles son caseros y cambian cada día.<br>
		✔️ Los martes hay dos por uno en cafés.<br>
		✔️ Se admiten mascotas.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 542,
        yPx: 555,
        nombre: `Cafetería «El Recuerdo Nublado»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Cuimhne Ceòthach»<br><strong>Pronunciación:</strong> /an KUI-nye CHO-haj/<br><strong>En inglés:</strong> The Foggy Memory Café<br><br>
		«El Recuerdo Nublado» es una tetería íntima y tranquila, especializada en infusiones, tés de hojas sueltas y pasteles veganos, situada en una calle tranquila y arbolada. Es el antídoto contra las cafeterías modernas y ruidosas del distrito: un local pequeño, oscuro (en el buen sentido) y acogedor, con paredes empapeladas de tonos grises, sofás de terciopelo, lámparas de mesa y una estantería con libros de poesía. No tienen wifi (para fomentar la conversación y la lectura). La especialidad son las infusiones de hierbas (más de 30 variedades), los tés de hojas sueltas (desde el clásico English Breakfast hasta tés verdes japoneses y rooibos sudafricano), el chocolate caliente espeso y los pasteles veganos (tarta de zanahoria sin gluten, brownie de garbanzos, galletas de avena). Los jueves hay lectura de poesía (micrófono abierto para poetas locales). Es un lugar frecuentado por escritores, estudiantes de humanidades, parejas, grupos de amigas y gente mayor que busca un remanso de paz. La dueña, una mujer de mediana edad, es una poeta amateur y organiza los recitales.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Tetería<br>
		<strong>Horario:</strong> 10:00 - 22:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Infusiones, tés de hojas sueltas (más de veinte variedades), chocolate caliente y pasteles veganos.<br>
		<strong>Ambiente:</strong> Íntimo, con paredes empapeladas de tonos grises, sofás de terciopelo y lámparas de mesa. El aroma a hierbas y canela lo impregna todo.<br>
		<strong>Música:</strong> Música clásica o piano, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Parejas, grupos de amigas, gente que busca tranquilidad y escritores.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuentan con una pequeña biblioteca de préstamo.<br>
		✔️ No disponen de wifi (para fomentar la conversación).<br>
		✔️ Los jueves hay lectura de poesía.<br>
		✔️ El té se sirve en teteras de porcelana con cuentagotas.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 612,
        yPx: 715,
        nombre: `Cafetería «La Carpa Amarilla»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Teanta Buidhe»<br><strong>Pronunciación:</strong> /an TYAN-ta BUI-ye/<br><strong>En inglés:</strong> The Yellow Tent Café<br><br>
		«La Carpa Amarilla» es una cafetería-brunch familiar y desenfadada, especializada en desayunos tardíos, bowls de yogur, smoothies y tostadas de aguacate, situada en una calle ancha y concurrida. Ocupa la planta baja de un edificio moderno de 2018, con una fachada pintada de amarillo (de ahí el nombre) que la hace muy visible. Es un lugar muy popular entre familias con niños pequeños, jóvenes, grupos de amigas y estudiantes, que buscan un ambiente alegre, luminoso y acogedor, con una zona infantil (con juguetes y libros) y una terraza exterior. La especialidad son los brunch (huevos benedictinos, tostadas de aguacate, bowls de yogur con granola y frutas), los batidos y los smoothies bowls. También ofrecen opciones veganas y sin gluten. Los fines de semana hay cola para el brunch (no aceptan reservas para grupos pequeños, solo para grupos de 4 o más). Es el lugar favorito de los padres y madres del barrio para desayunar con sus hijos después de llevarles al colegio.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Brunch<br>
		<strong>Horario:</strong> 09:00 - 21:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Brunch (huevos benedictinos, tostadas de aguacate, bowls de yogur y smoothies bowls).<br>
		<strong>Ambiente:</strong> Alegre, con paredes pintadas de amarillo, mesas de madera clara, plantas colgantes y una carpa de circo decorativa en el techo. Ambiente familiar y desenfadado.<br>
		<strong>Música:</strong> Pop o indie, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Familias con niños, jóvenes y grupos de amigos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay cola para el brunch (no se aceptan reservas).<br>
		✔️ Cuentan con un rincón infantil con juguetes y libros.<br>
		✔️ Las smoothies bowls son la especialidad de la casa.<br>
		✔️ Se admiten perros en la terraza.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },

	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD
	
	{
        xPx: 598,
        yPx: 469,
        nombre: `Centro de Salud de los Prados Norte`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte Linntean a Tuath<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te LEEN-tchen a TOO-a</em>/<br><strong>En inglés:</strong> North Meadows Health Centre
		<br><br>
		El Centro de Salud de los Prados Norte es uno de los dos centros médicos del distrito, encargado de atender a la población de la mitad norte y centro-norte de Los Prados (aproximadamente 12.000 habitantes). Está situado en una calle ancha y arbolada. Ocupa un edificio moderno de dos plantas (construido en 2018), con una fachada de ladrillo claro y grandes ventanales. Es un centro funcional, limpio y bien equipado, con consultas de medicina general, pediatría, ginecología, enfermería, un pequeño servicio de urgencias sin hospitalización, radiología y un laboratorio básico. Tiene una plantilla de unos 25 empleados (médicos, enfermeras, administrativos). El ambiente es el de un ambulatorio moderno: ordenado, eficiente, pero con las listas de espera típicas de la sanidad pública. Es conocido por su unidad de fisioterapia (muy solicitada por los jubilados del barrio) y por su programa de atención a la salud mental (con un psicólogo a tiempo parcial). Es un centro tranquilo y sin grandes sobresaltos, ya que Los Prados es un barrio seguro.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },
	{
        xPx: 608,
        yPx: 686,
        nombre: `Centro de Salud de los Prados Sur`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte Linntean a Deas<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te LEEN-tchen a JES</em>/<br><strong>En inglés:</strong> South Meadows Health Centre
		<br><br>
		El Centro de Salud de los Prados Sur es el segundo centro médico del distrito, encargado de atender a la población de la mitad sur y sur-este de Los Prados (aproximadamente 10.000 habitantes), así como a una pequeña parte del este del Barrio Gótico. Está situado en una calle ancha y algo más desgastada. Ocupa un edificio moderno de dos plantas (construido en 2020, dos años después que el centro norte), con una fachada de ladrillo claro y grandes ventanales, pero con un ambiente más modesto y con menos recursos que su homólogo del norte (menos personal, menos especialidades). Tiene consultas de medicina general, pediatría, enfermería, un pequeño servicio de urgencias (básico) y una unidad de salud mental. No tiene radiología ni fisioterapia (derivan al centro norte). Es un centro más tranquilo y menos saturado (porque la población del sur es más envejecida), pero con pacientes más vulnerables por la proximidad al Puerto Bajo. El personal es joven y comprometido, aunque con menos medios.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },

	// ==================== COLEGIOS
	
	{
        xPx: 535,
        yPx: 443,
        nombre: `Colegio «San Donan»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Naoimh Donnain»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Név Dó-nan</em>/<br><strong>En inglés:</strong> St. Donan's Primary
		<br><br>
		El Colegio «San Donan» es uno de los tres centros de educación primaria de Los Prados, encargado de atender a la población infantil de la zona norte del distrito (aproximadamente 250 alumnos de 4 a 11 años), aunque ocasionalmente recibe alumnos del centro o del sur (por motivos de cercanía o necesidades especiales). Está situado en una calle ancha y arbolada del norte de Los Prados. Ocupa un edificio moderno de dos plantas (construido en 2018), con una fachada de ladrillo claro y grandes ventanales, un patio de juegos (con césped artificial) y un campo de fútbol de hierba artificial. Es un centro público y laico, con una dirección moderna y eficiente, una plantilla de profesores jóvenes y motivados (la mayoría recién salidos de la universidad), y recursos adecuados (pizarras digitales, ordenadores portátiles para los alumnos, biblioteca bien surtida). El ambiente es el de una escuela de barrio residencial: tranquilo, ordenado, con padres implicados y niños bien educados. Es conocido por su programa de inglés (para alumnos inmigrantes, pocos) y por su huerto escolar (muy cuidado). La directora, una mujer joven y dinámica, ha implantado un sistema de mediación entre iguales (para resolver conflictos) y un club de lectura para padres. Es el colegio preferido por las familias de clase media de Los Prados Norte.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
	{
        xPx: 579,
        yPx: 542,
        nombre: `Colegio «San Drostan»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Naoimh Drostáin»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Név Drós-tan</em>/<br><strong>En inglés:</strong> St. Drostan's Primary School
		<br><br>
		El Colegio «San Drostan» es uno de los tres centros de educación primaria de Los Prados, encargado de atender a la población infantil de la zona centro del distrito (aproximadamente 220 alumnos de 4 a 11 años), aunque ocasionalmente recibe alumnos del norte o del sur (por motivos de cercanía o necesidades especiales). Está situado en una calle ancha y arbolada del centro de Los Prados. Ocupa un edificio moderno de dos plantas (construido en 2018), con una fachada de ladrillo claro y grandes ventanales, un patio de juegos (con césped natural) y un campo de fútbol de hierba natural. Es un centro público y laico, con una dirección moderna y eficiente, una plantilla de profesores jóvenes y motivados, y recursos adecuados (pizarras digitales, tabletas para los alumnos, biblioteca bien surtida). El ambiente es el de una escuela de barrio residencial: tranquilo, ordenado, con padres implicados y niños bien educados. Es conocido por su programa de música (tienen una orquesta escolar) y por su club de ajedrez. Es el colegio preferido por las familias de clase media de Los Prados Centro (profesionales liberales, funcionarios).`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
	{
        xPx: 653,
        yPx: 681,
        nombre: `Colegio «Puerto Chico»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «a' Phuirt Bhig»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl a FORT VEEK</em>/<br><strong>En inglés:</strong> Little Harbour Primary
		<br><br>
		El Colegio «Puerto Chico» es el más modesto y pequeño de los tres centros de educación primaria de Los Prados, encargado de atender a la población infantil de la zona sur del distrito (aproximadamente 180 alumnos de 4 a 11 años), aunque ocasionalmente recibe alumnos del centro o del norte (por motivos de cercanía o necesidades especiales). Está situado en una calle ancha y algo menos arbolada del sur de Los Prados. Ocupa un edificio moderno de dos plantas (construido en 2020, dos años después que los otros colegios), con una fachada de ladrillo claro y grandes ventanales, pero con un ambiente más modesto y con menos recursos que sus homólogos del norte y centro. Es un centro público y laico, con una dirección joven y comprometida, una plantilla de profesores vocacionales (muchos son recién salidos de la universidad), y recursos justos (pizarras digitales, ordenadores portátiles compartidos, biblioteca pequeña pero bien surtida). El ambiente es el de una escuela de barrio obrero: tranquilo pero con más diversidad social (algunos alumnos del Puerto Bajo, familias con menos recursos). Es conocido por su programa de apoyo a familias desfavorecidas (desayunos gratis, ropero escolar) y por su huerto escolar (que también abastece al comedor). Es el colegio preferido por las familias de clase trabajadora de Los Prados Sur y por las del norte del Puerto Bajo.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },

	// ==================== COMISARÍA

	{
        xPx: 561,
        yPx: 578,
        nombre: `Comisaría Central de los Prados`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Tigh an Lagha Mheadhain nan Linntean<br><strong>Pronunciación:</strong> /<em>Tay an LAY-a VE-an nan LEEN-tchen</em>/<br><strong>En inglés:</strong> Central Meadows Police Station
		<br><br>
		La Comisaría Central de los Prados es la principal comisaría de policía del distrito, encargada de la seguridad de toda la zona (norte, centro y sur). Está situada en una calle ancha y arbolada del centro de Los Prados, a pocos minutos del centro comercial y cerca del instituto «Río Profundo». Ocupa un edificio moderno de dos plantas (construido en 2018), con una fachada de ladrillo claro y grandes ventanales, un aparcamiento para vehículos policiales y una zona de acceso restringido. Alberga a unos 50 agentes (entre policías locales, agentes de paisano y personal administrativo), así como calabozos (para retención temporal, máximo 24 horas), un pequeño laboratorio forense (para análisis básicos), un garaje para vehículos (coches patrulla, furgonetas) y una oficina de atención al público. Es un centro moderno, eficiente y con buena reputación, que refleja la tranquilidad del distrito (Los Prados es un barrio seguro, con pocos delitos graves). Los agentes tienen fama de ser profesionales y cercanos al ciudadano, aunque algo burocráticos. La comisaría tiene una buena relación con los servicios sociales del distrito. Es un lugar tranquilo, sin grandes sobresaltos.`,
        pdfUrl: `#`,
        iconoTipo: `comisaria`
    },
	
	// DISCOTECAS
	
	{
        xPx: 570,
        yPx: 724,
        nombre: `Discoteca «El Hangar»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Club-oidhche «An Hangar»<br><strong>Pronunciación:</strong> /an HAN-gar/<br><strong>En inglés:</strong> The Hangar Club
		<br><br>
		«El Hangar» es la única discoteca de Los Prados y una de las pocas de la zona centro-oeste de Dunbhròn. Situada en el extremo sur del distrito, ocupa un edificio de nave industrial reconvertida (un antiguo almacén de muebles de 1990, reformado en 2018). Es un local de tamaño mediano-grande, con una estética industrial y minimalista: paredes de ladrillo visto pintadas de negro y gris, tuberías de cobre a la vista, suelo de hormigón pulido, y una iluminación de neones y láseres. Tiene una pista principal (grande), una pista secundaria (para música electrónica), dos bares, una zona VIP elevada y un pequeño escenario para DJs invitados. Es frecuentado por jóvenes de Los Prados (de 18 a 25 años), estudiantes del instituto «Río Profundo» y algún que otro turista despistado que busca un ambiente más «auténtico» que las discotecas del centro. El ambiente es festivo, ruidoso y generalmente seguro (aunque a veces se producen peleas entre borrachos). La música es electrónica comercial, pop y reggaetón a volumen alto. Los fines de semana hay DJs invitados locales, de la escena underground de Glasgow. Es un lugar popular, pero no tan masivo como las discotecas del Corazón Roto.
		<br><br>		
		<strong>Tipo:</strong> Discoteca industrial / Sala de fiestas<br>
		<strong>Horario:</strong> 21:00 - 05:00 (viernes y sábados; Happy Hour de 19:00 a 21:00)<br>
		<strong>Precio:</strong> 💰💰 (la entrada se encarece después de las 23:00)<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (zona VIP en el altillo con mesas altas y sofás de cuero)<br>
		<strong>Especialidad:</strong> Cubatas, chupitos, cerveza de barril y servicio de botella en VIP.<br>
		<strong>Juegos:</strong> Ninguno (el baile es la actividad principal).<br>
		<strong>Ambiente:</strong> Festivo, ruidoso y cavernoso, con una estética industrial y minimalista: paredes de ladrillo visto pintadas de negro y gris, tuberías de cobre a la vista y suelo de hormigón pulido. Generalmente seguro, aunque a veces se producen peleas entre borrachos.<br>
		<strong>Música:</strong> Electrónica comercial, pop y reggaetón, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes de dieciocho a veinticinco años de Los Prados, estudiantes del instituto Río Profundo y algún turista despistado que busca un ambiente más auténtico.<br><br>
		<strong>Notas:</strong><br>
		✔️ Consta de pista principal (doscientos metros cuadrados), pista secundaria dedicada a música electrónica, dos bares y zona VIP en el altillo (acceso con pulsera especial que cuesta veinte libras extra).<br>
		✔️ Los fines de semana hay DJs invitados de la escena underground de Glasgow.<br>
		✔️ Capacidad aproximada: entre cuatrocientas y quinientas personas.<br>
		✔️ El guardarropa cuesta dos libras.<br>
		✔️ Personal fijo: quince empleados (gerente, DJs, porteros, camareros, bartenders y limpiador).`,
        pdfUrl: `#`,
        iconoTipo: `discoteca`
    },

	// ==================== HELADERÍAS

	// ==================== HOSPITALES

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS
	
	{
        xPx: 506,
        yPx: 578,
        nombre: `Instituto «Río Profundo»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd-sgoil «na h-Aibhne Doimhne»<br><strong>Pronunciación:</strong> /<em>Ard-sgoyl na Háv-ne Dóv-ne</em>/<br><strong>En inglés:</strong> Deep River High
		<br><br>
		El Instituto «Río Profundo» es el único centro de educación secundaria de Los Prados y uno de los más grandes y modernos de Dunbhròn. Situado en una calle ancha y arbolada, acoge a unos 900 alumnos de 12 a 18 años (GCSE y GCE). Su área de captación abarca todo Los Prados (norte, centro y sur), así como la parte este de Las Laderas (los alumnos que viven más cerca de este instituto que del suyo). Es un centro público y laico, construido en 2018 (el más moderno de la ciudad), con unas instalaciones punteras: aulas con pizarras digitales, laboratorios de ciencias equipados, talleres de tecnología, gimnasio, campo de fútbol de hierba artificial, pista de atletismo, y una biblioteca muy bien surtida. La dirección es joven y progresista, el profesorado está motivado (aunque con alta rotación, como en todos los institutos), y el alumnado es mayoritariamente de clase media (hijos de profesionales, funcionarios, pequeños empresarios), con una pequeña minoría de alumnos de Las Laderas (de familias trabajadoras) y algún inmigrante. El ambiente es el de un instituto moderno y ordenado, con buen nivel académico y pocos conflictos (comparado con otros distritos). Es conocido por su equipo de debate (ganador de competiciones regionales), su coro (que actúa en la catedral en Navidad) y su programa de intercambio con Francia y Alemania. La disciplina es estricta pero justa, y el acoso escolar es poco frecuente (aunque no inexistente).`,
        pdfUrl: `#`,
        iconoTipo: `instituto`
    },

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS
	
	{
        xPx: 640,
        yPx: 470,
        nombre: `Parque de Bomberos de los Prados Norte`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh Linntean a Tuath<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay LEEN-tchen a TOO-a</em>/<br><strong>En inglés:</strong> North Meadows Fire Station
		<br><br>
		El Parque de Bomberos de los Prados Norte es la principal estación de bomberos del distrito, encargada de cubrir la zona norte y centro-norte de Los Prados (aproximadamente dos tercios del distrito), así como las áreas colindantes de Los Jardines (al norte) y la parte noroeste de Las Laderas (al oeste). Está situado en una calle ancha y funcional del norte de Los Prados. Es un edificio moderno y bien equipado, construido en 2018 (siguiendo los estándares actuales), de una sola planta (más sótano), con una fachada de ladrillo claro y grandes puertas de garaje de color rojo. Tiene una plantilla de 30 bomberos profesionales que trabajan en turnos rotativos de 24 horas, más personal administrativo y de mantenimiento. Dispone de tres vehículos principales (un camión de bomberos urbano, una autoescala y una unidad de rescate), así como una furgoneta de apoyo y un pequeño taller mecánico. Es un servicio eficiente y bien valorado por los vecinos (Los Prados es un barrio seguro, con pocos incendios). El ambiente es el de un cuartel moderno y tranquilo, con compañerismo y rutina.`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },
	{
        xPx: 598,
        yPx: 645,
        nombre: `Parque de Bomberos de los Prados Sur`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh Pàircean Deas<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay PAHR-kyan JESS</em>/<br><strong>En inglés:</strong> South Meadows Fire Station
		<br><br>
		El Parque de Bomberos de los Prados Sur es la segunda estación de bomberos del distrito, más pequeña y especializada que la del norte, encargada de cubrir la zona sur y centro-sur de Los Prados (aproximadamente un tercio del distrito), así como la parte este de Los Jardines. Está situado en una calle ancha y funcional del sur de Los Prados. Es un edificio moderno y funcional, construido en 2020 (dos años después que el del norte), de una sola planta más sótano, con una fachada de ladrillo claro y grandes puertas de garaje de color rojo. Tiene una plantilla de 20 bomberos profesionales que trabajan en turnos rotativos de 24 horas, más personal administrativo. Dispone de dos vehículos principales (un camión de bomberos urbano pequeño y una furgoneta de rescate), así como un taller mecánico básico. Es un servicio eficiente, pero con menos recursos que el parque norte (porque la zona sur tiene menos densidad de población y menos riesgos). El ambiente es el de un cuartel pequeño y tranquilo, con mucho compañerismo.`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },

	// ==================== PUBS
	
	{
        xPx: 612,
        yPx: 528,
        nombre: `Pub «El Cofre Secreto»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Ciste Dhìomhair»<br><strong>Pronunciación:</strong> /an KISH-te YII-var/<br><strong>En inglés:</strong> The Secret Chest Pub<br><br>
		<br><br>
		«El Cofre Secreto» es un pub temático de piratas y aventuras, situado en una calle ancha y concurrida. Es uno de los pubs más populares entre los jóvenes, grupos de amigos y familias del distrito, gracias a su ambientación desenfadada y su terraza exterior. El local ocupa la planta baja de un edificio moderno de 2018, con una decoración que recrea la bodega de un barco pirata: paredes de madera oscura, cofres del tesoro decorativos, mapas antiguos, un esqueleto de pirata de plástico en la entrada, y una bandera de calavera (Jolly Roger) colgada del techo. La especialidad son los rones de todo el mundo (más de 30 marcas), los cubatas y los chupitos. Tienen dardos, billar y karaoke los viernes. La música es pop, rock y reggaetón a volumen alto, pero no atronador. El ambiente es festivo y seguro, aunque a veces se llena de estudiantes ruidosos. Es el lugar de moda entre los jóvenes de Los Prados.
		<br><br>
		<strong>Tipo:</strong> Pub de copas / Temático<br>
		<strong>Horario:</strong> 19:00 - 03:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Rones de todo el mundo.<br>
		<strong>Juegos:</strong> Dardos y billar.<br>
		<strong>Ambiente:</strong> Decorado con cofres del tesoro, mapas, velas y un esqueleto de pirata en la entrada. Ambiente de taberna pirata.<br>
		<strong>Música:</strong> Pop, rock y reggaetón, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Jóvenes, grupos de amigos y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los viernes hay noche de karaoke temático (canciones de piratas y marineros).<br>
		✔️ El local tiene dos plantas: la planta baja es más tranquila, la superior es la pista de baile.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },
	{
        xPx: 646,
        yPx: 642,
        nombre: `Pub «Los Rápidos de Dunbhròn»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «Na Sruthan Luatha Dhùn Bhròn»<br><strong>Pronunciación:</strong> /na SRUH-an LUU-a JUUN VRON/<br><strong>En inglés:</strong> The Rapids of Dunbhròn Pub<br><br>
		«Los Rápidos de Dunbhròn» es un pub deportivo de ambiente animado, situado en una calle ancha y concurrida. Es el pub de referencia para los aficionados al deporte, quinielistas y cuadrillas del distrito, que buscan un lugar con pantallas gigantes, apuestas deportivas y una buena variedad de cervezas de barril. El local es amplio y moderno (construido en 2018), con una decoración minimalista (paredes grises, suelos de hormigón pulido), pero con un toque acogedor gracias a las alfombras de colores y los sofás de cuero. La especialidad son las cervezas de barril tiradas por camareros profesionales, los chupitos y las tapas (patatas bravas, calamares, croquetas). Tienen dardos, billar, pantallas deportivas (más de 10) y máquinas de apuestas (con pantallas que emiten carreras de caballos y fútbol). El ambiente es ruidoso pero ordenado, con una clientela variada (desde jubilados hasta jóvenes). Es el lugar ideal para ver el partido sin perderse detalle.
		<br><br>
		<strong>Tipo:</strong> Pub deportivo / De copas<br>
		<strong>Horario:</strong> 12:00 - 02:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril tirada por camareros profesionales.<br>
		<strong>Juegos:</strong> Dardos, billar, pantallas deportivas y máquinas de apuestas.<br>
		<strong>Ambiente:</strong> Local amplio, con varias pantallas gigantes repartidas por todo el local. Ambiente de fútbol y apuestas. El aroma a cerveza y patatas fritas lo caracteriza.<br>
		<strong>Música:</strong> Pop y rock a volumen medio, que se apaga cuando hay un partido importante.<br>
		<strong>Clientela habitual:</strong> Aficionados al deporte, quinielistas y cuadrillas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las pantallas siempre emiten deportes: fútbol, rugby, dardos profesionales, boxeo y Fórmula 1.<br>
		✔️ Los domingos ofrecen Sunday Roast.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },

	// ==================== RESTAURANTES

	{
        xPx: 557,
        yPx: 506,
        nombre: `Restaurante «Sal del Himalaya»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Sal Himalaya»<br><strong>Pronunciación:</strong> /SAL hi-ma-LA-ya/<br><strong>En inglés:</strong> Himalayan Salt Restaurant<br><br>
		«Sal del Himalaya» es un restaurante de cocina fusión asiática (principalmente india y nepalí), situado en una calle ancha y arbolada. Ocupa la planta baja de un edificio moderno de 2018, con una fachada de ladrillo claro y grandes ventanales, decorada con motivos hindúes (elefantes, lotos) y un cartel de neón naranja con el nombre. Es un lugar muy popular entre las familias, parejas y amantes de la comida india del distrito, conocido por su autenticidad (el dueño es de origen indio) y su ambiente acogedor. La especialidad son los currys (pollo tikka masala, cordero rogan josh, butter chicken), los tandooris (pollo, cordero, pescado), los naans (de ajo, de queso, de mantequilla) y las samosas. Ofrecen cuatro niveles de picante: suave, medio, fuerte y hindú. Los martes hay menú degustación por 15 libras. Tienen opciones vegetarianas y veganas. El ambiente es tranquilo y familiar, con música tradicional india (sitar, tablas) a volumen bajo. Se aceptan reservas.
		<br><br>
		<strong>Tipo:</strong> Restaurante de cocina fusión<br>
		<strong>Horario:</strong> 13:00 - 16:00 / 19:00 - 22:30<br>
		<strong>Tipo de cocina:</strong> Fusión asiática / India<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Pollo tikka masala, curry de cordero, naan de ajo, arroz basmati y samosas.<br>
		<strong>Ambiente:</strong> Decorado con lámparas de colores, paredes de tonos cálidos y muebles de madera tallada. El aroma a especias (comino, cúrcuma, cilantro) lo impregna todo.<br>
		<strong>Clientela habitual:</strong> Familias, parejas y amantes de la comida india.<br><br>
		<strong>Notas:</strong><br>
		✔️ El nivel de picante se puede elegir (suave, medio, fuerte, hindú).<br>
		✔️ Los martes hay menú degustación (quince libras).<br>
		✔️ Se aceptan reservas.<br>
		✔️ Ofrecen opciones vegetarianas y veganas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 595,
        yPx: 583,
        nombre: `Restaurante «El Arco de Artemisa»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Bogha Artemis»<br><strong>Pronunciación:</strong> /BO-ga AR-te-mis/<br><strong>En inglés:</strong> Artemis’ Bow Restaurant<br><br>
		«El Arco de Artemisa» es un restaurante de cocina griega y mediterránea, situado en una calle ancha y arbolada. Ocupa la planta baja de un edificio moderno de 2018, con una fachada de ladrillo claro y grandes ventanales, decorada con columnas blancas (imitando la arquitectura griega) y un cartel de neón azul con el nombre. Es un lugar muy popular entre familias, grupos de amigos y amantes de la comida griega, conocido por su ambiente alegre y festivo, sus precios razonables y su terraza exterior. La especialidad son los souvlaki (pinchos de carne, especialmente de cordero), la moussaka, la ensalada griega, el tzatziki y la baklava (postre). También tienen una buena selección de vinos griegos (retsina, assyrtiko). Los fines de semana hay música griega en vivo (buzuki y bailes). El ambiente es acogedor y animado, con una decoración que evoca las islas griegas: paredes blancas y azules, fotografías de Santorini, y una réplica de un arco (el de Artemisa) en la entrada.
		<br><br>
		<strong>Tipo:</strong> Restaurante de cocina griega<br>
		<strong>Horario:</strong> 13:00 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Griega / Mediterránea<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Souvlaki (pinchos de carne) —especialmente el de cordero—, moussaka, ensalada griega, tzatziki y baklava.<br>
		<strong>Ambiente:</strong> Decorado con columnas blancas, banderas griegas y fotografías de Santorini. Ambiente alegre y animado.<br>
		<strong>Clientela habitual:</strong> Familias, grupos de amigos y amantes de la comida griega.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay música griega en vivo (buzuki y bailes).<br>
		✔️ Cuentan con terraza exterior con sombrillas.<br>
		✔️ Se aceptan reservas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 502,
        yPx: 619,
        nombre: `Restaurante «El Pozo sin Fondo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An t-Sloc Gun Bhonn»<br><strong>Pronunciación:</strong> /an SLOK gun VON/<br><strong>En inglés:</strong> The Bottomless Pit Restaurant<br><br>
		«El Pozo sin Fondo» es un restaurante de cocina tradicional escocesa de ambiente rústico y familiar, situado en una calle tranquila y arbolada. Es uno de los pocos restaurantes del distrito que ha logrado mantener la esencia de la comida casera escocesa (sin concesiones a la cocina de autor). Ocupa la planta baja de un edificio moderno de 2018, pero con una decoración que imita una antigua posada de las Highlands: paredes de piedra vista (falsa), vigas de madera, una chimenea de piedra (funcional en invierno) y una colección de objetos de época (viejos letreros de cerveza, herramientas de granja). La especialidad son el steak & ale pie (pastel de carne con cerveza negra), el fish & chips (con pescado fresco del día), el haggis, neeps & tatties (haggis con nabos y puré de patatas) y el Cullen skink (sopa de haddock ahumado). Los domingos ofrecen Sunday Roast. No admiten reservas (se come por orden de llegada). El ambiente es tranquilo y familiar, con clientela de vecinos del barrio, familias y algún turista despistado. Es el lugar ideal para comer comida escocesa de verdad.
		<br><br>
		<strong>Tipo:</strong> Restaurante de cocina tradicional<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 22:00<br>
		<strong>Tipo de cocina:</strong> Escocesa tradicional / Casera<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Steak & ale pie, fish & chips, haggis, neeps & tatties y Cullen skink.<br>
		<strong>Ambiente:</strong> Rústico, con paredes de piedra, una chimenea encendida en invierno y mesas de madera maciza. El aroma a guiso y cerveza lo impregna todo.<br>
		<strong>Clientela habitual:</strong> Vecinos, familias y turistas que buscan comida tradicional escocesa.<br><br>
		<strong>Notas:</strong><br>
		✔️ El haggis es casero (receta de la abuela).<br>
		✔️ Los domingos ofrecen Sunday Roast.<br>
		✔️ No se admiten reservas: se come por orden de llegada.<br>
		✔️ Cuentan con una pequeña terraza interior.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 708,
        yPx: 712,
        nombre: `Restaurante «El Glotón»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Sgàineadair»<br><strong>Pronunciación:</strong> /an SKAA-nya-dar/<br><strong>En inglés:</strong> The Glutton Restaurant<br><br>
		«El Glotón» es un restaurante de comida rápida americana especializado en hamburguesas gigantes, costillas BBQ, aros de cebolla y batidos espesos, situado en una calle ancha y concurrida. Es uno de los locales más populares entre los jóvenes, grupos de amigos y familias con niños del distrito, gracias a su ambiente desenfadado, sus precios asequibles y sus raciones enormes. El local es moderno y luminoso (construido en 2018), con una decoración de estilo industrial americano: paredes de ladrillo visto, tuberías de cobre a la vista, suelo de hormigón pulido, y una iluminación de neones (con formas de hamburguesas y patatas fritas). Las hamburguesas llevan nombres de pecados capitales (La Gula, La Pereza, La Soberbia, La Lujuria). Los martes hay dos por uno en hamburguesas. Ofrecen opciones vegetarianas (hamburguesa de garbanzos). El ambiente es ruidoso y festivo, con música rock a volumen medio. Es el lugar ideal para comer sin complejos.
		<br><br>
		<strong>Tipo:</strong> Restaurante de comida rápida / Hamburguesería<br>
		<strong>Horario:</strong> 12:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Americana (hamburguesas, costillas)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Hamburguesas gigantes (con diferentes toppings), costillas BBQ, aros de cebolla y batidos espesos.<br>
		<strong>Ambiente:</strong> Local moderno, con paredes de ladrillo visto, luces de neón y música rock a volumen medio. Sillas de cuero y mesas de madera.<br>
		<strong>Clientela habitual:</strong> Jóvenes, grupos de amigos y familias con niños.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las hamburguesas llevan nombres de pecados capitales (La Gula, La Pereza, La Soberbia).<br>
		✔️ Los martes hay dos por uno en hamburguesas.<br>
		✔️ Ofrecen opciones vegetarianas (hamburguesa de garbanzos).<br>
		✔️ Los batidos son caseros.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 557,
        yPx: 669,
        nombre: `Restaurante «La Tragicomedia»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Tràg-comadaidh»<br><strong>Pronunciación:</strong> /an TRAAG-ko-ma-di/<br><strong>En inglés:</strong> The Tragicomedy Restaurant<br><br>
		«La Tragicomedia» es un restaurante de autor de alta cocina con un marcado carácter teatral, situado en una calle tranquila y arbolada. Es uno de los restaurantes más exclusivos del distrito, frecuentado por parejas, amantes del teatro y críticos gastronómicos, que buscan una experiencia culinaria única con un toque dramático. Ocupa la planta baja de un edificio moderno de 2018, pero con una decoración teatral y elegante: cortinas de terciopelo rojo, máscaras de teatro (la sonrisa y la tristeza) en las paredes, un pequeño escenario con un telón, y una iluminación tenue que recuerda a un teatro. El menú es un menú degustación de ocho platos (fijo, no se puede elegir), inspirado en obras de teatro famosas (tragedias, comedias, dramas). Cada plato viene acompañado de una tarjeta que explica la obra que lo inspira. Los jueves hay cena-espectáculo (monólogos o pequeñas obras de teatro) en el pequeño escenario. La reserva es obligatoria. El ambiente es íntimo, sofisticado y ligeramente teatral.
		<br><br>
		<strong>Tipo:</strong> Restaurante de autor / Teatral<br>
		<strong>Horario:</strong> 20:00 - 23:00 (solo cenas)<br>
		<strong>Tipo de cocina:</strong> Fusión internacional / De autor<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Menú degustación de ocho platos, inspirados en obras de teatro (tragedias, comedias, dramas).<br>
		<strong>Ambiente:</strong> Teatral, con un pequeño escenario, cortinas de terciopelo rojo, máscaras de teatro en las paredes, luces tenues y música clásica de fondo.<br>
		<strong>Clientela habitual:</strong> Parejas, amantes del teatro y críticos gastronómicos.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los camareros visten de actores.<br>
		✔️ Cada plato viene acompañado de una tarjeta que explica la obra de teatro que lo inspira.<br>
		✔️ Los jueves hay cena-espectáculo (monólogos o pequeñas obras de teatro).<br>
		✔️ La reserva es obligatoria.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS

    {
        xPx: 567,
        yPx: 630,
        nombre: `Centro Comercial «Los Prados»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad Bhùthan «nan Linntean»<br><strong>Pronunciación:</strong> /<em>EE-un-at VOO-an «nan LEEN-tchen»</em>/<br><strong>En inglés:</strong> The Meadows Shopping Centre
		<br><br>
		El Centro Comercial «Los Prados» es el cuarto centro comercial más importante de Dunbhròn (por detrás de The Heights, Los Jardines y Costa Nova), y el principal centro de compras y ocio del distrito. Situado en el corazón de Los Prados, en una parcela de 15.000 m², fue inaugurado en 2018 y ha experimentado una ampliación en 2022. Es un edificio de tres plantas de cristal y acero, con una fachada moderna y luminosa, que alberga unas 80 tiendas, un cine de 8 salas (Odeon), una bolera de 16 pistas, un parque de bolas (para niños), un gimnasio (Pure Gym), un food court con 10 restaurantes de comida rápida (McDonald's, KFC, Subway, Pizza Hut, Costa Coffee, etc.), un supermercado (Tesco Metro), tiendas de moda (Primark, H&M, Mango, Bershka, Stradivarius, M&S), electrónica (Currys), videojuegos (GAME, CeX), librería (WHSmith), joyerías (Pandora, Claire's), tiendas de deportes (JD Sports, Sports Direct), salones de belleza (Supercuts, Nail Bar), y una zona de restauración con restaurantes de cadenas (Frankie & Benny's, Nando's, Wagamama). Es un centro limpio, seguro y familiar, frecuentado por los residentes de Los Prados, de Las Laderas y del sur de Los Jardines, que buscan una alternativa más asequible que los centros comerciales de lujo del norte. El ambiente es el de un centro comercial de barrio: animado los fines de semana, tranquilo entre semana, con mucha presencia de familias con niños y jóvenes. Es el lugar de encuentro por excelencia de los adolescentes del distrito.`,
        pdfUrl: `#`,
        iconoTipo: `centrocomercial`
    },

    // ==================== LAS LADERAS ====================
	
	// ==================== BAR

	{
        xPx: 398,
        yPx: 754,
        nombre: `Bar «La Pipa del Sabueso»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Pìob a’ Choin Fhiosrachaidh»<br><strong>Pronunciación:</strong> /PIIOB a JON HI-os-raj/<br><strong>En inglés:</strong> The Hound’s Pipe Bar<br><br>
		«La Pipa del Sabueso» es un bar de barrio y deportivo de los de toda la vida, situado en una calle empinada y ancha. Ocupa la planta baja de un edificio de piedra gris de tres plantas (construido en 1975 y reformado en 2005), con una fachada modesta y un cartel de neón amarillo desgastado. Es el típico bar de barrio de los que ya casi no quedan: barra de fórmica blanca, mesas de madera desgastadas, pantallas de televisión (siempre con deportes) y un olor a cerveza y a fritura que se ha quedado impregnado en las paredes. Es frecuentado por vecinos del barrio (jubilados, trabajadores de la construcción, pequeños comerciantes), algún estudiante de la universidad (de la Colina del Saber) y parados del Puerto Bajo que buscan un sitio económico y auténtico. La especialidad son las cervezas de barril baratas, el vino de cartón y las tapas calientes (calamares a la romana, croquetas, patatas bravas) que son gratis con la consumición. Los fines de semana, las pantallas retransmiten partidos de fútbol (y los jubilados discuten de política). Es el centro de reunión de los vecinos de Las Laderas.
		<br><br>
		<strong>Tipo:</strong> Bar de barrio / Deportivo<br>
		<strong>Horario:</strong> 12:00 - 01:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager), vino de cartón y tapas calientes (calamares, croquetas, patatas bravas).<br>
		<strong>Juegos:</strong> Dardos, máquinas tragaperras y pantallas deportivas.<br>
		<strong>Ambiente:</strong> Bar de toda la vida, con barra larga de madera, taburetes altos y mesas de fórmica. Es el centro de reunión de los vecinos de Las Laderas.<br>
		<strong>Música:</strong> Pop y rock suave, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Vecinos del barrio, trabajadores, jubilados y algún estudiante.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las tapas son gratis con la consumición.<br>
		✔️ Los viernes hay partidos de fútbol en las pantallas.<br>
		✔️ El dueño es un tipo simpático que conoce a todos los clientes por su nombre.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA
	
	{
        xPx: 352,
        yPx: 799,
        nombre: `Biblioteca «Robert Burns»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «Raibeart Burns»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan RA-pert BURNS</em>/<br><strong>En inglés:</strong> Robert Burns Library
		<br><br>
		La Biblioteca «Robert Burns» es la biblioteca pública del distrito de Las Laderas. Un pequeño pero acogedor centro de lectura situado en una calle empinada y tranquila. Ocupa un edificio de piedra gris de dos plantas, construido en 1975 (como parte del desarrollo del barrio) y reformado en 2010 con fondos municipales. Es una biblioteca modesta pero bien cuidada, con una colección de unos 12.000 volúmenes, especializada en literatura escocesa (especialmente la obra de Robert Burns), poesía, novela histórica y una pequeña sección de libros infantiles. Es un espacio íntimo y tranquilo, frecuentado por jubilados del barrio, estudiantes de la universidad (que bajan de la Colina del Saber), amas de casa, y algún que otro parado que busca un lugar cálido donde leer el periódico. Tiene una sala de estudio pequeña (con 6 mesas), ordenadores públicos (4, antiguos) y wifi gratuito. No tiene cafetería, solo una máquina de café de cápsulas. El ambiente es el de una biblioteca de barrio de los años 70, con mobiliario desgastado pero funcional, y un personal amable y cercano a los usuarios.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },

	// ==================== CAFÉ - BAR
	
	{
        xPx: 382,
        yPx: 777,
        nombre: `Cafetería «La Escalera Descendente»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Staidhre A’ Teàrnadh»<br><strong>Pronunciación:</strong> /an STAI-rə a TYA-rnah/<br><strong>En inglés:</strong> The Descending Stair Café<br><br>
		«La Escalera Descendente» es una cafetería de barrio de las de toda la vida, situada en una calle muy empinada, justo en mitad de una larga escalinata de piedra (de ahí el nombre). Ocupa la planta baja de un edificio de piedra gris de tres plantas (construido en 1975), con una fachada modesta y un cartel de madera pintada (desgastado) con el nombre. Es el típico café de barrio donde los vecinos, jubilados y trabajadores se toman un café antes de subir o bajar las escaleras. El local es muy pequeño, con más barra que mesas, y el suelo de baldosa hidráulica está desgastado por las botas de los clientes. Abre temprano (7:00) y cierra pronto (20:00). La especialidad son el café solo con leche, el té, los bocadillos calientes (de tortilla de patata, de salchicha, de jamón y queso) y la bollería industrial. No tienen wifi (ni falta que hace). Es el bar de los que madrugan en Las Laderas.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Bar de barrio<br>
		<strong>Horario:</strong> 08:00 - 20:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café solo con leche, té, bollería industrial y bocadillos de jamón y queso o de tortilla.<br>
		<strong>Ambiente:</strong> Local pequeño, con paredes de piedra vista, suelo de baldosa hidráulica y mesas de madera desgastadas. El aroma a café recién hecho lo impregna todo.<br>
		<strong>Música:</strong> Radio (música variada y noticias), a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Vecinos del barrio (mayores), jubilados y algún estudiante.<br><br>
		<strong>Notas:</strong><br>
		✔️ Está en una calle con escaleras (de ahí el nombre).<br>
		✔️ Es el típico café de toda la vida.<br>
		✔️ Los domingos abren solo hasta las dos de la tarde.<br>
		✔️ No disponen de wifi.<br>
		✔️ Solo se acepta efectivo.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 273,
        yPx: 805,
        nombre: `Cafetería «La Casa Amarilla»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Taigh Buidhe»<br><strong>Pronunciación:</strong> /an TAI BUI-ye/<br><strong>En inglés:</strong> The Yellow House Café<br><br>
		«La Casa Amarilla» es una cafetería-pastelería familiar y acogedora, situada en una calle empinada y tranquila. Ocupa la planta baja de un edificio de piedra gris de dos plantas, construido en 1975, pero con una fachada pintada de amarillo cálido (de ahí el nombre) que contrasta con la piedra del barrio. Es un local pequeño y luminoso, frecuentado por vecinos del barrio, jubilados, amas de casa y algún estudiante que busca un pastel casero y un ambiente tranquilo. La especialidad son los pasteles caseros (tarta de manzana, brownies, galletas de mantequilla, carrot cake), el café de filtro y el chocolate caliente. Los miércoles hay dos por uno en pasteles. Tienen una pequeña terraza en la entrada (con dos mesas). La dueña, una señora mayor llamada Mrs. Eilidh, es quien hornea los pasteles ella misma (recetas de su abuela). El ambiente es tranquilo y familiar, con música clásica o jazz suave de fondo. Se admiten mascotas en la terraza.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Pastelería<br>
		<strong>Horario:</strong> 09:00 - 21:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Pasteles caseros (tarta de manzana, brownies, galletas de mantequilla), café de filtro y chocolate caliente.<br>
		<strong>Ambiente:</strong> Acogedor, con paredes pintadas de amarillo cálido, manteles de cuadros y flores secas en las mesas. El aroma a canela y vainilla lo impregna todo.<br>
		<strong>Música:</strong> Música clásica o jazz suave, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Familias, vecinos y gente mayor.<br><br>
		<strong>Notas:</strong><br>
		✔️ La dueña es una señora mayor que hornea los pasteles ella misma.<br>
		✔️ Los miércoles hay dos por uno en pasteles.<br>
		✔️ Cuentan con una pequeña terraza en la entrada.<br>
		✔️ Se admiten mascotas.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },


	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD
	
	    {
        xPx: 256,
        yPx: 757,
        nombre: `Centro de Salud de Las Laderas`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte nan Leòidean<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te nan LYAW-tchen</em>/<br><strong>En inglés:</strong> The Slopes Health Centre
		<br><br>
		El Centro de Salud de Las Laderas es uno de los dos centros médicos del distrito, encargado de atender a la población de la mitad izquierda (oeste) del distrito (aproximadamente 7.000 habitantes). Está situado en una calle ancha y en pendiente. Ocupa un edificio de hormigón y ladrillo de dos plantas, construido en 1985 (y reformado en 2010), con una fachada funcional y algo desgastada. Es un centro pequeño y desbordado, con recursos limitados y una plantilla quemada, que atiende a una población envejecida y con problemas crónicos (hipertensión, diabetes, artritis), así como a algunos trabajadores de la construcción y parados del Puerto Bajo. Tiene consultas de medicina general, pediatría, enfermería, un pequeño servicio de urgencias (básico) y una sala de curas. No tiene radiología ni fisioterapia (derivan al otro centro de salud del distrito). El ambiente es el de un ambulatorio público con prisas: colas, carteles desgastados, revistas viejas, y personal con poco tiempo.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },
	{
        xPx: 378,
        yPx: 825,
        nombre: `Centro de Salud de Las Laderas Este`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte nan Leòidean an Ear<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te nan LYAW-tchen an ER</em>/<br><strong>En inglés:</strong> East Slopes Health Centre
		<br><br>
		El Centro de Salud de Las Laderas Este es el segundo centro médico del distrito, encargado de atender a la población de la mitad derecha (este) del distrito (aproximadamente 6.000 habitantes). Está situado en una calle ancha y relativamente llana del sureste. Ocupa un edificio de hormigón y ladrillo de dos plantas, construido en 2008 (más moderno que el otro centro), con una fachada funcional y mejor conservada. Es un centro más pequeño y tranquilo que su homólogo del oeste, con menos pacientes (la población del este es más joven y tiene menos problemas crónicos). Tiene consultas de medicina general, pediatría, enfermería, un pequeño servicio de urgencias (básico) y una sala de curas. No tiene radiología ni fisioterapia (derivan al centro de Las Laderas o a Los Prados). El personal es más joven y menos quemado (aunque con menos recursos). El ambiente es más ordenado y menos caótico.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    }, 

	// ==================== COLEGIOS
	
	 {
        xPx: 384,
        yPx: 730,
        nombre: `Colegio «Robledal»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Doire nan Darach»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Do-re nan Da-raj</em>/<br><strong>En inglés:</strong> Oakwood Primary
		<br><br>
		El Colegio «Robledal» es uno de los dos centros de educación primaria de Las Laderas, encargado de atender a la población infantil de la mitad norte del distrito (aproximadamente 180 alumnos de 4 a 11 años), aunque ocasionalmente recibe alumnos del sur (por motivos de cercanía o necesidades especiales). Está situado en una calle empinada y arbolada. Ocupa un edificio de piedra gris y ladrillo de dos plantas, construido en 1975 (reformado en 2005), con un patio de cemento agrietado y una valla metálica oxidada. Es un centro público y laico, con una dirección desbordada y resignada, una plantilla de profesores quemada (alta rotación, bajas por estrés) y recursos mínimos (libros de texto desfasados, ordenadores viejos, material deportivo escaso). El ambiente es triste, ruidoso y a veces violento: peleas entre alumnos, absentismo escolar, casos de malnutrición y violencia doméstica que los profesores detectan en los niños. El colegio es conocido por su comedor social (donde muchos niños hacen la única comida completa del día) y por el huerto escolar, una iniciativa de una profesora jubilada que aún viene como voluntaria. Es el reflejo de la pobreza de Las Laderas.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
	{
        xPx: 235,
        yPx: 842,
        nombre: `Colegio «San Alderic de Dunbhròn»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Sgoil «Naomh Ailderic Dhùn Bhròn»<br><strong>Pronunciación:</strong> /noav AL-der-ik DUUN VRON/<br><strong>En inglés:</strong> St. Alderic School of Dunbhròn
		<br><br>
		El Colegio «San Alderic de Dunbhròn» es el segundo centro de educación primaria de Las Laderas, encargado de atender a la población infantil de la mitad sur del distrito (aproximadamente 160 alumnos de 4 a 11 años), aunque ocasionalmente recibe alumnos del norte (por motivos de cercanía o necesidades especiales). Está situado en una calle empinada y relativamente ancha del suroeste de Las Laderas. Ocupa un edificio de piedra gris y ladrillo de dos plantas, construido en 1980 (reformado en 2010), con un patio de cemento (mejor cuidado que el del colegio «Robledal») y una valla metálica en buen estado. Es un centro público y laico, con una dirección joven y comprometida, una plantilla de profesores vocacionales (aunque con alta rotación) y recursos modestos (pizarras digitales en algunas aulas, ordenadores portátiles compartidos, biblioteca pequeña pero cuidada). El ambiente es menos conflictivo que en el otro colegio (los alumnos del este son de familias un poco más acomodadas, aunque todavía hay pobreza), pero no está exento de problemas (absentismo, algún caso de violencia doméstica). Es conocido por su programa de apoyo a familias desfavorecidas (desayunos gratis) y por su coro escolar (que actúa en la iglesia de San Alderic, en el Casco Antiguo). Es el colegio preferido por las familias de clase trabajadora de Las Laderas Este.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },

	// ==================== COMISARÍA
	
	 {
        xPx: 356,
        yPx: 762,
        nombre: `Comisaría de Las Laderas`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Tigh an Lagha nan Leòidean<br><strong>Pronunciación:</strong> /<em>Tay an LAY-a nan LYAW-tchen</em>/<br><strong>En inglés:</strong> The Slopes Police Station
		<br><br>
		La Comisaría de Las Laderas es una pequeña pero funcional dependencia policial que da servicio a todo el distrito: cubre las necesidades básicas de un barrio trabajador y tranquilo. El edificio se construyó entre 2008 y 2010, dentro del plan de renovación de infraestructuras del distrito, y sustituyó a una vieja comisaría de los años sesenta que ya se había quedado obsoleta y pequeña. Los agentes son los mismos de siempre (muchos ya trabajaban en la antigua): conocen a todo el mundo, saben qué familias dan problemas, qué borrachos se pelean los fines de semana y qué anciana hay que ir a ver porque lleva dos días sin asomarse a la ventana. No están preparados para lo sobrenatural. Cuando ocurre algo que no encaja en su manual, lo archivan como «sugestión» o «alucinación colectiva». Si alguien, en instancias superiores, considera que el caso merece atención, se ocupa de ello otra gente, de la que los agentes de Las Laderas nunca han oído hablar directamente. Solo saben que, de vez en cuando, llega un tipo con traje y carpeta, pide ver ciertos expedientes, y luego esos expedientes desaparecen del archivo sin dejar rastro.`,
        pdfUrl: `#`,
        iconoTipo: `comisaria`
    },

	// ==================== HELADERÍAS

	// ==================== HOSPITALES

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS
	
	{
        xPx: 315,
        yPx: 815,
        nombre: `Instituto «Acantilado del Norte»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd-sgoil «a' Chreagain a Tuath»<br><strong>Pronunciación:</strong> /<em>Ard-sgoyl *a* Jré-kan *a* Tu-a</em>/<br><strong>En inglés:</strong> Northcliff High School
		<br><br>
		El Instituto «Acantilado del Norte» es el único centro de educación secundaria del distrito de Las Laderas. Un instituto público de los que ya no se construyen: grandes, funcionales, con el presupuesto justo y el profesorado justo. Atiende a unos 600 estudiantes de entre 12 y 18 años, procedentes en su inmensa mayoría de Las Laderas. Aunque también de Los Prados cuyos padres no pueden permitirse la privada o buscan «mantener a sus hijos con los pies en la tierra». El edificio se construyó entre 2008 y 2010, dentro de la misma renovación urbanística que dio al barrio sus bloques de pisos y la nueva comisaría. Es moderno en cuanto a estructura, pero ya muestra signos de desgaste: pintura desconchada, mobiliario arañado, baños que huelen mal los viernes por la tarde. El profesorado es mayoritariamente veterano (quemado por los años, pero con oficio). Los adolescentes fuman en los rincones del patio. La orientadora ha notado que algunos alumnos faltan a clase y que, cuando vuelven, tienen ojeras y arañazos. Cree que son peleas callejeras o problemas familiares. No pregunta demasiado. Si los padres no se implican, ella no puede hacer nada.`,
        pdfUrl: `#`,
        iconoTipo: `instituto`
    },

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS
	
	{
        xPx: 325,
        yPx: 772,
        nombre: `Parque de Bomberos de Las Laderas`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh nan Leòidean<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay nan LYAW-tchen</em>/<br><strong>En inglés:</strong> The Slopes Fire Station
		<br><br>
		El Parque de Bomberos de Las Laderas es una pequeña estación que cubre el distrito y la parte baja del bosque (hasta donde llegan los caminos de tierra). Es una instalación modesta, acorde con un barrio trabajador: funcional, sin lujos, con vehículos que ya han visto mejores días y un personal reducido pero experimentado. Los bomberos de Las Laderas están acostumbrados a incendios en viviendas (calefacciones defectuosas, cocinas, cortocircuitos) y a accidentes de tráfico en las carreteras de acceso. También han tenido que rescatar a excursionistas perdidos en el bosque. No les gusta adentrarse demasiado cuando la niebla es espesa. El edificio se construyó entre 2008 y 2010, como el resto de infraestructuras públicas del distrito, y sustituyó a una vieja estación de los años 70 que se había quedado pequeña y obsoleta. El personal es competente, conoce el barrio y a sus vecinos, y mantiene una relación cordial con la comisaría (comparten café y chismes). No tienen formación específica para lo sobrenatural. Cuando ocurre algo raro en el bosque, lo atribuyen a la niebla, al cansancio o a "historias de viejas".`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },

	// ==================== PUBS
	
	{
        xPx: 282,
        yPx: 867,
        nombre: `Pub «La Condena Eterna»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Damnadh Sìorraidh»<br><strong>Pronunciación:</strong> /an DAM-nah SHIOR-ai/<br><strong>En inglés:</strong> The Eternal Damnation Pub<br><br>
		El Pub «La Condena Eterna» es el único pub «duro» del distrito. Y también uno de los pocos locales nocturnos. Está en la parte baja para no molestar a los vecinos con el ruido. Es oscuro, con paredes negras, carteles de grupos de los ochenta y calaveras de plástico decorativas. La música es rock duro y metal, a volumen alto. El ambiente es de bar de moteros, pero sin la violencia de otros locales de la ciudad (la peña se conoce y se respeta). Es frecuentado por los jóvenes alternativos del barrio y por algunos trabajadores de la construcción que quieren desconectar. Es el lugar más probable para encontrar a alguien que haya visto algo raro en el bosque, aunque habrá que ganarse su confianza y pagar un par de rondas. El edificio es antiguo (de los pocos que sobrevivieron a la renovación urbana de 2008-2010), una construcción de piedra de finales del siglo XIX que fue primero una herrería, luego un almacén, y desde 1995 es un pub. El dueño actual, un roquero veterano llamado "Rob", lo compró en 2005 y le dio su carácter actual.
		<br><br>
		<strong>Tipo:</strong> Pub rockero / Alternativo<br>
		<strong>Horario:</strong> 19:00 - 03:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza negra.<br>
		<strong>Juegos:</strong> Dardos y billar.<br>
		<strong>Ambiente:</strong> Oscuro, con paredes negras, carteles de grupos de los ochenta y calaveras de plástico decorativas. Es el único pub "duro" de Las Laderas.<br>
		<strong>Música:</strong> Rock duro, metal y punk, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Rockeros, moteros, alternativos y gente joven del barrio.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los jueves hay noche de micrófono abierto (rock y metal).<br>
		✔️ El local es pequeño y se llena rápidamente.<br>
		✔️ No se sirve comida caliente, solo frutos secos y patatas fritas de bolsa.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },

	// ==================== RESTAURANTES

	{
        xPx: 406,
        yPx: 721,
        nombre: `Restaurante «El Cristal de Hielo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Criostal Deighe»<br><strong>Pronunciación:</strong> /KRIS-tal JAI-he/<br><strong>En inglés:</strong> The Ice Crystal Restaurant<br><br>
		El Restaurante «El Cristal de Hielo» es el establecimiento más caro y moderno de Las Laderas. Aunque sigue siendo asequible para los estándares de otros distritos. Un restaurante de cocina fusión asiático-escocesa, situado en la parte baja del barrio. Su especialidad es el sushi de salmón ahumado, las gyozas de venado y los noodles con verduras. El dueño es un cocinero escocés que vivió en Japón durante una década y regresó a su tierra natal para abrir este negocio. El local ocupa la planta baja de un bloque de pisos construido entre 2008 y 2010, pero reformado con un diseño moderno y minimalista que contrasta con el resto del distrito. Es frecuentado por vecinos de Las Laderas con algo más de poder adquisitivo, parejas jóvenes, y algún que otro turista despistado que ha subido desde Los Prados. Es el único lugar del barrio donde se puede comer sushi, y eso ya es una declaración de intenciones.
		<br><br>
		<strong>Tipo:</strong> Restaurante de cocina fusión<br>
		<strong>Horario:</strong> 13:00 - 16:00 / 19:00 - 22:30<br>
		<strong>Tipo de cocina:</strong> Fusión asiática / Escocesa<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Sushi de salmón ahumado, gyozas de venado, noodles con verduras y salsa de soja, y tempura de langostinos.<br>
		<strong>Ambiente:</strong> Moderno, con paredes de cristal, mesas de madera clara e iluminación tenue. El aroma a jengibre y soja lo impregna todo.<br>
		<strong>Clientela habitual:</strong> Vecinos, parejas y gente joven.<br><br>
		<strong>Notas:</strong><br>
		✔️ El dueño es un cocinero escocés que vivió en Japón.<br>
		✔️ Los sábados ofrecen menú degustación de sushi.<br>
		✔️ Se aceptan reservas.<br>
		✔️ Ofrecen opciones vegetarianas.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 290,
        yPx: 746,
        nombre: `Restaurante «El Reloj de Cuco»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Uaireadair na Cuthaig»<br><strong>Pronunciación:</strong> /UA-re-dar na KU-haig/<br><strong>En inglés:</strong> The Cuckoo Clock Restaurant<br><br>
		El Restaurante «El Reloj de Cuco» es un establecimiento de cocina alemana (bávara). Un rincón de Baviera en un barrio obrero escocés. Su especialidad es el codillo de cerdo (Schweinshaxe), las salchichas alemanas (Bratwurst), el chucrut, los pretzels y la cerveza de trigo (Weissbier). El local está decorado con relojes de cuco colgados en las paredes, banderas de Baviera y manteles de cuadros rojos y blancos. El ambiente es festivo y animado, sobre todo los fines de semana, cuando hay música en vivo (acordeón y cantantes alemanes). El restaurante ocupa la planta baja de un edificio de piedra de los años 20 (de los pocos que sobrevivieron a la renovación urbana de 2008-2010), reformado en 2012 para darle el aspecto de taberna bávara. Es frecuentado por familias, grupos de amigos y amantes de la comida alemana. Es el único lugar del distrito donde se puede escuchar un acordeón mientras se come chucrut, y eso ya es una seña de identidad.
		<br><br>
		<strong>Tipo:</strong> Restaurante alemán / Bávaro<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Alemana (bávara)<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Codillo de cerdo (Schweinshaxe), salchichas alemanas (Bratwurst), chucrut, pretzels y cerveza de trigo (Weissbier).<br>
		<strong>Ambiente:</strong> Decorado con relojes de cuco colgados en las paredes, banderas de Baviera y manteles de cuadros rojos y blancos. Ambiente festivo y animado.<br>
		<strong>Clientela habitual:</strong> Familias, grupos de amigos y amantes de la comida alemana.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana hay música en vivo (acordeón y cantantes alemanes).<br>
		✔️ La cerveza de trigo es importada.<br>
		✔️ Los niños disponen de un menú especial.<br>
		✔️ Cuentan con terraza exterior.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 274,
        yPx: 829,
        nombre: `Restaurante «El Erizo Feliz»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Gràineag Shona»<br><strong>Pronunciación:</strong> /an GRAI-nyak SHO-na/<br><strong>En inglés:</strong> The Happy Hedgehog Restaurant<br><br>
		El Restaurante «El Erizo Feliz» es el típico restaurante de comida casera y familiar. El más modesto de los tres restaurantes de Las Laderas, pero también el más querido por los vecinos. Su especialidad es el menú del día (doce libras, bebida incluida), el fish & chips, las hamburguesas y el pescado a la plancha. El local es pequeño, acogedor y está decorado con dibujos de erizos en las paredes. Es frecuentado por familias con niños, vecinos del barrio y jubilados que buscan una comida honesta a un precio justo. El dueño es un matrimonio de mediana edad que regenta el negocio desde que lo heredaron de los padres de él hace veinte años. El restaurante ocupa la planta baja de un bloque de pisos construido entre 2008 y 2010, pero la decoración interior es tradicional, sin concesiones a la modernidad.
		<br><br>
		<strong>Tipo:</strong> Restaurante de comida casera / Familiar<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 22:00<br>
		<strong>Tipo de cocina:</strong> Escocesa casera / Internacional<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Menú del día (primeros, segundos, postre y bebida), fish & chips, hamburguesas y pescado a la plancha.<br>
		<strong>Ambiente:</strong> Familiar y acogedor, con paredes pintadas con dibujos de erizos, mesas de madera y sillas de colores. El aroma a comida casera lo caracteriza.<br>
		<strong>Clientela habitual:</strong> Familias con niños, vecinos y jubilados.<br><br>
		<strong>Notas:</strong><br>
		✔️ El menú del día cuesta doce libras (bebida incluida).<br>
		✔️ Los niños menores de diez años comen gratis los domingos con la compra de un menú adulto.<br>
		✔️ Cuentan con un pequeño rincón infantil con juguetes y libros.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS    
    

    // ==================== LOS JARDINES ====================
	
	// ==================== BAR

	{
        xPx: 306,
        yPx: 585,
        nombre: `Bar «La Silla del Carpintero»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Cathair a’ Chleasaiche Fiodha»<br><strong>Pronunciación:</strong> /KA-hir a KLEA-sha-je FI-o-ha/<br><strong>En inglés:</strong> The Carpenter’s Chair Bar<br><br>
		El Bar «La Silla del Carpintero» es el bar de toda la vida de Los Jardines. Aunque "de toda la vida" en un distrito tan nuevo como este significa desde que se construyó el barrio. Es un establecimiento tradicional: barra de madera, taburetes altos, mesas de fórmica, pantallas deportivas a volumen bajo, y tapas gratis con la consumición. Es frecuentado por los vecinos jubilados del distrito, por los padres y madres del cercano colegio «Lago del Espejo», y por algún trabajador de la zona que busca un lugar tranquilo para comer a mediodía. El dueño es un carpintero jubilado que montó el negocio al mismo tiempo que se construían los edificios del barrio, y sigue siendo el alma del local. Es el antídoto perfecto contra la frialdad y la cursilería de otros establecimientos de Los Jardines: aquí no hay manteles de lino ni cócteles de autor, hay cerveza de barril, tapas de croquetas y conversación de barrio.<br>
		El local ocupa la planta baja de un edificio de estilo eduardiano (ladrillo rojo claro, tejado de pizarra) construido en 2023, pero diseñado para parecer de principios del siglo XX. Es uno de los pocos sitios del distrito donde los vecinos se saludan por su nombre y donde el dueño conoce las bebidas de cada cliente antes de que las pidan.
		<br><br>
		<strong>Tipo:</strong> Bar de barrio / Tradicional<br>
		<strong>Horario:</strong> 11:00 - 01:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager y ales), vinos de la casa y tapas calientes (croquetas, calamares, tortilla).<br>
		<strong>Juegos:</strong> Dardos, máquinas tragaperras y pantallas deportivas (a volumen bajo).<br>
		<strong>Ambiente:</strong> Bar de toda la vida, con barra de madera, taburetes altos y mesas de fórmica. Es el bar de los vecinos mayores de Los Jardines.<br>
		<strong>Música:</strong> Pop y rock suave, a volumen medio-bajo.<br>
		<strong>Clientela habitual:</strong> Vecinos jubilados, trabajadores de la zona y padres y madres del colegio cercano.<br><br>
		<strong>Notas:</strong><br>
		✔️ Las tapas son gratis con la consumición.<br>
		✔️ Es famoso por sus croquetas caseras.<br>
		✔️ Los viernes hay partidos de fútbol en las pantallas, pero sin ruido excesivo.<br>
		✔️ El dueño es un carpintero jubilado.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },
	{
        xPx: 452,
        yPx: 687,
        nombre: `Bar «La Bici de Montaña»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «Baidhsagal Beinne»<br><strong>Pronunciación:</strong> /BAI-sa-gal BEIN-ye/<br><strong>En inglés:</strong> Mountain Bike Bar<br><br>
		El Bar «La Bici de Montaña» es un establecimiento temático único en Los Jardines, especializado en deportes outdoor y ciclismo de montaña. Es frecuentado por ciclistas, deportistas, jóvenes y familias que buscan un ambiente diferente al de los cafés elegantes y pubs distinguidos del distrito. Su especialidad son las cervezas artesanas (en botella), los batidos de proteínas, los bocadillos saludables (pavo con queso, ensaladas) y las tapas ligeras. El local está decorado con bicicletas de montaña colgadas en las paredes, cascos, mapas de rutas y fotografías de paisajes escoceses. Los fines de semana organizan rutas en bici que salen desde el bar, y los jueves hay noche de cine de deportes extremos. El dueño es un ex-ciclista profesional retirado, apasionado del mountain bike, que quiso crear un punto de encuentro para los amantes de las dos ruedas y la naturaleza. El local ocupa la planta baja de un edificio moderno de 2023, diseñado con un estilo industrial que contrasta con la arquitectura eduardiana predominante en el distrito.
		<br><br>
		<strong>Tipo:</strong> Bar temático / Deportes outdoor<br>
		<strong>Horario:</strong> 10:00 - 00:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cerveza artesana (en botella), batidos de proteínas, bocadillos de pavo con queso y ensaladas.<br>
		<strong>Juegos:</strong> Dardos y futbolín.<br>
		<strong>Ambiente:</strong> Decorado con bicicletas de montaña colgadas en las paredes, cascos y mapas de rutas. Ambiente deportivo y juvenil.<br>
		<strong>Música:</strong> Rock e indie, a volumen medio.<br>
		<strong>Clientela habitual:</strong> Ciclistas, deportistas, jóvenes y familias.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los fines de semana organizan rutas en bici que salen desde el bar.<br>
		✔️ Cuentan con un taller de reparación de bicis básico.<br>
		✔️ Las ensaladas son caseras.<br>
		✔️ Los jueves hay noche de cine de deportes extremos.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA
	
    {
        xPx: 476,
        yPx: 699,
         nombre: `Biblioteca «Los Jardines»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «nan Gàrraidhean»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan nan GA-ree-an</em>/<br><strong>En inglés:</strong> The Gardens Library
		<br><br>
		La Biblioteca «Los Jardines» es la principal biblioteca pública del distrito, una institución cultural que da servicio a una población de clase media-alta exigente y acostumbrada a la calidad. No es una biblioteca modesta ni funcional: es un edificio señorial de ladrillo rojo de principios del siglo XX (construido originalmente como escuela, luego como centro cívico, y finalmente reconvertido en biblioteca en 2024), con una sala de lectura silenciosa y elegante, sillones de cuero, una colección bien seleccionada (clásicos, novedades, historia local, y una sorprendente sección de folclore), y un bibliotecario que es también el depositario de los archivos históricos del distrito. Es un lugar tranquilo, casi solemne, frecuentado por jubilados de alto poder adquisitivo, estudiantes universitarios (que buscan un lugar silencioso para estudiar), y algún que otro investigador o curioso. La biblioteca es grande para los estándares del distrito, y está a la altura de las expectativas de sus usuarios: ordenada, limpia, bien iluminada, con un fondo actualizado y un servicio eficiente. Pero bajo esa fachada de respetabilidad cultural, la biblioteca guarda secretos: archivos que nadie consulta, mapas antiguos que muestran algo más que calles, y una colección de folclore que esconde historias que los vecinos prefieren no recordar.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },

	// ==================== CAFÉ - BAR
	
	{
        xPx: 379,
        yPx: 614,
        nombre: `Cafetería «San Miguel»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «Naomh Mìcheal»<br><strong>Pronunciación:</strong> /noav MEE-hal/<br><strong>En inglés:</strong> St. Michael Café<br><br>
		La Cafetería «San Miguel» es el establecimiento más elegante y concurrido de Los Jardines. Un lugar de moda entre los vecinos de clase media-alta que buscan un café de especialidad, pastelería fina y un ambiente distinguido pero acogedor. Está situada en la Avenida Central, la arteria comercial del distrito, y cuenta con una terraza exterior con vistas a un pequeño jardín público. Es frecuentada por profesionales liberales que trabajan en la zona (médicos, abogados, arquitectos), familias del distrito, profesores del cercano instituto «Prado de la Fuente», y jubilados de alto poder adquisitivo que vienen a leer el periódico y a socializar. Es el lugar donde se ven y se dejan ver, donde se conciertan citas de negocios discretas, y donde se difunden los chismes del barrio con una sonrisa educada y una taza de café en la mano. El local ocupa la planta baja de un edificio de estilo eduardiano (ladrillo rojo claro) construido en 2023 como parte del desarrollo residencial de Los Jardines, pero diseñado para parecer de principios del siglo XX. La cafetería abrió sus puertas en 2024 y rápidamente se convirtió en un referente del distrito gracias a la calidad de su café (de especialidad, tostado en Edimburgo) y de su pastelería (casera, hecha por una pastelera francesa contratada por los dueños).
		<br><br>
		<strong>Tipo:</strong> Cafetería / Pastelería<br>
		<strong>Horario:</strong> 08:00 - 20:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de especialidad, pastelería fina (croissants, napolitanas, tartas de frutas) y zumos naturales.<br>
		<strong>Ambiente:</strong> Elegante pero acogedor, con paredes de tonos claros, mesas de mármol blanco, sillas de madera barnizada y grandes ventanales que dan a un pequeño jardín.<br>
		<strong>Música:</strong> Jazz suave o bossa nova, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Vecinos de Los Jardines, familias, profesores del cercano instituto y jubilados de clase media-alta.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuentan con terraza exterior con vistas al jardín.<br>
		✔️ Los pasteles son caseros.<br>
		✔️ Los domingos ofrecen brunch hasta la una de la tarde.<br>
		✔️ Se admiten perros en la terraza.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 503,
        yPx: 665,
        nombre: `Cafetería «La Contraparada»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Frith-Stad»<br><strong>Pronunciación:</strong> /an FRI-stad/<br><strong>En inglés:</strong> The Counterstop Café<br><br>
		La Cafetería «La Contraparada» es una tetería y cafetería de ambiente íntimo y bohemio. Un refugio de tranquilidad en el elegante y a veces asfixiante distrito de Los Jardines. Especializada en infusiones y tés de hojas sueltas (más de treinta variedades), chocolate caliente artesano y pasteles veganos, es el lugar favorito de las parejas, los grupos de amigas que buscan conversación, y la gente que huye del bullicio de los cafés de moda. Su lema no escrito: «aquí no hay wifi para fomentar la conversación». El local es pequeño, íntimo, decorado con paredes empapeladas de flores, lámparas de papel y sofás de terciopelo. Está en una calle tranquila del distrito, alejada de la Avenida Central, y es frecuentado por una clientela fiel que busca calidad, silencio y buenos tés. La dueña es una mujer de mediana edad, apasionada de las infusiones y de la lectura, que ha creado un espacio único en el distrito: una tetería que parece sacada de otra época.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Tetería<br>
		<strong>Horario:</strong> 09:00 - 21:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Infusiones, tés de hojas sueltas (más de treinta variedades), chocolate caliente artesano y pasteles veganos.<br>
		<strong>Ambiente:</strong> Íntimo, con paredes empapeladas de flores, lámparas de papel y sofás de terciopelo. El aroma a hierbas y canela lo impregna todo.<br>
		<strong>Música:</strong> Música clásica o folk, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Parejas, grupos de amigas y gente que busca tranquilidad.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los martes hay tarde de juegos de mesa (ajedrez, dominó, cartas).<br>
		✔️ Cuentan con una pequeña biblioteca de préstamo.<br>
		✔️ No disponen de wifi (para fomentar la conversación).<br>
		✔️ El té se sirve en teteras de porcelana.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },

	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD
	
	{
        xPx: 469,
        yPx: 636,
        nombre: `Centro de Salud de Los Jardines Este`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte nan Gàrraidhean an Ear<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te nan GA-ree-an an ER</em>/<br><strong>En inglés:</strong> East Gardens Health Centre
		<br><br>
		El Centro de Salud de Los Jardines Este es el segundo ambulatorio del distrito. Está ubicado en el límite oriental de Los Jardines, cerca de la frontera con Los Prados. Es un centro más pequeño y modesto que el principal, diseñado para descongestionar el centro de salud de la Avenida Central y para dar servicio a los residentes de la parte este del distrito, así como a algunos vecinos de Los Prados que prefieren venir aquí por la menor afluencia de pacientes. El edificio es moderno (construido entre 2022 y 2024, inaugurado en marzo de 2024), funcional y sin grandes pretensiones estéticas (a diferencia del centro principal, que imita el estilo eduardiano, este es de estilo moderno-industrial: ladrillo caravista, hormigón visto, grandes ventanales). Ofrece atención primaria, pediatría, enfermería y pequeñas cirugías ambulatorias, pero no tiene ginecología ni fisioterapia (derivan al centro principal). El personal es competente y amable, pero está más desbordado que en el centro principal (menos médicos para casi tantos pacientes). Es un lugar tranquilo, casi anodino, pero también es la puerta de entrada a Los Jardines para los pacientes de Los Prados, un barrio de clase trabajadora-media que contrasta con la elegancia del distrito. Los médicos de aquí ven más variedad de pacientes (desde ejecutivos de Los Jardines hasta obreros de Los Prados y Las Laderas), y por tanto también más problemas: enfermedades crónicas mal controladas, pacientes que no pueden pagar los medicamentos, y una incidencia ligeramente mayor de violencia doméstica. Es el centro de salud «menos pijo» de Los Jardines, y eso se nota.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },
    {
        xPx: 359,
        yPx: 575,
        nombre: `Centro de Salud de Los Jardines`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-slàinte nan Gàrraidhean<br><strong>Pronunciación:</strong> /<em>EE-un-at SLAUN-te nan GA-ree-an</em>/<br><strong>En inglés:</strong> The Gardens Health Centre
		<br><br>
		El Centro de Salud de Los Jardines es el principal ambulatorio del distrito. Un centro médico moderno y bien equipado que atiende a una población de clase media-alta exigente y acostumbrada a la calidad. No es un hospital (no tiene urgencias ni quirófanos), pero ofrece atención primaria, pediatría, ginecología, pequeñas cirugías ambulatorias, fisioterapia, y servicios de enfermería. Es un edificio amplio, luminoso y funcional, construido entre 2022 y 2024 como parte del desarrollo del distrito, y diseñado para integrarse en la estética eduardiana del barrio (ladrillo rojo claro, tejado de pizarra, grandes ventanales). El personal es competente y amable, los médicos de cabecera conocen a sus pacientes desde que el centro abrió, y las listas de espera son razonables (para los estándares del sistema de salud público escocés). Los pacientes son mayoritariamente residentes del distrito, con enfermedades crónicas controladas y pocas urgencias reales. Los médicos apenas ven casos de violencia, excepto algún niño con fractura por caerse de un árbol o algún anciano con magulladuras «domésticas». No preguntan demasiado. Es un barrio tranquilo, y prefieren que siga siéndolo. Sin embargo, bajo esa fachada de tranquilidad y eficiencia, el centro de salud es también un lugar donde se guardan secretos: pacientes que ocultan enfermedades mentales, víctimas de violencia doméstica que no denuncian, y ancianos que viven solos y a los que nadie visita. El personal lo sabe, pero no puede hacer nada si los pacientes no quieren ayuda.`,
        pdfUrl: `#`,
        iconoTipo: `centromedico`
    },

	// ==================== COLEGIOS
	
	{
        xPx: 403,
        yPx: 580,
        nombre: `Colegio «Lago del Espejo»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «an Locha Ghlais»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl an Lo-ja Ylás</em>/<br><strong>En inglés:</strong> Mirror Lake Primary
		<br><br>
		El Colegio «Lago del Espejo» es uno de los dos centros de educación primaria del distrito de Los Jardines, y sin duda el más prestigioso. Un colegio concertado de alta calidad, que atiende a niños de 3 a 12 años (Educación Infantil y Primaria), procedentes en su inmensa mayoría de familias de clase media-alta y alta del distrito. Es un centro con un alto nivel académico, instalaciones deportivas de primer nivel, actividades extraescolares caras (idiomas, música, robótica, equitación), y un profesorado bien pagado y con baja rotación. El edificio es moderno (construido entre 2022 y 2024), pero diseñado en estilo eduardiano para integrarse en la estética del barrio: ladrillo rojo claro, tejado de pizarra, grandes ventanales, y un pequeño campanario decorativo. Tiene amplios jardines, un lago artificial (de ahí el nombre), canchas de deporte, y un huerto ecológico. Es el colegio de los niños bien de Dunbhròn, donde los padres llevan a sus hijos en sus Volvos y Audis, y donde los pequeños lucen uniformes impecables (azul marino y blanco, con el logo bordado). Sin embargo, bajo esa fachada de excelencia y buenas maneras, el colegio es también un lugar de presión académica extrema, de competitividad entre padres, y de secretos que los niños no cuentan en casa. La orientadora ha notado que algunos alumnos tienen pesadillas recurrentes y dibujan cosas extrañas en sus cuadernos (figuras altas y delgadas, ojos en la oscuridad). Ella lo atribuye a la ansiedad por los exámenes o a problemas familiares. No pregunta demasiado. Los padres no quieren que sus hijos sean etiquetados como «problemáticos». Y el colegio no quiere mala publicidad.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },
	    {
        xPx: 516,
        yPx: 695,
        nombre: `Colegio «Abadía de los Abedules»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «Mhanachainn nam Beithe»<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl Vá-na-jin nam Be</em>/<br><strong>En inglés:</strong> Birch Abbey Primary
		<br><br>
		El Colegio «Abadía de los Abedules» es el segundo centro de educación primaria del distrito de Los Jardines. También el más modesto de los dos. A diferencia del elitista «Lago del Espejo», este colegio es de carácter público (financiado íntegramente por el estado), aunque con unos estándares de calidad altos (como corresponde al distrito). Atiende a niños de 3 a 12 años (Educación Infantil y Primaria) de familias de clase media y media-alta, que buscan una educación de calidad sin los aires de grandeza ni las cuotas del colegio concertado. El edificio es moderno (construido entre 2022 y 2024), de estilo funcional con guiños al eduardiano (ladrillo caravista, tejado de pizarra, ventanales amplios). Está en un entorno tranquilo, rodeado de abedules (de ahí el nombre), con amplios jardines y un pequeño bosque de ribera. Es un colegio menos ostentoso que su vecino, pero también menos competitivo y más familiar. Los profesores son en su mayoría jóvenes y motivados, con una baja rotación (porque las condiciones son buenas). El director es un hombre tranquilo que cree en la educación inclusiva y en el respeto al medio ambiente. Sin embargo, como todos los colegios, también tiene sus secretos: alumnos que sufren acoso escolar (bien camuflado entre niños de clase media), padres que presionan demasiado, y algún que otro niño con pesadillas recurrentes que dibuja cosas extrañas. La orientadora es una mujer joven y atenta, que ha notado que algunos de sus alumnos (sobre todo los que viven en las zonas altas de Las Laderas, cerca del bosque) tienen miedo a la oscuridad y hablan de "hombres altos y delgados". Ella lo anota, deriva a servicios sociales si ve signos de maltrato, pero no sabe qué más hacer.`,
        pdfUrl: `#`,
        iconoTipo: `colegio`
    },

	// ==================== COMISARÍA
	
	{
        xPx: 345,
        yPx: 626,
        nombre: `Comisaría de Los Jardines`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Tigh an Lagha nan Gàrraidhean<br><strong>Pronunciación:</strong> /<em>Tay an LAY-a nan GA-ree-an</em>/<br><strong>En inglés:</strong> The Gardens Police Station
		<br><br>
		La Comisaría de Los Jardines es la principal dependencia policial del distrito. Un edificio moderno, bien equipado y perfectamente integrado en el entorno residencial de clase media-alta al que sirve. No es una comisaría grande (como la central de Dunbhròn), pero está dimensionada para atender a una población de unos 20.000 habitantes, con los recursos y la tecnología adecuados a un distrito que, aunque tranquilo, exige una respuesta eficiente y discreta. Está situada en una calle arbolada, con una fachada de piedra gris que imita el estilo eduardiano del barrio. Tiene capacidad para una dotación completa de agentes, vehículos patrulla, calabozos para retención temporal (hasta 48 horas), sala de interrogatorios con equipos modernos, y un pequeño centro de control de tráfico y vigilancia. Los agentes son profesionales y están bien preparados, aunque el bajo índice de criminalidad del distrito hace que la mayoría de su trabajo sea administrativo o de atención al ciudadano (disputas vecinales, hurtos menores, violencia doméstica encubierta). No están acostumbrados a lo sobrenatural. Cuando un residente denuncia algo «raro» (una luz en el jardín, una sensación de ser observado, ruidos en el sótano), toman nota, archivan y no vuelven a pensar en ello. No quieren alarmar a la población. Tampoco creen en esas cosas. Si alguien, en instancias superiores, considera que el caso merece atención, se ocupa de ello otra gente, de la que los agentes de Los Jardines nunca han oído hablar directamente.<br>
		El edificio se construyó entre 2022 y 2024, como parte del desarrollo del distrito, y se inauguró en marzo de 2024. Es de estilo eduardiano (para integrarse en la estética del barrio), con ladrillo rojo claro y piedra arenisca, tejado de pizarra y grandes ventanales. Tiene dos plantas más sótano, un pequeño aparcamiento subterráneo para vehículos oficiales, y un patio interior vallado. Es una comisaría seria, funcional y discreta, como corresponde a un barrio que valora la seguridad y la privacidad.`,
        pdfUrl: `#`,
        iconoTipo: `comisaria`
    },

	// ==================== HELADERÍAS

	// ==================== HOSPITALES

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS

	 {
        xPx: 378,
        yPx: 651,
        nombre: `Instituto «Prado de la Fuente»`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Àrd-sgoil «Mhachair an Tobair»<br><strong>Pronunciación:</strong> /<em>Ard-sgoyl Vá-jar an To-par</em>/<br><strong>En inglés:</strong> Fountain Meadow Academy
		<br><br>
		El Instituto «Prado de la Fuente» es el único centro de educación secundaria del distrito de Los Jardines, y uno de los institutos públicos de mayor prestigio de Dunbhròn. Atiende a unos 800 estudiantes de entre 12 y 18 años (desde 1º de GCSE hasta GCE), procedentes en su inmensa mayoría de las familias de clase media y media-alta de Los Jardines. Aunque también recibe alumnos de Las Laderas (los que obtienen plaza por excelencia académica o por programas de diversificación) y de Los Prados (muy pocos, los que no pueden pagar la concertada). Es un instituto moderno, bien equipado y con unos resultados académicos sobresalientes (entre los mejores de la región). El edificio se construyó entre 2022 y 2024, dentro del plan de desarrollo del distrito, y se inauguró en septiembre de 2024. Su arquitectura es de estilo contemporáneo con guiños al eduardiano (ladrillo rojo claro, grandes ventanales, tejado de pizarra), integrado en un entorno de jardines y zonas verdes.<br>
		El profesorado es joven y motivado (en su mayoría), con una baja rotación porque las condiciones laborales son buenas (para un instituto público). Los alumnos son en su mayoría aplicados y competitivos, pero también hay problemas: presión académica extrema, ansiedad, trastornos alimenticios, acoso escolar sutil (el que no deja marcas físicas), consumo de drogas de diseño (ansiolíticos, estimulantes), y fiestas clandestinas los fines de semana.<br>
		El instituto tiene fama de ser «el de los niños bien», pero también es el lugar donde los jóvenes de Los Jardines aprenden a gestionar la presión, a esconder sus secretos y a mantener las apariencias. Como el distrito al que sirve, es una jaula dorada.`,
        pdfUrl: `#`,
        iconoTipo: `instituto`
    },

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS
	
	{
        xPx: 292,
        yPx: 609,
        nombre: `Parque de Bomberos de la Avenida Central`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad-smàlaidh na Meadhan Rathaid<br><strong>Pronunciación:</strong> /<em>EE-un-at SMAH-lay na ME-an RA-ay</em>/<br><strong>En inglés:</strong> Central Avenue Fire Station
		<br><br>
		El Parque de Bomberos de la Avenida Central es la principal estación de bomberos del distrito. Una instalación moderna, bien equipada y perfectamente integrada en el entorno residencial de clase media-alta al que sirve. Cubre todo el distrito de Los Jardines, además de dar apoyo ocasional a Las Laderas y Los Prados cuando sus propios parques están desbordados. Es una estación pequeña pero completa, con capacidad para una dotación de bomberos profesionales, vehículos modernos y el equipamiento necesario para atender incendios domésticos, rescates en altura, accidentes de tráfico y emergencias menores. El edificio es de estilo eduardiano (para integrarse en la estética del barrio), construido entre 2022 y 2024, e inaugurado en marzo de 2024. Es una estación limpia, ordenada y discreta, como corresponde a un distrito que valora la seguridad y la estética. Los bomberos están acostumbrados a incendios domésticos (cortocircuitos, cocinas, chimeneas mal limpiadas) y a rescates de gatos subidos a los árboles (más frecuentes de lo que les gustaría). También han tenido que rescatar a algún excursionista perdido en el bosque, y no les gusta adentrarse demasiado cuando la niebla es espesa. No tienen experiencia con lo sobrenatural. Si algo raro sucede en Los Jardines, probablemente no serán los primeros en enterarse, y si se enteran, lo atribuirán a la niebla, al cansancio o a «historias de viejas».`,
        pdfUrl: `#`,
        iconoTipo: `bomberos`
    },

	// ==================== PUBS
	
	{
        xPx: 426,
        yPx: 598,
        nombre: `Pub «La Carabela»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «An Carabhal»<br><strong>Pronunciación:</strong> /an KA-ra-val/<br><strong>En inglés:</strong> The Caravel Pub<br><br>
		El Pub «La Carabela» es el único pub del distrito. Es un local elegante, exclusivo y discretamente lujoso, situado en la planta baja de un edificio de piedra arenisca de estilo eduardiano, en la zona más céntrica del distrito. Sirve cócteles de autor, ginebras premium, champán y una cuidada selección de vinos. El código de vestimenta es elegante (prohibidas las chanclas y las camisetas de tirantes, aunque en Los Jardines nadie iría en chanclas a ningún sitio). Los clientes son vecinos de alto poder adquisitivo, parejas que buscan un ambiente distinguido, y gente que quiere «ver y dejarse ver». Es el lugar donde se hacen los negocios discretos: un arquitecto que consigue un contrato, un abogado que arregla un divorcio, un matrimonio que finge felicidad, una aventura extramatrimonial mal disimulada. El local es pequeño pero acogedor, con paredes de piedra vista, lámparas de araña, mesas de mármol y cortinas de terciopelo. El ambiente es de copas y conversación en voz baja, con música jazz o bossa nova de fondo. No hay máquinas tragaperras, ni dardos, ni pantallas deportivas. Es un pub para adultos que quieren ser vistos en el sitio adecuado.<br>
		El edificio se construyó entre 2022 y 2024, dentro del plan de desarrollo del distrito, y el pub abrió sus puertas en junio de 2024. Es uno de los establecimientos de moda en Los Jardines, con reservas obligatorias los fines de semana. El dueño es un empresario de la hostelería con varios negocios en la ciudad, que supo ver el potencial de un distrito de clase media-alta sin un lugar «distinguido» para tomar una copa. La clientela es fiel y discreta, y los camareros conocen los nombres de los clientes habituales (y algunos de sus secretos).
		<br><br>
		<strong>Tipo:</strong> Pub de copas / Elegante<br>
		<strong>Horario:</strong> 18:00 - 02:00<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Cócteles de autor y ginebras premium.<br>
		<strong>Juegos:</strong> Dardos electrónicos (llevan la cuenta).<br>
		<strong>Ambiente:</strong> Elegante, con paredes de piedra vista, lámparas de araña, mesas de mármol y cortinas de terciopelo. Ambiente de copas y conversación.<br>
		<strong>Música:</strong> Jazz, bossa nova y música lounge, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Vecinos de alto poder adquisitivo, parejas y gente que busca un ambiente distinguido.<br><br>
		<strong>Notas:</strong><br>
		✔️ El código de vestimenta es elegante (prohibidas las chanclas y las camisetas de tirantes).<br>
		✔️ Cuentan con terraza con calefacción.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },

	// ==================== RESTAURANTES

	{
        xPx: 410,
        yPx: 669,
        nombre: `Restaurante «Cuchara, Tenedor y Cuchillo»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Spàin, Forc is Sgian»<br><strong>Pronunciación:</strong> /SPAAN, FORK ish SKI-an/<br><strong>En inglés:</strong> Spoon, Fork and Knife Restaurant<br><br>
		El Restaurante «Cuchara, Tenedor y Cuchillo» es el establecimiento de cocina tradicional por excelencia de Los Jardines. El favorito de las familias, los vecinos de toda la vida y los amantes de la comida honesta y bien hecha. Es un restaurante de los de manteles de cuadros, servilletas de tela, olor a hogueras y carne asada, y servicio amable y profesional. Ofrece cocina escocesa tradicional e internacional (fish & chips, steak & ale pie, salmón ahumado, ensalada César, pasta) y un menú del día muy popular (14 libras, con varios primeros y segundos a elegir). Los domingos ofrecen el tradicional Sunday Roast, con carne asada, patatas asadas, verduras y salsa. Es un restaurante clásico, sin pretensiones, donde los clientes se sienten como en casa. Es frecuentado por familias, vecinos del distrito, turistas (los que buscan autenticidad escocesa) y jubilados de alto poder adquisitivo. Es el típico restaurante de barrio de toda la vida, pero en un barrio de clase media-alta, por lo que los precios son algo más altos que en Las Laderas (aunque asequibles) y la calidad es excelente.<br>
		El local ocupa la planta baja de un edificio de estilo eduardiano (ladrillo rojo claro, piedra arenisca, grandes ventanales) construido entre 2022 y 2024, pero diseñado para parecer de principios del siglo XX. El interior es cálido y acogedor, con manteles de cuadros rojos y blancos, paredes de ladrillo visto, chimenea de leña (eléctrica, pero muy lograda) y una barra de madera oscura. El dueño es un escocés de pura cepa, que aprendió el oficio de su padre y su abuelo, y que cree en la comida casera y en el trato cercano. El restaurante abrió sus puertas en marzo de 2024, coincidiendo con la inauguración del distrito, y desde entonces se ha convertido en un clásico, con una clientela fiel que viene a comer el menú del día de lunes a viernes y el Sunday Roast en familia.
		<br><br>
		<strong>Tipo:</strong> Restaurante de cocina tradicional<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 22:30<br>
		<strong>Tipo de cocina:</strong> Escocesa tradicional / Internacional<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Fish & chips, steak & ale pie, salmón ahumado, ensalada César y pasta.<br>
		<strong>Ambiente:</strong> Clásico, con manteles de cuadros, servilletas de tela y mesas de madera. Ambiente familiar y tranquilo.<br>
		<strong>Clientela habitual:</strong> Familias, vecinos y turistas.<br><br>
		<strong>Notas:</strong><br>
		✔️ El menú del día (catorce libras) es muy popular.<br>
		✔️ Los domingos ofrecen Sunday Roast.<br>
		✔️ Se aceptan reservas.<br>
		✔️ Ofrecen opciones vegetarianas.<br>
		✔️ Es el típico restaurante de barrio de toda la vida.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 258,
        yPx: 594,
        nombre: `Restaurante «El Círculo Druídico»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «An Cearcall Druideach»<br><strong>Pronunciación:</strong> /an KYAR-kal DRU-id-aj/<br><strong>En inglés:</strong> The Druid Circle Restaurant<br><br>
		El Restaurante «El Círculo Druídico» es el establecimiento más singular y misterioso de Los Jardines. Un lugar temático inspirado en la mitología celta y la Escocia ancestral. Es el favorito de los turistas, las parejas que buscan algo diferente y los amantes de la cultura celta. Su especialidad es la cocina escocesa de autor con influencias celtas: venado con salsa de moras, cordero con hierbas silvestres, salmón ahumado con miel y avena, y postres de miel y avena. El local es pequeño (ocho mesas), íntimo y oscuro, con una decoración que recrea un círculo de piedras (con piedras de imitación, pero muy logradas), velas, incienso de hierbas y música celta ambiental (arpa, flauta, tambor). Los camareros visten de druida: túnicas de lino blanco o marrón, capas de lana, y collares de piedras. La carta está escrita en gaélico y español (con traducción al inglés en letra pequeña). Los jueves hay cena-espectáculo con música celta en vivo (arpa, gaita, flauta). Es un lugar pequeño y exclusivo, con reserva obligatoria, frecuentado por turistas (que buscan una experiencia «auténticamente escocesa»), parejas (para celebraciones románticas), y algún lugareño amante de la mitología. Es el restaurante más caro del distrito, pero también el más evocador.<br>
		El local ocupa la planta baja de un edificio de piedra gris de dos plantas (uno de los pocos edificios del distrito que no se construyó en la reciente urbanización, sino que se restauró). El edificio es de finales del siglo XIX (originalmente una herrería, luego un almacén, luego una tienda de antigüedades), y fue completamente reformado entre 2022 y 2024 para adaptarlo al uso de restaurante. Su carácter antiguo y ligeramente lúgubre le da un encanto especial. El dueño es un escocés apasionado de la cultura celta, que vivió en Irlanda y Gales durante años antes de regresar a su tierra natal para abrir este restaurante. Es un hombre místico (cree en la espiritualidad de la naturaleza, en los ciclos de la luna y en la energía de las piedras), pero no fanático. Su lema: «la comida es un ritual, y el ritual es sagrado».
		<br><br>
		<strong>Tipo:</strong> Restaurante temático / Místico<br>
		<strong>Horario:</strong> 19:00 - 23:00 (solo cenas)<br>
		<strong>Tipo de cocina:</strong> Escocesa de autor / Fusión celta<br>
		<strong>Precio:</strong> 💰💰💰<br>
		<strong>Rapidez:</strong> ⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Platos inspirados en la mitología celta: venado con salsa de moras, cordero con hierbas silvestres y postres de miel y avena.<br>
		<strong>Ambiente:</strong> Místico, con un círculo de piedras simulado en el centro, velas e incienso de hierbas. Suena música celta ambiental (arpa, flauta).<br>
		<strong>Clientela habitual:</strong> Parejas, turistas y amantes de la cultura celta.<br><br>
		<strong>Notas:</strong><br>
		✔️ El local es pequeño (ocho mesas).<br>
		✔️ La reserva es obligatoria.<br>
		✔️ Los camareros visten de druida.<br>
		✔️ La carta está escrita en gaélico y español.<br>
		✔️ Los jueves hay cena-espectáculo con música celta en vivo.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },
	{
        xPx: 407,
        yPx: 614,
        nombre: `Restaurante «Come y Bebe»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Ith is Òl»<br><strong>Pronunciación:</strong> /i IS OL/<br><strong>En inglés:</strong> Eat and Drink Restaurant<br><br>
		El Restaurante «Come y Bebe» es el establecimiento de comida rápida del distrito de Los Jardines. El único sitio «cutre» en un barrio por lo demás impecable. Está en un bajo comercial alejado de las casas (para no molestar a los vecinos con el olor a aceite y el ruido), en la zona del límite con Los Prados. Es frecuentado por jóvenes (que buscan una comida rápida y barata después del instituto), familias con niños pequeños (que no quieren pagar los precios de los restaurantes elegantes), y trabajadores de la zona (comerciantes, personal de limpieza, repartidores). Su especialidad son las hamburguesas, los perritos calientes, la pizza porciones, las patatas fritas y los refrescos. Es un local funcional, con mesas de plástico, sillas de metal, un letrero luminoso, y el olor a aceite de freír (que impregna todo). No es un sitio para impresionar, ni para celebrar aniversarios. Es para comer rápido, barato, y sin complicaciones. El dueño es un inmigrante polaco (que llegó a Escocia hace veinte años) y que ha visto de todo en este barrio: desde las obras de construcción del distrito hasta la llegada de los vecinos de clase media-alta. Es un hombre trabajador, simpático y descreído. No le importan las leyendas. Solo le importa que sus hamburguesas estén calientes y sus clientes no le pongan malas reseñas en Google.<br>
		El local ocupa la planta baja de un bloque de pisos de ladrillo caravista (de los pocos que se construyeron en Los Jardines con un estilo moderno, no eduardiano), en la esquina de East Garden Road con Factory Lane, justo en el límite del distrito con Los Prados (al otro lado de la calle, los edificios son más feos y más viejos). El bloque es de 2023, de tres plantas, con fachada de ladrillo caravista color arena, sin adornos. El restaurante es el único local comercial de la planta baja (los demás bajos están vacíos o son pequeños talleres). Es un lugar anodino, casi marginal, que contrasta con la elegancia del resto del distrito.
		<br><br>
		<strong>Tipo:</strong> Restaurante de comida rápida / Autoservicio<br>
		<strong>Horario:</strong> 11:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Internacional rápida<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Hamburguesas, perritos calientes, pizza porciones, patatas fritas y refrescos.<br>
		<strong>Ambiente:</strong> Local funcional, con mesas de plástico, sillas de metal y letrero luminoso. El olor a aceite de freír lo caracteriza. Es el típico fast-food de barrio.<br>
		<strong>Clientela habitual:</strong> Jóvenes, familias con niños y trabajadores.<br><br>
		<strong>Notas:</strong><br>
		✔️ No se aceptan reservas.<br>
		✔️ Los precios son muy económicos.<br>
		✔️ El menú infantil incluye juguete.<br>
		✔️ Ofrecen opciones vegetarianas (hamburguesa de soja).<br>
		✔️ Abren hasta tarde los fines de semana.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS
    
    {
        xPx: 436,
        yPx: 652,
        nombre: `Centro Comercial «Los Jardines»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad Bhùthan «nan Gàrraidhean»<br><strong>Pronunciación:</strong> /<em>EE-un-at VOO-an nan GA-ree-an</em>/<br><strong>En inglés:</strong> The Gardens Shopping Centre
		<br><br>
		El Centro Comercial «Los Jardines» es el corazón comercial y social del distrito del mismo nombre. Un templo del consumo de lujo para las clases media-alta y alta de Dunbhròn. Es un centro comercial de cuatro plantas (más tres sótanos de aparcamiento), con una arquitectura moderna que imita el estilo eduardiano (para integrarse en la estética del barrio), pero con acabados de primera calidad: mármol, cristal, hierro forjado, y grandes espacios diáfanos. Alberga tiendas de moda de lujo (multimarca y algunas boutiques exclusivas), electrónica de alta gama, hogar y decoración, una juguetería de diseño, una librería especializada, y una zona de restauración en la última planta con cafeterías, restaurantes de comida rápida (de calidad) y un sushi bar. El supermercado ancla es Waitrose (porque en Los Jardines no se compra en Tesco). Es el lugar de encuentro de las familias los fines de semana, sobre todo cuando llueve (que es a menudo). Tiene un aparcamiento subterráneo de tres plantas (con 600 plazas), vigilancia privada (visible y eficaz, aunque discreta), y un servicio de atención al cliente impecable. No ha habido incidentes graves desde su inauguración. El director del centro dona dinero a las asociaciones de vecinos y organiza eventos benéficos para mantener una buena imagen. Pero, como en todo Los Jardines, bajo la superficie de lujo y orden hay secretos: encuentros furtivos en los aparcamientos, robos a cámara lenta por parte de los empleados de limpieza (inmigrantes, contratas externas), y, según algunos vigilantes nocturnos, cosas más extrañas en los túneles de ventilación (que conectan con las alcantarillas). Un vigilante jubilado (que fue agente de algo, no se sabe bien) ha contado que en los túneles a veces se oyen susurros. No ha investigado. No le pagan para eso.<br>
		El centro comercial se construyó entre 2022 y 2024, dentro del plan de desarrollo del distrito, y se inauguró en marzo de 2024 (coincidiendo con la apertura de Los Jardines). Es uno de los centros comerciales más lujosos y exclusivos de Dunbhròn, diseñado para competir con los centros comerciales del centro de la ciudad. Es el orgullo del distrito, y los vecinos lo presumen a sus amigos de otras zonas.`,
        pdfUrl: `#`,
        iconoTipo: `centrocomercial`
    },

    // ==================== BARRIO UNIVERSITARIO ====================
	
	// ==================== BAR
	
	{
        xPx: 288,
        yPx: 644,
        nombre: `Bar «Último Curso»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Bàr «An Cùrsa Deireannach»<br><strong>Pronunciación:</strong> /an KUUR-sa JER-yan-aj/<br><strong>En inglés:</strong> Final Year Bar<br><br>
		El Bar «Último Curso» es el antro de referencia para los estudiantes de la Colina del Conocimiento que buscan cerveza barata, música alta y un ambiente sin complejos. El edificio es de los años 90 (construido como parte de la primera expansión del campus), pero fue reformado en 2023 (nuevos baños, nuevo sistema de ventilación, pintura, mobiliario). El bar abrió sus puertas en 1998 y ha sobrevivido a generaciones de estudiantes, cambios de dueño y varias crisis económicas. El dueño actual es un exalumno de la universidad (ingeniero informático que nunca ejerció) que compró el negocio en 2015 y le dio un lavado de cara (sin perder la esencia cañí). Es un bar de barrio universitario, de los de toda la vida, pero con un toque moderno (pantallas para deportes, DJ los viernes). Es el lugar donde los estudiantes de último curso celebran el final de los exámenes, los cumpleaños, y cualquier excusa para emborracharse. Es un local pequeño, ruidoso, con las paredes llenas de pegatinas de grupos y graffitis, donde el olor a cerveza y a ambientador barato lo impregna todo. Es el bar de los estudiantes de últimos cursos (de ahí el nombre), aunque también se cuelan alumnos de primeros cursos en busca de «experiencia universitaria auténtica». Su especialidad es la cerveza de barril (lager económica), los cubatas y los chupitos (a una libra los miércoles). Tiene dardos, futbolín y una mesa de billar pequeña. Los viernes hay DJ en directo (un estudiante de música con un ordenador portátil). Se llena hasta la bandera. No es un lugar para conversaciones profundas, sino para beber, bailar (como se pueda) y olvidarse de los exámenes.<br>		
		<br><br>
		<strong>Tipo:</strong> Bar de copas / Estudiantil<br>
		<strong>Horario:</strong> 17:00 - 03:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí (más barra que mesas)<br>
		<strong>Especialidad:</strong> Cerveza de barril (lager económica), cubatas y chupitos (a una libra los miércoles).<br>
		<strong>Juegos:</strong> Dardos, futbolín y billar (una mesa pequeña).<br>
		<strong>Ambiente:</strong> Local ruidoso, con las paredes llenas de pegatinas de grupos y graffitis. El olor a cerveza y a ambientador barato lo impregna todo. Es el bar de los estudiantes de últimos cursos.<br>
		<strong>Música:</strong> Pop, rock y reggaetón, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Estudiantes (mayoría), profesores jóvenes y becarios.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los miércoles es la noche del chupito (una libra).<br>
		✔️ Los viernes hay DJ en directo.<br>
		✔️ El local es pequeño y se llena hasta la bandera.<br>
		✔️ Cuentan con pantallas para deportes.`,
        pdfUrl: `#`,
        iconoTipo: `bar`
    },

	// ==================== BIBLIOTECA
	
	{
        xPx: 114,
        yPx: 737,
        nombre: `Biblioteca Central de Dunbhròn`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Leabharlann «a' Mheadhain»<br><strong>Pronunciación:</strong> /<em>LYO-var-lan a VE-an</em>/<br><strong>En inglés:</strong> Dunbhròn Central Library<br><br>
		La Biblioteca Central de Dunbhròn es la biblioteca más grande e importante de toda la ciudad. Un monumento al conocimiento y la cultura que domina el corazón de la Colina del Conocimiento. Es un edificio imponente, de piedra arenisca, estilo neogótico, construido a finales del siglo XIX (1887-1892) y ampliado en varias ocasiones (la última en 2023-2024, con una restauración integral y una ampliación subterránea). Alberga más de 500.000 volúmenes (entre libros, manuscritos, mapas, partituras, y documentos históricos), además de una vasta colección digital, salas de estudio, archivos especializados, una sección de folclore (con documentos únicos sobre la mitología escocesa y celta), y una cripta subterránea (de acceso restringido) donde se guardan los documentos más antiguos y, según algunas leyendas, algunos volúmenes "peligrosos" o "malditos". Es un edificio enorme, de cuatro plantas sobre rasante y dos sótanos, con una superficie total de más de 15.000 metros cuadrados. Es la biblioteca de referencia para estudiantes, profesores, investigadores y público en general. Tiene una cafetería en la planta baja, wifi gratuito, préstamo de ordenadores portátiles, y un servicio de atención al investigador (con cita previa). Es, además, un edificio protegido (categoría A, de máxima protección). Su restauración (2022-2024) la ha dejado como nueva: las fachadas de piedra han sido limpiadas, las vidrieras restauradas, los sistemas de climatización y accesibilidad modernizados, y la cripta subterránea (hasta ahora semiabandonada) ha sido convertida en un moderno archivo climatizado.<br>
		Este edificio es el orgullo de la ciudad. Pero también es un lugar de secretos: una sección cerrada al público (la "Colección Reservada") que solo puede consultarse con autorización expresa del director, manuscritos en gaélico antiguo que nadie ha logrado traducir del todo, y una cripta donde, según los bibliotecarios más veteranos, "algunos libros no deben ser leídos por cualquiera". Los bibliotecarios son discretos, pero algunos han oído susurros o sonidos extraños procedentes de los sótanos —aun no habiendo nadie allí—. Atribuyen los ruidos a la madera (las estanterías son de roble del siglo XIX) o a la climatización. Otros creen que es el fantasma de un bibliotecario del siglo XIX que murió en la cripta. El director actual, un hombre tranquilo y eficiente, no cree en fantasmas. Atribuye el fenómeno a las vibraciones de las obras de restauración (terminadas hace unos meses).
		<br><br>
		<strong>Tipo:</strong> Biblioteca pública<br>
		<strong>Horario:</strong> 09:00 - 21:30<br>
		<strong>Precio:</strong> Gratis (con carnet)<br>
		<strong>Ambiente:</strong> Silencioso y acogedor, con grandes estanterías, zonas de estudio y salas de lectura. El aroma a papel y madera vieja lo impregna todo.<br>
		<strong>Clientela habitual:</strong> Estudiantes, profesores, investigadores y público en general.<br><br>
		<strong>Notas:</strong><br>
		✔️ Es la biblioteca más grande de la ciudad.<br>
		✔️ Cuenta con más de doscientos mil volúmenes.<br>
		✔️ Ofrecen wifi gratuito y préstamo de ordenadores portátiles.<br>
		✔️ Se organizan clubes de lectura y talleres.<br>
		✔️ La planta baja alberga una pequeña cafetería.`,
        pdfUrl: `#`,
        iconoTipo: `biblioteca`
    },

	// ==================== CAFÉ / CAFÉ - BAR
	
	{
        xPx: 316,
        yPx: 708,
        nombre: `Cafetería «Greenock»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh Ghrianaig<br><strong>Pronunciación:</strong> /<em>KA-fay GREE-nik</em>/<br><strong>En inglés:</strong> Greenock Café<br><br>
		La Cafetería «Greenock» es uno de los establecimientos más concurridos y fotogénicos de la Colina del Conocimiento. El lugar de moda entre estudiantes, profesores jóvenes y personal administrativo que busca un café de calidad, un ambiente moderno y una conexión wifi fiable para estudiar o trabajar. Está situada en la planta baja de un edificio eduardiano de ladrillo rojo (reformado en 2023). Su decoración es luminosa y acogedora, con paredes pintadas de verde y blanco (los colores de Greenock, la ciudad costera escocesa que da nombre al local), mesas de madera clara, plantas colgantes y grandes ventanales que dejan entrar la luz natural. Su especialidad es el café de filtro (de comercio justo, tostado en Edimburgo), los batidos, las tostadas de aguacate, los bowls de yogur y la bollería casera. Los martes hay dos por uno en cafés, y el local se llena hasta la bandera. Es el típico sitio donde los estudiantes pasan horas con un solo café mientras cargan sus portátiles, y donde los profesores se reúnen para corregir exámenes entre croissants.<br>
		El edificio original data de 1895 (una antigua imprenta), fue reformado en los años 70 para convertirlo en oficinas, y en 2023 fue completamente restaurado y acondicionado como cafetería, respetando la fachada eduardiana pero modernizando el interior. Abrió sus puertas en marzo de 2024, coincidiendo con la inauguración de la nueva temporada en el distrito universitario. El dueño es un emprendedor local, amante del café de especialidad, que quiso crear un espacio donde la gente pudiera trabajar, estudiar o simplemente relajarse en un ambiente agradable y con buena conexión a internet. Es el lugar favorito de los estudiantes de la residencia Norte (los de medicina, tranquilos y estudiosos), y también de los de la residencia Oeste (los alternativos, que vienen a leer y a tomar té). Es un remanso de paz en un distrito que, durante el curso, bulle de actividad.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Brunch<br>
		<strong>Horario:</strong> 08:00 - 21:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Café de filtro, té, batidos, tostadas de aguacate, bowls de yogur y bollería casera.<br>
		<strong>Ambiente:</strong> Moderno y luminoso, con paredes pintadas de verde y blanco (los colores de Greenock), mesas de madera clara y plantas colgantes. Muy fotogénico.<br>
		<strong>Música:</strong> Indie o pop, a volumen medio-bajo.<br>
		<strong>Clientela habitual:</strong> Estudiantes, profesores jóvenes y personal administrativo.<br><br>
		<strong>Notas:</strong><br>
		✔️ Disponen de wifi gratuito.<br>
		✔️ Los enchufes están disponibles en casi todas las mesas (ideal para estudiar o trabajar).<br>
		✔️ El café es de comercio justo.<br>
		✔️ Los martes hay dos por uno en cafés.`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },
	{
        xPx: 234,
        yPx: 650,
        nombre: `Cafetería «El Vendaval»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cafaidh «An Dòrainn»<br><strong>Pronunciación:</strong> /an DO-rain/<br><strong>En inglés:</strong> The Gale Café<br><br>
		La Cafetería «El Vendaval» es una tetería y cafetería de ambiente íntimo y bohemio. El refugio de los estudiantes de humanidades, los poetas, los lectores empedernidos y las parejas que buscan un lugar tranquilo para conversar sin el ruido de las cafeterías de moda. Está situada en la planta baja de un edificio de piedra arenisca de finales del siglo XIX. Su decoración es acogedora y vintage: paredes de ladrillo visto, sofás de segunda mano, estanterías llenas de libros usados, y lámparas de papel. Su especialidad son las infusiones y los tés de hojas sueltas (más de treinta variedades), el chocolate caliente artesano (espeso, casi para comer con cuchara) y los pasteles caseros (brownies de chocolate negro, carrot cake con frosting de queso, galletas de avena y pasas). No disponen de wifi (un cartel en la puerta reza: «No tenemos wifi. Así que tendrán que socializar»), lo que la convierte en un oasis de conversación en un distrito donde todo el mundo está pegado a una pantalla. Los jueves por la noche hay micrófono abierto: poetas, cuentacuentos y músicos acústicos comparten escenario (una pequeña tarima de madera) con una audiencia de no más de veinte personas.<br>
		El edificio original data de 1885 (una antigua casa de huéspedes para estudiantes), fue reformado en los años 60 (cuando se convirtió en una pensión), y en 2023 fue completamente restaurado y acondicionado como cafetería, respetando la fachada de piedra y algunos elementos originales (las vigas de madera, las chimeneas). Abrió sus puertas en septiembre de 2024, coincidiendo con el inicio del curso académico. La dueña es una mujer joven, exalumna de la Facultad de Humanidades (estudió Literatura Inglesa), que quería crear un espacio alternativo, alejado de las cadenas de café y del ruido de las cafeterías modernas. Es un lugar de culto para los estudiantes de letras, que vienen a leer, a escribir, a discutir sobre poesía o simplemente a no hacer nada, acompañados de una taza de té humeante.
		<br><br>
		<strong>Tipo:</strong> Cafetería / Tetería<br>
		<strong>Horario:</strong> 09:00 - 22:00<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Infusiones, tés de hojas sueltas, chocolate caliente espeso y pasteles caseros (brownies, carrot cake).<br>
		<strong>Ambiente:</strong> Acogedor, con paredes de ladrillo visto, sofás de segunda mano y estanterías llenas de libros usados. El aroma a canela y vainilla lo impregna todo.<br>
		<strong>Música:</strong> Jazz suave o bossa nova, a volumen bajo.<br>
		<strong>Clientela habitual:</strong> Estudiantes de humanidades, lectores y parejas.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuentan con un pequeño escenario para micrófono abierto los jueves (poesía, música acústica).<br>
		✔️ Los libros de las estanterías se pueden leer gratis.<br>
		✔️ No disponen de wifi (para fomentar la conversación).`,
        pdfUrl: `#`,
        iconoTipo: `cafeteria`
    },

	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD

	// ==================== COLEGIOS

	// ==================== COMISARÍA (ENTRE CASCO ANTIGUO Y LA COSTA NOVA)

	// ==================== HELADERÍAS

	// ==================== HOSPITALES
	
	{
        xPx: 205,
        yPx: 672,
        nombre: `Hospital Universitario «Alexander Fleming»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ospadal Oilthigh «Alasdair Fleming»<br><strong>Pronunciación:</strong> /<em>OS-pa-tal OL-ee A-las-tar FLE-ming</em>/<br><strong>En inglés:</strong> Alexander Fleming University Hospital
		<br><br>
		El Hospital Universitario «Alexander Fleming» es el centro hospitalario más grande y moderno de Dunbhròn. Un gigante de la medicina que combina la atención sanitaria de alta complejidad con la investigación puntera y la formación de futuros profesionales. Es un complejo colosal de más de 150.000 metros cuadrados construidos: con 800 camas, 30 quirófanos, un servicio de urgencias que atiende a más de 300 pacientes al día, y una plantilla de más de 5.000 profesionales (médicos, enfermeras, investigadores, personal de administración y servicios). Es el hospital de referencia para toda la región, y el único centro de la ciudad con capacidad para atender grandes catástrofes, trasplantes de órganos complejos, neurocirugía de alta especialización y terapias experimentales. Además, alberga el prestigioso Instituto de Investigación Biomédica «Fleming», donde se desarrollan estudios punteros en genética, oncología, neurología y enfermedades infecciosas. Es, sin duda, el orgullo sanitario de Dunbhròn. Y su fama trasciende las fronteras de Escocia.<br>
		El edificio principal es una mole de cristal y acero de doce plantas, diseñada por un prestigioso arquitecto en 2015 (ampliado y reformado en 2022-2024), con una fachada de paneles blancos y azules (los colores del Servicio Nacional de Salud escocés). Está rodeado de jardines (diseñados para la terapia de pacientes) y aparcamientos subterráneos (tres plantas, con 1.500 plazas). Anexos al edificio principal, se encuentran el Instituto de Investigación (un edificio de ocho plantas, con laboratorios de máxima seguridad biológica), la Facultad de Medicina (edificio histórico de piedra amarilla, de 1905, donde se forman los futuros médicos), la Residencia de Personal (dos torres de diez plantas, para médicos residentes y personal de guardia), y la helisuperficie (para la llegada de helicópteros medicalizados). Es un gigante dormido que nunca descansa, un hervidero de actividad día y noche, donde la vida y la muerte se cruzan en pasillos de suelo vinílico reluciente, bajo la luz blanca y fría de los fluorescentes. Y, como todo lugar donde la ciencia se enfrenta a lo inexplicable, aquí también se guardan secretos.`,
        pdfUrl: `#`,
        iconoTipo: `hospital`
    },

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS

	// ==================== PUBS
	
	{
        xPx: 218,
        yPx: 718,
        nombre: `Pub «Ruta 13»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-seinnse «Slighe 13»<br><strong>Pronunciación:</strong> /SLI-ye tre-ze/<br><strong>En inglés:</strong> Route 13 Pub<br><br>
		El Pub «Ruta 13» es un establecimiento temático de carretera americana. El favorito de los estudiantes que buscan un ambiente desenfadado, buena música rock y comida contundente (costillas BBQ, hamburguesas, patatas fritas con queso). Su decoración es una recreación kitsch de una carretera americana de los años 50: señales de tráfico, mapas de carreteras, neones, placas de matrícula, y un montón de cacharros vintage (una bomba de gasolina, un teléfono de cabina, una nevera de Coca-Cola). Tiene una máquina de pinball (de las antiguas, con palancas y botones) que es famosa en todo el distrito, y los sábados por la noche organiza un concurso de karaoke con premio (una cena gratis en el Restaurante «Bigotes de Gato»). Es un pub ruidoso, animado y lleno de energía, frecuentado por estudiantes de todas las facultades, por turistas jóvenes (que buscan una experiencia «auténticamente americana» en Escocia), y por algún que otro profesor despistado que viene a tomar una pinta sin ser reconocido. El local es grande (para los estándares del distrito), con capacidad para 150 personas, y se llena hasta la bandera los fines de semana.<br>
		El edificio es de los años 90 (de la primera expansión del campus), de ladrillo caravista color arena, reformado en 2023 para darle el aspecto de «diner americano» (con ventanales de cristal, un letrero de neón gigante y un toldo de rayas rojas y blancas). El dueño es un empresario local, amante de la cultura americana (y de las carreteras interestatales), que quiso traer un pedazo de EE. UU. a la Colina del Conocimiento. Su lema: «Buen rock, buena comida, buena gente». La clientela es fiel, y los estudiantes de la residencia Sur (la fiestera) son los clientes más habituales.
		<br><br>
		<strong>Tipo:</strong> Pub temático / Carretera<br>
		<strong>Horario:</strong> 19:00 - 04:00<br>
		<strong>Precio:</strong> 💰💰<br>
		<strong>Rapidez:</strong> ⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Costillas BBQ y hamburguesas.<br>
		<strong>Juegos:</strong> Dardos, billar, karaoke los sábados y una máquina de pinball.<br>
		<strong>Ambiente:</strong> Decorado con señales de tráfico, mapas de carreteras y neones. Ambiente de pub americano de carretera.<br>
		<strong>Música:</strong> Rock clásico, pop y música de los ochenta y noventa, a volumen alto.<br>
		<strong>Clientela habitual:</strong> Estudiantes, turistas y gente que busca un ambiente desenfadado.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los sábados hay concurso de karaoke con premio (una cena gratis).<br>
		✔️ Cuentan con una máquina de pinball.`,
        pdfUrl: `#`,
        iconoTipo: `pub`
    },

	// ==================== RESTAURANTES
	
	{
        xPx: 316,
        yPx: 652,
        nombre: `Restaurante «Bigotes de Gato»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-bìdh «Feusagan a’ Chait»<br><strong>Pronunciación:</strong> /FYES-a-gan a JAT/<br><strong>En inglés:</strong> Cat Whiskers Restaurant<br><br>
		El Restaurante «Bigotes de Gato» es el templo de la hamburguesa en la Colina del Conocimiento. Un local temático dedicado a los felinos que se ha convertido en el favorito de los estudiantes, los amantes de los gatos y la gente joven que busca una comida rápida pero de calidad, en un ambiente divertido y desenfadado. Su especialidad son las hamburguesas (de ternera, pollo o vegetarianas), los perritos calientes, las patatas fritas caseras y los batidos. Todos con nombres de razas de gatos. Los martes hay dos por uno en hamburguesas, y el local se llena hasta la bandera. La decoración es una explosión de bigotes: fotografías de gatos con bigotes dibujados en las paredes, bigotes gigantes de cartón colgando del techo, mesas con patas de gato (diseño de herradura con garras), y los camareros visten camiseta con bigote (negra, con un bigote blanco estampado en la parte superior). Es un restaurante informal, ruidoso y alegre, frecuentado por estudiantes de todas las facultades (sobre todo de la residencia Sur, la fiestera), por familias con niños pequeños (los domingos, los niños comen gratis con la compra de un menú adulto), y por algún que otro profesor despistado que viene a tomar una hamburguesa sin que los alumnos le reconozcan (no siempre lo consiguen). El local es grande. Con capacidad para 100 comensales. El dueño es un ex-estudiante de la universidad (se graduó en Bellas Artes) que combinó su pasión por la cocina (sobre todo las hamburguesas) con su amor por los gatos (tiene tres, que viven en su casa, no en el restaurante). Es un lugar de culto para los amantes de las hamburguesas con un toque de humor felino.<br>
		El edificio es de los años 80 (de la primera expansión del campus), de ladrillo caravista color arena, reformado en 2023 para darle el aspecto de un «diner americano con gatos». El interior es luminoso, con grandes ventanales, mesas de madera clara, y una decoración kitsch pero cuidada.
		<br><br>
		<strong>Tipo:</strong> Restaurante temático / Gatos<br>
		<strong>Horario:</strong> 12:00 - 16:00 / 19:00 - 23:00<br>
		<strong>Tipo de cocina:</strong> Internacional / Comida rápida de calidad<br>
		<strong>Precio:</strong> 💰<br>
		<strong>Rapidez:</strong> ⚡⚡⚡<br>
		<strong>¿Tiene mesas?:</strong> Sí<br>
		<strong>Especialidad:</strong> Hamburguesas (de ternera, pollo o vegetarianas), perritos calientes, patatas fritas caseras y batidos.<br>
		<strong>Ambiente:</strong> Decorado con fotografías de gatos y bigotes pintados en las paredes. Las mesas tienen patas de gato. Los camareros visten camiseta con bigote.<br>
		<strong>Clientela habitual:</strong> Estudiantes, amantes de los gatos y gente joven.<br><br>
		<strong>Notas:</strong><br>
		✔️ Los martes hay dos por uno en hamburguesas.<br>
		✔️ Las patatas fritas son caseras y se pueden pedir con diferentes salsas.<br>
		✔️ Ofrecen opciones vegetarianas y veganas.<br>
		✔️ Los niños comen gratis los domingos con la compra de un menú adulto.`,
        pdfUrl: `#`,
        iconoTipo: `restaurante`
    },

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS

    {
        xPx: 71,
        yPx: 820,
        nombre: `Observatorio «James Gregory»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Amharclann «Sheumais Gregory»<br><strong>Pronunciación:</strong> /<em>AV-ar-klaun HAY-mish GRE-go-ree</em>/<br><strong>En inglés:</strong> James Gregory Observatory
		<br><br>
		El Observatorio «James Gregory» es otro de los edificios más emblemáticos de la Colina del Conocimiento. Un lugar de ciencia, historia y misterio que corona la parte más alta del distrito. Construido en 1892 con una donación del filántropo James Gregory (astrónomo aficionado y empresario textil), es un edificio imponente de ladrillo rojo y piedra arenisca, con una cúpula blanca giratoria que durante décadas apuntó al cielo nocturno de Dunbhròn. Durante más de un siglo, fue un centro de investigación astronómica y divulgación científica, con visitas nocturnas para estudiantes y público general. Pero desde hace varios años (las fechas exactas son confusas), el observatorio está cerrado. Oficialmente, por «reformas estructurales» y «actualización de equipos». Sin embargo, las obras se alargan sin explicación. Y lo que es más extraño: el perímetro está fuertemente vigilado. Vallas metálicas opacas de tres metros de altura, carteles de «Prohibido el paso. Peligro de derrumbe», y guardias de seguridad (de una empresa privada) que patrullan las 24 horas del día. Una vigilancia desproporcionada, según muchos vecinos, estudiantes y profesores. No se ve maquinaria de obras, no se oyen martillos, no se ven operarios. Solo las vallas, los guardias y el silencio.<br>
		Las teorías conspiranoicas y sobrenaturales se han multiplicado. Unas dicen que el observatorio fue clausurado porque descubrieron algo en el cielo que no debían haber visto (un asteroide que chocará contra la Tierra, una nave extraterrestre, un agujero negro). Otras, que lo que descubrieron no fue en el cielo, sino en el bosque (algo que se acerca, algo que despertó). Las más escépticas apuntan a razones económicas (falta de presupuesto) o a un conflicto de intereses entre la universidad y el ayuntamiento. Pero la vigilancia es real, y los guardias no hablan. Y los pocos que han logrado saltarse la valla (algún estudiante temerario, algún periodista) aseguran haber visto cosas raras en el interior: luces que se mueven sin fuente, instrumentos que se encienden solos, y una sensación de ser observados. No todos han vuelto para contarlo. O eso es lo que se rumorea.<br>
		El observatorio sigue en pie, imponente y mudo, vigilado por sus guardias y rodeado de misterio.`,
        pdfUrl: `#`,
        iconoTipo: `observatorio`
    },
    {
        xPx: 264,
        yPx: 679,
        nombre: `Universidad «James Watt»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Oilthigh «Sheumais Watt»<br><strong>Pronunciación:</strong> /<em>OL-ee HAY-mish Watt</em>/<br><strong>En inglés:</strong> James Watt University
		<br><br>
		La Universidad «James Watt» es el corazón intelectual de Dunbhròn. Una institución pública de gran prestigio fundada en 1890 como Dunbhròn Technical College y convertida en universidad en 1965. Es la segunda universidad más antigua de la región (después de la Universidad de Saint Andrews) y la más grande de Dunbhròn con un campus de 50 hectáreas situado en la zona suroeste de la ciudad. Alberga a más de 15.000 estudiantes y 1.500 profesores e investigadores, distribuidos en siete facultades (Biología, Medicina, Física y Química, Humanidades, Ingeniería, Ciencias Sociales y Derecho), residencias de estudiantes e instalaciones deportivas. No faltando una conexión directa con el Hospital Universitario<br>
		El campus es un parque verde y tranquilo, con una mezcla de edificios victorianos de ladrillo rojo (los más antiguos) y construcciones modernas de hormigón y cristal. El rector es un académico de reconocido prestigio, y el consejo de gobierno (formado por profesores, estudiantes y personal administrativo) toma las decisiones estratégicas. La universidad tiene acuerdos de colaboración con instituciones de todo el mundo, y es especialmente conocida por sus investigaciones en biomedicina, energías renovables, inteligencia artificial y materiales avanzados. Es un hervidero de actividad durante el día, tranquilo por la noche, y un lugar donde el saber y el futuro se construyen cada día.`,
        pdfUrl: `#`,
        iconoTipo: `universidad`
    },
	{
        xPx: 265,
        yPx: 634,
        nombre: `Residencia Universitaria Norte`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Luchd-còmhnaidh an Oilthigh a Tuath<br><strong>Pronunciación:</strong> /LUJ-k KO-nay an OL-ee a TU-a/<br><strong>En inglés:</strong> North University Residence<br><br>
		La Residencia Universitaria Norte es la más tranquila y silenciosa de las cuatro residencias del campus de la Universidad «James Watt». Un edificio funcional de ladrillo rojo de los años 60 (reformado en 2023) situado en el extremo norte del campus. Está pensada para estudiantes que buscan un ambiente propicio para el estudio y el descanso, lejos del bullicio de la vida social. Es la residencia favorita de los estudiantes de medicina, ciencias de la salud y posgrados, que pasan largas horas en la biblioteca o en el hospital y valoran el silencio por la noche. Las habitaciones son individuales (con baño privado), y las zonas comunes son amplias pero poco transitadas. El lema no escrito de los residentes es: «aquí se estudia, no se vive». El conserje, un señor mayor llamado Mr. Murray, lleva 30 años en el cargo y lo ha visto todo, pero no habla. Los estudiantes le tienen respeto, y algunos, un poco de miedo.<br>
		El edificio fue construido en 1965 (como parte de la expansión de la universidad) y reformado en 2023 (nuevas ventanas, climatización, wifi de alta velocidad, y mejoras en la accesibilidad). Es un edificio de cinco plantas, con 120 habitaciones individuales (20 por planta), más zonas comunes en la planta baja: sala de estar, sala de estudio insonorizada, cocina compartida, lavandería, y un pequeño gimnasio. El ambiente es ordenado y silencioso, casi monacal. Los residentes apenas se relacionan entre sí (cada uno está en su mundo), pero existe un código no escrito de respeto mutuo: no se escucha música alta después de las 22:00, no se dejan platos sucios en la cocina, y si alguien tiene una urgencia (médica, emocional o académica), siempre hay alguien dispuesto a ayudar, aunque sea a desgana.
		<br><br>
		<strong>Tipo:</strong> Residencia de estudiantes<br>
		<strong>Horario:</strong> Acceso restringido a residentes<br>
		<strong>Ambiente:</strong> Silencioso y ordenado, propicio para el estudio. Es la residencia más tranquila del campus, frecuentada por estudiantes de medicina que apenas se ven por las zonas comunes.<br>
		<strong>Residentes:</strong> Estudiantes de medicina y ciencias de la salud.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuenta con sala de estar, zona de estudio insonorizada, cocina compartida y lavandería.<br>
		✔️ El silencio es norma no escrita después de las diez de la noche.<br>
		✔️ Organizan sesiones de estudio en grupo y talleres de primeros auxilios.`,
        pdfUrl: `#`,
        iconoTipo: `residencia`
	},
	{
        xPx: 265,
        yPx: 714,
        nombre: `Residencia Universitaria Sur`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Luchd-còmhnaidh an Oilthigh a Deas<br><strong>Pronunciación:</strong> /LUJ-k KO-nay an OL-ee a JESS/<br><strong>En inglés:</strong> South University Residence<br><br>
		La Residencia Universitaria Sur es la más animada, ruidosa y legendaria de las cuatro residencias del campus de la Universidad «James Watt». Es un edificio funcional de ladrillo rojo de los años 70 (reformado en 2023) situado en el extremo sur del campus, cerca de la carretera de circunvalación y a poca distancia de la Facultad de Ingeniería y del polideportivo. Está pensada para estudiantes que buscan vida social, fiesta y compañerismo, lejos del silencio casi monacal de la Residencia Norte. Es la residencia favorita de los estudiantes de ingeniería, arquitectura y carreras técnicas, que alternan largas horas de estudio con fiestas improvisadas en las zonas comunes.<br>
		Las habitaciones son individuales (con baño privado), pero los residentes apenas pasan tiempo en ellas: la vida social se concentra en la sala de estar (con altavoces y televisión), en la cocina compartida (donde se organizan cenas colectivas) y en el pequeño bar de la planta baja (que los estudiantes han montado con sus propios medios). El lema no escrito de los residentes es: «aquí se vive, se estudia y se celebra». Las fiestas en la planta baja son legendarias entre los alumnos de la universidad, y a veces se descontrolan (música alta, alcohol, sexo, desórdenes). La seguridad privada del distrito ha acudido en varias ocasiones por quejas o sucesos indecentes. El director de la residencia está a punto de dimitir, cansado de las fiestas y de los partes disciplinarios. Los bomberos también conocen el edificio: los estudiantes han provocado ya tres incendios de poca monta (tostadoras, velas, petardos).<br>
		El edificio fue construido en 1972 como parte de la expansión de la universidad y reformado en 2023 (nuevas ventanas, climatización, wifi de alta velocidad, y mejoras en la accesibilidad). Es un edificio de seis plantas, con 180 habitaciones individuales (30 por planta), más zonas comunes en la planta baja: sala de estar con altavoces, cocina compartida grande, lavandería, un pequeño bar (no oficial), y un gimnasio. El ambiente es caótico, ruidoso y divertido. Los residentes se conocen todos entre sí (al menos de vista) y existe un fuerte sentido de comunidad. Aunque a veces se pelean por el uso de la cocina o por el volumen de la música. Las normas de convivencia son flexibles (casi inexistentes), pero hay un código no escrito: no te metas con los vecinos de otras residencias (sobre todo los de la Norte, a los que llaman «los muertos vivientes»), y si alguien tiene un problema (académico, sentimental, económico), siempre hay alguien dispuesto a ayudarle con una cerveza y un consejo.
		<br><br>
		<strong>Tipo:</strong> Residencia de estudiantes<br>
		<strong>Horario:</strong> Acceso restringido a residentes<br>
		<strong>Ambiente:</strong> Animado y ruidoso, con música constante en las zonas comunes. Es la residencia más fiestera del campus, famosa por sus celebraciones improvisadas.<br>
		<strong>Residentes:</strong> Estudiantes de ingenierías y arquitectura.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuenta con sala de estar con televisión y altavoces, zona de estudio (poco usada), cocina compartida y lavandería.<br>
		✔️ Las fiestas en la planta baja son legendarias entre los alumnos.<br>
		✔️ Organizan torneos de videojuegos y noches de cine temático.`,
        pdfUrl: `#`,
        iconoTipo: `residencia`
	},
    {
        xPx: 340,
        yPx: 668,
        nombre: `Residencia Universitaria Este`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Luchd-còmhnaidh an Oilthigh an Ear<br><strong>Pronunciación:</strong> /<em>LUJ-k-nan KO-nay an OL-ee an ER»</em>/<br><strong>En inglés:</strong> East University Residence<br><br>
		
		<br><br>
		<strong>Tipo:</strong> Residencia de estudiantes<br>
		<strong>Horario:</strong> Acceso restringido a residentes<br>
		<strong>Ambiente:</strong> Acogedor y multicultural, con estudiantes de todo el mundo conviviendo. Es la residencia más familiar del campus, con un ambiente respetuoso y abierto.<br>
		<strong>Residentes:</strong> Estudiantes internacionales (Erasmus, becarios, visitantes).<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuenta con sala de estar con mapas y banderas, zona de estudio, cocina compartida (con ingredientes de todo el mundo) y lavandería.<br>
		✔️ Organizan cenas internacionales y noches de intercambio de idiomas.<br>
		✔️ Es la única residencia con un pequeño mostrador de información en varios idiomas.`,
        pdfUrl: `#`,
        iconoTipo: `residencia`
    },
	{
        xPx: 182,
        yPx: 668,
        nombre: `Residencia Universitaria Oeste`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Luchd-còmhnaidh an Oilthigh an Iar<br><strong>Pronunciación:</strong> /LUJ-k KO-nay an OL-ee an I-ar/<br><strong>En inglés:</strong> West University Residence<br><br>
		
		<br><br>
		<strong>Tipo:</strong> Residencia de estudiantes<br>
		<strong>Horario:</strong> Acceso restringido a residentes<br>
		<strong>Ambiente:</strong> Creativo y desenfadado, con las paredes decoradas con pinturas y carteles de exposiciones. Es la residencia más alternativa del campus, con un pequeño bar solo para residentes.<br>
		<strong>Residentes:</strong> Estudiantes de arte, humanidades y música.<br><br>
		<strong>Notas:</strong><br>
		✔️ Cuenta con sala de estar con instrumentos musicales, zona de estudio, cocina compartida y lavandería.<br>
		✔️ El bar interno (solo para residentes) organiza micro abiertos y exposiciones.<br>
		✔️ Organizan talleres de pintura, nocines de poesía y conciertos acústicos.`,
        pdfUrl: `#`,
        iconoTipo: `residencia`
	},
	{
        xPx: 359,
        yPx: 692,
        nombre: "Museo Real de Dunbhròn «James Hutton»",
		descripcionCorta: `<br><strong>En gaélico:</strong> Taigh-tasgaidh Rìoghail Dhùn Bhròin «Seumas Hutton»<br><strong>Pronunciación:</strong> /<em>TIE HASS-gih REE-ul GHOO-n VRO-in SHAY-mus HUT-ton</em>/<br><strong>En inglés:</strong> Royal Museum of Dunbhròn «James Hutton»
		<br><br>
		El Museo Real de Dunbhròn es el museo más grande e importante de la ciudad. Un centro cultural de primer orden inaugurado en 2015. Es un museo de nueva generación: espacios diáfanos, luz natural, tecnología interactiva, y una museografía que combina lo clásico (vitrinas de madera, suelos de mármol) con lo contemporáneo (pantallas táctiles, realidad aumentada). Cuenta la historia de Dunbhròn, Escocia y el mundo desde la prehistoria hasta hoy, con especial atención a la relación entre el ser humano y la naturaleza. Fue financiado por el gobierno escocés, el ayuntamiento y varias fundaciones privadas. La fachada es de piedra arenisca amarilla y cristal. Es un lugar de referencia para escolares, turistas, investigadores y dunbhrònenses, con actividades, talleres, conferencias y un restaurante con vistas al valle. El director es un historiador de renombre internacional, y el personal es numeroso y cualificado.<br>
		Se dice que el museo tiene un secreto: en sus sótanos (cinco plantas subterráneas) se guardan las colecciones no expuestas, y también algunos objetos «especiales» (restos arqueológicos de dudosa procedencia, objetos con presuntas propiedades mágicas que alguna extraña agencia ha confiscado). También se dice que hay una sala cerrada con llave a la que solo acceden el director y el jefe de conservación, donde se guardan los objetos «peligrosos».`,
        pdfUrl: `#`,
        iconoTipo: `monumento`
	},


    // ==================== LA CIMA DE LOS VIENTOS ====================
	
	// ==================== BAR

	// ==================== BIBLIOTECA

	// ==================== CAFÉ - BAR

	// ==================== CATEDRALES / IGLESIAS

	// ==================== CENTRO DE SALUD

	// ==================== COLEGIOS

	// ==================== COMISARÍA

	// ==================== HELADERÍAS

	// ==================== HOSPITALES

	// ==================== HOTELES/HOSTALES

	// ==================== INSTITUTOS

	// ==================== LIBRERÍAS

	// ==================== PARQUE DE BOMBEROS

	// ==================== PUBS

	// ==================== RESTAURANTES

	// ==================== TIENDA

	// ==================== TIENDA DE SOUVENIRS

	// ==================== TIENDA GCSETÉRICA

	// ==================== OTROS

    {
        xPx: 407,
        yPx: 507,
        nombre: `Centro Comercial «The Heighs»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Ionad Bhùthan «The Heighs»<br><strong>Pronunciación:</strong> /<em>EE-un-at VOO-an The Heighs</em>/<br><strong>En inglés:</strong> The Heighs Shopping Centre
		<br><br>
		The Heights es el centro comercial más grande, moderno, lujoso y exclusivo de Dunbhròn. Un templo del consumo elevado a la máxima potencia. Situado en el corazón de la Cima de los Vientos, entre las cuatro urbanizaciones de lujo y a pocos minutos de las mansiones victorianas, este coloso de cristal, acero y mármol es el centro neurálgico de la vida comercial y social de la élite dunbhrònense. No es un centro comercial al uso: no hay cadenas de fast food, ni tiendas de chucherías, ni cajeros automáticos (para qué, si todos pagan con tarjeta negra), ni zonas de juegos infantiles ruidosas. Es un espacio de lujo silencioso, donde el suelo es de mármol blanco de Carrara, las lámparas son de araña de cristal de Murano, la climatización es perfecta (siempre a 22 grados) y el aroma ambiental —un sutil perfume de azahar y sándalo— se renueva cada hora mediante un sistema de difusión de alta tecnología.<br>
		Inaugurado en 2022 (tras cuatro años de obras y un presupuesto que los arquitectos prefieren no recordar), The Heights fue diseñado por el prestigioso estudio de arquitectura Foster + Partners (el mismo del Aeropuerto de Dunbhròn y del Museo Real), que creó un edificio icónico: cuatro plantas sobre rasante (más dos sótanos de aparcamiento) con una fachada de cristal reflectante y paneles de acero inoxidable pulido que cambia de color según la luz del sol (de azul cielo a dorado a rosa). En lo alto, una torre de observación de 50 metros con un mirador acristalado al que solo pueden acceder los socios del club privado. Por la noche, la fachada se ilumina con LED de colores cambiantes, visible desde toda la ciudad (y desde el mar, en días despejados). Es el faro de riqueza que la Cima de los Vientos proyecta sobre Dunbhròn, un recordatorio constante de quién manda.<br>
		The Heights no es solo un centro comercial. Es un ecosistema de lujo: aquí se compra, se come, se bebe, se ejercita, se visita el spa, se corta el pelo, se revisa la vista, se arregla el coche (en el taller subterráneo de alta gama), se va al médico (en la clínica privada de la tercera planta), se organizan eventos benéficos (en el salón de actos de la cuarta planta), y se socializa (en los clubes privados de la torre). Los residentes de la Cima de los Vientos no necesitan salir de The Heights para nada. Y los que no viven en la Cima ni siquiera pueden entrar: el acceso está restringido a residentes del distrito y a sus invitados, con control de identidad en la puerta. Es el centro comercial de los ricos, para los ricos, y por los ricos. Y es, sin duda, el orgullo (y el símbolo) del distrito más exclusivo de Dunbhròn.`,
        pdfUrl: `#`,
        iconoTipo: `centrocomercial`
    },

    // ==================== OTROS SITIOS ====================

	{
        xPx: 1054,
        yPx: 80,
        nombre: `Cala del Perro`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bàgh a' Choinn<br><strong>Pronunciación:</strong> /<em>Ba-gh a JYO-in</em>/<br><strong>En inglés:</strong> Dog Cove
		<br><br>
		La Cala del Perro es la más grande y concurrida de las calas de la costa norte de Dunbhròn. Una playa de arena gris oscura en forma de media luna, protegida por acantilados de basalto columnar. En verano se llena de turistas y familias; en invierno apenas frecuentan paseadores con perros. Tiene tres elementos distintivos: las «Columnas de los Susurros» (un anfiteatro natural donde el viento silba como si fueran almas de ahogados), la «Cueva del Sellador» (una cavidad con piscina natural, punto de encuentro de cambiaformas acuáticos) y el «Peñasco del Ahorcado» (un farallón rocoso usado por misteriosas criaturas como refugio en noches de luna llena). Su historia incluye contrabando en el siglo XVI, desembarco jacobita en 1745, un bombardeo alemán en 1941 (cuyos restos aún se ven), y una desaparición misteriosa en 1987...`,
        pdfUrl: `#`,
        iconoTipo: `advertencia`
    },
    {
        xPx: 892,
        yPx: 80,
        nombre: `Cala de la Calavera`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bàgh a' Chlaigin<br><strong>Pronunciación:</strong> /<em>Ba-gh a JLA-kin</em>/<br><strong>En inglés:</strong> Skull Cove
		<br><br>
		La Cala de la Calavera es el lugar más inaccesible y salvaje de la costa norte de Dunbhròn. Un rincón diminuto encajonado entre acantilados de basalto de 40 metros, al que solo se puede acceder mediante una cadena oxidada. Su nombre proviene de la Cueva de los Huesos, una cavidad donde se acumulan restos de animales (y quizás humanos) que los cambiaformas usan como comedero. La cala también alberga el Arco del Diablo (un arco natural que en tormentas dispara agua a 20 metros) y las Manos de Piedra (dos salientes que para los magos son marcadores de un portal). Su historia incluye ejecuciones sumarias en el siglo XVII y el naufragio del pesquero «Espíritu del Mar» en 1890 (del que solo se recuperó un remo con una mano agarrada).`,
        pdfUrl: `#`,
        iconoTipo: `advertencia`
    },
    {
        xPx: 518,
        yPx: 152,
        nombre: `Cala de Cristal`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bàgh na Glainne<br><strong>Pronunciación:</strong> /<em>Ba-gh na GLAIN-ye</em>/<br><strong>En inglés:</strong> Glass Cove
		<br><br>
		La Cala de Cristal es un secreto bien guardado en la costa noroeste de Dunbhròn, accesible solo por un sendero forestal. Es una pequeña cala de arena brillante compuesta de mica (de ahí su nombre), con una laguna interior de agua verde esmeralda que se calienta en verano y se congela superficialmente en invierno. En su borde crece un roble solitario cubierto de cintas de colores, donde los lugareños piden deseos; los iniciados saben que es un punto de poder mágico. Cada amanecer aparecen pequeñas huellas en la arena que los ancianos atribuyen a las hadas. Su historia incluye ofrendas celtas, la desaparición de una mujer acusada de brujería en 1560 (cuyo fantasma aún cuentan que se aparece —sobre todo en noches de luna llena—), y un suceso en 1972 donde tres hippies desaparecieron una semana...`,
        pdfUrl: `#`,
        iconoTipo: `advertencia`
    },
    {
        xPx: 747,
        yPx: 65,
        nombre: `Cala de los Ahogados`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bàgh nam Bàite<br><strong>Pronunciación:</strong> /<em>Ba-gh nam BA-te</em>/<br><strong>En inglés:</strong> Drowned Men's Cove
		<br><br>
		La Cala de los Ahogados es el lugar más sombrío y maldito de la costa de Dunbhròn. Un rincón minúsculo cubierto de afilados guijarros de basalto negro. Solo se puede visitar durante las dos horas de marea baja, cuando el agua la deja al descubierto. Su nombre proviene de los cadáveres que una corriente traicionera deposita aquí con precisión cruel. En la cala se encuentran el pilar de las mareas (con grabados rúnicos casi borrados), la escalera de los muertos (tallada en la roca, prohibida al público, y el Banco de los Condenados (una roca plana donde los verdugos sentaban a los prisioneros antes de ejecutarlos, manchada de oscuro por sangre o líquenes). Su historia incluye la Edad Media (vertedero de cadáveres del castillo), el asedio de Cromwell en 1651 (defensores que se mataron al huir por la escalera) y el hundimiento de un submarino alemán en 1941, cuyo pecio aún visitan buceadores... y otras cosas.`,
        pdfUrl: `#`,
        iconoTipo: `advertencia`
    },
    {
        xPx: 798,
        yPx: 102,
        nombre: `El Bosque de los Faros`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Coille nan Taighean-solais<br><strong>Pronunciación:</strong> /<em>KOL-yeh nan TIE-an SO-lash</em>/<br><strong>En inglés:</strong> Forest of the Lighthouses
		<br><br>
		El Bosque de los Faros es un lugar de belleza salvaje y atmósfera onírica, situado al norte del Casco Antiguo, más allá de las últimas casas de piedra amarilla. Es un bosque frondoso de abedules, serbales, avellanos y acebos, con el suelo alfombrado de musgo y helechos, y campanillas azules en primavera. La niebla es frecuente, envolviéndolo en una atmósfera suspendida en el tiempo, con el rumor de las olas y el viento entre las hojas como banda sonora. El bosque es famoso por sus tres faros activos (Norte, Centro y Sur), construidos entre 1824 y 1901, cuyas casas de fareros están vacías pero curiosamente cuidadas. Es también el lugar de reunión favorito de los jóvenes de Dunbhròn, que suben los fines de semana a besarse —algunos incluso con intenciones más íntimas— y a olvidarse del mundo. Aunque algunos bajan la voz y advierten: «No te alejes del coche. Y si ves luces que no son de los faros, no las sigas». El bosque ha sido foco de historias sobre hadas: criaturas inmortales, bellas y terribles, con una moralidad muy distinta a la humana, donde una ofensa puede ser una condena y un beso en la niebla el comienzo de un secuestro de cien años. Se han producido desapariciones. Pero nunca se ha podido demostrar que tengan que ver con cosas sobrenaturales.`,
        pdfUrl: `#`,
        iconoTipo: `bosque`
    },
    {
        xPx: 486,
        yPx: 954,
        nombre: `Feria`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Fèill<br><strong>Pronunciación:</strong> /<em>FEYL</em>/<br><strong>En inglés:</strong> Fairground
		<br><br>
		La Feria de Dunbhròn está en el top 3 de eventos más esperados del año en la ciudad. Una explosión de luces, música y multitudes que transforma una enorme explanada al sur de la ciudad durante un mes cada verano (desde finales de julio hasta finales de agosto). Tiene noria gigante, tómbolas, tiros al blanco, coches de choque, tren de la bruja, túnel del terror, y el olor inconfundible del algodón de azúcar y las patatas fritas. Para los dunbhrònenses es una tradición familiar; para los turistas, una atracción exótica; para los feriantes (muchos de ellos gitanos), el trabajo del año. La noria de 40 metros es el punto de referencia: desde lo alto se ve toda la ciudad y el mar. Los niños del cercano Campamento ROM se cuelan por los agujeros de la valla, y los feriantes a veces les dejan subirse gratis; hay una solidaridad tácita entre nómadas. Por la noche, cuando la feria se apaga, el Campamento y la feria parecen fundirse: los feriantes van al Campamento a beber, y los del Campamento ayudan a desmontar las atracciones. La feria atrae también a vecinos de localidades cercanas (con autobuses organizados), colegios en excursión, jubilados de Los Jardines y jóvenes del Corazón Roto por la noche.`,
        pdfUrl: `#`,
        iconoTipo: `feria`
    },
	{
        xPx: 1127,
        yPx: 955,
        nombre: `Aeropuerto de Dunbhròn`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Port-adhair Dhùn Bhròn<br><strong>Pronunciación:</strong> /<em>PORT-a-yar JUN VRON</em>/<br><strong>En inglés:</strong> Dunbhròn Airport
		<br><br>
		El Aeropuerto de Dunbhròn es la puerta de entrada aérea a la ciudad. Una infraestructura moderna y funcional situada a las afueras de la ciudad. Es un edificio de hormigón, cristal y acero, limpio y eficiente desde el que puede verse la central térmica y los cuatro bloques de pisos grises. Tiene cuatro pistas, una terminal principal con capacidad para 3 millones de pasajeros al año, y una terminal más pequeña para vuelos privados y de carga. Fue inaugurado en 1976, ampliado en 1995 y renovado en 2020. Hoy conecta con Londres, Edimburgo, Glasgow, Dublín, Ámsterdam, Madrid, Berlín, Roma y París. Los turistas que llegan ven primero las chimeneas y los bloques grises antes de asomarse a la terminal de mármol y cristal.<br>
		Para llegar desde el centro hay que atravesar el Casco Antiguo, el Corazón Roto, el Barrio Gótico, y finalmente entrar en Port Ìosal: donde las calles son más anchas y peor asfaltadas. La línea de autobús municipal número 17 conecta la terminal con el centro (sale cada hora, pero nunca cumple el horario). Los taxis son caros. Y sus conductores distinguen bien a los turistas (propina segura) de los residentes (que pagan justo). Los vecinos de Port Ìosal usan el aeropuerto como lugar de paso: los caminos que bordean las pistas conectan con el Campamento ROM, y los aparcamientos vacíos por la noche son puntos de encuentro para los jóvenes del barrio. Se rumorea que los túneles de servicio del aeropuerto comunican con los sótanos de los almacenes portuarios de contrabando, aunque nadie lo ha demostrado.`,
        pdfUrl: `#`,
        iconoTipo: `aeropuerto`
    },
    {
        xPx: 674,
        yPx: 996,
        nombre: `Fuerte «Abercorn»`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Gearastan «Abercorn»<br><strong>Pronunciación:</strong> /<em>GYE-ras-tan A-ber-corn</em>/<br><strong>En inglés:</strong> Abercorn Fort
		<br><br>
		El Fuerte Abercorn es una mole de hormigón y acero construida por el ejército británico a mediados del siglo XX. Fue clausurada en los años noventa y hoy ocupada por una comunidad secreta y desconfiada. Está situado al sur de Dunbhròn. Más allá del Campamento ROM, casi en el límite municipal. Desde la carretera se ven vallas oxidadas y carteles medio caídos, pero bajo esa apariencia de abandono los ocupantes han restaurado y modernizado las instalaciones. Convirtiéndolas en un centro de operaciones autosuficiente con vigilancia perimetral, generadores de energía, internet de alta velocidad y una pequeña pista de aterrizaje. Sus ocupantes son una mezcla de radicales políticos (anarquistas, activistas anticapitalistas) y contrabandistas que han encontrado en el fuerte un refugio seguro. Las autoridades saben que está okupado, pero desalojarlo costaría demasiado. Así que han optado por ignorarlo. Los vecinos del Campamento ROM conocen el fuerte: algunos comercian con sus ocupantes, otros los evitan, pero nadie habla de ellos en voz alta. El fuerte no es un lugar para turistas; los pocos que se han acercado han sido disuadidos. La leyenda dice que está protegido por «algo más que hombres armados», pero eso es solo un rumor.`,
        pdfUrl: `#`,
        iconoTipo: `baseMilitar`
    },
    {
        xPx: 376,
        yPx: 975,
        nombre: `Campamento ROM`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Campa ROM<br><strong>Pronunciación:</strong> /<em>KAM-pa ROM</em>/<br><strong>En inglés:</strong> ROM Camp
		<br><br>
		El Campamento ROM es el asentamiento gitano de Dunbhròn. Un lugar de tierra batida, caravanas de colores y perros flacos que deambulan en libertad. Está ubicado a poco más de quinientos metros de la enorme explanada donde cada verano se instala la feria. No es un lugar bonito: unas cuarenta o cincuenta caravanas (algunas oxidadas, otras pintadas de colores vivos), casas prefabricadas sin reparar, cables eléctricos colgando de postes improvisados, y contenedores de basura que arden los viernes por la noche cuando hay fiesta. Las autoridades han intentado desalojarlo en varias ocasiones, pero siempre han fracasado: la comunidad tiene abogados, recursos y paciencia, y sabe que Dunbhròn no tiene otro sitio donde ponerlos. Para los dunbhrònenses, el Campamento es el lugar que la ciudad prefiere no ver. Aunque en emergencias (un incendio, una enfermedad grave, un niño perdido) las puertas se abren y todos ayudan. Y los gitanos del Campamento saben que Dunbhròn es su sitio: no se irán.`,
        pdfUrl: `#`,
        iconoTipo: `campamento`
    },
    {
        xPx: 143,
        yPx: 536,
        nombre: `El Robledal Negro`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Doire Dubh<br><strong>Pronunciación:</strong> /<em>DOHR-eh DOOV</em>/<br><strong>En inglés:</strong> Black Oakwood
		<br><br>
		El Robledal Negro es el corazón salvaje de Dunbhròn. Un bosque denso, centenario y umbrío situado más allá del límite occidental de la ciudad. Donde los robles viejos y frondosos forman un entorno cerrado e íntimo, con olores a tierra fresca, humedad limpia y hongos silvestres. En su interior se encuentra un círculo druídico de doce piedras de granito gris, que los arqueólogos fechan entre la Edad del Hierro y el período picto, y que los vecinos llaman simplemente «el Círculo». El bosque está habitado por los Daoine a' Choille («la gente del bosque»): campamentos errantes que viven al margen de la ciudad. Comercian con lo que recolectan y fabrican, y ofrecen ayuda a los peregrinos o niños perdidos. Sin embargo, la gente arrogante, codiciosa o problemática corre peligro: hay historias de un arqueólogo desmembrado, cazadores abiertos en canal y un periodista desaparecido. La policía archiva los casos como «ataques de animales salvajes». Para los dunbhrònenses, la ciudad termina donde empieza el robledal, y la mayoría, sabiamente, no cruzan ese límite.`,
        pdfUrl: `#`,
        iconoTipo: `bosque`
    },
    {
        xPx: 52,
        yPx: 441,
        nombre: `Círculo rúnico`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Cearcall Rùnach<br><strong>Pronunciación:</strong> /<em>KYAR-kal ROO-naj</em>/<br><strong>En inglés:</strong> Runic Circle
		<br><br>
		En algún punto indeterminado del corazón del Robledal Negro, donde los robles centenarios se abren en un claro que parece esperar siempre la luna, se encuentra el Círculo Druídico de Dunbhròn. Los vecinos de la ciudad lo llaman simplemente «el Círculo», como si no mereciese otro nombre. Es un lugar de piedra y silencio, de musgo y memoria, donde los siglos se han acumulado como las hojas muertas en el suelo del bosque. Las doce piedras de granito gris se alzan en un círculo casi perfecto, algunas erguidas y firmes, y otras ligeramente inclinadas por el peso de los años. Están cubiertas de líquenes plateados y, en primavera, de pequeñas flores silvestres que crecen entre sus grietas. No hay senderos señalizados que conduzcan hasta él, ni carteles explicativos, ni barreras para protegerlo de los visitantes. Solo la red de veredas informales que unos pocos lugareños conocen de memoria y que los forasteros harían bien en recorrer con respeto y, preferiblemente, con un guía.<br>
		Los arqueólogos de la universidad han fechado las piedras en algún momento entre la Edad del Hierro y el período picto, pero nunca han conseguido ponerse de acuerdo sobre su propósito. Algunos creen que fue un lugar de ceremonias religiosas. Otros un templo al aire libre donde los antiguos sacerdotes ofrecían sacrificios a los dioses. Y otros sostienen que era un observatorio astronómico: un calendario de piedra que marcaba los solsticios y los equinoccios. Un par de profesores jubilados de la Facultad de Historia defienden que no era ninguna de esas cosas, sino simplemente un lugar de encuentro: un punto neutral donde las tribus de la región se reunían sin temor a traiciones para intercambiar mercancías, celebrar matrimonios y resolver disputas. Lo que nadie discute es que el lugar posee una calma especial, como si las piedras hubieran absorbido décadas de silencio y ahora lo devolvieran en forma de paz.<br>
		El círculo druídico no es un destino turístico. Y es bastante raro ver a visitantes o naturalistas por estos bosques, a excepción de las rutas guiadas que algún grupo muy osado haya contratado. Los dunbhrònenses, especialmente los de Los Jardines y los de la Colina del Conocimiento (los barrios más cercanos al bosque), conocen y evitan el círculo. Y a sus hijos —al menos el que los tiene—, desde muy pequeños, se les insiste en que no se acerquen, sobre todo de noche. En la entrada de algunos senderos, el ayuntamiento ha colocado carteles de advertencia por la presencia ocasional de jabalíes, osos y por el riesgo de desprendimientos en zonas de terreno inestable. Los guardas forestales que han trabajado décadas en los límites del Robledal Negro conocen la norma no escrita: <br>
		«<em>Si alguien se adentra en el bosque con malas intenciones y no sale al atardecer, no entres a buscarlo. Espera hasta la mañana siguiente. Entonces, llama a la policía. Pero no esperes encontrar a nadie con vida. El bosque es hermoso, pero no perdona ni a los imprudentes ni a los de corazón oscuro</em>».`,
        pdfUrl: `#`,
        iconoTipo: `runas`
    },
    {
        xPx: 545,
        yPx: 390,
        nombre: `Río Leith`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Abhainn Lìte<br><strong>Pronunciación:</strong> /<em>AV-in LEET</em>/<br><strong>En inglés:</strong> Leith River`,
        pdfUrl: `#`,
        iconoTipo: `rio`
    },
    {
        xPx: 971,
        yPx: 435,
        nombre: `Río Corrie`,
		descripcionCorta: `<br><strong>En gaélico:</strong> Abhainn Coire<br><strong>Pronunciación:</strong> /<em>AV-in KO-re</em>/<br><strong>En inglés:</strong> Corrie River`,
        pdfUrl: `#`,
        iconoTipo: `rio`
    }/*,
    {
        xPx: 236,
        yPx: 460,
        nombre: `Mansión victoriana: 1`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «a' Chnuic Gaoithe<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl «*a* Jní-ck Gúi-je»</em>/<br><strong>En inglés:</strong> Windyhill Primary`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    },
    {
        xPx: 246,
        yPx: 372,
        nombre: `Mansión victoriana: 2`,
        descripcionCorta: `<br><strong>En gaélico:</strong> Bun-sgoil «a' Chnuic Gaoithe<br><strong>Pronunciación:</strong> /<em>Bun-sgoyl «*a* Jní-ck Gúi-je»</em>/<br><strong>En inglés:</strong> Windyhill Primary`,
        pdfUrl: `#`,
        iconoTipo: `predeterminado`
    }*/
];

// ========================================================
// INICIALIZACIÓN DEL MAPA (NO HACE FALTA MODIFICAR NADA)
// ========================================================

const contenedor = document.querySelector('.mapa-container');
const imagen = document.getElementById('mapaBase');

// Dimensiones originales de la imagen (¡NO CAMBIES ESTOS VALORES!)
const ANCHO_ORIGINAL = 1536;
const ALTO_ORIGINAL = 1024;

// Mapa de emojis por tipo de icono
const emojis = {
    acuario: `🐠`,
    advertencia: `🚩`,
    aeropuerto: `✈️`,
    almacen: `📦`,
    astilleroConstruccion: `🚢`,
    astilleroReparaciones: `🏗️`,
    astilleroTaller: `🛠️`,
    bar: `🍺`,
    barRockero: `🎸`,
    baseMilitar: `🪂`,
    biblioteca: `📖`,
    bomberos: `🧯`,
    bosque: `🌲`,
    bus: `🚌`,
	cafeteria: `☕`,
    campamento: `🏕️`,
    casaApuestas: `🎰`,
    casaSocial: `🏚️`,
    casino: `🎰`,
    castillo: `🏰`,
    cementerio: `💀`,
    centralTermica: `⚡`,
    centrocomercial: `🏬`,
    centromedico: `🩺`,
    chiringuito: `🎪`,
    colegio: `🎒`,
    comisaria: `👮`,
    discoteca: `🎧`,
    esoterico: `🕯️`,
    fabrica: `🏭`,
    feria: `🎡`,
    heladeria: `🍨`,
    hospital: `🚑`,
    hotel: `🏨`,
    iglesia: `⛪`,
    instituto: `🏫`,
    kebab: `🌯`,
    libreria: `📚`,
    lonja: `🐟`,
	mercadillo: `🏮`,
    monumento: `🏛️`,
    observatorio: `🔭`,
    oficinas: `🏢`,
    paseo: `👣`,
    pizzeria: `🍕`,
    playa: `⛱️`,
    psiquiatrico: `🤯`,
    pub: `🍹`,
    puertoDeportivo: `🛳️`,
    referencia: `⚜️`,
    refineria: `🛢️`,
    residencia: `🏙️`,
    restaurante: `🍽️`,
    rio: `🌊`,
    runas: `🗿`,
    salaConciertos: `🏟️`,
    souvenirs: `🛍️`,
    supermercado: `🛒`,
    universidad: `🎓`
};

function crearMarcadores() {
    // Limpiar contenedor (sin eliminar la imagen)
    const existingMarkers = contenedor.querySelectorAll('.marcador, .marcador-emoji');
    existingMarkers.forEach(marker => marker.remove());

    puntos.forEach(punto => {
        const marcador = document.createElement('div');

        // Convertir píxeles a porcentaje usando las dimensiones originales
        const xPorcentaje = (punto.xPx / ANCHO_ORIGINAL) * 100;
        const yPorcentaje = (punto.yPx / ALTO_ORIGINAL) * 100;

        // Decidir tipo de marcador
        if (punto.iconoTipo && emojis[punto.iconoTipo]) {
            marcador.className = 'marcador-emoji';
            marcador.textContent = emojis[punto.iconoTipo];
        } else {
            marcador.className = 'marcador';
        }

        marcador.style.left = `${xPorcentaje}%`;
        marcador.style.top = `${yPorcentaje}%`;

        // Tooltip con tippy.js
        tippy(marcador, {
            allowHTML: true,
            content: `<h2 style="margin:0 0 8px 0; font-size:1.1rem;">${punto.nombre}</h2><p style="text-align: justify">${punto.descripcionCorta || ""}</p>`,
            placement: 'top',
            theme: 'fantasia-oscura',
            arrow: true,
            animation: 'fade',
            duration: 200,
            maxWidth: 750,
			popperOptions: {
				modifiers: [
					{
						name: 'flip',
						options: {
							fallbackPlacements: ['bottom', 'left', 'right', 'top']
						}
					},
					{
						name: 'preventOverflow',
						options: {
							boundary: 'viewport',
							padding: 8
						}
					}
				]
			}
        });

        // Click izquierdo: abrir PDF
        marcador.addEventListener('click', (e) => {
            e.stopPropagation();
            if (punto.pdfUrl && punto.pdfUrl !== `#`) {
                window.open(punto.pdfUrl, '_blank');
            } else {
                console.log(`📍 ${punto.nombre} - En construcción`);
            }
        });

        contenedor.appendChild(marcador);
    });
}

// Esperar a que la imagen cargue
if (imagen.complete) {
    crearMarcadores();
} else {
    imagen.addEventListener('load', crearMarcadores);
}