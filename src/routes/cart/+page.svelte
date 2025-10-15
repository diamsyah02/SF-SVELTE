<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title, menuSidebar } from "@/lib/stores";
  title.update((value) => "Cart");
  menuSidebar.set(false);
</script>
<svelte:head>
    <title>Cart</title>
    <meta name="description" content="Synchronize Festival 2025 - Cart" />
    <meta property="og:title" content="Cart" />
    <meta property="og:description" content="Synchronize Festival 2025 - Cart" />
</svelte:head>

<div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-10 md:px-24 lg:px-32 py-10 md:py-24 lg:py-42">
    <div class="text-center border border-gray-200 p-4 rounded-lg shadow-lg">
        Kamu belum melakukan order merchandise atau ticket di Synchronize Festival 2025
    </div>
</div>
