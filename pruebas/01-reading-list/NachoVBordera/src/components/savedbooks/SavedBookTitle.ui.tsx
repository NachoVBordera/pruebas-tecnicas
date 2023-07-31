import { BookContext } from "../../context/BookContext";
import React from "react";
import { useBookContext } from "../../context/SavedContext";
import { Book } from "../../types";
function SavedBookTitleUi() {
  const { filteredBooks } = React.useContext(BookContext);
  const { books } = useBookContext();
  const isbnSaved = books.map((book) => book.ISBN);
  const filteredBooksToShow = filteredBooks.filter(
    (book: Book) => !isbnSaved.includes(book.book.ISBN)
  );
  return (
    <section className="SavedBookTitleUi">
      <section>
        <span>R</span>
        <span>E</span>
        <span>A</span>
        <span>D</span>
        <span>Y</span>
      </section>
      <section>
        <span>F</span>
        <span>O</span>
        <span>R</span>
      </section>
      <section>
        <span>U</span>
        <span>S</span>
        <span>E</span>
      </section>
      <section>
        <span>{filteredBooksToShow.length}</span>
      </section>
    </section>
  );
}

export default SavedBookTitleUi;
