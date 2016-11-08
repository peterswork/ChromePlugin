function removeAd(){
	removeSouceAd();
	removeAjaxInsertAd();
}

function removeSouceAd(){
	$("div[id*='00']").not(".result").not(".result-op").remove();
}

function removeAjaxInsertAd(){
	console.info("begin bind");
	//#content_left
	$("body").bind("DOMSubtreeModified",function(){
		console.info("bind still alive");
		deleteAdNode();
	});		
}

function deleteAdNode(){
	$("div[id*='00']").not(".result").not(".result-op").hide();
	$("div[id=1]").children(".f13").children("span[class=m]").parent().parent().hide();
}

function main(){
	//printNowDocument();
	removeAd();
}

function printNowDocument(){
	console.log("this is a test");
	console.log(document.body);
}

main();
