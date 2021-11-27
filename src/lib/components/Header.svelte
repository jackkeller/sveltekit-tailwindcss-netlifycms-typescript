<script>
	import { vars } from '@lib/vars';
	import { fetchData } from '@lib/utilities';
	export let menuToggle = false;

	const toggleMenu = () => {
		menuToggle = !menuToggle;
	};

	let pages = [];

	const pageQuery = fetchData(vars.pagesEndpoint).then((data) => {
		pages = data.pages.filter((page) => page.enabled === true);
	});

  pageQuery()
</script>

<header>
	<div class="container">
		<div class="logo">
			<a href="/">{import.meta.env.VITE_TITLE}</a>
		</div>
		<nav id="navigation" role="navigation" aria-expanded={menuToggle}>
			<div id="menu-toggle" on:click={toggleMenu}>
				<div class="menu" />
			</div>
			<ul>
				<li>
					<div class="menu" on:click={toggleMenu}>&times;</div>
				</li>
				<li>
					<a class="sm:hidden" href="/" on:click={toggleMenu} aria-label="Home">Home</a>
				</li>
				{#each pages as page}
					<li>
						<a href={page.slug} on:click={toggleMenu} aria-label={page.title}>{page.slug}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
