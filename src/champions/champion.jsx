const Champion = React.createClass({
    render : function () {
        return (
            <div>
                {this.props.name}, {this.props.title}
            </div>
        );
    }
});