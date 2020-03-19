// Hago la importacion de las acciones que pueden ser utilizadas para cambiar el valor del state de la aplicacion

import {
  BUSCAR_PERSONAJE,
  GET_RESULTS,
  BUSCAR_CAPITULO
} from '../actions/index'

// Construccion del reducer para el cambio de estado en la aplicacion
export const buscaPersona = (state = 'rick', action) => {
  switch (action.type) {
    case BUSCAR_PERSONAJE:
      return { ...state, name: action.value }
    case GET_RESULTS:
      return { ...state, name: action.value }
    case BUSCAR_CAPITULO:
      return { ...state, name: action.value }
    default:
      return state
  }
}
