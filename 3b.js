window.__register_yt3b = () => {
	if(!document.querySelector("video")){
		setTimeout(window.__register_yt3b, 50);
		return;
	} else {
    	window.__video = document.querySelector("video");
		console.info("3B||Registered!");
	};
		
	window.__video.addEventListener("durationchange", () => {        
        if(window.__video.duration < 15) {
            console.info("3B||Unskippable AD Removed!");
            window.__video.currentTime = window.__video.duration;
        };
	});
	
	window.__video.addEventListener("timeupdate", () => {
	    if(!!document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text")){
            console.info("3B||AD Removed!");
            document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text").click();
        };
	});
};

setTimeout(window.__register_yt3b, 50);
document.head.insertAdjacentHTML("beforeend",`<style>
#sparkles-container, yt-mealbar-promo-renderer, #player-ads, ytd-ad-slot-renderer, ytd-page-top-ad-layout-renderer, ytd-ad-engagement-panel-banner-renderer, *[target-id="engagement-panel-ads"] {
	display: none !important;
}
</style>`);
