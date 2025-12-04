import React from 'react';

const History: React.FC = () => {
  return (
    <section id="historia" className="py-32 bg-[#fffdf5] paper-texture relative overflow-hidden">
      {/* Decorative watermark */}
      <div className="absolute top-20 left-10 text-[20rem] font-serif font-bold text-brand-black/5 select-none pointer-events-none -z-1 leading-none animate-pulse" style={{ animationDuration: '10s' }}>
        1989
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-xs tracking-[0.4em] font-bold uppercase text-brand-red mb-6 block">Nuestra Trayectoria</span>
          <h2 className="text-5xl md:text-7xl font-serif text-brand-black mb-8 leading-tight">
            Imprenta Omega: <br />
            <span className="italic font-light text-brand-blue">Tinta, Legado y el Alma de Talca</span>
          </h2>
          <div className="w-32 h-1 bg-brand-black mx-auto mb-10"></div>
          <p className="text-2xl text-gray-500 font-light italic font-serif max-w-2xl mx-auto">
            "Una historia de tres décadas imprimiendo la identidad maulina."
          </p>
        </div>

        {/* Article Body */}
        <article className="space-y-20">

          {/* Section I */}
          <div className="group">
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4 group-hover:border-brand-red transition-colors duration-500">
              <span className="text-brand-red font-serif font-bold text-3xl">I.</span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-blue transition-colors duration-300">El olor a tinta y los sueños</h3>
            </div>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify">
              <span className="float-left text-7xl font-serif font-bold text-brand-black mr-4 mt-[-10px] leading-none">P</span>
              ara entender la esencia de Imprenta Omega, es necesario cerrar los ojos y viajar en el tiempo. Es necesario situarse en el Talca de finales de la década de los ochenta. Era un Chile diferente, una ciudad que despertaba a nuevos tiempos, donde el ritmo de la vida aún se medía por el sonido de los pasos en la Alameda y el saludo cordial entre vecinos que se conocían por nombre y apellido. En aquel entonces, la comunicación no viajaba por fibra óptica ni se desvanecía en pantallas táctiles; la comunicación tenía peso, textura y, sobre todo, olor.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Era el 1 de noviembre de 1989. Mientras la primavera se asentaba definitivamente en el valle del Maule, tiñendo de verde los campos y trayendo esa brisa tibia característica de la zona central, un hombre estaba a punto de materializar una visión. Carlos Torres Lizana no solo estaba abriendo un negocio; estaba plantando una bandera. En un mundo donde el papel era el rey indiscutible de la burocracia, la educación y la publicidad, Carlos entendió que la imprenta no era un mero proceso industrial, sino un servicio vital para el desarrollo de la comunidad.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Aquel primer día, al girar la llave en la cerradura, Carlos sintió esa mezcla eléctrica de ansiedad y esperanza que solo conocen los emprendedores de raza. El olor a tinta fresca, a papel virgen y a lubricante de maquinaria impregnaba el aire, un aroma que para muchos podría resultar fuerte, pero que para él era el perfume del progreso. Imprenta Omega nacía no solo como una respuesta a una demanda comercial, sino como un compromiso personal de su fundador: la promesa de entregar calidad en cada hoja, de ser el soporte físico de las ideas de otros.
            </p>
            <blockquote className="my-12 border-l-4 border-brand-red pl-8 py-4 italic font-serif text-2xl text-gray-500 bg-white/50 p-6 rounded-r-lg shadow-sm">
              "Sabía que Talca necesitaba un socio estratégico, un lugar donde la seriedad y la puntualidad fueran la norma."
            </blockquote>
          </div>

          {/* Section II */}
          <div className="group">
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4 group-hover:border-brand-red transition-colors duration-500">
              <span className="text-brand-red font-serif font-bold text-3xl">II.</span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-blue transition-colors duration-300">El Arte de la Imprenta</h3>
            </div>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify">
              La historia de Imprenta Omega es, en muchos sentidos, la historia de la evolución gráfica en Chile. Durante estas tres décadas, las paredes de sus talleres han sido testigos silenciosos de una revolución tecnológica sin precedentes. En los inicios, el oficio de impresor tenía mucho de alquimia y de artesanía pura. Eran los tiempos de las máquinas offset que requerían un oído afinado para escuchar el ritmo de los rodillos y un ojo clínico para calibrar la mezcla exacta de agua y tinta.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Carlos Torres Lizana dominaba este arte. Cada trabajo era una pieza única que requería paciencia. El montaje manual, las pruebas de color, el ruido rítmico y casi hipnótico de las máquinas trabajando a plena marcha; todo formaba parte de una danza mecánica que daba vida a volantes, facturas, libros y afiches. En aquellos años, el error no tenía cabida; corregir significaba volver a empezar, y esa exigencia forjó en Imprenta Omega una disciplina de hierro y una obsesión por el detalle que perdura hasta hoy.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Sin embargo, el mundo cambió. La llegada de la era digital transformó radicalmente la industria. Donde muchos vieron una amenaza y cerraron sus puertas, Imprenta Omega vio una oportunidad para renacer. La empresa supo transitar desde la artesanía mecánica hacia la precisión digital sin perder su alma. Las antiguas máquinas, con su encanto nostálgico, dieron paso a tecnología de vanguardia capaz de imprimir en tiempos récord y con una definición que en 1989 hubiera parecido ciencia ficción.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Pero hay algo que la tecnología no puede reemplazar, y es el criterio humano. A pesar de la modernización, la filosofía de trabajo en Omega sigue siendo la misma que inculcó Carlos: la máquina es solo una herramienta; la calidad la pone el impresor. Hoy, cuando un cliente recibe un trabajo terminado, no solo recibe tinta sobre papel; recibe la experiencia acumulada de años de oficio, la garantía de que ojos expertos han revisado cada margen, cada tono y cada corte. Imprenta Omega ha demostrado que la modernidad no está peleada con la tradición, sino que se construye sobre ella.
            </p>
          </div>

          {/* Section III */}
          <div className="group">
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4 group-hover:border-brand-red transition-colors duration-500">
              <span className="text-brand-red font-serif font-bold text-3xl">III.</span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-blue transition-colors duration-300">El Corazón de Talca</h3>
            </div>
            <div className="bg-white p-10 border border-gray-200 shadow-lg md:float-right md:w-1/2 md:ml-10 md:mb-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <p className="font-serif italic text-brand-black text-center text-xl mb-4 leading-relaxed">"Las oficinas 6, 7 y 8 no son solo un espacio de trabajo; son un pedazo de la historia viva de Talca."</p>
              <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
            </div>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify">
              Dicen que la ubicación lo es todo, pero en el caso de Imprenta Omega, su dirección es más que una coordenada en el mapa; es un punto de referencia emocional para los talquinos. Situada estratégicamente en pleno centro neurálgico de la ciudad, en la Calle 1 Oriente con Avenida Dos Sur, número 1015, la imprenta ha operado desde las oficinas 6, 7 y 8 como un faro de actividad incesante.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Desde estas ventanas, la familia Torres ha visto cambiar la fisonomía de Talca. Han visto pasar desfiles, han sentido el pulso de las manifestaciones sociales, han observado cómo los antiguos adoquines daban paso al asfalto y cómo el comercio local se transformaba con la llegada de las grandes tiendas. Estar en la 1 Oriente con 2 Sur es estar en el sistema circulatorio de la ciudad. Es el lugar por donde todos pasan, el cruce de caminos donde convergen el estudiante, el empresario, el funcionario público y el vecino de a pie.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Para la comunidad maulina, decir "voy a la Omega" es una frase que no requiere explicaciones ni direcciones adicionales. Es un destino conocido, un lugar que forma parte del mapa mental de la ciudad. Esta permanencia física ha generado un vínculo de confianza inquebrantable. Mientras otros negocios han migrado a la periferia o han desaparecido, Imprenta Omega se ha mantenido firme en su bastión del centro, reafirmando su compromiso de estar siempre cerca, siempre accesible, siempre presente en el corazón de la actividad talquina.
            </p>
          </div>

          {/* Section IV */}
          <div className="group">
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4 group-hover:border-brand-red transition-colors duration-500">
              <span className="text-brand-red font-serif font-bold text-3xl">IV.</span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-blue transition-colors duration-300">El Legado Familiar</h3>
            </div>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify">
              Si el corazón de la imprenta es su ubicación y su maquinaria, su alma reside indudablemente en su gente. Y aquí es donde la historia de Imprenta Omega cobra su matiz más emotivo y poderoso. Lo que comenzó como el sueño solitario de Carlos Torres Lizana, hoy es una realidad compartida, un proyecto que ha trascendido la barrera generacional para convertirse en un verdadero legado familiar.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              En la actualidad, la imagen de Imprenta Omega es la de un dúo dinámico y complementario: Carlos trabaja codo a codo con su hija, Caroleyn Torres Henríquez. Esta incorporación no fue solo un trámite administrativo, sino una inyección de energía vital que aseguró el futuro de la empresa. La dinámica entre padre e hija es el motor que impulsa el negocio día a día.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Imaginemos la escena diaria en las oficinas de la Avenida Dos Sur: por un lado, está Carlos, la voz de la experiencia, el hombre que conoce cada secreto del papel, que sabe anticipar un problema antes de que ocurra y que posee la sabiduría que solo otorgan tres décadas de trato con clientes y proveedores. Él representa la estabilidad, la historia y los valores fundacionales.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Por otro lado, está Caroleyn. Ella representa la renovación, la mirada fresca, la adaptación a las nuevas tendencias del mercado y la energía incansable necesaria para enfrentar los desafíos del siglo XXI. Caroleyn ha sabido honrar el trabajo de su padre no solo manteniéndolo, sino elevándolo, aportando nuevas ideas y procesos que han permitido a la imprenta mantenerse vigente y competitiva.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Verlos trabajar juntos es presenciar una clase magistral de respeto y amor filial aplicado al mundo empresarial. Es el traspaso de la antorcha en tiempo real. No es una jerarquía rígida, sino una colaboración horizontal donde la prudencia de Carlos modera el ímpetu de Caroleyn, y donde la innovación de Caroleyn desafía constructivamente la tradición de Carlos.
            </p>
          </div>

          {/* Section V */}
          <div className="group">
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4 group-hover:border-brand-red transition-colors duration-500">
              <span className="text-brand-red font-serif font-bold text-3xl">V.</span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-blue transition-colors duration-300">Desafíos y Resiliencia</h3>
            </div>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify">
              Llegar a más de 30 años de historia ininterrumpida no es fruto del azar; es el resultado de una resiliencia feroz. El camino de Imprenta Omega no ha sido una línea recta exenta de obstáculos. Han navegado por aguas turbulentas que hubieran hecho naufragar a barcos menos sólidos.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              La industria gráfica ha sido, quizás, una de las más golpeadas y transformadas en las últimas décadas. La digitalización masiva amenazó con volver obsoleto el papel. "El papel va a morir", decían los expertos a principios de los 2000. Sin embargo, Carlos y su equipo se mantuvieron firmes, entendiendo que el papel tiene una nobleza y una utilidad que lo digital no puede replicar. Tuvieron que adaptarse, reducir costos, optimizar procesos y, muchas veces, sacrificarse personalmente para mantener la maquinaria andando.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Además de los desafíos tecnológicos, han enfrentado las crisis económicas que han sacudido a Chile y al mundo. Han resistido recesiones, cambios en las normativas tributarias y la incertidumbre de los mercados. Y no podemos olvidar los desafíos propios de la naturaleza en una zona sísmica como el Maule. Cada vez que Talca se ha sacudido, Imprenta Omega ha vuelto a abrir sus puertas, limpiando el polvo y volviendo a encender las máquinas, demostrando que su estructura no es solo de ladrillo y cemento, sino de voluntad y coraje.
            </p>
          </div>

          {/* Section VI */}
          <div className="group">
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4 group-hover:border-brand-red transition-colors duration-500">
              <span className="text-brand-red font-serif font-bold text-3xl">VI.</span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-black group-hover:text-brand-blue transition-colors duration-300">Conclusión: Un sello de confianza</h3>
            </div>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify">
              Al mirar hacia atrás, desde aquel lejano noviembre de 1989 hasta el presente, la trayectoria de Imprenta Omega se revela como una obra consolidada. Pero al mirar hacia el futuro, se percibe como un libro que aún tiene muchas páginas en blanco por escribir.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Imprenta Omega es hoy mucho más que un lugar donde se imprime papel. Es una institución talquina. Es el lugar donde los emprendedores imprimen sus primeros sueños en forma de tarjetas de presentación; donde las empresas plasman sus balances y sus metas; donde las familias imprimen los recuerdos que quieren atesorar.
            </p>
            <p className="text-gray-700 leading-loose text-lg font-light text-justify mt-6">
              Carlos Torres Lizana y Caroleyn Torres Henríquez no solo dirigen una imprenta; custodian una tradición. En un mundo efímero y volátil, ellos ofrecen algo tangible, duradero y real. Mientras Talca siga creciendo, mientras existan ideas que merezcan ser plasmadas y proyectos que necesiten ser comunicados, Imprenta Omega estará allí, en la oficina 6-7-8 de la calle 1 Oriente con 2 Sur, con las puertas abiertas.
            </p>
            <div className="mt-16 bg-brand-black p-12 text-white text-center rounded-sm shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-yellow"></div>
              <p className="font-serif italic text-2xl leading-relaxed">
                "Porque después de más de 30 años, una cosa ha quedado clara: las tecnologías cambian, las modas pasan, pero la calidad humana y el compromiso con la excelencia son valores que nunca caducan. Imprenta Omega es, y seguirá siendo, el sello de confianza de la Región del Maule."
              </p>
            </div>
          </div>

        </article>
      </div>
    </section>
  );
};

export default History;