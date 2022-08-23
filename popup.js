function hello() {
    document.getElementById("star").src = "images/starhappy__logo30.png";
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
document.getElementById('star').addEventListener('click', hello);       





