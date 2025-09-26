<script>
  import * as NavigationMenu from "../ui/navigation-menu";
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 hidden lg:flex justify-center bg-white/80 backdrop-blur border-b border-gray-200"
>
  <div class="w-full max-w-screen-xl px-6">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="https://img.greeindonesia.com/img.gree.sg/20250821/website_gree.sg/website_gree.sg_11072/4azxvfuQUD21082025140930.png"
          alt="Logo"
          class="h-12 object-contain"
          loading="eager"
        />
      </div>

      <!-- Navigation Menu -->
      <NavigationMenu.Root>
        <NavigationMenu.List class="flex items-center gap-6">
          <!-- Static Link -->
          <NavigationMenu.Item>
            <NavigationMenu.Link
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <!-- Dropdown Menu -->
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Product
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              class="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg p-2"
            >
              <NavigationMenu.Link
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Link
              </NavigationMenu.Link>
              <NavigationMenu.Link
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Another Link
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <!-- Repeat for other dropdowns or links -->
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Buy
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              class="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg p-2"
            >
              <NavigationMenu.Link
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Link
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              E-Catalogue
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              News
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              class="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg p-2"
            >
              <NavigationMenu.Link
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Link
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Support
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              class="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg p-2"
            >
              <NavigationMenu.Link
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Link
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              About Us
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
              class="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg p-2"
            >
              <NavigationMenu.Link
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Link
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link
              class="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Partner System
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  </div>
</header>
