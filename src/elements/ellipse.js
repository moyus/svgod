import BaseElement from './base'

export default class EllipseElement extends BaseElement {
  constructor(options) {
    super('ellipse', options)
  }

  size(rx, ry) {
    this.el.setAttribute('rx', rx)
    this.el.setAttribute('ry', ry)

    return this
  }

  moveTo(x, y) {
    this.el.setAttribute('cx', x)
    this.el.setAttribute('cy', y)

    return this
  }
}