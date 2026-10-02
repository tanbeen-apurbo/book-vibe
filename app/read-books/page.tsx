"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/app/context/BooksContext";
import BookChart from "@/app/components/shared/BookChart";

const ReadBooksPage = () => {
  const { readBooks } = useContext(BooksContext);

  return (
    <div className="container mx-auto py-10">
      <BookChart books={readBooks} />
    </div>
  );
};

export default ReadBooksPage;