import React from 'react'
import BookShelf from './BookShelf'

export default function BookHeader() {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>A Book Tracking App</h1>
            </div>
            <BookShelf />
        </div>
    )
}