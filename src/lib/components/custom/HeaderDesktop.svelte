<script>
  import * as NavigationMenu from "../ui/navigation-menu";
</script>

<header class="fixed top-0 left-0 right-0 z-50 hidden lg:flex justify-center bg-blue-800/80 text-white backdrop-blur border-b border-gray-200">
  <div class="w-full max-w-screen-xl px-6">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="https://www.dreamers.id/img_artikel/9yyy.jpg"
          alt="Logo"
          class="h-12 object-contain"
          loading="eager"
        />
      </div>

      <!-- Navigation Menu -->
      <NavigationMenu.Root viewport={false}>
        <NavigationMenu.List class="flex items-center gap-6">
          <!-- Static Link -->
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
            <NavigationMenu.Link href="/" class="text-lg font-medium hover:text-black transition-colors">
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
</header>
