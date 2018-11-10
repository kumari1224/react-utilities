import { connect } from 'react-redux';
import Tabled from '../components/Tabled';
import { showModal, deleteRows } from '../actions';

/**
 * 
 * @param {object} data global data from state
 * @param {Integer} startIndex current index of the table
 * @param {Integer} limitFilter limit as per user's choice
 */
const getUsersList=(data,startIndex,limitFilter)=>{
    //console.log("TableContainer DATA :" + data.length)
    //console.log("TableContainer START INDEX :" + startIndex)
    //console.log("TableContainer LIMIT :" + limitFilter)

    let endIndex = startIndex+limitFilter
    return data.slice(startIndex,endIndex)
}

const mapStateToProps = (state) =>  ({
    users : getUsersList(state.data,state.startIndex,state.limitFilter),
}); 

const mapDispatchToProps = (dispatch) =>({
    showModal:(values)=>dispatch(showModal(values)),
    deleteRows:(ids)=>dispatch(deleteRows(ids))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Tabled);
