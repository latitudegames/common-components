import AmberTheme from './Amber'
import BobaTheme from './Boba'
import BubbleTheme from './Bubble'
import GrayTheme from './Gray'
import OceanTheme from './Ocean'
import PurpleTheme from './Purple'
import SunsetTheme from './Sunset'
import TerminalTheme from './Terminal'
import type { Color } from './ColorTypes'

const getColors = (color?: string): Color => {
  switch (color) {
    case 'amber':
      return AmberTheme
    case 'gray':
      return GrayTheme
    case 'purple':
      return PurpleTheme
    case 'terminal':
      return TerminalTheme
    case 'bubble':
      return BubbleTheme
    case 'ocean':
      return OceanTheme
    case 'sunset':
      return SunsetTheme
    case 'boba':
      return BobaTheme
    default:
      return BubbleTheme
  }
}

export default getColors
