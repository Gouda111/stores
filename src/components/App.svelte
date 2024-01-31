<script>
	import { onMount } from "svelte";
	import Home from "../lib/pages/Home.svelte";
	import Settings from "../lib/pages/Settings.svelte";
	import Context from "../lib/pages/Context.svelte";

    let page;
    function onRouteChange(){
        const path=window.location.hash.slice(1);
        if (path==="/"){
            page='home';
        }else if(path==='/settings'){
            page = 'settings'
        }else if(path==='/context'){
            page = 'context'
        }else{
            window.location.hash="/"
        }
    }
    onMount(onRouteChange);
</script>
<svelte:window on:hashchange={onRouteChange}></svelte:window>
    

<nav class="flex gap-3 bg-black flex justify-center">
    <a href="#/" class="pointer text-lg text-white hover:opacity-80" >Home</a>
    <a href="#/settings" class="pointer text-lg text-white hover:opacity-80">Settings</a>
    <a href="#/context" class="pointer text-lg text-white hover:opacity-80">Login</a>
</nav>

{#if page==='home'}
    <Home />
{:else if page==='settings'}
    <Settings />
{:else if page==='context'}
    <Context />
{/if}