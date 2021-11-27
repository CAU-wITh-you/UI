function hello() {
    document.getElementById("changeColor").style.background = '#000000';
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var currTab = tabs[0];
        if (currTab) { // Sanity check
            console.log(currTab);
            console.log(currTab.id);
            chrome.scripting.executeScript(
                {
                    target: { tabId: currTab.id, allFrames: true },
                    files: ['detect.js'],
                },
                () => { console.log("success!"); });
        }
    });
}

document.getElementById('changeColor').addEventListener('click', hello);