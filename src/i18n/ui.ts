// ── UI strings, per language ─────────────────────────────────────────
// English takes the tagline and description from the PUBLIC_* env vars so
// `.env` stays the single source for those; every other display string lives
// here. Adding a language means adding one entry below plus a page under
// `src/pages/<lang>/`.
import { site } from "../config";

export const languages = { en: "English", de: "Deutsch" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

const en = {
  // meta
  tagline: site.tagline,
  description: site.description,

  // header
  navDocs: "Docs",
  navPlayground: "Playground",
  navGithub: "GitHub",
  navNpm: "npm",
  homeSuffix: "home",
  themeToggle: "Toggle color theme",
  languageLabel: "Language",

  // hero
  heroEyebrow: "Open-source · TypeScript · built on Google Blockly",
  heroHeadline: "One definition, multiple representations.",
  heroLede:
    "Morphic Blocks is an embeddable TypeScript library built on top of " +
    "Google Blockly. One block model renders in as many representations as " +
    "you define, from icons to real source code.",
  ctaDocs: "Read the docs",
  ctaPlayground: "Try the playground",
  ctaGithub: "View on GitHub",

  // modes strip
  modesLabel: "Same statement, three modes",
  modes: [
    {
      name: "Simple",
      alt: "The Print block in simple mode: a printer icon, the label Print, and a one line description",
    },
    {
      name: "Pseudo",
      alt: "The Print block in pseudo mode: a block labelled Output with an empty input slot",
    },
    {
      name: "Syntax-JS",
      alt: "The Print block in syntax-js mode: console.log with an empty argument",
    },
  ],

  // features
  features: [
    {
      title: "One block, many modes",
      body:
        "A single morphic block carries several visual elements: icons, " +
        "natural-language labels, and code templates. Modes decide which are " +
        "shown, and switch at runtime without remounting.",
    },
    {
      title: "Declarative & config-driven",
      body:
        "Define blocks in JSON, behaviors in TypeScript, and one CSS file per " +
        "mode. Extend or restyle an environment by editing config, not " +
        "Blockly's multi-file imperative setup.",
    },
    {
      title: "Built for transition",
      body:
        "Render the same program as icons, blocks, or text to scaffold the " +
        "gradual path from block-based to text-based programming, with one " +
        "framework across many learning stages.",
    },
    {
      title: "No external requests",
      body:
        "The framework never contacts another server. So the site alone " +
        "decides which requests a browser makes during a visit. Blockly's " +
        "images and sounds can be served from the same site too.",
    },
  ],

  // quick start
  quickstartTitle: "Quick start",
  quickstartBody: [
    "Install the package, hand it your definitions and behaviors, and mount.",
    "That is the whole loop. The docs cover modes, toolbox, codespace, and " +
      "behaviors in depth.",
  ],
  quickstartLink: "Read the full guide →",

  // screenshots
  screenshotsTitle: "See it in action",
  screenshotsHint: "Scroll or swipe to see more.",
  screenshotsAria: "Screenshots",
  screenshotAltFallback: "Screenshot of Morphic Blocks",


  // install command
  installCopy: "Copy install command",
  installNpm: "View on npm →",

  // footer
  footerProject: "Project",
  footerLegal: "Legal",
  footerDocs: "Documentation",
  footerPlayground: "Playground",
  footerGithub: "GitHub",
  footerNpm: "npm",
  footerImprint: "Imprint",
  footerPrivacy: "Privacy",
  footerDisclaimer: "Disclaimer",
  developedAt: "Developed at",
};

export type Strings = typeof en;

const de: Strings = {
  // meta
  tagline: "Eine Definition, mehrere Repräsentationen.",
  description:
    "Eine quelloffene TypeScript-Bibliothek auf Basis von Google Blockly, " +
    "die ein Blockmodell in mehreren selbst definierten Modi darstellt und " +
    "den schrittweisen Übergang zwischen block- und textbasiertem " +
    "Programmieren unterstützt.",

  // header
  navDocs: "Doku",
  navPlayground: "Playground",
  navGithub: "GitHub",
  navNpm: "npm",
  homeSuffix: "Startseite",
  themeToggle: "Farbschema umschalten",
  languageLabel: "Sprache",

  // hero
  heroEyebrow: "Open Source · TypeScript · basiert auf Google Blockly",
  heroHeadline: "Eine Definition, viele Darstellungen.",
  heroLede:
    "Morphic Blocks ist eine einbettbare TypeScript-Bibliothek auf Basis von " +
    "Google Blockly. Ein einziges Blockmodell wird in so vielen " +
    "Repräsentationen dargestellt, wie Sie definieren, von Symbolen bis zu " +
    "echtem Quelltext.",
  ctaDocs: "Zur Dokumentation",
  ctaPlayground: "Playground ausprobieren",
  ctaGithub: "Auf GitHub ansehen",

  // modes strip
  modesLabel: "Dieselbe Anweisung, drei Modi",
  modes: [
    {
      name: "Simple",
      alt: "Der Print-Block im Modus Simple: ein Druckersymbol, die Bezeichnung Print und eine einzeilige Beschreibung",
    },
    {
      name: "Pseudo",
      alt: "Der Print-Block im Modus Pseudo: ein Block mit der Aufschrift Output und einem leeren Eingabefeld",
    },
    {
      name: "Syntax-JS",
      alt: "Der Print-Block im Modus Syntax-JS: console.log mit einem leeren Argument",
    },
  ],

  // features
  features: [
    {
      title: "Ein Block, viele Modi",
      body:
        "Ein einzelner Morphic Block trägt mehrere visuelle Elemente: " +
        "Symbole, sprachliche Beschriftungen und Code-Vorlagen. Die Modi " +
        "bestimmen, welche davon sichtbar sind, und lassen sich zur Laufzeit " +
        "umschalten, ohne neu einzubinden.",
    },
    {
      title: "Deklarativ und konfigurationsgesteuert",
      body:
        "Blöcke in JSON, Verhalten in TypeScript und eine CSS-Datei pro " +
        "Modus. Eine Umgebung wird über die Konfiguration erweitert oder " +
        "umgestaltet, nicht über Blocklys imperatives Setup mit vielen " +
        "Dateien.",
    },
    {
      title: "Für den Übergang gemacht",
      body:
        "Stellen Sie dasselbe Programm als Symbole, Blöcke oder Text dar und " +
        "begleiten Sie damit den schrittweisen Weg vom block- zum " +
        "textbasierten Programmieren, mit einem Framework über viele " +
        "Lernstufen hinweg.",
    },
    {
      title: "Keine externen Anfragen",
      body:
        "Das Framework kontaktiert keinen anderen Server. So bestimmt allein " +
        "die eigene Seite, welche Anfragen ein Browser beim Besuch stellt. Auch " +
        "die Bilder und Sounds von Blockly lassen sich von derselben Seite " +
        "ausliefern.",
    },
  ],

  // quick start
  quickstartTitle: "Schnellstart",
  quickstartBody: [
    "Paket installieren, Definitionen und Verhalten übergeben, einbinden.",
    "Das ist der gesamte Ablauf. Die Dokumentation behandelt Modi, Toolbox, " +
      "Codespace und Verhalten im Detail.",
  ],
  quickstartLink: "Zur vollständigen Anleitung →",

  // screenshots
  screenshotsTitle: "So sieht es aus",
  screenshotsHint: "Scrollen oder wischen, um mehr zu sehen.",
  screenshotsAria: "Screenshots",
  screenshotAltFallback: "Screenshot von Morphic Blocks",


  // install command
  installCopy: "Installationsbefehl kopieren",
  installNpm: "Auf npm ansehen →",

  // footer
  footerProject: "Projekt",
  footerLegal: "Rechtliches",
  footerDocs: "Dokumentation",
  footerPlayground: "Playground",
  footerGithub: "GitHub",
  footerNpm: "npm",
  footerImprint: "Impressum",
  footerPrivacy: "Datenschutz",
  footerDisclaimer: "Haftungsausschluss",
  developedAt: "Entwickelt an der",
};

export const ui: Record<Lang, Strings> = { en, de };
