import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate()
    return (
        <section className='home'>
            <h4>Bitcoin Exchange App</h4>
            <p>Our <span>Bitcoin Exchange App</span> is the ultimate tool
                for managing and tracking your cryptocurrency portfolio. With <span>real-time market updates</span> and the ability to exchange coins directly within the app, <span>you'll never miss a beat</span> in the dynamic world of Bitcoin. Our user-friendly interface makes it easy to keep track of your holdings, set price alerts, and make informed decisions about your investments. Whether you're a seasoned pro or new to the world of Bitcoin, <span>our app has everything you need to stay on top of the market</span> and make the most of your coins.</p>
            <div className='flex justify-end'>
                <button onClick={() => navigate('/contacts')}>Get Started</button>
            </div>
        </section>
    )
}
