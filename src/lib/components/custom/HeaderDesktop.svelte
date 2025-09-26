<script>
  import * as NavigationMenu from "../ui/navigation-menu/index.js";
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300"
>
  <div class="w-full lg:w-[85%] max-w-screen-xl bg-white backdrop-blur-md">
    <div
      class="absolute left-0 top-full w-full bg-white shadow-lg rounded-md z-50 rounded-b-[40px]"
    >
      <nav
        class="container flex my-3 justify-center max-h-[60vh] w-full mb-5 -mx-1.5 px-4"
      >
        <div class="flex justify-start w-2/12 h-full py-3">
          <img
            src="https://img.greeindonesia.com/img.gree.sg/20250821/website_gree.sg/website_gree.sg_11072/4azxvfuQUD21082025140930.png"
            alt="Logo"
            loading="eager"
            class="object-contain w-64 mx-auto sm:w-48 sm:mx-0 h-full"
          />
        </div>
        <div class="flex justify-end w-10/12 mt-1">
          <NavigationMenu.Root>
            <NavigationMenu.List>
              <NavigationMenu.Item>Home</NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Product</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <NavigationMenu.Link>Link</NavigationMenu.Link>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Buy</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <NavigationMenu.Link>Link</NavigationMenu.Link>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>E-Catalogue</NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>News</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <NavigationMenu.Link>Link</NavigationMenu.Link>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Support</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <NavigationMenu.Link>Link</NavigationMenu.Link>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>About Us</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <NavigationMenu.Link>Link</NavigationMenu.Link>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>Partner System</NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>
      </nav>
    </div>
  </div>
</header>
