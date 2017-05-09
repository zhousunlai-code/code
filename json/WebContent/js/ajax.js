
var req;

/*
 * 创建异步请求
 */
function createXMLHttpReq(){
	//检查浏览器能力(IE)
	if(window.ActiveXObject){
		req=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//检查浏览器能力(非IE)
	else if(window.XMLHttpRequest){
		req=new XMLHttpRequest();
	}
}

/*
 * Get请求方式
 */
function useGet(params){
	createXMLHttpReq();
	req.onreadystatechange=callback;//设置回调方法
	req.open("GET","search?"+params,true);//设置请求的目标地址
	req.send(null);//发出请求
}

/*
 * Post请求方式
 */
function usePost(params){
	createXMLHttpReq();
	req.onreadystatechange=callback;//设置回调方法
	req.open("POST","search",true);//设置URL及是否异步
	req.setRequestHeader("content-type", "application/x-www-form-urlencoded");//设置请求数据的编码方式
	req.send(params);//发送请求
}
/*
 * 综合get和post方式
 */
function ajax(method,params,url,handle){
	createXMLHttpReq();
	
	req.onreadystatechange=handle;
	if(method=='POST'){
	   req.open(method,url,true);
	   req.setRequestHeader("content-type", "application/x-www-form-urlencoded");//设置请求数据的编码方式
	   req.send(params);
	   //alert('method:'+method+" url:"+url+" params:"+params)
	}else{
	   req.open(method,url+"?"+params,true);
	   req.send(null);
	}
}
/*
 * 回调处理函数,对响应进行处理
 */
function callback(){
	if(req.readyState==4){//处理完毕
		if(req.status==200){//正确响应
		   
		   var t=document.getElementById("div_screen");
		   //对应显示信息的 html控件存在
		   var msg=req.responseText;
		   if(t){
			  var ix=msg.indexOf(",");
			  if(ix==-1){
		         t.innerHTML="<font color='red'>"+msg+"</font>";//显示
		         return;
			  }else{
				 var strs=msg.split(",");     
				 if(strs!=null&&strs.length>0){
					var dis="";
					for(var i=0;i<strs.length;i++){
						dis+=strs[i]+" ";
					}
					t.innerHTML=dis;
				 }else{
					t.innerHTML="<font color='red'>"+msg+"</font>";//显示
				 }
			  }
			  
		   }
		req=null;
	 }
   }
}

window.onload=function(){
	
	var btn=document.getElementById("query");
	var cont=document.getElementById("content");
	if(btn&&cont){
	   btn.onclick=function(){
		   ajax('POST',"uid="+cont.value,"servlet/AjaxServlet",callback);
	   }
	}
}
