import React,{Component} from 'react';
import $ from 'jquery';
import '../styles/style.css';
import ModalRoot from '../containers/ModalRoot';

class Tabled extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: 1,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
      pageBound: 3,
      delete:[],
      isPoint:false,
    };
  }
  componentDidUpdate() {
    $("ul li.active").removeClass('active');
    $('ul li'+this.state.currentPage).addClass('active');
  }
  
  handleClick=(event)=>{
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid,
    });
    $("ul li.active").removeClass('active');
    $('ul li#'+listid).addClass('active');
    this.setPrevAndNextBtnClass(listid);
  }

  setPrevAndNextBtnClass=(listid)=>{
    let totalPage = Math.ceil(this.props.data.length / this.props.todosPerPage);
    this.setState({isNextBtnActive: 'disabled'});
    this.setState({isPrevBtnActive: 'disabled'});
    
    if(totalPage === listid && totalPage > 1){
      this.setState({isPrevBtnActive: ''});
    }
    else if(listid === 1 && totalPage > 1){
      this.setState({isNextBtnActive: ''});
    }
    else if(totalPage > 1){
      this.setState({isNextBtnActive: ''});
      this.setState({isPrevBtnActive: ''});
    }
  }
  
  btnIncrementClick=()=>{
    this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
    this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid});
    this.setPrevAndNextBtnClass(listid);
  }

  btnDecrementClick=()=>{
    this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
    this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid});
    this.setPrevAndNextBtnClass(listid);
  }

  btnPrevClick=()=> {
    if((this.state.currentPage -1)%this.state.pageBound === 0 ){
      this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
      this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
  }

  btnNextClick=()=>{
        if((this.state.currentPage +1) > this.state.upperPageBound ){
            this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
            this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
        }
        let listid = this.state.currentPage + 1; 
        this.setState({ currentPage : listid});
        this.setPrevAndNextBtnClass(listid);
  }
  
  handleCheck = (id)=>{
    let array = this.state.delete;
    let test = array.includes(id)
    let len = array.length;
    if(test){
      for( var i = 0; i < len; i++){ 
        if (array[i] === id) {
          array.splice(i, 1); 
        }
      }
      if(array.length>0){
        this.setState({delete:array,isPoint:true});
      }
      else{
        this.setState({delete:array,isPoint:false})
      }
    }
    else{
      this.setState(prevState=>({
        delete:[...prevState.delete,id],
        isPoint:true
      }))
    }
    
  }

  deleteRows = ()=>{
    let prompt = window.confirm("Confirm delete "+this.state.delete.length+" items?")
    if(prompt===true){
      this.props.deleteRows(this.state.delete)
    } else {
      console.log("cancelled");
    }
    this.setState({delete:[]});
  }

  refreshPage =()=>{
    window.location.reload();
  }
  /**
   * calling modal and send values to be displayed on
   * @param {object} value particular row values that has to be displayed
   */
  callModal = (value) => {
    this.props.showModal(value)
    return <ModalRoot value={value} />
  }


  render(){
    const { currentPage, upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state ;
    let todos = this.props.data;
    let todosPerPage = this.props.todosPerPage;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
    
    const renderTodos = currentTodos.map((todo, index) => {
      return <tr key={index} className="row100-body">
                    <td key={todo.id} className="cell100 column1"><input type="checkbox" onChange={()=>this.handleCheck(todo.id)} /></td>
                    <td className="cell100 column2 pointer" onClick={()=>this.callModal(todo)}> {todo.id} {todo.name}, {todo.email}....</td>
              </tr>;
    });
    // Logic for displaying page numbers
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
    if(number === 1 && currentPage === 1){
      return(
        <li key={number} className='active' id={number}>
          <p className="hyperlink" id={number} onClick={this.handleClick}>{number}</p>
        </li>
      )
    }
    else if((number < upperPageBound + 1) && number > lowerPageBound){
      return(
        <li key={number} id={number}>
          <p className="hyperlink" id={number} onClick={this.handleClick}>{number}</p>
        </li>
    )
  }
  return null;
});

let pageIncrementBtn = null;
if(pageNumbers.length > upperPageBound){
  pageIncrementBtn = <li className=''>
                        <p className="hyperlink" onClick={this.btnIncrementClick}> &hellip; </p>
                      </li>
}
let pageDecrementBtn = null;
if(lowerPageBound >= 1){
    pageDecrementBtn = <li className=''><p className="hyperlink" onClick={this.btnDecrementClick}> &hellip; </p></li>
}
let renderPrevBtn = null;
if(isPrevBtnActive === 'disabled') {
  renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> Prev </span></li>
} 
else{
  renderPrevBtn = <li className={isPrevBtnActive}>
                      <p className="hyperlink" id="btnPrev" onClick={this.btnPrevClick}> Prev </p>
                  </li>
}
let renderNextBtn = null;
if(isNextBtnActive === 'disabled') {
  renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next </span></li>
}
else{
  renderNextBtn = <li className={isNextBtnActive}><p className="hyperlink" id="btnNext" onClick={this.btnNextClick}> Next </p></li>
}
    const deletePointerHeader = this.state.isPoint ? "cell100 column1 pointer":"cell100 column1";
    return(
      <div className="center">
      <div className="table100 ver1 m-b-110">
        <div className="table100-head">
          <table>
              <thead>
                <tr className="row100 head">
                    <th className={deletePointerHeader} onClick={() => this.deleteRows()}>Delete</th>
                    <th className="cell100 column2">Name</th>
                </tr>
              </thead>
          </table>
        </div>
        <div className="table100-body js-pscroll ps ps--active-y">
          <table>
              <tbody>
              {renderTodos}
              </tbody>
          </table>
        </div>
      </div>
      <button onClick={()=>this.refreshPage()} className="inline footer-padding btn hyperlink">Refresh</button>
      <div className="pagination">
        <ul>
              {renderPrevBtn}
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
              {renderNextBtn}
        </ul>
      </div>
      </div>
    )
  }
}
export default Tabled;