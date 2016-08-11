const FilterableChampions = React.createClass({
    _filteringTextChangedTo : function (filteringText) {
        // TODO How to deal with scope and private methods?
        console.log('Filter is now: ', filteringText);
        this.setState({ filteringText : filteringText });
    },
    getInitialState : function () {
        return {
            filteringText : ''
        };
    },
    render : function () {
        return (
            <div>
                <div>
                    Name filter:
                    <Filter
                        filteringText={this.state.filteringText}
                        onFilteringTextChange={this._filteringTextChangedTo}
                    />
                </div>
                <Champions
                    predicate={(champion) => champion.name.toLowerCase().includes(this.state.filteringText)}
                />
            </div>
        );
    }
});