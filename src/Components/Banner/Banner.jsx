import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Banner = ({ bookIxd0 }) => {
  return (
    <div className="bg-[#1313130D] w-full lg:px-32 lg:py-12 lg:flex lg:items-center lg:justify-between rounded-3xl lg:mt-10 mt-5">
      <div className="text-center pt-10">
        <h1 className="lg:text-[55px] text-3xl font-bold leading-tight">
          Books to freshen <br /> up your bookshelf
        </h1>
        <div className="mt-10">
          <Link to={'/listedBooks'} className="bg-[#23BE0A] lg:bg-[#23BE0A] lg:text-white lg:mr-4 mr-2  rounded-lg text-white  font-semibold text-lg py-3 px-5 ">
            View The List
          </Link>
        </div>
      </div>
      <div>
        <img
          className="w-80 h-96 mt-10 lg:mt-0 mx-auto lg:mx-0"
          src={bookIxd0.image}
          alt={bookIxd0.bookName}
        />
      </div>
    </div>
  );
};

Banner.propTypes = {
  bookIxd0: PropTypes.object.isRequired
};
export default Banner;
