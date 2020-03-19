import React, { Component } from 'react'
import AppBar from '../../node_modules/@material-ui/core/AppBar' // Importo los componentes necesarios de material-UI  para la barra de busqueda
import Toolbar from '../../node_modules/@material-ui/core/Toolbar'
import InputBase from '../../node_modules/@material-ui/core/InputBase'
import './styles.css'

class SearchComponent extends Component {
  handleChange = e => {
    return this.props.retorno(e.target.value) //Mando los datos por teclado al metodo padre
  };

  render() {
    return (
      <div>
        <AppBar position='static' className='searchContainer'>
          <Toolbar className='searchToolbar'>
            <InputBase
              placeholder='Search…'
              className='searchInputBase'
              onChange={this.handleChange}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default SearchComponent
