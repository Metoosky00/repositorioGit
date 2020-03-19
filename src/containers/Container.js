/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid' // Utilizo react-flexbox-grid para hacer responsiva la pagina
import { Link } from 'react-router-dom' // Utilizo Link de react-router-dom para realizar la accion de ir de una pagina a otra
import HeaderContainer from './HeaderContainer'
import '../App.css'

// En este componte solo despliego la primera pagina que se visualiza donde se muestran las opciones de buscar por personaje o capitulo
class Container extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <HeaderContainer />
            </Col>
          </Row>
          <Row className='divButtons'>
            <Col xs={6}>
              <div>
                <Link to='/personajes'>
                  <button className='buttonC'>Buscar por Personaje</button>
                </Link>
                <hr className='mediciones' />
                <img src='personajes.gif' className='image' />
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <Link to='/capitulos'>
                  <button className='buttonC'>Buscar por Capitulo</button>
                </Link>
                <hr className='mediciones' />
                <img src='capitulos.gif' className='image' />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Container
