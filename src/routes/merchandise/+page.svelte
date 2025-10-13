<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title } from "@/lib/stores";
  title.update((value) => "Merchandise");
</script>
<svelte:head>
    <title>Merchandise</title>
    <meta name="description" content="Synchronize Festival 2025 - Merchandise" />
    <meta property="og:title" content="Merchandise" />
    <meta property="og:description" content="Synchronize Festival 2025 - Merchandise" />
</svelte:head>

<div class="px-10 md:px-24 lg:px-42 py-10 md:py-24 lg:py-24">
    <Blockquote className="text-center">
        Merchandise
    </Blockquote>
</div>
