<script>
export let titulo = '';
export let depo = '';

</script>

<main class="bg-white">
    <section class="container jumbotron">
        <div class="row">
            <div class="col-12">
                <img class="d-block mx-auto" src="img/pp.jpg" alt="perfil">
            </div>
            <span id="titulo" class="col-12 my-3 text-center">{titulo}</span>
            <div class="col-12 justify-content-center">
                <p id="depo" class="col-12 col-sm-11 col-md-10 col-lg-9 my-3 mx-auto text-justify">{depo}</p>
            </div>
        </div>

    </section>
</main>




<style>
    img{
        border-radius: 50%;
        border: 2px solid rgba(247, 187, 202, 0.9);
        max-height: 300px;
        max-width: 80%;
    }
    #titulo{
        font-size: 1.8rem;
    }
    #depo{
        font-size: 18px;
    }
    @media (max-width: 575.98px) {
        #titulo{
            font-size: 1.6rem;
        }
        #depo{
            font-size: 1rem;
        }
    }
</style>