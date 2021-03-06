import ContainerElement from './container'
import GroupElement from './group'

export default class SvgElement extends ContainerElement {
  constructor(options) {
    super('svg', options)
  }

  group(options) {
    return new GroupElement({
      parent: this,
      ...options
    })
  }
}