const Champion = React.createClass({
    // TODO looks like `isRequired` does not show warning when prop is nor provided... Why?
    propTypes : {
        name : React.PropTypes.string.isRequired,
        title : React.PropTypes.string.isRequired
    },
    render : function () {
        return (
            <div>
                {this.props.name}, {this.props.title}
            </div>
        );
    }
});