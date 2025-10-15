 <script>
    import Banner from "@/lib/components/custom/home/Banner.svelte";
    import Blockquote from "@/lib/components/custom/Blockquote.svelte";
    import { title, menuSidebar } from "@/lib/stores";
    title.update((value) => "Ticket");
    menuSidebar.set(false);
 </script>

 <svelte:head>
    <title>Ticket</title>
    <meta name="description" content="Synchronize Festival 2025 - Ticket" />
    <meta property="og:title" content="Ticket" />
    <meta property="og:description" content="Synchronize Festival 2025 - Ticket" />
 </svelte:head>

 <div class="px-10 md:px-24 lg:px-42 py-10 md:py-24 lg:py-24">
    <Blockquote className="text-center">
        Ticket
    </Blockquote>
</div>
