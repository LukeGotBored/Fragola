<script>
    // export data for the tab component
    export let metadata = {
        label: "Error",
        icon: "􀎞",
        hidden: true
    };

    export let hidden = true;
</script>


<style>
    main {
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        margin-bottom: 5rem;
        opacity: 1;
        pointer-events: all;
        transform: translateX(0);
        transition: all 0.2s ease-in-out;
        box-sizing: border-box;
    }

    main[data-hidden="true"] {
        opacity: 0;
        pointer-events: none;
        transform: scale(0.95);
    }

    h1 {
        font-size: 2rem;
        margin: 0;
    }

    p {
        font-size: 1rem;
    }
</style>

<main data-hidden={hidden}>
    <h1>Whoops!</h1>
    <p>Something went wrong. Please try again later.</p>
</main>