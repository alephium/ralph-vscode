import { SupportLanguage } from 'prettier'

// https://prettier.io/docs/en/plugins.html#languages
export const languages: SupportLanguage[] = [
  {
    name: 'ralph',
    extensions: ['.ral'],
    parsers: ['ralph'],
    filenames: ['*.ral'],
    vscodeLanguageIds: ['ralph'],
    // linguistLanguageId: 602937027,
  },
]
