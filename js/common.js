	// H5 plus事件处理
	function plusReady(){
		plus.navigator.setStatusBarStyle("light");
		// 设置系统状态栏背景为红色
		plus.navigator.setStatusBarBackground('#4495F1');
	}
	if(window.plus){
		plusReady();
	}else{
		document.addEventListener('plusready', plusReady, false);
	}
