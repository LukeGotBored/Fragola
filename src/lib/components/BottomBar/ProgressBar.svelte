<script>
    export let currentTime = "0:00";
    export let duration = "0:00";
    export let progress = 15; // Progress in percentage
</script>

<div id="progress-bar-wrapper">
    <div id="progress-bar-timer-current">{currentTime}</div>
    <div id="progress-bar">
        <div id="progress-bar-fill" style="width: {progress}%;">
            <div id="progress-bar-fill-handle"></div>
        </div>
    </div>
    <div id="progress-bar-timer-end">{duration}</div>
</div>

<style>
    #progress-bar-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        box-sizing: border-box;
    }

    *{
        transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    #progress-bar-timer-current,
    #progress-bar-timer-end {
        font-size: 12px;
    }

    #progress-bar {
        flex-grow: 1;
        height: 5px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        position: relative;
        box-sizing: border-box;
    }

    #progress-bar-fill {
        height: 100%;
        background-color: #fff;
        border-radius: 5px;
        position: relative;
    }

    #progress-bar-fill-handle {
        width: 10px;
        height: 10px;
        background-color: #fff;
        opacity: 0;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        box-sizing: border-box;
    }

    #progress-bar-wrapper:hover #progress-bar-fill-handle {
        opacity: 1;
    }

    #progress-bar-wrapper:hover #progress-bar-fill {
        background-color: var(--accent-color);
    }
</style>
