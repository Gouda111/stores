<script>
    import {settings} from '../stores/settings';
</script>

<h2>Settings</h2>
{$settings.colorScheme}

<button 
    type="button"
    on:click={()=>{
        $settings.colorScheme = $settings.colorScheme === 'dark' ? 'light':'dark'
    }}
>Toggle Theme</button>
<label for="">
    <input type="radio" name="colorScheme" value="dark" bind:group={$settings.colorScheme}>
    Dark
</label>

<label for="">
    <input type="radio" name="colorScheme" value="light" bind:group={$settings.colorScheme}>
    Light
</label>

{#if $settings.colorScheme==='dark'}
    <style>
        :root{
            background-color:#333;
            color:#fff;
            }
    </style>
{:else}
<style>
    :root {
        /* Remove the gray background */
        background: none;
        /* Just to make sure the page doesn't get too small when we remove the navbar
        * and there is no content to push it down */
        min-height: 100vh - 48px;
        }
</style>
{/if}