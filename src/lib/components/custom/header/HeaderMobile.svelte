<script>
  import { title } from "@/lib/stores";
  import { ShoppingBasket, Menu } from "@lucide/svelte";
  import { menuSidebar } from "@/lib/stores";
</script>

<div class="w-full z-50 flex justify-center items-center">
    <div class="w-[100%] px-4 py-2 flex justify-between items-center shadow-lg">
        <Menu size={20} onclick={() => menuSidebar.update((value) => !value)} />
        <h1 class="text-md font-bold">
            {$title}
        </h1>
        <div class="relative cursor-pointer">
            <div class="absolute bottom-[10px] left-[10px] w-4 h-4 bg-red-500 rounded-full text-white text-center text-xs">7</div>
            <ShoppingBasket size={20} />
        </div>
    </div>
</div>