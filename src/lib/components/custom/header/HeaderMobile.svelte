<script>
  import { title } from "@/lib/stores";
  import { ShoppingBasket, Menu } from "@lucide/svelte";
  import { sidebar } from "@/lib/stores";
</script>

<div class="w-full z-50 flex justify-center items-center">
    <div class="w-[100%] p-6 flex justify-between items-center shadow-lg">
        <Menu size={24} onclick={() => sidebar.update((value) => !value)} />
        <div class="text-2xl font-bold">
            {$title}
        </div>
        <div class="relative cursor-pointer">
            <div class="absolute bottom-[10px] left-[10px] w-4 h-4 bg-red-500 rounded-full text-white text-center text-xs">7</div>
            <ShoppingBasket size={24} />
        </div>
    </div>
</div>