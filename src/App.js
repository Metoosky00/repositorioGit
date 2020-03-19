import React from 'react'
// Utilizo react-router-dom para hacer la transision de una pagina a hora
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Elementos realizados para la rederizacion de las paginas
import Container from './containers/Container'
import PersonajeContainer from './containers/PersonajeContainer'
import PersonajeInfo from './components/PersonajeInfo'
import CapitulosContainer from './containers/CapitulosContainer'
import CapituloInfo from './components/CapituloInfo'
import './App.css'
class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Router>
          <Route exact path='/' component={Container} />
          <Route exact path='/personajes' component={PersonajeContainer} />
          <Route exact path='/personajes/:id' component={PersonajeInfo} />
          <Route exact path='/capitulos' component={CapitulosContainer} />
          <Route exact path='/capitulos/:id' component={CapituloInfo} />
        </Router>
      </div>
    )
  }
}
export default App
