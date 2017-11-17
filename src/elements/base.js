export default class BaseElement {
  constructor (tag, options) {
    this.el = this.create(tag, options)
  }

  create(tag, options) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', tag)

    Object.keys(options).forEach(key => {
      switch (key) {
        case 'parent':
          let parent = options.parent
          if (parent) {
            parent.el.appendChild(element)
          }
          break
        case 'innerHTML':
          element['textContent'] = options.key
          break
        case 'className':
          key = 'class'
        default:
          element.setAttribute(key, options[key])
          break
      }
    })

    return element
  }

  fill(color) {
    this.el.setAttribute('fill', color)

    return this
  }

  stroke(color) {
    this.el.setAttribute('stroke', color)

    return this
  }

  strokeWidth(width) {
    this.el.setAttribute('stroke-width', width)

    return this
  }

  rotate(deg) {
    this.style('transform-origin', 'center')
    this.style('transform', `rotate(${deg}deg)`)

    return this
  }

  style(prop, value) {
    this.el.style[prop] = value
    return this
  }
  
  forward() {
    const parent = this.el.parentElement
    const index = Array.prototype.indexOf.call(parent.children, this.el)
    const reference = parent.children[index + 2] || null

    parent.insertBefore(this.el, reference)

    return this
  }

  backward() {
    const parent = this.el.parentElement
    const index = Array.prototype.indexOf.call(parent.children, this.el)
    const reference = parent.children[index - 1] || null

    parent.insertBefore(this.el, reference)

    return this
  }
}