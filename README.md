# pigeon-overlay - Overlay component for pigeon-maps

[![npm version](https://img.shields.io/npm/v/pigeon-overlay.svg)](https://www.npmjs.com/package/pigeon-overlay)

React demo: https://mariusandra.github.io/pigeon-overlay/

Inferno demo: https://mariusandra.github.io/pigeon-overlay/inferno/

Example: https://github.com/mariusandra/pigeon-overlay/blob/master/demo/demo.js

API: https://github.com/mariusandra/pigeon-overlay/blob/master/src/index.js

To use in your component (with beta version 0.2.0):

```js
// default for React
import Overlay from 'pigeon-overlay'

// explicitly ask for the React version
import Overlay from 'pigeon-overlay/react'

// explicitly ask for the Inferno version
import Overlay from 'pigeon-overlay/inferno'

// choose the Inferno or React version based on BABEL_ENV
import Overlay from 'pigeon-overlay/infact'

// image in the overlay
import pigeon from './pigeon.jpg'

class Demo extends Component {
  render () {
    return (
      <Map defaultCenter={[50.879, 4.6997]} defaultZoom={12} width={600} height={400}>
        <Overlay anchor={[50.879, 4.6997]} offset={[60, 39]}>
          <img src={pigeon} width={120} height={79} alt='' />
        </Overlay>
      </Map>
    )
  }
}
```
