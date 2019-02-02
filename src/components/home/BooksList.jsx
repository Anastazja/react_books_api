import React from 'react';
import BookItem from './BookItem';
import books from '../../api/api';
import Loader from '../loader/Loader';
import { isNotEmpty } from '../../helpers/helpers';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books,
            totalItems: this.props.totalItems,
            isLoading: false,
        };
    }

    componentDidMount() {
        const { query, currentPage } = this.props;
        this.onGetBooksList(query, currentPage);
    }

    componentDidUpdate(prevProps) {
        const { query, currentPage } = this.props;
        if (currentPage !== prevProps.currentPage
            || query !== prevProps.query) {
            this.onGetBooksList(query, currentPage);
        }
    }

    onGetBooksList = async (query, currentPage) => {
        const { onChange, perPage } = this.props;
        if (isNotEmpty(query)) {
            this.setState({ isLoading: true });
            const response = await books.get('/volumes', {
                params: {
                    q: query || ' ',
                    startIndex: (currentPage * perPage - perPage + 1),
                    maxResults: perPage,
                },
            });
            onChange(response.data.totalItems);
            this.setState({
                books: response.data.items,
                totalItems: response.data.totalItems,
                isLoading: false,
            });
        }
    };

    render() {
        const { books, totalItems, isLoading } = this.state;
        const { perPage, currentPage } = this.props;
        const startIndex = currentPage * perPage - perPage + 1;
        const endIndex = currentPage * perPage;

        return (
            <div>
                {isLoading ?
                    <Loader message="Looking for books" />
                    : (
                        <div>{
                            isNotEmpty(books) ? (
                                <div>
                                    <span className="information">{`Books ${startIndex} to ${endIndex} from ${totalItems} results`}</span>
                                    { books.map(book =>
                                        <BookItem key={book.id} book={book} />)}
                                </div>
                            ) :
                                <div className="information">No search result</div>
                        }
                        </div>
                    )}
            </div>
        );
    }
}

export default BooksList;
