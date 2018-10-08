// JavaScript Document

/*-- 隐藏显示层部分 --*/
function show(id){
	document.getElementById(id).style.display="block"; 
}
function hidd(id){
	document.getElementById(id).style.display="none"; 
}


function show_msg(n){
	var m = document.getElementById('m'+n);
	if(m){
		m.style.display = "none";
	}
	var z = document.getElementById('z'+n);
	if(z){
		z.style.display = "block";
	} 
}

function hidd_msg(n,msg){
	var m = document.getElementById('m'+n);
	if(m){
		m.style.display="block"; 
		m.className=msg; 
	}
	var z = document.getElementById('z'+n);
	if(z){
		z.style.display="none";
	} 
	 
	
}

/*-- head下拉 --*/
function head_show(){
	document.getElementById('enter').style.display="block"; 
//	document.getElementById('select_head').style.visibility="hidden"; 
}
function head_hidd(){
	document.getElementById('enter').style.display="none";
//	document.getElementById('select_head').style.visibility="inherit"; 
}

/*-- 切换层部分 --*/
function tab(num,befor,id){
	//var el=e.target?e.target.parentNode:e.srcElement.parentNode;
	//var pa=el.parentNode.getElementsByTagName("span");
	
	//var pa = document.getElementById("menu").getElementsByTagName("span");
	for(var i=1;i<=num;i++){
		if(i==befor)
		{
			document.getElementById("menu"+i).className = "current";
		}else{
			document.getElementById("menu"+i).className = "";
		}
	}
	//el.className="current";
	
	for(i=1;i<=num;i++){
		try{
			if(i==befor){
				document.getElementById(id+i).style.display="block";
			}else{
				document.getElementById(id+i).style.display="none";
			}
		}catch(e){ }
	}
	
	var m = document.getElementById("a7");
	if(m){
		m.style.display = "none";
	}
}

function cairead(){
	document.getElementById("a6").style.display="none";
	document.getElementById("a7").style.display="block";
}

/*-- 注册选填 --*/
function choice (a,b){
			if(document.getElementById('sf'+a).style.display=="none"){
				document.getElementById('sf'+a).style.display="block";
				document.getElementById('sf'+b).style.display="none";
			}else{
				document.getElementById('sf'+a).style.display="none";
				document.getElementById('sf'+a).style.display="block";
			}
			if(a==2){
				$('.querensf').show();
			}else{
				$('.querensf').hide();
			}
}

	
/*-- reg选填 --*/
function sel()
{
	var a =  document.getElementById('sel_box').value;
	
	for (s=0;s<=7;s++){
		if (s==a){document.getElementById('s'+s).style.display="block";}
		else {document.getElementById('s'+s).style.display="none";}
	}
}
function xuan(x)
{	
	for (s=0;s<=1;s++){
		if (s==x){document.getElementById('s'+s).style.display="block";}
		else {document.getElementById('s'+s).style.display="none";}
	}
}

function getElementPos(elementId) {
var ua = navigator.userAgent.toLowerCase();
var isOpera = (ua.indexOf('opera') != -1);
var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
var el = document.getElementById(elementId);
if(el.parentNode === null || el.style.display == 'none') {
return false;
}      
var parent = null;
var pos = [];     
var box;     
if(el.getBoundingClientRect)    //IE
{         
box = el.getBoundingClientRect();
var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
return {x:box.left + scrollLeft, y:box.top + scrollTop};
}else if(document.getBoxObjectFor)    // gecko    
{
box = document.getBoxObjectFor(el); 
var borderLeft = (el.style.borderLeftWidth)?parseInt(el.style.borderLeftWidth):0; 
var borderTop = (el.style.borderTopWidth)?parseInt(el.style.borderTopWidth):0; 
pos = [box.x - borderLeft, box.y - borderTop];
} else    // safari & opera    
{
pos = [el.offsetLeft, el.offsetTop]; 
parent = el.offsetParent;     
if (parent != el) { 
while (parent) { 
pos[0] += parent.offsetLeft; 
pos[1] += parent.offsetTop; 
parent = parent.offsetParent;
} 
}   
if (ua.indexOf('opera') != -1 || ( ua.indexOf('safari') != -1 && el.style.position == 'absolute' )) { 
pos[0] -= document.body.offsetLeft;
pos[1] -= document.body.offsetTop;         
}    
}              
if (el.parentNode) { 
parent = el.parentNode;
} else {
parent = null;
}
while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') { // account for any scrolled ancestors
pos[0] -= parent.scrollLeft;
pos[1] -= parent.scrollTop;
if (parent.parentNode) {
parent = parent.parentNode;
} else {
parent = null;
}
}
return {x:pos[0], y:pos[1]};
}

function  thsop(el,op){
	var z = getElementPos(el);
//alert(z.x);
	var l = el.offsetLeft;
	var t = el.offsetTop;
	document.getElementById(op).style.display = 'block';
	document.getElementById(op).style.left = (z.x-15)+'px';
	document.getElementById(op).style.top = (z.y+18)+'px';
}

function thscl(op){ document.getElementById(op).style.display = 'none'; }
