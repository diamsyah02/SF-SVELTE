<script>
  import { isMobile, isTablet, isDesktop } from '@/lib/hooks/useScreen';
  export let show = 'all' // 'mobile' | 'tablet' | 'desktop' | 'all' = 'all';
</script>

{#if show === 'all'}
  <slot />
{:else if show === 'mobile' && $isMobile}
  <slot />
{:else if show === 'tablet' && $isTablet}
  <slot />
{:else if show === 'desktop' && $isDesktop}
  <slot />
{/if}
