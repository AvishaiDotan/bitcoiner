import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signup as dispatchSignup } from '../store/actions/user.actions'

export const SignupPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userOuth, setUserOuth] = useState({})


    const signup = (ev) => {
        dispatch(dispatchSignup({...userOuth}))
        navigate('/user')
    }

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }

        let tempUserOuth = {...userOuth }
        tempUserOuth = {...tempUserOuth, [field]: value }
        setUserOuth(tempUserOuth)
    }
    return (
        <section className='signup-container'>
            <div className="actions-container">
                <span onClick={() => navigate(-1)}>Back</span>
            </div>
            <img
                className="user-img"
                src={`https://robohash.org/set_set4/1sc19213ds0`}
                alt=""
            />
            <form className='form'>
                <label htmlFor="name">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={userOuth.username}
                        name="username"
                        id="username"
                        placeholder='Username'
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="text"
                        onChange={handleChange}
                        value={userOuth.password}
                        name="password"
                        id="password"
                        placeholder='Password'
                    />
                </label>
                <button onClick={(ev) => signup(ev)}>Signup</button>
            </form>
        </section>
    )
}