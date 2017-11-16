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

  line(from, to) {
    return new LineElement({
      parent: this
    })
  }

  rect(width, height) {
    return new RectElement({
      parent: this
    })
  }

  circle(radius) {
    return new CircleElement({
      parent: this
    })
  }

  ellipse(xRadius, yRadius) {
    return new EllipseElement({
      parent: this
    })
  }

  path(points) {
    return new PathElement({
      parent: this
    })
  }

  polyline(points) {
    return new PolylineElement({
      parent: this
    })
  }

  polygon(points) {
    return new PolygonElement({
      parent: this
    })
  }
}