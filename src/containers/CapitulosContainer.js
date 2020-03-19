import React from 'react'
import {connect} from 'react-redux' // Importo connect para hacer un componente conectado
import HeaderContainer from './HeaderContainer'
import SearchComponent from '../components/SearchComponent'
import SearchResult from './SearchResult'
import {goCapitulo} from './../actions/index' // Incluyo la accion para hacer el cambio de estado

class CapitulosContainer extends React.Component {
  retorno = value => {
    this.props.setGo(value) // Ejecuto la accion go con setGo para hacer el cambio del estado cada que se teclee una nueva busqueda
  };
    render(){
      return (
        <div>
          <HeaderContainer />
          <SearchComponent retorno={this.retorno} />{/*Retorno los valores del teclado */}
          <SearchResult search='capitulo' /> {/*Muestro los resultados de la busqueda con searchResult */}
        </div>
      );
    } 
}
// Construyo mapDispatchToProps para hacer el dispatch de la accion y así poder cambiar el valor del estado
const mapDispatchToPropsActions=dispatch=>({
  setGo:value=>dispatch(goCapitulo(value))
})
// Creo un componente conectado para hacer la manipulacion del estate
export default connect(null,mapDispatchToPropsActions)(CapitulosContainer)