<script>
  import * as NavigationMenu from "../ui/navigation-menu";
</script>

<header class="fixed top-0 left-0 right-0 z-50 hidden lg:flex justify-center bg-white/80 backdrop-blur border-b border-gray-200">
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
      <NavigationMenu.Root viewport={false}>
        <NavigationMenu.List class="flex items-center gap-6">
          <!-- Static Link -->
          <NavigationMenu.Item>
            <NavigationMenu.Link class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <!-- Dropdown Menu -->
          <NavigationMenu.Item>
            <NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Product
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul class="grid w-[200px] p-1">
                <li>
                  <NavigationMenu.Link href="#" class="text-lg font-medium">Residential AC</NavigationMenu.Link>
                  <NavigationMenu.Link href="#">Charmo Single Split Inverter Series</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#" class="text-lg font-medium">Commercial AC</NavigationMenu.Link>
                  <NavigationMenu.Link href="#">Free Match</NavigationMenu.Link>
                  <NavigationMenu.Link href="#">VRV GMV Mini</NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <!-- Repeat for other dropdowns or links -->
          <NavigationMenu.Item>
            <NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Buy
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul class="grid w-[200px] p-1">
                <li>
                  <NavigationMenu.Link href="#">Offline</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">Online</NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              E-Catalogue
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              News
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul class="grid w-[200px] p-1">
                <li>
                  <NavigationMenu.Link href="#">Promotion</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">Event</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">Article</NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Support
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul class="grid w-[200px] p-1">
                <li>
                  <NavigationMenu.Link href="#">After Sales</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">Service Center</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">FAQ</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">Installer Registration</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">Warranty Registration</NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              About Us
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul class="grid w-[200px] p-1">
                <li>
                  <NavigationMenu.Link href="#">Brand</NavigationMenu.Link>
                </li>
                <li>
                  <NavigationMenu.Link href="#">Introduction</NavigationMenu.Link>
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link class="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Partner System
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  </div>
</header>
