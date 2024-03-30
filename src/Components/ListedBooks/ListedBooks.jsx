import { createContext, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

export const SortBooksIdContext = createContext([]);

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [ratingBtn, setRatingBtn] = useState(false);
  const [pageSortBtn, setPageSortBtn] = useState(false);
  const [publishYearBtn, setPublishYearBtn] = useState(false);
  const sortBtnArray = [ratingBtn, pageSortBtn, publishYearBtn];
  return (
    <div className="mt-6 lg:mt-8">
      <div>
        {/* Header */}
        <div className="bg-[#1313130D] rounded-2xl py-6 lg:py-8">
          <h1 className="font-bold text-2xl text-center">Books</h1>
        </div>
        {/* Sort by    */}
        <div className="dropdown dropdown-bottom flex justify-center mt-8">
          <div
            tabIndex={0}
            role="button"
            className="btn  bg-[#23BE0A]  text-white m-1 hover:bg-[#23BE0A] text-xl"
          >
            Sort By <IoMdArrowDropdown className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => {
                setRatingBtn(true);
                setPageSortBtn(false);
                setPublishYearBtn(false);
              }}
            >
              <a>Rating</a>
            </li>
            <li
              onClick={() => {
                setPageSortBtn(true);
                setRatingBtn(false);
                setPublishYearBtn(false);
              }}
            >
              <a>Number of Pages</a>
            </li>
            <li
              onClick={() => {
                setPageSortBtn(false);
                setRatingBtn(false);
                setPublishYearBtn(true);
              }}
            >
              <a>Publish Year</a>
            </li>
          </ul>
        </div>
        {/* Tab section */}
        <div className="mt-10 flex items-center justify-center lg:justify-start overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-800 ">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center px-5 py-3 space-x-2 ${
              tabIndex === 0
                ? "border border-b-0 border-gray-600"
                : "border-b  border-gray-600"
            } rounded-t-lg  text-gray-900`}
          >
            <span className="font-semibold">Read Books</span>
          </Link>
          <Link
            to={`wishlistBook`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0 " : "border-b"
            } rounded-t-lg border-gray-600  text-gray-900`}
          >
            <span className="font-semibold">Wishlist Books</span>
          </Link>
        </div>
      </div>
      <div>
        <SortBooksIdContext.Provider value={sortBtnArray}>
          <Outlet></Outlet>
        </SortBooksIdContext.Provider>
      </div>
    </div>
  );
};

export default ListedBooks;
