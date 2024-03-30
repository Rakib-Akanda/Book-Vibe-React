import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import '../../index.css';
import { NavLink } from "react-router-dom";
const BooksCardSection = ({book}) => {
    const {tags, author, bookName, category, rating, image, bookId} = book;
  return (
    <NavLink to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card lg:w-full mb-4 lg:mb-0 bg-base-100 border border-[#13131326]">
          <figure className="px-7 pt-7">
            <img
              src={image}
              alt={bookName}
              className="rounded-xl max-h-52"
            />
          </figure>
          <div className="px-7 py-7">
            <div className="flex gap-2">

                {
                    tags.map((tag, idx) => <p key={idx} className='text-[#23BE0A] bg-[#23BE0A0D] px-3 py-1 mb-2 rounded-full'>{tag}</p>)
                }

                
            </div>
            <h2 className="font-bold text-2xl mt-1 lg:mt-2">{bookName}</h2>
            <p className='text-[#131313CC] font-medium my-5'>By : {author}</p>
            <div className='border-t-2 border-dashed'/>
            <div className="flex justify-between mt-5 font-medium">
                <p className="text-[#131313CC]">{category}</p>
                <p className="flex items-center gap-2 text-[#131313CC]">{rating} <FaRegStar className="text-[#131313CC] font-medium"></FaRegStar></p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

BooksCardSection.propTypes = {
    book: PropTypes.object.isRequired
}
export default BooksCardSection;
