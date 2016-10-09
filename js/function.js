//1.类名方式去获取元素   解决浏览器中通过类名获取元素的兼容性问题  IE不支持类名获取元素
//document.getElementsByClassName('')    支持有结果  是个函数，不支持为undefined
/*
getClass(classname,range)
classname  [string] 要获取的元素类名
range  [object] 查找的元素所在的一个范围    document||获取的范围

*/
function getClass(classname,range){
	// 判断当前浏览器是否支持  classname  获取
	if (document.getElementsByClassName) {
		// alert('支持');
		return range.getElementsByClassName(classname);      //返回一个数组，下面也应该返回一个数组，统一，方便处理
	}else{
		//alert('不支持');
		var all=range.getElementsByTagName("*");
		//all=[div,div,head,body...]
		var arr=[];
		for(var i=0;i<all.length;i++){
			if(cheakClass(all[i].className,classname)){
				arr.push(all[i]);
			}
		}
		return arr;
	}
}
/*多个类名时，去检测是否包含需要查找的类名    返回值  true||false
  "box inner main warp"  ==>   [box,inner,main,warp]
  "inner"
*/
// function cheakClass(tagclass,classname){
// 	var arr=tagclass.split(" ");
// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i]==classname){
// 			return true ;
// 		}
// 	}
// 	return false;
// }
// 2.多个类名时获取到同名要取出的元素
function cheakClass(tagclass,classname){
	if(tagclass.match(classname)){      //match方法：匹配到，则返回匹配到的字符串；否则返回null
		return true;
	}
	return false;
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}

//3.实现功能   1.通过类名，id名，标签获取元素
// 			 2.加载页面
function $(selector,range){
	range  = range || document;
	if(typeof selector=="string"){
		// alert("获取");
		if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substr(1));
		}else if(selector.charAt(0)=="."){
			return getClass(selector.substr(1),range);
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector);
		}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1));
		}
	}else if(typeof selector=="function"){
		// alert("加载");
		 window.onload=selector;
	}
}
// 4.解决获取文本内容的兼容性问题且可以给文本重新赋值
function text(obj,val){
		if(val==undefined){
			if(obj.textContent!=undefined){
				return obj.textContent;
			}else{
				return obj.innerText;
			}
		}else{
			if(obj.textContent!=undefined){
				 obj.textContent=val;
			}else{
				 obj.innerText=val;
			}
		}
		
	}
//  5.
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}
//  6.获取子节点中出去注释和换行的函数
function getChilds(obj){
	var childs=obj.childNodes;
	var arr=[];
	for(var i=0;i<childs.length;i++){
		if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))){
			 arr.push(childs[i]);
		}
	}
	return arr;
}
//去除字符串两边的空格    g是全局
/*
		"     erdsg      "

*/
function trim(child){
	return child.replace(/^\s+|\s+$/g,"");
}
//获取第一个子节点
function getFirst(parent){
	return getChilds(parent)[0]; 
}
//获取最后一个子节点
function getLast(parent){
	var childs=getChilds(parent);
	return childs[childs.length-1];
}
//获取任意一个节点
//获得下一个兄弟节点的引用    nextSibling
function getNext(obj){
	var next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
		next = next.nextSibling;
		if(!next){
			return false;
		}
	}
	return next;
}
//获取上一个节点
function getUp(obj){
	var up=obj.previousSibling;
	if(!up){
			return false;
		}
	// 判断up
	while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=="")){
		up=obj.previousSibling;
		if(!up){
			return;
		}
	}
	return up;
}
//  创建之后追加到指定位置   在指定元素之前加
function setBefore(obj1,obj2){
	var parent=obj2.parentNode;
	return parent.insertBefore(obj1,obj2);
}
//  创建之后追加到指定位置   在指定元素之后加
function setAfter(obj1,obj2){
	var parent=obj2.parentNode;
	var next=getNext(obj2);
	if(next){
		return parent.insertBefore(obj1,next);
	}else{
		return parent.appendChild(obj1);
	}
}

