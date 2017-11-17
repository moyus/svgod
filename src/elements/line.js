import BaseElement from './base'

export default class LineElement extends BaseElement {
  constructor(options) {
    super('line', options)
  }
  
  from(x, y) {
    this.el.setAttribute('x1', x)
    this.el.setAttribute('y1', y)

    return this
  }

  to(x, y) {
    this.el.setAttribute('x2', x)
    this.el.setAttribute('y2', y)

    return this
  }
}