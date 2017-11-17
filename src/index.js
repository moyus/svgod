import SvgElement from './elements/svg'

const svgod = function svgod(width, height) {
  return new SvgElement({
    width,
    height,
    viewBox: `0 0 ${width} ${height}`
  })
}

export default svgod