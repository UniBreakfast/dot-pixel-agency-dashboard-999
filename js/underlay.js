const path = document.currentScript.innerText
const style = document.createElement('style')
const css = /* CSS */`

  body::before {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${path}) center 0 no-repeat;
    opacity: var(--underlay-opacity);
    filter: invert(var(--underlay-invert));
    z-index: -1;
    content: '';
  }
`
style.innerHTML = css
head.append(style)
body.style.setProperty('--underlay-opacity', 0.1)
body.addEventListener('mousemove', e => (e.ctrlKey && e.altKey)? adjustOpacity(e.x, e.y) : 'ignore')

function adjustOpacity(x, y) {
  const opacity = Math.max(0, Math.min(1, (y - innerHeight / 8) / innerHeight * 1.5))

  body.style.setProperty('--underlay-opacity', opacity)
  body.style.setProperty('--underlay-invert', x ? 0 : 1)
}
