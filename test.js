'use strict'
let test = require('ava')
let { createElement: h } = require('react')
let ReactTestRenderer = require('react-test-renderer')
let useWindowScrollPosition = require('./')

function render(val) {
  return ReactTestRenderer.create(val)
}

test(t => {
  function Component() {
    let position = useWindowScrollPosition()
    return h('div', position)
  }

  let input = render(h(Component))

  t.is(input.toJSON().props.x, 0)
  t.is(input.toJSON().props.y, 0)
})
