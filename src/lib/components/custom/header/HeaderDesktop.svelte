<script>
  import { title } from "@/lib/stores";
  import { ShoppingBasket, Menu, X } from "@lucide/svelte";
  import { menuSidebar } from "@/lib/stores";
</script>

<div class="w-full z-50 flex justify-center items-center">
    <div class="w-[50%] py-6 px-10 flex justify-between items-center shadow-lg bg-white">
      <div class="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
        {#if $menuSidebar}
          <X size={24} onclick={() => menuSidebar.update((value) => !value)} aria-label="Close Menu" />
        {:else}
          <Menu size={24} onclick={() => menuSidebar.update((value) => !value)} aria-label="Open Menu" />
        {/if}
      </div>
        <h1 class="text-2xl font-bold">
            {$title}
        </h1>
        <a href="/cart" class="relative hover:bg-gray-200 p-2 rounded-full" aria-label="Cart">
            <div class="absolute bottom-[20px] left-[20px] w-4 h-4 bg-red-500 rounded-full text-white text-center text-xs">7</div>
            <ShoppingBasket size={24} />
        </a>
    </div>
</div>