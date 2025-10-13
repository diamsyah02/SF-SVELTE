<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title } from "@/lib/stores";
  title.update((value) => "Contact Us");
</script>
<svelte:head>
    <title>Contact Us</title>
    <meta name="description" content="Synchronize Festival 2025 - Contact Us" />
    <meta property="og:title" content="Contact Us" />
    <meta property="og:description" content="Synchronize Festival 2025 - Contact Us" />
</svelte:head>

<div class="px-10 md:px-24 lg:px-42 py-10 md:py-24 lg:py-24">
    <Blockquote className="text-center">
        Contact Us
    </Blockquote>
</div>
