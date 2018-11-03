import Modal from '../components/Modal';
import { connect } from 'react-redux';
import { hideModal } from '../actions';

const mapStateToProps = (state) =>  ({
  data : state.modal.data,
  show : state.modal.show 
}); 

const mapDispatchToProps=(dispatch)=>({
  hideModal:()=>dispatch(hideModal()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)