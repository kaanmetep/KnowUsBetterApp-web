export const LANGS = ["en", "tr", "es"] as const;
export type Lang = (typeof LANGS)[number];

export const APP_STORE_URL = "https://apps.apple.com/app/id6754946265";

export function pickLang(override: string | undefined, acceptLanguage: string | null): Lang {
  if (override && (LANGS as readonly string[]).includes(override)) return override as Lang;
  const preferred = (acceptLanguage ?? "")
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());
  return (preferred.find((code) => (LANGS as readonly string[]).includes(code)) as Lang) ?? "en";
}

export function questionOfTheDay(count: number) {
  return Math.floor(Date.now() / 86_400_000) % count;
}

type Question = { text: string; options: [string, string, string, string] };

export type Copy = {
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
    navCta: "Get the app",
    hero: {
      eyebrow: "A game for two",
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
    navCta: "Uygulamayı indir",
    hero: {
      eyebrow: "Eş zamanlı quiz",
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
    navCta: "Descargar",
    hero: {
      eyebrow: "Un juego para dos",
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
