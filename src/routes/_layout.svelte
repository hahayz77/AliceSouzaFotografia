<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Wpp from '../components/Wpp.svelte';

	export let segment;
</script>

<style>
</style>

<Nav {segment}/>

<img class="background-image" src="" alt="">

	<slot></slot>

<Wpp {segment} />

<Footer />