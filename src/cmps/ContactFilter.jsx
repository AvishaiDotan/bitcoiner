import { Component, createRef } from 'react'

import { Search } from 'react-bootstrap-icons';

export class ContactFilter extends Component {

    state = {
        filterBy: null
    }

    typeInputRef = createRef()

    componentDidMount() {
        const { filterBy } = this.props
        // this.setState({ filterBy: { ...filterBy } }, () => this.inputRef.current.focus())
        this.setState({ filterBy: { ...filterBy } })
    }

    handleRef = (elInput) => {
        elInput?.focus()
    }


    handleChange = ({ target }) => {
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


        this.setState(
            prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }),
            () => this.props.onChangeFilter({ ...this.state.filterBy })
        )

    }

    render() {
        const { filterBy } = this.state
        if (!filterBy) return <div>Loading...</div>

        const { name, type, minBatteryStatus, maxBatteryStatus } = filterBy
        return (
            <section className='contact-filter flex justify-center'>
                <div className='contact-filter flex justify-center'>
                    <div className="wrap contact-filter flex justify-center">
                        <div className="search">
                            <section className='search-filter'>
                                <input type="text" className="searchTerm" ref={this.handleRef} onChange={this.handleChange} value={name} name="name" id="name"  placeholder="Who you are looking for?" />
                                <button type="submit" className="searchButton">
                                    <Search/>
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
