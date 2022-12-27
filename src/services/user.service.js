import { storageService } from '../services/storage.service'
import { makeId } from '../services/util.service'


const userKey = 'user'


export const userService = {
    getUser,
    signUp,
    addMove
};


let gUser = storageService.load(userKey) || {
    name: "Ochoa Hyde",
    coins: 10000000,
    password: '123456',
    moves: [],
};

function getUser() {
    return gUser
}

function signUp(user) {
    gUser = user
    gUser._id = makeId()
    gUser.coins = Math.round(Math.random() * 100000)

    storageService.store(userKey, user);
}

function addMove(move) {
    gUser.moves.push(move);
    gUser.coins -= move.amount;
    storageService.store(userKey, gUser) 
}
