import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { createContext } from "react";

export const BooksDataContext = createContext([]);

const MainLayout = () => {
  const books = useLoaderData();
  return (
    <BooksDataContext.Provider value={books}>
      <div className="max-w-[1170px] mx-auto">
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </BooksDataContext.Provider>
  );
};

export default MainLayout;
