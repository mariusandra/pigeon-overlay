webpackJsonp([0],[,,,,function(t,e,o){"use strict";e.React=o(0),e.ReactDOM=o(3),e.Component=e.React.Component},,,function(t,e,o){t.exports=o(25)()},,,,,,,,,,,,function(t,e,o){t.exports=o(20)},function(t,e,o){"use strict";var n=o(4),a=o(21),r=function(t){return t&&t.__esModule?t:{default:t}}(a);o(32),n.ReactDOM.render(n.React.createElement(r.default,null),document.getElementById("root"))},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),s=o(4),u=o(22),c=n(u),f=o(30),h=n(f),p=o(31),m=n(p),d=function(t){function e(){return a(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"render",value:function(){return s.React.createElement("div",{style:{textAlign:"center",marginTop:50}},s.React.createElement(c.default,{center:[50.879,4.6997],zoom:12,width:600,height:400},s.React.createElement(h.default,{anchor:[50.879,4.6997],offset:[60,39],style:{boxShadow:"3px 3px 5px rgba(0,0,0,0.5)"}},s.React.createElement("img",{src:m.default,width:120,height:79,alt:"",style:{display:"block"}}))))}}]),e}(s.Component);e.default=d},function(t,e,o){t.exports=o(23)},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,o){return"https://maps.wikimedia.org/osm-intl/"+o+"/"+t+"/"+e+("undefined"!=typeof window&&window.devicePixelRatio>=2?"@2x":"")+".png"}function u(t,e){return t/Math.pow(2,e)*360-180}function c(t,e){var o=Math.PI-2*Math.PI*t/Math.pow(2,e);return 180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o)))}function f(t,e){var o=(0,g.default)(t);return[e.clientX-o.x,e.clientY-o.y]}function h(t){return t*(2-t)}Object.defineProperty(e,"__esModule",{value:!0});var p=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),m=o(24),d=o(7),v=n(d),_=o(27),g=n(_),M=o(28),w=n(M),y=o(29),b=n(y),T=300,x=1500,C=150,S=40,z=2,P=300,E=60,k=function(){},O=function(t,e){return(t+180)/360*Math.pow(2,e)},D=function(t,e){return(1-Math.log(Math.tan(t*Math.PI/180)+1/Math.cos(t*Math.PI/180))/Math.PI)/2*Math.pow(2,e)},R=u(0,10),A=c(Math.pow(2,10),10),Z=u(Math.pow(2,10),10),L=c(0,10),j=function(t){function e(t){r(this,e);var o=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.setCenterZoomTarget=function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T;if(o.props.animate){if(o._isAnimating){window.cancelAnimationFrame(o._animFrame);var i=o.animationStep(window.performance.now()),l=i.centerStep,s=i.zoomStep;o._centerStart=l,o._zoomStart=s}else o._isAnimating=!0,o._centerStart=o.limitCenterAtZoom([o._lastCenter[0],o._lastCenter[1]],o._lastZoom),o._zoomStart=o._lastZoom;o._animationStart=window.performance.now(),o._animationEnd=o._animationStart+r,a?(o._zoomAround=a,o._centerTarget=o.calculateZoomCenter(o._lastCenter,a,o._lastZoom,e)):(o._zoomAround=null,o._centerTarget=t),o._zoomTarget=e,o._animFrame=window.requestAnimationFrame(o.animate)}else if(a){var u=o.calculateZoomCenter(o._lastCenter,a,o._lastZoom,e);o.setCenterZoom(u,e,n)}else o.setCenterZoom(t,e,n)},o.animationStep=function(t){var e=o._animationEnd-o._animationStart,n=Math.max(t-o._animationStart,0),a=h(n/e),r=(o._zoomTarget-o._zoomStart)*a,i=o._zoomStart+r;if(o._zoomAround){return{centerStep:o.calculateZoomCenter(o._centerStart,o._zoomAround,o._zoomStart,i),zoomStep:i}}return{centerStep:[o._centerStart[0]+(o._centerTarget[0]-o._centerStart[0])*a,o._centerStart[1]+(o._centerTarget[1]-o._centerStart[1])*a],zoomStep:i}},o.animate=function(t){if(t>=o._animationEnd)o._isAnimating=!1,o.setCenterZoom(o._centerTarget,o._zoomTarget);else{var e=o.animationStep(t),n=e.centerStep,a=e.zoomStep;o.setCenterZoom(n,a),o._animFrame=window.requestAnimationFrame(o.animate)}},o.stopAnimating=function(){o._isAnimating&&(o._isAnimating=!1,window.cancelAnimationFrame(o._animFrame))},o.limitCenterAtZoom=function(t){return[Math.max(Math.min(isNaN(t[0])?o.state.center[0]:t[0],L),A),Math.max(Math.min(isNaN(t[1])?o.state.center[1]:t[1],Z),R)]},o.setCenterZoom=function(t,e){var n=o.limitCenterAtZoom(t,e);if(Math.round(o.state.zoom)!==Math.round(e)){var r=o.tileValues(o.props,o.state),i=o.tileValues(o.props,{center:n,zoom:e}),l=o.state.oldTiles;o.setState({oldTiles:l.filter(function(t){return t.roundedZoom!==r.roundedZoom}).concat(r)},k);for(var s={},u=i.tileMinX;u<=i.tileMaxX;u++)for(var c=i.tileMinY;c<=i.tileMaxY;c++){var f=u+"-"+c+"-"+i.roundedZoom;s[f]=!1}o._loadTracker=s}o.setState({center:n,zoom:e},k);var h=o.props.zoom?o.props.zoom:o._lastZoom,p=o.props.center?o.props.center:o._lastCenter;(Math.abs(h-e)>.001||Math.abs(p[0]-n[0])>1e-5||Math.abs(p[1]-n[1])>1e-5)&&(o._lastZoom=e,o._lastCenter=[].concat(a(n)),o.syncToProps(n,e))},o.imageLoaded=function(t){if(o._loadTracker&&t in o._loadTracker){o._loadTracker[t]=!0;0===Object.keys(o._loadTracker).filter(function(t){return!o._loadTracker[t]}).length&&o.setState({oldTiles:[]},k)}},o.handleTouchStart=function(t){if(1===t.touches.length){var e=t.touches[0],n=f(o._containerRef,e);if(o.coordsInside(n))if(o._touchStartCoords=[[e.clientX,e.clientY]],o.stopAnimating(),t.preventDefault(),o._lastTap&&window.performance.now()-o._lastTap<P){var a=o.pixelToLatLng(o._touchStartCoords[0]);o.setCenterZoomTarget(null,Math.max(1,Math.min(o.state.zoom+1,18)),!1,a)}else o._lastTap=window.performance.now(),o.startTrackingMoveEvents(n)}else if(2===t.touches.length&&o._touchStartCoords){t.preventDefault(),o.stopTrackingMoveEvents(),(o.state.pixelDelta||o.state.zoomDelta)&&o.sendDeltaChange();var r=t.touches[0],i=t.touches[1];o._touchStartCoords=[[r.clientX,r.clientY],[i.clientX,i.clientY]],o._touchStartMidPoint=[(r.clientX+i.clientX)/2,(r.clientY+i.clientY)/2],o._touchStartDistance=Math.sqrt(Math.pow(r.clientX-i.clientX,2)+Math.pow(r.clientY-i.clientY,2))}},o.handleTouchMove=function(t){if(1===t.touches.length&&o._touchStartCoords){t.preventDefault();var e=t.touches[0],n=f(o._containerRef,e);o.trackMoveEvents(n),o.setState({pixelDelta:[e.clientX-o._touchStartCoords[0][0],e.clientY-o._touchStartCoords[0][1]]},k)}else if(2===t.touches.length&&o._touchStartCoords){var a=o.props,r=a.width,i=a.height,l=o.state.zoom;t.preventDefault();var s=t.touches[0],u=t.touches[1],c=(0,g.default)(o._containerRef),h=[(s.clientX+u.clientX)/2,(s.clientY+u.clientY)/2],p=[h[0]-o._touchStartMidPoint[0],h[1]-o._touchStartMidPoint[1]],m=Math.sqrt(Math.pow(s.clientX-u.clientX,2)+Math.pow(s.clientY-u.clientY,2)),d=Math.min(18,l+Math.log2(m/o._touchStartDistance))-l,v=Math.pow(2,d),_=[(c.x+r/2-h[0])*(v-1),(c.y+i/2-h[1])*(v-1)];o.setState({zoomDelta:d,pixelDelta:[_[0]+p[0]*v,_[1]+p[1]*v]},k)}},o.handleTouchEnd=function(t){if(o._touchStartCoords){t.preventDefault();var e=o.sendDeltaChange(),n=e.center,a=e.zoom;if(0===t.touches.length){o._touchStartCoords=null;var r=f(o._containerRef,t.changedTouches[0]);o.throwAfterMoving(r,n,a)}else if(1===t.touches.length){var i=t.touches[0],l=f(o._containerRef,i);o._touchStartCoords=[[i.clientX,i.clientY]],o.startTrackingMoveEvents(l)}}},o.handleMouseDown=function(t){var e=f(o._containerRef,t);if(0===t.button&&!(0,w.default)(t.target,"pigeon-drag-block")&&o.coordsInside(e))if(o.stopAnimating(),t.preventDefault(),o._lastClick&&window.performance.now()-o._lastClick<P){var n=o.pixelToLatLng(o._mousePosition);o.setCenterZoomTarget(null,Math.max(1,Math.min(o.state.zoom+1,18)),!1,n)}else o._lastClick=window.performance.now(),o._mouseDown=!0,o._dragStart=e,o.startTrackingMoveEvents(e)},o.handleMouseMove=function(t){o._mousePosition=f(o._containerRef,t),o._mouseDown&&o._dragStart&&(o.trackMoveEvents(o._mousePosition),o.setState({pixelDelta:[o._mousePosition[0]-o._dragStart[0],o._mousePosition[1]-o._dragStart[1]]},k))},o.handleMouseUp=function(t){var e=o.state.pixelDelta;if(o._mouseDown){o._mouseDown=!1;var n=f(o._containerRef,t);if(o.props.onClick&&!(0,w.default)(t.target,"pigeon-click-block")&&(!e||Math.abs(e[0])+Math.abs(e[1])<=z)){var a=o.pixelToLatLng(n);o.props.onClick({event:t,latLng:a,pixel:n}),o.setState({pixelDelta:null},k)}else{var r=o.sendDeltaChange(),i=r.center,l=r.zoom;o.throwAfterMoving(n,i,l)}}},o.startTrackingMoveEvents=function(t){o._moveEvents=[{timestamp:window.performance.now(),coords:t}]},o.stopTrackingMoveEvents=function(){o._moveEvents=[]},o.trackMoveEvents=function(t){var e=window.performance.now();e-o._moveEvents[o._moveEvents.length-1].timestamp>40&&(o._moveEvents.push({timestamp:e,coords:t}),o._moveEvents.length>2&&o._moveEvents.shift())},o.throwAfterMoving=function(t,e,n){var a=o.props,r=a.width,i=a.height,l=a.animate,s=window.performance.now(),f=o._moveEvents.shift();if(f&&l){var h=Math.max(s-f.timestamp,1),p=[(t[0]-f.coords[0])/h*120,(t[1]-f.coords[1])/h*120],m=Math.sqrt(p[0]*p[0]+p[1]*p[1]);if(m>S){var d=Math.sqrt(r*r+i*i),v=u(O(e[1],n)-p[0]/256,n),_=c(D(e[0],n)-p[1]/256,n);o.setCenterZoomTarget([_,v],n,!1,null,x*m/d)}}o.stopTrackingMoveEvents()},o.sendDeltaChange=function(){var t=o.state,e=t.center,n=t.zoom,a=t.pixelDelta,r=t.zoomDelta,i=e[0],l=e[1];return(a||0!==r)&&(l=u(O(e[1],n+r)-(a?a[0]/256:0),n+r),i=c(D(e[0],n+r)-(a?a[1]/256:0),n+r),o.setCenterZoom([i,l],n+r)),o.setState({pixelDelta:null,zoomDelta:0},k),{center:o.limitCenterAtZoom([i,l],n+r),zoom:n+r}},o.getBounds=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.state.center,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.zoomPlusDelta(),n=o.props,a=n.width,r=n.height;return{ne:o.pixelToLatLng([a-1,0],t,e),sw:o.pixelToLatLng([0,r-1],t,e)}},o.syncToProps=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.state.center,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.state.zoom,n=o.props.onBoundsChanged;if(n){n({center:t,zoom:e,bounds:o.getBounds(t,e),initial:!o._boundsSynced}),o._boundsSynced=!0}},o.handleWheel=function(t){if(o.props.zoomOnMouseWheel||t.metaKey){t.preventDefault();var e=-t.deltaY/C;if(o._zoomTarget){var n=o._zoomTarget-o.state.zoom;o.zoomAroundMouse(e+n)}else o.zoomAroundMouse(e)}else o.state.showMetaWarning||o.setState({showMetaWarning:!0}),o._metaTimeout&&window.clearTimeout(o._metaTimeout),o._metaTimeout=window.setTimeout(o.clearMetaWarning,300)},o.clearMetaWarning=function(){o.setState({showMetaWarning:!1})},o.zoomAroundMouse=function(t){var e=o.state.zoom;if(!(!o._mousePosition||1===e&&t<0||18===e&&t>0)){var n=o.pixelToLatLng(o._mousePosition);o.setCenterZoomTarget(null,Math.max(1,Math.min(e+t,18)),!1,n)}},o.zoomPlusDelta=function(){return o.state.zoom+o.state.zoomDelta},o.pixelToLatLng=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.state.center,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.zoomPlusDelta(),a=o.props,r=a.width,i=a.height,l=o.state.pixelDelta,s=[(t[0]-r/2-(l?l[0]:0))/256,(t[1]-i/2-(l?l[1]:0))/256],f=O(e[1],n)+s[0],h=D(e[0],n)+s[1];return o.limitCenterAtZoom([c(h,n),u(f,n)],n)},o.latLngToPixel=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.state.center,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.zoomPlusDelta(),a=o.props,r=a.width,i=a.height,l=o.state.pixelDelta,s=o.limitCenterAtZoom(e),u=O(s[1],n),c=D(s[0],n),f=O(t[1],n),h=D(t[0],n);return[256*(f-u)+r/2+(l?l[0]:0),256*(h-c)+i/2+(l?l[1]:0)]},o.calculateZoomCenter=function(t,e,n,a){var r=o.props,i=r.width,l=r.height,s=o.latLngToPixel(e,t,n),u=o.latLngToPixel(e,t,a),c=o.pixelToLatLng([i/2+u[0]-s[0],l/2+u[1]-s[1]],t,a);return o.limitCenterAtZoom(c,a)},o.setRef=function(t){o._containerRef=t},o.syncToProps=(0,b.default)(o.syncToProps,E),o._mousePosition=null,o._dragStart=null,o._mouseDown=!1,o._moveEvents=[],o._lastClick=null,o._lastTap=null,o._touchStartCoords=null,o._isAnimating=!1,o._animationStart=null,o._animationEnd=null,o._centerTarget=null,o._zoomTarget=null,o._lastZoom=t.defaultZoom?t.defaultZoom:t.zoom,o._lastCenter=t.defaultCenter?t.defaultCenter:t.center,o._boundsSynced=!1,o.state={zoom:o._lastZoom,center:o._lastCenter,zoomDelta:0,pixelDelta:null,oldTiles:[],showMetaWarning:!1},o}return l(e,t),p(e,[{key:"componentDidMount",value:function(){var t=window.addEventListener;t("mousedown",this.handleMouseDown),t("mouseup",this.handleMouseUp),t("mousemove",this.handleMouseMove),t("touchstart",this.handleTouchStart),t("touchmove",this.handleTouchMove),t("touchend",this.handleTouchEnd),this.syncToProps()}},{key:"componentWillUnmount",value:function(){var t=window.removeEventListener;t("mousedown",this.handleMouseDown),t("mouseup",this.handleMouseUp),t("mousemove",this.handleMouseMove),t("touchstart",this.handleTouchStart),t("touchmove",this.handleTouchMove),t("touchend",this.handleTouchEnd)}},{key:"componentWillReceiveProps",value:function(t){if((t.center||t.zoom)&&(t.center&&(t.center[0]!==this.props.center[0]||t.center[1]!==this.props.center[1])||t.zoom!==this.props.zoom)){var e=t.center?t.center:this.state.center,o=t.zoom?t.zoom:this.state.zoom;(Math.abs(o-this.state.zoom)>.001||Math.abs(e[0]-this.state.center[0])>1e-4||Math.abs(e[1]-this.state.center[1])>1e-4)&&this.setCenterZoomTarget(e,o,!0)}}},{key:"coordsInside",value:function(t){var e=this.props,o=e.width,n=e.height;if(t[0]<0||t[1]<0||t[0]>=o||t[1]>=n)return!1;var a=this._containerRef,r=(0,g.default)(a),i=document.elementFromPoint(t[0]+r.x,t[1]+r.y);return a===i||a.contains(i)}},{key:"tileValues",value:function(t,e){var o=t.width,n=t.height,a=e.center,r=e.zoom,i=e.pixelDelta,l=e.zoomDelta,s=Math.round(r+(l||0)),u=Math.pow(2,r+(l||0)-s),c=o/u,f=n/u,h=O(a[1],s)-(i?i[0]/256/u:0),p=D(a[0],s)-(i?i[1]/256/u:0),m=c/2/256,d=f/2/256;return{tileMinX:Math.floor(h-m),tileMaxX:Math.floor(h+m),tileMinY:Math.floor(p-d),tileMaxY:Math.floor(p+d),tileCenterX:h,tileCenterY:p,roundedZoom:s,zoomDelta:l||0,scaleWidth:c,scaleHeight:f,scale:u}}},{key:"renderTiles",value:function(){for(var t=this,e=this.state.oldTiles,o=this.props.provider||s,n=this.tileValues(this.props,this.state),a=n.tileMinX,r=n.tileMaxX,i=n.tileMinY,l=n.tileMaxY,u=n.tileCenterX,c=n.tileCenterY,f=n.roundedZoom,h=n.scaleWidth,p=n.scaleHeight,d=n.scale,v=[],_=0;_<e.length;_++){var g=e[_],M=g.roundedZoom-f;if(!(Math.abs(M)>4||0===M))for(var w=1/Math.pow(2,M),y=256*-(a-g.tileMinX*w),b=256*-(i-g.tileMinY*w),T=Math.max(g.tileMinX,0),x=Math.max(g.tileMinY,0),C=Math.min(g.tileMaxX,Math.pow(2,g.roundedZoom)-1),S=Math.min(g.tileMaxY,Math.pow(2,g.roundedZoom)-1),z=T;z<=C;z++)for(var P=x;P<=S;P++)v.push({key:z+"-"+P+"-"+g.roundedZoom,url:o(z,P,g.roundedZoom),left:y+256*(z-g.tileMinX)*w,top:b+256*(P-g.tileMinY)*w,width:256*w,height:256*w,active:!1})}for(var E=Math.max(a,0),k=Math.max(i,0),O=Math.min(r,Math.pow(2,f)-1),D=Math.min(l,Math.pow(2,f)-1),R=E;R<=O;R++)for(var A=k;A<=D;A++)v.push({key:R+"-"+A+"-"+f,url:o(R,A,f),left:256*(R-a),top:256*(A-i),width:256,height:256,active:!0});return m.React.createElement("div",{style:{width:h,height:p,position:"absolute",top:0,left:0,overflow:"hidden",willChange:"transform",transform:"scale("+d+", "+d+")",transformOrigin:"top left"}},m.React.createElement("div",{style:{position:"absolute",width:256*(r-a+1),height:256*(l-i+1),willChange:"transform",transform:"translate("+-(256*(u-a)-h/2)+"px, "+-(256*(c-i)-p/2)+"px)"}},v.map(function(e){return m.React.createElement("img",{key:e.key,src:e.url,width:e.width,height:e.height,onLoad:function(){return t.imageLoaded(e.key)},style:{position:"absolute",left:e.left,top:e.top,willChange:"transform",transform:e.transform,transformOrigin:"top left",opacity:1}})})))}},{key:"renderOverlays",value:function(){var t=this,e=this.props,o=e.width,n=e.height,a=this.state.center,r={bounds:this.getBounds(),zoom:this.zoomPlusDelta(),center:a,width:o,height:n},i=void 0;return i=m.React.Children.map(this.props.children,function(e){var o=e.props,n=o.anchor,i=o.position,l=o.offset,s=t.latLngToPixel(n||i||a);return m.React.cloneElement(e,{left:s[0]-(l?l[0]:0),top:s[1]-(l?l[1]:0),latLngToPixel:t.latLngToPixel,pixelToLatLng:t.pixelToLatLng,mapState:r})}),m.React.createElement("div",{style:{position:"absolute",width:o,height:n,top:0,left:0}},i)}},{key:"renderAttribution",value:function(){var t=this.props,e=t.attribution,o=t.attributionPrefix;if(!1===e)return null;var n={color:"#0078A8",textDecoration:"none"};return m.React.createElement("div",{key:"attr",className:"pigeon-attribution",style:{position:"absolute",bottom:0,right:0,fontSize:"11px",padding:"2px 5px",background:"rgba(255, 255, 255, 0.7)",fontFamily:"'Helvetica Neue', Helvetica, Arial, sans-serif",color:"#333"}},!1===o?null:m.React.createElement("span",null,o||m.React.createElement("a",{href:"https://github.com/mariusandra/pigeon-maps",style:n},"Pigeon")," | "),e||m.React.createElement("span",null," © ",m.React.createElement("a",{href:"https://www.openstreetmap.org/copyright",style:n},"OpenStreetMap")," contributors"))}},{key:"renderMetaWarning",value:function(){var t=this.props,e=t.zoomOnMouseWheel,o=t.mouseWheelMetaText,n=t.width,a=t.height;if(!e&&o){var r={position:"absolute",top:0,left:0,width:n,height:a,overflow:"hidden",pointerEvents:"none",opacity:this.state.showMetaWarning?100:0,transition:"opacity 300ms",background:"rgba(0,0,0,0.5)",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center",fontSize:22,fontFamily:'"Arial", sans-serif'},i=window.navigator&&window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"⊞";return m.React.createElement("div",{style:r},o.replace("META",i))}return null}},{key:"render",value:function(){var t=this.props,e=t.width,o=t.height;return m.React.createElement("div",{style:{width:e,height:o,position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd"},ref:this.setRef,onWheel:this.handleWheel},this.renderTiles(),this.renderOverlays(),this.renderAttribution(),this.renderMetaWarning())}}]),e}(m.Component);j.propTypes={center:v.default.array,defaultCenter:v.default.array,zoom:v.default.number,defaultZoom:v.default.number,width:v.default.number,height:v.default.number,provider:v.default.func,children:v.default.node,animate:v.default.bool,zoomOnMouseWheel:v.default.bool,mouseWheelMetaText:v.default.string,attribution:v.default.any,attributionPrefix:v.default.any,onClick:v.default.func,onBoundsChanged:v.default.func},j.defaultProps={animate:!0,zoomOnMouseWheel:!0,mouseWheelMetaText:"Use META+wheel to zoom!"},e.default=j},function(t,e,o){"use strict";e.React=o(0),e.ReactDOM=o(3),e.Component=e.React.Component},function(t,e,o){"use strict";var n=o(1),a=o(2),r=o(26);t.exports=function(){function t(t,e,o,n,i,l){l!==r&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var o={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return o.checkPropTypes=n,o.PropTypes=o,o}},function(t,e,o){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,o){"use strict";function n(t){for(var e=0,o=0,n=!0;t;)e+=t.offsetLeft-(n?0:t.scrollLeft)+t.clientLeft,o+=t.offsetTop-(n?0:t.scrollTop)+t.clientTop,t=t.offsetParent,n=!1;return{x:e,y:o}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,o){"use strict";function n(t,e){for(;t;){if(t.classList.contains(e))return!0;t=t.offsetParent}return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,o){"use strict";function n(t,e){var o=void 0;return function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=this;clearTimeout(o),o=setTimeout(function(){return t.apply(i,a)},e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,o){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},l=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),s=o(4),u=o(7),c=function(t){return t&&t.__esModule?t:{default:t}}(u),f=function(t){function e(){return n(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,t),l(e,[{key:"render",value:function(){var t=this.props,e=t.left,o=t.top,n=t.className,a=t.style,r=void 0===a?{}:a;return s.React.createElement("div",{style:i({position:"absolute",transform:"translate("+e+"px, "+o+"px)"},r),className:n||""},this.props.children)}}]),e}(s.Component);f.propTypes={anchor:c.default.array.isRequired,offset:c.default.array,className:c.default.string,left:c.default.number,top:c.default.number,latLngToPixel:c.default.func,pixelToLatLng:c.default.func},e.default=f},function(t,e,o){t.exports=o.p+"pigeon.jpg"},function(t,e,o){t.exports=o.p+"index.html"}],[19]);