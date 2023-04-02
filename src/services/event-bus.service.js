function on(eventName, listener) {
  const callListener = ({ detail }) => {
    listener(detail)
  }
  window.addEventListener(eventName, callListener)
  // Returning the unsubscribe function:
  return () => {
    window.removeEventListener(eventName, callListener)
  }
}

function emit(eventName, data) {
  window.dispatchEvent(new CustomEvent(eventName, { detail: data }))
}

export const eventBusService = { on, emit }

export function showUserMsg(msg) {
  eventBusService.emit('show-msg', msg)
}

export function showSuccessMsg(txt) {
  showUserMsg({ txt, type: 'success' })
}
export function showErrorMsg(txt) {
  showUserMsg({ txt, type: 'error' })
}
