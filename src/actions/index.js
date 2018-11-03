import axios from "axios";

/**
 * @param {object} data - data fetched from api call   
 */
export const setData=(data)=>({
    type: "FETCH_DATA", 
    payload: data
})

//make api call and return data
export function getData() {
    return (dispatch, getState) => {
        console.log(getState());
        const request = axios.get("https://jsonplaceholder.typicode.com/comments");
        request.then(({ data }) => {
            dispatch(setData(data));
        });
    };
}
/**
 * @param {object} row - single row 
 */
export const showModal=(data)=>({
    type:'SHOW_MODAL',
    data
})

// Hiding modal
export const hideModal=(show)=>({
    type:'HIDE_MODAL',
    show:show
})

/**
 * @param {Object} data - data after deleting the particular row
 */
export const deleteRows= (id)=>({
    type:'DELETE_ROWS',
    id
})

/**
 * @param {Integer} filter - number of rows to be displayed on single page   
 */
export const setLimit=(filter)=>({
    type:'SET_LIMIT',
    filter
})


/**
 * @param {Integer} index - starting index of the table
 */
export const setStartIndex=(index)=>({
    type:'SET_START_INDEX',
    startIndex:index
})

export const limitFilters=({
    LIMIT_TWENTY:20,
    LIMIT_FIFTY :50,
    NEXT_INDEX:'NEXT_INDEX',
    PREV_INDEX:'PREV_INDEX',
})

