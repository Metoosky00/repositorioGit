/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './styles/headerContainer.css'

export default class HeaderContainer extends Component {
  render () {
    return (
      <div className='headerContainer'>
        <img src='encabezado.png' className='images' />
      </div>
    )
  }
}
