<script lang="ts">
    export let className = "";
</script>

<div class={`relative p-4 pl-6 border-l-4 rounded-md bg-muted text-muted-foreground border-blue-800/80 ${className}`}>
    <blockquote class="italic">
        <slot />
    </blockquote>
</div>