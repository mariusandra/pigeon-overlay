import { React, Inferno, Component } from '../src/infact'

import Map from 'pigeon-maps/infact'
import Overlay from 'pigeon-overlay'

import pigeon from './pigeon.jpg'

export default class Demo extends Component {
  render () {
    return (
      <div style={{textAlign: 'center', marginTop: 50}}>
        <Map center={[50.879, 4.6997]}
             zoom={12}
             width={600}
             height={400}>
          <Overlay anchor={[50.879, 4.6997]} offset={[60, 39]} style={{ boxShadow: '3px 3px 5px rgba(0,0,0,0.5)' }}>
            <img src={pigeon} width={120} height={79} alt='' style={{ display: 'block' }} />
          </Overlay>
        </Map>
      </div>
    )
  }
}
