// ======================================
//  Third File  created as View
// ======================================

import React, { Component } from 'react'
import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return <div>
        <div className=" row col-md-12">
          <h1 className="col-md-2">{this.props.counter}</h1>
          <div className="col-md-2">
            <button type="button" className="btn btn-primary">
              Increment
            </button>
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-primary">
              Decrement
            </button>
          </div>
        </div>
      </div>; 
  }
}

export default Counter;