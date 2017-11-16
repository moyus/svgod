import BaseElement from './base'

export default class RectElement extends BaseElement {
  constructor({
      parent = null,
    ...rest
    }) {
    super()
    this.el = this.create('rect', {
      parent,
      ...rest
    })
  }

  size(width, height) {
    this.el.setAttribute('width', width)
    this.el.setAttribute('height', height)

    return this
  }

  moveTo(x, y) {
    this.el.setAttribute('x', x)
    this.el.setAttribute('y', y)

    return this
  }

}