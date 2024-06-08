
<script>
    export let settingsIcon = "􀍟";

    export const onPlaylist = () => {};
    export const onLyrics = () => {};
</script>

<div class="system-controls">
    <div class="icon" id="settings" title="Settings">{settingsIcon}</div>
</div>

<style>
    .system-controls {
        display: flex;
        align-items: center;
        flex-direction: row;
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
