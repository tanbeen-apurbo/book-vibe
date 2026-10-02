'use client';

import React from 'react';
import type { IBook } from '../../../types/books.types';
import { useContext } from 'react';
import { BooksContext } from '@/app/context/BooksContext';
import { toast } from 'react-toastify';

const ReadButton = ({book}:{book:IBook}) => {



    const {readBooks, setReadBooks} = useContext(BooksContext);

const handleReadBook = () => {
    // Logic to mark the book as read or navigate to the reading page
    // console.log('Read button clicked');
    setReadBooks([...readBooks, book]);
    toast.success(`${book.bookName} added to read books!`)
  }

    return (
        <button className="btn btn-primary rounded-xl px-7" onClick= {()=> handleReadBook()}>
              Read Now
            </button>
    );
};

export default ReadButton;