import BaseElement from './base'

export default class SvgElement extends BaseElement {
  constructor({
    parent = null,
    ...rest
  } = {}) {
    super()
    this.el = this.create('svg', {
      parent,
      ...rest
    })
  }
}