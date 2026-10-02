"use client";

import React, { useContext } from "react";
import type { IBook } from "../../../types/books.types";
import { BooksContext } from "@/app/context/BooksContext";
import { toast } from "react-toastify";

const WhishListButton = ({ book }: { book: IBook }) => {
  const { whishlist, setWishlist } = useContext(BooksContext);

  const handleAddToWhishList = () => {
    setWishlist((previousList) => [...previousList, book]);

    toast.success(`${book.bookName} added to wishlist!`);
  };

  return (
    <button
      className="btn btn-primary rounded-xl px-7"
      onClick={handleAddToWhishList}
    >
      Add to Wishlist
    </button>
  );
};

export default WhishListButton;