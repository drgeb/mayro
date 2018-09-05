import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class TabularMenu extends Component {
  state = { activeItem: 'paellas' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu tabular>
        <Menu.Item name='Paellas and Rice' active={activeItem === 'Paellas and Rice'} onClick={this.handleItemClick} />
        <Menu.Item name='Soups' active={activeItem === 'Soups'} onClick={this.handleItemClick} />
        <Menu.Item name='Stews' active={activeItem === 'Stews'} onClick={this.handleItemClick} />
        <Menu.Item name='Tapas I Pintxos' active={activeItem === 'Tapas I Pintxos'} onClick={this.handleItemClick} />
        <Menu.Item name='A bit of Everything' active={activeItem === 'A bit of Everything'} onClick={this.handleItemClick} />

      </Menu>
    )
  }
}