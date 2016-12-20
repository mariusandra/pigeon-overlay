import React, { Component, PropTypes } from 'react'

export default class Overlay extends Component {
  static propTypes = {
    // input
    anchor: PropTypes.array.isRequired,
    offset: PropTypes.array,

    // passed to div
    className: PropTypes.string,

    // pigeon variables
    left: PropTypes.number,
    top: PropTypes.number,

    // pigeon functions
    latLngToPixel: PropTypes.func,
    pixelToLatLng: PropTypes.func
  }

  // render

  render () {
    const { left, top, className } = this.props

    return (
      <div style={{ position: 'absolute', left: left, top: top }} className={className || ''}>
        {this.props.children}
      </div>
    )
  }
}
