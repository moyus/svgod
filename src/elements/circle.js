import BaseElement from './base'

export default class CircleElement extends BaseElement {
  constructor({
    parent = null,
    ...rest
  }) {
    super()
    this.el = this.create('circle', {
      parent,
      ...rest
    })
  }

  fill(color) {
    this.el.setAttribute('fill', color)

    return this
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