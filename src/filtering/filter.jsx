const Filter = React.createClass({
    // TODO How to deal with scope and private methods?
    _filteringTextChanged : function (event) {
        this.props.onFilteringTextChange(event.target.value.trim());
    },
    render : function () {
        return (
            <input
                type='text'
                placeholder='Filter by name&hellip;'
                value={this.props.filteringText}
                onChange={event => this._filteringTextChanged(event)}
            />
        );
    }
});