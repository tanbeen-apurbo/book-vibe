import React from 'react';
import BookCard from '../BookCard';
import type { IBook } from '../../../types/books.types';
import fs from "fs/promises";
import path from "path";

const getBooks = async () => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "booksData.json"
  );

  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
};

const Books = async () => {
    const booksData = await getBooks();

    return (
        <section className="container mx-auto my-[70px]">
            <h2 className="text-3xl font-bold text-center mb-10">
                All Books
            </h2>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
    {booksData.map((book:IBook) => (
        <BookCard
            key={book.bookId}
            book={book}
        />
    ))}
</div>
        </section>
    );
};

export default Books;