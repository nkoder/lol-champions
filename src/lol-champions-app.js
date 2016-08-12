import React from 'react';
import ReactDOM from 'react-dom';
import {FilterableChampions} from './champions/filterable-champions';

const LolChampionsApp = React.createClass({
    render : function () {
        return (
            <div>
                <FilterableChampions/>
            </div>
        );
    }
});

export function installIn(selector) {
    ReactDOM.render(
        React.createElement(LolChampionsApp),
        document.getElementById(selector)
    );
}