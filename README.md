# sveltekit-tailwindcss-netlifycms-typescript starter

## Developing

Once you've created a project and installed dependencies with `npm install` (or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

> _generally I would suggest `pnpm` for dependencies and jobs but Netlify seems to bomb on deploys for `pnpm` so stick with `npm` or `yarn`. If you know of a way around this feel free to reach out to me or submit a PR and I'll work that in!_

You can also run the backend locally for development purposes by running `npm run proxy` but you will need to have set up your site on Netlify so that

## Deploying to Netlify

Once you've set up your project on Netlify you'll need to add a few things from the included `.env.local` that you edited prior to this, follow directions [here](https://docs.netlify.com/configure-builds/environment-variables/)
