window.__block_ad_count = 0;

window.__yt3b_notification = (text) => {
	console.info("3B || " + text);
	document.querySelector(".__yt3b_notification")?.remove();
	let app_notification = document.createElement("div");
	app_notification.className = "__yt3b_notification";
	app_notification.innerText = text;
	document.body.append(app_notification);
	setTimeout((__notification) => {__notification?.remove()}, 2500, app_notification);
}

window.__register_yt3b = () => {
	if(!document.querySelector("video")){
		setTimeout(window.__register_yt3b, 50);
		return;
	} else {
    	window.__video = document.querySelector("video");
		window.__yt3b_notification("YT3B | Registered");
	};
		
	window.__video.addEventListener("durationchange", () => {        
        if(window.__video.duration < 25) {
            window.__yt3b_notification("Unskippable ad removed (x"+ ++window.__block_ad_count +")");
            window.__video.currentTime = window.__video.duration;
        };
	});
	
	window.__video.addEventListener("timeupdate", () => {
	    if(!!document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text")){
            window.__yt3b_notification("Ad removed (x"+ ++window.__block_ad_count +")");
            document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text").click();
        };
	});
};

setTimeout(window.__register_yt3b, 50);
document.head.insertAdjacentHTML("beforeend",`<style>
#sparkles-container, yt-mealbar-promo-renderer, #player-ads, ytd-ad-slot-renderer,
ytd-page-top-ad-layout-renderer, ytd-ad-engagement-panel-banner-renderer,
ytd-banner-promo-renderer, .masthead-ad,
*[target-id="engagement-panel-ads"], ytmusic-mealbar-promo-renderer {
	display: none !important;
}

.__yt3b_notification {
	border-radius: 10px;
	background: #222222;
	color: #ffffff;
	position: fixed;
	bottom: 30px;
	left: 50px;
	width: 300px;
	height: 50px;
	z-index: 9999;
	display: flex;
	padding: 0 20px;
	font-size: 16px;
	box-sizing: border-box;
	align-items: center;
    opacity: 0.95;
	border: #000000 1px solid;
	box-shadow: 0px 0px 20px 3px #666666;
}

</style>`);
