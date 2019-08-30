(function() {

	function LoadBaiduMapScript() {
		//console.log("初始化百度地图脚本...");
		const AK = "L4GbGdqb4OazOI2q1PWdsYOvqyngSN7V";
		const BMap_URL = "https://api.map.baidu.com/api?v=2.0&ak=" + AK + "&s=1&callback=onBMapCallback";
		return new Promise((resolve, reject) => {
			// 如果已加载直接返回
			if(typeof BMap !== "undefined") {
				resolve(BMap);
				return true;
			}
			// 百度地图异步加载回调处理
			window.onBMapCallback = function() {
				console.log("百度地图脚本初始化成功...");
				resolve(BMap);
			};
			// 插入script脚本
			let scriptNode = document.createElement("script");
			scriptNode.setAttribute("type", "text/javascript");
			scriptNode.setAttribute("src", BMap_URL);
			document.body.appendChild(scriptNode);
		});
	}
	LoadBaiduMapScript();

	window.onload = function() {
		var map = new BMap.Map("map");
		map.centerAndZoom(new BMap.Point(116.318759, 40.040013), 13);
		map.enableScrollWheelZoom();

		function addweizhi(w, n, logo) { //前两个参数是坐标位置，第三个参数是头像  
			var point = new BMap.Point(w, n); //标注坐标
			var myIcon = new BMap.Icon(logo, new BMap.Size(31, 46));
			var marker = new BMap.Marker(point, {
				icon: myIcon
			}); // 创建标注
			map.addOverlay(marker); //将标注添加到地图上
			marker.addEventListener('click', function() {
				if(logo == "img/people.png") {
					document.querySelector('.message_person').style.zIndex = 1;
					setTimeout(() => {
						document.querySelector('.message_person').style.zIndex = 0;
					}, 2500)
				} else {
					document.querySelector('.equipment').style.zIndex = 1;
					setTimeout(() => {
						document.querySelector('.equipment').style.zIndex = 0;
					}, 2500)
				}
			})
		}
		addweizhi(116.318759, 40.040013, "img/people.png")
		addweizhi(116.364594, 39.96725, "img/error.png")
		addweizhi(116.40504, 40.012384, "img/error.png")
	}

})()