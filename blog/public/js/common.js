



;(function($){
	//1.登录注册面板的切换
	var $register = $('#register')
	var $login = $('#login')

	//1.1 从登录面板到注册面板
	$('#go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	//1.2 从注册面板到登录面板
	$('#go-login').on('click',function(){
		$register.hide()
		$login.show()
	})


	/*
	$('.carousel').carousel({
	  interval: 2000
	})
	*/
})(jQuery);