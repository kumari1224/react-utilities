const initialState = {
    show:false,
    data: {}
}

export default function modal(state = initialState, action) {
    switch (action.type) {
      case 'SHOW_MODAL':
      console.log("show modal")
        return {
          show:true,
          data: action.data
        }
      case 'HIDE_MODAL':
      console.log("hide modal")
        return {
          show:false,
        }
      default:
        return state
    }
}