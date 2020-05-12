import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = {
    errMess: null,
    feedbacks: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACK: 
            var feedback = action.payload;
            feedback.id = state.feedbacks.length;
            feedback.date = new Date().toISOString();
            return {...state, feedback: state.feedbacks.concat(feedback)};
        
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, isLoading: false, errMess: null, feedbacks: action.payload}
        
        case ActionTypes.FEEDBACK_FAILED:
            return {...state, isLoading: false, errMess: action.payload, feedbacks: []}
        
        default: 
            return state;
    }
}