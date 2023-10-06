window.__register_yt3b = () => {
	if(!document.querySelector("video")){
		setTimeout(window.__register_yt3b, 50);
		return;
	} else {
		console.info("3B||Registered!");
	};
	document.querySelector("video").addEventListener("pause", () => {
	    if(document.querySelector("video").currentTime<5){
	    	console.info("3B||YT trying to pause video");
			document.querySelector("video").play();
	    };
	    if(!!document.querySelector("tp-yt-iron-overlay-backdrop")){
			document.querySelector("tp-yt-iron-overlay-backdrop").remove();
			document.querySelector("ytd-popup-container").remove();
			console.info("3B||YT trying to show blocker popup");
			document.querySelector("video").play();
	    };
	});
};

setTimeout(window.__register_yt3b, 50);
