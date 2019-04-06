# Single Page Application Template with Vue.js / Vuex / Vue-Router 

This is a template for a single page application using vue, vuex & vue-router. Routes are defined in 
`./src/web/_routes.js` and the global state management is defined in `./src/web/_store.js` 

### Installation

- `npm i -g parcel-bundler`
- `npm install`
- `npm run dev`

### Project layout

- Source code is located in `./src/`
    - web app source code is located in `./src/web/`

- Distributable artifacts are generated in `./dist/`
    - web app artifacts are generated in `./dist/web/`

### Developing

#### Add new page/route

1. Create a new `.vue` file (preferably in `./src/web/vues/`)
1. Edit `./src/web/_router.js`
    1. Add an `import` statement for the new file (ex `import newpage from ./src/web/newpage.vue`)
    1. Add a route for the new file (ex `{ path: '/newpage', component: newpage }`)

