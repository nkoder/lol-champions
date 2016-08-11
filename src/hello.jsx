let Hello = React.createClass({
    render: function () {
        return <div>Hello, {this.props.name}!</div>;
    }
});
ReactDOM.render(
    <Hello name="lol-champions"/>,
    document.getElementById('app')
);