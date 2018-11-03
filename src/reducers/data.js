const data = (state=[],action) =>{
    switch(action.type){
        case 'FETCH_DATA':
            return action.payload
        case 'DELETE_ROWS':
            let int_arr = action.id
            console.log("DELETED ROWS :"+action.id)
            return state.filter(value=>!int_arr.includes(value.id));
        default:
            return state;
    }
}

export default data;