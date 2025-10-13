<script>
  import { title } from "@/lib/stores";
  import { ShoppingBasket, Menu } from "@lucide/svelte";
  import { sidebar } from "@/lib/stores";
  // import { Menu, X } from "@lucide/svelte";
  // let isOpen = false;
  // function handleRedirect(url) {
  //   isOpen = false;
  //   window.location.href = url;
  // }
</script>

<div class="w-full z-50 flex justify-center items-center">
    <div class="w-[100%] p-6 flex justify-between items-center shadow-lg">
        <Menu size={24} onclick={() => sidebar.update((value) => !value)} />
        <div class="text-2xl font-bold">
            {$title}
        </div>
        <div>
            <ShoppingBasket size={24} />
        </div>
    </div>
</div>

<!-- <header
  class="fixed top-0 left-0 right-0 z-50 hidden md:flex lg:hidden bg-blue-800/80 text-white backdrop-blur border-b border-gray-200"
>
  <div class="flex items-center justify-between px-6 py-4 w-full">
    <div class="text-left">
      <img
        src="https://www.dreamers.id/img_artikel/9yyy.jpg"
        alt="Logo"
        class="w-48 h-20 object-contain"
        loading="lazy"
      />
    </div>
    <button
      class="text-white focus:outline-none"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle Menu"
    >
      {#if isOpen}
        <X class="w-7 h-7" />
      {:else}
        <Menu class="w-7 h-7" />
      {/if}
    </button>
  </div>

  {#if isOpen}
    <nav class="w-[35%] px-6 py-2 space-y-2 border-t border-gray-200">
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/")}>Home</button>
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/lineup")}>Lineup</button>
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/ticket")}>Ticket</button>
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/after-party")}>After Party</button>
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/merchandise")}>Merchandise</button>
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/green-movement")}>Green Movement</button>
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/contact")}>Contact Us</button>
      <button class="block text-base font-medium hover:text-white/80" on:click={() => handleRedirect("/login")}>Login</button>
    </nav>
  {/if}
</header> -->
