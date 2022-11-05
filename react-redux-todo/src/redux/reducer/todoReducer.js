import { ADD_TODO } from "../action/todoAction"


const initialState ={
    data: ["Belajar redux", "Redux itu gampang"]
}

export default function todoReducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            console.log(action.payload)
            return{
                data: [...state.data, action.payload]
            }
        default: return state
    }
}