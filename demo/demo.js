import React, { Component } from 'react'

import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

import pigeon from './pigeon.jpg'

export default class Demo extends Component {
  render () {
    return (
      <div>
        <Map center={[50.879, 4.6997]}
             zoom={12}
             width={600}
             height={400}>
          <Overlay anchor={[50.879, 4.6997]} offset={[60, 39]}>
            <img src={pigeon} width={120} height={79} alt='' />
          </Overlay>
        </Map>
      </div>
    )
  }
}
