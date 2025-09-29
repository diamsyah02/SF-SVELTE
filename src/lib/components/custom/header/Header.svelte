<script>
    import { onMount } from 'svelte';
    import { initScreenWatcher } from '@/lib/hooks/useScreen.js';
    import ResponsiveWrapper from '@/lib/components/ResponsiveWrapper.svelte';
    import HeaderDesktop from './HeaderDesktop.svelte';
    import HeaderTablet from './HeaderTablet.svelte';
    import HeaderMobile from './HeaderMobile.svelte';

	onMount(() => {
		const stop = initScreenWatcher();
	
		return stop;
	});
</script>
<ResponsiveWrapper show="desktop">
	<HeaderDesktop />
	<div class="mt-20"></div>
</ResponsiveWrapper>
<ResponsiveWrapper show="tablet">
	<HeaderTablet />
	<div class="mt-28"></div>
</ResponsiveWrapper>
<ResponsiveWrapper show="mobile">
	<HeaderMobile />
	<div class="mt-16"></div>
</ResponsiveWrapper>