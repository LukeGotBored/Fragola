<script>
    export let playPauseIcon = "􀊄";
    export let previousIcon = "􀊎";
    export let nextIcon = "􀊐";
    export let shuffleIcon = "􀊝";
    export let repeatIcon = "􀊞";

    export const onPlayPause = () => {};
    export const onPrevious = () => {};    
    export const onNext = () => {};
    export const onShuffle = () => {};
    export const onRepeat = () => {};
</script>

<div class="media-controls">
    <div class="icon" id="play-pause" title="Play/Pause">
        {playPauseIcon}
    </div>
    <div class="icon" id="previous" title="Previous">{previousIcon}</div>
    <div class="icon" id="next" title="Next">{nextIcon}</div>
    <div class="icon" id="shuffle" title="Shuffle">{shuffleIcon}</div>
    <div class="icon" id="repeat" title="Repeat">{repeatIcon}</div>
</div>

<style>
    .media-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        box-sizing: border-box;
    }

    .icon {
        font-size: 16px;
        height: 20px;
        width: 20px;
        aspect-ratio: 1/1;
        background-color: transparent;
        border-radius: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        /* bouncy bezier */
        transition: transform 0.4s cubic-bezier(0.18,0.89,0.32,1.27);
    }

    .icon:hover {
        transform: scale(1.2);
    }

    #play-pause {
        background-color: #b448b8;
        border-radius: 15px;
        aspect-ratio: 1/1;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
</style>
