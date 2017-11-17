import BaseElement from './base'

export default class PathElement extends BaseElement {
  constructor(options) {
    super('path', options)
    this.points = []
  }

  draw(command, ...data) {
    const points = data.map(point => point.join(','))
    this.points.push(`${command}${points.join(' ')}`)

    this.el.setAttribute('d', this.points.join(' '))
  }

  /**
   * Set next drawing point start position
   * @param {number} x 
   * @param {number} y 
   * @param {boolean} [relative=false]
   */
  moveto(x, y, relative = false) {
    let command = relative ? 'm' : 'M'
    this.draw(command, [x, y])

    return this
  }

  /**
   * Draw a straight line
   * @param {number} x 
   * @param {number} y 
   * @param {boolean} [relative=false]
   */
  lineto(x, y, relative = false) {
    let command
    if (x === null) {
      command = relative ? 'v' : 'V'
    } else if (y === null) {
      command = relative ? 'h' : 'H'
    } else {
      command = relative ? 'l' : 'L'
    }
    this.draw(command, [x, y])

    return this
  }

  /**
   * Draw a bezier curve
   * @param {string} command 
   * @param {array} points 
   */
  curveto(command, ...points) {
    const data = []

    for (let i = 0, len = points.length; i < len; i += 2) {
      data.push([points[i], points[i+1]])
    }

    this.draw(command, ...data)

    return this
  }

  /**
   * Draw an elliptical curve
   * @param {number} rx 
   * @param {number} ry 
   * @param {number} largeArcFlag 
   * @param {number} sweepFlag 
   * @param {number} x 
   * @param {number} y 
   * @param {boolean} [relative=false]
   */
  arcto(rx, ry, largeArcFlag, sweepFlag, x, y, relative = false) {
    let command = relative ? 'a' : 'A'

    this.draw(command, [rx, ry], [1], [largeArcFlag, sweepFlag], [x,y])

    return this
  }

  /**
   * Draw a straight line from the current
   * position to the first point in the path
   */
  close() {
    this.draw('Z')

    return this
  }
}