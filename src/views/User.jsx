import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'

export class User extends Component {

    state = {
        bitcoin: null,
        user: null
    }

    componentDidMount() {
        this.loadUser()
    }

    async getBitcoin() {
        try {
            const bitcoin = await bitcoinService.getBitcoin(this.state.user.coins)
            this.setState({ bitcoin })
        } catch (err) {
            console.log(err)
        }
    }

    loadUser() {
        const user = userService.getUser()
        this.setState({ user }, this.getBitcoin)
    }

    render() {
        const { user } = this.state
        const { bitcoin } = this.state

        if (!user || !bitcoin) return <div>loading...</div>

        return (
            <section className='user-details'>
                <div className='actions-container flex justify-between p-i-5'>
                    <button onClick={() => this.props.history.goBack()}>Back</button>
                </div>
                <img
                    className="user-img"
                    src={`https://robohash.org/set_set5/${user._id}`}
                    alt=""
                />
                <section className='user-data'>
                    <h3>Name: <span>{user.name}</span></h3>
                    <h3>Coins: <span>{user.coins}</span></h3>
                    <h3>Bitcoin: <span>{bitcoin}</span></h3>
                </section>

            </section>
        )
    }
}

