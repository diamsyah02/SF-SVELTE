<script>
  // import * as NavigationMenu from "@/lib/components/ui/navigation-menu";
  import { title } from "@/lib/stores";
  import { ShoppingBasket, Menu, X } from "@lucide/svelte";
  import { sidebar } from "@/lib/stores";
</script>

<div class="w-full z-50 flex justify-center items-center">
    <div class="w-[50%] py-6 px-10 flex justify-between items-center shadow-lg">
        {#if $sidebar}
          <X size={24} onclick={() => sidebar.update((value) => !value)} class="cursor-pointer" />
        {:else}
          <Menu size={24} onclick={() => sidebar.update((value) => !value)} class="cursor-pointer" />
        {/if}
        <div class="text-2xl font-bold">
            {$title}
        </div>
        <div>
            <ShoppingBasket size={24} class="cursor-pointer" />
        </div>
    </div>
</div>
<!-- <header class="fixed top-0 left-0 right-0 z-50 hidden lg:flex justify-center bg-blue-800/80 text-white backdrop-blur border-b border-gray-200">
  <div class="w-full max-w-screen-xl px-6">
    <div class="flex items-center justify-between h-20">
      <div class="flex items-center">
        <img
          src="https://www.dreamers.id/img_artikel/9yyy.jpg"
          alt="Logo"
          class="h-12 object-contain"
          loading="lazy"
        />
      </div>

      <NavigationMenu.Root viewport={false}>
        <NavigationMenu.List class="flex items-center gap-6">
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" class="text-lg font-medium hover:text-black transition-colors">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" class="text-lg font-medium hover:text-black transition-colors">
              Lineup
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" class="text-lg font-medium hover:text-black transition-colors">
              Ticket
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" class="text-lg font-medium hover:text-black transition-colors">
              After Party
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" class="text-lg font-medium hover:text-black transition-colors">
              Merchandise
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" class="text-lg font-medium hover:text-black transition-colors">
              Green Movement
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/contact" class="text-lg font-medium hover:text-black transition-colors">
              Contact Us
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" class="text-lg font-medium border border-white px-4 py-2 hover:text-black transition-colors">
              Login
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  </div>
</header> -->
