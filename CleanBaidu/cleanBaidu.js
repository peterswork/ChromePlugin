function removeAd(){
	removeSouceAd();
	initMutationObserver();
}

function removeSouceAd(){
	//$("div[id*='00']").not(".result").not(".result-op").remove();
	$('#content_left').children().not('.c-container').hide();
}

function initMutationObserver(){
	
	//var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	
	var mutation = new MutationObserver(function(mutations){
		mutations.map(function(mutation){
			if(mutation.addedNodes != null){
				if(mutation.addedNodes.length != 0){
					deleteAdNode();
				}
			}
		});
	});
		
	var config = { attributes: true, childList: true, characterData: true , subtree : true };
	mutation.observe(document.body,config);
}

function deleteAdNode(){
	$('#content_left').children().not('.c-container').hide();
	$("div[id=1]").children(".f13").children("span[class=m]").parent().parent().hide();
}

function main(){
	removeAd();
}

main();
