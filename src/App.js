import React, { Component } from 'react';
import './App.css';
import FoodItem from './FoodItem/FoodItem';

class App extends Component {

    render() {
        let customData = require('./customData.json');
        var list = customData.foodItems.map( function(item) {
            return  <FoodItem id={item.id} name={item.name} description={item.description} price={item.price} category={item.category} image={item.image}/>;
        });

        return (
            <div className="App">
                <h1>HI, I'm a react app!</h1>
                {list}
            </div>
        );
    }
}

export default App;
