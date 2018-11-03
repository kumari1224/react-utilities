
const startIndex = (state = 0, action) => {
  switch (action.type) {
    case 'SET_START_INDEX':
       return action.startIndex
    default:
      return state
  }
}

export default startIndex;
