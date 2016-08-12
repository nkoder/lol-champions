// Example of React component defined as ES6 Class
// https://facebook.github.io/react/docs/reusable-components.html#es6-classes
//
// Warning: There is no auto-binding when using ES6 Classes
// https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
//

class FilterableChampions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filteringText : ''
        };
    }

    render() {
        return (
            <div>
                <div>
                    Name filter:
                    <Filter
                        filteringText={this.state.filteringText}
                        onFilteringTextChange={text => this._filteringTextChangedTo(text)}
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

    // TODO How to deal with scope and private methods?
    _filteringTextChangedTo(filteringText) {
        this.setState({ filteringText : filteringText });
    }

}