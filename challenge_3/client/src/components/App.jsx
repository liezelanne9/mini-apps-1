import React, {Component} from 'react';
import axios from 'axios';
import List from './List.jsx';

// does this need to be stateful or stateless

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            quantity: '',
            groceryList: []
        }
        this.fetchGroceries = this.fetchGroceries.bind(this);
    }
    componentDidMount() {
        // display groceries from database (GET)
        this.fetchGroceries();
    }

    fetchGroceries() {
        axios
        .get('/api')
        .then(response => this.setState({
            item: '',
            quantity: '',
            groceryList: response.data
        }))
        .catch(err => console.error(err));
    }

    handleItemInput(e) {
        this.setState({
            item: e.target.value
        }, () => console.log(this.state.item))
    }

    handleQuantityInput(e) {
        this.setState({
            quantity: e.target.value
        }, () => console.log(this.state.quantity))
    }

    handleAddButton(e) {
        e.preventDefault();
        if (this.state.item === '') {
            alert('Please enter an item');
            return;
        };
        // axios post
        axios
        .post('/api', { name: this.state.item, quantity: this.state.quantity})
        .then(() => {this.fetchGroceries(); document.getElementById("form").reset();})
        .catch(err => console.error(err))
    }


    render() {
        return (
            <div>
                <h1>Grocery List</h1>
                <form id="form">
                        <fieldset>
                        <label> Item:<br />
                            <input name="item" className="input" onChange={e => this.handleItemInput(e)}></input>
                        </label>
                        <br />
                        <br />
                        <label> Quantity:<br /> 
                            <input name="quantity" className="input" onChange={e => this.handleQuantityInput(e)}></input>
                        </label>
                        <br />
                        <br />
                        <button name="add" onClick={e => this.handleAddButton(e)}>add to list</button>
                    </fieldset>
                </form>
            
                <List groceryList={this.state.groceryList} fetchGroceries={this.fetchGroceries}/>

           </div>
        )
    }
}

export default App;