<script>
  import { toast } from "svelte-sonner";
  import { X } from "@lucide/svelte";
  import { authSidebar } from "@/lib/stores";

  let isRegister = false;
</script>

<section
  class="w-full lg:w-[22%] xl:w-[22%] h-screen z-50 fixed right-0 flex flex-col gap-2 justify-center items-center overflow-y-auto scrollbar-hide px-8 bg-white shadow-lg slide-in-right"
>
  {#if !isRegister}
    <div class="w-full text-center text-2xl font-bold">Login</div>
    <div class="w-full">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full">
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full flex flex-row gap-2">
      <button type="button" class="w-full p-2 bg-blue-800/80 hover:bg-blue-800 text-white rounded-md" onclick={() => toast("Kamu berhasil login!")} aria-label="Login">Login</button
      >
      <button type="button" class="w-full p-2 bg-gray-500 text-white rounded-md" onclick={() => authSidebar.update((value) => !value)} aria-label="Cancel">Cancel</button
      >
    </div>
    <div class="w-full text-center text-sm text-gray-500">
      Don't have an account? <a
        href="javascript:void(0)"
        onclick={() => (isRegister = true)}
        class="text-blue-800/80 hover:text-blue-800"
        aria-label="Register">Register</a
      >
    </div>
  {/if}
  {#if isRegister}
    <div class="w-full text-center text-2xl font-bold">Register</div>
    <div class="w-full">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full">
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full">
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full">
      <input
        type="text"
        name="fullname"
        id="fullname"
        placeholder="Fullname"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full">
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Phone"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full">
      <input
        type="date"
        name="birthday"
        id="birthday"
        placeholder="Birthday"
        class="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div class="w-full flex flex-row gap-2">
      <button type="button" class="w-full p-2 bg-blue-800/80 hover:bg-blue-800 text-white rounded-md" onclick={() => toast("Kamu berhasil register!")} aria-label="Register">Register</button>
      <button type="button" class="w-full p-2 bg-gray-500 text-white rounded-md" onclick={() => (isRegister = false)} aria-label="Login">Login</button>
    </div>
  {/if}
</section>
