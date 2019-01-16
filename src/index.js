import { React, Inferno, Component } from './infact'
import PropTypes from 'prop-types'

export default class Overlay extends Component {
  static propTypes = process.env.BABEL_ENV === 'inferno' ? {} : {
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
    const { left, top, className, style = {} } = this.props

    return (
      <div style={{ position: 'absolute', transform: `translate(${left}px, ${top}px)`, ...style }} className={className || ''}>
        {this.props.children}
      </div>
    )
  }
}
