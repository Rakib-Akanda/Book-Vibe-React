import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import ReadToPage from "../Components/ReadToPage/ReadToPage";
import BookDetails from "../Components/BookDetails/BookDetails";
import ReadBooksTabData from "../Components/ReadBooksTabData/ReadBooksTabData";
import WishlistBook from "../Components/WishlistBook/WishlistBook";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("/Books.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
            {
                path: '',
                element: <ReadBooksTabData></ReadBooksTabData>
            },
            {
                path: 'wishlistBook',
                element: <WishlistBook></WishlistBook>
            }
        ]
      },
      {
        path: "/readToPage",
        element: <ReadToPage></ReadToPage>,
      },
      {
        path: '/signIn',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ],
  },
]);

export default router;
