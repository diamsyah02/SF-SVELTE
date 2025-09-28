<script>
	export const prerender = true;
	
	import { onMount } from 'svelte';
	import { initScreenWatcher } from '@/lib/hooks/useScreen.js';
	import '@/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import ResponsiveWrapper from '@/lib/components/ResponsiveWrapper.svelte';
	import HeaderDesktop from '@/lib/components/custom/HeaderDesktop.svelte';
	import HeaderMobile from '@/lib/components/custom/HeaderMobile.svelte';
	import HeaderTablet from '@/lib/components/custom/HeaderTablet.svelte';
	import FooterDesktop from '@/lib/components/custom/FooterDesktop.svelte';
	import FooterTablet from '@/lib/components/custom/FooterTablet.svelte';
	import FooterMobile from '@/lib/components/custom/FooterMobile.svelte';

	
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
	<div class="mt-20"></div>
</ResponsiveWrapper>
<ResponsiveWrapper show="tablet">
	<HeaderTablet />
	<div class="mt-44"></div>
</ResponsiveWrapper>
<ResponsiveWrapper show="mobile">
	<HeaderMobile />
	<div class="mt-36"></div>
</ResponsiveWrapper>
{@render children?.()}
<ResponsiveWrapper show="desktop">
    <FooterDesktop />
</ResponsiveWrapper>
<ResponsiveWrapper show="tablet">
    <FooterTablet />
</ResponsiveWrapper>
<ResponsiveWrapper show="mobile">
    <FooterMobile />
</ResponsiveWrapper>

