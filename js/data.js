/**
 * Add your projects and web apps here.
 * `image` should point to a file in the /photos folder (or leave blank for a placeholder).
 * `link` is optional — omit it if there's nothing to click through to yet.
 */

const PROJECTS = [
  {
    title: "Marvicons",
    description: "A collection of simple, clean SVG line icons that use currentColor so they theme automatically.",
    tags: ["SVG", "Icons"],
    link: "https://github.com/09R3/Marv-s-site",
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
    link: "apps/hot-phrase/",
  },
  {
    title: "Farkle Scorekeeper",
    description: "A scorekeeper for Farkle with the Greed! house rule, win-by margin overtime, and full undo/redo.",
    tags: ["React", "PWA"],
    link: "apps/farkle/",
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
