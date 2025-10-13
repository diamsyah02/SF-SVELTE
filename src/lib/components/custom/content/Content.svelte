<script>
    import ResponsiveWrapper from '@/lib/components/ResponsiveWrapper.svelte';
	import ContentDesktop from '@/lib/components/custom/content/ContentDesktop.svelte';
	import ContentTablet from '@/lib/components/custom/content/ContentTablet.svelte';
	import ContentMobile from '@/lib/components/custom/content/ContentMobile.svelte';
</script>

<ResponsiveWrapper show="desktop">
    <ContentDesktop>
        <slot />
    </ContentDesktop>
</ResponsiveWrapper>
<ResponsiveWrapper show="tablet">
    <ContentTablet>
        <slot />
    </ContentTablet>
</ResponsiveWrapper>
<ResponsiveWrapper show="mobile">
    <ContentMobile>
        <slot />
    </ContentMobile>
</ResponsiveWrapper>