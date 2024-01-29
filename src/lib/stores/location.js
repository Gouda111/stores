import { readable  } from "svelte/store";

export const location = readable(null, (set)=>{
    let watchId;
    if (navigator.geolocation){
        watchId=navigator.geolocation.watchPosition(
            (pos)=>{
                const {latitude,longitude}=pos.coords;
                set({latitude,longitude})
                console.log(pos);
            },
            (error)=>{
                set({error})
                console.log(error);
            }
        );
    }
    return ()=>{
        if(navigator.geolocation){
            navigator.geolocation.clearWatch(watchId);
        }
        set(null);
    }

});
 
export const getLocation =()=>{
    const {set} =readable;
    return {
        set,
        reset : () =>{
            console.log('bro reset');
            set(null);
        }
    }
}
