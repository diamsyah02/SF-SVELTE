<script>
    import ResponsiveWrapper from '@/lib/components/ResponsiveWrapper.svelte';
	import FooterDesktop from '@/lib/components/custom/footer/FooterDesktop.svelte';
	import FooterTablet from '@/lib/components/custom/footer/FooterTablet.svelte';
	import FooterMobile from '@/lib/components/custom/footer/FooterMobile.svelte';
</script>

<ResponsiveWrapper show="desktop">
    <FooterDesktop />
</ResponsiveWrapper>
<ResponsiveWrapper show="tablet">
    <FooterTablet />
</ResponsiveWrapper>
<ResponsiveWrapper show="mobile">
    <FooterMobile />
</ResponsiveWrapper>