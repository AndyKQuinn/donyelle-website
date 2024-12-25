# Pocketbase with SvelteKit

## Develop

Serve pocketbase:

```sh
./pocketbase serve
```

Copy `.env.example` to `.env` and update values accordingly.
Install dependencies:

```sh
npm install
```

Serve the client:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
