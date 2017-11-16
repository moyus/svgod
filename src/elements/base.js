export default class BaseElement {
  create(tag, options) {
    const element = document.createElementNS('http://www.w3.org/2000/svg', tag)

    Object.keys(options).forEach(key => {
      switch (key) {
        case 'parent':
          let parent = options.parent
          if (!parent) return
          if (typeof parent === 'string') {
            parent = document.querySelector(parent)
            parent.appendChild(element)
          } else if (parent.el.nodeType === Node.ELEMENT_NODE) {
            parent.el.appendChild(element)
          } else if (parent.nodeType === Node.ELEMENT_NODE) {
            parent.appendChild(element)
          }
          break
        case 'innerHTML':
          element['textContext'] = options.key
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

  rotate(deg) {
    this.style('transform-origin', 'center')
    this.style('transform', `rotate(${deg}deg)`)

    return this
  }

  style(prop, value) {
    this.el.style[prop] = value
    return this
  }
}