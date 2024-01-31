<script>
	import { createEventDispatcher, setContext } from "svelte";
    import formKey from './formkey';
	import { writable } from "svelte/store";
    export let initialvalues={};
    export let errors={};
    const formStore =writable({values:initialvalues,errors:errors, showErrors:false})
    setContext(formKey, formStore);
    const dispatch=createEventDispatcher();
</script>
<pre>
    {JSON.stringify($formStore,null,2)}
</pre>
<div class="flex flex-col items-center">
    <form on:submit|preventDefault={()=>{
        if(Object.keys($formStore.errors).length===0){
            dispatch('formData', $formStore.values)
        }else{
            $formStore.showErrors=true;
        }
    }}>
        <slot hasErrors= {Object.keys($formStore.errors).length>0}/>
    </form>
</div>