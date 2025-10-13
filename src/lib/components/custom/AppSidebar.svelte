<script>
  import {
    LogInIcon,
    HouseIcon,
    PhoneCallIcon,
    TreePalm,
    Shirt,
    PartyPopper,
    Ticket,
    PersonStanding,
    X,
  } from "@lucide/svelte";
  import { sidebar } from "@/lib/stores";

  // Menu items.
  const items = [
    {
      title: "Home",
      url: "/",
      icon: HouseIcon,
    },
    {
      title: "Lineup",
      url: "/lineup",
      icon: PersonStanding,
    },
    {
      title: "Ticket",
      url: "/ticket",
      icon: Ticket,
    },
    {
      title: "After Party",
      url: "/after-party",
      icon: PartyPopper,
    },
    {
      title: "Merchandise",
      url: "/merchandise",
      icon: Shirt,
    },
    {
      title: "Green Movement",
      url: "https://sisa.synchronizefestival.com/",
      icon: TreePalm,
    },
    {
      title: "Contact Us",
      url: "/contact",
      icon: PhoneCallIcon,
    },
  ];

  function handleRedirect(item) {
    if (item.title == 'Green Movement') {
      window.open(item.url, "_blank");
    } else {
      window.location.href = item.url;
    }
  }
</script>

<section class="w-[100%] lg:w-[20%] xl:w-[20%] h-screen z-50 fixed top-0 left-0 right-0 bg-white shadow-lg">
    <div class="flex flex-col">
      <div class="flex flex-row items-center p-2 relative">
        <img
          src="https://www.dreamers.id/img_artikel/9yyy.jpg"
          alt="Logo"
          class="w-full h-96 lg:h-full xl:h-full object-cover lg:object-contain xl:object-contain"
          loading="lazy"
        />
        <div class="block lg:hidden xl:hidden absolute top-2 right-2 cursor-pointer bg-white p-2 rounded-full">
          <X size={20} onclick={() => sidebar.update((value) => !value)} />
        </div>
      </div>
      {#each items as item}
        <button class="flex flex-row gap-2 items-center py-2 px-3 hover:bg-blue-800/80 hover:text-white cursor-pointer" onclick={() => handleRedirect(item)}>
            <item.icon size={20} />
            <div class="text-xl lg:text-sm xl:text-sm font-bold ml-2">
                {item.title}
            </div>
        </button>
      {/each}
    </div>
    <button class="absolute bottom-2 w-full flex flex-row items-center p-2 hover:bg-blue-800/80 hover:text-white cursor-pointer" onclick={() => handleRedirect({title: 'Login', url: '/login'})}>
      <LogInIcon size={20} />
      <div class="text-xl lg:text-sm xl:text-sm font-bold ml-2">
        Login
      </div>
    </button>
</section>
