import React, { Component } from 'react'

import { CaretRight, CaretLeft } from 'react-bootstrap-icons'

export class TransferFund extends Component {
    state = {
        fundOpts: [
            { label: 'Buy me a coffee ☕', value: 5 },
            { label: 'Buy me a dinner 🍝', value: 15 },
            { label: 'Buy me a game ticket 🎫', value: 25 },
            { label: 'Buy me a server 👨‍💻', value: 100 },
            { label: 'Buy me a plane ✈', value: 10000 },
            { label: 'Buy me a house 🏠', value: 500000 },
        ],

        currIdx: 0
    }

    setIdx = (diff) => {
        const { currIdx } = this.state
        if (currIdx + diff >= this.state.fundOpts.length || currIdx + diff < 0) return
        this.setState(({ currIdx }) => ({ currIdx: currIdx += diff }))
    }





    render() {
        const { fundOpts, currIdx } = this.state
        const amount = fundOpts[currIdx].value
        console.log(this);

        return (
            <section className='fund-section'>
                <div className='flex justify-between align-center'>
                    <CaretLeft className='flex justify-between align-center' onClick={() => this.setIdx(-1)}/>
                    <span onClick={() => this.props.moveFunds(amount)} title={'$' + amount} >{fundOpts[currIdx].label}</span>
                    <CaretRight className='flex justify-between align-center' onClick={() => this.setIdx(1)}/>
                </div>

            </section>
        )
    }
}

export default TransferFund