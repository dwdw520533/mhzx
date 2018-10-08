// JavaScript Document
/* 
	author:bianyuan
	time:2011.09.13
*/
//分享
var wmShare = (function(){
	//nav导航
	function linkMain(name){
        if (name == "zzbq") {
            return 'http://zzbq.wanmei.com/';
        }else {
            return 'http://' + name + '.wanmei.com/main.htm';
        }
	}
	function linkReg(){
		return 'http://passport.wanmei.com/reg/';
	}
	function linkDown(name){
		return 'http://' + name + '.wanmei.com/download/';
	}
	function linkFull(name){
		return 'http://pay.wanmei.com/new/newpay.do?op=prepay&gametype=' + name;
	}
	function linkBbs(name){
		return 'http://' + name + '.bbs.wanmei.com';
	}
	function encode(str){
		return encodeURIComponent(str);
	}
	return {
		//初始值
		skin : 'slide_black',
		url : top.location.href,
		title : top.document.title,
		pic : '',
		//获取参数方法
		getParameter : function(){
			var scripts = document.getElementsByTagName('script'),
				script = scripts[scripts.length - 1];
			return {
				share : script.getAttribute('share')
			}
		},
		//载入样式方法
		addStyle : function(skin){
			var style = document.createElement('link');
				style.setAttribute('type','text/css');
				style.setAttribute('rel', 'stylesheet');
				style.setAttribute('href','http://www.wanmei.com/public/style/share/'+skin+'.css');
				document.getElementsByTagName('head')[0].appendChild(style);
		},
		//逐渐展开与收缩方法
		showShare : function(el, allW){
			var currentW = el.offsetWidth;
			function slideShow(){
				if(currentW < allW){
					currentW += 16;
					el.style.width = currentW + 'px';
					var setSlideShow = setTimeout(slideShow, 20);
				}else{
					el.style.width = allW + 'px';
					clearTimeout(setSlideShow);
				}
			}
			slideShow();
		},
		hideShare : function(el, btnW){
			var currentW = el.offsetWidth;
			function slideHide(){
				if(currentW > btnW){
					currentW -= 32;
					el.style.width = currentW + 'px';
					var setSlideHide = setTimeout(slideHide, 20);
				}else{
					el.style.width = btnW + 'px';
					clearTimeout(setSlideHide);
				}
			}
			slideHide();
		},
		//分享方法
		qqZone : function(url,title,pic){
			window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encode(url) + '&title=' + encode(title) + '&pics=' + pic);
		},
		sinaT : function(url,title,pic){
			window.open('http://v.t.sina.com.cn/share/share.php?url=' + encode(url) + '&title=' + encode(title) + '&pic=' + pic );
		}, 
		qqT : function(url,title,pic){
			window.open('http://v.t.qq.com/share/share.php?url=' + encode(url) + '&title=' + encode(title) + '&pic=' + pic);
		},
		renren : function(url){
			window.open('http://share.renren.com/share/buttonshare.do?link=' + encode(url) );
		},
		kaixin : function(url,title){
			window.open('http://www.kaixin001.com/repaste/share.php?rtitle=' + encode(title) + '&rurl=' + encode(url) );
		},
		douban : function(url,title){
			window.open("http://www.douban.com/recommend/?url=" + encode(url) + "&title=" + encode(title) );
		},
		baiduT : function(url){
			window.open("http://tieba.baidu.com/i/app/open_share_api?link=" +  encode(url) );
		},
		qq : function(url,title,pic){
			window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + encode(url) + '&title=' + encode(title) + '&pics=' + pic)	
		},
		//加入收藏方法
		addFav : function(){
			var favUrl = top.location.href;
			var favName = top.document.title;
			try{window.external.AddFavorite(favUrl,favName);}
			catch(e){
				try{window.sidebar.addPanel(favName,favUrl,"");}
				catch(e){alert("使用快捷键 Ctrl+D 或 Cmd+D 来收藏此页！");}
			}
		},
		//link
		link : [
			{name:'world2', main:linkMain('world2'), reg:linkReg(), down:linkDown('world2'), full:linkFull('1'), bbs:linkBbs('world2')},
			{name:'wulin2', main:linkMain('wulin2'), reg:linkReg(), down:linkDown('wulin2'), full:linkFull('2'), bbs:linkBbs('wulin2')},
			{name:'w2i', main:linkMain('w2i'), reg:linkReg(), down:linkDown('w2i'), full:linkFull('3'), bbs:linkBbs('w2i')},
			{name:'zhuxian', main:linkMain('zhuxian'), reg:linkReg(), down:linkDown('zhuxian'), full:linkFull('4'), bbs:linkBbs('zhuxian')},
			{name:'sg', main:linkMain('sg'), reg:linkReg(), down:linkDown('sg'), full:linkFull('5'), bbs:linkBbs('sg')},
			{name:'rwpd', main:linkMain('rwpd'), reg:linkReg(), down:linkDown('rwpd'), full:linkFull('6'), bbs:linkBbs('rwpd')},
			{name:'kdxy', main:linkMain('kdxy'), reg:linkReg(), down:linkDown('kdxy'), full:linkFull('7'), bbs:linkBbs('kdxy')},
			{name:'sgcq', main:linkMain('sgcq'), reg:linkReg(), down:linkDown('sgcq'), full:linkFull('11'), bbs:linkBbs('sgcq')},
			{name:'xlzj', main:linkMain('xlzj'), reg:linkReg(), down:linkDown('xlzj'), full:linkFull('setup_2_xlzj'), bbs:linkBbs('xlzj')},
			{name:'shenmo', main:linkMain('shenmo'), reg:linkReg(), down:linkDown('shenmo'), full:linkFull('12'), bbs:linkBbs('shenmo')},
			{name:'sgsj', main:linkMain('sgsj'), reg:linkReg(), down:'http://sgsj.wanmei.com/download/client/index.shtml', full:linkFull('18'), bbs:linkBbs('sgsj')},
			{name:'yt', main:linkMain('yt'), reg:linkReg(), down:linkDown('yt'), full:linkFull('setup_2_yitian'), bbs:linkBbs('yt')},
			{name:'xljz', main:linkMain('xljz'), reg:linkReg(), down:linkDown('xljz'), full:linkFull('setup_2_xljz'), bbs:linkBbs('xljz')},
			{name:'xmhzx', main:linkMain('xmhzx'), reg:linkReg(), down:linkDown('xmhzx'), full:linkFull('8'), bbs:linkBbs('xmhzx')},
			{name:'sdxl', main:linkMain('sdxl'), reg:linkReg(), down:linkDown('sdxl'), full:linkFull('19'), bbs:linkBbs('sdxl')},
			{name:'xa', main:linkMain('xa'), reg:linkReg(), down:linkDown('xa'), full:linkFull('16'), bbs:linkBbs('xa')},
			{name:'sw', main:linkMain('sw'), reg:linkReg(), down:linkDown('sw'), full:linkFull('setup_2_sw'), bbs:linkBbs('sw')},
			{name:'seiya', main:linkMain('seiya'), reg:linkReg(), down:linkDown('seiya'), full:linkFull('21'), bbs:linkBbs('seiya')},
            {name:'zzbq', main:linkMain('zzbq'), reg:linkReg(), down:linkDown('zzbq'), full:linkFull('53'), bbs:linkBbs('zzbq')},
            {name:'hex', main:linkMain('hex'), reg:linkReg(), down:linkDown('hex'), full:linkFull('setup_2_hex'), bbs:linkBbs('hex')}
		]
	}
})();
//创建边栏side方法
function createSlide(skin){
	wmShare.addStyle(skin);
	var btnW = 24, allW = 120, allH = 218;
	//创建内容
	var shareBox = document.createElement('div');
	shareBox.setAttribute('id','share_slide');
	shareBox.innerHTML = '<div id=\"share_slide_btn\"></div>\
	<div id=\"share_slide_cont\">\
		<div class=\"share_slide_title\">分享到</div>\
		<ul id=\"share_slide_ul\">\
			<li id=\"slide_qqZone\"><a href=\"javascript:wmShare.qqZone(wmShare.url, wmShare.title, wmShare.pic)\">QQ空间</a></li>\
			<li id=\"slide_sinaT\"><a href=\"javascript:wmShare.sinaT(wmShare.url, wmShare.title, wmShare.pic)\">新浪微博</a></li>\
			<li id=\"slide_qqT\"><a href=\"javascript:wmShare.qqT(wmShare.url, wmShare.title, wmShare.pic)\">腾讯微博</a></li>\
			<li id=\"slide_renren\"><a href=\"javascript:wmShare.renren(wmShare.url)\">人人网</a></li>\
			<li id=\"slide_kaixin\"><a href=\"javascript:wmShare.kaixin(wmShare.url, wmShare.title)\">开心网</a></li>\
			<li id=\"slide_douban\"><a href=\"javascript:wmShare.douban(wmShare.url, wmShare.title)\">豆瓣网</a></li>\
			<li id=\"slide_baiduT\"><a href=\"javascript:wmShare.baiduT(wmShare.url)\">百度贴吧</a></li>\
		</ul>\
	</div>';
	shareBox.style.width = btnW + 'px'
	document.getElementsByTagName('body')[0].appendChild(shareBox);
	//鼠标操作
	shareBox.onmouseover = function(){
		wmShare.showShare(shareBox, allW);
	}
	function getEvent(event){
		return event ? event : window.event;
	}	
	document.onmousemove = function(event){
		event = getEvent(event);
		var eX = event.clientX,
			eY = event.clientY;
		if((document.documentElement.clientWidth - allW) > eX || (document.documentElement.clientHeight - allH)/2 > eY || 
		(document.documentElement.clientHeight + allH)/2 < eY){
			wmShare.hideShare(shareBox, btnW)
		}
	}
}
var shareLineHtml = '<li class=\"share_line_title\">分享到：</li>\
		<li><a class=\"share_line_qqZone\" href=\"javascript:wmShare.qqZone(wmShare.url, wmShare.title, wmShare.pic)\" title=\"分享到QQ空间\">QQ空间</a></li>\
		<li><a class=\"share_line_sinaT\" href=\"javascript:wmShare.sinaT(wmShare.url, wmShare.title, wmShare.pic)\" title=\"分享到新浪微博\">新浪微博</a></li>\
		<li><a class=\"share_line_qqT\" href=\"javascript:wmShare.qqT(wmShare.url, wmShare.title, wmShare.pic)\" title=\"分享到腾讯微博\">腾讯微博</a></li>\
		<li><a class=\"share_line_renren\" href=\"javascript:wmShare.renren(wmShare.url)\" title=\"分享到人人网\">人人网</a></li>\
		<li><a class=\"share_line_kaixin\" href=\"javascript:wmShare.kaixin(wmShare.url, wmShare.title)\" title=\"分享到开心网\">开心网</a></li>\
		<li><a class=\"share_line_douban\" href=\"javascript:wmShare.douban(wmShare.url, wmShare.title)\" title=\"分享到豆瓣网\">豆瓣网</a></li>\
		<li><a class=\"share_line_baiduT\" href=\"javascript:wmShare.baiduT(wmShare.url)\" title=\"分享到百度贴吧\">百度贴吧</a></li>';
