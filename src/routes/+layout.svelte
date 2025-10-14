<script>
	import '@/app.css';
	import favicon from '$lib/assets/favicon.svg';
  	import Header from '@/lib/components/custom/header/Header.svelte';
    // import Footer from '@/lib/components/custom/footer/Footer.svelte';
	import Content from '@/lib/components/custom/content/Content.svelte';	
  	import MenuSidebar from '@/lib/components/custom/MenuSidebar.svelte';
	import AuthSidebar from '@/lib/components/custom/AuthSidebar.svelte';
	import { menuSidebar, authSidebar } from '@/lib/stores';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $menuSidebar}
<MenuSidebar />
{/if}
{#if $authSidebar}
<AuthSidebar />
{/if}
<Header />
<Content>
    {@render children?.()}
</Content>
<!-- <Footer /> -->
