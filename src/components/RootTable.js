import React, { Component } from 'react';
import '../styles/style.css';
import TabledContainer from '../containers/TabledContainer';
import ModalRoot from '../containers/ModalRoot';
//import Tabled from './Tabled';

class RootTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      todosPerPage:20,
    }
  }
  componentDidMount() {
    //fetch data from api
    this.props.getData();
  }
  change=(event)=>{
    this.setState({todosPerPage: event.target.value});
  }

  render() {
    return (
      <div className="center App">
        <ModalRoot />
        <div className="">
          <select className="dropDown" onChange={this.change} value={this.state.todosPerPage}>
                  <option value="20">20</option>
                  <option value="50">50</option>
          </select>
        </div>
        <TabledContainer 
            data = {this.props.data}
            todosPerPage= {this.state.todosPerPage}
        />
      </div>
    );
  }
}

export default RootTable;
