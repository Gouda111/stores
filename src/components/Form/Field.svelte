<script>
	import { getContext, onMount } from 'svelte';
	import {v4 as uuid} from 'uuid';
    import formKey from './formkey';

    export let type = 'text';
	export let label;
	export let name;
	export let validate = undefined;
	export let placeholder;
    const id=uuid();
    let isDirty=false;
	let inputClasess = `peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none`;
    const formStore =getContext(formKey);
    onMount(() =>{
        if(validate && validate($formStore.values[name])){
            $formStore.errors[name]=validate($formStore.values[name],label)
        }
    })
</script>

<div class="mt-2">
	{#if label}
		<label for={id} class="block text-sm font-medium text-slate-700 capitalize">{label}</label>
	{/if}
	{#if type}
		<div class="mt-1">
			<input class={inputClasess} 
                {placeholder} {type} {name} {id} 
                value={$formStore.values[name] || ''} 
                on:input={(e)=>{
                    isDirty=true;
                    const value=e.currentTarget.value;
                    if(validate && validate(value)){
                        $formStore.errors[name]=validate(value,label);
                    }else{
                        delete $formStore.errors[name];
                    }
                    $formStore.values[name]=value
                    
                    }}
                />
			{#if $formStore.errors[name] && (isDirty || $formStore.showErrors)}
				<p class="mt-2 mb-0 text-pink-600 text-sm">{$formStore.errors[name]}</p>                
			{/if}
		</div>
	{/if}
</div>
