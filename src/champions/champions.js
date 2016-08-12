import React from 'react';
import _ from 'lodash';
import {Champion} from './champion';

// Example of React component defined as configuration object
export const Champions = React.createClass({

    propTypes : {
        predicate : React.PropTypes.func
    },

    getDefaultProps : function () {
        return {
            predicate : () => true
        };
    },

    getInitialState : function () {
        return {
            champions : []
        };
    },

    componentDidMount : function () {
        this._fetchChampions()
            .then(champions => this.setState({ champions : champions }))
            .catch(exception => console.error(exception));
    },

    render : function () {
        // TODO Is the 'key' attribute really needed in this array of champions? Why is it needed?
        // TODO https://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live
        const championsList =
            _(this.state.champions)
                .filter(this.props.predicate)
                .map(champion =>
                    <li key={champion.name}>
                        <Champion name={champion.name} title={champion.title}/>
                    </li>
                )
                .value();
        return (
            <ul> { championsList } </ul>
        );
    },

    // TODO How to deal with scope and private methods?
    _fetchChampions : function () {
        return fetch('https://ddragon.leagueoflegends.com/realms/eune.json')
            .then(response => response.json())
            .then(realm => [realm.cdn, realm.l, realm.n.champion])
            .then(([cdnUrl, locale, championDataVersion]) =>
                fetch(`${securedUrl(cdnUrl)}/${championDataVersion}/data/${locale}/champion.json`)
            )
            .then(response => response.json())
            .then(championData => _.values(championData.data));

        function securedUrl(url) {
            return url.replace('http://', 'https://');
        }
    }

});