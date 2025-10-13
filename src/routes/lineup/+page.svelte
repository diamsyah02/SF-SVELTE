<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title } from "@/lib/stores";
  title.update((value) => "Lineup");
</script>
<svelte:head>
    <title>Lineup</title>
    <meta name="description" content="Synchronize Festival 2025 - Lineup" />
    <meta property="og:title" content="Lineup" />
    <meta property="og:description" content="Synchronize Festival 2025 - Lineup" />
</svelte:head>

<div class="px-10 md:px-24 lg:px-42 py-10 md:py-24 lg:py-24">
    <Blockquote className="text-center">
        Lineup
    </Blockquote>
</div>
