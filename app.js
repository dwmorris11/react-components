

//ReactDOM.render(element, document.getElementById('app'));



class Meat extends React.Component {
  render() {
    return <li>{this.props.type}</li>;
  }
}

class Dairy extends React.Component {
  render() {
    return <li>{this.props.type}</li>;
  }
}

class GroceryListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        done: false
      };
    }
    onListItemClick() {
      this.setState({
        done: !this.state.done
      });
    }
    render() {
      const elements = this.props.type;
      var style = {
        textDecoration: this.state.done ? 'line-through' : 'none'
      };
      return (
        <ul>
          {elements.map((value, index) => {
            return <li style={style} onClick={this.onListItemClick.bind(this)} key={index}>{value}</li>
          })}
        </ul>
      );
  }
};

var GroceryList = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryListItem type={['Green Eggs', 'Ham', 'Cheese']} />
  </div>

);

var myList = React.createElement(GroceryList);
ReactDOM.render(myList, document.getElementById('app'));

// ReactDOM.render(
//   newElement,
//   document.getElementById('app')
// );