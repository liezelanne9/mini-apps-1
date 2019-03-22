import React, {Component} from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => {
    return (
        <div>
            <h3>Groceries:</h3>
            <div className="subheading">(double-click to delete)</div>
            <ul>
                {props.groceryList.map(item => {
                return (<ListEntry item={item} id={item.id} key={item.id} delete={props.delete} fetchGroceries={props.fetchGroceries} />)
                })}
            </ul>
        </div>
    )
}



export default List;