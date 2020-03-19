import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Capitulo extends Component {
  render () {
    // Renderizo la informacion de la descripcin del capitulo
    const { id, name } = this.props
    return (
      <div >
        <Link to={`/capitulos/id=${id}`}>
          <div className='capitulo'>
            <label>Episodio: {name}</label>
          </div>
        </Link>
      </div>
    )
  }
}

export default Capitulo
