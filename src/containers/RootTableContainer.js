import { connect } from 'react-redux';
import { getData } from '../actions';
import RootTable from '../components/RootTable';

const mapStateToProps = (state) =>  ({
     data : state.data,
}); 

// wrap action creator with dispatch method
const mapDispatchToProps = (dispatch) => ({
     getData  : () => dispatch(getData()),
})  

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(RootTable);
