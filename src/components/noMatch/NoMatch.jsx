import React from 'react';
import notFound from '../../img/ufo.png';

function NoMatch({ location }) {
    return (
        <div className="ui grid not-found">
            <div className="sixteen wide tablet eight wide computer column">
                <img alt="404" src={notFound} />
            </div>
            <div className="message sixteen wide tablet eight wide computer column">
                <h2>404</h2>
                <h3>Ooops...</h3>
                <p>No match for <code>{location.pathname}</code></p>
            </div>
        </div>
    );
}

export default NoMatch;
