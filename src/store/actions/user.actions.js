
export function spendBalance(amount) {
    return async (dispatch) => {
        dispatch({ type: 'SPEND_BALANCE', amount })
    }
}

export function signup(user) {
    return async (dispatch) => {
        dispatch({ type: 'SIGNUP', user })
    }
}

export function logout() {
    return async (dispatch) => {
        dispatch({ type: 'LOGOUT' })
    }
}

export function addMove(move) {
    return async (dispatch) => {
        dispatch({ type: 'ADD_MOVE', move })
    }
}