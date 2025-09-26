<script>
	import { onMount } from 'svelte';
	import { initScreenWatcher } from '../lib/hooks/useScreen.js';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ResponsiveWrapper from '@/components/ResponsiveWrapper.svelte';
	import HeaderDesktop from '../lib/components/custom/HeaderDesktop.svelte';
	import HeaderMobile from '../lib/components/custom/HeaderMobile.svelte';
	import HeaderTablet from '@/components/custom/HeaderTablet.svelte';
	
	let { children } = $props();
	
	onMount(() => {
		const stop = initScreenWatcher();
	
		return stop;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ResponsiveWrapper show="desktop">
	<HeaderDesktop />
</ResponsiveWrapper>
<ResponsiveWrapper show="tablet">
	<HeaderTablet />
</ResponsiveWrapper>
<ResponsiveWrapper show="mobile">
	<HeaderMobile />
</ResponsiveWrapper>
{@render children?.()}
