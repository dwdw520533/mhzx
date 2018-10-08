/**
 * @author lihongyu
 */
var wanmei_cookie_path = "/";
var wanmei_cookie_domain = "wanmei.com";
var wanmei_guid_cookie_name = "wanmeicookieguid=";
var wanmei_adid_cookie_name = "wanmeicookieadid=";
var wanmei_hdid_cookie_name = "wanmeicookiehdid=";


// lihongyu add this
function getWanmeiGuid() {
	return getCookieByName(wanmei_guid_cookie_name);
}

function getWanmeiAdid() {
	return getCookieByName(wanmei_adid_cookie_name);
}

function getWanmeiHdid() {
	return getCookieByName(wanmei_hdid_cookie_name);
}

function getCookieByName(cookieName){
	var cookies = document.cookie;
    var pos = cookies.indexOf(cookieName);
    var cookieValue = null;
    if (pos < 0) {
        cookieValue = "";
    }
    else {
        var start = pos + cookieName.length;
        var end = cookies.indexOf(";", start);
        
        if (end == -1) {
            end = cookies.length;
        }
        cookieValue = cookies.substring(start, end);
        value = cookieValue;
    }
    return cookieValue;
}
// end