import BaseElement from './base'
import LineElement from './line'
import RectElement from './rect'
import CircleElement from './circle'
import EllipseElement from './ellipse'
import PathElement from './path'
import PolylineElement from './polyline'
import PolygonElement from './polygon'
import TextElement from './text'

export default class ContainerElement extends BaseElement {
  constructor(tag, options) {
    super(tag, options)
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

  polygon(points) {
    return new PolygonElement({
      parent: this
    })
  }

  text() {
    return new TextElement({
      parent: this
    })
  }
}