<script>
	import { vars } from '@lib/vars';
	import { fetchData } from '@lib/utilities';
	import { marked } from 'marked';

	const pageName = window.location.pathname.slice(1);

	let page = {};

	const pageQuery = fetchData(vars.pagesEndpoint)
		.then((data) => {
			page = data.pages.filter((page) => page.slug === pageName)[0];

			if (page === undefined) {
				page = {
					title: vars.errorPage.title,
					seo: vars.errorPage.seo,
					body: vars.errorPage.body
				};
			}
		})
		.catch((error) => {
			console.error(error);
		});
</script>

<svelte:head>
	<title>{page.title} {vars.title}</title>
	<meta name="keywords" content={page.keywords} />
	<meta name="description" content={page.seo} />
</svelte:head>

{#await pageQuery then}
	<section class="page {page.slug}">
		<div class="container">
			<h1 class="uppercase text-3xl text-secondary">{page.title}</h1>
			<div class="content ">
				{@html marked.parse(`${page.body}`)}
			</div>
		</div>
	</section>
{/await}
