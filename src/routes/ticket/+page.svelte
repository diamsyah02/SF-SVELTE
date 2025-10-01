 <script>
    import {  onMount } from "svelte";
    import Banner from "@/lib/components/custom/home/Banner.svelte";
    import Blockquote from "@/lib/components/custom/Blockquote.svelte";
 
    let education = [];
    let randomNumber = Math.floor(Math.random() * 3);
    async function getData() {
        const res = await fetch(`https://apiwebpribadi.diamsyah.my.id/api/education`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer AC9D72E4B61B7935B28D412F72193",
            },
        });
        // const res = await fetch(`${import.meta.env.VITE_API_URL}Tickets/getData`);
        const data = await res.json();
        education = data.result;
    }
    onMount(() => {
        getData();
    });
 </script>

 <svelte:head>
    <title>Ticket</title>
    <meta name="description" content="Synchronize Festival 2025 - Ticket" />
    <meta property="og:title" content="Ticket" />
    <meta property="og:description" content="Synchronize Festival 2025 - Ticket" />
 </svelte:head>

 <div class="px-10 md:px-24 lg:px-42 py-10 md:py-24 lg:py-24">
    <Blockquote className="text-center">
        Ticket {education.length > 0 ? education[randomNumber].nama_sekolah : ""}
    </Blockquote>
</div>