//行内line方法-短
function createLineShort(){
	wmShare.addStyle('line');
	//创建页面
	var lineBox = document.getElementById('share_line');
	lineBox.innerHTML = '<ul class=\"share_line_ul clearfix\">' + shareLineHtml + '</ul>';
}
//行内长
function createLineLong(){
	wmShare.addStyle('line');
	var lineBox = document.getElementById('share_line');
	lineBox.innerHTML = '<div class=\"lineAuto\"><ul class=\"share_line_ul floatL clearfix\">' + shareLineHtml + '</ul>\
    <div id=\"fav_box\">|<span onclick=\"wmShare.addFav()\">添加到收藏夹</span></div></div>';
}
//行内顶部带导航
function createLineNavShare(num){
	wmShare.addStyle('line_nav');
	var lineBox = document.getElementById('share_line');
    var gameName = wmShare.link[num].name;
	lineBox.innerHTML = '<div class=\"NavShare1002 clearfix\">\
    	<div class=\"NavShare_nav\">\
			<a href=' + wmShare.link[num].main + ' target=\"_blank\">官网首页</a>|\
		    <a href=' + wmShare.link[num].reg + ' target=\"_blank\">注册账号</a>|\
		    <a href=' + wmShare.link[num].down + ' target=\"_blank\">游戏下载</a>|\
		    <a href=' + wmShare.link[num].full + ' target=\"_blank\">游戏充值</a>|\
		    <a href=' + wmShare.link[num].bbs + ' target=\"_blank\">游戏论坛</a>\
		</div>\
        <ul class="share_line_ul floatR clearfix">' + shareLineHtml + '</ul>';
}
if(wmShare.getParameter().share == null){
	createSlide(wmShare.skin);	
}else{
	var shareObject = eval('('+wmShare.getParameter().share+')');
	wmShare.skin = shareObject.skin || wmShare.skin;
	wmShare.url = shareObject.url || wmShare.url;
	wmShare.title = shareObject.title || wmShare.title;
	wmShare.pic = shareObject.pic || wmShare.pic;
	if((shareObject.type == undefined || shareObject.type == 'slide') && shareObject.type != 'none'){
		createSlide(wmShare.skin);	
	}
	if(shareObject.type == 'lineShort'){
		createLineShort();
	}
	if(shareObject.type == 'lineLong'){
		createLineLong();
	}
	if(shareObject.type == 'lineNav'){
		var game = shareObject.game,
			nameLen = wmShare.link.length,
			num;
		for (var i = 0; i< nameLen; i++){
			if (wmShare.link[i].name == game){
				num = i;
			}
		}
		createLineNavShare(num);
	}
}	
