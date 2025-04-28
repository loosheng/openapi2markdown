import { en } from './langs/en'
import { zhCN } from './langs/zhCN'

interface I18nTexts {
  [key: string]: Record<string, string>
}
const i18nTexts: I18nTexts = {
  en,
  zhCN,
}
export default i18nTexts
