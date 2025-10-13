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
</ResponsiveWrapper>
<ResponsiveWrapper show="tablet">
	<HeaderTablet />
</ResponsiveWrapper>
<ResponsiveWrapper show="mobile">
	<HeaderMobile />
</ResponsiveWrapper>