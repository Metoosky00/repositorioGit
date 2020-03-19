/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Link } from 'react-router-dom' // Importo Link para pasar a la pagina de la informacion del personaje

class Personaje extends Component {
  // Renderizo los datos de los personajes
  render () {
    const { id, name, image } = this.props
    return (
      <div className='persona'>
        <img src={image} className='imagePerson' />
        <label>Nombre: {name}</label>
        <br />
        <Link to={`/personajes/id=${id}`}><button className='buttonP'>Click para ver la descripcion</button></Link> {/* Boton para  redirigir al usuario a la pagina de descripcion del personaje */}
      </div>
    )
  }
}

export default Personaje
