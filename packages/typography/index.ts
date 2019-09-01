import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import deYoung from 'typography-theme-de-young'

import 'typeface-fira-sans'

const styles = {
  ...deYoung,
  plugins: [new CodePlugin()],
  headerFontFamily: ['Fira Sans', 'sans-serif'],
  headerColor: 'var(--body-text)',
  bodyFontFamily: ['Fira Sans', 'sans-serif'],
  bodyColor: 'var(--body-text)',
  includeNormalize: false,
  overrideStyles: () => ({
    'a:active': {},
    'a:hover': {}
  })
}

const typography = new Typography(styles)

export default typography
