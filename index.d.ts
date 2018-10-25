interface WindowScrollPosition {
  x: number
  y: number
}

interface WindowScrollPositionOptions {
  passive?: boolean
  throttle?: number
}

export default function useWindowScrollPosition(
  options?: WindowScrollPositionOptions
): WindowScrollPosition
