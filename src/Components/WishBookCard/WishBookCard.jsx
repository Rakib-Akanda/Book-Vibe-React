import PropTypes from 'prop-types';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { RiGroupLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const WishBookCard = ({filteredForWishBook}) => {
    const {
        tags,
        author,
        bookName,
        category,
        rating,
        image,
        bookId,
        publisher,
        yearOfPublishing,
        totalPages,
      } = filteredForWishBook;
    return (
        <div className="lg:my-10 my-3 p-1">
        <div className="lg:flex lg:gap-10  border border-2-[#13131326] rounded-xl p-3 lg:p-6">
          <div className="bg-[#1313130D] mb-5 lg:mb-0 px-12 py-8 rounded-2xl flex flex-col justify-center items-center">
            <img src={image} alt={bookName} className="rounded-xl max-h-60" />
          </div>
          <div className="space-y-4 w-full">
            <div>
              <h1 className="text-2xl font-bold">{bookName}</h1>
            </div>
            <div>
              <p className="text-[#131313CC] font-medium">By: {author}</p>
            </div>
            {/* tags */}
            <div className="lg:flex lg:items-center gap-8 mb-6">
              <div className="flex gap-2 items-center mb-6 lg:mb-0">
                <h1 className="font-bold text-[#131313]">Tag</h1>
                {tags.map((tag, idx) => (
                  <p
                    key={idx}
                    className="text-[#23BE0A] bg-[#23BE0A0D] lg:w-max px-3 py-1 mr-1 rounded-full font-medium workFont"
                  >
                    #{tag}
                  </p>
                ))}
              </div>
              <div className="text-[#131313CC] workFont flex items-center gap-2">
                <IoLocationOutline className="h-5 w-5" />
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
            <div className="lg:flex lg:gap-5">
              <div className="flex items-center gap-2">
                <RiGroupLine />
                <p className="text-[#13131399]">Publisher: {publisher}</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLibraryBooks />
                <p className="text-[#13131399]">Page: {totalPages}</p>
              </div>
            </div>
            <div className="border-t-2 w-full" />
            <div className="lg:flex lg:gap-3 lg:flex-row flex flex-col gap-2">
              <div>
                <button className="px-5 py-3  bg-[#328EFF26] rounded-full text-[#328EFF]">
                  Category: {category}
                </button>
              </div>
              <div>
                <button className="px-5 py-3 bg-[#FFAC3326] rounded-full text-[#FFAC33]">
                  Rating: {rating}
                </button>
              </div>
              <Link to={`/bookDetails/${bookId}`}>
                <button className="px-5 py-3 bg-[#23BE0A] rounded-full text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

WishBookCard.propTypes ={
    filteredForWishBook: PropTypes.object.isRequired
}
export default WishBookCard;