import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Add(props) {

    const { currentBk } = props
    return (
        <div className='open-search'>
            <Link to={{
                pathname: '/search',
                state: {
                    booksFromHome: currentBk
                }
            }} />
        </div>
    )
}

Add.propTypes = {
    currentBk: PropTypes.array.isRequired
};