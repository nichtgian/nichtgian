# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

Install or upgrade deno with `npm install -g deno` / `deno upgrade`

```bash
# create a new project in the current directory
deno run -A npm:sv@latest create
```

## Developing

Once you've created a project and installed dependencies with `deno install`, start a development server:

```bash
deno task dev --open
```

Based on the Deno [linting and formatting](https://docs.deno.com/runtime/fundamentals/linting_and_formatting/) guide use `deno fmt` instead of Prettier for automatic code formatting to adhere to a consistent style and use `deno lint` instead of ESLint for linting by analyzing code for potential errors, bugs, and stylistic issues.

## Building

To create a production version of your app:

```bash
deno task build
```

You can preview the production build with `deno task preview` and run a production server with `deno run -REN build/index.js`.

> Setup based on the [deno-sveltkit](https://github.com/cotyhamilton/deno-sveltekit) demo.
