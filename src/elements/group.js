import ContainerElement from './container'

export default class GroupElement extends ContainerElement {
  constructor(options) {
    super('g', options)
  }

  group(options) {
    return new GroupElement({
      parent: this,
      ...options
    })
  }
}