"use client";

import React, { type ReactNode } from "react";
import { createContext, useState } from "react";
import type { IBook } from "../types/books.types";

interface BooksContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  whishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType>({
  readBooks: [],
  setReadBooks: () => {},
  whishlist: [],
  setWishlist: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [whishlist, setWishlist] = useState<IBook[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    whishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;