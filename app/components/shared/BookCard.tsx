import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { IBook } from "@/app/types/books.types";

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({ book }:IBookCardProps) => {
    return (
        <div className="group overflow-hidden rounded-3xl bg-[#f0fff8] border border-[#d8f5e7] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            {/* Image Section */}
            <div className="relative h-80 overflow-hidden bg-[#dcf8e9]">

                {/* Category */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-[#0a8f4d] px-4 py-2 text-xs font-semibold text-white shadow-md">
                        {book.category}
                    </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-[#0d1b2a] shadow-md">
                    <span className="text-yellow-500">★</span>
                    {book.rating}
                </div>

                <Image
                    src={book.image}
                    alt={book.bookName}
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content */}
            <div className="p-6">

                {/* Book title */}
                <h2 className="text-xl font-bold text-[#071525] line-clamp-2 group-hover:text-[#078f49] transition-colors">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="mt-2 text-sm text-[#537080]">
                    by <span className="font-semibold text-[#243b4a]">{book.author}</span>
                </p>

                {/* Book information */}
                <div className="mt-5 flex items-center gap-4 text-sm text-[#537080]">
                    <div className="flex items-center gap-1">
                        <span>📖</span>
                        <span>{book.totalPages} pages</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <span>📅</span>
                        <span>{book.yearOfPublishing}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-white border border-[#bdebd1] px-3 py-1 text-xs font-medium text-[#078f49]"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-[#d8f5e7] pt-5">

                    <div>
                        <p className="text-xs text-[#6b818d]">
                            Publisher
                        </p>

                        <p className="text-sm font-semibold text-[#243b4a]">
                            {book.publisher}
                        </p>
                    </div>

                    <Link
                        href={`/books/${book.bookId}`}
                        className="rounded-xl bg-[#078f49] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#057a3d] hover:shadow-lg"
                    >
                        Details →
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BookCard;