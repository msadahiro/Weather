import {FETCH_WEATHER} from '../actions/index'
export default function(state = [],action){
    switch (action.type){
        case FETCH_WEATHER:
        // NEVER MUTATE STATE.
        // this returns a new instance of state.
        // take all entries inside the array and insert into this array. [city,city,city]
        return [action.payload.data, ...state]
        // OR
        // return state.concat([action.payload.data])
    }
    return state;
}