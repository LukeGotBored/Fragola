<script>
    import NowPlayingData from "./NowPlayingData.svelte";

    export let playlistIcon = "􀑬";
    export let lyricsIcon = "􀌴";
    export let fullscreenIcon = "􀅊";

    export const onPlaylist = () => {};
    export const onLyrics = () => {};
</script>

<div class="additional-controls">
    <div class="icon" id="playlist" title="Playlist">{playlistIcon}</div>
    <div class="icon" id="lyrics" title="Lyrics">{lyricsIcon}</div>
    <NowPlayingData />
    <div class="icon" id="fullscreen" title="Fullscreen">{fullscreenIcon}</div>
</div>

<style>
    .additional-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        box-sizing: border-box;
    }

    .icon {
        font-size: 16px;
        background-color: transparent;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.4s cubic-bezier(0.18,0.89,0.32,1.27);
    }

    .icon:hover {
        transform: scale(1.2);
    }

</style>
