<script>
  import { toast } from "svelte-sonner";
  import { X } from "@lucide/svelte";
  import { authSidebar, isLogin } from "@/lib/stores";
  import Input from "../ui/input/input.svelte";

  let usernameLogin = "";
  let passwordLogin = "";

  let emailRegister = "";
  let usernameRegister = "";
  let passwordRegister = "";
  let confirmPasswordRegister = "";
  let phoneRegister = "";
  let birthdayRegister = "";

  let isRegister = false;

  function login() {
    if (usernameLogin === "") return toast.error("Username is required!");
    isLogin.set(usernameLogin);
    authSidebar.set(false);
    toast.success(`Kamu berhasil login, ${usernameLogin}!`);
  }

  function register() {
    toast.success(`Kamu berhasil register, ${usernameRegister}!`);
  }
</script>

<section
  class="w-full lg:w-[22%] xl:w-[22%] h-screen z-50 fixed right-0 flex flex-col gap-2 justify-center items-center overflow-y-auto scrollbar-hide px-8 bg-white shadow-lg slide-in-right bg-white"
>
  {#if !isRegister}
    <div class="w-full text-center text-2xl font-bold">Login</div>
    <div class="w-full">
      <Input type="text" name="username" id="username" placeholder="Username" oninput={(e) => usernameLogin = e.target.value} />
    </div>
    <div class="w-full">
      <Input type="password" name="password" id="password" placeholder="Password" oninput={(e) => passwordLogin = e.target.value} />
    </div>
    <div class="w-full flex flex-row gap-2">
      <button type="button" class="w-full p-1 bg-blue-800/80 hover:bg-blue-800 text-white rounded-md" onclick={login} aria-label="Login">Login</button
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
      <Input type="email" name="email" id="email" placeholder="Email" oninput={(e) => emailRegister = e.target.value} />
    </div>
    <div class="w-full">
      <Input type="password" name="password" id="password" placeholder="Password" oninput={(e) => passwordRegister = e.target.value} />
    </div>
    <div class="w-full">
      <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" oninput={(e) => confirmPasswordRegister = e.target.value} />
    </div>
    <div class="w-full">
      <Input type="text" name="username" id="username" placeholder="Username" oninput={(e) => usernameRegister = e.target.value} />
    </div>
    <div class="w-full">
      <Input type="tel" name="phone" id="phone" placeholder="Phone" oninput={(e) => phoneRegister = e.target.value} />
    </div>
    <div class="w-full">
      <Input type="date" name="birthday" id="birthday" placeholder="Birthday" oninput={(e) => birthdayRegister = e.target.value} />
    </div>
    <div class="w-full flex flex-row gap-2">
      <button type="button" class="w-full p-1 bg-blue-800/80 hover:bg-blue-800 text-white rounded-md" onclick={register} aria-label="Register">Register</button>
      <button type="button" class="w-full p-1 bg-gray-500 text-white rounded-md" onclick={() => (isRegister = false)} aria-label="Login">Login</button>
    </div>
  {/if}
</section>
