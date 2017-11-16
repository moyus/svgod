const $root = document.getElementById('root')
const ctx = new svgod(200, 200)

window.myrect = ctx.rect()
  .size(100, 10)
  .fill('#000')
  .rotate(45)
  .moveTo(50, 100)

window.mycircle = ctx.circle()
  .size(50)
  .fill('red')
  .moveTo(100, 50)

$root.appendChild(ctx.el)