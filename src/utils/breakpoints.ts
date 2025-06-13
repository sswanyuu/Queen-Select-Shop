// Breakpoint constants
export const BREAKPOINTS = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
} as const

// Media query helpers
export const MEDIA_QUERIES = {
  mobile: `@media screen and (max-width: ${BREAKPOINTS.mobile})`,
  tablet: `@media screen and (max-width: ${BREAKPOINTS.tablet})`,
  desktop: `@media screen and (min-width: ${BREAKPOINTS.desktop})`,
  mobileOnly: `@media screen and (max-width: ${BREAKPOINTS.mobile})`,
  tabletUp: `@media screen and (min-width: calc(${BREAKPOINTS.mobile} + 1px))`,
} as const

// JavaScript breakpoint values (for hooks)
export const BREAKPOINT_VALUES = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
} as const
