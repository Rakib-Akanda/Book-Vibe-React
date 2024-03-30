import { useContext } from "react";
import Banner from "../Banner/Banner";
import BooksCardSection from "../Books/BooksCardSection";
import { BooksDataContext } from "../MainLayout/MainLayout";

const Home = () => {
  const books = useContext(BooksDataContext);
  return (
    <div>
      <Banner bookIxd0={books[0]}></Banner>
      <div className="my-16">
        <h1 className="text-center font-bold text-4xl">Books</h1>
        <div className="md:grid lg:grid-cols-3 gap-6 mt-8 px-2 ">
          {books.map((book, idx) => (
            <BooksCardSection key={idx} book={book}></BooksCardSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
