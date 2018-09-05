
import React from 'react';
import './FoodItem.css';
import { Image, Menu, Label, Segment } from 'semantic-ui-react'

const foodItem = (props) => {
    let x = false;
    return (
        <Menu compact>
            <Menu.Item as='a'>
                <Segment raised>
                    <Image fluid
                        label={{ as: 'a', color: 'red', content: `${props.name}`, icon: 'spoon', ribbon: true }}
                        src={props.image} size='medium' centered />
                    <Label as='a' color='teal' tag floating>{props.price}</Label>
                </Segment>
            </Menu.Item>
        </Menu>
    );
}

export default foodItem;
