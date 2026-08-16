/**
 * Add your projects and web apps here.
 * `image` should point to a file in the /photos folder (or leave blank for a placeholder).
 * `link` is optional — omit it if there's nothing to click through to yet.
 * `linkLabel` is optional — overrides the default "View source →" / "Try it →" text,
 * useful when a project links to a live page rather than a repo.
 */

const PROJECTS = [
  {
    title: "Marvicons",
    description: "A collection of simple, clean SVG line icons that use currentColor so they theme automatically.",
    tags: ["SVG", "Icons"],
    link: "https://github.com/09R3/Marv-s-site",
  },
  {
    title: "The Console Archive",
    description: "A field guide to 34 game consoles from 1972 to now — specs, rivalries, top-ten games, and how the hardware evolved.",
    tags: ["Reference", "Interactive"],
    image: "projects/console-archive/screenshot.jpeg",
    link: "projects/console-archive/",
    linkLabel: "Explore →",
  },
  // {
  //   title: "Project Name",
  //   description: "One or two sentences about what this is.",
  //   tags: ["Python", "CLI"],
  //   image: "photos/project-name.jpg",
  //   link: "https://github.com/you/project-name",
  // },
];

const WEB_APPS = [
  {
    title: "Hot Phrase",
    description: "A pass-the-phone party game: describe the word before the timer runs out and the heat rises.",
    tags: ["Game", "PWA"],
    image: "apps/hot-phrase/IMG_2238.jpeg",
    link: "apps/hot-phrase/",
  },
  {
    title: "Farkle Scorekeeper",
    description: "A scorekeeper for Farkle with the Greed! house rule, win-by margin overtime, and full undo/redo.",
    tags: ["React", "PWA"],
    image: "apps/farkle/IMG_2239.jpeg",
    link: "apps/farkle/",
  },
  {
    title: "LaserNode",
    description: "A laser job prep tool: draw, import, and trace artwork, assign cut/score/engrave operations, and export ready-to-cut SVGs.",
    tags: ["SVG", "Tool"],
    image: "apps/lasernode/screenshot.jpeg",
    link: "apps/lasernode/",
  },
];

/**
 * Photos shown in the Photos gallery, and picked at random for the hero
 * background on each page load. Add more by dropping a file in /photos
 * and adding an entry here.
 */
const PHOTOS = [
  { src: "photos/IMG_1982.jpeg", alt: "Night sky thick with stars, with faint green and red nebula color" },
  { src: "photos/IMG_1708.jpeg", alt: "Concrete fish ladder running through a green forest" },
  { src: "photos/IMG_2079.jpeg", alt: "Close-up of weathered, swirling driftwood grain" },
];
