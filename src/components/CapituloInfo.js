/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { connect } from 'react-redux' // Importo para hacer un componente conectado
import { getResults } from '../actions/index' // Importo la accion getResults para cambiar el estado con los datos resultantes del fetch
import './styles.css'

class CapituloInfo extends Component {
  componentDidMount () {
    var tmp
    var loc = document.location.href // Tomo la url para obtener un id para la busqueda del personaje en particular
    tmp = loc.split('=') // Guardo el id en tmp
    fetch(`https://rickandmortyapi.com/api/episode/${tmp[1]}`)//  paso el argumento tmp[1] donde viene el id para hacer la busqueda en el fetch
      .then(res => res.json())
      .then(results => {
        this.props.results({ // Agrego el resultado de la busqueda al state mediante la accion results->getResults
          name: results.name,
          air_date: results.air_date,
          episode: results.episode,
          created: results.created
        })
      })
    tmp = undefined // Limpio las variables de la url para hacer nuevas busquedas si es necesario
    loc = undefined
  }

  render () {
    const { name, air_date, created } = this.props.name // Tomo el resultado obtenido de la busqueda desde el state 7 se lo paso a el componente para su renderizacion
    console.log(this.state)
    return (
      <div>
        <img src='../encabezado.png' className='encabezado' />
        <div className='capituloInfo'>
          <ul>
            <li>Nombre del episodio: {name}</li>
            <li>Fecha de emision: {air_date}</li>
            <li>Fecha de creacion: {created}</li>
          </ul>
        </div>
      </div>
    )
  }
}
// Uso mapStateToProps para tomar los valores del resultado desde el state
const mapStateToProps = ({ name }) => ({ name })
// Uso mapDispatchToPropsActions para pasar los resultados al state
const mapDispatchToPropsActions = dispatch => ({
  results: value => dispatch(getResults(value))
})
// Realizo un componente conectado con connect
export default connect(
  mapStateToProps,
  mapDispatchToPropsActions
)(CapituloInfo)
