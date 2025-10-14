<script>
  import { title } from "@/lib/stores";
  import { ShoppingBasket, Menu, X } from "@lucide/svelte";
  import { menuSidebar } from "@/lib/stores";
</script>

<div class="w-full z-50 flex justify-center items-center">
    <div class="w-[50%] py-6 px-10 flex justify-between items-center shadow-lg">
        {#if $menuSidebar}
          <X size={24} onclick={() => menuSidebar.update((value) => !value)} class="cursor-pointer" />
        {:else}
          <Menu size={24} onclick={() => menuSidebar.update((value) => !value)} class="cursor-pointer" />
        {/if}
        <h1 class="text-2xl font-bold">
            {$title}
        </h1>
        <div class="relative cursor-pointer">
            <div class="absolute bottom-[10px] left-[10px] w-4 h-4 bg-red-500 rounded-full text-white text-center text-xs">7</div>
            <ShoppingBasket size={24} />
        </div>
    </div>
</div>