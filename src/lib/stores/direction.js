import { derived } from "svelte/store";
import { settings } from "./settings";
import { location } from "./location";


const direction = derived([settings,location], ([$settings,$location],set)=>{
    console.log($settings,$location);
    set($settings.language==='ar'?'rtl':'ltr');
    return $settings.language==='ar'?'rtl':'ltr';
});

export default direction;