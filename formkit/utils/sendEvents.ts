export function sendEvents(e: Event, context: any, name1: string, name2?: string) {
  function sendEvent(name: string) {
    const clickHandlerProp = `on${name.charAt(0).toUpperCase()}${name.slice(1)}`

    const handlerFunction = context!.attrs[clickHandlerProp] || context![clickHandlerProp]
    if (handlerFunction && typeof handlerFunction === 'function') {
      return handlerFunction(context?.node, e)
    }
  }
  sendEvent(name1)
  if (name2) sendEvent(name2)
}
