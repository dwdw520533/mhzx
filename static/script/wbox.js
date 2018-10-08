/**
* wBox是一款基于jquery1.4.2开发的一款轻量级弹出窗口
* 该弹出窗口水平垂直居中，当拖拽浏览器大小时能保证弹出窗口随着浏览器变化而自动调整位置，始终保持相对浏览器居中
**
**/

(function($){
	
	$.fn.wBox = function(id){
		
		/*
			判断浏览器高度
		*/
		if(window.innerHeight){
			winHeight = window.innerHeight;
		}else if(document.body && document.documentElement.clientHeight){
			winHeight = document.documentElement.clientHeight;
		}
		
		function scrollTop()
		{
			return document.body.scrollTop || document.documentElement.scrollTop;	
		}
		
		var _this = this;
		
		/*
			弹出层屏幕居中
		*/
		var LayerWidth = $(id).width(),LayerHeight = $(id).height();
		var LayerTop = scrollTop() + (winHeight - LayerHeight)/2;
		$(id).css({position:"absolute","z-index":"99",left:"50%",marginLeft:-LayerWidth/2,top:LayerTop}).show().find(".wBox_close").click(function(){_this.close();}); 

		
		/*
			背景弹出层属性设置
		*/
		var LayerBg = $("<div id='popwindowbg'></div>");
		var BodyTop = $("body").height();
		var LayerTop = (BodyTop < winHeight ? winHeight :  BodyTop);
		$(LayerBg).css({width:"100%",height:"100%",background:"#000",opacity:"0.6",position:"absolute",left:"0",top:"0","z-index":"1",height:LayerTop}).dblclick(function(){
			_this.close()
		}).appendTo("body").fadeIn(300);
		
		this.close = function(){
			if(LayerBg){
				$(LayerBg).remove();	
			}
			$(".popwindow").fadeOut(500);
		};
		
		/*
			设置拖拽浏览器时wBox的位置
		*/
		function setPosition(){
			if(window.innerHeight){
				winHeight = window.innerHeight;
			}else if(document.body && document.documentElement.clientHeight){
				winHeight = document.documentElement.clientHeight;
			}
			var LayerTop = scrollTop() + (winHeight - LayerHeight)/2;
			$(id).css({top:LayerTop});
			//背景弹出层属性设置
			var BodyTop = $("body").height();
			var LayerTop = (BodyTop < winHeight ? winHeight :  BodyTop);
			$(LayerBg).css({height:LayerTop});
		}
		
		$(window).resize(function(){
			setPosition();					  
		})
			
	}	
})(jQuery)

function wBoxHide()
{
	$("#popwindowbg").fadeOut(500);
	$(".popwindow").fadeOut(500);
}

function wBoxHidePop()
{
	$("#popwindowbg_1").fadeOut(500);
	$(".popwindow").fadeOut(500);
}