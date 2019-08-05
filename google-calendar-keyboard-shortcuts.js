var shouldAddEventListener;
// define a handler
function doc_keyUp(e) {
    // this would test if keyCode 219 ([) or keyCode 221 (]) was pressed
    if (e.keyCode == 219) {
      console.log("Keyboard for accept triggered.");
      document.querySelector("[aria-label='Respond Yes']").click();
      Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'OK').click();
    } else if (e.keyCode == 221) {
      console.log("Keyboard for deny triggered.");
      document.querySelector("[aria-label='Respond No']").click();
    }
}

// register the handler 
if ((shouldAddEventListener == null ? true : shouldAddEventListener)) {
    shouldAddEventListener = false;
    console.log("Adding Google Calendar Accept/Deny keyboard shortcuts event listener...")
    document.addEventListener('keyup', doc_keyUp, false);
}
