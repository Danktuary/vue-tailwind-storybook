# Vue 3 + Tailwind + Storybook

This template should help get you started developing with Vue 3, Tailwind, and Storybook in Vite.

## Notes

- This is a barebones template.
- Tailwind, PostCSS, and autoprefixer are installed as `tailwind@npm:@tailwindcss/postcss7-compat`, `postcss@^7`, and `autoprefixer@^9` due to PostCSS v8 incompadability with Storybook. [See here](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build).
- ESLint isn't set up (yet).
- Using `storybook@6.3.0-beta.4` because v6.3.x supports bundling with Vite, but no official plugin yet. However, there is an [experimental community plugin](https://github.com/eirslett/storybook-builder-vite).

### Useful links

**Vite/Vue**:
- https://vitejs.dev/guide/#scaffolding-your-first-vite-project
- https://vitejs.dev/guide/features.html
- https://vitejs.dev/config/
- https://v3.vuejs.org/guide/composition-api-setup.html
- https://github.com/vuejs/rfcs/pull/227
- https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

**Tailwind**:
- https://tailwindcss.com/docs/editor-support
- https://tailwindcss.com/docs/guides/vue-3-vite
- https://tailwindcss.com/docs/configuration
- https://tailwindcss.com/docs/using-with-preprocessors
- https://tailwindcss.com/docs/optimizing-for-production

**Storybook**:
- https://storybook.js.org/docs/vue/get-started/install
- https://storybook.js.org/docs/vue/writing-stories/introduction
- https://storybook.js.org/docs/vue/configure/overview
- https://storybook.js.org/docs/vue/essentials/controls
- https://storybook.js.org/docs/vue/workflows/storybook-composition

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
