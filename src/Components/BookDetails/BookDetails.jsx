import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksDataContext } from "../MainLayout/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBooks, saveBooksId, saveWishlist } from "../../Utility/Utility";
const BookDetails = () => {
  const books = useContext(BooksDataContext);
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
  const {
    bookId,
    image,
    review,
    author,
    bookName,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleReadButton = (bookId) => {
    saveBooksId(bookId);
  };
  const handleWishlistButton = (bookId) => {
    const booksId = getBooks();
    const isExist = booksId.find((bId) => bId === bookId);
    if (isExist) {
      return toast.error("You have finished reading this book");
    }
    saveWishlist(bookId);
  };
  return (
    <div className="lg:grid lg:grid-cols-2 mt-10 px-2 lg:px-0">
      <div className="flex justify-center">
        <img
          src={image}
          alt={bookName}
          className="lg:max-w-full lg:h-[600px] "
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4 mt-10 lg:mt-0">{bookName}</h1>
        <p className="text-[#131313CC] mb-5 font-medium text-xl workFont">
          By: {author}
        </p>
        <div className="border border-t-2 mb-5 " />
        <p className="text-[#131313CC] mb-5 font-medium text-xl workFont">
          {category}
        </p>
        <div className="border border-t-2 mb-6" />
        <p className="mb-6">
          <span className="font-bold text-[#131313]">Review:</span> {review}
        </p>
        <div className="flex gap-8 mb-6">
          <div>
            <h1 className="font-bold text-[#131313]">Tag</h1>
          </div>
          <div className="flex gap-2 ">
            {tags.map((tag, idx) => (
              <p
                key={idx}
                className="text-[#23BE0A] bg-[#23BE0A0D] w-max px-3 py-1 mr-1 mb-2 rounded-full font-medium workFont"
              >
                #{tag}
              </p>
            ))}
          </div>
        </div>
        <div className="border border-t-2 mb-5" />
        <div className="flex lg:gap-20 mb-10">
          <div className="space-y-2 w-full lg:w-max">
            <p className="text-[#131313B3]">Number of Pages:</p>
            <p className="text-[#131313B3]">Publisher:</p>
            <p className="text-[#131313B3]">Year of Publishing:</p>
            <p className="text-[#131313B3]">Rating:</p>
          </div>
          <div className="space-y-2">
            <p className="lg:ml-16 text-[#131313] font-semibold">
              {totalPages}
            </p>
            <p className="lg:ml-16 text-[#131313] font-semibold">{publisher}</p>
            <p className="lg:ml-16 text-[#131313] font-semibold">
              {yearOfPublishing}
            </p>
            <p className="lg:ml-16 text-[#131313] font-semibold">{rating}</p>
          </div>
        </div>
        <div className="flex gap-5 mb-6">
          <button
            onClick={() => handleReadButton(bookId)}
            className="font-semibold text-lg border-2 rounded-lg py-3 px-5"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlistButton(bookId)}
            className=" bg-[#50B1C9] lg:text-white  font-semibold text-lg  rounded-lg text-white py-3 px-5"
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;
