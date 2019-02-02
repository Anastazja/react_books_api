import React from 'react';
import { isNotEmpty } from '../../helpers/helpers';

const BookItem = ({ book }) => {
    const {
        imageLinks, title, authors, previewLink,
    } = book.volumeInfo;
    return (
        <div className="item book-item">
            { imageLinks ?
                <img alt={title} className="ui image" src={imageLinks.thumbnail} />
                :
                <div className="empty-img" />
            }
            <div className="content">
                <div className="header">
                    {title}
                </div>
                <div className="description">
                    {
                        isNotEmpty(authors) ? (
                            authors.map(author =>
                                (<span key={author}> {author} </span>))
                        ) : ' '
                    }
                </div>
                <a className="ui primary button" href={previewLink}>Read More</a>
            </div>
        </div>
    );
};

export default BookItem;
