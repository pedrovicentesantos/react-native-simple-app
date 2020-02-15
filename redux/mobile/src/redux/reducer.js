export const LOAD_ANUNCIOS = 'LOAD_ANUNCIOS';
export const LOAD_ANUNCIOS_SUCCESS = 'LOAD_ANUNCIOS_SUCCESS';
export const LOAD_ANUNCIOS_FAIL = 'LOAD_ANUNCIOS_FAIL';

const initialState = { anuncios: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ANUNCIOS:
      return { ...state, loading: true };
    case LOAD_ANUNCIOS_SUCCESS:
      return { ...state, loading: false, anuncios: action.payload.data };
    case LOAD_ANUNCIOS_FAIL:
      return { ...state, loading: false, error: 'Error getting anuncios info' };
    default:
      return state;
  }
}

export function listAnuncios() {
  return {
    type: LOAD_ANUNCIOS,
    payload: {
      request: {
        url: 'https://my-json-server.typicode.com/eduardobvale/demo/rentals'
      }
    }
  };
}