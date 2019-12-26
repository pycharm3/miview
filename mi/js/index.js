$(function(){
	// header start
	(function(){
		var $ordericon = $("#h_main .h_m_right .h_m_r_ordericon");
		var $hide = $("#h_main .h_m_right .h_m_r_ordericon .h_m_r_ordericon_hide");
		// jquery.hove方法第一个func代表鼠标移入操作，第二个func代表鼠标移出操作
		// display block代表显示 none代表隐藏
		$ordericon.hover(function(){
			$hide.stop(true).slideDown();
		},function(){
			$hide.stop(true).slideUp();
		});
	})();
});
