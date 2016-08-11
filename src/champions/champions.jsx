const Champions = React.createClass({
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
        // TODO Can we import somehow 'Champion' instead of having it accessible globally?
        const championsList = _(this.state.champions)
            .filter(champion => this.props.predicate(champion))
            .map(champion =>
                <li><Champion name={champion.name} title={champion.title}/></li>
            );
        // const allChampionsList = this.state.champions.map(champion =>
        {/*<li><Champion name={champion.name} title={champion.title}/></li>*/
        }
        // );
        return (
            <ul> { championsList } </ul>
        );
    }
});