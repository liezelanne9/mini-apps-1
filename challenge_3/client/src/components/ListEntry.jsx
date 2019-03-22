import React, {Component} from 'react';
import axios from 'axios';

class ListEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item.name,
            quantity: this.props.item.quantity
        };
    }

    deleteItem(e) {
        let id = e.target.id; 
        axios
        .delete(`/api/${id}`)
        .then(() => this.props.fetchGroceries())
        .catch(err => console.error(err))
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

    handleSaveButton(e) {
        // console.log(this.state.item, this.state.quantity)
        e.preventDefault();
        // axios post
        axios
        .put(`/api/${this.props.id}`, { name: this.state.item, quantity: this.state.quantity})
        .then(() => {this.props.fetchGroceries(); alert(`updated ${this.state.item}!`)})
        .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                <input type="checkbox" className="strikethrough"/>
                    <label id={this.props.id} className="strikeThis" onDoubleClick={(e) => this.deleteItem(e)}>
                        {this.state.item}: {this.state.quantity}<br /><br />
                    </label>
        
                    <div>
                        <form onSubmit={(e) => this.handleSaveButton(e)} className="hide">
                            
                            <input type="text" name="name" className="update-input" placeholder={this.state.item} onChange={(e) => this.handleItemInput(e)}/><br />
                            
                            <input type="text" name="quantity" className="update-input" placeholder={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)}/><br /><br />
                            <input type="submit" value="save" />
                        </form>
                    </div>
                <br/>
            </div>
        )
    }
   
}

export default ListEntry;