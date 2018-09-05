
import React from 'react';
import './FoodItem.css';
import { Label } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const foodItem = (props) => {
    let x=false;
//`${props.image}`)
    return  (
        <div className="label" key={props.id}>
            <Image src={require(props.image)}  size='medium' circular />
            <div className="name" >Name: {props.name}</div>
            <div>
                <Label as='a' color='teal' tag>{props.price}</Label>
            </div>
            <div className="desription" style={{visibility: x ? 'visible' : 'hidden' }}> Description: {props.description}</div>
        </div>
    );
}

export default foodItem;
