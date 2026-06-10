import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Um pequeno mundo feito para você" },
      {
        name: "description",
        content:
          "Um diário digital artesanal — uma jornada delicada de admiração, valores e pequenas aventuras.",
      },
      { property: "og:title", content: "Um pequeno mundo feito para você" },
      {
        property: "og:description",
        content: "Uma carta interativa, feita com carinho.",
      },
    ],
  }),
  component: Index,
});

type SectionId =
  | "inicio"
  | "mundo"
  | "voce"
  | "admiro"
  | "cores"
  | "aventuras"
  | "fe"
  | "cacada"
  | "sonhos"
  | "carta"
  | "final";

const NAV: { id: SectionId; label: string }[] = [
  { id: "inicio", label: "Início" },
  { id: "mundo", label: "Um mundo" },
  { id: "voce", label: "Quem você é" },
  { id: "admiro", label: "Admiro" },
  { id: "cores", label: "Cores" },
  { id: "aventuras", label: "Aventuras" },
  { id: "fe", label: "Fé" },
  { id: "cacada", label: "Caça" },
  { id: "sonhos", label: "Sonhos" },
  { id: "carta", label: "Carta" },
  { id: "final", label: "Final" },
];

function scrollTo(id: SectionId) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  return (
    <main className="relative">
      <TopNav />
      <Hero />
      <Mundo />
      <Voce />
      <Admiro />
      <Cores />
      <Aventuras />
      <Fe />
      <Cacada />
      <Sonhos />
      <Carta />
      <Final />
      <footer className="py-10 text-center text-sm text-muted-foreground">
        <p className="hand text-xl">feito à mão, com carinho</p>
      </footer>
    </main>
  );
}

function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      aria-label="Navegação principal"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => scrollTo("inicio")}
          className="hand text-2xl text-foreground hover:text-[var(--gold)] transition-colors"
        >
          ✦ diário
        </button>
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`menu-btn md:hidden ${open ? "is-open" : ""}`}
        >
          <span className="bar b1" />
          <span className="bar b2" />
          <span className="bar b3" />
        </button>
        <ul className="hidden md:flex items-center gap-5 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => scrollTo(n.id)}
                className="text-muted-foreground hover:text-foreground transition-colors story-link"
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="md:hidden border-t border-border bg-background/95 px-4 py-3 grid grid-cols-2 gap-2 text-sm animate-fade-in">
          {NAV.map((n) => (
            <li key={n.id}>
              <button
                onClick={() => {
                  scrollTo(n.id);
                  setOpen(false);
                }}
                className="w-full text-left rounded-md px-3 py-2 hover:bg-muted text-foreground"
              >
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: SectionId;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {eyebrow && (
          <p className="hand text-2xl text-[var(--gold)] mb-2">{eyebrow}</p>
        )}
        <h2
          id={`${id}-title`}
          className="text-3xl md:text-5xl font-medium tracking-tight text-foreground"
        >
          {title}
        </h2>
        <div className="deco-line my-6" />
        <div className="fade-up">{children}</div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="relative min-h-[100dvh] flex items-center justify-center px-4 pt-20"
    >
      <div className="starry absolute inset-0 opacity-70 pointer-events-none" aria-hidden />
      <div className="relative text-center max-w-3xl fade-up">
        <p className="hand text-3xl text-[var(--gold)] twinkle">para você</p>
        <h1
          id="inicio-title"
          className="mt-4 text-4xl md:text-6xl font-medium leading-tight text-foreground"
        >
          Algumas pessoas passam pela nossa vida.
          <br />
          <span className="italic text-muted-foreground">Outras deixam marcas.</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Fiz esse pequeno lugar para guardar algumas delas.
        </p>
        <button
          onClick={() => scrollTo("mundo")}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--gold)] bg-card px-7 py-3 text-base text-foreground shadow-[var(--shadow-soft)] hover:bg-[var(--gold)] hover:text-primary-foreground transition-colors"
        >
          Entrar <span aria-hidden>→</span>
        </button>
        <div className="mt-16 float-soft text-[var(--gold)]" aria-hidden>
          ✦
        </div>
      </div>
    </section>
  );
}

