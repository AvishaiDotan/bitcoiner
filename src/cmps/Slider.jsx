import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { XLg } from 'react-bootstrap-icons';


export const Slider = (props) => {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    return (
        <section className="slider">
            
            <nav>
                <ul>
                    <XLg className='exit' onClick={() => props.setSlider()}/>
                    <NavLink to={'/contacts'}>Contacts</NavLink>
                    <NavLink to="/charts">Charts</NavLink>
                    <NavLink to="/contact/edit">Add Contact</NavLink>
                    {loggedInUser && <NavLink to="/user">User</NavLink>}
                    {!loggedInUser && <NavLink to="/signup">Signup</NavLink>}
                </ul>
            </nav>
        </section>
    )
}
