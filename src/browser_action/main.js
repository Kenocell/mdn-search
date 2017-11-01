if (!browser) {
    var browser = chrome;
}

function init() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
    }, function (selection) {
        if (typeof selection !== 'undefined') document.getElementById("query").value = selection[0];
    });
    document.getElementById('query').focus();
    addEvents()
}

function addEvents() {
    document.getElementById('form').onsubmit = function (e) {
        e.preventDefault();
        openTab();
    }
}

function openTab() {
    let value = document.getElementById('query').value;
    if (value.trim() === '') return;
    console.log(value)
    var newURL = "https://www.google.com/search?q=site%3Adeveloper.mozilla.org+" + encodeURIComponent(value);
    chrome.tabs.create({
        url: newURL
    });
    console.log(newURL);
}

document.addEventListener("DOMContentLoaded", function (event) {
    init()
});