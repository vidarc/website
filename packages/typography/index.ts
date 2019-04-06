import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import deYoung from 'typography-theme-de-young'

import 'typeface-fira-sans'

deYoung.plugins = [new CodePlugin()]
deYoung.headerFontFamily = ['Fira Sans', 'sans-serif']
deYoung.bodyFontFamily = ['Fira Sans', 'sans-serif']
deYoung.bodyColor = 'var(--body-color)'
deYoung.includeNormalize = false

const typography = new Typography(deYoung)

export default typography
