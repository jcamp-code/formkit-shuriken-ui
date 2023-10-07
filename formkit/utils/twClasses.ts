import { twMerge } from 'tailwind-merge'

export function removeClasses(original: any, removes: any) {
  const classes = { ...original }
  Object.keys(original).forEach((type) => {
    if (removes[type]) {
      Object.keys(original[type]).forEach((sectionKey) => {
        if (removes[type][sectionKey]) {
          if (removes[type][sectionKey] === '*') {
            classes[type][sectionKey] = ''
          } else {
            const toRemove = removes[type][sectionKey].split(' ')
            toRemove.forEach((element: string) => {
              classes[type][sectionKey] = classes[type][sectionKey].replace(element, '')
            })
          }
        }
      })
    }
  })
  return classes
}

export function mergeClasses(original: any, updates: any, createType: boolean = true) {
  const classes = { ...original }
  Object.keys(updates).forEach((type) => {
    if (original[type]) {
      Object.keys(updates[type]).forEach((sectionKey) => {
        if (original[type][sectionKey]) {
          classes[type][sectionKey] = twMerge(original[type][sectionKey], updates[type][sectionKey])
        } else {
          classes[type][sectionKey] = updates[type][sectionKey]
        }
      })
    } else if (createType) {
      classes[type] = { ...updates[type] }
    }
  })

  return classes
}
