window.onload=function() {
	 
    $('#test').rssfeed('http://sustainabilityhousewsu.wordpress.com/tag/website-General/feed/');

    $('dd').hide();

    $('dt').click(function(e){
    
    	$(this).nextUntil('dt').slideToggle();


});

		BrowserDetect;
		chromee;
		detectie;
		detectfirefox;



}

function increaseSize(){
	var size = parseInt($("#main").css("font-size"));
	$("#main").css("font-size", size + 1 + "pt");
}

function decreaseSize(){
	var size = parseInt($("#main").css("font-size"));
	$("#main").css("font-size", size - (1*.85) + "pt");
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

function chromee(){
	if (BrowserDetect.browser == "Chrome"){
		document.write("<h1>How to clear history on Google Chrome</h1>");
		//alert(BrowserDetect.browser);
		document.write("<p>Follow the simple instructions in order to clear your browser history.</p>");
		document.write("Step 1.| Click the options button in the upper right-hand of your screen.");
		document.write('<img src="chrome/chrome1.png" class="pics" alt="clear history image 1">');
		document.write('Step 2.| Select "History" in the drop down menu.');
		document.write('<img src="chrome/chrome2.png" class="pics" alt="clear history image 2">');
		document.write('Step 3.| Click on the "Clear browsing data..." button');
		document.write('<img src="chrome/chrome3.png" class="pics" alt="clear history image 3">');
		document.write('Step 4.| Click the corresponding boxes and select "Clear browsing data".');
		document.write('<img src="chrome/chrome4.png" class="pics" alt="clear history image 4">');
		document.write('<h3>Congratulations! Your history is now clear!!!</h3>');
	}
};
function detectie(){
	if (BrowserDetect.browser == "Explorer"){
			//alert(BrowserDetect.browser);
			document.write('<a href="http://windows.microsoft.com/en-us/windows7/how-to-delete-your-browsing-history-in-internet-explorer-9">Clear browser history on Internet Explorer</a>');
		}
};
function detectfirefox(){
	if (BrowserDetect.browser == "Firefox"){
		//alert(BrowserDetect.browser);
		document.write("<p>Follow the simple instructions in order to clear your browser history.</p>");
		document.write('<img src="Firefox/firefox1.png" class="pics" alt="clear history image 1">');
		document.write('<img src="Firefox/firefox2.png" class="pics" alt="clear history image 2">');
		document.write('<img src="Firefox/firefox3.png" class="pics" alt="clear history image 3">');
	}
};



    