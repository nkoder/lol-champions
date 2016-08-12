import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRedirect, Route, IndexLink, Link, hashHistory} from 'react-router';
import {Champions} from './champions/champions';
import {FilterableChampions} from './champions/filterable-champions';

const LolChampionsApp = React.createClass({

    // TODO it's raising an error in a browser
    propTypes : {
        children : React.PropTypes.element
    },

    render : function () {
        return (
            <div>
                <h1><IndexLink to="/">LoL Champions</IndexLink></h1>
                <ul>
                    <li><Link to="/champions">Champions</Link></li>
                    <li><Link to="/filterableChampions">Filterable Champions</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }

});

export function installIn(selector) {

    // We cannot use `browserHistory` without proper server configuration. You cannot just open
    //  <this-site>/champions to access "champions" page. You have to open <this-site> which
    //  has index.html available on the server, then go to <this-site>/champions
    // We can use "hashHistory" to avoid this problem, but for the cost of having '#' in URLs.
    // See more: https://github.com/reactjs/react-router/blob/master/docs/guides/IndexRoutes.md
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={LolChampionsApp}>
                <IndexRedirect to="/champions"/>
                <Route path="champions" component={Champions}/>
                <Route path="filterableChampions" component={FilterableChampions}/>
            </Route>
        </Router>,
        document.getElementById(selector)
    );

}