"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/app/context/BooksContext";
import ListedBookCard from "../components/shared/ListedBookCard";

const ListedBooks = () => {
  const { readBooks, whishlist } = useContext(BooksContext);

  return (
    <div className="container mx-auto py-[20px]">
      <div className="tabs tabs-lift">
        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {readBooks.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold">
                  No books found 📚
                </h3>

                <p className="mt-2 text-gray-500">
                  You haven't added any books to your read list yet.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Wishlist */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist (${whishlist.length})`}
        />

        <div className="tab-content bg-base-100 border-base-300 p-6">
          {whishlist.length > 0 ? (
            <div className="grid grid-cols-1 gap-5">
              {whishlist.map((book) => (
                <ListedBookCard key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold">
                  Your wishlist is empty 💔
                </h3>

                <p className="mt-2 text-gray-500">
                  Add some books to your wishlist and they'll appear here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;