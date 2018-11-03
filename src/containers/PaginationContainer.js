import { connect } from 'react-redux';
import { setStartIndex, limitFilters } from '../actions';
import Pagination from '../components/Pagination';

/**
 * Checking whether end of the page has been encountered
 * 
 * @param {Object} state global state 
 * @param {Integer} ownProps user defined limit
 */

const isActive=(state,ownProps)=>{
  let total_entries = state.data.length;
  let last_page = parseInt(total_entries/state.limitFilter);//Math.ceil(total_entries/state.limitFilter);
  let current_page = (state.startIndex/state.limitFilter);

  console.log("total entries "+total_entries)
  console.log("last page "+last_page)
  console.log("current page "+current_page)

  if(ownProps.filter===limitFilters.NEXT_INDEX){
    if(current_page>=last_page)
       return true;
    }
  else if(ownProps.filter===limitFilters.PREV_INDEX){
    if(state.startIndex===0)
      return true;
  }
  return false;
}


const mapStateToProps = (state,ownProps) => ({
  active:isActive(state,ownProps),
  startIndex:state.startIndex,
  limitFilter:state.limitFilter,
  currentPage:(state.startIndex/state.limitFilter)  //current page number
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick :(startIndex,limitFilter) =>{
    if(ownProps.filter===limitFilters.NEXT_INDEX){
      dispatch(setStartIndex(startIndex+limitFilter))
    }
    else if(ownProps.filter===limitFilters.PREV_INDEX){
      dispatch(setStartIndex(startIndex-limitFilter))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
