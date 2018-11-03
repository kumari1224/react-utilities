import React, { Component } from 'react';
import '../styles/style.css';

class Modal extends Component{    
    render(){
        if(!this.props.show){
            return false;
        }
        console.log(this.props)
        const coverClass = 'modal-cover modal-cover-active'
        const containerClass = 'modal-container modal-container-active'
    
        return(<div>
                <div className={containerClass}>
                    <h3 className='modal-header'>{this.props.data.name}</h3>
                    <div className='modal-body'>
                        <div>{this.props.data.email}</div>
                        <div>{this.props.data.body}</div>
                    </div>
                    <div className='modal-footer'>
                        <button className='btn btn-primary' onClick={()=>this.props.hideModal()}>Close</button>
                    </div>
                </div>
                <div className={coverClass} onClick={()=>this.props.hideModal()}></div>
            </div>
        )
    }
}

export default Modal;