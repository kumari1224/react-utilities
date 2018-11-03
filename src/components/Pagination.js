import React,{ Component } from 'react'

/**
 * @todo for displaying the pagination properties
 */
class Pagination extends Component{
    render(){
        return(
            <button
                onClick={()=>this.props.onClick(this.props.startIndex,this.props.limitFilter)}
                disabled={this.props.active}
                style={{
                    marginLeft: '4px',
                }}
                
            >
                {this.props.children}
            </button>
        );
    }
}

export default Pagination;
