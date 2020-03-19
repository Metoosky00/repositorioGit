import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-flexbox-grid' // Uso de react-flexbox-grid para hacer responsiva la aplicacion
import { connect } from 'react-redux' // importo connect para hacer un componente conectado y así poder manipular el estado de la aplicacion
import Personaje from '../components/Personaje'
import Capitulo from '../components/Capitulo'
import './styles/searchResult.css'

class SearchResult extends Component {
  state = {
    resultados: [],
    renderizar: false
  };
  standar;
  componentWillReceiveProps(props, nextprops) { //Utilize componentWillReceiveProps ya que cada que pase nuevas props este componente puede verse renderizado con nuevos elementos y así hacer mas dinamica la visualizacion de los elementos
    console.log(props)
    let buscar = props.name; // Tomo el estado name para hacer la busqueda con el metodo fetch
    if (props.name !== undefined || "") { // Si el estado viene como undefined o '' no se renderiza en la pagina  para descartar errores posibles
      this.setState({ renderizar: true })
    }
    if (this.state.renderizar && this.props.search === "personaje") { // Hago la busqueda por personaje mediante este metodo fetch siempre y cuando vengan por props la sentencia 'personaje'
      fetch(`https://rickandmortyapi.com/api/character/?name=${buscar}`)
        .then(res => res.json())
        .then(results => {
          this.setState({ resultados: results.results, renderizar: true }) //Guardo los datos de la busqueda
        });
    }
    if (this.state.renderizar && this.props.search === "capitulo") {// Hago la busqueda por personaje mediante este metodo fetch siempre y cuando vengan por props la sentencia 'capitulo'
      fetch(`https://rickandmortyapi.com/api/episode/?name=${buscar}`)
        .then(res => res.json())
        .then(results => {
          this.setState({ resultados: results.results, renderizar: true })//Guardo los datos de la busqueda
        });
    }
  }
  render() {
    const { search } = this.props  // Tomo la props search para saber que se renderizara en la pagina
    return (
      <Grid fluid>
        <Row>
          <Col className='searchResult' xs={12}>
            {search === 'personaje' && // Si search es igual a personaje renderizo con el map todos los personajes resultantes de la busqueda
              this.state.resultados.map(result => (
                <Personaje
                  id={result.id}
                  image={result.image}
                  name={result.name}
                  status={result.status}
                  key={result.id}
                />
              ))}
            {search === 'capitulo' &&// Si search es igual a capitulo renderizo con el map todos los personajes resultantes de la busqueda
              this.state.resultados.map(result => (
                <Capitulo
                  id={result.id}
                  image={result.image}
                  name={result.name}
                  key={result.id}
                />
              ))}
          </Col>
        </Row>
      </Grid>
    )
  }
}
// Con mapStateToProps recuperso el estado name para poder hacer la busqueda con los metodos fetch segun corresponda
const mapStateToProps = ({ name }) => ({
  name
})
// Hago un componente conectadi oara poder recuperar los valores del state
export default connect(mapStateToProps, null)(SearchResult)
