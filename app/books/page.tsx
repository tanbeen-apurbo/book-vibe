import React from 'react';
import BookCard from '../components/shared/BookCard';
import type { IBook } from '@/app/types/books.types';

const getBooks = async () => {
    const res = await fetch('http://localhost:3000/booksData.json');
    const data = await res.json();

    return data;
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