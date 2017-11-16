import BaseElement from './base'

export default class EllipseElement extends BaseElement {
  constructor({
    parent = null,
    ...rest
  }) {
    super()
    this.el = this.create('ellipse', {
      parent,
      ...rest
    })
  }
}