import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import { logout } from '../store/actions/user.actions'

export const User = () => {
    
    const user = useSelector(state => state.userModule.loggedInUser)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (!user) navigate('/signup')

    const [bitcoins, setBitcoins] = useState(null)

    useEffect(() => {
        getBitcoins()
    }, [])

    const getBitcoins = async () => {
        try {
            let bitcoins = await bitcoinService.getBitcoin(user.coins)
            if (bitcoins) bitcoins = Math.round(bitcoins)
            setBitcoins(bitcoins)
        } catch (err) {
            console.log(err)
        }
    }

    const handleLogout = () => {
        dispatch(logout())
        navigate(-1)
    }

    return (
        <section className='user-details'>
            <div className='actions-container flex justify-between p-i-5'>
                <button onClick={() => navigate('/contacts')}>Back</button>
                <button onClick={() => handleLogout()}>Logout</button>
            </div>
            <img
                className="user-img"
                src={`https://robohash.org/set_set5/${user._id}`}
                alt=""
            />
            <section className='user-data'>
                <h3>Name: <span>{user.username}</span></h3>
                <h3>Coins: <span>{user.coins}</span></h3>
                <h3>Bitcoin: <span>{bitcoins}</span></h3>
            </section>

        </section>
    )
}