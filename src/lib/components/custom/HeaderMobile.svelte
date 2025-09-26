<script>
  import { onMount } from "svelte";
  import { Menu, X } from "@lucide/svelte"; // Icon shadcn-compatible
  let isOpen = false;
</script>

<!-- Hanya tampil di mobile & tablet -->
<header class="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white shadow-md">
  <div class="flex items-center justify-between px-4 py-3">
    <!-- Logo -->
    <img
      src="https://img.greeindonesia.com/img.gree.sg/20250821/website_gree.sg/website_gree.sg_11072/4azxvfuQUD21082025140930.png"
      alt="Logo"
      class="w-40 h-auto object-contain"
      loading="eager"
    />

    <!-- Hamburger button -->
    <button
      class="text-gray-800 focus:outline-none"
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
    <nav class="px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
      <a
        href="/"
        class="block text-sm font-medium text-gray-700 hover:text-black">Home</a
      >

      <details class="group">
        <summary
          class="cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
        >
          Product
        </summary>
        <div class="ml-4 mt-1 space-y-1">
          <a href="/product" class="block text-sm text-gray-600 hover:text-black">Residential AC</a>
          <a href="/product" class="block text-sm text-gray-600 hover:text-black">Commercial AC</a>
        </div>
      </details>

      <details class="group">
        <summary
          class="cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
        >
          Buy
        </summary>
        <div class="ml-4 mt-1 space-y-1">
          <a href="/buy" class="block text-sm text-gray-600 hover:text-black">Offline</a>
          <a href="/buy" class="block text-sm text-gray-600 hover:text-black">Online</a>
        </div>
      </details>

      <a href="/ecatalogue" class="block text-sm font-medium text-gray-700 hover:text-black">E-Catalogue</a>

      <details class="group">
        <summary
          class="cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
        >
          News
        </summary>
        <div class="ml-4 mt-1 space-y-1">
          <a href="/news" class="block text-sm text-gray-600 hover:text-black">Promotion</a>
          <a href="/news" class="block text-sm text-gray-600 hover:text-black">Event</a>
          <a href="/news" class="block text-sm text-gray-600 hover:text-black">Article</a>
        </div>
      </details>

      <details class="group">
        <summary
          class="cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
        >
          Support
        </summary>
        <div class="ml-4 mt-1 space-y-1">
          <a href="/support" class="block text-sm text-gray-600 hover:text-black">After Sales</a>
          <a href="/support" class="block text-sm text-gray-600 hover:text-black">Service Center</a>
          <a href="/support" class="block text-sm text-gray-600 hover:text-black">Installer Registration</a>
          <a href="/support" class="block text-sm text-gray-600 hover:text-black">Warranty Registration</a>
        </div>
      </details>

      <details class="group">
        <summary
          class="cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
        >
          About Us
        </summary>
        <div class="ml-4 mt-1 space-y-1">
          <a href="/aboutus" class="block text-sm text-gray-600 hover:text-black">Brand</a>
          <a href="/aboutus" class="block text-sm text-gray-600 hover:text-black">Introduction</a>
        </div>
      </details>

      <a href="/partner" class="block text-sm font-medium text-gray-700 hover:text-black">Partner System</a>
    </nav>
  {/if}
</header>
