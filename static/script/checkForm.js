function isNull(obj,str){//�Ƿ��ֵ by lyj

  if(obj.val() === undefined || obj.val() === ""){
    alert(str);
    obj.focus();
    return true;
  }
  return false;
}

function notPhonenumber(name,str){
	var patrn=/^(0[0-9]{2,3}\-)?[2-9][0-9]{6,7}$/;
	if(!patrn.exec(trim(name))){
		alert(str);
    	name.focus();
    	return true;
    }
    return false;
}

function notLength(name,length,str){//�����Ƿ�� by lyj
  if(trim(name).length!=length){
    alert(str);
    name.focus();
    return true;
  }
  return false;
}

function notNumber(name,str){//�Ƿ����� by lyj ������д
  if(trim(name)==""||isNaN(trim(name))){
    alert(str);
    name.focus();
    return true;
  }
  return false;
}

function notNumber0(name,str){//�Ƿ����� by lyj δ��дĬ��0
  if(trim(name)==""){
    name=0;
    return false;
  }
  else if(isNaN(trim(name))){
    alert(str);
    name.focus();
    return true;
  }
  return false;
}
function notNumber1(name,str){//�Ƿ����� by lyj
  if(trim(name)!=""){
      if(isNaN(trim(name))){
        alert(str);
        name.focus();
       return true;
     }
  }
  return false;
}
function notLandN(name,length,str){//�̶����ȵ�����
  if(trim(name).length!=length||isNaN(trim(name))){
    alert(str);
    name.focus();
    return true;
  }
  return false;
}

function notNY(name,str){//�Ƿ�Ϸ����� by lyj
  if(trim(name)==""||trim(name).length!=6||isNaN(trim(name))){
    alert(str);
    name.focus();
    return true;
  }
  if(trim(name).substring(4,6)>12){
    alert("�·ݲ��ܴ���12,��˶�!");
     name.focus();
     return true;
  }
  return false;
}
function notNY1(name,str){//�Ƿ�Ϸ����� by lyj
  if(trim(name).length!=6||isNaN(trim(name))){
    alert(str);
    name.focus();
    return true;
  }
  if(trim(name).substring(4,6)>12){
    alert("�·ݲ��ܴ���12,��˶�!");
     name.focus();
     return true;
  }
  return false;
}
function notNYR(name,str){//�Ƿ�Ϸ����� �� by wkh
  if(trim(name)==""||trim(name).length!=8||isNaN(trim(name))){
    alert(str);
    name.focus();
    return true;
  }
  if(trim(name).substring(4,6)>12){
    alert("�·ݲ��ܴ���12,��˶�!");
     name.focus();
     return true;
  }
  if(trim(name).substring(6,8)>31){
    alert("���ڲ��ܴ���31,��˶�!");
     name.focus();
     return true;
  }
  return false;
}
function notNYR1(name,str){//�Ƿ�Ϸ����� �� by wkh
  if(trim(name).length!=8||isNaN(trim(name))){
    alert(str);
    name.focus();
    return true;
  }
  if(trim(name).substring(4,6)>12){
    alert("�·ݲ��ܴ���12,��˶�!");
     name.focus();
     return true;
  }
  if(trim(name).substring(6,8)>31){
    alert("���ڲ��ܴ���31,��˶�!");
     name.focus();
     return true;
  }
  return false;
}
//2003-01-01
function notNYR2(name,str){//�Ƿ�Ϸ����� �� by wkh
  if(trim(name).length==0){
     return false;
  }
  if(trim(name).length!=10){
    alert(str+"�ĸ�ʽ���ԣ���ʽӦ����ˣ�2003-01-01");
    name.focus();
    return true;
  }
   if(trim(name).substring(4,5)!="-"){
     alert(str+"�������·�֮��Ӧ����l�Ӻ�,��˶�!");
     name.focus();
     return true;
  }
  if(trim(name).substring(5,7)>12){
    alert(str+"���·ݲ��ܴ���12,��˶�!");
     name.focus();
     return true;
  }
  if(trim(name).substring(7,8)!="-"){
     alert(str+"���·�������֮��Ӧ����l�Ӻ�,��˶�!");
     name.focus();
     return true;
  }
  if(trim(name).substring(8,9)>31){
    alert(str+"�����ڲ��ܴ���31,��˶�!");
     name.focus();
     return true;
  }
  return false;
}
function notPost(name){//�Ƿ��ʱ� by lyj
  if(trim(name).length!=6||isNaN(trim(name))){
    alert("��������ȷ����������!");
    name.focus();
    return true;
  }
  return false;
}

