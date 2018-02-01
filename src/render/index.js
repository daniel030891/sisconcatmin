var fs = require('fs');
var path = require('path')
var initview = path.join(__dirname, 'initview.html')

window.addEventListener('load', function(){
	fs.readFile(initview, 'utf-8', (err, data) => {
		if (err){
			console.log("error")
		} else {
			var maincontainer = document.getElementsByClassName("window-content");
			maincontainer[0].innerHTML = `${data}`;
		}
	})
});