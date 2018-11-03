import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink';
import PaginationContainer from '../containers/PaginationContainer';
import { limitFilters } from '../actions';

class Footer extends Component{
  render(){
    return (
      <div>
      <div className="bottom_padding">
        <span>Show: </span>
        <FilterLink filter={limitFilters.LIMIT_TWENTY}>
          20
        </FilterLink>
        <FilterLink filter={limitFilters.LIMIT_FIFTY}>
          50
        </FilterLink>
      </div>
      <div className="bottom_padding">
        <PaginationContainer filter={limitFilters.PREV_INDEX}>
          &lt;&lt;prev
        </PaginationContainer>
        
        <PaginationContainer filter={limitFilters.NEXT_INDEX}>
          next&gt;&gt;
        </PaginationContainer>
      </div>
    </div>
    );
  }
}

export default Footer;
