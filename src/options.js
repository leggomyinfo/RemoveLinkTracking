const blockedHostsTextArea = document.querySelector("#exception-url");

// Store the currently selected settings using browser.storage.local.
function storeSettings() {
    let exceptions = blockedHostsTextArea.value.split("\n");
    browser.storage.local.set({
        exceptions
    });
}

// Update the options UI with the settings values retrieved from storage,
// or the default settings if the stored settings are empty.
function updateUI(restoredSettings) {
    blockedHostsTextArea.value = restoredSettings.exceptions.join("\n");
}

function onError(e) {
    console.error(e);
}

// On opening the options page, fetch stored settings and update the UI with them.
browser.storage.local.get().then(updateUI, onError);

// Whenever the contents of the textarea changes, save the new values
blockedHostsTextArea.addEventListener("change", storeSettings);