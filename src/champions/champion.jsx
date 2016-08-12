// Example of React component defined as Stateless Function
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//

const Champion = function (props) {
    return (
        <div>
            {props.name}, {props.title}
        </div>
    );
};

// TODO looks like `isRequired` does not show warning when prop is nor provided... Why?
Champion.propTypes = {
    name : React.PropTypes.string.isRequired,
    title : React.PropTypes.string.isRequired
};