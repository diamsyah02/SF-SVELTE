<script>
  import { Menu, X } from "@lucide/svelte";
  let isOpen = false;
</script>

<!-- Tablet Header: Hanya tampil di md -->
<header
  class="fixed top-0 left-0 right-0 z-50 hidden md:flex lg:hidden bg-white shadow-md"
>
  <div class="flex items-center justify-between px-6 py-4 w-full">
    <!-- Logo -->
    <img
      src="https://img.greeindonesia.com/img.gree.sg/20250821/website_gree.sg/website_gree.sg_11072/4azxvfuQUD21082025140930.png"
      alt="Logo"
      class="w-48 h-auto object-contain"
      loading="eager"
    />

    <!-- Hamburger -->
    <button
      class="text-gray-800 focus:outline-none"
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
    <nav class="w-[35%] px-6 py-2 space-y-2 bg-white border-t border-gray-200">
      <a href="/" class="block text-base font-medium text-gray-700 hover:text-black">Home</a>

      <details class="group">
        <summary
          class="cursor-pointer text-base font-medium text-gray-700 hover:text-black"
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
          class="cursor-pointer text-base font-medium text-gray-700 hover:text-black"
        >
          Buy
        </summary>
        <div class="ml-4 mt-1 space-y-1">
          <a href="/buy" class="block text-sm text-gray-600 hover:text-black">Online</a>
          <a href="/buy" class="block text-sm text-gray-600 hover:text-black">Offline</a>
        </div>
      </details>

      <a href="/catalogue" class="block text-base font-medium text-gray-700 hover:text-black">E-Catalogue</a>

      <details class="group">
        <summary
          class="cursor-pointer text-base font-medium text-gray-700 hover:text-black"
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
          class="cursor-pointer text-base font-medium text-gray-700 hover:text-black"
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
          class="cursor-pointer text-base font-medium text-gray-700 hover:text-black"
        >
          About Us
        </summary>
        <div class="ml-4 mt-1 space-y-1">
          <a href="/aboutus" class="block text-sm text-gray-600 hover:text-black">Brand</a>
          <a href="/aboutus" class="block text-sm text-gray-600 hover:text-black">Introduction</a>
        </div>
      </details>

      <a href="/partner" class="block text-base font-medium text-gray-700 hover:text-black">Partner System</a>
    </nav>
  {/if}
</header>
