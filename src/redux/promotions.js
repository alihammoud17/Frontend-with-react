import { PROMOTIONS } from '../shared/promotions';

//reducer that manages promotions 
export const Promotions = (state = PROMOTIONS, action) => {
    switch(action.type){
        default:
            return state;
    }
}