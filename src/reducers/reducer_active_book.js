// state argument is not the app's state, but just the piece of state this reducer is taking care of
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payLoad;
    }
    return state
}