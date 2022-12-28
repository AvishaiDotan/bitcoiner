import { Search } from 'react-bootstrap-icons';

import { useFormRegister } from '../store/customHooks/useFormRegister';

export const ContactFilter = (props) => {
    const { filterBy, onChangeFilter } = props
    const [register] = useFormRegister({ ...filterBy }, onChangeFilter)

    const handleRef = (elInput) => {
        elInput?.focus()
    }

    return (
        <section className='contact-filter flex justify-center'>
            <div className='contact-filter flex justify-center'>
                <div className="wrap contact-filter flex justify-center">
                    <div className="search">
                        <section className='search-filter'>
                            <input className="searchTerm" ref={handleRef} {...register('name', 'text')} placeholder="Who you are looking for?" />
                            <button type="submit" className="searchButton">
                                <Search />
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )

}
