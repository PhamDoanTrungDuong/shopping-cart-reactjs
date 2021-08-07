import * as Message from "./../constants/Message"
import * as types from "./../constants/ActionType"

var initState = Message.MSG_WELCOM;

const message = (state = initState, action) => {
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }  
}

export default message;