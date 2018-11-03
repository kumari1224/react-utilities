import React, { Component } from 'react';
import '../styles/style.css';
import ModalRoot from '../containers/ModalRoot';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      delete:[]
    }
  }
  /**
   * calling modal and send values to be displayed on
   * @param {object} value particular row values that has to be displayed
   */
  callModal = (value) => {
    this.props.showModal(value)
    return <ModalRoot value={value} />
  }
  /**
   * collect all the rows to be deleted
   * @param {Integer} id id of the users that has to be deleted
   */

  handleCheck = (id)=>{
    this.setState(prevState=>({
      delete:[...prevState.delete,id]
    }))
  }

  /**
   * @todo delete all the selected rows
   */
  deleteRows = ()=>{
    this.props.deleteRows(this.state.delete)
  }
  /**
   * preparing table's rows
   * @param {Object} values particular row value putting into table
   */
   renderUser = (values)=> {
    return (
      <tbody key={values.id}>
        <tr>
            <td>
              <input type="checkbox" onChange={()=>this.handleCheck(values.id)} />  
            </td>
            <td onClick={()=>this.callModal(values)}>{values.id} -{values.name}, {values.email}.......More info</td>
        </tr>
      </tbody>
    );
  }
  /**
   * @todo build a table 
   */
  render() {
    let data = this.props.users;
    return (
      <div className="center">
        <table className="table">
            <thead>
                <tr>
                    <th className="pointer" onClick={()=>this.deleteRows()}>Delete</th>
                    <th>Name</th>
                </tr>
            </thead>
          {data.map(values=>this.renderUser(values))}
        </table>
      </div>
    );
  }
}

export default Table;