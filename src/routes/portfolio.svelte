<script>
	import Instagram from "../components/home/Instagram.svelte";
	import ToContato from "../components/home/ToContato.svelte";
	import { fade } from 'svelte/transition';
	import ToBehance from "../components/portfolio/ToBehance.svelte";

	let imgs = [
		{id: 1, src: "img/pp.jpg", link: "/portfolio", alt: "img1", descrição: "Imagem 1", titulo: "Imagem 1", hover: false, modal: ["img/pp.jpg"]},
		{id: 2, src: "img/pp.jpg", link: "/portfolio", alt: "img2", descrição: "Imagem 2", titulo: "Imagem 2", hover: false, modal: ["img/pp.jpg","img/pp.jpg"]},
		{id: 3, src: "img/pp.jpg", link: "/portfolio", alt: "img3", descrição: "Imagem 3", titulo: "Imagem 3", hover: false, modal: ["img/pp.jpg","img/pp.jpg","img/pp.jpg"]},
		{id: 4, src: "img/pp.jpg", link: "/portfolio", alt: "img4", descrição: "Imagem 4", titulo: "Imagem 4", hover: false, modal: ["img/pp.jpg","img/pp.jpg","img/pp.jpg","img/pp.jpg"]},
		{id: 5, src: "img/pp.jpg", link: "/portfolio", alt: "img5", descrição: "Imagem 5", titulo: "Imagem 5", hover: false, modal: ["img/pp.jpg","img/pp.jpg","img/pp.jpg","img/pp.jpg"]},
		{id: 6, src: "img/pp.jpg", link: "/portfolio", alt: "img6", descrição: "Imagem 6", titulo: "Imagem 6", hover: false, modal: ["img/pp.jpg","img/pp.jpg","img/pp.jpg","img/pp.jpg","img/pp.jpg"]}
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
	<title>portfolio</title>
</svelte:head>

<main class="bg-white">
	<div class="container jumbotron">
		<div class="row">
			{#each imgs as { id, src, name, link, descrição, titulo, hover, alt }, i}
					<a href="{link}" class="col-md-6 px-3 mb-4 overflow-hidden" on:mouseenter={() => {hover = !hover}} on:mouseleave={() => {hover = !hover}} on:click={modalclick(imgs[i])} data-toggle="modal" data-target=".bd-example-modal-xl">
						<img src="{src}" alt="{alt}">
						{#if hover == false}
						<div class="d-none"></div>
						{:else}
						<div class="descr px-3" in:fade="{{ y: 200, duration: 600 }}" out:fade="{{ y: 200, duration: 200 }}">
							<div class="back d-flex align-items-center">
								<div class="col">
									<h2>{titulo}</h2>
									<p>{descrição}</p>
								</div>
							</div>
						</div>
						{/if}
					</a>		
			{/each}
		</div>
	</div>

</main>

<!-- Extra large modal -->
	<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl" role="document">
		<div class="modal-header">
			<h2 class="modal-title" id="exampleModalCenterTitle">{modalTittle}</h2>
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
		height: 100%;
	}
	.back{
		position: relative;
		bottom: 0;
		height: 100%;
		width: 100%;
		background: rgba(243, 211, 219, 0.9);
		text-align: center;
	}
	.modal img{
		height: 600px;
		width: 100%;
		object-fit: cover;
	}
	.modal{
		padding: 0;
		margin: 0;
		/* background: rgba(243, 211, 219, 0.9); */
	}
	.modal-dialog{
		padding: 2rem;
		padding-top: 0;
		margin: 0 auto;
		pointer-events: auto;
	}
	.modal-header{
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 1;
		background: rgba(243, 211, 219);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	.modal h2{
		color: rgb(92, 49, 84);
		font-size: 2rem;
		vertical-align: middle;
	}
	.modal-content{
		border: none;
	}
	span{
		position: absolute;
		top: 0; right: 1rem;
		transition: 0.2s all;
		color: rgb(92, 49, 84);
		font-size: 3rem;
		font-weight: 700;
		opacity: .8;
	}
	span:hover{
		transform: scale(1.05);
		transition: .4s all;
	}


@media (max-width: 575.98px) { 
		h2{
			font-size: 2rem;
		}
		img{
			height: 200px;
		}
	}


</style>