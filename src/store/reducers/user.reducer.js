
import { userService } from "../../services/user.service"

const INITIAL_STATE = {
    loggedInUser: userService.getUser()
}


export function userReducer(state = INITIAL_STATE, action) {
    const { loggedInUser } = state
    switch (action.type) {
        case 'ADD_MOVE':
            userService.addMove(action.move)
            return {
                ...state,
                loggedInUser: { 
                    ...loggedInUser, 
                    coins: loggedInUser.coins - action.move.amount, 
                    moves: [...loggedInUser.moves, action.move] 
                }
            }
        case 'SIGNUP':
            let user = { ...action.user, coins: (Math.random() * 1000000).toFixed(), moves: [] }
            user = userService.signUp({...user})
            return {
                ...state,
                loggedInUser: { ...user }
            }
        case 'LOGOUT':
            userService.logout()
            return {
                ...state,
                loggedInUser: null
            }
        default:
            return state;
    }

}