function notEmail(name){//�Ƿ�����
  var str,re;
  re=/([\w|-]+@[\w|-]+\.[\w|-]+)(\.?[\w|-]*)(\.?[\w|-]*)/i;

  re.exec(trim(name));
  if (RegExp.$3!=""&&RegExp.$3!="."&&RegExp.$2!=".")
    str=RegExp.$1+RegExp.$2+RegExp.$3;
  else
    if (RegExp.$2!=""&&RegExp.$2!=".")
      str=RegExp.$1+RegExp.$2 ;
  else
    str=RegExp.$1 ;
  if (str!=trim(name))
  {
    alert("����д��ȷ���ʼ���ַ");
    name.focus();
    return true;
  }
  return false;
}


function notFloat(name,str){// ��С�������
  var s = parseFloat(trim(name));
  if(isNaN(s)){
    alert(str);
    name.focus();
    return true;
  }
  else
    return false;
}
function isIntNumber(name,str){ //
    if( isNaN(trim(name))){
         alert(str);
        name.focus();
        return true;
    }
    var s = parseInt(trim(name));
    if(trim(name)!=s){
        alert(str);
       name.focus();
        return true;
    }
    else
        return false;
}

function notIntNumber(name,str){
    if( isNaN(trim(name))){
        alert(str);
        name.focus();
        return true;
    }

	if(name.indexOf('.')>=0){
		alert(str);
		name.focus();
		return true;
	}

    var s = parseInt(trim(name));
    if(trim(name)!=s){
       alert(str);
       name.focus();
       return true;
    }
    else
        return false;
}


function trim(str)
{
    var len;
    var i,j;
    len = str.length;
    i=0;
    j=0;
    while(j<len)
    {
        if(str.charAt(i) == " ")
            i++;
        else
            break;
        j++;
    }
    str = str.substr(i,len-i);
    len = str.length;
    i=len -1;
    j=len-1;
    while(j>0)
    {
        if(str.charAt(i) == " ")
            i--;
        else
            break;
        j--;
    }
    str = str.substr(0,j+1);
    return str;
}
//////////////////////////////////////////////////


function isStringEmputy(str)
{
	var s;
        s = trim(str);
	str = s;
	if(s.length<1)
		return true;
	return false;
}

function replace(str1,c1,c2)
{
	var len,i,c,str;
	str = "";
	len = str1.length;
	for(i=0;i<len;i++)
	{
		c = str1.charAt(i);
		if(c== c1)
			c = c2;
		str += c;
	}
	return str;
}


function toSafe(str)
{
	var re;
	re = /'/g;
	str = str.replace(re,"��");
	re =/\)/g;
	str = str.replace(re,"��");
	re = /\(/g;
	str = str.replace(re,"��");
	re = /%/g;
	str = str.replace(re,"��");
	re = /\[/;
	str = str.replace(re,"��");
	re = /\]/;
	str = str.replace(re,"��");
	return str;
}

function makeToSafe(formName)
{
	var i,form;
	form = eval(formName);
	for(i=0;i<form.elements.length;i++)
	{
		if(form.elements[i].type=="text" || form.elements[i].type=="textarea")
		{
			form.elements[i] = toSafe(form.elements[i]);
		}
	}
}

