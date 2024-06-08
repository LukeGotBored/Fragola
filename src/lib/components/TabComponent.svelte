<script>
    import { onMount } from 'svelte';
    // @ts-ignore
    import SystemControls from "./TabSystem/SystemControls.svelte";


    import Home from '$lib/pages/Home.svelte';
    import Test from '$lib/pages/Library.svelte';
    import Crash from '$lib/pages/Crash.svelte';

    let activeTab = { id: -1, label: "Error", icon: "􀎞", component: Crash };
    let tabs = [
        { id: 1, label: "Home", icon: "􀒽", component: Home },
        { id: 2, label: "Library", icon: "􀏭", component: Test },
        { id: 3, label: "Debug", icon: "􀍟", component: Crash}
    ];

    let history = [];

    onMount(() => {
        // @ts-ignore
        activeTab = tabs[0];
    });



    export function getTab() {
        return activeTab;
    }

    // @ts-ignore
    export function addTab(tab) {
        tabs.push(tab);
        // @ts-ignore
        activeTab = tabs[tabs.length - 1];
        tabs = tabs;
    }

    // ------------------------------------------------------------ //

    // @ts-ignore
    function setTab(tab) {
        if (tab.id === activeTab.id) return;
            activeTab = tab ? tab : tabs[0];
            history.push(activeTab);
        }

    // @ts-ignore
    function closeTab(tab) {
        const index = tabs.findIndex(t => t.id === tab.id); // Find the index of the tab to close
        if (index === -1) return; // If the tab to close is not found, do nothing

        if (tabs.length > 1) tabs.splice(index, 1); // Remove the tab from the array

        if (tabs.length === 0) {
            // If there are no tabs left, create a new tab
            addTab({ id: 0, label: "Home", icon: "􀒽", component: Home });
        } else if (activeTab.id === tab.id) {
            // If the active tab is being closed, select the next tab
            const nextIndex = index < tabs.length ? index : index - 1;
            // @ts-ignore
            activeTab = tabs[nextIndex];
        }

        // Update the tabs array
        tabs = tabs;
    }



    // CTRL + W to close tab
    window.addEventListener("keydown", (e) => {
        // based on the platform, it'll be either e.ctrlKey or e.metaKey
        e.preventDefault();
        if (e.key === "w" && (e.ctrlKey || e.metaKey)) {
            closeTab(activeTab);
        }
    });


    // CTRL + number to switch tabs
    window.addEventListener("keydown", (e) => {
        e.preventDefault();
        if((e.ctrlKey || e.metaKey) && e.key.match(/[0-9]/)) {
            const index = parseInt(e.key) - 1;
            if (index < tabs.length) {
                setTab(tabs[index]);
            }
        }
    });

    // middle click while hovering over a tab to close it
</script>

<div class="tab-component">
    <div class="tabs-wrapper" data-tauri-drag-region>
        {#each tabs as tab, index (tab.id)}
            <button 
                class="tab" 
                on:click={() => setTab(tab)} 
                data-active={activeTab && activeTab.id === tab.id}
                tabindex="0"
                on:auxclick|stopPropagation={() => closeTab(tab)}
            >
                <div class="icon">{tab.icon}</div>
                {tab.label}
                
                <button class="close-button" on:click|stopPropagation={() => closeTab(tab)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </button>
        {/each} 

        <!-- right side buttons -->
        <!-- <div class="tab-right-side">
            <SystemControls />
        </div> -->
    </div>

    <div class="tab-content">
        {#each tabs as tab (tab.id)}
            <svelte:component this={tab.component} hidden={activeTab.id !== tab.id} />
        {/each}
    </div>
</div>

<style>
    .tab-component {
        display: flex;
        flex-direction: column;
        height: 100% - 5rem;
        width: 100%;
    }

    .tabs-wrapper {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 3rem;
        padding: 0 25px;
        padding-left: 5.1rem;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .tab {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: max-content;
        height: 100%;
        padding: 0 1rem;
        min-width: 10rem;
        gap: 0.5rem;
        border: none;
        border-bottom: 2px solid transparent;
        background-color: rgba(0, 0, 0, 0);
        color: white;
        font-size: 1rem;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-wrap: nowrap;
        overflow: hidden;
        transition: width 0.2s ease-in-out, border-bottom 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }

    .tab:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }

    .tab[data-active="true"] {
        background-color: rgba(0, 0, 0, 0.4);
        border-bottom: 2px solid var(--accent-color);
    }

    .tab[data-active="true"]:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }

    .tab > .icon {
        font-size: 1rem;
        line-height: 0;
    }

    .tab > .close-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: max-content;
        height: max-content;
        position: absolute;
        right: 0.5rem;
        opacity: 0;

        background-color: rgba(0, 0, 0, 0);
        border: none;
        cursor: pointer;
        transition: opacity 0.2s ease-in-out;
    }

    /* accessibility */
    .tab > .close-button:focus {
        opacity: 1;
    }

    .tab:hover > .close-button {
        opacity: 1; 
    }

    .tab-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
