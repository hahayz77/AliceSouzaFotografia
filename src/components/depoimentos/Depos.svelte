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
            <h2 class="col-12 my-3 text-center">{titulo}</h2>
            <div class="col-12 justify-content-center">
                <p class="col-lg-6 col-md-8 col-sm-9 my-3 mx-auto text-justify">{depo}</p>
            </div>
                
        </div>

    </section>
</main>




<style>
    img{
        border-radius: 50%;
        border: 2px solid rgba(247, 187, 202, 0.9);
        max-height: 300px;
    }
</style>