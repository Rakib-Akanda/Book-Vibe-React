import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-3"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-[#23BE0A] text-[#23BE0A] px-4 py-2 rounded-lg"
                    : "text-[#131313CC] border-none px-4 py-2"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/listedBooks"
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-[#23BE0A] text-[#23BE0A] px-4 py-2 rounded-lg"
                    : "text-[#131313CC] border-none px-4 py-2"
                }
              >
                Listed Books
              </NavLink>
              <NavLink
                to="/readToPage"
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-[#23BE0A] text-[#23BE0A] px-4 py-2 rounded-lg"
                    : "text-[#131313CC] border-none px-4 py-2"
                }
              >
                Pages to Read
              </NavLink>
            </ul>
          </div>
          <a className="font-bold text-xl lg:text-3xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-8 text-2xl items-center justify-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-2 border-[#23BE0A] text-[#23BE0A]  px-4 py-2 rounded-lg"
                  : "text-[#131313CC] border-none px-4 py-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "border-2 border-[#23BE0A] text-[#23BE0A]  px-4 py-2 rounded-lg"
                  : "text-[#131313CC] border-none px-4 py-2"
              }
            >
              Listed Books
            </NavLink>
            <NavLink
              to="/readToPage"
              className={({ isActive }) =>
                isActive
                  ? "border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg px-4 py-2"
                  : "text-[#131313CC] border-none px-4 py-2"
              }
            >
              Pages to Read
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/signIn' className="bg-[#23BE0A] lg:bg-[#23BE0A] lg:text-white lg:mr-4 mr-1  rounded-lg text-white  font-semibold text-lg px-1 lg:py-3 lg:px-5">
            Sign in
          </Link>
          <Link to='/signUp'className=" bg-[#59C6D2] lg:bg-[#59C6D2] lg:text-white  font-semibold text-lg  rounded-lg text-white px-1 lg:py-3 lg:px-5">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
