<script>
  // export data for the tab component
  export let metadata = {
    label: "Home",
    icon: "􀎞",
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

  .code {
    font-family: monospace;
    font-size: 0.8rem;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
  }
</style>

<main data-hidden={hidden}>
  <h1>Fragola</h1>
  <p>This is the home page of the music player.</p>
  This tab was opened at <span class="code">{new Date().toLocaleString()}.</span>
</main>