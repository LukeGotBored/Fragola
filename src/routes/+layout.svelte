<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";



    import NowPlaying from "$lib/components/NowPlaying.svelte";
    import TabComponent from "$lib/components/TabComponent.svelte";

    import "./global.css";


</script>

<main>
    <TabComponent>
        <slot />
    </TabComponent>
    <NowPlaying />
</main>

<style>
</style>
