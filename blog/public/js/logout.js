/*
* @Author: Chris
* @Date:   2019-10-18 21:14:05
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-18 21:18:00
*/
;(function($){
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout'
		})
		.done(function(result){
			window.location.href = "/"
		})
		.fail(function(err){
  		alert("请求失败,请稍后再试")
		})
	})
})(jQuery);