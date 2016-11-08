chrome.webNavigation.onDOMContentLoaded.addListener(function(details){	
	if(isLeagalUrl(details.url)){
		dealDocument();
	}
});


/*chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	main(tab);
});*/

function main(tab){
	if(isLeagalUrl(tab.url)){
		if(tab.status == 'complete'){
			dealDocument();
		}
	}
}

function isLeagalUrl(url){
	var reg = /^(https:\/\/www\.baidu\.com\/s\?)/;
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

