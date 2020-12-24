<script>
export let titulo = '';
export let depo = '';
export let src = '';

</script>

<main class="bg-white">
    <section class="container jumbotron">
        <div class="row">
            <div class="col-12">
                <img class="d-block mx-auto" src={src} alt="perfil">
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
        border: 2px solid rgb(63, 63, 63);
        max-height: 300px;
        max-width: 80%;
    }
    #titulo{
        font-size: 30px;
        font-family: 'Indie Flower', cursive;
    }
    #depo{
        font-size: 24px;
        font-family: 'Indie Flower', cursive;
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