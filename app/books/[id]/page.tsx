import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/app/types/books.types";
import ReadButton from "@/app/components/shared/bookDetails/ReadButton";
import WhishlistButton from "@/app/components/shared/bookDetails/WhishListButton";
interface IBooksDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();

  return data;
};

const BooksDetailsPage = async ({
  params,
}: IBooksDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book) => book.bookId === parseInt(id)
  );

  if (!book) {
    return (
      <div className="container mx-auto my-[70px] px-4">
        <div className="rounded-3xl border border-base-300 bg-base-100 p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold">Book Not Found</h2>

          <p className="mt-3 text-base-content/60">
            Sorry, we couldn't find the book you're looking for.
          </p>

          <Link
            href="/books"
            className="btn btn-primary mt-6 rounded-xl"
          >
            ← Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-[50px] px-4 md:my-[70px]">

      {/* Back Button */}
      <Link
        href="/books"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-primary"
      >
        ← Back to all books
      </Link>

      {/* Main Card */}
      <div className="card lg:card-side overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">

        {/* Book Image */}
        <figure className="relative flex min-h-[450px] items-center justify-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 p-8 md:p-12 lg:w-[40%]">

          <div className="relative overflow-hidden rounded-2xl shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-primary/20">
            <Image
              src={book.image}
              alt={book.bookName}
              width={320}
              height={480}
              className="h-[400px] w-[270px] object-cover md:h-[470px] md:w-[315px]"
              priority
            />
          </div>

        </figure>

        {/* Details */}
        <div className="card-body justify-center p-7 md:p-10 lg:p-12">

          {/* Category + Rating */}
          <div className="flex flex-wrap items-center gap-3">

            <span className="badge badge-primary badge-lg px-4">
              {book.category}
            </span>

            <span className="badge badge-warning badge-lg px-4">
              ★ {book.rating}
            </span>

          </div>

          {/* Book Name */}
          <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-lg text-base-content/60">
            By{" "}
            <span className="font-bold text-base-content">
              {book.author}
            </span>
          </p>

          {/* Stats */}
          <div className="my-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

            <div className="rounded-2xl bg-base-200 p-4">
              <p className="text-xs uppercase tracking-wider text-base-content/50">
                Pages
              </p>
              <p className="mt-1 text-xl font-bold">
                {book.totalPages}
              </p>
            </div>

            <div className="rounded-2xl bg-base-200 p-4">
              <p className="text-xs uppercase tracking-wider text-base-content/50">
                Published
              </p>
              <p className="mt-1 text-xl font-bold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div className="rounded-2xl bg-base-200 p-4">
              <p className="text-xs uppercase tracking-wider text-base-content/50">
                Rating
              </p>
              <p className="mt-1 text-xl font-bold">
                {book.rating}/5
              </p>
            </div>

          </div>

          {/* Tags */}
          <div>
            <p className="mb-3 text-sm font-bold">
              Tags
            </p>

            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Publisher */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-base-content/60">
            <p>
              Publisher:{" "}
              <span className="font-semibold text-base-content">
                {book.publisher}
              </span>
            </p>

            <p>
              Published:{" "}
              <span className="font-semibold text-base-content">
                {book.yearOfPublishing}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="card-actions mt-8 flex-wrap">

            <ReadButton book={book}></ReadButton>

           <WhishlistButton book={book}></WhishlistButton>

          </div>

        </div>
      </div>

      {/* Review Section */}
      <div className="mt-8 rounded-3xl border border-base-300 bg-base-100 p-7 shadow-lg md:p-10">

        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            About this book
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Book Review
          </h2>
        </div>

        <p className="max-w-5xl text-base leading-8 text-base-content/70">
          {book.review}
        </p>

      </div>

    </div>
  );
};

export default BooksDetailsPage;