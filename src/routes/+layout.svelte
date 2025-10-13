<script>
	import '@/app.css';
	import favicon from '$lib/assets/favicon.svg';
  	import Header from '@/lib/components/custom/header/Header.svelte';
    // import Footer from '@/lib/components/custom/footer/Footer.svelte';
	import Content from '@/lib/components/custom/content/Content.svelte';	
  	import AppSidebar from '@/lib/components/custom/AppSidebar.svelte';
	import { sidebar } from '@/lib/stores';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $sidebar}
<AppSidebar />
{/if}
<Header />
<Content>
    {@render children?.()}
</Content>
<!-- <Footer /> -->
