import React from 'react';
import Pagination from 'react-js-pagination';
import * as qs from 'query-string';
import SearchBar from './SearchBar';
import BooksList from './BooksList';
import { isNotEmpty, isANumber } from '../../helpers/helpers';
import banner from '../../img/banner.jpg';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            query: '',
            perPage: 5,
            totalItems: 0,
        };
    }

    componentDidMount() {
        const { search } = qs.parse(this.props.location.search);
        const page = this.props.match.params.id;
        if (isNotEmpty(search)) {
            this.somethingChange(search, isANumber(page));
        }
    }

    somethingChange = (search, page = 1) => {
        this.setState({
            currentPage: page,
            query: search,
        });
    };

    onTextSubmit = (text) => {
        if (isNotEmpty(text)) {
            this.props.history.push(`/1?search=${text}`);
            this.somethingChange(text);
        }
    };

    handlePageChange = (page) => {
        const { query } = this.state;
        const filter = query ? `?search=${query}` : '';
        this.props.history.push(`/${page}${filter}`);
        this.somethingChange(query, page);
    };

    onBookListChange = (totalItems) => {
        this.setState({
            totalItems,
        });
    };

    render() {
        const {
            query, totalItems, currentPage, perPage,
        } = this.state;
        return (
            <div>
                <div className="ui grid top-banner">
                    <div className="sixteen wide tablet eight wide computer column">
                        <SearchBar onFormSubmit={this.onTextSubmit} query={query} />
                    </div>
                    <div className="ten wide tablet eight wide computer column">
                        <img alt="banner" src={banner} />
                    </div>
                </div>
                { totalItems > perPage && (
                    <Pagination
                        activePage={parseInt(currentPage, 10)}
                        itemsCountPerPage={perPage}
                        onChange={this.handlePageChange}
                        pageRangeDisplayed={5}
                        totalItemsCount={totalItems}
                    />
                )}
                <BooksList
                    currentPage={currentPage}
                    onChange={this.onBookListChange}
                    perPage={perPage}
                    query={query}
                />
            </div>
        );
    }
}

export default Home;
