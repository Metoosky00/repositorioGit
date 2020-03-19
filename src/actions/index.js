// Creo variables que seran utilizadas para la implementacion de las acciones
export const BUSCAR_PERSONAJE = 'BUSCAR_PERSONAJ'
export const GET_RESULTS = 'GET_RESULTS'
export const BUSCAR_CAPITULO = 'BUSCAR_CAPITUL'

// Accion de busqueda de personaje
export const go = value => ({ type: BUSCAR_PERSONAJE, value })
// Accion para retornar los resultados obtenidos
export const getResults = value => ({ type: GET_RESULTS, value })
// Accion para busqueda de capitulos
export const goCapitulo = value => ({ type: BUSCAR_CAPITULO, value })
