class Index{
	constructor(){
		this.init()
	}
	
	init(){
		this.initMui();
		this.initEvent();
	}
	
	initEvent(){
		document.querySelectorAll(".mui-table-view").forEach((i) => {
			i.onclick = function(e){
				mui.openWindow({
					url:"./details.html"
				})
			}
		})
	}
	
	initMui(){
		mui.init({
			swipeBack: true //启用右滑关闭功能
		});
		mui.plusReady(function() {
			var self = plus.webview.currentWebview(); // 设置凸起大图标为水平居中


			// 创建子webview窗口 并初始化
			var aniShow = {};
			util.initSubpage(aniShow);
			
			var 	nview = plus.nativeObj.View.getViewById('tabBar'),
				activePage = plus.webview.currentWebview(),
				targetPage,
				subpages = util.options.subpages,
				pageW = window.innerWidth,
				currIndex = 0;
			
				
			/**
			 * 根据判断view控件点击位置判断切换的tab
			 */
			nview.addEventListener('click', function(e) {
				
				var clientX = e.clientX;
				
				if(clientX > 0 && clientX <= parseInt(pageW * 0.20)) {
					currIndex = 0;
				} else if(clientX > parseInt(pageW * 0.20) && clientX <= parseInt(pageW * 0.40)) {
					currIndex = 1;
				} else if(clientX > parseInt(pageW * 0.40) && clientX <= parseInt(pageW * 0.60)) {
					currIndex = 2;
				} else if(clientX > parseInt(pageW * 0.60) && clientX <= parseInt(pageW * 0.80)) {
					currIndex = 3;
				} else {
					currIndex = 4;
				}
				
				// 匹配对应tab窗口	
				if(currIndex > 0) {
					targetPage = plus.webview.getWebviewById(subpages[currIndex - 1]);
				} else {
					targetPage = plus.webview.currentWebview();
				}

				if(targetPage == activePage) {
					return;
				}

				//底部选项卡切换
				util.toggleNview(currIndex);
				// 子页面切换
				util.changeSubpage(targetPage, activePage, aniShow);
				//更新当前活跃的页面
				activePage = targetPage;
			});
		});
	}
}

new Index;
