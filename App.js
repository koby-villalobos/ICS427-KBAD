var App = React.createClass({
    getInitialState : function() {
        return (
            {
                fruits : {
                    'fruit-1' : 'orange',
                    'fruit-2' : 'apple'
                }
            }
        )
    },
    addFruit : function(fruit) {
        //create a unike key for each new fruit item
        var timestamp = (new Date()).getTime();
        // update the state object
        this.state.fruits['fruit-' + timestamp ] = fruit;
        // set the state
        this.setState({ fruits : this.state.fruits });
    },
    render: function() {
        return (
            <div className="component-wrapper">
                <FruitList fruits={this.state.fruits} />
                <AddFruitForm addFruit={this.addFruit} />
            </div>
        );
    }
});

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }