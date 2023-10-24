import { twMerge } from 'tailwind-merge'

import original from './formkit.config.tailwind'
import { mergeClasses, removeClasses } from './utils'

const shurikenRemoves = {
  global: {
    inner: 'formkit-disabled:bg-gray-200',
    label: '*',
    prefixIcon: '*',
    outer: 'mb-4',
  },
  'family:box': {
    decorator: '*',
    decoratorIcon: '*',
  },
  'family:button': {
    input: '*',
  },
  datepicker: {
    dayCell: 'focus:border-blue-500',
    month: 'focus:border-blue-500',
    year: 'focus:border-blue-500',
    openButton: 'self-stretch',
  },
  toggle: {
    track: 'peer-checked:bg-blue-500',
  },
}

const shurikenUpdates = {
  global: {
    fieldset: 'border-muted-300 dark:border-muted-700',
    help: 'text-muted-400',
    inner: 'relative formkit-disabled:opacity-75 formkit-disabled:bg-inherit',
    wrapper: 'mb-5',
    outer: 'group mb-1',
    label: 'nui-label w-full pb-1 text-[0.825rem]',
    legend: 'text-sm text-muted-400 font-normal',
    messages: '-mt-4',
    message: 'text-danger-600 mt-1 block font-sans text-xs font-medium leading-none bg-transparent',
    prefixIcon:
      'text-muted-400 w-10 flex items-center justify-center self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1.15em] [&>svg]:max-h-[1.15em] [&>svg]:m-auto',
    suffixIcon:
      'w-10 pl-3 text-muted-400 flex items-center justify-center self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  },
  'family:box': {
    decorator:
      'block relative h-5 w-5 rounded bg-white dark:bg-muted-700 border-2 border-muted-400 dark:border-muted-700 peer-checked:border-current peer-checked:dark:border-current text-transparent peer-checked:text-primary-600 peer-checked:[&>span]:-translate-y-1/2',
    decoratorIcon:
      'flex p-[3px] w-full h-full absolute  top-1/2 left-1/2 translate-y-6 -translate-x-1/2 transition duration-300',
    inner: 'rounded nui-focus group/nui-checkbox mr-2 overflow-hidden',
    label: 'text-muted-400 ms-1 font-sans text-sm',
    wrapper: 'text-muted-400 ms-1 select-none font-sans text-sm',
  },
  'family:button': {
    input: `$reset nui-button nui-button-medium nui-button-rounded nui-button-solid nui-button-primary`,
  },

  'family:dropdown': {
    inner: `nui-focus ring-1 focus-within:ring-1 focus-within:ring-muted-300 dark:focus-within:ring-muted-700 focus-within:outline-offset-[3px] dark:bg-muted-900/75 ring-muted-300 dark:ring-muted-700 text-muted-600 dark:text-muted-200 [&>label:first-child]:focus-within:text-primary-600 rounded-md mb-1 [&>span:first-child]:focus-within:text-primary-500
      group-data-[invalid=true]:[&>span:first-child]:!text-danger-500 group-data-[invalid=true]:!ring-danger-500
      group-data-[errors=true]:[&>span:first-child]:!text-danger-500 group-data-[errors=true]:!ring-danger-500`,
    prefixIcon: '$remove:h-11 $remove:-ml-3 h-10',
    input:
      'border-none text-sm text-muted-600 placeholder:text-muted-300 dark:!text-muted-200 dark:placeholder:text-muted-500 focus:shadow-outline',
    dropdownWrapper: ` -z-10 nui-slimscroll max-h-[265px] w-full overflow-auto py-1 text-base sm:text-sm rounded-md shadow-none
      bg-transparent
      peer-aria-expanded:bg-white
      peer-aria-expanded:dark:bg-muted-800`,
    listbox: 'bg-white dark:bg-muted-800 shadow-lg',
    listitem: `text-muted-800 rounded-md m-2 dark:text-white hover:bg-muted-100 hover:dark:bg-muted-700 data-[is-active="true"]:bg-muted-100 data-[is-active="true"]:dark:bg-muted-700 data-[is-active="true"]:aria-selected:bg-muted-100
      aria-selected:font-semibold
      aria-selected:dark:!text-muted-100 aria-selected:!text-muted-800
      aria-selected:bg-transparent data-[is-active="true"]:aria-selected:dark:bg-muted-700
      `,
    option: 'py-2 px-3 text-left',
    selectIcon: 'px-3',
    selector: 'peer',
  },

  'family:text': {
    inner: `group/nui-input nui-focus h-10 rounded-md mb-1 dark:bg-muted-900/75 text-muted-400
       ring-muted-300 dark:ring-muted-700
       focus-within:ring-1 focus-within:ring-muted-300 dark:focus-within:ring-muted-700 focus-within:outline-offset-[3px] [&>label:first-child]:focus-within:text-primary-600
       group-data-[invalid=true]:[&>label:first-child]:!text-danger-500 group-data-[invalid=true]:!ring-danger-500
       group-data-[errors=true]:[&>label:first-child]:!text-danger-500 group-data-[errors=true]:!ring-danger-500`,
    input:
      'text-sm text-muted-600 placeholder:text-muted-300 dark:text-muted-200 dark:placeholder:text-muted-500',
  },

  textarea: {
    inner:
      'group/nui-input nui-focus focus-within:ring-1 focus-within:ring-muted-300 dark:focus-within:ring-muted-700 focus-within:outline-offset-[3px] items-center ring-muted-300 dark:ring-muted-700 dark:bg-muted-900/75 text-muted-400 group-data-[invalid=true]:[&>label:first-child]:!text-danger-500 [&>label:first-child]:focus-within:text-primary-600 rounded-xl mb-1 group-data-[invalid=true]:!ring-danger-500',
    input:
      'text-sm text-muted-600 placeholder:text-muted-300 dark:text-muted-200 dark:placeholder:text-muted-500',
  },
  autocomplete: {
    listitem: `pl-7 relative text-muted-800 rounded-lg m-2 dark:text-white hover:bg-muted-100 hover:dark:bg-muted-700 data-[is-active="true"]:bg-muted-100 data-[is-active="true"]:dark:bg-muted-700 data-[is-active="true"]:aria-selected:bg-muted-100
      aria-selected:font-semibold
      aria-selected:dark:!text-muted-100 aria-selected:!text-muted-800
      aria-selected:bg-transparent data-[is-active="true"]:aria-selected:dark:bg-muted-700
      `,
    selectedIcon: 'block absolute top-1/2 left-2 w-3 -translate-y-1/2 text-success-500',
  },
  // native
  color: { input: 'appearance-none p-2 mr-2' },
  // pro input
  colorpicker: {
    inner:
      '$remove:h-10 bg-white dark:bg-muted-900/75 focus-within:ring-primary-500 dark:focus-within:ring-primary-500',
    swatchPreview: 'p-2',

    panel: `
      dark:bg-muted-800
      border-muted-300
      dark:border-muted-700
      dark:border
      border
      mt-1
    `,
    fieldGroup: `
      [&>input]:dark:bg-muted-900/75
      [&>input]:border-muted-400
      [&>input]:dark:border-muted-700
      [&>input:focus]:ring-1
      [&>input:focus]:ring-primary-500
      [&>input:focus]dark:ring-primary-500
    `,
    eyeDropper: 'border-muted-300 dark:border-muted-600',
  },
  file: {
    inner: 'h-auto px-1',
    fileItem: 'text-xs text-muted-600 dark:text-muted-200',
    fileRemove: `flex items-center formkit-multiple:pl-3 hover:text-danger-500 peer-data-[has-multiple=true]:text-xs peer-data-[has-multiple=true]:text-primary-500`,
    noFiles: 'text-xs',
  },
  datepicker: {
    inner: 'rounded-md text-muted-600 dark:text-muted-200',
    panelWrapper: 'border-muted-200 dark:border-muted-700 dark:bg-muted-800',
    panelHeader: 'dark:border-muted-700',
    monthsHeader: 'text-black dark:text-white',
    month: `
      bg-gray-2009
      text-black
      dark:text-muted-300
      focus:bg-primary-500
      focus:outline-0
      dark:bg-muted-800
      aria-selected:bg-primary-500 aria-selected:text-white dark:aria-selected:bg-primary-500 dark:aria-selected:text-white
      dark:focus:bg-primary-500 focus:bg-white focus:text-black
    `,
    yearsHeader: 'text-black dark:text-white',
    year: `
      bg-white
      text-black
      dark:text-muted-300
      focus:bg-primary-500
      focus:outline-0
      dark:bg-muted-800
      aria-selected:bg-primary-500 aria-selected:text-white dark:aria-selected:bg-primary-500 dark:aria-selected:text-white
      dark:focus:bg-primary-500 focus:bg-white focus:text-black
    `,
    dayCell: `
      bg-white
      text-black
      dark:text-muted-300
      focus:bg-primary-500
      focus:outline-0
      dark:bg-muted-800
      aria-selected:bg-primary-500 aria-selected:text-white dark:aria-selected:bg-primary-500 dark:aria-selected:text-white
      dark:focus:bg-primary-500 focus:bg-white focus:text-black
    `,
    prev: 'dark:hover:bg-muted-700',
    prevIcon: 'text-black dark:text-white',
    dayButton: 'border-0 text-black dark:text-white',
    monthButton: 'border-0 text-black dark:text-white',
    openButton: 'inset-y-0 justify-center items-center',
    yearButton: 'border-0 text-black dark:text-white',
    next: 'dark:hover:bg-muted-700',
    nextIcon: 'text-black dark:text-white',
  },
  toggle: {
    track: 'peer-checked:bg-primary-500',
  },
  'multi-step': {
    outer: '$remove:group',
    steps: '$reset nui-card nui-card-rounded nui-card-white p-8',
    tab: `text-black dark:text-white`,
  },
  taglist: {
    inner:
      'focus-within:ring-primary-500 dark:focus-within:ring-primary-500 bg-white dark:bg-muted-900/75',
    input: '$remove:w-full',
    dropdownWrapper: '$remove:my-2 my-1',
    removeSelection: 'dark:text-white',
    tag: 'bg-muted-200 dark:bg-muted-700',
    tags: 'py-0.5',
    tagWrapper: 'bg-transparent',
    selectedIcon: 'text-primary-500',
  },
}

const replaceOriginal = {
  global: { ...original.global },
  'family:button': { ...original['family:button'] },
  'family:text': { ...original['family:text'] },
  'family:dropdown': { ...original['family:dropdown'] },
  file: { ...original.file },
  range: { ...original.range },
  colorpicker: { ...original.colorpicker },
  rating: { ...original.rating },
  repeater: { ...original.repeater },
  slider: { ...original.slider },
  taglist: { ...original.taglist },
  transferlist: { ...original.transferlist },
  'multi-step': {},
}

const shurikenClasses = mergeClasses(
  removeClasses(replaceOriginal, shurikenRemoves),
  shurikenUpdates,
  false,
)
// need to get this to file and color picker only
shurikenClasses.file.inner = twMerge(
  shurikenClasses['family:text'].inner,
  shurikenClasses.file.inner,
)
shurikenClasses.file.input = twMerge(
  shurikenClasses['family:text'].input,
  shurikenClasses.file.input,
)
shurikenClasses.colorpicker.inner = twMerge(
  shurikenClasses['family:text'].inner,
  shurikenClasses.colorpicker.inner,
)
shurikenClasses.colorpicker.input = twMerge(
  shurikenClasses['family:text'].input,
  shurikenClasses.colorpicker.input,
)

delete shurikenClasses['family:text']

export { shurikenClasses }
