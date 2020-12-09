<script>
	export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-trans">
	<a class="navbar-brand col-lg-2" href="."><img src="img/logo.png" alt=""></a>
	<ul class="navbar-nav col-lg-10 justify-content-end">
		<li class="nav-item"><a class="nav-link mx-3" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li class="nav-item"><a class="nav-link mx-3" aria-current="{segment === 'sobre' ? 'page' : undefined}" href="sobre">Sobre</a></li>
		<li class="nav-item"><a class="nav-link mx-3" aria-current="{segment === 'portfolio' ? 'page' : undefined}" href="portfolio">Portfólio</a></li>
		<li class="nav-item"><a class="nav-link mx-3" aria-current="{segment === 'contato' ? 'page' : undefined}" href="contato">Contato</a></li>
	</ul>
</nav>


<style>
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: 80%;
		height: 1px;
		background-color: rgb(247, 187, 202);
		display: block;
	}

	nav{
		min-height: 12vh;
	}

	.navbar{
		background: none;
		font-size: 1.75rem;
		text-align: center;
	}

	img{
		max-height: 8vh;
		max-width: 100%;
	}
	.bg-trans{
		background-color: rgba(255, 255, 255, 0.8);
	}
	
</style>