import React, { Component } from 'react';
import '../styles/style.css';
import TableContainer from '../containers/TableContainer';
import Footer from './Footer';
import ModalRoot from '../containers/ModalRoot';

class RootTable extends Component {
  componentDidMount() {
    //fetch data from api
    this.props.getData();
  }

  render() {
    return (
      <div className="center App">
        <ModalRoot />
        <TableContainer />
        <Footer />
      </div>
    );
  }
}

export default RootTable;
