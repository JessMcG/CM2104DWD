
function addContent() {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>";

	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html

	document.getElementById("content").innerHTML=items_html;
	//content.innerHTML=items_html;

}

function addContent2() {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	for (var i=0; i < items.length; i++) {
		var newPara = document.createElement("p");
		var text = document.createTextNode(items[i]);
		newPara.appendChild(text);
		document.getElementById("content").appendChild(newPara);
	};

}

function testResults(form) {
	var searchbox = document.getElementById("searchbox");

	var searchvalue = search.searchbox.value;
	console.log(searchvalue);

	if (searchvalue != "")
	{
		return true;

		var newPara = document.createElement("p");
		var text = document.createTextNode(searchvalue);
		newPara.appendChild(text);
		document.getElementById("content").appendChild(newPara);
	}
	else {
		alert("Please type a search query!");
		return false;
	}
}
