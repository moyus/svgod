import BaseElement from './base'

export default class PolygonElement extends BaseElement {
  constructor({
    parent = null,
    ...rest
  }) {
    super()
    this.el = this.create('polygon', {
      parent,
      ...rest
    })
  }
}