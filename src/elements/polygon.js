import BaseElement from './base'

export default class PolygonElement extends BaseElement {
  constructor(options) {
    super('polygon', options)
    this.points = []
  }

  /**
   * Draw next point
   * @param {*} x 
   * @param {*} y 
   */
  point(x, y) {
    this.points.push(`${x},${y}`)

    this.el.setAttribute('points', this.points.join(' '))

    return this
  }
}