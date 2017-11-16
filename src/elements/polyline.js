import BaseElement from './base'

export default class PolylineElement extends BaseElement {
  constructor({
    parent = null,
    ...rest
  }) {
    super()
    this.el = this.create('polyline', {
      parent,
      ...rest
    })
  }
}