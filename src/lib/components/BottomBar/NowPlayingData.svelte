<script>
    import TabComponent from '../TabComponent.svelte';

    export let track = {
        name: "No Track",
        artist: "",
        albumArt: "",
        album: ""
    };

</script>

<div class="current-track-widget">
    <div class="track-info">
        <div class="track-name">{track.name}</div>
        <div class="track-artist">{track.artist || "Unknown Artist"} {#if track.album}• {track.album}{/if}</div>
    </div>
    {#if track.albumArt}
        <img src={track.albumArt} alt="Album Art" class="album-art" />
    {:else}
    {#await import('$lib/assets/album-generic.png') then module}
            <img src={module.default} alt="Generic Album Art" class="album-art" />
        {/await}
    {/if}
    </div>

<style>
    .current-track-widget {
        display: flex;
        align-items: center;
        gap: 10px;
        text-align: right;
        margin-left: 10px;
    }

    .album-art {
        width: 40px;
        height: 40px;
        border-radius: 4px;
    }

    .track-info {
        display: flex;
        flex-direction: column;
        text-wrap: nowrap;
    }

    .track-name {
        font-size: 14px;
        font-weight: bold;
    }

    .track-artist {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
    }
</style>
