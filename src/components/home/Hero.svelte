<section id="hero" class="container-fluid bg-grad">
    <a href="portfolio">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-interval="5000" data-ride="carousel" data-pause="false">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="img/hero/hero1.jpg" class="w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Festas Infantis</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/hero/hero2.jpg" class="w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Ensaios Femininos</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/hero/hero3.jpg" class="w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Sweet Home</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/hero/hero4.jpg" class="w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Pré-wedding</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/hero/hero5.jpg" class="w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Casamentos</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/hero/hero6.jpg" class="w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Espetáculos</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="img/hero/hero7.jpg" class="w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Eventos Culturais</h5>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </a>
</section>

<style>
    h5{
        font-size: 4rem;
        color: white;
    }
    #hero {
        display: table;
        width: 100%;
        height: 90vh;
        background: #000;
        }
    img{
        -webkit-mask-image: linear-gradient(to top, transparent, #cecece 25%);
        mask-image: linear-gradient(to top, transparent, #cecece 25%);
        height: 90vh;
        object-fit: cover;
    }
    @keyframes heroanimateframes {
        0% {
            transform: scale(1,1);
        }
        100% {
            transform: scale(1.2,1.2);
        }
    }

    .carousel-item img {
        animation: heroanimateframes 30s infinite ;
    }
</style>