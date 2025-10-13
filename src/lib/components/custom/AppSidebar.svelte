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
    if (item.title == "Green Movement") {
      window.open(item.url, "_blank");
    } else {
      window.location.href = item.url;
    }
  }
</script>

<section
  class="w-full lg:w-[22%] xl:w-[22%] min-h-screen fixed top-0 left-0 z-[9999] bg-white shadow-lg flex flex-col justify-between overflow-y-auto"
>
  <div class="flex flex-col pb-10">
    <div class="flex flex-row items-center p-2 relative">
      <img
        src="https://www.dreamers.id/img_artikel/9yyy.jpg"
        alt="Logo"
        class="w-full h-[150px] object-cover lg:object-contain xl:object-contain"
        loading="lazy"
      />
      <div
        class="block lg:hidden xl:hidden absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full z-[10000]"
      >
        <X size={12} onclick={() => sidebar.update((value) => !value)} />
      </div>
    </div>
    {#each items as item}
      <button
        class="flex flex-row gap-2 items-center py-2 px-3 hover:bg-blue-800/80 hover:text-white cursor-pointer"
        onclick={() => handleRedirect(item)}
      >
        <item.icon size={20} />
        <div class="text-sm ml-2">{item.title}</div>
      </button>
    {/each}
  </div>

  <div class="w-full border-t border-gray-200">
    <button
      class="w-full flex flex-row items-center bg-white py-2 px-3 hover:bg-blue-800/80 hover:text-white cursor-pointer"
      onclick={() => handleRedirect({ title: "Login", url: "/login" })}
    >
      <LogInIcon size={20} />
      <div class="text-sm ml-4">Login</div>
    </button>
  </div>
</section>
