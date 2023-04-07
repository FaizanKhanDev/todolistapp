import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
   <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 text-white shadow-lg p-3  mx-auto">
        <h1 className='text-center text-white'>Today's Plan</h1>
        </div>

      </div>
   </div>
    )
  }
}



