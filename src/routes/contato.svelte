<script>
	let name = '';
	let data = '';
	let select = '1';
	let opwpp = [];
	let op2 = '';

	function linkconst(){
		if(name !== '' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			let linkwpp = `https://wa.me/5581987702248?text=Olá!+Me+chamo+${name}+e+queria+saber+mais+sobre:+${opwpp}.+Para+o+dia:+${data}&source&data&app_absent`;
			window.open(linkwpp, "_blank");
		}
		else if(name !== ''){
			let linkwpp = `https://web.whatsapp.com/send?phone=5581987702248&text=Olá!+Me+chamo+${name}+e+queria+saber+mais+sobre:+${opwpp}.+Para+o+dia:+${data}&source&data&app_absent`;
			window.open(linkwpp, "_blank");
		}
		else{
		}
	}

</script>

<svelte:head>
	<title>Contato</title>
</svelte:head>

<main class="bg-white">
	<section class="container jumbotron">
		<div class="container">
			<h1 class="text-center">Contato</h1>
			<p class="text-center">Preencha os campos abaixo para entrar em contato comigo pelo Whatsapp ou E-mail.</p>
			<div class="row text-center">
				<div class="col mt-3 mb-0">
					<ul class="mb-0 pl-0">
						<input type="radio" bind:group={select} value="1" id="i1">
						<label for="i1"><i class="fa fa-5x fa-whatsapp cselect card-header"></i></label>
						<input type="radio" bind:group={select} value="2" id="i2">
						<label for="i2"><i class="fa fa-5x fa-envelope cselect card-header"></i></label>
					</ul>	
				</div>
			</div>
			
			{#if select === "1"}
			<form>
				<div class="row card card-body">
					<div class="col-lg-6 mx-auto pb-3">
						<p class="col-form-label">Nome* <span>Campo obrigatório</span></p>
						<div class="">
							<input required={true} type="text" class="form-control" placeholder="Nome" bind:value={name}>
						</div>
						<p class="col-form-label">Data Prevista do Evento</p>
						<div class="">
							<input type="text" class="form-control" placeholder="Data" bind:value={data}>
						</div>
					</div>
					<div class="col-lg-6 mx-auto">
						<p>Gostaria de saber sobre mais sobre algo abaixo?</p>
						<div class="row">
							<div class="col-6">
								<p><input type="checkbox" bind:group={opwpp} value="+Ensaio+Domiciliar"> Ensaio Domiciliar</p>
								<p><input type="checkbox" bind:group={opwpp} value="+Eventos"> Eventos</p>
								<p><input type="checkbox" bind:group={opwpp} value="+Festa+Infantil"> Festa Infantil</p>
								<p><input type="checkbox" bind:group={opwpp} value="+Outros+Pacotes"> Outros Pacotes</p>
							</div>
							<div class="col-6">
								<p><input type="checkbox" bind:group={opwpp} value="+Foto+Livro"> Foto Livro</p>
								<p><input type="checkbox" bind:group={opwpp} value="+Pen+Drive"> Pen Drive</p>
								<p><input type="checkbox" bind:group={opwpp} value="+Impressões"> Impressões</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 mx-auto text-center">
						<button class="btn btn-spec px-5" on:click={linkconst}>Enviar</button>	
					</div>
				</div>
			</form>
			{:else}
			<form>
				<div class="row card card-body">
					<div class="col-lg-6 mx-auto">
						<p class="col-form-label">Nome* <span>Campo obrigatório</span></p>
						<input type="text" class="form-control" placeholder="Nome" bind:value={name} required={true}>
					</div>
					<div class="col-lg-6 mx-auto">
						<p class="col-form-label">E-mail* <span>Campo obrigatório</span></p>
						<input type="text" class="form-control" placeholder="E-mail" required={true}>
					</div>
					<div class="row py-3">
						<div class="col-lg-6 mx-auto text-center">
							<button class="btn btn-spec px-5">Enviar</button>	
						</div>
					</div>
				</div>
			</form>
			{/if}	
		</div>
	</section>

	<!-- ----------------------- FAQ --------------------------- -->


	<section class="container jumbotron">
		<h2 class="text-center">Perguntas Frequêntes</h2>
		<div class="accordion-1">
			<div class="container">
				<div class="row">
				<div class="col-md-12 ml-auto">
					<div class="accordion my-3" id="accordionExample">
					<div class="card">
						<div class="card-header" id="headingOne">
						<h5 class="mb-0">
							<button class="btn w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							Faz trabalhos fora de Recife?
							<i class="ni ni-bold-down float-right"></i>

							</button>
						</h5>
						</div>

						<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						<div class="card-body opacity-8">
							Sim, mas com todas as taxas de locomoção, estadia e tempo de deslocamento como adicionais aos valores convencionais.
						</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingTwo">
						<h5 class="mb-0">
							<button class="btn w-100 text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Tem ponto físico de atendimento?
							<i class="ni ni-bold-down float-right"></i>

							</button>
						</h5>
						</div>
						<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						<div class="card-body opacity-8">
							Ainda não.<br> 
							Esse é um projeto futuro que já comecei a programar. Lembrando que espaço físico de atendimento é para recebê-los, apresentar meu portfólio e desenvolver as reuniões, não será um espaço para fotografar. 
							<br>Resumindo, escritório de edição e atendimento aos clientes.

						</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingThree">
						<h5 class="mb-0">
							<button class="btn w-100 text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							Trabalha com estúdio, fornece figurino?
							<i class="ni ni-bold-down float-right"></i>

							</button>
						</h5>
						</div>
						<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						<div class="card-body opacity-8">
							Não, nenhum dos dois. <br>
							Preso pelas características dos meus clientes e gosto da leveza e peculiaridade de cada um. Meu estilo é em ambientes externos  ou domiciliares.
						</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingFour">
						<h5 class="mb-0">
							<button class="btn w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-controls="collapseFour">
							Fotolivro, faz a parte?
							<i class="ni ni-bold-down float-right"></i>
							</button>
						</h5>
						</div>

						<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
						<div class="card-body opacity-8">
							Sim! Desenvolvo o layout e  capa na temática escolhida Por você!
						</div>
						</div>
					</div>
					<div class="card">
						<div class="card-header" id="headingFifth">
						<h5 class="mb-0">
							<button class="btn w-100 text-left" type="button" data-toggle="collapse" data-target="#collapseFifth" aria-controls="collapseFifth">
							Faz newborn ?
							<i class="ni ni-bold-down float-right"></i>

							</button>
						</h5>
						</div>

						<div id="collapseFifth" class="collapse" aria-labelledby="headingFifth" data-parent="#accordionExample">
						<div class="card-body opacity-8">
							Não! trabalho com crianças de 4 meses em diante.<br>
							Deixando claro que todos os meus projetos com crianças são com a pegada mais natural, dentro dos cenários diário em que eles vivem como: Brinquedos, o próprio quarto , comida predileta…
							<br>Gosto de retratar com fidelidade suas memórias.
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
	</section>

</main>

<style>
	.card{
		background: rgba(0, 0, 0, 0.1);
	}
	input[type="radio"]{
    	visibility:hidden;
	}
	label {
		margin: auto 0.5rem;
		border: 1px solid gray;
		border-bottom: none;
		border-radius: 7px 7px 0px 0px;
		cursor: pointer;
	}

	input[type="radio"]:checked+label {
		background: rgba(0, 0, 0, 0.1);
	}
	h5{
		font-size: 1rem;
		font-family: 'Quicksand', cursive;
	}
	button:hover{
		text-decoration: none;
	}
	 button:focus{
		 text-decoration: none;
	 }
	span{
		font-size: 12px;
	}
	.btn-spec{
		font-size: 20px;
        border-radius: 30px;
        background: rgb(63, 63, 63, 0.1);
        transition: all 1000ms;
    }
    .btn-spec:hover{
        background: rgb(63, 63, 63, 0.3);
        transform: scale(1.05);
        transition: all 600ms;
    }
	@media (max-width: 575.98px) { 
		h1{
			font-size: 3rem;
		}
		h2{
			font-size: 2.3rem;
		}
		p{
			font-size: 1rem;
		}
		.fa-5x{
			font-size: 3rem;
		}
	}

</style>