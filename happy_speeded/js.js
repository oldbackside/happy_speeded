
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log("happy end");
	if(request.cmd == 'test') alert(request.value);
     var speedNum = request.value;
            var isExixtScript = document.getElementById('speed-video-js');
            if (isExixtScript != null) {
            	$("#speed-video-js").remove();
            }
            var data = document.createAttribute("data");
			var script = document.createElement('script');
			var id = document.createAttribute("id");
			id.value = "speed-video-js";
			data.value = parseFloat(speedNum).toFixed(2);
			script.innerHTML = "videojs.getPlayers(\"video-player\").html5player.tech_.setPlaybackRate("+speedNum+");";
			script.setAttributeNode(id);
			script.setAttributeNode(data);
			document.body.appendChild(script);
			sendResponse({state:'变速成功'})
});
