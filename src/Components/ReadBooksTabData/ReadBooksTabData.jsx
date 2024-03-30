import { useContext } from "react";
import { BooksDataContext } from "../MainLayout/MainLayout";
import { getBooks } from "../../Utility/Utility";
import ListedBookCard from "../ListedBookCard/ListedBookCard";
import { SortBooksIdContext } from "../ListedBooks/ListedBooks";

const ReadBooksTabData = () => {
  const books = useContext(BooksDataContext);
  const sortBtnContext = useContext(SortBooksIdContext);
  const readBooksId = getBooks();
  const filteredForReadBooks = books.filter((book) =>
    readBooksId.includes(book.bookId)
  );
  const [ratingBtn, pageSortBtn, publishYearBtn] = sortBtnContext;
  let displayBooks = filteredForReadBooks.slice();

  if(ratingBtn){
    displayBooks = displayBooks.sort((a, b) => b.rating - a.rating);
  }
  else if(pageSortBtn){
    displayBooks = displayBooks.sort((a, b) => b.totalPages - a.totalPages)
  }
  else if(publishYearBtn){
    displayBooks = displayBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  }
  else{
    displayBooks = filteredForReadBooks;
  }

  return (
    <div>
      {displayBooks.map((filteredForReadBook, idx) => (
        <ListedBookCard
          key={idx}
          filteredForReadBook={filteredForReadBook}
        ></ListedBookCard>
      ))}
    </div>
  );
};

export default ReadBooksTabData;
