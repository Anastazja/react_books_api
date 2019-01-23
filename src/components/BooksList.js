import React from 'react';
import BookItem from './BookItem';

class BooksList extends React.Component {
    state = {
        books: [],
        currentPage: 1, 
        offset: 0,
        perPage: 5
    };

    render(){
        return <BookItem />
    } ;
};


export default BooksList;