function notValidName(obj)
{
	var objValue = obj;
    for(var i=0;i<objValue.length;i++){
            var temtchar = objValue.charAt(i);
          // alert(temtchar+":"+temtchar.charCodeAt(0));
            var Digit = CheckDigit(temtchar);
            var Alphabet = CheckAlphabet(temtchar);
            var line=CheckLine(temtchar);
            if(!Digit&&!Alphabet&&!line){
                 alert("��¼�����������ĸ�����֡��»��ߵ����!");
			     return true;
            }
           }
  	return false;
}
function notValidPassWord(obj)
{
	var objValue = obj;
    for(var i=0;i<objValue.length;i++){
            var temtchar = objValue.charAt(i);
          //  alert(temtchar+":"+temtchar.charCodeAt(0));
            var Digit = CheckDigit(temtchar);
            var Alphabet = CheckAlphabet(temtchar);
            var line=CheckLine(temtchar);
            if(!Digit&&!Alphabet&&!line){
                 alert("�������������ĸ�����֡��»������!");
			     return true;
            }
           }
  	return false;
}
function notChinese(obj,alertValue){
	var objValue = obj;
    for(var i=0;i<objValue.length;i++){
            var temtchar = objValue.charAt(i);
         //  alert(temtchar+":"+temtchar.charCodeAt(0));
            var Digit = CheckDigit(temtchar);
            var Alphabet = CheckAlphabet(temtchar);

            if(!Digit&&!Alphabet){
                 alert(alertValue+"����������ĸ���������!");
			     return true;
            }
           }

	return false;
}
function CheckDigit(DigitStr){
        var flag = true;
        var Digitlength = DigitStr.length;
        for(var i=0;i<Digitlength;i++){
                if(DigitStr.charCodeAt(i)<48 || DigitStr.charCodeAt(i)>57){
                        flag = false;
                        break;
                }
        }

        return flag;
}
//�������ĸ,��������ĸ
function CheckAlphabet(Str){
        var flag = true;
        var Strlength = Str.length;
        for(var i=0;i<Strlength;i++){
                if(Str.charCodeAt(i)<65 ||(90<Str.charCodeAt(i) && Str.charCodeAt(i)<97) || Str.charCodeAt(i)>122){
                   flag = false;
                        break;
                }
        }

        return flag;
}
//����»���(_)
function CheckLine(Str){
          var flag = true;
        var Strlength = Str.length;
        for(var i=0;i<Strlength;i++){
               if(Str.charCodeAt(i)!=95 ){
                  flag = false;
                  break;
              }
        }
        return flag;
}
function convertToHtml(str)
{
	var re;
	re  = / /g;
	str = str.replace(re,"&nbsp;");
	re  = /\r\n/g;
	str = str.replace(re,"<br>");
	return str;
}

function makeToHtml(formName)
{
	var form;
	form = eval(formName);
	for(i=0;i<form.elements.length;i++)
		if(form.elements[i].type=="textarea")
			form.elements[i] = convertToHtml(form.elements[i]);
}


function printinfo(){

     form1.target="_blank";
  var action= form1.action;
  if(form1.printflag="undefine"){
    test=action;
    if(test.indexOf("BeanAddServlet") >0){
      alert("�뱣����Ϣ����ʹ�ô�ӡ����");
      form1.target="_self";
      return;
    }
    var a=test.indexOf("Update");
    if(a>0)  test = test.substring(0,a)+"DisplayServlet"+test.substring(a+13);
    //alert(test);
    if(test.indexOf("?")>0)
      form1.action=test+"&printflag=1";
    else
      form1.action=test+"?printflag=1";
  }else{
    form1.all.printflag="1";
  }
  form1.submit();
  form1.action=  action;
  form1.target="_self";
}

//����Ƿ�������
function checkInputValue(inputvalue){
     var i,len,str;
         str = inputvalue;
         len = str.length;
         str = str.toUpperCase();
         for(i=0;i<len;i++)
         {
               c = str.charAt(i);
               if (c>="0" && c<="9")
               {
                     return true;
               }
         }
	return false;
}


//�޸ĺ���ʾ�Ƿ񷵻��б�
  function confirmPage(strurl){
      if(confirm("����ɹ���ѡ��'ȷ��'�ɷ����б�;")){
          window.open(strurl,'_self');
      }
    }
//��������ֵ��С�����λ��
function checknumber(value,num,str){
  if(value!=""){
       if(value.indexOf(".")>0){
            var temp=value.length-(value.indexOf(".")+1);
            if(temp>num){
                 alert(str+"��С����ֻ����"+num+"λ��");
                 return true;
            }
       }
  }
  return false;
}

function isCharsInBag (s, bag)
{
  var i,c;
  for (i = 0; i < s.length; i++)
  {
        c = s.charAt(i);//�ַ�s�е��ַ�
    if (bag.indexOf(c) > -1)
        return c;
  }
  return "";
}
//��麯��:
function ischinese(name)
{

var errorChar;
var badChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789><,[]{}?/+=|\\'\":;~!#$%()`";
     errorChar = isCharsInBag(name, badChar)
        if (errorChar != "" )
    {
    alert("��������������\n");
     name.focus();
        return true;
    }

    return false;
}
 //��麯��:
function ischineseordata(name)
{

var errorChar;
var badChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz><,[]{}?/+=|\\'\":;~!#$%()`";
     errorChar = isCharsInBag(name, badChar)
        if (errorChar != "" )
    {
    alert("�������������Ļ�����\n");
     name.focus();
        return true;
    }

    return false;
}

function checkPasswd(s){
	//alert("s："+s);
	var patrn=/^[a-zA-Z0-9]{6,16}$/;
	if (patrn.exec(s)){
		return true
	}else{
		return false
	}
}