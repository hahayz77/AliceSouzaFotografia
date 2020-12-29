<script>
import Depos from "../depoimentos/Depos.svelte";

let depos = [
	{id: 1, src: "img/depoimentos/diogo.jpg", titulo: "Diogo",
		depo: "Você é mais do que uma fotógrafa... És uma artista! Estamos simplesmente encantados com o resultado surpreendete! Muito Obrigado."},
    {id: 2, src: "img/depoimentos/gabriela_duarte.jpg", titulo: "Gabriela Duarte",
		depo: "Parabéns pela sensibilidade de captar momentos tão simples e ao mesmo tempo tão preciosos, @alicedesouzafotografia!"},
	{id: 3, src: "img/depoimentos/malu.jpg", titulo: "Malu", 
		depo:"Alice meu amor, boa noite! Desculpa o horário mas é que recebi as fotos hoje e só tive tempo de olhar agora. Elas estão as coisas mais lindas do mundo! Superaram totalmente minha expectativa. Cada detalhe e cada sorriso deixaram o ensaio mais lindo ainda. Obrigada pela atenção e dedicação. Você realmente tem esse dom e que dom maravilhoso. Estou apaixonada pelas fotos!"},
	{id: 4, src: "img/depoimentos/maria_eduarda.jpg", titulo: "Maria Eduarda",
		depo: "Escolhi o trabalho de Alice, para registrar importantes momentos da minha família e crescimento da minha filha, porque ela tem uma sensibilidade fora do comum. Sua fotografia é honestamente linda e, casa expressão capturada, remete ao sentimento que permeou o momento da foto. Mais do que a beleza técnica fotográfica, seu conteúdo é artístico e impregnado de verdade."},
	{id: 5, src: "img/depoimentos/marisales.jpg", titulo: "Mari Sales",
		depo:"Emocionada de verdade. Seu olhar é lindo! Muito obrigada."},
	{id: 6, src: "img/depoimentos/nanda_sial.jpg", titulo: "Fernanda Sial",
		depo:"Não tinha como pensar em outra pessoa para nos fotografar no dia do casamento! A verdade é essa. No ensaio pré casamento sugerimos um lugar que significava muito para nós, mas que seria necessário fazer trilha e acampar... Alice não pensou duas vezes e embarcou conosco mesmo nunca tendo acampado na vida! O resultado foram fotos que expressam sentimentos por si só!"},
    {id: 7, src: "img/depoimentos/renatinha.jpg", titulo: "Renatinha",
		depo: "Alice conseguiu capturar minha alma. Foi uma injeção de auto estima para mim, o resultado foi nítido nas fotos. Um ensaio que ficou tão lindo parecendo uma poesia. Já fiz vários tipos de ensaio com ela, e SEMPRE ela consegue me surpreender, com seu olhar, edição, tudo! Alice é uma artista.❤️"},
	{id: 8, src: "img/depoimentos/viviane.jpg", titulo: "Viviane", 
		depo:"Alice, não me canso de te parabenizar pelo excelente trabalho. Incrível como as fotos por si, retratam toda a emoção que lá sentimos!!! Resultado de quem faz com amor! Tu és impar! "}
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