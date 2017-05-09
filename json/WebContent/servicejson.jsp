<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="js/jquery-1.7.2.js"></script>
</head>
<body>
	<script type="text/javascript">
		$(function(){
			$("input[type='button']").click(function(){
				$.ajax({
					url:"AjaxJsonServlet",
					type:"post",
					dataType:"json",
					success:function(res){
						var result = "";	
					
						for(var i=0;i<res.length;i++){
							result += res[i].id+" "+res[i].productname+"<br/>";
						}
						$("#div1").html(result);
					},
					error:function(){
						alert("error");						
					},
				});
			});
		});
	</script>
	<h1>java ajax 后台json</h1>
	<div id="div1" style="border: 1px solid black; width: 600px;">
	</div>
	<input type="button" value="jquery+ajax()+json"/> 
</body>
</html>