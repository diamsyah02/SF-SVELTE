<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title, isLoading } from "@/lib/stores";
  title.update((value) => "Rundown");

  let rundownImg = 'RUN1'
  let listBtnDay = [
    {
        title: 'Day 1',
        img: 'RUN1'
    },
    {
        title: 'Day 2',
        img: 'RUN2'
    },
    {
        title: 'Day 3',
        img: 'RUN3'
    }
  ]

  function handleImageLoad(btn) {
    isLoading.set(true);
    rundownImg = btn.img
  }
  
  function handleImageError() {
    isLoading.set(false);
    toast.error('Image not found');
  }
</script>

<svelte:head>
  <title>Rundown</title>
  <meta name="description" content="Synchronize Festival 2025 - Rundown" />
  <meta property="og:title" content="Rundown" />
  <meta
    property="og:description"
    content="Synchronize Festival 2025 - Rundown"
  />
</svelte:head>

<div class="p-6 lg:p-10 xl:p-10">
    <div class="flex justify-between items-center mb-4">
        {#each listBtnDay as btn}
            <div class="flex flex-row gap-2">
                <button 
                class={`${rundownImg === btn.img ? 'bg-blue-800/80' : 'bg-gray-500'} hover:bg-blue-800 text-white text-xs lg:text-base xl:text-base px-2 py-1 lg:px-4 lg:py-2 xl:px-4 xl:py-2 rounded`} 
                onclick={() => handleImageLoad(btn)}
                aria-label={btn.title}
                >{btn.title}</button>
            </div>
        {/each}
    </div>
  <img
    src="https://cdn.jsdelivr.net/gh/diamsyah02/FOR-TEST-ANYTHING/{rundownImg}.png"
    alt="banner"
    loading="lazy"
    class="w-full"
    onload={() => isLoading.set(false)}
    onerror={handleImageError}
  />
</div>
