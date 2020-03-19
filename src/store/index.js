// Utilizo createStore de redux para hacer la creacion del store para ser consumida por la aplicacion
import { createStore } from 'redux'
// Llamo al reducer encargado del manejo de los estados
import { buscaPersona } from '../reducers/searchPersona'
// Inicializo el estate para que tenga valores por defecto y no haya problemas al rederizar
const initialState = { name: 'rick' }

// Conecto el store de la aplicacion con  el devtools de redux para verlo desde chroome
export const store = createStore(
  buscaPersona,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
