<script>
let linkwpp;

function wppLink(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    linkwpp = 'https://wa.me/5581987702248?text=Olá!+Gostaria+de+saber+mais+sobre+os+pacotes!';
    window.open(linkwpp, "_blank");
  }
  else{
    linkwpp = 'https://web.whatsapp.com/send?phone=5581987702248&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+pacotes%21&source&data&app_absent';
    window.open(linkwpp, "_blank");
    }

}

</script>

<main class="overflow-hide">
    <footer class="container jumbotron">
        <div class="row d-flex justify-content-center my-3">
                <a href={"#"} class="instagram"><i class="fa fa-3x fa-instagram"></i></a>
                <a href={"#"} class="linkedin"><i class="fa fa-3x fa-pinterest"></i></a>                
                <a href={"#"} class="linkedin"><i class="fa fa-3x fa-behance"></i></a>
                <a href={"#"} class="whatsapp" on:click={wppLink}><i class="fa fa-3x fa-whatsapp"></i></a>
        </div>
        <div class="row d-flex justify-content-center">
            <p class="text-center"><a href="/">Home</a> | <a href="/sobre">Sobre</a> | <a href="/portfolio">Portfólio</a> | <a href="/contato">Contato</a>
        </div>
        <div class="row d-flex justify-content-center">
            <p class="text-center">Todos os Direitos Reservados à Alice De Souza Fotografia</p>
        </div>
    </footer>
</main>

<style>
    i{
        margin: auto 1rem;
    }
    main{
        background-color: rgba(243, 211, 219, 0.8);
    }
    @media (max-width: 575.98px) { 
		.fa-3x{
			font-size: 2.5rem;
		}
	}
</style>