import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { IBook } from "../../types/books.types";

const ListedBookCard = ({ book }: { book: IBook }) => {
  return (
    <div className="flex w-full flex-col gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:shadow-lg sm:flex-row">
      
      {/* Book Image */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-xl bg-base-200 sm:h-[200px] sm:w-[150px]">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover"
          sizes="150px"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-1 flex-col justify-between">
        
        <div>
          {/* Category & Rating */}
          <div className="flex items-center gap-3">
            <span className="badge badge-primary">
              {book.category}
            </span>

            <span className="text-sm font-medium">
              ⭐ {book.rating}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-3 text-2xl font-bold">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-gray-500">
            By {book.author}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-base-200 px-3 py-1 text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-5 flex flex-wrap gap-6 text-sm">
            <div>
              <p className="text-gray-500">Pages</p>
              <p className="font-semibold">{book.totalPages}</p>
            </div>

            <div>
              <p className="text-gray-500">Published</p>
              <p className="font-semibold">{book.yearOfPublishing}</p>
            </div>

            <div>
              <p className="text-gray-500">Publisher</p>
              <p className="font-semibold">{book.publisher}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5">
          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-primary rounded-xl"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ListedBookCard;