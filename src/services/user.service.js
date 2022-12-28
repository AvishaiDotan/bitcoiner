import { storageService } from '../services/storage.service'
import { makeId } from '../services/util.service'


const userKey = 'user'


export const userService = {
    getUser,
    signUp,
    addMove, 
    logout
};


let gUser = storageService.load(userKey) || null;

function getUser() {
    return gUser
}

function signUp(user) {
    gUser = user
    gUser._id = makeId()
    storageService.store(userKey, user);
    return user
}

function logout() {
    gUser = null
    localStorage.removeItem(userKey)
}

function addMove(move) {
    gUser.moves.push(move);
    gUser.coins -= move.amount;
    storageService.store(userKey, gUser) 
}
