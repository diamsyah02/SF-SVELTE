<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title } from "@/lib/stores";
  title.update((value) => "Lineup");
</script>

<svelte:head>
  <title>Lineup</title>
  <meta name="description" content="Synchronize Festival 2025 - Lineup" />
  <meta property="og:title" content="Lineup" />
  <meta
    property="og:description"
    content="Synchronize Festival 2025 - Lineup"
  />
</svelte:head>

<div class="p-6 lg:p-10 xl:p-10">
  <img
    src="https://cdn.jsdelivr.net/gh/diamsyah02/FOR-TEST-ANYTHING/lineup.jpg"
    alt="banner"
    loading="lazy"
    class="w-full"
  />
</div>
