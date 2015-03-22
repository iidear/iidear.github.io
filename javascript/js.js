window.onload = function(){
	notes();
}

function notes(){
	var article = document.getElementById("article");
	var articleNav = document.getElementById("articleNav");
	var items = articleNav.getElementsByTagName("dd");
	for(var i=0; i < items.length; i++){
		items[i].onclick = addArticle;
	}
}
function addArticle(){
	var xhr = new XMLHttpRequest();
	var url = "notes/"+ this.id + ".txt";
	xhr.open("get",url,true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			article.innerHTML = xhr.responseText;
		}
	}
	xhr.send(null);
	return false;
}
