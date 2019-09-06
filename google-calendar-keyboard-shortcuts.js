var shouldAddEventListener;

// define a handler
function doc_keyUp(e) {
  // this would test if keyCode 219 ([) or keyCode 221 (]) was pressed
  if (e.keyCode == 219) {
    console.log("Keyboard for accept triggered.");
    document.querySelector("[aria-label='Respond Yes']").click();
    // Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'OK').click(); // Might not be required since enter works
  } else if (e.keyCode == 221) {
    console.log("Keyboard for deny triggered.");
    document.querySelector("[aria-label='Respond No']").click();
  } else if (e.keyCode == 220) { // Test if keyCode 220 (\) was pressed
    console.log("Keyboard for next event triggered.");
    openNextEvent();
  }
}

// register the handler 
if ((shouldAddEventListener == null ? true : shouldAddEventListener)) {
  shouldAddEventListener = false;
  console.log("Adding Google Calendar [Open Next Event/Accept/Deny] keyboard shortcuts event listener...")
  document.addEventListener('keyup', doc_keyUp, false);
}

function openNextEvent() {
  pendingEvent = undefined;
  document.querySelectorAll('div[role=gridcell] > div[role=presentation] > div[role=button][style*="border-color: rgb(0, 0, 0)"]:not([style*="background-color: rgb(0, 0, 0)"])').forEach(function(divEl) {
    if (pendingEvent === undefined && divEl.hasChildNodes()) {
      pending = true;
      divEl.querySelectorAll('span').forEach(function(spanEl) {
        if (getComputedStyle(spanEl).textDecorationLine === 'line-through') {
          pending = false;
        };
      });
      if (pending) {
        pendingEvent = divEl;
      }
    }
  });
  if (pendingEvent) {
      pendingEvent.click();
  }
}
