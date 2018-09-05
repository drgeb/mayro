import React, { Component } from 'react';
import './App.css';
import FoodItem from './FoodItem/FoodItem';
import TabularMenu from './TabularMenu/TabularMenu'
class App extends Component {

    render() {
        let customData = require('./data/paellas_And_Rice.json');
        let list = customData.foodItems.map(function (item) {
            return <FoodItem id={item.id} name={item.name} description={item.description} price={item.price} category={item.category} image={item.image} />;
        });

        return (
            <div className="App">
                <TabularMenu></TabularMenu>
                <h1>{customData.category}</h1>
                {list}
            </div>
        );
    }
}

export default App;
