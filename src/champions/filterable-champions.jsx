const FilterableChampions = React.createClass({
    _filteringTextChangedTo : function (filteringText) {
        // TODO How to deal with scope and private methods?
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
                    predicate={(champion) => normalized(champion.name).includes(normalized(this.state.filteringText))}
                />
            </div>
        );
        function normalized(text) {
            return text.trim().toLowerCase();
        }
    }
});