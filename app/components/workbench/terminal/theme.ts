import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--webbanao-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--webbanao-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--webbanao-elements-terminal-textColor'),
    background: cssVar('--webbanao-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--webbanao-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--webbanao-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--webbanao-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--webbanao-elements-terminal-color-black'),
    red: cssVar('--webbanao-elements-terminal-color-red'),
    green: cssVar('--webbanao-elements-terminal-color-green'),
    yellow: cssVar('--webbanao-elements-terminal-color-yellow'),
    blue: cssVar('--webbanao-elements-terminal-color-blue'),
    magenta: cssVar('--webbanao-elements-terminal-color-magenta'),
    cyan: cssVar('--webbanao-elements-terminal-color-cyan'),
    white: cssVar('--webbanao-elements-terminal-color-white'),
    brightBlack: cssVar('--webbanao-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--webbanao-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--webbanao-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--webbanao-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--webbanao-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--webbanao-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--webbanao-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--webbanao-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
