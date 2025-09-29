<script>
  import { onMount } from "svelte";
  import { Menu, X } from "@lucide/svelte"; // Icon shadcn-compatible
  let isOpen = false;
</script>

<!-- Hanya tampil di mobile & tablet -->
<header class="fixed top-0 left-0 right-0 z-50 lg:hidden bg-blue-800/80 text-white backdrop-blur border-b border-gray-200">
  <div class="flex items-center justify-between px-4 py-3">
    <!-- Logo -->
    <div class="text-left">
      <img
        src="https://www.dreamers.id/img_artikel/9yyy.jpg"
        alt="Logo"
        class="w-full h-10 object-contain"
        loading="eager"
      />
    </div>

    <!-- Hamburger button -->
    <button
      class="text-white focus:outline-none"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Toggle Menu"
    >
      {#if isOpen}
        <X class="w-6 h-6" />
      {:else}
        <Menu class="w-6 h-6" />
      {/if}
    </button>
  </div>

  <!-- Mobile menu dropdown -->
  {#if isOpen}
    <nav class="px-4 py-4 space-y-2 border-t border-gray-200">
      <a href="/" class="block text-sm font-medium hover:text-white/80">Home</a>
      <a href="/" class="block text-sm font-medium hover:text-white/80">Lineup</a>
      <a href="/" class="block text-sm font-medium hover:text-white/80">Ticket</a>
      <a href="/" class="block text-sm font-medium hover:text-white/80">After Party</a>
      <a href="/" class="block text-sm font-medium hover:text-white/80">Merchandise</a>
      <a href="/" class="block text-sm font-medium hover:text-white/80">Green Movement</a>
      <a href="/contact" class="block text-sm font-medium hover:text-white/80">Contact Us</a>
      <a href="/" class="block text-sm font-medium hover:text-white/80">Login</a>
    </nav>
  {/if}
</header>
