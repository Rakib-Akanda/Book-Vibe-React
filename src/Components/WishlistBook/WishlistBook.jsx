import { useContext } from "react";
import { BooksDataContext } from "../MainLayout/MainLayout";
import { getWishlist } from "../../Utility/Utility";
import WishBookCard from "../WishBookCard/WishBookCard";
import { SortBooksIdContext } from "../ListedBooks/ListedBooks";
const WishlistBook = () => {
    const wishlistBooks = useContext(BooksDataContext);
    const sortBtnContextWish = useContext(SortBooksIdContext);
    const wishBooksId = getWishlist();
    const filteredForWishBooks = wishlistBooks.filter(book => wishBooksId.includes(book.bookId));
    let displayBooks = filteredForWishBooks.slice();
    const [ratingBtn, pageSortBtn, publishYearBtn] = sortBtnContextWish;
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
        displayBooks = filteredForWishBooks;
      }
    return (
        <div>
            {
                displayBooks.map((filteredForWishBook, idx) => <WishBookCard key={idx} filteredForWishBook={filteredForWishBook}></WishBookCard>)
            }
        </div>
    );
};

export default WishlistBook;