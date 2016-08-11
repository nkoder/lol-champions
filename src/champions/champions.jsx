const champions = [
    {name: 'Ashe'},
    {name: 'Tristana'},
    {name: 'Wukong'}
];

const Champions = React.createClass({
    render: function () {
        return (
            <ul>
                { champions.map(champion =>
                    <li>
                        <Champion name={champion.name}/>
                    </li>
                ) }
            </ul>
        );
    }
});