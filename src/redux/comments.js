import { COMMENTS } from '../shared/comments';

//reducer that manages comments 
export const Comments = (state = COMMENTS, action) => {
    switch(action.type){
        default:
            return state;
    }
}