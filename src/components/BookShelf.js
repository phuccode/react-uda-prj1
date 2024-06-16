import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import BookShelves from "./BookShelves";
import Add from "./Add";

const Shelf = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      setBooks((prevBooks) =>
        prevBooks.filter((b) => b.id !== book.id).concat([book])
      );
    });
  };

  const compartments = [
    { type: "currentlyReading", title: "In Progress" },
    { type: "wantToRead", title: "Next Up" },
    { type: "read", title: "Completed" },
  ];

  return (
    <div>
      <div className="list-books-content">
        {books.length > 0 && (
          <div>
            {compartments.map((compartment, index) => {
              const compartmentBooks = books.filter(
                (book) => book.shelf === compartment.type
              );
              return (
                <div className="bookshelf" key={index}>
                  <h2 className="bookshelf-title">{compartment.title}</h2>
                  <BookShelves
                    key={index}
                    books={compartmentBooks}
                    compartmentsList={compartments}
                    changeShelf={changeShelf}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Add currentBk={books} />
    </div>
  );
};

export default Shelf;