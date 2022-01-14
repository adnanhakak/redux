import BUY_ICECREAM from "./icecreamActions";

const initialState = {
    numOfIcecream: 20
}

function iceCreamReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        default: return state;

    }
}

export default iceCreamReducer;