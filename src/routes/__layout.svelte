<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path
    }
  })
</script>

<script>
  import Transition from '@components/Transition.svelte'
  import Header from '@components/Header.svelte'
  import Footer from '@components/Footer.svelte'
  import '../app.postcss'

  export let key
</script>

<svelte:head>
  <title>{import.meta.env.VITE_TITLE}</title>
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="{import.meta.env.VITE_THEME_COLOR}" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="{import.meta.env.VITE_THEME_COLOR}" />
  <meta name="msapplication-TileColor" content="{import.meta.env.VITE_THEME_COLOR}" />
  <meta name="msapplication-navbutton-color" content="{import.meta.env.VITE_THEME_COLOR}" />
  <meta name="apple-mobile-web-app-status-bar-style" content="{import.meta.env.VITE_THEME_COLOR}" />
</svelte:head>

<Header />
<main>
  <Transition refresh={key}>
  <slot />
  </Transition>
</main>
<Footer />
