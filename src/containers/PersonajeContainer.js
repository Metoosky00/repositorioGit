/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {connect} from 'react-redux' // Importo connect para hacer la conexion del componente al store
import HeaderContainer from './HeaderContainer'
import SearchComponent from '../components/SearchComponent'
import SearchResult from './SearchResult'
import {go} from './../actions/index' // Invoco a la accion go de la carpeta action para poder cambiar el estado de la aplicacion

 class PersonajeContainer extends React.Component {
  retorno = value => {
    this.props.setGo(value) // Ejecuto la accion go con setGo para hacer el cambio del estado cada que se teclee una nueva busqueda
  }
  render(){
    return (
      <div>
            <HeaderContainer />
            <SearchComponent retorno={this.retorno} /> {/*Retorno los valores del teclado */}
            <SearchResult search='personaje' /> {/*Muestro los resultados de la busqueda con searchResult */}
      </div>
  )
  }
}
// Construyo mapDispatchToProps para hacer el dispatch de la accion y así poder cambiar el valor del estado
const mapDispatchToPropsActions=dispatch=>({
  setGo:value=>dispatch(go(value))
})
// Creo un componente conectado para hacer la manipulacion del estate
export default connect(null,mapDispatchToPropsActions)(PersonajeContainer)