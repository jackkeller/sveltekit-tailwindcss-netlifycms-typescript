export const vars = {
  title: import.meta.env.VITE_TITLE,
  author: import.meta.env.VITE_AUTHOR,
  pagesEndpoint: import.meta.env.VITE_PUBLIC_BASE_PATH + '/data/pages.json',
  errorPage: {
    title: '404 / Not Found',
    seo: 'Sadly, this page cannot be found. Have a fruit rollup perhaps?',
    body: `## Well, this is embarrassing, head back to the [home page](${
      import.meta.env.VITE_PUBLIC_BASE_PATH
    }/) to give it another whirl.`
  }
}