const MUNDO_ITEMS = [
  { icon: "🐍", label: "Cobra", note: "um símbolo que me lembra de você — e me faz sorrir." },
  { icon: "🖌️", label: "Pincel", note: "porque você pinta o dia com pequenos gestos." },
  { icon: "🏐", label: "Bola de vôlei", note: "o esporte, o time, a energia que você carrega." },
  { icon: "🛤️", label: "Caminho", note: "um lembrete de que toda história é uma trilha." },
  { icon: "✦", label: "Estrela", note: "porque algumas pessoas brilham sem perceber." },
];

function Mundo() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="mundo" eyebrow="capítulo 1" title="Um pequeno mundo feito para você">
      <p className="text-lg text-muted-foreground max-w-2xl">
        Cinco símbolos. Cada um guarda uma pequena lembrança — toque para descobrir.
      </p>
      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {MUNDO_ITEMS.map((it, i) => {
          const isOpen = open === i;
          return (
            <li key={it.label}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-label={`Revelar: ${it.label}`}
                className="paper-card w-full aspect-square flex flex-col items-center justify-center gap-2 p-3 transition-transform hover:-translate-y-1"
              >
                <span className="text-4xl" aria-hidden>
                  {it.icon}
                </span>
                <span className="text-sm text-muted-foreground">{it.label}</span>
              </button>
              {isOpen && (
                <p className="hand text-xl mt-3 text-center text-foreground fade-up">
                  {it.note}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

const TRAITS: { t: string; d: string; icon: string }[] = [
  { t: "Curiosa", d: "sempre com uma pergunta nova guardada no bolso.", icon: "🔎" },
  { t: "Auxiliadora", d: "aparece antes mesmo de pedirem ajuda.", icon: "🤝" },
  { t: "Meiga", d: "tem um jeito que acalma o ambiente.", icon: "🌷" },
  { t: "Atenciosa", d: "lembra dos detalhes que ninguém mais lembra.", icon: "📝" },
  { t: "Carinhosa", d: "cuida em pequenos gestos diários.", icon: "💌" },
  { t: "Alegre", d: "tem um riso que contagia até quem não sabia que precisava.", icon: "☀️" },
  { t: "Esforçada", d: "insiste, mesmo quando seria mais fácil desistir.", icon: "🌱" },
  { t: "Um pouco tímida", d: "e isso é parte do charme.", icon: "🌙" },
  { t: "Servir", d: "ajuda como quem oferece um café quentinho.", icon: "🍵" },
  { t: "Aventureira", d: "topa o inesperado quando vale a pena.", icon: "🧭" },
  { t: "Cuidadora", d: "vê as pessoas — de verdade.", icon: "🫶" },
  { t: "Inquieta", d: "raramente parada, sempre criando.", icon: "✨" },
];

function Voce() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setFlipped((prev) => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  const progress = flipped.size;
  return (
    <Section id="voce" eyebrow="capítulo 2" title="Quem você é">
      <p className="text-lg text-muted-foreground max-w-2xl">
        Um pequeno retrato — toque em cada carta para virá-la e ler o lado de dentro.
      </p>
      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        <span>{progress} de {TRAITS.length} reveladas</span>
        <div className="flex gap-1.5 ml-2">
          {TRAITS.map((_, i) => (
            <span key={i} className={`dot ${flipped.has(i) ? "on" : ""}`} />
          ))}
        </div>
      </div>
      <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {TRAITS.map((t, i) => (
          <li key={t.t} className="flip" style={{ height: 140 }}>
            <button
              onClick={() => toggle(i)}
              aria-label={`Virar carta: ${t.t}`}
              aria-pressed={flipped.has(i)}
              className={`flip ${flipped.has(i) ? "is-flipped" : ""} w-full h-full block`}
            >
              <div className="flip-inner">
                <div className="flip-face paper-card flex-col gap-2">
                  <span className="text-2xl" aria-hidden>{t.icon}</span>
                  <span className="hand text-xl text-foreground">{t.t}</span>
                </div>
                <div className="flip-face flip-back paper-card" style={{ background: "var(--accent)" }}>
                  <span className="text-sm text-foreground leading-snug">{t.d}</span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {progress === TRAITS.length && (
        <p className="hand text-2xl text-center mt-8 text-[var(--gold)] fade-up">
          Doze cartas, um só retrato — e ainda assim, falta espaço pra tudo que você é.
        </p>
      )}
    </Section>
  );
}

const ADMIRO = [
  {
    t: "Quando você escuta",
    d: "de verdade — sem pressa, com os olhos atentos.",
  },
  {
    t: "Quando você ajuda",
    d: "como quem não busca nada em troca, só faz porque é quem é.",
  },
  {
    t: "Quando você ri",
    d: "do nada, de tudo, e o ambiente inteiro fica mais leve.",
  },
  {
    t: "Quando você se importa",
    d: "com detalhes pequenos que a maioria sequer enxerga.",
  },
  {
    t: "Quando você não desiste",
    d: "mesmo cansada, mesmo tímida, mesmo quando seria mais fácil parar.",
  },
  {
    t: "Quando você é gentil",
    d: "com quem não esperava ser tratado com gentileza.",
  },
];

function Admiro() {
  return (
    <Section id="admiro" eyebrow="capítulo 3" title="As pequenas coisas que admiro">
      <div className="grid md:grid-cols-2 gap-5">
        {ADMIRO.map((a) => (
          <article key={a.t} className="paper-card p-6">
            <h3 className="text-xl text-foreground">{a.t}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{a.d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

const CORES = [
  { name: "Verde", value: "var(--sage)", meaning: "Esperança", phrase: "Como começo de manhã: silencioso, mas cheio de promessas." },
  { name: "Amarelo", value: "var(--sun)", meaning: "Alegria", phrase: "Aquele riso fácil que aquece a tarde inteira." },
  { name: "Azul", value: "var(--sky)", meaning: "Serenidade", phrase: "A calma de quem escuta sem pressa." },
  { name: "Vermelho suave", value: "var(--rose)", meaning: "Carinho", phrase: "O afeto que aparece nos pequenos gestos." },
  { name: "Dourado", value: "var(--gold)", meaning: "Coragem", phrase: "A luz de quem topa novas aventuras." },
];

function Cores() {
  const [active, setActive] = useState<number>(0);
  const current = CORES[active];
  return (
    <Section id="cores" eyebrow="capítulo 4" title="As cores da sua personalidade">
      <p className="text-lg text-muted-foreground max-w-2xl">
        Toque em um pote de tinta — o papel se pinta com ele.
      </p>

      <div
        className="color-stage mt-8 paper-card p-6 md:p-10 min-h-[220px] flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: `color-mix(in oklab, ${current.value} 35%, var(--color-card))` }}
      >
        <p key={current.name} className="hand text-4xl md:text-5xl text-foreground drop-in">
          {current.name}
        </p>
        <p key={current.phrase} className="mt-3 text-foreground/80 max-w-xl drop-in">
          {current.phrase}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{current.meaning}</p>
      </div>

      <ul className="mt-6 grid grid-cols-5 gap-3">
        {CORES.map((c, i) => {
          const isActive = i === active;
          return (
            <li key={c.name}>
              <button
                onClick={() => setActive(i)}
                aria-label={`Cor: ${c.name}`}
                aria-pressed={isActive}
                className={`group w-full flex flex-col items-center gap-2 transition-transform ${
                  isActive ? "-translate-y-1" : "hover:-translate-y-0.5"
                }`}
              >
                <span
                  className="block w-12 h-12 md:w-16 md:h-16 rounded-full transition-all"
                  style={{
                    backgroundColor: c.value,
                    boxShadow: isActive
                      ? `0 0 0 4px var(--color-card), 0 0 0 6px ${c.value}, 0 10px 24px oklch(0.3 0.02 60 / 0.18)`
                      : "var(--shadow-soft)",
                  }}
                  aria-hidden
                />
                <span className={`text-xs ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {c.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

const AVENTURAS = [
  { icon: "🚶", t: "Passeios", d: "andar sem destino, só por andar." },
  { icon: "💬", t: "Conversas longas", d: "daquelas que viram noite sem perceber." },
  { icon: "🗺️", t: "Planos simples", d: "porque o simples também é bonito." },
  { icon: "✨", t: "Aventuras inesperadas", d: "as melhores não se planejam." },
];

function Aventuras() {
  return (
    <Section id="aventuras" eyebrow="capítulo 5" title="Nossas aventuras meio loucas">
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {AVENTURAS.map((a) => (
          <li key={a.t} className="paper-card p-5 text-center">
            <div className="text-3xl" aria-hidden>
              {a.icon}
            </div>
            <h3 className="mt-2 text-lg text-foreground">{a.t}</h3>
            <p className="text-sm text-muted-foreground mt-1">{a.d}</p>
          </li>
        ))}
      </ul>
      <blockquote className="hand text-2xl md:text-3xl text-center mt-10 text-foreground max-w-3xl mx-auto">
        “Uma das coisas mais legais é encontrar alguém que também aceita embarcar em aventuras inesperadas.”
      </blockquote>
    </Section>
  );
}

const FE: { v: string; verse: string; ref: string }[] = [
  { v: "Amor ao próximo", verse: "Amarás o teu próximo como a ti mesmo.", ref: "Mateus 22:39" },
  { v: "Servir", verse: "Servi-vos uns aos outros pelo amor.", ref: "Gálatas 5:13" },
  { v: "Bondade", verse: "Sede uns para com os outros benignos, misericordiosos.", ref: "Efésios 4:32" },
  { v: "Esperança", verse: "A esperança não traz confusão.", ref: "Romanos 5:5" },
  { v: "Caminhar com Deus", verse: "Ensina-me, Senhor, o teu caminho.", ref: "Salmos 27:11" },
];

function Fe() {
  const [lit, setLit] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setLit((p) => {
      const n = new Set(p);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  const all = lit.size === FE.length;
  return (
    <Section id="fe" eyebrow="capítulo 6" title="Nossa fé e os valores que compartilhamos">
      <p className="text-lg text-muted-foreground max-w-2xl">
        Acenda cada vela tocando nela — cada chama traz um pequeno versículo.
      </p>
      <ul className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
        {FE.map((f, i) => {
          const on = lit.has(i);
          return (
            <li key={f.v}>
              <button
                onClick={() => toggle(i)}
                aria-pressed={on}
                aria-label={`Acender vela: ${f.v}`}
                className="paper-card w-full p-4 flex flex-col items-center gap-3 transition-transform hover:-translate-y-1"
              >
                <div className="relative h-16 flex items-end justify-center">
                  {on && <div className="candle-flame absolute -top-1" aria-hidden />}
                  <div
                    className="w-3 h-12 rounded-sm"
                    style={{
                      background: "linear-gradient(180deg, #fff6e0, #efd9a8)",
                      boxShadow: on ? "0 0 18px var(--gold)" : "none",
                      transition: "box-shadow 0.4s ease",
                    }}
                    aria-hidden
                  />
                </div>
                <span className="hand text-xl text-foreground">{f.v}</span>
                {on && (
                  <span className="text-xs text-muted-foreground italic fade-up">
                    “{f.verse}” <br />
                    <span className="not-italic">— {f.ref}</span>
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
      <figure
        className={`mt-10 paper-card p-6 md:p-10 max-w-3xl mx-auto text-center transition-all ${
          all ? "ring-2 ring-[var(--gold)]" : ""
        }`}
      >
        <blockquote className="text-xl md:text-2xl italic text-foreground leading-relaxed">
          “Acima de tudo, porém, revistam-se do amor, que é o vínculo perfeito.”
        </blockquote>
        <figcaption className="mt-3 text-sm text-muted-foreground">— Colossenses 3:14</figcaption>
        {all && (
          <p className="hand text-2xl mt-4 text-[var(--gold)] fade-up">
            cinco chamas acesas — luz pequena, mas suficiente.
          </p>
        )}
      </figure>
    </Section>
  );
}

const TESOUROS = ["🐍", "🖌️", "🏐", "✦"];
const TESOUROS_LABEL: Record<string, string> = {
  "🐍": "Cobra",
  "🖌️": "Pincel",
  "🏐": "Bola de vôlei",
  "✦": "Estrela",
};

function Cacada() {
  const [found, setFound] = useState<string[]>([]);

  // Hide treasures at deterministic spots
  const spots = useMemo(
    () => [
      { icon: "🐍", top: "12%", left: "8%" },
      { icon: "🖌️", top: "68%", left: "82%" },
      { icon: "🏐", top: "78%", left: "18%" },
      { icon: "✦", top: "22%", left: "78%" },
    ],
    [],
  );

  const complete = found.length === TESOUROS.length;

  function pick(icon: string) {
    setFound((f) => (f.includes(icon) ? f : [...f, icon]));
  }

  return (
    <Section id="cacada" eyebrow="capítulo 7" title="Pequenas missões e caça ao tesouro">
      <p className="text-lg text-muted-foreground max-w-2xl">
        Quatro tesouros estão escondidos no pergaminho abaixo. Encontre todos para revelar uma
        mensagem.
      </p>

      <div className="mt-8 flex flex-wrap gap-3" aria-live="polite">
        {TESOUROS.map((t) => {
          const got = found.includes(t);
          return (
            <span
              key={t}
              className={`paper-card px-4 py-2 text-sm ${
                got ? "text-foreground" : "text-muted-foreground opacity-60"
              }`}
            >
              <span aria-hidden className="mr-1">
                {got ? t : "·"}
              </span>
              {TESOUROS_LABEL[t]}
            </span>
          );
        })}
      </div>

      <div
        className="relative mt-8 paper-card overflow-hidden"
        style={{ height: 360 }}
        aria-label="Área de caça ao tesouro"
      >
        <div className="starry absolute inset-0 opacity-50" aria-hidden />
        {spots.map((s) => {
          const got = found.includes(s.icon);
          return (
            <button
              key={s.icon}
              onClick={() => pick(s.icon)}
              aria-label={`Tesouro: ${TESOUROS_LABEL[s.icon]}`}
              disabled={got}
              className={`absolute text-2xl md:text-3xl transition-all ${
                got ? "opacity-100 scale-110 cursor-default" : "opacity-50 hover:opacity-100 hover:scale-125"
              }`}
              style={{ top: s.top, left: s.left }}
            >
              {s.icon}
            </button>
          );
        })}
        {complete && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/85 backdrop-blur-sm fade-up p-6">
            <p className="hand text-2xl md:text-3xl text-center max-w-xl text-foreground">
              Você encontrou todos. Talvez seja assim mesmo — quem procura com cuidado, encontra
              tesouros pequenos por toda parte.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
}

const SONHOS = [
  "Continuar crescendo, devagar e com calma.",
  "Viver aventuras — das grandes e das pequenas.",
  "Construir uma vida guiada por bons valores.",
  "Encontrar alguém que queira caminhar na mesma direção.",
];

function Sonhos() {
  const [revealed, setRevealed] = useState<number>(-1);
  const [extra, setExtra] = useState<string[]>([]);
  const [draft, setDraft] = useState("");

  return (
    <Section id="sonhos" eyebrow="capítulo 8" title="Sonhos e futuros possíveis">
      <p className="text-lg text-muted-foreground max-w-2xl">
        Toque em cada estrela para revelar um sonho. No fim, deixe um seu também.
      </p>

      <ol className="mt-8 space-y-3 max-w-2xl">
        {SONHOS.map((s, i) => {
          const open = i <= revealed;
          return (
            <li key={s} className="paper-card p-5">
              <button
                onClick={() => setRevealed((r) => Math.max(r, i))}
                className="w-full text-left flex items-start gap-3"
                aria-expanded={open}
              >
                <span
                  className={`text-2xl transition-transform ${open ? "text-[var(--gold)] rotate-0 scale-110" : "text-muted-foreground"}`}
                  aria-hidden
                >
                  ✦
                </span>
                {open ? (
                  <span key={s} className="hand text-2xl text-foreground typewriter">
                    {s}
                  </span>
                ) : (
                  <span className="hand text-2xl text-muted-foreground">
                    sonho número {i + 1} — toque para revelar
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>

      {revealed >= SONHOS.length - 1 && (
        <div className="mt-8 paper-card p-5 max-w-2xl fade-up">
          <p className="text-sm text-muted-foreground mb-2">
            E se você quisesse acrescentar um sonho seu aqui?
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const t = draft.trim();
              if (!t) return;
              setExtra((x) => [...x, t]);
              setDraft("");
            }}
            className="flex gap-2"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="escreva um sonho…"
              aria-label="Seu sonho"
              className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-base text-foreground focus:outline-none focus:border-[var(--gold)] transition-colors"
              maxLength={120}
            />
            <button
              type="submit"
              className="rounded-md border border-[var(--gold)] bg-card px-4 py-2 text-sm text-foreground hover:bg-[var(--gold)] hover:text-primary-foreground transition-colors"
            >
              guardar
            </button>
          </form>
          {extra.length > 0 && (
            <ul className="mt-4 space-y-2">
              {extra.map((e, i) => (
                <li key={i} className="hand text-xl text-foreground fade-up flex items-center gap-2">
                  <span className="text-[var(--gold)]" aria-hidden>✦</span> {e}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Section>
  );
}


function Carta() {
  return (
    <Section id="carta" eyebrow="capítulo 9" title="Uma carta para você">
      <article className="paper-card p-8 md:p-12 max-w-3xl mx-auto">
        <p className="hand text-2xl text-[var(--gold)]">Oi,</p>
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground">
          <p>
            Eu não sei exatamente como começar — então começo do jeito mais honesto que conheço:
            admirando você.
          </p>
          <p>
            Admiro o jeito que você se importa com as pessoas, o modo como você encara as coisas
            simples, e essa coragem silenciosa de seguir tentando, mesmo quando parece difícil.
          </p>
          <p>
            Esse pequeno lugar não é um pedido. É só um cuidado em forma de site — um jeito de
            dizer que você é especial, sem pressa, sem peso. Só com carinho.
          </p>
          <p className="hand text-2xl text-foreground">— com carinho.</p>
        </div>
      </article>
    </Section>
  );
}

function Final() {
  const [revealed, setRevealed] = useState(false);
  return (
    <section
      id="final"
      aria-labelledby="final-title"
      className="scroll-mt-24 min-h-[80dvh] flex items-center justify-center px-4 py-20"
    >
      <div className="text-center max-w-2xl fade-up">
        <h2
          id="final-title"
          className="text-3xl md:text-5xl font-medium text-foreground leading-tight"
        >
          “As melhores histórias não são escritas por uma pessoa só.”
        </h2>
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--gold)] bg-card px-7 py-3 text-base text-foreground shadow-[var(--shadow-soft)] hover:bg-[var(--gold)] hover:text-primary-foreground transition-colors"
          >
            Continuar… <span aria-hidden>→</span>
          </button>
        ) : (
          <p className="hand text-2xl md:text-3xl mt-10 text-foreground fade-up">
            A próxima parte dessa história não está neste site. Ela acontece em uma conversa,
            quando chegar o momento certo.
          </p>
        )}
      </div>
    </section>
  );
}

// Suppress unused import warning if any
void useEffect;
