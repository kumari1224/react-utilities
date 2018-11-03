import { limitFilters } from '../actions'

const limitFilter = (state = limitFilters.LIMIT_TWENTY, action) => {
  switch (action.type) {
    case 'SET_LIMIT':
      return action.filter
    default:
      return state
  }
}

export default limitFilter;
