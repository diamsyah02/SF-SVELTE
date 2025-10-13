<script>
    import { ShoppingBasket } from "@lucide/svelte";
    export let title = ''
</script>

<div class="w-full py-8 px-10 z-50 fixed top-0 left-0 right-0 shadow-lg">
    <div class="flex justify-between items-center">
        <div class="text-2xl font-bold">
            {title}
        </div>
        <div>
            <ShoppingBasket size={24} />
        </div>
    </div>
</div>