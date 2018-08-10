import React, { Component } from 'react'
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'
import PropTypes from 'prop-types';


class LoadingBar extends Component {
  
  render() {
    return (
      <div>
        <Loading  show={this.props.show} color="#2E7C31" change={true}  showSpinner={false}/>
      </div>
    )
  }
}

LoadingBar.propTypes = {
  show: PropTypes.bool.isRequired
};

export default LoadingBar