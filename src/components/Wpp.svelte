<script>
  let linkwpp;

function wppLink(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    linkwpp = 'https://wa.me/5581987702248?text=Olá!+Gostaria+de+saber+mais+sobre+os+seu+serviço!';
    window.open(linkwpp, "_blank");
  }
  else{
    linkwpp = 'https://web.whatsapp.com/send?phone=5581987702248&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+seus+serviços%21&source&data&app_absent';
    window.open(linkwpp, "_blank");
    }
}


</script>



<a id="wppbuttom" href={'#'} class="float" on:click={wppLink}> <i id="wpp" class="fa fa fa-whatsapp my-float" /></a>
 

<style>

    #wpp{
      color: white;
    }
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
  }

  .my-float {
    margin-top: 16px;
  }
</style>
