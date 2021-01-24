<script>
	import Instagram from "../components/home/Instagram.svelte";
	import ToContato from "../components/home/ToContato.svelte";
	import ToBehance from "../components/portfolio/ToBehance.svelte";

	let imgs = [
		{id: 1, src: "img/portifolio/infantil/01.jpg", link: "/portfolio", alt: "Infaltis", descrição: "Evenventos Infantis", titulo: "Infantis", hover: false, modal: [
			"img/portifolio/infantil/01.jpg", "img/portifolio/infantil/02.jpg", "img/portifolio/infantil/03.jpg", "img/portifolio/infantil/04.jpg", 
			"img/portifolio/infantil/05.jpg", "img/portifolio/infantil/06.jpg", "img/portifolio/infantil/07.jpg", "img/portifolio/infantil/08.jpg", 
			"img/portifolio/infantil/09.jpg", "img/portifolio/infantil/10.jpg", "img/portifolio/infantil/11.jpg", "img/portifolio/infantil/12.jpg",
			"img/portifolio/infantil/13.jpg", "img/portifolio/infantil/14.jpg", "img/portifolio/infantil/15.jpg", "img/portifolio/infantil/16.jpg",
			"img/portifolio/infantil/17.jpg", "img/portifolio/infantil/18.jpg", "img/portifolio/infantil/19.jpg", "img/portifolio/infantil/20.jpg"]},
		{id: 2, src: "img/portifolio/feminino/07.jpg", link: "/portfolio", alt: "Femininos", descrição: "Ensaios Femininos", titulo: "Femininos", hover: false, modal: [
			"img/portifolio/feminino/01.jpg", "img/portifolio/feminino/02.jpg", "img/portifolio/feminino/03.jpg", "img/portifolio/feminino/04.jpg",
			"img/portifolio/feminino/05.jpg", "img/portifolio/feminino/06.jpg", "img/portifolio/feminino/07.jpg", "img/portifolio/feminino/08.jpg",
			"img/portifolio/feminino/09.jpg", "img/portifolio/feminino/10.jpg", "img/portifolio/feminino/11.jpg", "img/portifolio/feminino/12.jpg",
			"img/portifolio/feminino/13.jpg"]},
		{id: 3, src: "img/portifolio/prewedding/06.jpg", link: "/portfolio", alt: "Pre-Wedding", descrição: "Pre-Wedding", titulo: "Pre-Wedding", hover: false, modal: [
			"img/portifolio/prewedding/01.jpg", "img/portifolio/prewedding/02.jpg", "img/portifolio/prewedding/03.jpg", "img/portifolio/prewedding/04.jpg",
			"img/portifolio/prewedding/05.jpg", "img/portifolio/prewedding/06.jpg"]},
		{id: 4, src: "img/portifolio/wedding/03.jpg", link: "/portfolio", alt: "Wedding", descrição: "Wedding", titulo: "Wedding", hover: false, modal: [
			"img/portifolio/wedding/01.jpg", "img/portifolio/wedding/02.jpg", "img/portifolio/wedding/03.jpg", "img/portifolio/wedding/04.jpg",
			"img/portifolio/wedding/05.jpg", "img/portifolio/wedding/06.jpg", "img/portifolio/wedding/07.jpg", "img/portifolio/wedding/08.jpg",
			"img/portifolio/wedding/09.jpg", "img/portifolio/wedding/10.jpg", "img/portifolio/wedding/11.jpg"]},
		{id: 5, src: "img/portifolio/culturais/04.jpg", link: "/portfolio", alt: "Espetáculos", descrição: "Eventos Culturais", titulo: "Espetáculos", hover: false, modal: [
			"img/portifolio/culturais/01.jpg", "img/portifolio/culturais/02.jpg", "img/portifolio/culturais/03.jpg", "img/portifolio/culturais/04.jpg",
			"img/portifolio/culturais/05.jpg", "img/portifolio/culturais/06.jpg", "img/portifolio/culturais/07.jpg", "img/portifolio/culturais/08.jpg",
			"img/portifolio/culturais/09.jpg", "img/portifolio/culturais/10.jpg", "img/portifolio/culturais/11.jpg", "img/portifolio/culturais/12.jpg",
			"img/portifolio/culturais/13.jpg", "img/portifolio/culturais/14.jpg", "img/portifolio/culturais/15.jpg", "img/portifolio/culturais/06.jpg",
			"img/portifolio/culturais/17.jpg", "img/portifolio/culturais/18.jpg", "img/portifolio/culturais/19.jpg", "img/portifolio/culturais/20.jpg"]},
		{id: 6, src: "img/portifolio/sweethome/01.jpg", link: "/portfolio", alt: "Sweet Home", descrição: "Sweet Home", titulo: "Sweet Home", hover: false, modal: [
			"img/portifolio/sweethome/01.jpg", "img/portifolio/sweethome/02.jpg", "img/portifolio/sweethome/03.jpg", "img/portifolio/sweethome/04.jpg",
			"img/portifolio/sweethome/05.jpg", "img/portifolio/sweethome/06.jpg", "img/portifolio/sweethome/07.jpg", "img/portifolio/sweethome/08.jpg",
			"img/portifolio/sweethome/09.jpg", "img/portifolio/sweethome/10.jpg"]}
		
		];

	let modal = [];
	let modalTittle = {};
	let show = 0;	

	function modalclick (id){
		modal = id.modal;
		modalTittle = id.titulo;
	}

