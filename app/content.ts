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
        "Free real-time couples quiz for iPhone. Answer the same questions on two phones, see where you match, get a compatibility score and an AI relationship report. No sign-up.",
      ogTitle: "KnowUsBetter: How well do you really know them?",
      ogDescription: "The real-time couples quiz game. Two phones, one question, answered at the same time. Free on iPhone.",
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
          a: "KnowUsBetter (also written “Know Us Better”) is a free, real-time couples quiz game for iPhone. You and your partner answer the same questions on your own phones at the same time, then see where you matched, get a compatibility score and an optional AI relationship report.",
        },
        {
          q: "How do you play KnowUsBetter?",
          a: "One of you creates a room and picks a category, then shares the room code. You both answer on your own phones at the same time and see your matches live, question by question. A game takes about five minutes.",
        },
        {
          q: "What game modes are there?",
          a: "There are three modes. Match Mode: answer the same questions and see how often you think alike. Know Me Well?: guess your partner's answers. Who Knows Better?: go head to head and see who knows the other best.",
        },
        {
          q: "Is KnowUsBetter free?",
          a: "Yes. KnowUsBetter is free to download and needs no account or login. You get free coins every 2 hours, and optional coin packs are a one-time purchase with no subscription.",
        },
        {
          q: "Can long-distance couples play?",
          a: "Yes. Each person plays on their own phone, so you can play on the same couch or from different countries. It is a popular date night game for long-distance relationships.",
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
          a: "KnowUsBetter is available on the App Store for iPhone and iPad, and you can play in English, Turkish (Türkçe) and Spanish (Español).",
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
      sub: "Two phones, one question, answered at the same time. Then you see where you matched, and where you didn't.",
      note: "Free on iPhone · English, Türkçe, Español",
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
        "You can't find out from here. In the app you both answer on your own phones, and the results land side by side.",
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
        { title: "Answer at once", body: "Same question on both phones. No peeking, no waiting." },
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
        "iPhone için ücretsiz, eş zamanlı çift testi. İki telefonda aynı soruları cevaplayın, nerede eşleştiğinizi görün, uyum puanı ve yapay zeka ilişki raporu alın. Üyelik gerekmez.",
      ogTitle: "KnowUsBetter: Partnerini gerçekten tanıyor musun?",
      ogDescription: "Çiftler için eş zamanlı quiz oyunu. İki telefon, tek soru, aynı anda cevap. iPhone'da ücretsiz.",
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
          a: "KnowUsBetter (“Know Us Better” olarak da yazılır), iPhone için ücretsiz ve eş zamanlı bir çiftler quiz oyunudur. Sen ve partnerin aynı soruları kendi telefonlarınızdan aynı anda cevaplarsınız, sonra nerede eşleştiğinizi görür, uyum puanınızı ve isteğe bağlı yapay zeka ilişki raporunuzu alırsınız.",
        },
        {
          q: "KnowUsBetter nasıl oynanır?",
          a: "Biriniz bir oda kurup kategori seçer ve oda kodunu paylaşır. İkiniz de kendi telefonunuzdan aynı anda cevaplarsınız ve eşleşmelerinizi soru soru canlı görürsünüz. Bir oyun yaklaşık beş dakika sürer.",
        },
        {
          q: "Hangi oyun modları var?",
          a: "Üç mod var. Eşleşme Modu: aynı soruları cevaplayın ve ne kadar aynı düşündüğünüzü görün. Beni İyi Tanıyor musun?: partnerinin cevaplarını tahmin et. Kim Daha İyi Tanıyor?: kafa kafaya yarışın ve birbirinizi kimin daha iyi tanıdığını görün.",
        },
        {
          q: "KnowUsBetter ücretsiz mi?",
          a: "Evet. KnowUsBetter'ı indirmek ücretsizdir ve hesap ya da üyelik gerekmez. Her 2 saatte bir ücretsiz jeton kazanırsın; isteğe bağlı jeton paketleri tek seferlik satın alımdır, abonelik yoktur.",
        },
        {
          q: "Uzak mesafe ilişkisi olan çiftler oynayabilir mi?",
          a: "Evet. Herkes kendi telefonundan oynadığı için aynı koltukta da, farklı ülkelerde de oynayabilirsiniz. Uzak mesafe ilişkileri için popüler bir randevu gecesi oyunudur.",
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
          a: "KnowUsBetter, App Store'da iPhone ve iPad için mevcuttur. Türkçe, İngilizce (English) ve İspanyolca (Español) oynayabilirsiniz.",
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
      sub: "İki telefon, tek soru, aynı anda cevap. Sonra nerede eşleştiğinizi, nerede ayrıldığınızı görürsünüz.",
      note: "iPhone'da ücretsiz · Türkçe, English, Español",
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
        "Bunu buradan öğrenemezsin. Uygulamada ikiniz de kendi telefonunuzdan cevaplıyorsunuz, sonuçlar yan yana çıkıyor.",
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
        { title: "Aynı anda cevaplayın", body: "İki telefonda aynı soru. Kopya yok, bekleme yok." },
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
        "Quiz gratis en tiempo real para parejas en iPhone. Respondan las mismas preguntas en dos teléfonos, vean en qué coinciden y reciban una puntuación de compatibilidad y un informe con IA. Sin registro.",
      ogTitle: "KnowUsBetter: ¿De verdad conoces a tu pareja?",
      ogDescription: "El quiz en tiempo real para parejas. Dos teléfonos, una pregunta, respondida al mismo tiempo. Gratis en iPhone.",
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
          a: "KnowUsBetter (también escrito “Know Us Better”) es un juego de preguntas gratis y en tiempo real para parejas en iPhone. Tú y tu pareja responden las mismas preguntas en sus propios teléfonos al mismo tiempo y luego ven en qué coincidieron, con una puntuación de compatibilidad y un informe opcional con IA.",
        },
        {
          q: "¿Cómo se juega a KnowUsBetter?",
          a: "Uno crea una sala, elige una categoría y comparte el código. Ambos responden en sus teléfonos a la vez y ven sus coincidencias en vivo, pregunta por pregunta. Una partida dura unos cinco minutos.",
        },
        {
          q: "¿Qué modos de juego hay?",
          a: "Hay tres modos. Modo Coincidencia: respondan las mismas preguntas y vean cuánto piensan igual. ¿Me Conoces Bien?: adivina las respuestas de tu pareja. ¿Quién Conoce Mejor?: compitan cara a cara para ver quién conoce mejor al otro.",
        },
        {
          q: "¿KnowUsBetter es gratis?",
          a: "Sí. KnowUsBetter es gratis, sin cuenta ni registro. Recibes monedas gratis cada 2 horas y los paquetes de monedas opcionales son un pago único, sin suscripción.",
        },
        {
          q: "¿Pueden jugar parejas a distancia?",
          a: "Sí. Cada persona juega en su propio teléfono, así que pueden jugar en el mismo sofá o desde países distintos. Es un juego ideal para citas en relaciones a distancia.",
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
          a: "KnowUsBetter está disponible en el App Store para iPhone y iPad, y se puede jugar en español, inglés (English) y turco (Türkçe).",
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
      sub: "Dos teléfonos, una pregunta, respondida al mismo tiempo. Después ven en qué coincidieron y en qué no.",
      note: "Gratis en iPhone · Español, English, Türkçe",
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
        "Desde aquí no lo puedes saber. En la app cada uno responde en su propio teléfono y los resultados aparecen lado a lado.",
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
        { title: "Respondan a la vez", body: "La misma pregunta en los dos teléfonos. Sin espiar, sin esperar." },
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
};
