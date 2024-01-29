<script>
	import { settings } from '../stores/settings';
	import { location, getLocation } from '../stores/location';
    import direction  from '../stores/direction'
	$: fontSize = $settings.fontSize ? $settings.fontSize : '12';
	$: document.querySelector('body').style.fontSize = fontSize + 'px';
</script>

<h2>Home</h2>
{#if $location && !$location.error}
	<h1>
		Latitude
		<strong class="red-400">{$location.latitude}</strong>
	</h1>
	<h1>
		Longitude
		{$location.longitude}
	</h1>
{/if}
{#if $location && $location.error}
	<p>{$location.error.message}</p>
	<button on:click={getLocation.reset}> Allow location</button>
{/if}
<h4>
	Color scheme
	{$settings.colorScheme}
</h4>
<h4>
	Language
	{$settings.language}
</h4>
<h4>
	Font size
	{$settings.fontSize}
</h4>
<h4>Direction {$direction}</h4>
<button on:click={settings.decrement}>-</button>
<button on:click={settings.toggoleLang}> Toggole Language</button>
<button on:click={settings.increment}>+</button>
<button on:click={settings.reset}>Reset</button>
