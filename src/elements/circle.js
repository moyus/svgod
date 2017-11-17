import BaseElement from './base'

export default class CircleElement extends BaseElement {
  constructor(options) {
    super('circle', options)
  }

  size(radius) {
    this.el.setAttribute('r', radius)

    return this
  }

  moveTo(x, y) {
    this.el.setAttribute('cx', x)
    this.el.setAttribute('cy', y)

    return this
  }
}