import { toast } from "react-toastify";

// read id
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("readBooks");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBooksId = (bookId) => {
  let books = getBooks();
  const isExist = books.find((b) => b === bookId);
  if (isExist) {
    return toast.error("You have finished reading this book");
  }
  books.push(bookId);
  localStorage.setItem("readBooks", JSON.stringify(books));
  toast.success("Successfully Added In Read Books");
};

// wishlist id
export const getWishlist = () => {
  let books = [];
  const storedBooks = localStorage.getItem("wishlist");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveWishlist = (bookId) => {
  let wishlistId = getWishlist();
  const isExist = wishlistId.find((w) => w === bookId);
  if (isExist) {
    return toast.error("Is exists in wishlist");
  }
  wishlistId.push(bookId);
  localStorage.setItem("wishlist", JSON.stringify(wishlistId));
  toast.success("Successfully Added in Wishlist");
};


// sort

function customDescendingSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] < arr[j]) {
              // Swap elements if they are in the wrong order
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}


export const readBooksSort = () => {
  const readBooksSort = getBooks();
  const sortedArr = customDescendingSort(readBooksSort);
  localStorage.setItem('readBookSort', JSON.stringify(sortedArr))
}
export const getReadBooksSort = () => {
  let sort = [];
  const readBookSort = localStorage.getItem("readBookSort");
  if (readBookSort) {
    sort = JSON.parse(readBookSort);
  }
  return sort;
};