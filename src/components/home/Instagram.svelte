<script>
let links = [
    {src: "img/instagram/01.jpg", link: "https://www.instagram.com/p/CEDQjRGngm-/", alt: "Joyce Cavalcante"},
    {src: "img/instagram/02.jpg", link: "https://www.instagram.com/p/B1WZf2gnsxY/", alt: "Casamento"},
    {src: "img/instagram/03.jpg", link: "https://www.instagram.com/p/CC3vFmIHGAh/", alt: "Fernanda Sial"},
    {src: "img/instagram/04.jpg", link: "https://www.instagram.com/p/BiexOqSlMnB/", alt: "Ensaio Casal"},
    {src: "img/instagram/05.jpg", link: "https://www.instagram.com/p/B0BbmduHezZ/", alt: "Infantil"},
    {src: "img/instagram/06.jpg", link: "https://www.instagram.com/p/CEiFlUHHr1S/", alt: "Karol Paes"}
];

let linkinsta = "https://www.instagram.com/alicesouzafotografia/";            
</script>

<main class="bg-white">
    <section class="container-fluid overflow-hidden">
        <div class="row">
            <h2 class="col-12 my-5 text-center"><a target="_blank" href="{linkinsta}">@alicesouzafotografia</a></h2>
        </div>
        <div class="row overflow-hidden d-flex flex-wrap">
                {#each links as { src, link, alt }, i}
                        <a target="_blank" href="{link}" class="col-lg-2 col-md-2 col-sm-4 col-6 px-0"><img src="{src}" alt="{alt}"></a>
                {/each}
        </div>

    </section>
</main>

<style>
    img{
        margin: 0;
        object-fit: cover;
        transition: all 1200ms;
        max-height: 40vh;
        width: 100%;
    }
    img:hover{
        transition: all 800ms;
        transform: scale(1.05);
        z-index: 1;
    }

    @media (max-width: 575.98px) { 
		h2{
			font-size: 1.5rem;
		}
	}

</style>