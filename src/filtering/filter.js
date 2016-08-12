import React from 'react';

export const Filter = React.createClass({

    propTypes : {
        filteringText : React.PropTypes.string,
        onFilteringTextChange : React.PropTypes.func
    },

    getDefaultProps : function () {
        return {
            filteringText : '',
            onFilteringTextChange : () => {}
        };
    },

    // TODO How to deal with scope and private methods?
    _filteringTextChanged : function (event) {
        this.props.onFilteringTextChange(event.target.value);
    },

    render : function () {
        return (
            <input
                type="text"
                placeholder="Filter by name&hellip;"
                value={this.props.filteringText}
                onChange={event => this._filteringTextChanged(event)}
            />
        );
    }

});