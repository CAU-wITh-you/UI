let lastTab;

chrome.tabs.getCurrent(function (tab) {
    lastTab = tab.url;
    var url = new URL(tab.url);
    var videoId = url.searchParams.get("v");
    //console.log(document.getElementById("ytvideo"));
    document.getElementById("ytvideo").src = `https://www.youtube.com/embed/${videoId}`;
});


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //console.log(tabId, changeInfo, tab);
    if (tab.url != lastTab) {
        lastTab = tab.url;
        location.reload();
        toggleMuteState(tabId);
    }
});

function toggleMuteState(tabId) {
    chrome.tabs.get(tabId, async (tab) => {
        let muted = !tab.mutedInfo.muted;
        await chrome.tabs.update(tabId, { muted });
        console.log(`Tab ${tab.id} is ${muted ? 'muted' : 'unmuted'}`);
    });
}