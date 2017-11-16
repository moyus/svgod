import BaseElement from './base'

export default class LineElement extends BaseElement {
  constructor({
    parent = null,
    ...rest
  }) {
    super()
    this.el = this.create('line', {
      parent,
      ...rest
    })
  }
}