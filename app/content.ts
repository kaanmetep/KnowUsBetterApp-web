import type { Lang } from "./i18n";

export { APP_STORE_URL, LANGS, type Lang } from "./i18n";

export function questionOfTheDay(count: number) {
  return Math.floor(Date.now() / 86_400_000) % count;
}

type Question = { text: string; options: [string, string, string, string] };

export type Copy = {
  meta: { title: string; description: string; ogTitle: string; ogDescription: string };
  alt: { icon: string; vibe: string; report: string; couple: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  navCta: string;
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    note: string;
    scan: string;
    partner: { thinking: string; answered: string; picked: string };
  };
  guess: {
    eyebrow: string;
    title: string;
    sub: string;
    counter: string;
    questions: Question[];
    doneEyebrow: string;
    doneTitle: string;
    doneBody: string;
    play: string;
    send: string;
    copied: string;
    restart: string;
    shareText: string;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  tonight: {
    eyebrow: string;
    questions: string[];
    after: string;
  };
  get: string;
  free: string;
  badge: [string, string];
};

export const COPY: Record<Lang, Copy> = {
  en: {
    meta: {
      title: "KnowUsBetter: Couple Quiz Game | How Well Do You Know Your Partner?",
      description:
        "Free couples quiz for iPhone. Take turns on one phone or play live on two, see where you match, get a compatibility score and an AI relationship report. No sign-up.",
      ogTitle: "KnowUsBetter: How well do you really know them?",
      ogDescription: "The couples quiz game. Take turns on one phone or play live on two, then see where you match. Free on iPhone.",
    },
    alt: {
      icon: "KnowUsBetter app icon",
      vibe: "KnowUsBetter app screen for choosing a question category for couples",
      report: "KnowUsBetter AI relationship report showing a couple's compatibility",
      couple: "Illustration of a couple playing the KnowUsBetter quiz together",
    },
    faq: {
      eyebrow: "Questions",
      title: "Everything about KnowUsBetter",
      items: [
        {
          q: "What is KnowUsBetter?",
          a: "KnowUsBetter (also written “Know Us Better”) is a free couples quiz game for iPhone. You and your partner answer the same questions, taking turns on one phone or each on your own phone at the same time, then see where you matched, get a compatibility score and an optional AI relationship report.",
        },
        {
          q: "How do you play KnowUsBetter?",
          a: "Create a room and pick a category. Sitting together? Choose One phone, add your partner's name and take turns: answers stay hidden until the reveal. Apart? Choose Separate phones and share the room code, then you both answer at the same time and see your matches live. A game takes about five minutes.",
        },
        {
          q: "Do we both need to download the app?",
          a: "No. If you're together, one phone is enough and your partner doesn't need to download anything: you take turns on the same phone and see your results together. To play from two phones, you each need the app.",
        },
        {
          q: "What game modes are there?",
          a: "There are 10+ ways to play. Answer the same questions and see how often you think alike, with categories from just met to years together, deep talks and intimacy. Know Me Well?: guess your partner's answers. Who Knows Better?: go head to head in a quiz. Plus Who's More Likely?, Rank It and Two Truths & a Lie.",
        },
        {
          q: "Is KnowUsBetter free?",
          a: "Yes. KnowUsBetter is free to download and needs no account or login. You get free coins every 4 hours, and optional coin packs are one-time purchases.",
        },
        {
          q: "Can long-distance couples play?",
          a: "Yes. Choose Separate phones and each of you plays on your own phone, from the same couch or from different countries. It is a popular date night game for long-distance relationships.",
        },
        {
          q: "What is the AI relationship report?",
          a: "After a game you can unlock a personalized report based on your answers. It shows your strengths as a couple, where you differ, and the blind spots you still have about each other.",
        },
        {
          q: "Who is KnowUsBetter for?",
          a: "New couples getting to know each other, couples who have been together for years, married couples, long-distance couples and best friends. Categories range from light and funny to deep and meaningful.",
        },
        {
          q: "Which languages and devices does it support?",
          a: "KnowUsBetter is available on the App Store for iPhone and iPad, and you can play in 7 languages: English, Turkish (Türkçe), Spanish (Español), Brazilian Portuguese (Português), German (Deutsch), Italian (Italiano) and Polish (Polski).",
        },
        {
          q: "Where can I get the official KnowUsBetter app?",
          a: "The official app is “KnowUsBetter: Couple Quiz Game” by Kaan Peksen on the App Store (ID 6754946265), and the official website is knowusbetter.app. Other apps with similar names are not affiliated with KnowUsBetter.",
        },
      ],
    },
    navCta: "Get the app",
    hero: {
      eyebrow: "The couples quiz game",
      headline: "How well do you <em>really</em> know them?",
      sub: "One phone or two, same questions, no peeking. Then you see where you matched, and where you didn't.",
      note: "Free on iPhone · 7 languages",
      scan: "Point your iPhone camera here",
      partner: { thinking: "Jake is thinking", answered: "Jake answered", picked: "Jake picked this too" },
    },
    guess: {
      eyebrow: "Try it, right now",
      title: "Answer for them.",
      sub: "Three questions. Pick what they would pick.",
      counter: "Question {n} of {total}",
      questions: [
        {
          text: "After an argument, they usually…",
          options: ["Need some space first", "Want to talk it out right away", "Act like nothing happened", "Make it up with food"],
        },
        {
          text: "Their perfect Sunday starts with…",
          options: ["Sleeping in, no alarms", "Brunch somewhere new", "A long walk outside", "A to-do list, honestly"],
        },
        {
          text: "What makes them feel most loved?",
          options: ["Hearing it out loud", "Your full attention", "A small surprise", "A long hug"],
        },
      ],
      doneEyebrow: "3 guesses locked in",
      doneTitle: "Now, would they guess <em>yours</em>?",
      doneBody:
        "You can't find out from here. In the app you both answer, on one phone or two, and the results land side by side.",
      play: "Find out in the app",
      send: "Send them this quiz",
      copied: "Link copied",
      restart: "Start over",
      shareText: "I just guessed 3 things about you. Bet you can't guess mine.",
    },
    how: {
      eyebrow: "How it plays",
      title: "Five minutes to play. Hours to talk about.",
      steps: [
        { title: "Pick a vibe", body: "Just met, years in, or just friends. The questions fit where you are." },
        { title: "Answer, no peeking", body: "Take turns on one phone or answer at once on two. Answers stay hidden until the reveal." },
        { title: "See your match", body: "Your answers side by side, plus an AI report on what they say about you two." },
      ],
    },
    tonight: {
      eyebrow: "Tonight, ask them",
      questions: [
        "What's a small thing I do that you secretly love?",
        "When did you first know this was something real?",
        "Which memory of us do you replay the most?",
        "What did you think of me the first time we met?",
        "What's a habit of mine you've picked up?",
        "When do you feel closest to me?",
        "What's a song that reminds you of us?",
        "What's something you want us to try this year?",
        "What could I do this week that would make your day?",
        "Where do you honestly see us in five years?",
        "What's something you never told me because it felt too small?",
        "What would your perfect day with me look like?",
      ],
      after: "Then let the app ask the next ten.",
    },
    get: "Get",
    free: "Free",
    badge: ["Download on the", "App Store"],
  },

  tr: {
    meta: {
      title: "KnowUsBetter: Çiftler İçin Quiz Oyunu | Partnerini Ne Kadar Tanıyorsun?",
      description:
        "iPhone için ücretsiz çift testi. İster tek telefondan, ister farklı telefonlardan oynayın, nerede eşleştiğinizi görün, uyum puanı ve yapay zeka ilişki raporu alın. Üyelik gerekmez.",
      ogTitle: "KnowUsBetter: Partnerini gerçekten tanıyor musun?",
      ogDescription: "Çiftler için quiz oyunu. İster tek telefondan, ister farklı telefonlardan oynayın, nerede eşleştiğinizi görün. iPhone'da ücretsiz.",
    },
    alt: {
      icon: "KnowUsBetter uygulama ikonu",
      vibe: "KnowUsBetter uygulamasında çiftler için soru kategorisi seçme ekranı",
      report: "KnowUsBetter yapay zeka ilişki raporu ve çift uyum sonucu",
      couple: "KnowUsBetter çift testini birlikte oynayan bir çift illüstrasyonu",
    },
    faq: {
      eyebrow: "Sorular",
      title: "KnowUsBetter hakkında her şey",
      items: [
        {
          q: "KnowUsBetter nedir?",
          a: "KnowUsBetter (“Know Us Better” olarak da yazılır), iPhone için ücretsiz bir çiftler quiz oyunudur. Sen ve partnerin aynı soruları ister tek telefondan sırayla, ister farklı telefonlardan aynı anda cevaplarsınız, sonra nerede eşleştiğinizi görür, uyum puanınızı ve isteğe bağlı yapay zeka ilişki raporunuzu alırsınız.",
        },
        {
          q: "KnowUsBetter nasıl oynanır?",
          a: "Bir oda kurup kategori seçin. Yan yanaysanız Tek telefon'u seçin, partnerinin adını girin ve sırayla cevaplayın: cevaplar sonuca kadar gizli kalır. Ayrıysanız Farklı telefonlar'ı seçip oda kodunu paylaşın; ikiniz aynı anda cevaplar, eşleşmelerinizi canlı görürsünüz. Bir oyun yaklaşık beş dakika sürer.",
        },
        {
          q: "İkimizin de uygulamayı indirmesi gerekiyor mu?",
          a: "Hayır. Yan yanaysanız tek telefon yeter, partnerinin bir şey indirmesine gerek yok: aynı telefonda sırayla cevaplar, sonuçları birlikte görürsünüz. İki telefondan oynamak için ikinizde de uygulama olmalı.",
        },
        {
          q: "Hangi oyun modları var?",
          a: "10'dan fazla oynama şekli var. Aynı soruları cevaplayıp ne kadar aynı düşündüğünüzü görün; yeni tanışanlardan yıllardır birlikte olanlara, derin sohbetlerden yakınlığa kadar kategoriler var. Beni İyi Tanıyor musun?: partnerinin cevaplarını tahmin et. Kim Daha İyi Biliyor?: bilgi yarışmasında kafa kafaya. Bir de Kim Daha Yatkın?, Sırala Bakalım ve İki Doğru Bir Yalan.",
        },
        {
          q: "KnowUsBetter ücretsiz mi?",
          a: "Evet. KnowUsBetter'ı indirmek ücretsizdir ve hesap ya da üyelik gerekmez. Her 4 saatte bir ücretsiz jeton kazanırsın; isteğe bağlı jeton paketleri tek seferlik satın alımlardır.",
        },
        {
          q: "Uzak mesafe ilişkisi olan çiftler oynayabilir mi?",
          a: "Evet. Farklı telefonlar'ı seçin, herkes kendi telefonundan oynasın; aynı koltukta da, farklı ülkelerde de oynayabilirsiniz. Uzak mesafe ilişkileri için popüler bir randevu gecesi oyunudur.",
        },
        {
          q: "Yapay zeka ilişki raporu nedir?",
          a: "Oyundan sonra cevaplarınıza göre kişiselleştirilmiş bir rapor açabilirsiniz. Rapor, çift olarak güçlü yönlerinizi, nerede ayrıştığınızı ve birbiriniz hakkında hâlâ bilmediğiniz noktaları gösterir.",
        },
        {
          q: "KnowUsBetter kimler için?",
          a: "Birbirini yeni tanıyan çiftler, yıllardır birlikte olanlar, evli çiftler, uzak mesafe ilişkisi yaşayanlar ve en yakın arkadaşlar için. Kategoriler eğlenceli ve hafiften derin ve anlamlıya kadar uzanır.",
        },
        {
          q: "Hangi dilleri ve cihazları destekliyor?",
          a: "KnowUsBetter, App Store'da iPhone ve iPad için mevcuttur. 7 dilde oynayabilirsiniz: Türkçe, İngilizce (English), İspanyolca (Español), Portekizce (Português), Almanca (Deutsch), İtalyanca (Italiano) ve Lehçe (Polski).",
        },
        {
          q: "Resmi KnowUsBetter uygulamasını nereden indirebilirim?",
          a: "Resmi uygulama, App Store'daki Kaan Peksen tarafından geliştirilen “KnowUsBetter: Couple Quiz Game” uygulamasıdır (ID 6754946265). Resmi web sitesi knowusbetter.app'tir. Benzer isimli diğer uygulamaların KnowUsBetter ile bir bağlantısı yoktur.",
        },
      ],
    },
    navCta: "Uygulamayı indir",
    hero: {
      eyebrow: "Çiftler için quiz oyunu",
      headline: "Partnerini <em>gerçekten</em> tanıyor musun?",
      sub: "İster tek telefondan, ister farklı telefonlardan oynayın. Sonra nerede eşleştiğinizi, nerede ayrıldığınızı görün.",
      note: "iPhone'da ücretsiz · 7 dilde",
      scan: "iPhone kameranı buraya tut",
      partner: { thinking: "Can düşünüyor", answered: "Can cevapladı", picked: "Can de bunu seçti" },
    },
    guess: {
      eyebrow: "Hemen dene",
      title: "Onun yerine cevapla.",
      sub: "Üç soru. O ne seçerdi, onu seç.",
      counter: "Soru {n} / {total}",
      questions: [
        {
          text: "Bir tartışmadan sonra genelde…",
          options: ["Önce biraz yalnız kalmak ister", "Hemen konuşup çözmek ister", "Hiçbir şey olmamış gibi davranır", "Gönlünü yemekle alır"],
        },
        {
          text: "Onun mükemmel pazarı nasıl başlar?",
          options: ["Alarmsız, öğlene kadar uyku", "Yeni bir yerde kahvaltı", "Dışarıda uzun bir yürüyüş", "Açıkçası bir yapılacaklar listesi"],
        },
        {
          text: "Ona en çok sevildiğini ne hissettirir?",
          options: ["Bunu yüksek sesle duymak", "Tüm ilgini ona vermen", "Küçük bir sürpriz", "Uzun bir sarılma"],
        },
      ],
      doneEyebrow: "3 tahmin kaydedildi",
      doneTitle: "Peki o seninkileri <em>bilir</em> mi?",
      doneBody:
        "Bunu buradan öğrenemezsin. Uygulamada ister tek telefondan, ister farklı telefonlardan ikiniz de cevaplıyorsunuz, sonuçlar yan yana çıkıyor.",
      play: "Uygulamada öğren",
      send: "Bu testi ona gönder",
      copied: "Link kopyalandı",
      restart: "Baştan başla",
      shareText: "Senin hakkında 3 tahmin yaptım. Bakalım sen benimkileri bilebilecek misin?",
    },
    how: {
      eyebrow: "Nasıl oynanır",
      title: "Oynaması beş dakika. Konuşması saatler.",
      steps: [
        { title: "Havanızı seçin", body: "Yeni tanıştınız, yıllardır birliktesiniz ya da sadece arkadaşsınız. Sorular size göre." },
        { title: "Kopya yok", body: "İster tek telefonda sırayla, ister farklı telefonlarda aynı anda. Cevaplar sonuca kadar gizli." },
        { title: "Eşleşmenizi görün", body: "Cevaplarınız yan yana, üstüne ikiniz hakkında bir yapay zeka raporu." },
      ],
    },
    tonight: {
      eyebrow: "Bu akşam ona sor",
      questions: [
        "Yaptığım hangi küçük şeyi gizliden gizliye seviyorsun?",
        "Bunun ciddi bir şey olduğunu ilk ne zaman anladın?",
        "Bizimle ilgili en çok hangi anıyı düşünüyorsun?",
        "Tanıştığımız ilk gün benim hakkımda ne düşündün?",
        "Benden hangi alışkanlığı kaptın?",
        "Kendini bana en yakın ne zaman hissediyorsun?",
        "Sana bizi hatırlatan şarkı hangisi?",
        "Bu yıl birlikte denemek istediğin bir şey ne?",
        "Bu hafta günün güzelleşsin diye ne yapabilirim?",
        "Dürüst ol, beş yıl sonra bizi nerede görüyorsun?",
        "Çok küçük geldiği için bana hiç söylemediğin bir şey var mı?",
        "Benimle mükemmel bir gün nasıl geçerdi?",
      ],
      after: "Sonraki on soruyu da uygulama sorsun.",
    },
    get: "İndir",
    free: "Ücretsiz",
    badge: ["App Store'dan", "İndirin"],
  },

  es: {
    meta: {
      title: "KnowUsBetter: Juego de Preguntas para Parejas | ¿Cuánto Conoces a tu Pareja?",
      description:
        "Quiz gratis para parejas en iPhone. Jueguen por turnos en un teléfono o en vivo en dos, vean en qué coinciden y reciban una puntuación de compatibilidad y un informe con IA. Sin registro.",
      ogTitle: "KnowUsBetter: ¿De verdad conoces a tu pareja?",
      ogDescription: "El quiz para parejas. Por turnos en un teléfono o en vivo en dos, y luego ven en qué coinciden. Gratis en iPhone.",
    },
    alt: {
      icon: "Icono de la app KnowUsBetter",
      vibe: "Pantalla de KnowUsBetter para elegir una categoría de preguntas para parejas",
      report: "Informe de relación con IA de KnowUsBetter con la compatibilidad de la pareja",
      couple: "Ilustración de una pareja jugando juntos al quiz de KnowUsBetter",
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Todo sobre KnowUsBetter",
      items: [
        {
          q: "¿Qué es KnowUsBetter?",
          a: "KnowUsBetter (también escrito “Know Us Better”) es un juego de preguntas gratis para parejas en iPhone. Tú y tu pareja responden las mismas preguntas, por turnos en un teléfono o cada uno en el suyo al mismo tiempo, y luego ven en qué coincidieron, con una puntuación de compatibilidad y un informe opcional con IA.",
        },
        {
          q: "¿Cómo se juega a KnowUsBetter?",
          a: "Creen una sala y elijan una categoría. ¿Están juntos? Elijan Un teléfono, agreguen el nombre de tu pareja y respondan por turnos: las respuestas quedan ocultas hasta el final. ¿Están lejos? Elijan Teléfonos separados y compartan el código; ambos responden a la vez y ven sus coincidencias en vivo. Una partida dura unos cinco minutos.",
        },
        {
          q: "¿Los dos necesitamos descargar la app?",
          a: "No. Si están juntos, basta un teléfono y tu pareja no necesita descargar nada: responden por turnos en el mismo teléfono y ven los resultados juntos. Para jugar desde dos teléfonos, cada uno necesita la app.",
        },
        {
          q: "¿Qué modos de juego hay?",
          a: "Hay más de 10 formas de jugar. Respondan las mismas preguntas y vean cuánto piensan igual, con categorías para recién conocidos, parejas de años, charlas profundas e intimidad. ¿Me Conoces Bien?: adivina las respuestas de tu pareja. ¿Quién Sabe Más?: compitan cara a cara en un quiz. Y además ¿Quién es más probable?, Ordénalo y Dos Verdades y una Mentira.",
        },
        {
          q: "¿KnowUsBetter es gratis?",
          a: "Sí. KnowUsBetter es gratis, sin cuenta ni registro. Recibes monedas gratis cada 4 horas y los paquetes de monedas opcionales son pagos únicos.",
        },
        {
          q: "¿Pueden jugar parejas a distancia?",
          a: "Sí. Elijan Teléfonos separados y cada uno juega en su propio teléfono, desde el mismo sofá o desde países distintos. Es un juego ideal para citas en relaciones a distancia.",
        },
        {
          q: "¿Qué es el informe de relación con IA?",
          a: "Después de una partida pueden desbloquear un informe personalizado basado en sus respuestas: sus fortalezas como pareja, en qué se diferencian y los puntos ciegos que aún tienen sobre el otro.",
        },
        {
          q: "¿Para quién es KnowUsBetter?",
          a: "Para parejas que se están conociendo, parejas de muchos años, matrimonios, relaciones a distancia y mejores amigos. Las categorías van desde lo ligero y divertido hasta lo profundo.",
        },
        {
          q: "¿Qué idiomas y dispositivos admite?",
          a: "KnowUsBetter está disponible en el App Store para iPhone y iPad, y se puede jugar en 7 idiomas: español, inglés (English), portugués (Português), turco (Türkçe), alemán (Deutsch), italiano (Italiano) y polaco (Polski).",
        },
        {
          q: "¿Dónde descargo la app oficial de KnowUsBetter?",
          a: "La app oficial es “KnowUsBetter: Couple Quiz Game” de Kaan Peksen en el App Store (ID 6754946265), y el sitio web oficial es knowusbetter.app. Otras apps con nombres parecidos no están afiliadas a KnowUsBetter.",
        },
      ],
    },
    navCta: "Descargar",
    hero: {
      eyebrow: "El quiz para parejas",
      headline: "¿De verdad <em>conoces</em> a tu pareja?",
      sub: "Un teléfono o dos, las mismas preguntas, sin espiar. Después ven en qué coincidieron y en qué no.",
      note: "Gratis en iPhone · En 7 idiomas",
      scan: "Apunta aquí con la cámara de tu iPhone",
      partner: { thinking: "Mateo está pensando", answered: "Mateo respondió", picked: "Mateo también eligió esto" },
    },
    guess: {
      eyebrow: "Pruébalo ahora",
      title: "Responde por tu pareja.",
      sub: "Tres preguntas. Elige lo que elegiría.",
      counter: "Pregunta {n} de {total}",
      questions: [
        {
          text: "Después de una discusión, suele…",
          options: ["Necesitar espacio primero", "Querer hablarlo enseguida", "Actuar como si nada", "Arreglarlo con comida"],
        },
        {
          text: "Su domingo perfecto empieza con…",
          options: ["Dormir sin alarma", "Un brunch en un sitio nuevo", "Un paseo largo al aire libre", "Una lista de pendientes, la verdad"],
        },
        {
          text: "¿Qué le hace sentir más amor?",
          options: ["Escucharlo en voz alta", "Toda tu atención", "Una pequeña sorpresa", "Un abrazo largo"],
        },
      ],
      doneEyebrow: "3 respuestas guardadas",
      doneTitle: "¿Y adivinaría las <em>tuyas</em>?",
      doneBody:
        "Desde aquí no lo puedes saber. En la app responden los dos, en un teléfono o en dos, y los resultados aparecen lado a lado.",
      play: "Descúbrelo en la app",
      send: "Envíale este quiz",
      copied: "Enlace copiado",
      restart: "Empezar de nuevo",
      shareText: "Acabo de adivinar 3 cosas sobre ti. A ver si tú adivinas las mías.",
    },
    how: {
      eyebrow: "Cómo se juega",
      title: "Cinco minutos para jugar. Horas para hablar.",
      steps: [
        { title: "Elijan su vibe", body: "Recién conocidos, años juntos o solo amigos. Las preguntas se adaptan a ustedes." },
        { title: "Sin espiar", body: "Por turnos en un teléfono o a la vez en dos. Las respuestas quedan ocultas hasta el final." },
        { title: "Vean su conexión", body: "Sus respuestas lado a lado, y un informe con IA sobre lo que dicen de ustedes." },
      ],
    },
    tonight: {
      eyebrow: "Esta noche, pregúntale",
      questions: [
        "¿Qué cosa pequeña hago que en secreto te encanta?",
        "¿Cuándo supiste que esto iba en serio?",
        "¿Qué recuerdo nuestro repites más en tu cabeza?",
        "¿Qué pensaste de mí la primera vez que nos vimos?",
        "¿Qué costumbre mía se te ha pegado?",
        "¿Cuándo te sientes más cerca de mí?",
        "¿Qué canción te recuerda a nosotros?",
        "¿Qué te gustaría que probáramos juntos este año?",
        "¿Qué podría hacer esta semana para alegrarte el día?",
        "Sinceramente, ¿dónde nos ves en cinco años?",
        "¿Qué nunca me contaste porque te pareció muy pequeño?",
        "¿Cómo sería tu día perfecto conmigo?",
      ],
      after: "Luego deja que la app haga las próximas diez.",
    },
    get: "Obtener",
    free: "Gratis",
    badge: ["Descárgalo en el", "App Store"],
  },

  pt: {
    meta: {
      title: "KnowUsBetter: Quiz para Casais | Você Conhece Mesmo o Seu Amor?",
      description:
        "Quiz para casais grátis no iPhone. Joguem em turnos em um celular ou ao vivo em dois, vejam onde combinam, ganhem uma nota de compatibilidade e um relatório do relacionamento com IA. Sem cadastro.",
      ogTitle: "KnowUsBetter: Você conhece mesmo o seu amor?",
      ogDescription: "O quiz para casais. Em turnos em um celular ou ao vivo em dois, e depois vocês veem onde combinam. Grátis no iPhone.",
    },
    alt: {
      icon: "Ícone do app KnowUsBetter",
      vibe: "Tela do app KnowUsBetter para escolher uma categoria de perguntas para casais",
      report: "Relatório do relacionamento com IA do KnowUsBetter mostrando a compatibilidade do casal",
      couple: "Ilustração de um casal jogando o quiz KnowUsBetter juntos",
    },
    faq: {
      eyebrow: "Perguntas",
      title: "Tudo sobre o KnowUsBetter",
      items: [
        {
          q: "O que é o KnowUsBetter?",
          a: "O KnowUsBetter (também escrito “Know Us Better”) é um quiz para casais grátis para iPhone. Você e o seu amor respondem às mesmas perguntas, em turnos em um celular ou cada um no seu, ao mesmo tempo. Depois vocês veem onde combinaram, ganham uma nota de compatibilidade e podem desbloquear um relatório do relacionamento com IA.",
        },
        {
          q: "Como se joga o KnowUsBetter?",
          a: "Criem uma sala e escolham uma categoria. Estão juntos? Escolham Um celular, coloquem o nome do seu amor e respondam em turnos: as respostas ficam escondidas até o final. Estão longe? Escolham Celulares separados e compartilhem o código; os dois respondem ao mesmo tempo e veem as respostas em comum ao vivo. Uma partida dura uns cinco minutos.",
        },
        {
          q: "Os dois precisam baixar o app?",
          a: "Não. Se vocês estão juntos, um celular basta e o seu amor não precisa baixar nada: vocês respondem em turnos no mesmo celular e veem o resultado juntos. Para jogar em dois celulares, cada um precisa do app.",
        },
        {
          q: "Quais modos de jogo existem?",
          a: "São mais de 10 jeitos de jogar. Respondam às mesmas perguntas e vejam o quanto pensam igual, com categorias para recém-conhecidos, casais de longa data, papo profundo e intimidade. Você Me Conhece Bem?: adivinhe as respostas do seu amor. Quem Sabe Mais?: disputem cara a cara num quiz. E ainda Quem É Mais Provável?, Ordena Aí e Duas Verdades e uma Mentira.",
        },
        {
          q: "O KnowUsBetter é grátis?",
          a: "Sim. O KnowUsBetter é grátis para baixar e não precisa de conta nem login. Você ganha moedas grátis várias vezes ao dia, e os pacotes de moedas opcionais são compras únicas.",
        },
        {
          q: "Casais à distância podem jogar?",
          a: "Sim. Escolham Celulares separados e cada um joga no próprio celular, do mesmo sofá ou de países diferentes. É um jogo muito usado para encontros em relacionamentos à distância.",
        },
        {
          q: "O que é o relatório do relacionamento com IA?",
          a: "Depois de uma partida, vocês podem desbloquear um relatório personalizado com base nas respostas. Ele mostra os pontos fortes do casal, onde vocês são diferentes e o que ainda não sabem um sobre o outro.",
        },
        {
          q: "Para quem é o KnowUsBetter?",
          a: "Para casais que acabaram de se conhecer, casais de longa data, casados, namoros à distância e melhores amigos. As categorias vão do leve e divertido ao profundo.",
        },
        {
          q: "Quais idiomas e aparelhos são compatíveis?",
          a: "O KnowUsBetter está na App Store para iPhone e iPad, e dá para jogar em 7 idiomas: português, inglês (English), espanhol (Español), turco (Türkçe), alemão (Deutsch), italiano (Italiano) e polonês (Polski).",
        },
        {
          q: "Onde baixo o app oficial do KnowUsBetter?",
          a: "O app oficial é o “KnowUsBetter: Couple Quiz Game”, de Kaan Peksen, na App Store (ID 6754946265), e o site oficial é knowusbetter.app. Outros apps com nomes parecidos não têm ligação com o KnowUsBetter.",
        },
      ],
    },
    navCta: "Baixar o app",
    hero: {
      eyebrow: "O quiz para casais",
      headline: "Você <em>conhece</em> mesmo o seu amor?",
      sub: "Um celular ou dois, as mesmas perguntas, sem espiar. Depois vocês veem onde combinaram e onde não.",
      note: "Grátis no iPhone · Em 7 idiomas",
      scan: "Aponte a câmera do seu iPhone aqui",
      partner: { thinking: "Lucas está pensando", answered: "Lucas respondeu", picked: "Lucas também escolheu isso" },
    },
    guess: {
      eyebrow: "Teste agora mesmo",
      title: "Responda pelo seu amor.",
      sub: "Três perguntas. Escolha o que a outra pessoa escolheria.",
      counter: "Pergunta {n} de {total}",
      questions: [
        {
          text: "Depois de uma briga, geralmente…",
          options: ["Precisa de um tempo primeiro", "Quer conversar na hora", "Age como se nada tivesse acontecido", "Faz as pazes com comida"],
        },
        {
          text: "O domingo perfeito começa com…",
          options: ["Dormir até tarde, sem despertador", "Um brunch num lugar novo", "Uma longa caminhada ao ar livre", "Uma lista de tarefas, sinceramente"],
        },
        {
          text: "O que faz essa pessoa se sentir mais amada?",
          options: ["Ouvir em voz alta", "Toda a sua atenção", "Uma surpresinha", "Um abraço demorado"],
        },
      ],
      doneEyebrow: "3 palpites registrados",
      doneTitle: "E será que adivinhariam os <em>seus</em>?",
      doneBody:
        "Por aqui não dá para saber. No app, os dois respondem, em um celular ou em dois, e os resultados aparecem lado a lado.",
      play: "Descubra no app",
      send: "Mande este quiz",
      copied: "Link copiado",
      restart: "Começar de novo",
      shareText: "Acabei de adivinhar 3 coisas sobre você. Duvido você adivinhar as minhas.",
    },
    how: {
      eyebrow: "Como funciona",
      title: "Cinco minutos para jogar. Horas para conversar.",
      steps: [
        { title: "Escolham a vibe", body: "Recém-conhecidos, anos juntos ou só amigos. As perguntas combinam com o momento de vocês." },
        { title: "Sem espiar", body: "Em turnos em um celular ou ao mesmo tempo em dois. As respostas ficam escondidas até o final." },
        { title: "Vejam a sintonia", body: "As respostas lado a lado, mais um relatório com IA sobre o que elas dizem de vocês." },
      ],
    },
    tonight: {
      eyebrow: "Hoje à noite, pergunte",
      questions: [
        "Que coisinha eu faço que você ama em segredo?",
        "Quando você soube que isso era sério?",
        "Qual lembrança nossa você mais revive?",
        "O que você pensou de mim na primeira vez que a gente se viu?",
        "Que mania minha você acabou pegando?",
        "Quando você se sente mais perto de mim?",
        "Qual música te lembra a gente?",
        "O que você quer que a gente experimente este ano?",
        "O que eu poderia fazer esta semana para alegrar o seu dia?",
        "Sinceramente, onde você vê a gente daqui a cinco anos?",
        "O que você nunca me contou por parecer pequeno demais?",
        "Como seria o seu dia perfeito comigo?",
      ],
      after: "Depois, deixe o app fazer as próximas dez.",
    },
    get: "Obter",
    free: "Grátis",
    badge: ["Baixar na", "App Store"],
  },

  de: {
    meta: {
      title: "KnowUsBetter: Quiz für Paare | Wie gut kennst du deinen Schatz?",
      description:
        "Kostenloses Quiz für Paare auf dem iPhone. Spielt abwechselnd auf einem Handy oder live auf zwei, seht eure Übereinstimmung und holt euch eine Beziehungsanalyse mit KI. Ohne Anmeldung.",
      ogTitle: "KnowUsBetter: Wie gut kennst du deinen Schatz wirklich?",
      ogDescription: "Das Quiz für Paare. Abwechselnd auf einem Handy oder live auf zwei, dann seht ihr, wo ihr übereinstimmt. Kostenlos fürs iPhone.",
    },
    alt: {
      icon: "App-Symbol von KnowUsBetter",
      vibe: "KnowUsBetter-Bildschirm zur Auswahl einer Fragenkategorie für Paare",
      report: "KI-Beziehungsanalyse von KnowUsBetter mit der Übereinstimmung eines Paares",
      couple: "Illustration eines Paares, das zusammen das KnowUsBetter-Quiz spielt",
    },
    faq: {
      eyebrow: "Fragen",
      title: "Alles über KnowUsBetter",
      items: [
        {
          q: "Was ist KnowUsBetter?",
          a: "KnowUsBetter (auch „Know Us Better“ geschrieben) ist ein kostenloses Quiz für Paare auf dem iPhone. Du und dein Schatz beantwortet dieselben Fragen, abwechselnd auf einem Handy oder gleichzeitig jeweils am eigenen Handy. Danach seht ihr, wo ihr übereinstimmt, bekommt euren Übereinstimmungswert und auf Wunsch eine Beziehungsanalyse mit KI.",
        },
        {
          q: "Wie spielt man KnowUsBetter?",
          a: "Erstellt einen Raum und wählt eine Kategorie. Sitzt ihr zusammen? Wählt „Ein Handy“, gebt den Namen deines Schatzes ein und antwortet abwechselnd: Die Antworten bleiben bis zur Auflösung verdeckt. Seid ihr nicht am selben Ort? Wählt „Zwei Handys“ und teilt den Raumcode, dann antwortet ihr gleichzeitig und seht eure Übereinstimmungen live. Ein Spiel dauert etwa fünf Minuten.",
        },
        {
          q: "Müssen wir beide die App herunterladen?",
          a: "Nein. Wenn ihr zusammen seid, reicht ein Handy, und dein Schatz muss nichts herunterladen: Ihr antwortet abwechselnd auf demselben Handy und seht die Ergebnisse gemeinsam. Um auf zwei Handys zu spielen, braucht ihr beide die App.",
        },
        {
          q: "Welche Spielmodi gibt es?",
          a: "Es gibt über 10 Arten zu spielen. Beantwortet dieselben Fragen und seht, wie oft ihr gleich tickt, mit Kategorien von frisch kennengelernt bis lange zusammen, tiefgründigen Gesprächen und Intimität. „Wie gut kennst du mich?“: Errate die Antworten deines Schatzes. „Wer weiß mehr?“: Tretet im Quiz direkt gegeneinander an. Dazu „Wer würde eher?“, „Rangliste“ und „Zwei Wahrheiten, eine Lüge“.",
        },
        {
          q: "Ist KnowUsBetter kostenlos?",
          a: "Ja. KnowUsBetter kannst du kostenlos laden, ganz ohne Konto oder Anmeldung. Alle 4 Stunden gibt es Gratis-Münzen, und optionale Münzpakete sind Einmalkäufe.",
        },
        {
          q: "Können Paare in einer Fernbeziehung spielen?",
          a: "Ja. Wählt „Zwei Handys“ und spielt jeweils am eigenen Handy, ob auf derselben Couch oder in verschiedenen Ländern. Bei Paaren in Fernbeziehungen ist es ein beliebtes Spiel für den gemeinsamen Date-Abend.",
        },
        {
          q: "Was ist die Beziehungsanalyse mit KI?",
          a: "Nach einem Spiel könnt ihr eine persönliche Analyse auf Basis eurer Antworten freischalten. Sie zeigt eure Stärken als Paar, wo ihr verschieden tickt und was ihr übereinander noch nicht wisst.",
        },
        {
          q: "Für wen ist KnowUsBetter?",
          a: "Für Paare, die sich gerade kennenlernen, Paare, die schon Jahre zusammen sind, Verheiratete, Fernbeziehungen und beste Freunde. Die Kategorien reichen von locker und lustig bis tiefgründig und bedeutungsvoll.",
        },
        {
          q: "Welche Sprachen und Geräte werden unterstützt?",
          a: "KnowUsBetter gibt es im App Store für iPhone und iPad, und ihr könnt in 7 Sprachen spielen: Deutsch, Englisch (English), Türkisch (Türkçe), Spanisch (Español), brasilianisches Portugiesisch (Português), Italienisch (Italiano) und Polnisch (Polski).",
        },
        {
          q: "Wo bekomme ich die offizielle KnowUsBetter-App?",
          a: "Die offizielle App ist „KnowUsBetter: Couple Quiz Game“ von Kaan Peksen im App Store (ID 6754946265), die offizielle Website ist knowusbetter.app. Andere Apps mit ähnlichen Namen haben nichts mit KnowUsBetter zu tun.",
        },
      ],
    },
    navCta: "App laden",
    hero: {
      eyebrow: "Das Quiz für Paare",
      headline: "Wie gut <em>kennst</em> du deinen Schatz wirklich?",
      sub: "Ein Handy oder zwei, dieselben Fragen, kein Spicken. Danach seht ihr, wo ihr übereinstimmt und wo nicht.",
      note: "Kostenlos fürs iPhone · In 7 Sprachen",
      scan: "Halte die Kamera deines iPhones hierher",
      partner: { thinking: "Jonas denkt nach", answered: "Jonas hat geantwortet", picked: "Jonas hat das auch gewählt" },
    },
    guess: {
      eyebrow: "Probier’s direkt aus",
      title: "Antworte für deinen Schatz.",
      sub: "Drei Fragen. Wähl, was dein Schatz wählen würde.",
      counter: "Frage {n} von {total}",
      questions: [
        {
          text: "Nach einem Streit will dein Schatz meistens …",
          options: ["Erst mal Abstand", "Sofort darüber reden", "So tun, als wäre nichts", "Sich mit Essen versöhnen"],
        },
        {
          text: "Wie beginnt der perfekte Sonntag deines Schatzes?",
          options: ["Ausschlafen, ohne Wecker", "Brunch in einem neuen Café", "Langer Spaziergang draußen", "Ehrlich gesagt: To-do-Liste"],
        },
        {
          text: "Wodurch fühlt sich dein Schatz am meisten geliebt?",
          options: ["Es laut gesagt bekommen", "Deine volle Aufmerksamkeit", "Eine kleine Überraschung", "Eine lange Umarmung"],
        },
      ],
      doneEyebrow: "3 Tipps abgegeben",
      doneTitle: "Und errät dein Schatz <em>deine</em> Antworten?",
      doneBody:
        "Das erfährst du hier nicht. In der App antwortet ihr beide, auf einem Handy oder auf zwei, und die Ergebnisse landen direkt nebeneinander.",
      play: "In der App herausfinden",
      send: "Quiz an deinen Schatz schicken",
      copied: "Link kopiert",
      restart: "Neu starten",
      shareText: "Ich hab gerade 3 Dinge über dich erraten. Wetten, du errätst meine nicht?",
    },
    how: {
      eyebrow: "So wird gespielt",
      title: "Fünf Minuten zum Spielen. Stunden zum Reden.",
      steps: [
        { title: "Wählt eure Stimmung", body: "Frisch kennengelernt, schon Jahre zusammen oder einfach Freundschaft. Die Fragen passen zu euch." },
        { title: "Antworten ohne Spicken", body: "Abwechselnd auf einem Handy oder gleichzeitig auf zwei. Die Antworten bleiben bis zur Auflösung verdeckt." },
        { title: "Seht, wie ihr zusammenpasst", body: "Eure Antworten nebeneinander, dazu eine KI-Analyse, was sie über euch zwei verraten." },
      ],
    },
    tonight: {
      eyebrow: "Frag heute Abend mal",
      questions: [
        "Welche Kleinigkeit an mir liebst du heimlich?",
        "Wann wusstest du, dass das mit uns etwas Echtes ist?",
        "An welchen gemeinsamen Moment denkst du am häufigsten zurück?",
        "Was hast du bei unserem ersten Treffen von mir gedacht?",
        "Welche Angewohnheit von mir hast du übernommen?",
        "Wann fühlst du dich mir am nächsten?",
        "Welcher Song erinnert dich an uns?",
        "Was willst du dieses Jahr mit mir ausprobieren?",
        "Womit könnte ich dir diese Woche den Tag versüßen?",
        "Ganz ehrlich: Wo siehst du uns in fünf Jahren?",
        "Was hast du mir nie erzählt, weil es dir zu klein vorkam?",
        "Wie sähe dein perfekter Tag mit mir aus?",
      ],
      after: "Die nächsten zehn stellt dann die App.",
    },
    get: "Laden",
    free: "Kostenlos",
    badge: ["Laden im", "App Store"],
  },

  it: {
    meta: {
      title: "KnowUsBetter: Quiz per Coppie | Quanto Conosci il Tuo Amore?",
      description:
        "Quiz per coppie gratis su iPhone. Giocate a turno su un telefono o in diretta su due, scoprite dove siete in sintonia e ricevete un punteggio di sintonia e un'analisi della relazione fatta con l'IA. Senza registrazione.",
      ogTitle: "KnowUsBetter: Conosci davvero il tuo amore?",
      ogDescription: "Il quiz per coppie. A turno su un telefono o in diretta su due, poi scoprite dove siete in sintonia. Gratis su iPhone.",
    },
    alt: {
      icon: "Icona dell'app KnowUsBetter",
      vibe: "Schermata di KnowUsBetter per scegliere una categoria di domande per coppie",
      report: "Analisi della relazione con l'IA di KnowUsBetter con la sintonia di una coppia",
      couple: "Illustrazione di una coppia che gioca insieme al quiz di KnowUsBetter",
    },
    faq: {
      eyebrow: "Domande",
      title: "Tutto su KnowUsBetter",
      items: [
        {
          q: "Che cos'è KnowUsBetter?",
          a: "KnowUsBetter (scritto anche «Know Us Better») è un quiz gratuito per coppie su iPhone. Tu e il tuo amore rispondete alle stesse domande, a turno su un telefono oppure in contemporanea da due telefoni. Poi scoprite dove siete in sintonia, ricevete un punteggio di sintonia e, se volete, un'analisi della relazione fatta con l'IA.",
        },
        {
          q: "Come si gioca a KnowUsBetter?",
          a: "Create una stanza e scegliete una categoria. Siete insieme? Scegliete «Un telefono», aggiungete il nome del tuo amore e rispondete a turno: le risposte restano nascoste fino alla fine. Vi trovate in posti diversi? Scegliete «Telefoni separati» e condividete il codice della stanza: rispondete in contemporanea e vedete in diretta dove coincidete. Una partita dura circa cinque minuti.",
        },
        {
          q: "Serve scaricare l'app su due telefoni?",
          a: "No. Se siete insieme basta un telefono, e il tuo amore non deve scaricare nulla: rispondete a turno sullo stesso telefono e vedete i risultati insieme. Per giocare da due telefoni, l'app serve su ciascun telefono.",
        },
        {
          q: "Quali modalità di gioco ci sono?",
          a: "Ci sono più di 10 modi di giocare. Rispondete alle stesse domande e scoprite quanto la pensate allo stesso modo, con categorie per chi si conosce da poco, per chi sta insieme da tanto, per i discorsi profondi e l'intimità. «Quanto mi conosci?»: indovina le risposte del tuo amore. «Chi ne sa di più?»: sfidatevi faccia a faccia in un quiz. E poi «Chi è più probabile che…?», «Metti in ordine» e «Due verità e una bugia».",
        },
        {
          q: "KnowUsBetter è gratis?",
          a: "Sì. KnowUsBetter si scarica gratis e non richiede account né login. Ricevi monete gratis ogni 4 ore, e i pacchetti di monete facoltativi sono acquisti una tantum.",
        },
        {
          q: "Possono giocare le coppie a distanza?",
          a: "Sì. Scegliete «Telefoni separati» e giocate da due telefoni, sullo stesso divano o da due paesi diversi. È un gioco molto amato per la serata di coppia nelle relazioni a distanza.",
        },
        {
          q: "Che cos'è l'analisi della relazione con l'IA?",
          a: "Dopo una partita potete sbloccare un report personalizzato basato sulle vostre risposte. Mostra i vostri punti di forza come coppia, dove la pensate in modo diverso e cosa vi sfugge ancora dell'altra persona.",
        },
        {
          q: "Per chi è KnowUsBetter?",
          a: "Per le coppie che si stanno conoscendo, quelle insieme da anni, le coppie sposate, quelle a distanza e i migliori amici. Le categorie vanno dal leggero e divertente al profondo e significativo.",
        },
        {
          q: "Quali lingue e dispositivi supporta?",
          a: "KnowUsBetter è disponibile sull'App Store per iPhone e iPad, e si può giocare in 7 lingue: italiano, inglese (English), turco (Türkçe), spagnolo (Español), portoghese brasiliano (Português), tedesco (Deutsch) e polacco (Polski).",
        },
        {
          q: "Dove scarico l'app ufficiale di KnowUsBetter?",
          a: "L'app ufficiale è «KnowUsBetter: Couple Quiz Game» di Kaan Peksen sull'App Store (ID 6754946265), e il sito ufficiale è knowusbetter.app. Altre app con nomi simili non hanno legami con KnowUsBetter.",
        },
      ],
    },
    navCta: "Scarica l'app",
    hero: {
      eyebrow: "Il quiz per coppie",
      headline: "Conosci <em>davvero</em> il tuo amore?",
      sub: "Un telefono o due, le stesse domande, niente sbirciate. Poi scoprite dove coincidete e dove no.",
      note: "Gratis su iPhone · In 7 lingue",
      scan: "Inquadra qui con la fotocamera dell'iPhone",
      partner: { thinking: "Luca ci sta pensando", answered: "Luca ha risposto", picked: "Anche Luca ha scelto questa" },
    },
    guess: {
      eyebrow: "Provalo subito",
      title: "Rispondi al posto del tuo amore.",
      sub: "Tre domande. Scegli quello che sceglierebbe il tuo amore.",
      counter: "Domanda {n} di {total}",
      questions: [
        {
          text: "Dopo una discussione, di solito il tuo amore…",
          options: ["Ha bisogno di spazio", "Vuole parlarne subito", "Fa finta di niente", "Fa pace col cibo"],
        },
        {
          text: "La domenica perfetta del tuo amore inizia con…",
          options: ["Una dormita senza sveglia", "Un brunch in un posto nuovo", "Una lunga passeggiata all'aperto", "Una lista di cose da fare, giuro"],
        },
        {
          text: "Cosa scalda di più il cuore del tuo amore?",
          options: ["Sentirselo dire", "Tutta la tua attenzione", "Una piccola sorpresa", "Un abbraccio lungo"],
        },
      ],
      doneEyebrow: "3 ipotesi registrate",
      doneTitle: "E il tuo amore indovinerebbe le <em>tue</em>?",
      doneBody:
        "Da qui non puoi saperlo. Nell'app rispondete in due, su un telefono o su due, e i risultati compaiono uno accanto all'altro.",
      play: "Scoprilo nell'app",
      send: "Manda il quiz al tuo amore",
      copied: "Link copiato",
      restart: "Ricomincia",
      shareText: "Ho appena indovinato 3 cose su di te. Scommetto che tu non indovini le mie.",
    },
    how: {
      eyebrow: "Come si gioca",
      title: "Cinque minuti per giocare. Ore per parlarne.",
      steps: [
        { title: "Scegliete il mood", body: "Da poco, da anni o solo amicizia. Le domande si adattano a voi." },
        { title: "Niente sbirciate", body: "A turno su un telefono o in contemporanea su due. Le risposte restano nascoste fino alla fine." },
        { title: "Scoprite la sintonia", body: "Le vostre risposte una accanto all'altra, più un report dell'IA su cosa dicono di voi due." },
      ],
    },
    tonight: {
      eyebrow: "Stasera, chiedi al tuo amore",
      questions: [
        "Qual è una piccola cosa che faccio e che ami in segreto?",
        "Quando hai capito che tra noi era una cosa seria?",
        "A quale nostro ricordo ripensi più spesso?",
        "Cosa hai pensato di me al nostro primo incontro?",
        "Quale mia abitudine hai preso anche tu?",
        "In quali momenti ti senti più in sintonia con me?",
        "Quale canzone ti fa pensare a noi?",
        "Cosa ti piacerebbe provare insieme quest'anno?",
        "Cosa potrei fare questa settimana per renderti la giornata più bella?",
        "Sinceramente, dove ci vedi tra cinque anni?",
        "Cosa non mi hai mai detto perché ti sembrava una sciocchezza?",
        "Come sarebbe la tua giornata perfetta con me?",
      ],
      after: "Poi lascia che le prossime dieci le faccia l'app.",
    },
    get: "Ottieni",
    free: "Gratis",
    badge: ["Scarica su", "App Store"],
  },

  pl: {
    meta: {
      title: "KnowUsBetter: quiz dla par | Jak dobrze znasz swoją drugą połówkę?",
      description:
        "Darmowy quiz dla par na iPhone’a. Grajcie na zmianę na jednym telefonie albo na żywo na dwóch, sprawdźcie, w czym się zgadzacie, i odbierzcie wynik zgodności oraz raport o waszym związku przygotowany przez AI. Bez rejestracji.",
      ogTitle: "KnowUsBetter: Czy naprawdę znasz swoją drugą połówkę?",
      ogDescription: "Quiz dla par. Na zmianę na jednym telefonie albo na żywo na dwóch, a potem sprawdźcie, w czym się zgadzacie. Za darmo na iPhone’a.",
    },
    alt: {
      icon: "Ikona aplikacji KnowUsBetter",
      vibe: "Ekran KnowUsBetter z wyborem kategorii pytań dla par",
      report: "Raport AI o związku w KnowUsBetter z wynikiem zgodności pary",
      couple: "Ilustracja pary, która razem gra w quiz KnowUsBetter",
    },
    faq: {
      eyebrow: "Pytania",
      title: "Wszystko o KnowUsBetter",
      items: [
        {
          q: "Czym jest KnowUsBetter?",
          a: "KnowUsBetter (pisane też „Know Us Better”) to darmowy quiz dla par na iPhone’a. Ty i twoja druga połówka odpowiadacie na te same pytania – na zmianę na jednym telefonie albo jednocześnie na dwóch. Potem widzicie, w czym się zgadzacie, dostajecie wynik zgodności i, jeśli chcecie, raport o waszym związku przygotowany przez AI.",
        },
        {
          q: "Jak się gra w KnowUsBetter?",
          a: "Utwórzcie pokój i wybierzcie kategorię. Siedzicie obok siebie? Wybierzcie „Jeden telefon”, wpiszcie imię drugiej osoby i odpowiadajcie na zmianę: odpowiedzi pozostają ukryte aż do odsłonięcia. Jesteście daleko od siebie? Wybierzcie „Osobne telefony” i wyślijcie kod pokoju – odpowiadacie jednocześnie i widzicie zgodności na żywo. Jedna gra trwa około pięciu minut.",
        },
        {
          q: "Czy aplikacja musi być na dwóch telefonach?",
          a: "Nie. Jeśli jesteście razem, wystarczy jeden telefon, a twoja druga połówka nie musi niczego pobierać: odpowiadacie na zmianę na tym samym telefonie i razem oglądacie wyniki. Żeby grać na dwóch telefonach, aplikacja musi być na każdym z nich.",
        },
        {
          q: "Jakie są tryby gry?",
          a: "Jest ponad 10 sposobów na grę. Odpowiadajcie na te same pytania i sprawdźcie, jak często myślicie podobnie – są kategorie dla par, które dopiero się poznają, par z długim stażem, na głębokie rozmowy i o intymności. „Jak dobrze mnie znasz?”: zgadnij odpowiedzi swojej drugiej połówki. „Kto wie więcej?”: zmierzcie się w quizie łeb w łeb. A do tego „Kto z was prędzej?”, „Ułóż ranking” i „Dwie prawdy, jedno kłamstwo”.",
        },
        {
          q: "Czy KnowUsBetter jest za darmo?",
          a: "Tak. KnowUsBetter można pobrać za darmo i nie trzeba zakładać konta ani się logować. Co 4 godziny dostajesz darmowe monety, a opcjonalne pakiety monet to jednorazowe zakupy.",
        },
        {
          q: "Czy mogą grać pary w związku na odległość?",
          a: "Tak. Wybierzcie „Osobne telefony” i grajcie, każda osoba na swoim telefonie – z tej samej kanapy albo z różnych krajów. To popularna gra na randkę w związku na odległość.",
        },
        {
          q: "Czym jest raport AI o związku?",
          a: "Po grze możecie odblokować spersonalizowany raport oparty na waszych odpowiedziach. Pokazuje wasze mocne strony jako pary, różnice między wami i to, czego wciąż o sobie nie wiecie.",
        },
        {
          q: "Dla kogo jest KnowUsBetter?",
          a: "Dla par, które dopiero się poznają, par z wieloletnim stażem, małżeństw, związków na odległość i najlepszych przyjaciół. Kategorie sięgają od lekkich i zabawnych po głębokie i poważne.",
        },
        {
          q: "Jakie języki i urządzenia są obsługiwane?",
          a: "Aplikacja KnowUsBetter jest dostępna w App Store na iPhone’a i iPada, a grać można w 7 językach: polskim, angielskim (English), tureckim (Türkçe), hiszpańskim (Español), portugalskim w wersji brazylijskiej (Português), niemieckim (Deutsch) i włoskim (Italiano).",
        },
        {
          q: "Skąd pobrać oficjalną aplikację KnowUsBetter?",
          a: "Oficjalna aplikacja to „KnowUsBetter: Couple Quiz Game” w App Store (twórca: Kaan Peksen, ID 6754946265), a oficjalna strona to knowusbetter.app. Inne aplikacje o podobnych nazwach nie są powiązane z KnowUsBetter.",
        },
      ],
    },
    navCta: "Pobierz aplikację",
    hero: {
      eyebrow: "Quiz dla par",
      headline: "Czy naprawdę <em>znasz</em> swoją drugą połówkę?",
      sub: "Jeden telefon albo dwa, te same pytania, bez podglądania. Potem widzicie, w czym się zgadzacie, a w czym nie.",
      note: "Za darmo na iPhone’a · W 7 językach",
      scan: "Skieruj tu aparat iPhone’a",
      partner: { thinking: "Kuba się zastanawia", answered: "Kuba odpowiedział", picked: "Kuba też to wybrał" },
    },
    guess: {
      eyebrow: "Sprawdź od razu",
      title: "Odpowiedz za swoją drugą połówkę.",
      sub: "Trzy pytania. Wybierz to, co wybrałaby twoja druga połówka.",
      counter: "Pytanie {n} z {total}",
      questions: [
        {
          text: "Po kłótni twoja druga połówka zwykle…",
          options: ["Potrzebuje chwili dla siebie", "Chce od razu pogadać", "Udaje, że nic się nie stało", "Godzi się przy jedzeniu"],
        },
        {
          text: "Idealna niedziela twojej drugiej połówki zaczyna się od…",
          options: ["Spania bez budzika", "Brunchu w nowym miejscu", "Długiego spaceru", "Listy zadań, serio"],
        },
        {
          text: "Co sprawia, że twoja druga połówka czuje się najbardziej kochana?",
          options: ["Słowa powiedziane na głos", "Twoja pełna uwaga", "Mała niespodzianka", "Długie przytulanie"],
        },
      ],
      doneEyebrow: "3 typy zapisane",
      doneTitle: "A czy twoja druga połówka zgadnie <em>twoje</em>?",
      doneBody:
        "Tutaj się tego nie dowiesz. W aplikacji odpowiadacie razem – na jednym telefonie albo na dwóch – a wyniki pojawiają się obok siebie.",
      play: "Sprawdź w aplikacji",
      send: "Wyślij ten quiz drugiej połówce",
      copied: "Link skopiowany",
      restart: "Zacznij od nowa",
      shareText: "Mam 3 typy na twój temat. Ciekawe, czy ty zgadniesz moje.",
    },
    how: {
      eyebrow: "Jak się gra",
      title: "Pięć minut gry. Godziny rozmów.",
      steps: [
        { title: "Wybierzcie klimat", body: "Dopiero się poznajecie, jesteście razem od lat albo to po prostu przyjaźń. Pytania pasują do was." },
        { title: "Bez podglądania", body: "Na zmianę na jednym telefonie albo jednocześnie na dwóch. Odpowiedzi są ukryte aż do odsłonięcia." },
        { title: "Sprawdźcie zgodność", body: "Wasze odpowiedzi obok siebie, a do tego raport AI o tym, co mówią o was." },
      ],
    },
    tonight: {
      eyebrow: "Dziś wieczorem zapytaj",
      questions: [
        "Który mój drobny gest po cichu uwielbiasz?",
        "Od kiedy wiesz, że to między nami jest na serio?",
        "Które nasze wspomnienie najczęściej wraca ci w myślach?",
        "Jakie było twoje pierwsze wrażenie na mój temat?",
        "Jaki mój nawyk ci się udzielił?",
        "Kiedy czujesz się mi najbliżej?",
        "Jaka piosenka kojarzy ci się z nami?",
        "Co chcesz razem wypróbować w tym roku?",
        "Co mogę zrobić w tym tygodniu, żeby poprawić ci dzień?",
        "Szczerze: gdzie widzisz nas za pięć lat?",
        "Jest coś, o czym mi nie mówisz, bo wydaje ci się zbyt błahe?",
        "Jak wyglądałby twój idealny dzień ze mną?",
      ],
      after: "A kolejne dziesięć niech zada aplikacja.",
    },
    get: "Pobierz",
    free: "Za darmo",
    badge: ["Pobierz z", "App Store"],
  },
};
