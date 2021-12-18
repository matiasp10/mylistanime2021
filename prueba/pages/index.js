import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Anime from "./anime/Anime";
import Title from "./anime/Title";

const animes = [
  {
    title: "Mushoku Tensei: Isekai Ittara Honki Dasu",
    desc: "Un Otaku de 34 años de edad es expulsado de su casa por su familia por ser un «NEET». Poco atractivo y sin dinero, descubre que llegó a un callejón sin salida, es ahí cuando se lamenta de no haberse esforzado mucho más. Arrepintiéndose de todos sus errores, de los que siempre estuvo escapando, piensa que su vida hubiera sido mucho mejor de haber tomado mejores decisiones en el pasado. Justo cuando estaba a punto de rendirse, vio un camión que circulaba a gran velocidad hacia tres estudiantes de secundaria en su camino. Reuniendo toda la fuerza que tenía, trató de salvarlos pero terminó siendo atropellado por el camión, perdiendo la vida.Al abrir sus ojos descubrió que había reencarnado en un mundo de espadas y magia, llamado ahora Rudeus Greyrat. Nacido en un mundo nuevo, con una vida nueva, Rudeus decide que «¡Esta vez, realmente viviré mi vida al máximo sin ningún arrepentimiento!» Así, comienza el viaje de un hombre anhelando reiniciar su vida.",
    mal: "https://myanimelist.net/anime/39535/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu",
    img: "https://cdn.myanimelist.net/images/anime/1117/110633l.jpg",
    clas: 9,
  },
  {
    title: "Yakusoku no Neverland 2nd Season",
    desc: "The Promised Nerverland es un anime japonés que gira en torno a tres huérfanos (Emma, Norman y Ray) que están esperando a que se les asigne una familia adoptiva. A pesar de la larga espera, los tres niños de 11 años viven alegres en el orfanato de Grace Field House. Aunque un giro inesperado hace cambiar todo, los chicos averiguan accidentalmente la cruel realidad de su existencia. Por ello, los tres comienzan a rebelarse y luchar lo máximo que puedan en una tenebrosa aventura.",
    mal: "https://myanimelist.net/anime/39617/Yakusoku_no_Neverland_2nd_Season",
    img: "https://cdn.myanimelist.net/images/anime/1815/110626l.jpg",
    clas: 3,
  },
  {
    title: "Dr. Stone: Stone Wars",
    desc: "Senkuu se ha propuesto como objetivo recuperar dos millones de años de logros humanos y revivir a la totalidad de los que se convirtieron en estatuas. Sin embargo, un hombre se interpone en su camino: Tsukasa Shishiou, quien cree que solo los más aptos de los petrificados deben ser revividos. A medida que la nieve se derrite y se acerca la primavera, Senkuu y sus aliados en Ishigami Village terminan los preparativos para su ataque al Imperio Tsukasa. Con un modelo de teléfono celular reinventado ahora a su disposición, el Reino de la Ciencia está listo para lanzar su nuevo esquema para reclutar a un número considerable del ejército de Tsukasa a su lado. Sin embargo, es una carrera contrarreloj; porque cada día que pasa el Reino de la Ciencia perfeccionando sus inventos, el imperio crece rápidamente en número. Al reunirse con viejos amigos y ganar nuevos aliados, Senkuu y el Reino de la Ciencia deben detener las fuerzas de Tsukasa para cumplir su objetivo de restaurar la humanidad y todas sus creaciones. Con los dos bandos cada uno en la búsqueda de su mundo ideal, ¡las Guerras de Piedra han comenzado!",
    mal: "https://myanimelist.net/anime/40852/Dr_Stone__Stone_Wars",
    img: "https://cdn.myanimelist.net/images/anime/1300/111559l.jpg",
    clas: 7,
  },
  {
    title: "Tensei shitara Slime Datta Ken 2a temporada",
    desc: "Tomando un descanso de su tiempo como maestro, el poderoso limo Rimuru Tempest regresa a su reino, epónimo Tempest, justo a tiempo para comenzar las negociaciones con una nación cercana: el Reino de Eurazania. Si bien las negociaciones son todo menos pacíficas, terminan con éxito, lo que permite que Rimuru regrese y termine de enseñar. Al intentar regresar nuevamente a Tempest, esta vez de forma permanente, Rimuru es detenido por una figura misteriosa que de alguna manera es capaz de restringir las muchas habilidades mágicas que tiene a su disposición.En Tempest, la situación es aún peor. Un grupo de humanos desconocidos ha invadido la tierra y está atacando a sus ciudadanos, tanto influyentes como inocentes. Tampoco solo están tratando de causar daño, sino que tienen la intención de matar. ¿Podrá Rimuru vencer a su poderoso y peligroso enemigo y regresar a Tempest antes de que sea demasiado tarde?",
    mal: "https://myanimelist.net/anime/39551/Tensei_shitara_Slime_Datta_Ken_2nd_Season",
    img: "https://cdn.myanimelist.net/images/anime/1530/106442l.jpg",
    clas: 9,
  },
  {
    title: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2",
    desc: "Después de un discurso severo pero convincente de Otto, Subaru Natsuki jura solemnemente que superará con éxito esta línea de tiempo y salvará a todos los que pueda en el camino. El primer paso para lograr este objetivo es ayudar a Emilia a trabajar en su pasado; sin embargo, es más fácil decirlo que hacerlo. Sintiendo que todos a su alrededor le han mentido, será difícil para Emilia confiar en nadie, incluso en Subaru, su autoproclamado caballero. Re: Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2 presenta la culminación de las experiencias de Subaru con el Santuario y su gente, junto con su falta de voluntad para perder la esperanza de salvarlos.",
    mal: "https://myanimelist.net/anime/42203/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_2nd_Season_Part_2",
    img: "https://cdn.myanimelist.net/images/anime/1724/117421l.jpg",
    clas: 8,
  },
  {
    title: "Boku no Hero Academia 5th Season",
    desc: "La Clase 1-A de UA Academy ha sido el foco de una cantidad sustancial de atención pública debido a los múltiples ataques de villanos que han enfrentado durante el último año escolar. Esta atención ha dejado a los rivales de la Clase 1-A, la Clase 1-B, sintiéndose bastante amargados. Deseando demostrar sus habilidades, esperan la oportunidad que se les ha brindado: una serie de simulacros de batallas entre los estudiantes de cada clase. Las clases se dividen en escuadrones de cuatro, cada uno de los cuales tiene la tarea de capturar a los otros miembros del grupo. El ganador es el grupo que primero asegura a todo el equipo contrario. Si bien esto suena simple, se agrega una bola curva a la mezcla con la inclusión del estudiante del curso general Hitoshi Shinsou, quien desea transferirse al curso de héroe. A pesar de usar su entrenamiento con el maestro de salón de clase 1-A, Shouta 'Eraserhead' Aizawa para demostrar que es capaz de ser un héroe real, todavía está muy por detrás de los demás debido a su falta de experiencia. Sin embargo, Shinsou está decidido a superar este desafío. Así comienza la feroz competencia entre las clases 1-A y 1-B, ya que cada una intenta demostrar que es superior a la otra.",
    mal: "https://myanimelist.net/anime/41587/Boku_no_Hero_Academia_5th_Season",
    img: "https://cdn.myanimelist.net/images/anime/1911/113611l.jpg",
    clas: 6,
  },
  {
    title: "Tokyo Revengers",
    desc: "El segundo año de secundaria de Takemichi Hanagaki fue el punto más alto de su vida. Tenía respeto, una pandilla de amigos con los que podía contar e incluso una novia. Pero eso fue hace doce años. Hoy en día, no es nadie: una nulidad acabada de la que se burlan los niños y siempre se ve obligado a disculparse con su jefe más joven. Un informe de noticias repentino sobre el cruel asesinato por parte de Tokyo Manji Gang de la única novia que tuvo junto a su hermano solo agrega un insulto a la herida. Medio segundo antes de que un tren termine su lamentable vida para siempre, Takemichi recuerda ese mismo día hace doce años, cuando todavía estaba saliendo con Hinata Tachibana.Después de verse obligado a revivir el mismo día que comenzó su espiral descendente, Takemichi conoce al hermano menor de Hinata. Sin pensarlo, admite su aparente muerte antes de volver al pasado. Takemichi lo insta a proteger a su hermana antes de regresar inexplicablemente al futuro. Milagrosamente, no está muerto. Más extraño aún, el futuro ha cambiado. Parece que Takemichi puede alterar el flujo del tiempo. Dada la oportunidad de evitar la trágica muerte de su ex novia a manos de la Tokyo Manji Gang, Takemichi decide volar en el tiempo para cambiar el curso del futuro.",
    mal: "https://myanimelist.net/anime/42249/Tokyo_Revengers",
    img: "https://cdn.myanimelist.net/images/anime/1591/115929l.jpg",
    clas: 9,
  },
  {
    title: "Fumetsu no Anata e",
    desc: "Un Orbe, conocido solo como It, se lanza a la Tierra para ser observado desde lejos. Capaz de cambiar de forma a los seres cuyos reflejos capta, primero se convierte en una roca y luego, debido al aumento de temperatura, en musgo.No se mueve hasta que un día de nieve, un lobo a las puertas de la muerte apenas pasa. Cuando toma la forma del animal, adquiere conciencia de su conciencia y comienza a vagar con un destino poco claro en mente. Pronto, se encuentra con el amo del lobo, un joven que espera que su tribu regrese de un paraíso lleno de peces y frutas en el sur. Aunque el niño se siente solo, todavía espera que aquellos a quienes ama en sus recuerdos no lo hayan olvidado y que algún día se reunirá con ellos. El niño quiere explorar nuevos alrededores y decide abandonar su hogar con It para encontrar el paraíso usando las huellas que dejó su tribu. Sin embargo, con un cuerpo gravemente herido y sin ver a sus camaradas mayores, ¿qué será del niño? Fumetsu no Anata e ilustra la historia de un ser inmortal que experimenta la humanidad, conociendo a todo tipo de personas en muchos lugares a lo largo del tiempo.",
    mal: "https://myanimelist.net/anime/41025/Fumetsu_no_Anata_e",
    img: "https://cdn.myanimelist.net/images/anime/1415/111742l.jpg",
    clas: 7,
  },
  {
    title: "Ijiranaide, Nagatoro-san",
    desc: "Todos los días, Naoto Hachiouji es molestado sin descanso por Hayase Nagatoro, un estudiante de primer año que conoce un día en la biblioteca mientras trabaja en su manga. Después de leer su historia y ver su comportamiento incómodo, ella decide a partir de ese momento jugar con él, incluso llamándolo 'Senpai' en lugar de usar su nombre real. Al principio, las implacables payasadas de Nagatoro son más molestas que cualquier otra cosa y lo dejan sintiéndose avergonzado, ya que se ve obligado a satisfacer sus caprichos. Sin embargo, a medida que pasan más tiempo juntos, se desarrolla una extraña especie de amistad entre ellos, y Naoto descubre que la vida con Nagatoro puede incluso ser divertida. Pero una cosa es segura: sus días nunca volverán a ser aburridos.",
    mal: "https://myanimelist.net/anime/42361/Ijiranaide_Nagatoro-san",
    img: "https://cdn.myanimelist.net/images/anime/1900/110097l.jpg",
    clas: 7,
  },
  {
    title: "86",
    desc: "Según la República de San Magnolia, su guerra en curso contra el Imperio Giadiano no tiene bajas; sin embargo, eso es mera propaganda. Mientras que la Alba de cabello plateado de los ochenta y cinco sectores de la República vive a salvo detrás de muros protectores, los de diferentes apariencias están internados en una facción secreta ochenta y seis. Conocidos dentro del ejército como los Ochenta y Seis, se ven obligados a luchar contra la Legión autónoma del Imperio bajo el mando de los 'Manipuladores' republicanos. Vladilena Milizé está asignada al escuadrón Spearhead para reemplazar a su Handler anterior. Rechazada por sus compañeros por ser una compañera de apoyo de Eighty-Six, ella continúa luchando contra su discriminación inhumana. Shinei Nouzen es el capitán del escuadrón Spearhead. Infame por ser el único superviviente de todos los escuadrones en los que ha estado, insiste en cargar con los nombres y deseos de sus camaradas caídos. Cuando el destino de estas jóvenes almas de dos mundos diferentes choca, ¿encenderá la chispa que ilumina su camino hacia la salvación, o se quemarán en las llamas de la desesperación?",
    mal: "https://myanimelist.net/anime/41457/86",
    img: "https://cdn.myanimelist.net/images/anime/1987/117507l.jpg",
    clas: 9,
  },
  {
    title: "Vivy: Fluorite Eye's Song",
    desc: "Cuando las IA altamente evolucionadas se dispusieron a erradicar a la humanidad, la carnicería que sobrevino llenó el aire con el hedor de sangre fresca y cuerpos en llamas. En un intento desesperado por evitar que la calamidad ocurra, un científico apuesta todo por un remanente del pasado. Retrocediendo el reloj cien años, las IA ya son una parte integral de la sociedad humana, programadas con misiones específicas destinadas a llevarse a cabo durante todo su curso de operación. Vivy, la primera IA autónoma de la historia, es una cantante encargada de difundir la felicidad a través de su voz. En un parque temático donde casi nunca consigue una audiencia adecuada, se esfuerza por poner su corazón en sus actuaciones, obligada a repetirlo día tras día, es decir, hasta que una IA avanzada del futuro aparece ante ella y solicita su ayuda para detener una guerra devastadora de cien años en proceso. Sin tiempo para procesar la revelación que pone su mundo patas arriba, Vivy es catapultada a un viaje de un siglo para evitar la violenta historia que está por venir.",
    mal: "https://myanimelist.net/anime/46095/Vivy__Fluorite_Eyes_Song",
    img: "https://cdn.myanimelist.net/images/anime/1689/111175l.jpg",
    clas: 7,
  },
  {
    title: "Sentouin, Hakenshimasu!",
    desc: "Como jefe operativo de la villana Kisaragi Corporation, Sentouin Roku-gou recibe órdenes para ayudar a la organización a conquistar todo el universo conocido. Encargado de infiltrarse en el reino de Grace, una misión que podría cambiar el destino del mundo, Roku-gou cree erróneamente que sus habilidades como combatiente son excelentes, lo que alimenta su actitud arrogante. Para garantizar el éxito de la misión, se asigna a Alice Kisaragi, una androide excepcional con una apariencia juvenil que lleva el nombre de la propia empresa, como compañera de viaje de Roku-gou. A su llegada a las afueras del reino, Alice y Roku-gou se encuentran con Snow, el comandante de la guardia real del país. Snow lleva a la pareja a un artefacto legendario roto, y Roku-gou aprovecha la oportunidad para una promoción tan esperada en su compañía y cambia la recitación del ritual sagrado por una frase vergonzosa. Como castigo, la princesa del reino obliga a Roku-gou a convertirse en caballero honorario, cumpliendo parte de su misión. Habiéndose infiltrado en el círculo íntimo del reino, Roku-gou ahora debe ayudar a su nuevo empleador a luchar contra el Ejército del Señor Demonio, mientras perpetúa las malas acciones como combatiente de la Corporación Kisaragi.",
    mal: "https://myanimelist.net/anime/41456/Sentouin_Hakenshimasu",
    img: "https://cdn.myanimelist.net/images/anime/1444/115118l.jpg",
    clas: 6,
  },
  {
    title: "Shadows House",
    desc: "Las Sombras, caracterizadas por su apariencia oscura y tendencia a emitir hollín cuando se agitan, son una familia de nobles que residen en una colosal mansión en las profundidades de las montañas lejos de otros humanos. Cuando un niño de la Sombra es casi mayor de edad, se le asigna una Muñeca Viviente que actúa no solo como su asistente sino también como su segunda mitad, las caras que podrían haber tenido si no fuera por su complexión. Emilico es un muñeco alegre y recién creado que sirve a una maestra de voz bastante suave llamada Kate. A pesar de la diferencia de personalidades, Emilico hace lo que puede para satisfacer las necesidades de su amo. A medida que aprende más sobre su papel y su deber, Emilico comienza a conocer a sus compañeros Dolls y sus respectivos maestros y llega a saber más sobre el propósito de su existencia 'No te preocupes por asuntos triviales', dice una de las reglas que todas las muñecas deben cumplir. Pero, ¿cómo podría el siempre curioso Emilico hacerlo frente a los profundos secretos que guarda la Casa de las Sombras?",
    mal: "https://myanimelist.net/anime/43439/Shadows_House",
    img: "https://cdn.myanimelist.net/images/anime/1085/111762l.jpg",
    clas: 7,
  },
  {
    title: "Tensei shitara Slime Datta Ken 2nd Season Part 2",
    desc: "La nación de Tempest está de humor festivo después de superar con éxito el ataque sorpresa del Ejército Blumund y la Santa Iglesia Occidental. Más allá de las festividades se encuentra un encuentro entre Tempest y sus aliados para decidir el futuro de la Nación de los Monstruos. Las secuelas de la invasión de Blumund, el comportamiento sospechoso de Milim Nava y la desaparición de Demon Lord Carrion: los problemas parecen seguir acumulándose. Rimuru Tempest, ahora despertado como un 'Verdadero Señor Demonio', decide pasar a la ofensiva contra Clayman. Con Veldora 'Dragón Tormenta' completamente revivido, Raphael 'Habilidad Definitiva' y otros camaradas poderosos, el gobernante de la Tempestad confía en derrotar a sus enemigos uno por uno hasta que pueda enfrentarse al hombre que mueve los hilos.",
    mal: "https://myanimelist.net/anime/41487/Tensei_shitara_Slime_Datta_Ken_2nd_Season_Part_2",
    img: "https://cdn.myanimelist.net/images/anime/1236/113727l.jpg",
    clas: 9,
  },
  {
    title: "Mushoku Tensei: Isekai Ittara Honki Dasu Part 2",
    desc: "Después de la misteriosa calamidad del maná, Rudeus Greyrat y su feroz estudiante Eris Boreas Greyrat son teletransportados al Continente Demonio. Allí, se unen a su nuevo compañero Ruijerd Supardia, el ex líder del grupo Guerrero de Superd, para formar 'Dead End', un exitoso grupo de aventureros. Haciéndose un nombre, el trío viaja a través del continente para regresar a casa en Fittoa. Siguiendo el consejo que recibió del dios sin rostro Hitogami, Ludeus salva a Kishirika Kishirisu, el Gran Emperador del Mundo Demonio, quien lo recompensa otorgándole un poder extraño. Ahora, a medida que Ludeus domina la poderosa habilidad que ofrece una serie de nuevas oportunidades, podría resultar más de lo que esperaba cuando peligros inesperados amenacen con obstaculizar sus viajes.",
    mal: "https://myanimelist.net/anime/45576/Mushoku_Tensei__Isekai_Ittara_Honki_Dasu_Part_2",
    img: "https://cdn.myanimelist.net/images/anime/1868/115018l.jpg",
    clas: 9,
  },
  {
    title: "Takt Op. Destiny",
    desc: "Los Estados Unidos de América han estado sumidos en el caos desde la aparición de los D2, una especie invasora que se originó a partir de un meteorito negro que cayó a la Tierra. Un decreto público prohibió a los ciudadanos tocar melodías para evitar más bajas causadas por el odio de los D2 por la música; incluso ahora, en 2047, esta prohibición sigue en vigor. La única forma de defensa de la humanidad contra los D2 son los Musicarts, mujeres jóvenes que representan piezas de música clásica; y Conductores, los que los controlan. Takt Asahina, un distante prodigio del piano, se transforma en director tras un ataque espontáneo de D2. El mismo incidente mata a la hermana menor de Anna Schneider, Cosette, y pone a Takt en contacto con su Musicart, Destiny. En busca de un medio para estabilizar el pacto entre ellos, Takt y Destiny, junto con Anna, se embarcan en un peligroso viaje a la sede de Symphonica en la ciudad de Nueva York. Takt tiene prisa por llegar a la ciudad para poder volver a tocar el piano, aunque su pasión atrae a las criaturas que ha llegado a despreciar. Mientras tanto, el sentido del deber de Destiny arrastra al grupo a problemas en el camino. Con un camino infestado de D2 y muchos más obstáculos difíciles por delante, ¿llegará el trío a la ciudad de Nueva York de una pieza?",
    mal: "https://myanimelist.net/anime/48556/Takt_Op_Destiny",
    img: "https://cdn.myanimelist.net/images/anime/1559/116101l.jpg",
    clas: 8,
  },
  {
    title: "Platinum End",
    desc: "Desde que perdió a su familia en una explosión, Mirai Kakehashi ha vivido una vida de dolor y desesperación. Todos los días, soporta el abuso a manos de los familiares que lo acogieron. A medida que su angustia se desvanece constantemente en su voluntad de vivir, finalmente se ve empujado al borde del abismo. Preparado para tirarlo todo por la borda, se para al borde de un precipicio y da el salto. Sin embargo, en lugar de caer a su muerte, entra en trance donde se encuentra con un ser alado que dice ser su ángel de la guarda. Nombrado Nasse, el ángel le ofrece dos habilidades invaluables y lo convence de seguir viviendo. Cuando Mirai experimenta la maravilla de sus nuevos poderes de primera mano, prueba la libertad que estuvo bloqueada para él durante tanto tiempo. Armado con los dones de Nasse, Mirai se lanza a un enfrentamiento con otras 12 personas, una de las cuales será elegida para convertirse en el próximo Dios. En marcado contraste con cuando quería terminar con su vida, Mirai ahora está preparada para hacer lo que sea necesario para proteger su sombría oportunidad de ser feliz, para que no se la arrebaten para siempre.",
    mal: "https://myanimelist.net/anime/44961/Platinum_End",
    img: "https://cdn.myanimelist.net/images/anime/1992/116576l.jpg",
    clas: 7,
  },
  {
    title: "Kimetsu no Yaiba: Mugen Ressha-hen",
    desc: "Una misteriosa serie de desapariciones en cierto tren ha llamado la atención del Demon Slayer Corps, y han enviado a uno de sus mejores para exterminar a lo que solo puede ser un demonio responsable. Sin embargo, el plan para abordar el tren Mugen se ve retrasado por un demonio menor que está aterrorizando a los mecánicos y apuntando a una amable anciana y a su nieta. Kyoujurou Rengoku, el Pilar de la Llama, debe eliminar la amenaza antes de abordar el tren. Enviado para ayudar al Pilar, Tanjirou Kamado, Inosuke Hashibira y Zenitsu Agatsuma entran al tren preparados para luchar. Pero su monstruoso objetivo ya tiene un plan tortuoso para ellos y los doscientos pasajeros: al profundizar en su conciencia, el demonio tiene la intención de aniquilar a todos en una impresionante exhibición del poder que tienen las Doce Lunas Demoníacas.",
    mal: "https://myanimelist.net/anime/49926/Kimetsu_no_Yaiba__Mugen_Ressha-hen",
    img: "https://cdn.myanimelist.net/images/anime/1065/118763l.jpg",
    clas: 8,
  },
  {
    title: "86 Part 2",
    desc: "La desaparición del escuadrón punta de lanza más allá del horizonte hace poco por ocultar la intensidad de la interminable propaganda de la República de San Magnolia. Vladilena Milizé continúa operando como 'Handler One', el comandante de otro escuadrón deshumanizado de la 86.a facción en la guerra continua contra la Legión. En el frente occidental, Shinei Nouzen y su escuadrón están en cuarentena en una base militar controlada por la República Federal de Giad, antes conocida como el Imperio Giadiano. El gobierno recién establecido otorga a los ochenta y seis salvados plena ciudadanía y libertad. Alojado por el propio presidente Ernst Zimmerman, el grupo se encuentra con su hija adoptiva y la última emperatriz, Augusta Frederica Adel-Adler. Sin embargo, dentro de la calma de esta tierna sociedad, Shinei y su equipo sienten que su propósito está en el campo de batalla. En poco tiempo, se encuentran una vez más en medio del ataque de la Legión como parte del Escuadrón Nordlicht de la Federación, acompañados por Augusta Frederica. Pero, a medida que la historia se repite, se dan cuenta de que no importa el bando, la muerte y el dolor en las líneas del frente son el único consuelo que conocen.",
    mal: "https://myanimelist.net/anime/48569/86_Part_2",
    img: "https://cdn.myanimelist.net/images/anime/1712/117500l.jpg",
    clas: 9,
  },
];

export default function Home() {
  return (
    <div>
      <Title />
      <div>
        {animes.map((e) => {
          return (
            <Anime
              title={e.title}
              desc={e.desc}
              mal={e.mal}
              img={e.img}
              clas={e.clas}
            />
          );
        })}
      </div>
    </div>
  );
}
