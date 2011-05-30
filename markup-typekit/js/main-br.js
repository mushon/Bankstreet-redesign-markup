function initBrowserDetect()
{
	var u = navigator.userAgent.toLowerCase();
	var _html = document.getElementsByTagName("html")[0];
	
	if(is("win")) addClass("win");
	else if(is("mac")) addClass("mac");
	else if(is("linux") || is("x11")) addClass("linux");
	
	if(is("msie 8.0")) addClass("ie8");
	else if(is("msie 7.0")) addClass("ie7");
	else if(is("msie 6.0")) addClass("ie6");
	else if(is("firefox/2")) addClass("ff2");
	else if(is("firefox/3")) addClass("ff3");
	else if(is("opera") && is("version/10")) addClass("opera10");
	else if(is("opera/9")) addClass("opera9");
	else if(is("safari") && is("version/3")) addClass("safari3");
	else if(is("safari") && is("version/4")) addClass("safari4");
	else if(is("chrome")) addClass("chrome");
	else if(is("safari")) addClass("safari2");
	else if(is("unknown")) addClass("unknown");
	
	if(is("msie")) addClass("trident");
	else if(is("applewebkit")) addClass("webkit");
	else if(is("gecko")) addClass("gecko");
	else if(is("opera")) addClass("presto");
		
	function is(browser)
	{
		if(u.indexOf(browser) !=-1) return true;
	}
	function addClass(_class)
	{
		_html.className += (" " + _class);
	}
}
if (window.addEventListener)
	window.addEventListener("load", initBrowserDetect, false);
else if (window.attachEvent)
	window.attachEvent("onload", initBrowserDetect);
