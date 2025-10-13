<script>
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import Autoplay from "embla-carousel-autoplay";
    import { isMobile, isTablet, isDesktop } from '@/lib/hooks/useScreen';

    let mt = ''
    if ($isMobile) {
        mt = 'mt-38'
    } else if ($isTablet) {
        mt = 'mt-24'
    } else if ($isDesktop) {
        mt = 'mt-24'
    }
</script>

<Carousel.Root class="w-full {mt}" plugins={[Autoplay({ delay: 5000 })]}>
    <Carousel.Content>
        <Carousel.Item>
            <img
                src="https://cdn.jsdelivr.net/gh/diamsyah02/FOR-TEST-ANYTHING/d1.png"
                alt="banner"
                loading="lazy"
                class="w-full object-cover"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                src="https://cdn.jsdelivr.net/gh/diamsyah02/FOR-TEST-ANYTHING/d3.png"
                alt="banner"
                loading="lazy"
                class="w-full object-cover"
            />
        </Carousel.Item>
    </Carousel.Content>
</Carousel.Root>