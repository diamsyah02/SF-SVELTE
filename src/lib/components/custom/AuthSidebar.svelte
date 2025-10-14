<script>
  import { toast } from "svelte-sonner";
  import { X } from "@lucide/svelte";
  import { authSidebar } from "@/lib/stores";
  import Input from "../ui/input/input.svelte";

  let isRegister = false;
</script>

<section
  class="w-full lg:w-[22%] xl:w-[22%] h-screen z-50 fixed right-0 flex flex-col gap-2 justify-center items-center overflow-y-auto scrollbar-hide px-8 bg-white shadow-lg slide-in-right"
>
  {#if !isRegister}
    <div class="w-full text-center text-2xl font-bold">Login</div>
    <div class="w-full">
      <Input type="email" name="email" id="email" placeholder="Email" />
    </div>
    <div class="w-full">
      <Input type="password" name="password" id="password" placeholder="Password" />
    </div>
    <div class="w-full flex flex-row gap-2">
      <button type="button" class="w-full p-1 bg-blue-800/80 hover:bg-blue-800 text-white rounded-md" onclick={() => toast.success("Kamu berhasil login!")} aria-label="Login">Login</button
      >
      <button type="button" class="w-full p-1 bg-gray-500 text-white rounded-md" onclick={() => authSidebar.update((value) => !value)} aria-label="Cancel">Cancel</button
      >
    </div>
    <div class="w-full text-center text-sm text-gray-500">
      Don't have an account? <button
        onclick={() => (isRegister = true)}
        class="text-blue-800/80 hover:text-blue-800"
        aria-label="Register">Register</button>
    </div>
  {/if}
  {#if isRegister}
    <div class="w-full text-center text-2xl font-bold">Register</div>
    <div class="w-full">
      <Input type="email" name="email" id="email" placeholder="Email" />
    </div>
    <div class="w-full">
      <Input type="password" name="password" id="password" placeholder="Password" />
    </div>
    <div class="w-full">
      <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
    </div>
    <div class="w-full">
      <Input type="text" name="fullname" id="fullname" placeholder="Fullname" />
    </div>
    <div class="w-full">
      <Input type="tel" name="phone" id="phone" placeholder="Phone" />
    </div>
    <div class="w-full">
      <Input type="date" name="birthday" id="birthday" placeholder="Birthday" />
    </div>
    <div class="w-full flex flex-row gap-2">
      <button type="button" class="w-full p-1 bg-blue-800/80 hover:bg-blue-800 text-white rounded-md" onclick={() => toast.success("Kamu berhasil register!")} aria-label="Register">Register</button>
      <button type="button" class="w-full p-1 bg-gray-500 text-white rounded-md" onclick={() => (isRegister = false)} aria-label="Login">Login</button>
    </div>
  {/if}
</section>
