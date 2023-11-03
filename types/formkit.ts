import type { FormKitInputs } from '@formkit/inputs'
import { FormKitProOptionsProp, OptionLoader } from '@formkit/pro'

declare type Yes = 'true' | true | ''
declare type Bool = 'true' | 'false' | true | false | ''

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    combobox: {
      type: 'combobox'
      value?: Props['multiple'] extends Yes ? any[] : any
      multiple?: Bool
      options?: FormKitProOptionsProp
      selectionAppearance?: 'truncate' | 'tags'
      filter?: (option: FormKitOptionsItem, search: string) => boolean
      optionLoader?: OptionLoader
      emptyMessage?: string
      max?: Props['multiple'] extends Yes ? number | string : undefined
      openOnFocus?: Bool
      openOnRemove?: Bool
      closeOnSelect?: Bool
      clearSearchOnOpen?: Bool
      selectionRemovable?: Props['multiple'] extends Yes ? undefined : Bool
      loadOnCreated?: Bool
      alwaysLoadOnOpen?: Bool
    }
  }
}
