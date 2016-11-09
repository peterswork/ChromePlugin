chrome.webNavigation.onDOMContentLoaded.addListener(function(details){	
	if(isLeagalUrl(details.url)){
		dealDocument();
	}
});

function isLeagalUrl(url){
	var reg = /^(https:\/\/www\.baidu\.com)/;
	if(reg.test(url)){
		return true;
	}else{
		return false;
	}
}

function dealDocument() {	
	chrome.tabs.executeScript(null, {file: "jquery-3.1.1.min.js"});
	chrome.tabs.executeScript(null, {file: "cleanBaidu.js"});
}

