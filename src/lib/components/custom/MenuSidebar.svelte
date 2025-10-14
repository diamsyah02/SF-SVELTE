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
    ListChevronsDownUp,
  } from "@lucide/svelte";
  import { menuSidebar, authSidebar } from "@/lib/stores";
  import { goto } from "$app/navigation";

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
      title: "Rundown",
      url: "/rundown",
      icon: ListChevronsDownUp,
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
    {
      title: "Login",
      url: "/login",
      icon: LogInIcon,
    },
  ];
</script>

<section
  class="w-full lg:w-[22%] xl:w-[22%] h-screen z-50 fixed bg-white shadow-lg slide-in-left flex flex-col justify-between overflow-y-auto scrollbar-hide"
>
  <div class="flex flex-col pb-10">
    <div class="flex flex-row items-center p-2 relative">
      <img
        src="https://www.dreamers.id/img_artikel/9yyy.jpg"
        alt="Logo"
        class="w-full h-[150px] lg:h-full xl:h-full object-cover lg:object-contain xl:object-contain"
        loading="lazy"
      />
      <div
        class="block lg:hidden xl:hidden absolute top-2 right-2 cursor-pointer bg-white p-1 rounded-full"
      >
        <X size={12} onclick={() => menuSidebar.update((value) => !value)} aria-label="Close Menu" />
      </div>
    </div>
    {#each items as item}
      {#if item.title === "Login"}
        <button
          class="flex flex-row gap-2 items-center py-2 px-3 hover:bg-blue-800/80 hover:text-white cursor-pointer"
          onclick={() => authSidebar.set(true)}
          aria-label="Login"
        >
          <item.icon size={20} />
          <div class="text-sm ml-2">{item.title}</div>
        </button>
      {:else}
        <a
          href={item.url}
          target={item.title === "Green Movement" ? "_blank" : "_self"}
          rel={item.title === "Green Movement"
            ? "noopener noreferrer"
            : undefined}
          class="flex flex-row gap-2 items-center py-2 px-3 hover:bg-blue-800/80 hover:text-white cursor-pointer"
          aria-label={item.title}
        >
          <item.icon size={20} />
          <div class="text-sm ml-2">{item.title}</div>
        </a>
      {/if}
    {/each}
  </div>
</section>
