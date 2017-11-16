import BaseElement from './base'

export default class PathElement extends BaseElement {
  constructor({
    parent = null,
    ...rest
  }) {
    super()
    this.el = this.create('path', {
      parent,
      ...rest
    })
  }

  moveto() {

  }

  lineto() {

  }

  xlineto() {

  }

  ylineto() {

  }

  curveto() {

  }

  scurveto() {

  }

  qcurve() {

  }

  tcurveto() {

  }

  arc() {

  }

  close() {
    
  }
}