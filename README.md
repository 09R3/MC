# MC

A web site for the things I've made — a simple dark-green landing page
listing public projects and web apps.

## Structure

- `index.html` — page markup
- `css/style.css` — styling (colors/fonts live in the `:root` variables at the top)
- `js/data.js` — edit this to add/remove projects and web apps
- `js/script.js` — renders the cards from `data.js`, no build step needed
- `photos/` — drop images here and reference them from `data.js` (e.g. `image: "photos/thing.jpg"`)

## Adding a project or app

Open `js/data.js` and add an entry to the `PROJECTS` or `WEB_APPS` array:

```js
{
  title: "Project Name",
  description: "One or two sentences about what this is.",
  tags: ["Python", "CLI"],
  image: "photos/project-name.jpg", // optional
  link: "https://github.com/you/project-name", // optional
}
```

## Running locally

No build tools required — just serve the folder:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
