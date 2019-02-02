import React from 'react';

const Loader = props => (
    <div className="ui active dimmer loader-block">
        <div className="ui loader">
            <span>{props.message}</span>
        </div>
    </div>
);

Loader.defaultProps = {
    message: 'Loading...',
};

export default Loader;
