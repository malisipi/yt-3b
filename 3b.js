window.__register_yt3b = () => {
	if(!document.querySelector("video")){
		setTimeout(window.__register_yt3b, 50);
		return;
	} else {
    	window.__video = document.querySelector("video");
		console.info("3B||Registered!");
	};
	window.__video.addEventListener("pause", () => {
	    if(window.__video.currentTime<5){
	    	console.info("3B||YT trying to pause video. (Playing..)");
			window.__video.play();
	    };
	    
	    
	    if(!!document.querySelector("tp-yt-iron-overlay-backdrop")){
			document.querySelector("tp-yt-iron-overlay-backdrop").remove();
			document.querySelector("ytd-popup-container").remove();
			console.info("3B||YT trying to show blocker popup. (Removing..)");
			document.body.append(document.createElement("ytd-popup-container"));
			console.info("3B||Restoring <ytd-popup-container> for showing unrelated dialogs")
			window.__video.play();
	    };
	    
	    if(window.__video.duration==window.__video.currentTime){
	        setTimeout(() => {
	            if(!document.querySelector(".ytp-autonav-endscreen-upnext-button.ytp-autonav-endscreen-upnext-play-button.ytp-autonav-endscreen-upnext-button-rounded") || document.querySelector(".ytp-autonav-toggle-button").getAttribute("aria-checked") == "false") return;
	            if(!document.querySelector(".ytp-autonav-endscreen-upnext-header-countdown-number")){
	                window.__prev_timeout = -9;
	            } else {
	                window.__prev_timeout = Number(document.querySelector(".ytp-autonav-endscreen-upnext-header-countdown-number").innerText);
	            };
	            
                setTimeout(()=>{
                    if(window.__prev_timeout == -9 || Number(document.querySelector(".ytp-autonav-endscreen-upnext-header-countdown-number")?.innerText)==window.__prev_timeout){
                        console.info("3B||YT trying to block autoplaying. (Skipping..)");
                        document.querySelector(".ytp-autonav-endscreen-upnext-button.ytp-autonav-endscreen-upnext-play-button.ytp-autonav-endscreen-upnext-button-rounded").click();
                    };
                }, window.__prev_timeout * 1000 - 500);
            }, 250);
        };
	});
};

setTimeout(window.__register_yt3b, 50);