</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<main class="bg-white">
	<div class="container jumbotron">
		<div class="row">
			{#each imgs as { id, src, name, link, descrição, titulo, hover, alt }, i}
					<a href="{link}" class="col-md-6 px-3 mb-4 overflow-hidden" on:mouseenter={() => {hover = true}} on:mouseleave={() => {hover = false}} on:click={modalclick(imgs[i])} data-toggle="modal" data-target=".bd-example-modal-xl">
						<img src="{src}" alt="{alt}">
						<div class="descr px-3">
							<div class="back d-flex align-items-center">
								<div class="col">
									<h2 class="titulo">{titulo}</h2>
								</div>
							</div>
						</div>
					</a>		
			{/each}
		</div>
	</div>
</main>

<!-- Extra large modal -->
	<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-header">
				<!-- <input type="button" value="x" class="text-right" data-dismiss="modal"> -->
				<a href="/portfolio" class="text-right" data-dismiss="modal"><span>x</span></a>
			</div>
			<div class="modal-content">
				{#each modal as modals, i}
				<img src="{modals}" alt="imagem{i}">
				{/each}
			</div>
		</div>
	</div>

<ToBehance />

<ToContato />

<Instagram />

<style>
	img{
		height: 400px;
		width: 100%;
		object-fit: cover;
	}
	.descr{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 25%;
		transition: ease-in-out 0.3s;
	}
	.descr h2{
		font-size: 2.5rem;
		margin-top: 1rem;
		line-height: 1;
		color: white;
	}
	.descr:hover{
		height: 100%;
		transition: ease-in-out 0.7s;
	}
	.back{
		position: relative;
		bottom: 0;
		height: 100%;
		width: 100%;
		background: rgb(63, 63, 63, 0.3);
		text-align: center;
	}
	.modal img{
		height: auto;
		width: 100%;
		object-fit: cover;
	}
	.modal{
		padding: 0;
		margin: 0;
		/* background: rgba(243, 211, 219, 0.9); */
	}
	.modal-dialog{
		padding-top: 0;
		margin: 0 auto;
		pointer-events: auto;
	}
	.modal-header{
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		padding: 0.8rem;
		z-index: 1;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		padding: 0px;
	}
	.modal-content{
		border: none;
	}
	.modal span{
		text-shadow: 0px 1px 4px #fff;
	}
	span{
		position: absolute;
		top: 0; right: 1rem;
		transition: 0.2s all;
		font-size: 2.5rem;
		font-weight: 700;
		opacity: .8;
	}
	span:hover{
		transform: scale(1.05);
		transition: .4s all;
	}
	.titulo{
		text-shadow: 1px 1px 20px #000;
	}

@media (max-width: 575.98px) { 
		h2{
			font-size: 2rem;
		}
		img{
			height: 200px;
		}
		.modal-dialog{
			padding: 0;
		}
		span{
			font-size: 2.3rem;
		}
		.descr{
			overflow: hidden;
			height: 28%;
		}
		.descr h2{
			font-size: 1.6rem;
			margin-top: 1rem;
			margin-bottom: 0;
			line-height: 0.5;
		}
	}
	@media (min-width: 767.98px) {
        .modal-dialog{
            max-width: 85%;
        }
    }


</style>