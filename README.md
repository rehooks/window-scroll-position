# `@rehooks/window-scroll-position`

> React hook for [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) scroll position

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/window-scroll-position
```

## Usage

```js
import useWindowScrollPosition from '@rehooks/window-scroll-position'

function MyComponent() {
  // optionally you can pass options, those are default:
  let options = {
    throttle: 100,
  }
  let position = useWindowScrollPosition(options)
  // position == { x: 0, y: 0 }
  return <div />
}
```
