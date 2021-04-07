import { DISHES } from '../shared/dishes';

//reducer that manages dishes 
export const Dishes = (state = DISHES, action) => {
    switch(action.type){
        default:
            return state;
    }
}