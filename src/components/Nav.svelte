<script>
	export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-trans">
	<a id="extraBrand" class="navbar-brand col-lg-2" href="."><img src="img/logo.png" alt=""></a>
	<button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
		<ul class="navbar-nav col-lg-12 px-0 justify-content-end">
			<li class="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo01"><a class="nav-link mx-3" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
			<li class="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo01"><a class="nav-link mx-3" aria-current="{segment === 'sobre' ? 'page' : undefined}" href="sobre">Sobre</a></li>
			<li class="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo01"><a class="nav-link mx-3" aria-current="{segment === 'portfolio' ? 'page' : undefined}" href="portfolio">Portfólio</a></li>
			<li class="nav-item" data-toggle="collapse" data-target="#navbarTogglerDemo01"><a class="nav-link mx-3" aria-current="{segment === 'contato' ? 'page' : undefined}" href="contato">Contato</a></li>
		</ul>
	</div>
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

	@media (max-width: 768px) { 
		#extraBrand{
			position: absolute;
			top: 0;
			left: 0;
			text-align: left;
			margin-top: 0.5rem;
		}
		.navbar-toggler{
			z-index: 99;
		}
		.navbar-light .navbar-toggler{
			border-color: rgba(0,0,0,0);
		}
	}
	
</style>