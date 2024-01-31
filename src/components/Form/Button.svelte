<script>
    export let disabled=false;
</script>
<div class="mt-6 text-right">
    <button type="submit" {disabled} class="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
      <slot>Fallback</slot>
    </button>
</div>