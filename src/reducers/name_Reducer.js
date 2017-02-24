// import * as type from '../constants/ActionTypes';

export function sample_reducer(state = {}, action) {
    switch (action.type) {

      case 'constant':
        return Object.assign({}, state, {
          somedata:action.payload.data
        });


      default:
          return state;
    }

}


