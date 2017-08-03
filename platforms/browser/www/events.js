window.addEventListener('deviceReady',function(){
	window.plugins.intent.getCordovaIntent(function(Intent){
		document.getElementById("intentDlg").innerHTML=JSON.stringify(Intent);
	});
});