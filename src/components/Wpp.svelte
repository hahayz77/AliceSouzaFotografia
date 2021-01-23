<script>
    export let segment;

</script>

{#if segment !== "contato"}
<a id="wppbuttom" href="/contato" class="float"> <i id="wpp" class="fa fa fa-whatsapp my-float" /></a>
{/if}
 

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
