$(function(){
	//搜索栏
	var gudingsousuochuangkou=$(".gudingsousuochuangkou")[0];
	var wantop=$(".Wan")[0].offsetTop;
	var gudingflag=true;
	window.onscroll=function(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
			if(scroll>wantop&&gudingflag){
				gudingflag=false;
				animate(gudingsousuochuangkou,{top:0},500);
			}
			if(scroll<wantop){
				gudingflag=true;
				animate(gudingsousuochuangkou,{top:-50},500);
			}
		}
	//top
	var toprightli=$(".top_rightli");
	var toprightliphone=$(".top_rightliphone")[0];
	var lisanjiao=$(".lisanjiao",toprightliphone)[0];
	var phoneimg=$(".phoneimg",toprightliphone)[0];
	var toprighthover=$(".toprighthover");
	for(var i=0;i<toprighthover.length;i++){
		toprightli[i].index=i;
		toprightli[i].onmouseover=function(){
			toprighthover[this.index].style.display="block";
		}
		toprightli[i].onmouseout=function(){
			toprighthover[this.index].style.display="none";
		}
	}
	toprightliphone.onmouseover=function(){
		lisanjiao.style.opacity=1;
		phoneimg.style.opacity=1;
	}
	toprightliphone.onmouseout=function(){
		lisanjiao.style.opacity=0;
		phoneimg.style.opacity=0;
	}
	var bannerBottom=$(".banner_Bottom")[0];
	var bannerbottom=$(".banner_bottom")[0];
	var bg=$(".banner_bg",bannerbottom)[0];
	var imgs=$("img",bannerbottom);
	var lis=$("li",$(".banner_btn",bannerbottom)[0]);
	imgs[0].style.opacity=1;
	lis[0].style.backgroundColor="#F1F1F1";
	lis[0].style.border="1px solid #A2A2A2";
	lis[0].style.width="18px";
	lis[0].style.height="18px;"
	var index=0;
	function move(){
		index++;
		if(index==imgs.length){
			index=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
			lis[i].style.backgroundColor="";
		}
		imgs[index].style.opacity=1;
		lis[index].style.backgroundColor="#F1F1F1";
		lis[index].style.border="1px solid #A2A2A2";
		lis[index].style.width="18px";
		lis[index].style.height="18px;"
	}
	var t=setInterval(move,2000);
	bg.onmouseover=function(){
		clearInterval(t);
	}
	bg.onmouseout=function(){
		t=setInterval(move,2000);
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				imgs[j].style.opacity=0;
				lis[j].style.backgroundColor="";
			}
			imgs[this.index].style.opacity=1;
			lis[this.index].style.backgroundColor="#F1F1F1";
			lis[this.index].style.border="1px solid #A2A2A2";
			lis[this.index].style.width="18px";
			lis[this.index].style.height="18px;"
		}
	}
	//万件好礼免费送
	var wan=$(".wan")[0];
	var wanas=$("a",wan);
	var wanimgs=[];
	var wanzhezhao=[];
	for(var i=0;i<wanas.length;i++){
		wanimgs.push(wanas[i].childNodes[1]);
		wanzhezhao.push(wanas[i].childNodes[3]);
	}
	for(var i=0;i<wanas.length;i++){
		wanas[i].index=i;
		wanas[i].onmouseover=function(){
			wanzhezhao[this.index].style.opacity=0.4;
		}
		wanas[i].onmouseout=function(){
			wanzhezhao[this.index].style.opacity=0;
		}
	}
	//潮品
	var chaobox=$(".chao")[0];
	var as=$("a",chaobox);
	var imgbox=$(".chao_imgbox",chaobox);
	var imgsbox=[];
	for(var i=0;i<as.length;i++){
		imgsbox.push(as[i].childNodes[0]);
	}
	for(var i=0;i<as.length;i++){
		imgbox[i].index=i;
		imgbox[i].onmouseover=function(){
			animate(imgsbox[this.index],{width:125,height:125},500)
		}
		imgbox[i].onmouseout=function(){
			animate(imgsbox[this.index],{width:110,height:110},500)
		}
	}
	//Hot
	var hot=$(".Hot")[0];
	var tds=$("td",hot);
	var tdboxs=$(".tdbox",hot);
	for(var i=0;i<tds.length;i++){
		tds[i].index=i;
		tds[i].onmouseover=function(){
			tdboxs[this.index].style.display="block";
		}
		tds[i].onmouseout=function(){
			tdboxs[this.index].style.display="none";
		}
	}
	//亲子时光
	var contentboxmid=$(".content_boxmid");
	var conimgs=[];
	for(var i=0;i<contentboxmid.length;i++){
		conimgs.push($("img",contentboxmid[i]));
		for(var j=0;j<conimgs[0].length;j++){
			conimgs[i][j].a=i;
			conimgs[i][j].b=j;
			conimgs[i][j].onmouseover=function(){
				animate(conimgs[this.a][this.b],{right:20},500)
			}
			conimgs[i][j].onmouseout=function(){
				animate(conimgs[this.a][this.b],{right:5},500)
			}
		}
	}
	var contentboxrb=$(".content_boxrb");
	var contentboxrbimg=[];
	for(var i=0;i<contentboxrb.length;i++){
		contentboxrbimg.push($("img",contentboxrb[i])[0]);
	}
	for(var j =0;j<contentboxrbimg.length;j++){
		contentboxrbimg[j].index=j;
		contentboxrbimg[j].onmouseover=function(){
			animate(contentboxrbimg[this.index],{right:20},500)
		}
		contentboxrbimg[j].onmouseout=function(){
			animate(contentboxrbimg[this.index],{right:5},500)
		}
	}
	//品牌旗舰
	var pin=$(".Pin")[0];
	var pinbox=$(".pin_middlebox",pin);
	var pinimgs=[];
	for(var i=0;i<pinbox.length;i++){
		pinimgs.push($("img",pinbox[i]));
		pinimgs[i][0].index=i;
		pinimgs[i][0].onmouseover=function(){
			pinimgs[this.index][0].style.opacity=0.7;
		}
		pinimgs[i][0].onmouseout=function(){
			pinimgs[this.index][0].style.opacity=1;
		}
	}
	//猜你喜欢
	var like=$(".Like")[0];
	var likeimgs=$("img",like);
	for(var i=0;i<likeimgs.length;i++){
		likeimgs[i].index=i;
		likeimgs[i].onmouseover=function(){
			likeimgs[this.index].style.opacity=0.7;
		}
		likeimgs[i].onmouseout=function(){
			likeimgs[this.index].style.opacity=1;
		}
	}
})