<script>
import Depos from "../depoimentos/Depos.svelte";

let depos = [
	{id: 1, src: "img/depoimentos/diogo.jpg", titulo: "depo 1",
	depo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
    {id: 2, src: "img/depoimentos/gabriela_duarte.jpg", titulo: "depo 2"},
    {id: 3, src: "img/depoimentos/malu.jpg", titulo: "depo 3"},
    {id: 4, src: "img/depoimentos/maria_eduarda.jpg", titulo: "depo 4"},
    {id: 5, src: "img/depoimentos/marisales.jpg", titulo: "depo 5"},
    {id: 6, src: "img/depoimentos/nanda_sial.jpg", titulo: "depo 6"},
    {id: 7, src: "img/depoimentos/renatinha.jpg", titulo: "depo 7"},
    {id: 8, src: "img/depoimentos/viviane.jpg", titulo: "depo 8"}
];

let deposActive = [];

</script>

<section>
    <div class="container jumbotron">
        <h2 class="text-center">Depoimentos</h2>
        <div class="row">
        {#each depos as { id, src, titulo }, i}
            <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                <a href="/" on:click={()=> {deposActive = depos[i]}} data-toggle="modal" data-target=".bd-example-modal-xl"><img class="d-block mx-auto img" src="{src}" alt="img {id}"></a>
            </div>
        {/each}
        </div>
    </div>
</section>


<!-- Extra large modal -->
	<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl" role="document">
		<div class="modal-header">
			<a href="/portfolio" class="text-right" data-dismiss="modal"><span>x</span></a>
      	</div>
        <div class="modal-content">
        <Depos titulo={deposActive.titulo} depo={deposActive.depo} src={deposActive.src}/>
        </div>
	</div>
	</div>



<style>
    .img{
        max-width: 70%;
        border-radius: 50%;
        border: 2px solid rgb(63, 63, 63);
        margin: 1rem auto;
        padding: 0;
        transition: all 1200ms;
    }
    .img:hover{
        transform: scale(1.1);
        transition: all 600ms;
    }
    section{
        background-color: rgb(255, 255, 255, 0.8);
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
		background: white;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border: 0px;
		padding: 0px;
	}
	.modal-content{
		border: none;
	}
	span{
		position: absolute;
		top: 0; right: 1rem;
		transition: 0.2s all;
		font-size: 3rem;
		font-weight: 700;
		opacity: .8;
	}
	span:hover{
		transform: scale(1.05);
		transition: .4s all;
	}

	@media (max-width: 575.98px) {
		.modal-header span{
			font-size: 2.5rem;
		}
		.modal-dialog{
			padding: 0;
		}
		.img{
			margin: 0.5rem 0px;
			max-width: 80%;
		}
	}
	@media (min-width: 767.98px) {
        .modal-dialog{
            max-width: 85%;
        }
    }
</style>	