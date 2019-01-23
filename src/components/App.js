import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default  App;