<script>
    import PlaybackControls from "./BottomBar/PlaybackControls.svelte";
    import ProgressBar from "./BottomBar/ProgressBar.svelte";
    import AdditionalControls from "./BottomBar/AdditionalControls.svelte";

    let currentTime = "0:00";
    let duration = "4:58";
    let progress = 15;

    const handlePlayPause = () => {
        console.log("Play/Pause clicked");
    };

    const handlePrevious = () => {
        console.log("Previous clicked");
    };

    const handleNext = () => {
        console.log("Next clicked");
    };

    const handleShuffle = () => {
        console.log("Shuffle clicked");
    };

    const handleRepeat = () => {
        console.log("Repeat clicked");
    };

    const handlePlaylist = () => {
        console.log("Playlist clicked");
    };

    const handleLyrics = () => {
        console.log("Lyrics clicked");
    };
</script>

<div class="bottom-bar">
    <!-- Media controls -->
    <div class="left-side">
        <PlaybackControls
            onPlayPause={handlePlayPause}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onShuffle={handleShuffle}
            onRepeat={handleRepeat}
        />
    </div>
    <div class="middle-section">
        <ProgressBar {currentTime} {duration} {progress} />
    </div>
    <div class="right-side">
        <AdditionalControls
            onPlaylist={handlePlaylist}
            onLyrics={handleLyrics}
        />
    </div>
</div>

<style>
    .bottom-bar {
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5rem;
        width: 100vw;

        background-color: #1e1e1e;
        color: white;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        gap: 10px;
    }

    .left-side {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .middle-section {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .right-side {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
</style>
