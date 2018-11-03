import React, { Component } from 'react'

/**
 * @todo for limits, i.e. how many rows should be displayed on single page
 */
class Link extends Component{
    render(){
        return(
            <button
                onClick={this.props.onClick}
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
export default Link;
