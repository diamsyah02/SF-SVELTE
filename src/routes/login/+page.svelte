<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title } from "@/lib/stores";
  title.update((value) => "Login");
</script>
<svelte:head>
    <title>Login</title>
    <meta name="description" content="Synchronize Festival 2025 - Login" />
    <meta property="og:title" content="Login" />
    <meta property="og:description" content="Synchronize Festival 2025 - Login" />
</svelte:head>

<div class="px-10 md:px-24 lg:px-42 py-10 md:py-24 lg:py-24">
    <Blockquote className="text-center">
        Login
    </Blockquote>
</div>
