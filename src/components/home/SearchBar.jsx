import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
        };
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const { onFormSubmit } = this.props;
        const { text } = this.state;
        onFormSubmit(text);
    };

    render() {
        const { text } = this.state;
        const { query } = this.props;

        return (
            <div className="search-bar-block">
                <h2>We read to know we&#39;re not alone</h2>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Book</label>
                        <input
                            onChange={event => this.setState({ text: event.target.value })}
                            placeholder="Type a title"
                            type="text"
                            value={text === null ? query : text}
                        />
                        <input className="ui primary button submit-button" type="submit" value="Search" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
