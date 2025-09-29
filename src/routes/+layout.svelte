<script>
	import '@/app.css';
	import favicon from '$lib/assets/favicon.svg';
  	import Header from '@/lib/components/custom/header/Header.svelte';
    import Footer from '@/lib/components/custom/footer/Footer.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children?.()}
<Footer />
