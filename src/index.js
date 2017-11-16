import SvgElement from './elements/svg'
import LineElement from './elements/line'
import RectElement from './elements/rect'
import CircleElement from './elements/circle'
import EllipseElement from './elements/ellipse'
import PathElement from './elements/path'
import PolylineElement from './elements/polyline'
import PolygonElement from './elements/polygon'

export default class svgod {
  constructor(width, height) {
    this.vm = new SvgElement({
      width,
      height,
      viewBox: `0 0 ${width} ${height}`
    })
    this.el = this.vm.el
  }

  line() {
    return new LineElement({
      parent: this
    })
  }

  rect() {
    return new RectElement({
      parent: this
    })
  }

  circle() {
    return new CircleElement({
      parent: this
    })
  }

  ellipse() {
    return new EllipseElement({
      parent: this
    })
  }

  path() {
    return new PathElement({
      parent: this
    })
  }

  polyline() {
    return new PolylineElement({
      parent: this
    })
  }

  polygon() {
    return new PolygonElement({
      parent: this
    })
  }
}