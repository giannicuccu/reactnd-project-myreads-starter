import React, { Component } from 'react'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'

export default class LoadingBar extends Component {
    
  render() {
    return (
      <div>
        <Loading  show={this.props.show} color="#2E7C31" change={true}  showSpinner={false}/>
      </div>
    )
  }
}