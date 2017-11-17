import BaseElement from './base'

export default class TextElement extends BaseElement {
  constructor(options) {
    super('text', options)
  }

  text(t) {
    this.el['textContent'] = t
  }
}