
var req;

/*
 * �����첽����
 */
function createXMLHttpReq(){
	//������������(IE)
	if(window.ActiveXObject){
		req=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//������������(��IE)
	else if(window.XMLHttpRequest){
		req=new XMLHttpRequest();
	}
}

/*
 * Get����ʽ
 */
function useGet(params){
	createXMLHttpReq();
	req.onreadystatechange=callback;//���ûص�����
	req.open("GET","search?"+params,true);//���������Ŀ���ַ
	req.send(null);//��������
}

/*
 * Post����ʽ
 */
function usePost(params){
	createXMLHttpReq();
	req.onreadystatechange=callback;//���ûص�����
	req.open("POST","search",true);//����URL���Ƿ��첽
	req.setRequestHeader("content-type", "application/x-www-form-urlencoded");//�����������ݵı��뷽ʽ
	req.send(params);//��������
}
/*
 * �ۺ�get��post��ʽ
 */
function ajax(method,params,url,handle){
	createXMLHttpReq();
	
	req.onreadystatechange=handle;
	if(method=='POST'){
	   req.open(method,url,true);
	   req.setRequestHeader("content-type", "application/x-www-form-urlencoded");//�����������ݵı��뷽ʽ
	   req.send(params);
	   //alert('method:'+method+" url:"+url+" params:"+params)
	}else{
	   req.open(method,url+"?"+params,true);
	   req.send(null);
	}
}
/*
 * �ص�������,����Ӧ���д���
 */
function callback(){
	if(req.readyState==4){//�������
		if(req.status==200){//��ȷ��Ӧ
		   
		   var t=document.getElementById("div_screen");
		   //��Ӧ��ʾ��Ϣ�� html�ؼ�����
		   var msg=req.responseText;
		   if(t){
			  var ix=msg.indexOf(",");
			  if(ix==-1){
		         t.innerHTML="<font color='red'>"+msg+"</font>";//��ʾ
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
					t.innerHTML="<font color='red'>"+msg+"</font>";//��ʾ
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
