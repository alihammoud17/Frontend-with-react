import { LEADERS } from '../shared/leaders';

//reducer that manages leaders 
export const Leaders = (state = LEADERS, action) => {
    switch(action.type){
        default:
            return state;
    }
}