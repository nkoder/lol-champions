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
        return (
            <ul>
                { this.state.champions.map(champion =>
                    <li>
                        {/* TODO Can we import somehow 'Champion' instead of having it accessible globally? */}
                        <Champion name={champion.name} title={champion.title}/>
                    </li>
                ) }
            </ul>
        );
    }
});