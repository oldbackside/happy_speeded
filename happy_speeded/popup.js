function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}
$("button").click(function () {
    sendMessageToContentScript({
        cmd: 'test',
        value: $(this).attr("value")
    }, function (response) {
        console.log('来自content的回复：' + response);
    });
});
