<script>
  import { title } from "@/lib/stores";
  import { ShoppingBasket, Menu } from "@lucide/svelte";
  import { menuSidebar } from "@/lib/stores";
</script>

<div class="w-full z-50 flex justify-center items-center">
    <div class="w-[100%] px-4 py-2 flex justify-between items-center shadow-lg bg-white">
        <div class="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
          <Menu size={20} onclick={() => menuSidebar.update((value) => !value)} aria-label="Open Menu" />
        </div>
        <h1 class="text-md font-bold">
            {$title}
        </h1>
        <a href="/cart" class="relative hover:bg-gray-200 p-2 rounded-full" aria-label="Cart">
          <div class="absolute bottom-[17.5px] left-[17.5px] w-4 h-4 bg-red-500 rounded-full text-white text-center text-xs">7</div>
          <ShoppingBasket size={20} />
        </a>
    </div>
</div>
