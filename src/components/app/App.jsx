import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import About from '../about/About';
import NoMatch from '../noMatch/NoMatch';
import bottom from '../../img/bottom.png';

const App = () => (
    <div>
        <div className="ui container">
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route component={Home} exact path="/" />
                        <Route component={About} path="/about" />
                        <Route component={Home} path="/:id(\d+)" />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        </div>
        <img alt="bottom-background" className="bottom-background" src={bottom} />
    </div>
);

export default App;
