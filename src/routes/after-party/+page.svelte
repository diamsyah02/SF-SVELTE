<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title, menuSidebar } from "@/lib/stores";
  title.update((value) => "After Party");
  menuSidebar.set(false);
</script>
<svelte:head>
    <title>After Party</title>
    <meta name="description" content="Synchronize Festival 2025 - After Party" />
    <meta property="og:title" content="After Party" />
    <meta property="og:description" content="Synchronize Festival 2025 - After Party" />
</svelte:head>

<div class="px-10 md:px-24 lg:px-42 py-10 md:py-24 lg:py-24">
    <Blockquote className="text-center">
        After Party
    </Blockquote>
</div>
