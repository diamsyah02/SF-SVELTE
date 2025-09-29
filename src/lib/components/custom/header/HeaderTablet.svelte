<script>
  import { Menu, X } from "@lucide/svelte";
  let isOpen = false;
</script>

<!-- Tablet Header: Hanya tampil di md -->
<header
  class="fixed top-0 left-0 right-0 z-50 hidden md:flex lg:hidden bg-blue-800/80 text-white backdrop-blur border-b border-gray-200"
>
  <div class="flex items-center justify-between px-6 py-4 w-full">
    <!-- Logo -->
    <div class="text-left">
      <img
        src="https://www.dreamers.id/img_artikel/9yyy.jpg"
        alt="Logo"
        class="w-48 h-20 object-contain"
        loading="eager"
      />
    </div>

    <!-- Hamburger -->
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

  <!-- Menu for Tablet -->
  {#if isOpen}
    <nav class="w-[35%] px-6 py-2 space-y-2 border-t border-gray-200">
      <a href="/" class="block text-base font-medium hover:text-white/80">Home</a>
      <a href="/" class="block text-base font-medium hover:text-white/80">Lineup</a>
      <a href="/" class="block text-base font-medium hover:text-white/80">Ticket</a>
      <a href="/" class="block text-base font-medium hover:text-white/80">After Party</a>
      <a href="/" class="block text-base font-medium hover:text-white/80">Merchandise</a>
      <a href="/" class="block text-base font-medium hover:text-white/80">Green Movement</a>
      <a href="/contact" class="block text-base font-medium hover:text-white/80">Contact Us</a>
      <a href="/" class="block text-base font-medium hover:text-white/80">Login</a>
    </nav>
  {/if}
</header>
